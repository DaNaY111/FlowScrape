import { ExecutionEnvironment } from "@/types/executor";
import { ExtractDataWithAITask } from "../task/ExtractDataWithAI";
import prisma from "@/lib/prisma";
import { symmetricDecrypt } from "@/lib/encryption";
import { GoogleGenAI } from "@google/genai";

export async function ExtractDataWithAIExecutor(
  environment: ExecutionEnvironment<typeof ExtractDataWithAITask>
): Promise<boolean> {
  try {
    const credentials = environment.getInput("Credentials");
    if (!credentials) {
      environment.log.error("input->credentials not defined");
    }

    const prompt = environment.getInput("Prompt");
    if (!prompt) {
      environment.log.error("input->prompt not defined");
    }

    const content = environment.getInput("Content");
    if (!content) {
      environment.log.error("input->content not defined");
    }

    const credential = await prisma.credential.findUnique({
      where: {
        id: credentials,
      },
    });

    if (!credential) {
      environment.log.error("credential not found");
      return false;
    }

    const plainCredentialValue = symmetricDecrypt(credential.value);
    if (!plainCredentialValue) {
      environment.log.error("cannot decrypt credential");
      return false;
    }

    const ai = new GoogleGenAI({ apiKey: plainCredentialValue });

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: `
You are a webscraper AI that extracts selectors from raw HTML. 

Rules:
- DO NOT return any HTML.
- DO NOT return markdown blocks like \`\`\`json.
- DO NOT include any explanation or extra text.
- Only return a single valid JSON object.

If data is missing, return empty JSON object: {}
`,
        maxOutputTokens: 500,
        temperature: 0.1,
      },
    });

    const result = response.candidates?.[0].content?.parts;
    if (!result) {
      environment.log.error("empty response from AI");
      return false;
    }

    environment.log.info(
      `Prompt tokens: ${response.usageMetadata?.promptTokenCount}`
    );
    environment.log.info(
      `Completition tokens: ${response.usageMetadata?.candidatesTokenCount}`
    );

    let raw = result[0].text;

    if (raw?.startsWith("```")) {
      raw = raw
        .replace(/^```(?:json)?\s*/, "")
        .replace(/```$/, "")
        .trim();
    }

    let json: Record<string, string>;
    try {
      json = JSON.parse(raw!);
    } catch (error: any) {
      environment.log.error("Failed to parse JSON: " + error.message);
      return false;
    }

    environment.setOutput("Extracted data", JSON.stringify(json));
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
