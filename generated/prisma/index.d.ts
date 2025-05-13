
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model WorkFlow
 * 
 */
export type WorkFlow = $Result.DefaultSelection<Prisma.$WorkFlowPayload>
/**
 * Model WorkFlowExecution
 * 
 */
export type WorkFlowExecution = $Result.DefaultSelection<Prisma.$WorkFlowExecutionPayload>
/**
 * Model ExectuionPhase
 * 
 */
export type ExectuionPhase = $Result.DefaultSelection<Prisma.$ExectuionPhasePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WorkFlows
 * const workFlows = await prisma.workFlow.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more WorkFlows
   * const workFlows = await prisma.workFlow.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.workFlow`: Exposes CRUD operations for the **WorkFlow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkFlows
    * const workFlows = await prisma.workFlow.findMany()
    * ```
    */
  get workFlow(): Prisma.WorkFlowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workFlowExecution`: Exposes CRUD operations for the **WorkFlowExecution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkFlowExecutions
    * const workFlowExecutions = await prisma.workFlowExecution.findMany()
    * ```
    */
  get workFlowExecution(): Prisma.WorkFlowExecutionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exectuionPhase`: Exposes CRUD operations for the **ExectuionPhase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExectuionPhases
    * const exectuionPhases = await prisma.exectuionPhase.findMany()
    * ```
    */
  get exectuionPhase(): Prisma.ExectuionPhaseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    WorkFlow: 'WorkFlow',
    WorkFlowExecution: 'WorkFlowExecution',
    ExectuionPhase: 'ExectuionPhase'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "workFlow" | "workFlowExecution" | "exectuionPhase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WorkFlow: {
        payload: Prisma.$WorkFlowPayload<ExtArgs>
        fields: Prisma.WorkFlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          findFirst: {
            args: Prisma.WorkFlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          findMany: {
            args: Prisma.WorkFlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          create: {
            args: Prisma.WorkFlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          createMany: {
            args: Prisma.WorkFlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkFlowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          delete: {
            args: Prisma.WorkFlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          update: {
            args: Prisma.WorkFlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          deleteMany: {
            args: Prisma.WorkFlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkFlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkFlowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>[]
          }
          upsert: {
            args: Prisma.WorkFlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowPayload>
          }
          aggregate: {
            args: Prisma.WorkFlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkFlow>
          }
          groupBy: {
            args: Prisma.WorkFlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkFlowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowCountAggregateOutputType> | number
          }
        }
      }
      WorkFlowExecution: {
        payload: Prisma.$WorkFlowExecutionPayload<ExtArgs>
        fields: Prisma.WorkFlowExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFlowExecutionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFlowExecutionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          findFirst: {
            args: Prisma.WorkFlowExecutionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFlowExecutionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          findMany: {
            args: Prisma.WorkFlowExecutionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>[]
          }
          create: {
            args: Prisma.WorkFlowExecutionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          createMany: {
            args: Prisma.WorkFlowExecutionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkFlowExecutionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>[]
          }
          delete: {
            args: Prisma.WorkFlowExecutionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          update: {
            args: Prisma.WorkFlowExecutionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          deleteMany: {
            args: Prisma.WorkFlowExecutionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkFlowExecutionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkFlowExecutionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>[]
          }
          upsert: {
            args: Prisma.WorkFlowExecutionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkFlowExecutionPayload>
          }
          aggregate: {
            args: Prisma.WorkFlowExecutionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkFlowExecution>
          }
          groupBy: {
            args: Prisma.WorkFlowExecutionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkFlowExecutionCountArgs<ExtArgs>
            result: $Utils.Optional<WorkFlowExecutionCountAggregateOutputType> | number
          }
        }
      }
      ExectuionPhase: {
        payload: Prisma.$ExectuionPhasePayload<ExtArgs>
        fields: Prisma.ExectuionPhaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExectuionPhaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExectuionPhaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>
          }
          findFirst: {
            args: Prisma.ExectuionPhaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExectuionPhaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>
          }
          findMany: {
            args: Prisma.ExectuionPhaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>[]
          }
          create: {
            args: Prisma.ExectuionPhaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>
          }
          createMany: {
            args: Prisma.ExectuionPhaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExectuionPhaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>[]
          }
          delete: {
            args: Prisma.ExectuionPhaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>
          }
          update: {
            args: Prisma.ExectuionPhaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>
          }
          deleteMany: {
            args: Prisma.ExectuionPhaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExectuionPhaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExectuionPhaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>[]
          }
          upsert: {
            args: Prisma.ExectuionPhaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExectuionPhasePayload>
          }
          aggregate: {
            args: Prisma.ExectuionPhaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExectuionPhase>
          }
          groupBy: {
            args: Prisma.ExectuionPhaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExectuionPhaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExectuionPhaseCountArgs<ExtArgs>
            result: $Utils.Optional<ExectuionPhaseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    workFlow?: WorkFlowOmit
    workFlowExecution?: WorkFlowExecutionOmit
    exectuionPhase?: ExectuionPhaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkFlowCountOutputType
   */

  export type WorkFlowCountOutputType = {
    executions: number
  }

  export type WorkFlowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | WorkFlowCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes
  /**
   * WorkFlowCountOutputType without action
   */
  export type WorkFlowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowCountOutputType
     */
    select?: WorkFlowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkFlowCountOutputType without action
   */
  export type WorkFlowCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowExecutionWhereInput
  }


  /**
   * Count Type WorkFlowExecutionCountOutputType
   */

  export type WorkFlowExecutionCountOutputType = {
    phases: number
  }

  export type WorkFlowExecutionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | WorkFlowExecutionCountOutputTypeCountPhasesArgs
  }

  // Custom InputTypes
  /**
   * WorkFlowExecutionCountOutputType without action
   */
  export type WorkFlowExecutionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecutionCountOutputType
     */
    select?: WorkFlowExecutionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkFlowExecutionCountOutputType without action
   */
  export type WorkFlowExecutionCountOutputTypeCountPhasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExectuionPhaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model WorkFlow
   */

  export type AggregateWorkFlow = {
    _count: WorkFlowCountAggregateOutputType | null
    _min: WorkFlowMinAggregateOutputType | null
    _max: WorkFlowMaxAggregateOutputType | null
  }

  export type WorkFlowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    definition: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkFlowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    definition: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkFlowCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    definition: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkFlowMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkFlowMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkFlowCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    definition?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkFlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlow to aggregate.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkFlows
    **/
    _count?: true | WorkFlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkFlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkFlowMaxAggregateInputType
  }

  export type GetWorkFlowAggregateType<T extends WorkFlowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkFlow[P]>
      : GetScalarType<T[P], AggregateWorkFlow[P]>
  }




  export type WorkFlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowWhereInput
    orderBy?: WorkFlowOrderByWithAggregationInput | WorkFlowOrderByWithAggregationInput[]
    by: WorkFlowScalarFieldEnum[] | WorkFlowScalarFieldEnum
    having?: WorkFlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkFlowCountAggregateInputType | true
    _min?: WorkFlowMinAggregateInputType
    _max?: WorkFlowMaxAggregateInputType
  }

  export type WorkFlowGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    definition: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: WorkFlowCountAggregateOutputType | null
    _min: WorkFlowMinAggregateOutputType | null
    _max: WorkFlowMaxAggregateOutputType | null
  }

  type GetWorkFlowGroupByPayload<T extends WorkFlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkFlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkFlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkFlowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkFlowGroupByOutputType[P]>
        }
      >
    >


  export type WorkFlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    executions?: boolean | WorkFlow$executionsArgs<ExtArgs>
    _count?: boolean | WorkFlowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workFlow"]>

  export type WorkFlowSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    definition?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkFlowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "definition" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["workFlow"]>
  export type WorkFlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | WorkFlow$executionsArgs<ExtArgs>
    _count?: boolean | WorkFlowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkFlowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkFlowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkFlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkFlow"
    objects: {
      executions: Prisma.$WorkFlowExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      definition: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workFlow"]>
    composites: {}
  }

  type WorkFlowGetPayload<S extends boolean | null | undefined | WorkFlowDefaultArgs> = $Result.GetResult<Prisma.$WorkFlowPayload, S>

  type WorkFlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFlowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkFlowCountAggregateInputType | true
    }

  export interface WorkFlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkFlow'], meta: { name: 'WorkFlow' } }
    /**
     * Find zero or one WorkFlow that matches the filter.
     * @param {WorkFlowFindUniqueArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFlowFindUniqueArgs>(args: SelectSubset<T, WorkFlowFindUniqueArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkFlow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFlowFindUniqueOrThrowArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFlowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindFirstArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFlowFindFirstArgs>(args?: SelectSubset<T, WorkFlowFindFirstArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindFirstOrThrowArgs} args - Arguments to find a WorkFlow
     * @example
     * // Get one WorkFlow
     * const workFlow = await prisma.workFlow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFlowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkFlows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkFlows
     * const workFlows = await prisma.workFlow.findMany()
     * 
     * // Get first 10 WorkFlows
     * const workFlows = await prisma.workFlow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFlowFindManyArgs>(args?: SelectSubset<T, WorkFlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkFlow.
     * @param {WorkFlowCreateArgs} args - Arguments to create a WorkFlow.
     * @example
     * // Create one WorkFlow
     * const WorkFlow = await prisma.workFlow.create({
     *   data: {
     *     // ... data to create a WorkFlow
     *   }
     * })
     * 
     */
    create<T extends WorkFlowCreateArgs>(args: SelectSubset<T, WorkFlowCreateArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkFlows.
     * @param {WorkFlowCreateManyArgs} args - Arguments to create many WorkFlows.
     * @example
     * // Create many WorkFlows
     * const workFlow = await prisma.workFlow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkFlowCreateManyArgs>(args?: SelectSubset<T, WorkFlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkFlows and returns the data saved in the database.
     * @param {WorkFlowCreateManyAndReturnArgs} args - Arguments to create many WorkFlows.
     * @example
     * // Create many WorkFlows
     * const workFlow = await prisma.workFlow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkFlows and only return the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkFlowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkFlowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkFlow.
     * @param {WorkFlowDeleteArgs} args - Arguments to delete one WorkFlow.
     * @example
     * // Delete one WorkFlow
     * const WorkFlow = await prisma.workFlow.delete({
     *   where: {
     *     // ... filter to delete one WorkFlow
     *   }
     * })
     * 
     */
    delete<T extends WorkFlowDeleteArgs>(args: SelectSubset<T, WorkFlowDeleteArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkFlow.
     * @param {WorkFlowUpdateArgs} args - Arguments to update one WorkFlow.
     * @example
     * // Update one WorkFlow
     * const workFlow = await prisma.workFlow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkFlowUpdateArgs>(args: SelectSubset<T, WorkFlowUpdateArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkFlows.
     * @param {WorkFlowDeleteManyArgs} args - Arguments to filter WorkFlows to delete.
     * @example
     * // Delete a few WorkFlows
     * const { count } = await prisma.workFlow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkFlowDeleteManyArgs>(args?: SelectSubset<T, WorkFlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkFlows
     * const workFlow = await prisma.workFlow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkFlowUpdateManyArgs>(args: SelectSubset<T, WorkFlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlows and returns the data updated in the database.
     * @param {WorkFlowUpdateManyAndReturnArgs} args - Arguments to update many WorkFlows.
     * @example
     * // Update many WorkFlows
     * const workFlow = await prisma.workFlow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkFlows and only return the `id`
     * const workFlowWithIdOnly = await prisma.workFlow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkFlowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkFlowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkFlow.
     * @param {WorkFlowUpsertArgs} args - Arguments to update or create a WorkFlow.
     * @example
     * // Update or create a WorkFlow
     * const workFlow = await prisma.workFlow.upsert({
     *   create: {
     *     // ... data to create a WorkFlow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkFlow we want to update
     *   }
     * })
     */
    upsert<T extends WorkFlowUpsertArgs>(args: SelectSubset<T, WorkFlowUpsertArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkFlows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowCountArgs} args - Arguments to filter WorkFlows to count.
     * @example
     * // Count the number of WorkFlows
     * const count = await prisma.workFlow.count({
     *   where: {
     *     // ... the filter for the WorkFlows we want to count
     *   }
     * })
    **/
    count<T extends WorkFlowCountArgs>(
      args?: Subset<T, WorkFlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkFlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkFlowAggregateArgs>(args: Subset<T, WorkFlowAggregateArgs>): Prisma.PrismaPromise<GetWorkFlowAggregateType<T>>

    /**
     * Group by WorkFlow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkFlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkFlowGroupByArgs['orderBy'] }
        : { orderBy?: WorkFlowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkFlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkFlow model
   */
  readonly fields: WorkFlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkFlow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkFlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    executions<T extends WorkFlow$executionsArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlow$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkFlow model
   */
  interface WorkFlowFieldRefs {
    readonly id: FieldRef<"WorkFlow", 'String'>
    readonly userId: FieldRef<"WorkFlow", 'String'>
    readonly name: FieldRef<"WorkFlow", 'String'>
    readonly description: FieldRef<"WorkFlow", 'String'>
    readonly definition: FieldRef<"WorkFlow", 'String'>
    readonly status: FieldRef<"WorkFlow", 'String'>
    readonly createdAt: FieldRef<"WorkFlow", 'DateTime'>
    readonly updatedAt: FieldRef<"WorkFlow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkFlow findUnique
   */
  export type WorkFlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow findUniqueOrThrow
   */
  export type WorkFlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow findFirst
   */
  export type WorkFlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlows.
     */
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow findFirstOrThrow
   */
  export type WorkFlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlow to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlows.
     */
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow findMany
   */
  export type WorkFlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlows to fetch.
     */
    where?: WorkFlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlows to fetch.
     */
    orderBy?: WorkFlowOrderByWithRelationInput | WorkFlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkFlows.
     */
    cursor?: WorkFlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlows.
     */
    skip?: number
    distinct?: WorkFlowScalarFieldEnum | WorkFlowScalarFieldEnum[]
  }

  /**
   * WorkFlow create
   */
  export type WorkFlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkFlow.
     */
    data: XOR<WorkFlowCreateInput, WorkFlowUncheckedCreateInput>
  }

  /**
   * WorkFlow createMany
   */
  export type WorkFlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkFlows.
     */
    data: WorkFlowCreateManyInput | WorkFlowCreateManyInput[]
  }

  /**
   * WorkFlow createManyAndReturn
   */
  export type WorkFlowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * The data used to create many WorkFlows.
     */
    data: WorkFlowCreateManyInput | WorkFlowCreateManyInput[]
  }

  /**
   * WorkFlow update
   */
  export type WorkFlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkFlow.
     */
    data: XOR<WorkFlowUpdateInput, WorkFlowUncheckedUpdateInput>
    /**
     * Choose, which WorkFlow to update.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow updateMany
   */
  export type WorkFlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkFlows.
     */
    data: XOR<WorkFlowUpdateManyMutationInput, WorkFlowUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlows to update
     */
    where?: WorkFlowWhereInput
    /**
     * Limit how many WorkFlows to update.
     */
    limit?: number
  }

  /**
   * WorkFlow updateManyAndReturn
   */
  export type WorkFlowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * The data used to update WorkFlows.
     */
    data: XOR<WorkFlowUpdateManyMutationInput, WorkFlowUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlows to update
     */
    where?: WorkFlowWhereInput
    /**
     * Limit how many WorkFlows to update.
     */
    limit?: number
  }

  /**
   * WorkFlow upsert
   */
  export type WorkFlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkFlow to update in case it exists.
     */
    where: WorkFlowWhereUniqueInput
    /**
     * In case the WorkFlow found by the `where` argument doesn't exist, create a new WorkFlow with this data.
     */
    create: XOR<WorkFlowCreateInput, WorkFlowUncheckedCreateInput>
    /**
     * In case the WorkFlow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkFlowUpdateInput, WorkFlowUncheckedUpdateInput>
  }

  /**
   * WorkFlow delete
   */
  export type WorkFlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
    /**
     * Filter which WorkFlow to delete.
     */
    where: WorkFlowWhereUniqueInput
  }

  /**
   * WorkFlow deleteMany
   */
  export type WorkFlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlows to delete
     */
    where?: WorkFlowWhereInput
    /**
     * Limit how many WorkFlows to delete.
     */
    limit?: number
  }

  /**
   * WorkFlow.executions
   */
  export type WorkFlow$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    where?: WorkFlowExecutionWhereInput
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    cursor?: WorkFlowExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * WorkFlow without action
   */
  export type WorkFlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlow
     */
    select?: WorkFlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlow
     */
    omit?: WorkFlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowInclude<ExtArgs> | null
  }


  /**
   * Model WorkFlowExecution
   */

  export type AggregateWorkFlowExecution = {
    _count: WorkFlowExecutionCountAggregateOutputType | null
    _min: WorkFlowExecutionMinAggregateOutputType | null
    _max: WorkFlowExecutionMaxAggregateOutputType | null
  }

  export type WorkFlowExecutionMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    trigger: string | null
    status: string | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type WorkFlowExecutionMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    trigger: string | null
    status: string | null
    createdAt: Date | null
    startedAt: Date | null
    completedAt: Date | null
  }

  export type WorkFlowExecutionCountAggregateOutputType = {
    id: number
    workflowId: number
    userId: number
    trigger: number
    status: number
    createdAt: number
    startedAt: number
    completedAt: number
    _all: number
  }


  export type WorkFlowExecutionMinAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type WorkFlowExecutionMaxAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
  }

  export type WorkFlowExecutionCountAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    trigger?: true
    status?: true
    createdAt?: true
    startedAt?: true
    completedAt?: true
    _all?: true
  }

  export type WorkFlowExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowExecution to aggregate.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkFlowExecutions
    **/
    _count?: true | WorkFlowExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkFlowExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkFlowExecutionMaxAggregateInputType
  }

  export type GetWorkFlowExecutionAggregateType<T extends WorkFlowExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkFlowExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkFlowExecution[P]>
      : GetScalarType<T[P], AggregateWorkFlowExecution[P]>
  }




  export type WorkFlowExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkFlowExecutionWhereInput
    orderBy?: WorkFlowExecutionOrderByWithAggregationInput | WorkFlowExecutionOrderByWithAggregationInput[]
    by: WorkFlowExecutionScalarFieldEnum[] | WorkFlowExecutionScalarFieldEnum
    having?: WorkFlowExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkFlowExecutionCountAggregateInputType | true
    _min?: WorkFlowExecutionMinAggregateInputType
    _max?: WorkFlowExecutionMaxAggregateInputType
  }

  export type WorkFlowExecutionGroupByOutputType = {
    id: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt: Date
    startedAt: Date | null
    completedAt: Date | null
    _count: WorkFlowExecutionCountAggregateOutputType | null
    _min: WorkFlowExecutionMinAggregateOutputType | null
    _max: WorkFlowExecutionMaxAggregateOutputType | null
  }

  type GetWorkFlowExecutionGroupByPayload<T extends WorkFlowExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkFlowExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkFlowExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkFlowExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], WorkFlowExecutionGroupByOutputType[P]>
        }
      >
    >


  export type WorkFlowExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    phases?: boolean | WorkFlowExecution$phasesArgs<ExtArgs>
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    _count?: boolean | WorkFlowExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowExecution"]>

  export type WorkFlowExecutionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowExecution"]>

  export type WorkFlowExecutionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workFlowExecution"]>

  export type WorkFlowExecutionSelectScalar = {
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    trigger?: boolean
    status?: boolean
    createdAt?: boolean
    startedAt?: boolean
    completedAt?: boolean
  }

  export type WorkFlowExecutionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "userId" | "trigger" | "status" | "createdAt" | "startedAt" | "completedAt", ExtArgs["result"]["workFlowExecution"]>
  export type WorkFlowExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phases?: boolean | WorkFlowExecution$phasesArgs<ExtArgs>
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
    _count?: boolean | WorkFlowExecutionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkFlowExecutionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }
  export type WorkFlowExecutionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkFlowDefaultArgs<ExtArgs>
  }

  export type $WorkFlowExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkFlowExecution"
    objects: {
      phases: Prisma.$ExectuionPhasePayload<ExtArgs>[]
      workflow: Prisma.$WorkFlowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      userId: string
      trigger: string
      status: string
      createdAt: Date
      startedAt: Date | null
      completedAt: Date | null
    }, ExtArgs["result"]["workFlowExecution"]>
    composites: {}
  }

  type WorkFlowExecutionGetPayload<S extends boolean | null | undefined | WorkFlowExecutionDefaultArgs> = $Result.GetResult<Prisma.$WorkFlowExecutionPayload, S>

  type WorkFlowExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFlowExecutionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkFlowExecutionCountAggregateInputType | true
    }

  export interface WorkFlowExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkFlowExecution'], meta: { name: 'WorkFlowExecution' } }
    /**
     * Find zero or one WorkFlowExecution that matches the filter.
     * @param {WorkFlowExecutionFindUniqueArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFlowExecutionFindUniqueArgs>(args: SelectSubset<T, WorkFlowExecutionFindUniqueArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkFlowExecution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFlowExecutionFindUniqueOrThrowArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFlowExecutionFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFlowExecutionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlowExecution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionFindFirstArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFlowExecutionFindFirstArgs>(args?: SelectSubset<T, WorkFlowExecutionFindFirstArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkFlowExecution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionFindFirstOrThrowArgs} args - Arguments to find a WorkFlowExecution
     * @example
     * // Get one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFlowExecutionFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFlowExecutionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkFlowExecutions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkFlowExecutions
     * const workFlowExecutions = await prisma.workFlowExecution.findMany()
     * 
     * // Get first 10 WorkFlowExecutions
     * const workFlowExecutions = await prisma.workFlowExecution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workFlowExecutionWithIdOnly = await prisma.workFlowExecution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFlowExecutionFindManyArgs>(args?: SelectSubset<T, WorkFlowExecutionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkFlowExecution.
     * @param {WorkFlowExecutionCreateArgs} args - Arguments to create a WorkFlowExecution.
     * @example
     * // Create one WorkFlowExecution
     * const WorkFlowExecution = await prisma.workFlowExecution.create({
     *   data: {
     *     // ... data to create a WorkFlowExecution
     *   }
     * })
     * 
     */
    create<T extends WorkFlowExecutionCreateArgs>(args: SelectSubset<T, WorkFlowExecutionCreateArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkFlowExecutions.
     * @param {WorkFlowExecutionCreateManyArgs} args - Arguments to create many WorkFlowExecutions.
     * @example
     * // Create many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkFlowExecutionCreateManyArgs>(args?: SelectSubset<T, WorkFlowExecutionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkFlowExecutions and returns the data saved in the database.
     * @param {WorkFlowExecutionCreateManyAndReturnArgs} args - Arguments to create many WorkFlowExecutions.
     * @example
     * // Create many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkFlowExecutions and only return the `id`
     * const workFlowExecutionWithIdOnly = await prisma.workFlowExecution.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkFlowExecutionCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkFlowExecutionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkFlowExecution.
     * @param {WorkFlowExecutionDeleteArgs} args - Arguments to delete one WorkFlowExecution.
     * @example
     * // Delete one WorkFlowExecution
     * const WorkFlowExecution = await prisma.workFlowExecution.delete({
     *   where: {
     *     // ... filter to delete one WorkFlowExecution
     *   }
     * })
     * 
     */
    delete<T extends WorkFlowExecutionDeleteArgs>(args: SelectSubset<T, WorkFlowExecutionDeleteArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkFlowExecution.
     * @param {WorkFlowExecutionUpdateArgs} args - Arguments to update one WorkFlowExecution.
     * @example
     * // Update one WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkFlowExecutionUpdateArgs>(args: SelectSubset<T, WorkFlowExecutionUpdateArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkFlowExecutions.
     * @param {WorkFlowExecutionDeleteManyArgs} args - Arguments to filter WorkFlowExecutions to delete.
     * @example
     * // Delete a few WorkFlowExecutions
     * const { count } = await prisma.workFlowExecution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkFlowExecutionDeleteManyArgs>(args?: SelectSubset<T, WorkFlowExecutionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkFlowExecutionUpdateManyArgs>(args: SelectSubset<T, WorkFlowExecutionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkFlowExecutions and returns the data updated in the database.
     * @param {WorkFlowExecutionUpdateManyAndReturnArgs} args - Arguments to update many WorkFlowExecutions.
     * @example
     * // Update many WorkFlowExecutions
     * const workFlowExecution = await prisma.workFlowExecution.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkFlowExecutions and only return the `id`
     * const workFlowExecutionWithIdOnly = await prisma.workFlowExecution.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkFlowExecutionUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkFlowExecutionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkFlowExecution.
     * @param {WorkFlowExecutionUpsertArgs} args - Arguments to update or create a WorkFlowExecution.
     * @example
     * // Update or create a WorkFlowExecution
     * const workFlowExecution = await prisma.workFlowExecution.upsert({
     *   create: {
     *     // ... data to create a WorkFlowExecution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkFlowExecution we want to update
     *   }
     * })
     */
    upsert<T extends WorkFlowExecutionUpsertArgs>(args: SelectSubset<T, WorkFlowExecutionUpsertArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkFlowExecutions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionCountArgs} args - Arguments to filter WorkFlowExecutions to count.
     * @example
     * // Count the number of WorkFlowExecutions
     * const count = await prisma.workFlowExecution.count({
     *   where: {
     *     // ... the filter for the WorkFlowExecutions we want to count
     *   }
     * })
    **/
    count<T extends WorkFlowExecutionCountArgs>(
      args?: Subset<T, WorkFlowExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkFlowExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkFlowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkFlowExecutionAggregateArgs>(args: Subset<T, WorkFlowExecutionAggregateArgs>): Prisma.PrismaPromise<GetWorkFlowExecutionAggregateType<T>>

    /**
     * Group by WorkFlowExecution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFlowExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkFlowExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkFlowExecutionGroupByArgs['orderBy'] }
        : { orderBy?: WorkFlowExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkFlowExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkFlowExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkFlowExecution model
   */
  readonly fields: WorkFlowExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkFlowExecution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkFlowExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phases<T extends WorkFlowExecution$phasesArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowExecution$phasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflow<T extends WorkFlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowDefaultArgs<ExtArgs>>): Prisma__WorkFlowClient<$Result.GetResult<Prisma.$WorkFlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkFlowExecution model
   */
  interface WorkFlowExecutionFieldRefs {
    readonly id: FieldRef<"WorkFlowExecution", 'String'>
    readonly workflowId: FieldRef<"WorkFlowExecution", 'String'>
    readonly userId: FieldRef<"WorkFlowExecution", 'String'>
    readonly trigger: FieldRef<"WorkFlowExecution", 'String'>
    readonly status: FieldRef<"WorkFlowExecution", 'String'>
    readonly createdAt: FieldRef<"WorkFlowExecution", 'DateTime'>
    readonly startedAt: FieldRef<"WorkFlowExecution", 'DateTime'>
    readonly completedAt: FieldRef<"WorkFlowExecution", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkFlowExecution findUnique
   */
  export type WorkFlowExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution findUniqueOrThrow
   */
  export type WorkFlowExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution findFirst
   */
  export type WorkFlowExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowExecutions.
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowExecutions.
     */
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution findFirstOrThrow
   */
  export type WorkFlowExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecution to fetch.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkFlowExecutions.
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkFlowExecutions.
     */
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution findMany
   */
  export type WorkFlowExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter, which WorkFlowExecutions to fetch.
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkFlowExecutions to fetch.
     */
    orderBy?: WorkFlowExecutionOrderByWithRelationInput | WorkFlowExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkFlowExecutions.
     */
    cursor?: WorkFlowExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkFlowExecutions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkFlowExecutions.
     */
    skip?: number
    distinct?: WorkFlowExecutionScalarFieldEnum | WorkFlowExecutionScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution create
   */
  export type WorkFlowExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkFlowExecution.
     */
    data: XOR<WorkFlowExecutionCreateInput, WorkFlowExecutionUncheckedCreateInput>
  }

  /**
   * WorkFlowExecution createMany
   */
  export type WorkFlowExecutionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkFlowExecutions.
     */
    data: WorkFlowExecutionCreateManyInput | WorkFlowExecutionCreateManyInput[]
  }

  /**
   * WorkFlowExecution createManyAndReturn
   */
  export type WorkFlowExecutionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * The data used to create many WorkFlowExecutions.
     */
    data: WorkFlowExecutionCreateManyInput | WorkFlowExecutionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkFlowExecution update
   */
  export type WorkFlowExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkFlowExecution.
     */
    data: XOR<WorkFlowExecutionUpdateInput, WorkFlowExecutionUncheckedUpdateInput>
    /**
     * Choose, which WorkFlowExecution to update.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution updateMany
   */
  export type WorkFlowExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkFlowExecutions.
     */
    data: XOR<WorkFlowExecutionUpdateManyMutationInput, WorkFlowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlowExecutions to update
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * Limit how many WorkFlowExecutions to update.
     */
    limit?: number
  }

  /**
   * WorkFlowExecution updateManyAndReturn
   */
  export type WorkFlowExecutionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * The data used to update WorkFlowExecutions.
     */
    data: XOR<WorkFlowExecutionUpdateManyMutationInput, WorkFlowExecutionUncheckedUpdateManyInput>
    /**
     * Filter which WorkFlowExecutions to update
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * Limit how many WorkFlowExecutions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkFlowExecution upsert
   */
  export type WorkFlowExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkFlowExecution to update in case it exists.
     */
    where: WorkFlowExecutionWhereUniqueInput
    /**
     * In case the WorkFlowExecution found by the `where` argument doesn't exist, create a new WorkFlowExecution with this data.
     */
    create: XOR<WorkFlowExecutionCreateInput, WorkFlowExecutionUncheckedCreateInput>
    /**
     * In case the WorkFlowExecution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkFlowExecutionUpdateInput, WorkFlowExecutionUncheckedUpdateInput>
  }

  /**
   * WorkFlowExecution delete
   */
  export type WorkFlowExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
    /**
     * Filter which WorkFlowExecution to delete.
     */
    where: WorkFlowExecutionWhereUniqueInput
  }

  /**
   * WorkFlowExecution deleteMany
   */
  export type WorkFlowExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkFlowExecutions to delete
     */
    where?: WorkFlowExecutionWhereInput
    /**
     * Limit how many WorkFlowExecutions to delete.
     */
    limit?: number
  }

  /**
   * WorkFlowExecution.phases
   */
  export type WorkFlowExecution$phasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    where?: ExectuionPhaseWhereInput
    orderBy?: ExectuionPhaseOrderByWithRelationInput | ExectuionPhaseOrderByWithRelationInput[]
    cursor?: ExectuionPhaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExectuionPhaseScalarFieldEnum | ExectuionPhaseScalarFieldEnum[]
  }

  /**
   * WorkFlowExecution without action
   */
  export type WorkFlowExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkFlowExecution
     */
    select?: WorkFlowExecutionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkFlowExecution
     */
    omit?: WorkFlowExecutionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkFlowExecutionInclude<ExtArgs> | null
  }


  /**
   * Model ExectuionPhase
   */

  export type AggregateExectuionPhase = {
    _count: ExectuionPhaseCountAggregateOutputType | null
    _avg: ExectuionPhaseAvgAggregateOutputType | null
    _sum: ExectuionPhaseSumAggregateOutputType | null
    _min: ExectuionPhaseMinAggregateOutputType | null
    _max: ExectuionPhaseMaxAggregateOutputType | null
  }

  export type ExectuionPhaseAvgAggregateOutputType = {
    number: number | null
    creditsConsumed: number | null
  }

  export type ExectuionPhaseSumAggregateOutputType = {
    number: number | null
    creditsConsumed: number | null
  }

  export type ExectuionPhaseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    number: number | null
    node: string | null
    name: string | null
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string | null
  }

  export type ExectuionPhaseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    status: string | null
    number: number | null
    node: string | null
    name: string | null
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string | null
  }

  export type ExectuionPhaseCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    number: number
    node: number
    name: number
    startedAt: number
    completedAt: number
    inputs: number
    outputs: number
    creditsConsumed: number
    workflowExecutionId: number
    _all: number
  }


  export type ExectuionPhaseAvgAggregateInputType = {
    number?: true
    creditsConsumed?: true
  }

  export type ExectuionPhaseSumAggregateInputType = {
    number?: true
    creditsConsumed?: true
  }

  export type ExectuionPhaseMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
  }

  export type ExectuionPhaseMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
  }

  export type ExectuionPhaseCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    number?: true
    node?: true
    name?: true
    startedAt?: true
    completedAt?: true
    inputs?: true
    outputs?: true
    creditsConsumed?: true
    workflowExecutionId?: true
    _all?: true
  }

  export type ExectuionPhaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExectuionPhase to aggregate.
     */
    where?: ExectuionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExectuionPhases to fetch.
     */
    orderBy?: ExectuionPhaseOrderByWithRelationInput | ExectuionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExectuionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExectuionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExectuionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExectuionPhases
    **/
    _count?: true | ExectuionPhaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExectuionPhaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExectuionPhaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExectuionPhaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExectuionPhaseMaxAggregateInputType
  }

  export type GetExectuionPhaseAggregateType<T extends ExectuionPhaseAggregateArgs> = {
        [P in keyof T & keyof AggregateExectuionPhase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExectuionPhase[P]>
      : GetScalarType<T[P], AggregateExectuionPhase[P]>
  }




  export type ExectuionPhaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExectuionPhaseWhereInput
    orderBy?: ExectuionPhaseOrderByWithAggregationInput | ExectuionPhaseOrderByWithAggregationInput[]
    by: ExectuionPhaseScalarFieldEnum[] | ExectuionPhaseScalarFieldEnum
    having?: ExectuionPhaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExectuionPhaseCountAggregateInputType | true
    _avg?: ExectuionPhaseAvgAggregateInputType
    _sum?: ExectuionPhaseSumAggregateInputType
    _min?: ExectuionPhaseMinAggregateInputType
    _max?: ExectuionPhaseMaxAggregateInputType
  }

  export type ExectuionPhaseGroupByOutputType = {
    id: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt: Date | null
    completedAt: Date | null
    inputs: string | null
    outputs: string | null
    creditsConsumed: number | null
    workflowExecutionId: string
    _count: ExectuionPhaseCountAggregateOutputType | null
    _avg: ExectuionPhaseAvgAggregateOutputType | null
    _sum: ExectuionPhaseSumAggregateOutputType | null
    _min: ExectuionPhaseMinAggregateOutputType | null
    _max: ExectuionPhaseMaxAggregateOutputType | null
  }

  type GetExectuionPhaseGroupByPayload<T extends ExectuionPhaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExectuionPhaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExectuionPhaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExectuionPhaseGroupByOutputType[P]>
            : GetScalarType<T[P], ExectuionPhaseGroupByOutputType[P]>
        }
      >
    >


  export type ExectuionPhaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exectuionPhase"]>

  export type ExectuionPhaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exectuionPhase"]>

  export type ExectuionPhaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
    execution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exectuionPhase"]>

  export type ExectuionPhaseSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    number?: boolean
    node?: boolean
    name?: boolean
    startedAt?: boolean
    completedAt?: boolean
    inputs?: boolean
    outputs?: boolean
    creditsConsumed?: boolean
    workflowExecutionId?: boolean
  }

  export type ExectuionPhaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "number" | "node" | "name" | "startedAt" | "completedAt" | "inputs" | "outputs" | "creditsConsumed" | "workflowExecutionId", ExtArgs["result"]["exectuionPhase"]>
  export type ExectuionPhaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }
  export type ExectuionPhaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }
  export type ExectuionPhaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    execution?: boolean | WorkFlowExecutionDefaultArgs<ExtArgs>
  }

  export type $ExectuionPhasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExectuionPhase"
    objects: {
      execution: Prisma.$WorkFlowExecutionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      status: string
      number: number
      node: string
      name: string
      startedAt: Date | null
      completedAt: Date | null
      inputs: string | null
      outputs: string | null
      creditsConsumed: number | null
      workflowExecutionId: string
    }, ExtArgs["result"]["exectuionPhase"]>
    composites: {}
  }

  type ExectuionPhaseGetPayload<S extends boolean | null | undefined | ExectuionPhaseDefaultArgs> = $Result.GetResult<Prisma.$ExectuionPhasePayload, S>

  type ExectuionPhaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExectuionPhaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExectuionPhaseCountAggregateInputType | true
    }

  export interface ExectuionPhaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExectuionPhase'], meta: { name: 'ExectuionPhase' } }
    /**
     * Find zero or one ExectuionPhase that matches the filter.
     * @param {ExectuionPhaseFindUniqueArgs} args - Arguments to find a ExectuionPhase
     * @example
     * // Get one ExectuionPhase
     * const exectuionPhase = await prisma.exectuionPhase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExectuionPhaseFindUniqueArgs>(args: SelectSubset<T, ExectuionPhaseFindUniqueArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExectuionPhase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExectuionPhaseFindUniqueOrThrowArgs} args - Arguments to find a ExectuionPhase
     * @example
     * // Get one ExectuionPhase
     * const exectuionPhase = await prisma.exectuionPhase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExectuionPhaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExectuionPhaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExectuionPhase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExectuionPhaseFindFirstArgs} args - Arguments to find a ExectuionPhase
     * @example
     * // Get one ExectuionPhase
     * const exectuionPhase = await prisma.exectuionPhase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExectuionPhaseFindFirstArgs>(args?: SelectSubset<T, ExectuionPhaseFindFirstArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExectuionPhase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExectuionPhaseFindFirstOrThrowArgs} args - Arguments to find a ExectuionPhase
     * @example
     * // Get one ExectuionPhase
     * const exectuionPhase = await prisma.exectuionPhase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExectuionPhaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExectuionPhaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExectuionPhases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExectuionPhaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExectuionPhases
     * const exectuionPhases = await prisma.exectuionPhase.findMany()
     * 
     * // Get first 10 ExectuionPhases
     * const exectuionPhases = await prisma.exectuionPhase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exectuionPhaseWithIdOnly = await prisma.exectuionPhase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExectuionPhaseFindManyArgs>(args?: SelectSubset<T, ExectuionPhaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExectuionPhase.
     * @param {ExectuionPhaseCreateArgs} args - Arguments to create a ExectuionPhase.
     * @example
     * // Create one ExectuionPhase
     * const ExectuionPhase = await prisma.exectuionPhase.create({
     *   data: {
     *     // ... data to create a ExectuionPhase
     *   }
     * })
     * 
     */
    create<T extends ExectuionPhaseCreateArgs>(args: SelectSubset<T, ExectuionPhaseCreateArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExectuionPhases.
     * @param {ExectuionPhaseCreateManyArgs} args - Arguments to create many ExectuionPhases.
     * @example
     * // Create many ExectuionPhases
     * const exectuionPhase = await prisma.exectuionPhase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExectuionPhaseCreateManyArgs>(args?: SelectSubset<T, ExectuionPhaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExectuionPhases and returns the data saved in the database.
     * @param {ExectuionPhaseCreateManyAndReturnArgs} args - Arguments to create many ExectuionPhases.
     * @example
     * // Create many ExectuionPhases
     * const exectuionPhase = await prisma.exectuionPhase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExectuionPhases and only return the `id`
     * const exectuionPhaseWithIdOnly = await prisma.exectuionPhase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExectuionPhaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExectuionPhaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExectuionPhase.
     * @param {ExectuionPhaseDeleteArgs} args - Arguments to delete one ExectuionPhase.
     * @example
     * // Delete one ExectuionPhase
     * const ExectuionPhase = await prisma.exectuionPhase.delete({
     *   where: {
     *     // ... filter to delete one ExectuionPhase
     *   }
     * })
     * 
     */
    delete<T extends ExectuionPhaseDeleteArgs>(args: SelectSubset<T, ExectuionPhaseDeleteArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExectuionPhase.
     * @param {ExectuionPhaseUpdateArgs} args - Arguments to update one ExectuionPhase.
     * @example
     * // Update one ExectuionPhase
     * const exectuionPhase = await prisma.exectuionPhase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExectuionPhaseUpdateArgs>(args: SelectSubset<T, ExectuionPhaseUpdateArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExectuionPhases.
     * @param {ExectuionPhaseDeleteManyArgs} args - Arguments to filter ExectuionPhases to delete.
     * @example
     * // Delete a few ExectuionPhases
     * const { count } = await prisma.exectuionPhase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExectuionPhaseDeleteManyArgs>(args?: SelectSubset<T, ExectuionPhaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExectuionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExectuionPhaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExectuionPhases
     * const exectuionPhase = await prisma.exectuionPhase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExectuionPhaseUpdateManyArgs>(args: SelectSubset<T, ExectuionPhaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExectuionPhases and returns the data updated in the database.
     * @param {ExectuionPhaseUpdateManyAndReturnArgs} args - Arguments to update many ExectuionPhases.
     * @example
     * // Update many ExectuionPhases
     * const exectuionPhase = await prisma.exectuionPhase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExectuionPhases and only return the `id`
     * const exectuionPhaseWithIdOnly = await prisma.exectuionPhase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExectuionPhaseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExectuionPhaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExectuionPhase.
     * @param {ExectuionPhaseUpsertArgs} args - Arguments to update or create a ExectuionPhase.
     * @example
     * // Update or create a ExectuionPhase
     * const exectuionPhase = await prisma.exectuionPhase.upsert({
     *   create: {
     *     // ... data to create a ExectuionPhase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExectuionPhase we want to update
     *   }
     * })
     */
    upsert<T extends ExectuionPhaseUpsertArgs>(args: SelectSubset<T, ExectuionPhaseUpsertArgs<ExtArgs>>): Prisma__ExectuionPhaseClient<$Result.GetResult<Prisma.$ExectuionPhasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExectuionPhases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExectuionPhaseCountArgs} args - Arguments to filter ExectuionPhases to count.
     * @example
     * // Count the number of ExectuionPhases
     * const count = await prisma.exectuionPhase.count({
     *   where: {
     *     // ... the filter for the ExectuionPhases we want to count
     *   }
     * })
    **/
    count<T extends ExectuionPhaseCountArgs>(
      args?: Subset<T, ExectuionPhaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExectuionPhaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExectuionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExectuionPhaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExectuionPhaseAggregateArgs>(args: Subset<T, ExectuionPhaseAggregateArgs>): Prisma.PrismaPromise<GetExectuionPhaseAggregateType<T>>

    /**
     * Group by ExectuionPhase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExectuionPhaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExectuionPhaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExectuionPhaseGroupByArgs['orderBy'] }
        : { orderBy?: ExectuionPhaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExectuionPhaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExectuionPhaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExectuionPhase model
   */
  readonly fields: ExectuionPhaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExectuionPhase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExectuionPhaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    execution<T extends WorkFlowExecutionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkFlowExecutionDefaultArgs<ExtArgs>>): Prisma__WorkFlowExecutionClient<$Result.GetResult<Prisma.$WorkFlowExecutionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExectuionPhase model
   */
  interface ExectuionPhaseFieldRefs {
    readonly id: FieldRef<"ExectuionPhase", 'String'>
    readonly userId: FieldRef<"ExectuionPhase", 'String'>
    readonly status: FieldRef<"ExectuionPhase", 'String'>
    readonly number: FieldRef<"ExectuionPhase", 'Int'>
    readonly node: FieldRef<"ExectuionPhase", 'String'>
    readonly name: FieldRef<"ExectuionPhase", 'String'>
    readonly startedAt: FieldRef<"ExectuionPhase", 'DateTime'>
    readonly completedAt: FieldRef<"ExectuionPhase", 'DateTime'>
    readonly inputs: FieldRef<"ExectuionPhase", 'String'>
    readonly outputs: FieldRef<"ExectuionPhase", 'String'>
    readonly creditsConsumed: FieldRef<"ExectuionPhase", 'Int'>
    readonly workflowExecutionId: FieldRef<"ExectuionPhase", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExectuionPhase findUnique
   */
  export type ExectuionPhaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExectuionPhase to fetch.
     */
    where: ExectuionPhaseWhereUniqueInput
  }

  /**
   * ExectuionPhase findUniqueOrThrow
   */
  export type ExectuionPhaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExectuionPhase to fetch.
     */
    where: ExectuionPhaseWhereUniqueInput
  }

  /**
   * ExectuionPhase findFirst
   */
  export type ExectuionPhaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExectuionPhase to fetch.
     */
    where?: ExectuionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExectuionPhases to fetch.
     */
    orderBy?: ExectuionPhaseOrderByWithRelationInput | ExectuionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExectuionPhases.
     */
    cursor?: ExectuionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExectuionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExectuionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExectuionPhases.
     */
    distinct?: ExectuionPhaseScalarFieldEnum | ExectuionPhaseScalarFieldEnum[]
  }

  /**
   * ExectuionPhase findFirstOrThrow
   */
  export type ExectuionPhaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExectuionPhase to fetch.
     */
    where?: ExectuionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExectuionPhases to fetch.
     */
    orderBy?: ExectuionPhaseOrderByWithRelationInput | ExectuionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExectuionPhases.
     */
    cursor?: ExectuionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExectuionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExectuionPhases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExectuionPhases.
     */
    distinct?: ExectuionPhaseScalarFieldEnum | ExectuionPhaseScalarFieldEnum[]
  }

  /**
   * ExectuionPhase findMany
   */
  export type ExectuionPhaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * Filter, which ExectuionPhases to fetch.
     */
    where?: ExectuionPhaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExectuionPhases to fetch.
     */
    orderBy?: ExectuionPhaseOrderByWithRelationInput | ExectuionPhaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExectuionPhases.
     */
    cursor?: ExectuionPhaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExectuionPhases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExectuionPhases.
     */
    skip?: number
    distinct?: ExectuionPhaseScalarFieldEnum | ExectuionPhaseScalarFieldEnum[]
  }

  /**
   * ExectuionPhase create
   */
  export type ExectuionPhaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ExectuionPhase.
     */
    data: XOR<ExectuionPhaseCreateInput, ExectuionPhaseUncheckedCreateInput>
  }

  /**
   * ExectuionPhase createMany
   */
  export type ExectuionPhaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExectuionPhases.
     */
    data: ExectuionPhaseCreateManyInput | ExectuionPhaseCreateManyInput[]
  }

  /**
   * ExectuionPhase createManyAndReturn
   */
  export type ExectuionPhaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * The data used to create many ExectuionPhases.
     */
    data: ExectuionPhaseCreateManyInput | ExectuionPhaseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExectuionPhase update
   */
  export type ExectuionPhaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ExectuionPhase.
     */
    data: XOR<ExectuionPhaseUpdateInput, ExectuionPhaseUncheckedUpdateInput>
    /**
     * Choose, which ExectuionPhase to update.
     */
    where: ExectuionPhaseWhereUniqueInput
  }

  /**
   * ExectuionPhase updateMany
   */
  export type ExectuionPhaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExectuionPhases.
     */
    data: XOR<ExectuionPhaseUpdateManyMutationInput, ExectuionPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ExectuionPhases to update
     */
    where?: ExectuionPhaseWhereInput
    /**
     * Limit how many ExectuionPhases to update.
     */
    limit?: number
  }

  /**
   * ExectuionPhase updateManyAndReturn
   */
  export type ExectuionPhaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * The data used to update ExectuionPhases.
     */
    data: XOR<ExectuionPhaseUpdateManyMutationInput, ExectuionPhaseUncheckedUpdateManyInput>
    /**
     * Filter which ExectuionPhases to update
     */
    where?: ExectuionPhaseWhereInput
    /**
     * Limit how many ExectuionPhases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExectuionPhase upsert
   */
  export type ExectuionPhaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ExectuionPhase to update in case it exists.
     */
    where: ExectuionPhaseWhereUniqueInput
    /**
     * In case the ExectuionPhase found by the `where` argument doesn't exist, create a new ExectuionPhase with this data.
     */
    create: XOR<ExectuionPhaseCreateInput, ExectuionPhaseUncheckedCreateInput>
    /**
     * In case the ExectuionPhase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExectuionPhaseUpdateInput, ExectuionPhaseUncheckedUpdateInput>
  }

  /**
   * ExectuionPhase delete
   */
  export type ExectuionPhaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
    /**
     * Filter which ExectuionPhase to delete.
     */
    where: ExectuionPhaseWhereUniqueInput
  }

  /**
   * ExectuionPhase deleteMany
   */
  export type ExectuionPhaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExectuionPhases to delete
     */
    where?: ExectuionPhaseWhereInput
    /**
     * Limit how many ExectuionPhases to delete.
     */
    limit?: number
  }

  /**
   * ExectuionPhase without action
   */
  export type ExectuionPhaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExectuionPhase
     */
    select?: ExectuionPhaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExectuionPhase
     */
    omit?: ExectuionPhaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExectuionPhaseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkFlowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    definition: 'definition',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkFlowScalarFieldEnum = (typeof WorkFlowScalarFieldEnum)[keyof typeof WorkFlowScalarFieldEnum]


  export const WorkFlowExecutionScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    userId: 'userId',
    trigger: 'trigger',
    status: 'status',
    createdAt: 'createdAt',
    startedAt: 'startedAt',
    completedAt: 'completedAt'
  };

  export type WorkFlowExecutionScalarFieldEnum = (typeof WorkFlowExecutionScalarFieldEnum)[keyof typeof WorkFlowExecutionScalarFieldEnum]


  export const ExectuionPhaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    number: 'number',
    node: 'node',
    name: 'name',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    inputs: 'inputs',
    outputs: 'outputs',
    creditsConsumed: 'creditsConsumed',
    workflowExecutionId: 'workflowExecutionId'
  };

  export type ExectuionPhaseScalarFieldEnum = (typeof ExectuionPhaseScalarFieldEnum)[keyof typeof ExectuionPhaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type WorkFlowWhereInput = {
    AND?: WorkFlowWhereInput | WorkFlowWhereInput[]
    OR?: WorkFlowWhereInput[]
    NOT?: WorkFlowWhereInput | WorkFlowWhereInput[]
    id?: StringFilter<"WorkFlow"> | string
    userId?: StringFilter<"WorkFlow"> | string
    name?: StringFilter<"WorkFlow"> | string
    description?: StringNullableFilter<"WorkFlow"> | string | null
    definition?: StringFilter<"WorkFlow"> | string
    status?: StringFilter<"WorkFlow"> | string
    createdAt?: DateTimeFilter<"WorkFlow"> | Date | string
    updatedAt?: DateTimeFilter<"WorkFlow"> | Date | string
    executions?: WorkFlowExecutionListRelationFilter
  }

  export type WorkFlowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    definition?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    executions?: WorkFlowExecutionOrderByRelationAggregateInput
  }

  export type WorkFlowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_userId?: WorkFlowNameUserIdCompoundUniqueInput
    AND?: WorkFlowWhereInput | WorkFlowWhereInput[]
    OR?: WorkFlowWhereInput[]
    NOT?: WorkFlowWhereInput | WorkFlowWhereInput[]
    userId?: StringFilter<"WorkFlow"> | string
    name?: StringFilter<"WorkFlow"> | string
    description?: StringNullableFilter<"WorkFlow"> | string | null
    definition?: StringFilter<"WorkFlow"> | string
    status?: StringFilter<"WorkFlow"> | string
    createdAt?: DateTimeFilter<"WorkFlow"> | Date | string
    updatedAt?: DateTimeFilter<"WorkFlow"> | Date | string
    executions?: WorkFlowExecutionListRelationFilter
  }, "id" | "name_userId">

  export type WorkFlowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    definition?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkFlowCountOrderByAggregateInput
    _max?: WorkFlowMaxOrderByAggregateInput
    _min?: WorkFlowMinOrderByAggregateInput
  }

  export type WorkFlowScalarWhereWithAggregatesInput = {
    AND?: WorkFlowScalarWhereWithAggregatesInput | WorkFlowScalarWhereWithAggregatesInput[]
    OR?: WorkFlowScalarWhereWithAggregatesInput[]
    NOT?: WorkFlowScalarWhereWithAggregatesInput | WorkFlowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkFlow"> | string
    userId?: StringWithAggregatesFilter<"WorkFlow"> | string
    name?: StringWithAggregatesFilter<"WorkFlow"> | string
    description?: StringNullableWithAggregatesFilter<"WorkFlow"> | string | null
    definition?: StringWithAggregatesFilter<"WorkFlow"> | string
    status?: StringWithAggregatesFilter<"WorkFlow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkFlow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WorkFlow"> | Date | string
  }

  export type WorkFlowExecutionWhereInput = {
    AND?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    OR?: WorkFlowExecutionWhereInput[]
    NOT?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    id?: StringFilter<"WorkFlowExecution"> | string
    workflowId?: StringFilter<"WorkFlowExecution"> | string
    userId?: StringFilter<"WorkFlowExecution"> | string
    trigger?: StringFilter<"WorkFlowExecution"> | string
    status?: StringFilter<"WorkFlowExecution"> | string
    createdAt?: DateTimeFilter<"WorkFlowExecution"> | Date | string
    startedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    phases?: ExectuionPhaseListRelationFilter
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
  }

  export type WorkFlowExecutionOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    phases?: ExectuionPhaseOrderByRelationAggregateInput
    workflow?: WorkFlowOrderByWithRelationInput
  }

  export type WorkFlowExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    OR?: WorkFlowExecutionWhereInput[]
    NOT?: WorkFlowExecutionWhereInput | WorkFlowExecutionWhereInput[]
    workflowId?: StringFilter<"WorkFlowExecution"> | string
    userId?: StringFilter<"WorkFlowExecution"> | string
    trigger?: StringFilter<"WorkFlowExecution"> | string
    status?: StringFilter<"WorkFlowExecution"> | string
    createdAt?: DateTimeFilter<"WorkFlowExecution"> | Date | string
    startedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    phases?: ExectuionPhaseListRelationFilter
    workflow?: XOR<WorkFlowScalarRelationFilter, WorkFlowWhereInput>
  }, "id">

  export type WorkFlowExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    _count?: WorkFlowExecutionCountOrderByAggregateInput
    _max?: WorkFlowExecutionMaxOrderByAggregateInput
    _min?: WorkFlowExecutionMinOrderByAggregateInput
  }

  export type WorkFlowExecutionScalarWhereWithAggregatesInput = {
    AND?: WorkFlowExecutionScalarWhereWithAggregatesInput | WorkFlowExecutionScalarWhereWithAggregatesInput[]
    OR?: WorkFlowExecutionScalarWhereWithAggregatesInput[]
    NOT?: WorkFlowExecutionScalarWhereWithAggregatesInput | WorkFlowExecutionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    workflowId?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    userId?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    trigger?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    status?: StringWithAggregatesFilter<"WorkFlowExecution"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkFlowExecution"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"WorkFlowExecution"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"WorkFlowExecution"> | Date | string | null
  }

  export type ExectuionPhaseWhereInput = {
    AND?: ExectuionPhaseWhereInput | ExectuionPhaseWhereInput[]
    OR?: ExectuionPhaseWhereInput[]
    NOT?: ExectuionPhaseWhereInput | ExectuionPhaseWhereInput[]
    id?: StringFilter<"ExectuionPhase"> | string
    userId?: StringFilter<"ExectuionPhase"> | string
    status?: StringFilter<"ExectuionPhase"> | string
    number?: IntFilter<"ExectuionPhase"> | number
    node?: StringFilter<"ExectuionPhase"> | string
    name?: StringFilter<"ExectuionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExectuionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExectuionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExectuionPhase"> | string | null
    outputs?: StringNullableFilter<"ExectuionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExectuionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExectuionPhase"> | string
    execution?: XOR<WorkFlowExecutionScalarRelationFilter, WorkFlowExecutionWhereInput>
  }

  export type ExectuionPhaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    inputs?: SortOrderInput | SortOrder
    outputs?: SortOrderInput | SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    workflowExecutionId?: SortOrder
    execution?: WorkFlowExecutionOrderByWithRelationInput
  }

  export type ExectuionPhaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExectuionPhaseWhereInput | ExectuionPhaseWhereInput[]
    OR?: ExectuionPhaseWhereInput[]
    NOT?: ExectuionPhaseWhereInput | ExectuionPhaseWhereInput[]
    userId?: StringFilter<"ExectuionPhase"> | string
    status?: StringFilter<"ExectuionPhase"> | string
    number?: IntFilter<"ExectuionPhase"> | number
    node?: StringFilter<"ExectuionPhase"> | string
    name?: StringFilter<"ExectuionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExectuionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExectuionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExectuionPhase"> | string | null
    outputs?: StringNullableFilter<"ExectuionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExectuionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExectuionPhase"> | string
    execution?: XOR<WorkFlowExecutionScalarRelationFilter, WorkFlowExecutionWhereInput>
  }, "id">

  export type ExectuionPhaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    inputs?: SortOrderInput | SortOrder
    outputs?: SortOrderInput | SortOrder
    creditsConsumed?: SortOrderInput | SortOrder
    workflowExecutionId?: SortOrder
    _count?: ExectuionPhaseCountOrderByAggregateInput
    _avg?: ExectuionPhaseAvgOrderByAggregateInput
    _max?: ExectuionPhaseMaxOrderByAggregateInput
    _min?: ExectuionPhaseMinOrderByAggregateInput
    _sum?: ExectuionPhaseSumOrderByAggregateInput
  }

  export type ExectuionPhaseScalarWhereWithAggregatesInput = {
    AND?: ExectuionPhaseScalarWhereWithAggregatesInput | ExectuionPhaseScalarWhereWithAggregatesInput[]
    OR?: ExectuionPhaseScalarWhereWithAggregatesInput[]
    NOT?: ExectuionPhaseScalarWhereWithAggregatesInput | ExectuionPhaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExectuionPhase"> | string
    userId?: StringWithAggregatesFilter<"ExectuionPhase"> | string
    status?: StringWithAggregatesFilter<"ExectuionPhase"> | string
    number?: IntWithAggregatesFilter<"ExectuionPhase"> | number
    node?: StringWithAggregatesFilter<"ExectuionPhase"> | string
    name?: StringWithAggregatesFilter<"ExectuionPhase"> | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"ExectuionPhase"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"ExectuionPhase"> | Date | string | null
    inputs?: StringNullableWithAggregatesFilter<"ExectuionPhase"> | string | null
    outputs?: StringNullableWithAggregatesFilter<"ExectuionPhase"> | string | null
    creditsConsumed?: IntNullableWithAggregatesFilter<"ExectuionPhase"> | number | null
    workflowExecutionId?: StringWithAggregatesFilter<"ExectuionPhase"> | string
  }

  export type WorkFlowCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: WorkFlowExecutionCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: WorkFlowExecutionUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkFlowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: WorkFlowExecutionUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: WorkFlowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkFlowCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkFlowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowExecutionCreateInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    phases?: ExectuionPhaseCreateNestedManyWithoutExecutionInput
    workflow: WorkFlowCreateNestedOneWithoutExecutionsInput
  }

  export type WorkFlowExecutionUncheckedCreateInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    phases?: ExectuionPhaseUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type WorkFlowExecutionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phases?: ExectuionPhaseUpdateManyWithoutExecutionNestedInput
    workflow?: WorkFlowUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phases?: ExectuionPhaseUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type WorkFlowExecutionCreateManyInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type WorkFlowExecutionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkFlowExecutionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExectuionPhaseCreateInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    execution: WorkFlowExecutionCreateNestedOneWithoutPhasesInput
  }

  export type ExectuionPhaseUncheckedCreateInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
  }

  export type ExectuionPhaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    execution?: WorkFlowExecutionUpdateOneRequiredWithoutPhasesNestedInput
  }

  export type ExectuionPhaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
  }

  export type ExectuionPhaseCreateManyInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
    workflowExecutionId: string
  }

  export type ExectuionPhaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExectuionPhaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
    workflowExecutionId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkFlowExecutionListRelationFilter = {
    every?: WorkFlowExecutionWhereInput
    some?: WorkFlowExecutionWhereInput
    none?: WorkFlowExecutionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkFlowExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkFlowNameUserIdCompoundUniqueInput = {
    name: string
    userId: string
  }

  export type WorkFlowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkFlowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkFlowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    definition?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ExectuionPhaseListRelationFilter = {
    every?: ExectuionPhaseWhereInput
    some?: ExectuionPhaseWhereInput
    none?: ExectuionPhaseWhereInput
  }

  export type WorkFlowScalarRelationFilter = {
    is?: WorkFlowWhereInput
    isNot?: WorkFlowWhereInput
  }

  export type ExectuionPhaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkFlowExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type WorkFlowExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type WorkFlowExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    trigger?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WorkFlowExecutionScalarRelationFilter = {
    is?: WorkFlowExecutionWhereInput
    isNot?: WorkFlowExecutionWhereInput
  }

  export type ExectuionPhaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExectuionPhaseAvgOrderByAggregateInput = {
    number?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type ExectuionPhaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExectuionPhaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    number?: SortOrder
    node?: SortOrder
    name?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    inputs?: SortOrder
    outputs?: SortOrder
    creditsConsumed?: SortOrder
    workflowExecutionId?: SortOrder
  }

  export type ExectuionPhaseSumOrderByAggregateInput = {
    number?: SortOrder
    creditsConsumed?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type WorkFlowExecutionCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutWorkflowInput, WorkFlowExecutionUncheckedCreateWithoutWorkflowInput> | WorkFlowExecutionCreateWithoutWorkflowInput[] | WorkFlowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutWorkflowInput | WorkFlowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkFlowExecutionCreateManyWorkflowInputEnvelope
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
  }

  export type WorkFlowExecutionUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutWorkflowInput, WorkFlowExecutionUncheckedCreateWithoutWorkflowInput> | WorkFlowExecutionCreateWithoutWorkflowInput[] | WorkFlowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutWorkflowInput | WorkFlowExecutionCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkFlowExecutionCreateManyWorkflowInputEnvelope
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkFlowExecutionUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutWorkflowInput, WorkFlowExecutionUncheckedCreateWithoutWorkflowInput> | WorkFlowExecutionCreateWithoutWorkflowInput[] | WorkFlowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutWorkflowInput | WorkFlowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkFlowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkFlowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkFlowExecutionCreateManyWorkflowInputEnvelope
    set?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    disconnect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    delete?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    update?: WorkFlowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkFlowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkFlowExecutionUpdateManyWithWhereWithoutWorkflowInput | WorkFlowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
  }

  export type WorkFlowExecutionUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutWorkflowInput, WorkFlowExecutionUncheckedCreateWithoutWorkflowInput> | WorkFlowExecutionCreateWithoutWorkflowInput[] | WorkFlowExecutionUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutWorkflowInput | WorkFlowExecutionCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkFlowExecutionUpsertWithWhereUniqueWithoutWorkflowInput | WorkFlowExecutionUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkFlowExecutionCreateManyWorkflowInputEnvelope
    set?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    disconnect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    delete?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    connect?: WorkFlowExecutionWhereUniqueInput | WorkFlowExecutionWhereUniqueInput[]
    update?: WorkFlowExecutionUpdateWithWhereUniqueWithoutWorkflowInput | WorkFlowExecutionUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkFlowExecutionUpdateManyWithWhereWithoutWorkflowInput | WorkFlowExecutionUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
  }

  export type ExectuionPhaseCreateNestedManyWithoutExecutionInput = {
    create?: XOR<ExectuionPhaseCreateWithoutExecutionInput, ExectuionPhaseUncheckedCreateWithoutExecutionInput> | ExectuionPhaseCreateWithoutExecutionInput[] | ExectuionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExectuionPhaseCreateOrConnectWithoutExecutionInput | ExectuionPhaseCreateOrConnectWithoutExecutionInput[]
    createMany?: ExectuionPhaseCreateManyExecutionInputEnvelope
    connect?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
  }

  export type WorkFlowCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutExecutionsInput
    connect?: WorkFlowWhereUniqueInput
  }

  export type ExectuionPhaseUncheckedCreateNestedManyWithoutExecutionInput = {
    create?: XOR<ExectuionPhaseCreateWithoutExecutionInput, ExectuionPhaseUncheckedCreateWithoutExecutionInput> | ExectuionPhaseCreateWithoutExecutionInput[] | ExectuionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExectuionPhaseCreateOrConnectWithoutExecutionInput | ExectuionPhaseCreateOrConnectWithoutExecutionInput[]
    createMany?: ExectuionPhaseCreateManyExecutionInputEnvelope
    connect?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ExectuionPhaseUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<ExectuionPhaseCreateWithoutExecutionInput, ExectuionPhaseUncheckedCreateWithoutExecutionInput> | ExectuionPhaseCreateWithoutExecutionInput[] | ExectuionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExectuionPhaseCreateOrConnectWithoutExecutionInput | ExectuionPhaseCreateOrConnectWithoutExecutionInput[]
    upsert?: ExectuionPhaseUpsertWithWhereUniqueWithoutExecutionInput | ExectuionPhaseUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: ExectuionPhaseCreateManyExecutionInputEnvelope
    set?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    disconnect?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    delete?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    connect?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    update?: ExectuionPhaseUpdateWithWhereUniqueWithoutExecutionInput | ExectuionPhaseUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: ExectuionPhaseUpdateManyWithWhereWithoutExecutionInput | ExectuionPhaseUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: ExectuionPhaseScalarWhereInput | ExectuionPhaseScalarWhereInput[]
  }

  export type WorkFlowUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: WorkFlowCreateOrConnectWithoutExecutionsInput
    upsert?: WorkFlowUpsertWithoutExecutionsInput
    connect?: WorkFlowWhereUniqueInput
    update?: XOR<XOR<WorkFlowUpdateToOneWithWhereWithoutExecutionsInput, WorkFlowUpdateWithoutExecutionsInput>, WorkFlowUncheckedUpdateWithoutExecutionsInput>
  }

  export type ExectuionPhaseUncheckedUpdateManyWithoutExecutionNestedInput = {
    create?: XOR<ExectuionPhaseCreateWithoutExecutionInput, ExectuionPhaseUncheckedCreateWithoutExecutionInput> | ExectuionPhaseCreateWithoutExecutionInput[] | ExectuionPhaseUncheckedCreateWithoutExecutionInput[]
    connectOrCreate?: ExectuionPhaseCreateOrConnectWithoutExecutionInput | ExectuionPhaseCreateOrConnectWithoutExecutionInput[]
    upsert?: ExectuionPhaseUpsertWithWhereUniqueWithoutExecutionInput | ExectuionPhaseUpsertWithWhereUniqueWithoutExecutionInput[]
    createMany?: ExectuionPhaseCreateManyExecutionInputEnvelope
    set?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    disconnect?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    delete?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    connect?: ExectuionPhaseWhereUniqueInput | ExectuionPhaseWhereUniqueInput[]
    update?: ExectuionPhaseUpdateWithWhereUniqueWithoutExecutionInput | ExectuionPhaseUpdateWithWhereUniqueWithoutExecutionInput[]
    updateMany?: ExectuionPhaseUpdateManyWithWhereWithoutExecutionInput | ExectuionPhaseUpdateManyWithWhereWithoutExecutionInput[]
    deleteMany?: ExectuionPhaseScalarWhereInput | ExectuionPhaseScalarWhereInput[]
  }

  export type WorkFlowExecutionCreateNestedOneWithoutPhasesInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutPhasesInput, WorkFlowExecutionUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutPhasesInput
    connect?: WorkFlowExecutionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkFlowExecutionUpdateOneRequiredWithoutPhasesNestedInput = {
    create?: XOR<WorkFlowExecutionCreateWithoutPhasesInput, WorkFlowExecutionUncheckedCreateWithoutPhasesInput>
    connectOrCreate?: WorkFlowExecutionCreateOrConnectWithoutPhasesInput
    upsert?: WorkFlowExecutionUpsertWithoutPhasesInput
    connect?: WorkFlowExecutionWhereUniqueInput
    update?: XOR<XOR<WorkFlowExecutionUpdateToOneWithWhereWithoutPhasesInput, WorkFlowExecutionUpdateWithoutPhasesInput>, WorkFlowExecutionUncheckedUpdateWithoutPhasesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WorkFlowExecutionCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    phases?: ExectuionPhaseCreateNestedManyWithoutExecutionInput
  }

  export type WorkFlowExecutionUncheckedCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    phases?: ExectuionPhaseUncheckedCreateNestedManyWithoutExecutionInput
  }

  export type WorkFlowExecutionCreateOrConnectWithoutWorkflowInput = {
    where: WorkFlowExecutionWhereUniqueInput
    create: XOR<WorkFlowExecutionCreateWithoutWorkflowInput, WorkFlowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkFlowExecutionCreateManyWorkflowInputEnvelope = {
    data: WorkFlowExecutionCreateManyWorkflowInput | WorkFlowExecutionCreateManyWorkflowInput[]
  }

  export type WorkFlowExecutionUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkFlowExecutionWhereUniqueInput
    update: XOR<WorkFlowExecutionUpdateWithoutWorkflowInput, WorkFlowExecutionUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkFlowExecutionCreateWithoutWorkflowInput, WorkFlowExecutionUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkFlowExecutionUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkFlowExecutionWhereUniqueInput
    data: XOR<WorkFlowExecutionUpdateWithoutWorkflowInput, WorkFlowExecutionUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkFlowExecutionUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkFlowExecutionScalarWhereInput
    data: XOR<WorkFlowExecutionUpdateManyMutationInput, WorkFlowExecutionUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkFlowExecutionScalarWhereInput = {
    AND?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
    OR?: WorkFlowExecutionScalarWhereInput[]
    NOT?: WorkFlowExecutionScalarWhereInput | WorkFlowExecutionScalarWhereInput[]
    id?: StringFilter<"WorkFlowExecution"> | string
    workflowId?: StringFilter<"WorkFlowExecution"> | string
    userId?: StringFilter<"WorkFlowExecution"> | string
    trigger?: StringFilter<"WorkFlowExecution"> | string
    status?: StringFilter<"WorkFlowExecution"> | string
    createdAt?: DateTimeFilter<"WorkFlowExecution"> | Date | string
    startedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"WorkFlowExecution"> | Date | string | null
  }

  export type ExectuionPhaseCreateWithoutExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
  }

  export type ExectuionPhaseUncheckedCreateWithoutExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
  }

  export type ExectuionPhaseCreateOrConnectWithoutExecutionInput = {
    where: ExectuionPhaseWhereUniqueInput
    create: XOR<ExectuionPhaseCreateWithoutExecutionInput, ExectuionPhaseUncheckedCreateWithoutExecutionInput>
  }

  export type ExectuionPhaseCreateManyExecutionInputEnvelope = {
    data: ExectuionPhaseCreateManyExecutionInput | ExectuionPhaseCreateManyExecutionInput[]
  }

  export type WorkFlowCreateWithoutExecutionsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkFlowUncheckedCreateWithoutExecutionsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    definition: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkFlowCreateOrConnectWithoutExecutionsInput = {
    where: WorkFlowWhereUniqueInput
    create: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
  }

  export type ExectuionPhaseUpsertWithWhereUniqueWithoutExecutionInput = {
    where: ExectuionPhaseWhereUniqueInput
    update: XOR<ExectuionPhaseUpdateWithoutExecutionInput, ExectuionPhaseUncheckedUpdateWithoutExecutionInput>
    create: XOR<ExectuionPhaseCreateWithoutExecutionInput, ExectuionPhaseUncheckedCreateWithoutExecutionInput>
  }

  export type ExectuionPhaseUpdateWithWhereUniqueWithoutExecutionInput = {
    where: ExectuionPhaseWhereUniqueInput
    data: XOR<ExectuionPhaseUpdateWithoutExecutionInput, ExectuionPhaseUncheckedUpdateWithoutExecutionInput>
  }

  export type ExectuionPhaseUpdateManyWithWhereWithoutExecutionInput = {
    where: ExectuionPhaseScalarWhereInput
    data: XOR<ExectuionPhaseUpdateManyMutationInput, ExectuionPhaseUncheckedUpdateManyWithoutExecutionInput>
  }

  export type ExectuionPhaseScalarWhereInput = {
    AND?: ExectuionPhaseScalarWhereInput | ExectuionPhaseScalarWhereInput[]
    OR?: ExectuionPhaseScalarWhereInput[]
    NOT?: ExectuionPhaseScalarWhereInput | ExectuionPhaseScalarWhereInput[]
    id?: StringFilter<"ExectuionPhase"> | string
    userId?: StringFilter<"ExectuionPhase"> | string
    status?: StringFilter<"ExectuionPhase"> | string
    number?: IntFilter<"ExectuionPhase"> | number
    node?: StringFilter<"ExectuionPhase"> | string
    name?: StringFilter<"ExectuionPhase"> | string
    startedAt?: DateTimeNullableFilter<"ExectuionPhase"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"ExectuionPhase"> | Date | string | null
    inputs?: StringNullableFilter<"ExectuionPhase"> | string | null
    outputs?: StringNullableFilter<"ExectuionPhase"> | string | null
    creditsConsumed?: IntNullableFilter<"ExectuionPhase"> | number | null
    workflowExecutionId?: StringFilter<"ExectuionPhase"> | string
  }

  export type WorkFlowUpsertWithoutExecutionsInput = {
    update: XOR<WorkFlowUpdateWithoutExecutionsInput, WorkFlowUncheckedUpdateWithoutExecutionsInput>
    create: XOR<WorkFlowCreateWithoutExecutionsInput, WorkFlowUncheckedCreateWithoutExecutionsInput>
    where?: WorkFlowWhereInput
  }

  export type WorkFlowUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: WorkFlowWhereInput
    data: XOR<WorkFlowUpdateWithoutExecutionsInput, WorkFlowUncheckedUpdateWithoutExecutionsInput>
  }

  export type WorkFlowUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowUncheckedUpdateWithoutExecutionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkFlowExecutionCreateWithoutPhasesInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    workflow: WorkFlowCreateNestedOneWithoutExecutionsInput
  }

  export type WorkFlowExecutionUncheckedCreateWithoutPhasesInput = {
    id?: string
    workflowId: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type WorkFlowExecutionCreateOrConnectWithoutPhasesInput = {
    where: WorkFlowExecutionWhereUniqueInput
    create: XOR<WorkFlowExecutionCreateWithoutPhasesInput, WorkFlowExecutionUncheckedCreateWithoutPhasesInput>
  }

  export type WorkFlowExecutionUpsertWithoutPhasesInput = {
    update: XOR<WorkFlowExecutionUpdateWithoutPhasesInput, WorkFlowExecutionUncheckedUpdateWithoutPhasesInput>
    create: XOR<WorkFlowExecutionCreateWithoutPhasesInput, WorkFlowExecutionUncheckedCreateWithoutPhasesInput>
    where?: WorkFlowExecutionWhereInput
  }

  export type WorkFlowExecutionUpdateToOneWithWhereWithoutPhasesInput = {
    where?: WorkFlowExecutionWhereInput
    data: XOR<WorkFlowExecutionUpdateWithoutPhasesInput, WorkFlowExecutionUncheckedUpdateWithoutPhasesInput>
  }

  export type WorkFlowExecutionUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workflow?: WorkFlowUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateWithoutPhasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkFlowExecutionCreateManyWorkflowInput = {
    id?: string
    userId: string
    trigger: string
    status: string
    createdAt?: Date | string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
  }

  export type WorkFlowExecutionUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phases?: ExectuionPhaseUpdateManyWithoutExecutionNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    phases?: ExectuionPhaseUncheckedUpdateManyWithoutExecutionNestedInput
  }

  export type WorkFlowExecutionUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    trigger?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExectuionPhaseCreateManyExecutionInput = {
    id?: string
    userId: string
    status: string
    number: number
    node: string
    name: string
    startedAt?: Date | string | null
    completedAt?: Date | string | null
    inputs?: string | null
    outputs?: string | null
    creditsConsumed?: number | null
  }

  export type ExectuionPhaseUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExectuionPhaseUncheckedUpdateWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExectuionPhaseUncheckedUpdateManyWithoutExecutionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    node?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    inputs?: NullableStringFieldUpdateOperationsInput | string | null
    outputs?: NullableStringFieldUpdateOperationsInput | string | null
    creditsConsumed?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}