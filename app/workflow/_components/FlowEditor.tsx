"use client";

import { WorkFlow } from "@/generated/prisma";
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import React from "react";

import "@xyflow/react/dist/style.css";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";
import NodeComponent from "./nodes/NodeComponent";

const nodeTypes = {
  Node: NodeComponent
}

function FlowEditor({ workflow }: { workflow: WorkFlow }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([
    createFlowNode(TaskType.LAUNCH_BROWSER)
  ]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  return (
    <main className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <Controls position="top-left" />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
}

export default FlowEditor;
