
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Brief
 * 
 */
export type Brief = $Result.DefaultSelection<Prisma.$BriefPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  BRAND: 'BRAND',
  CREATOR: 'CREATOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const BriefStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type BriefStatus = (typeof BriefStatus)[keyof typeof BriefStatus]


export const BidStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type BidStatus = (typeof BidStatus)[keyof typeof BidStatus]


export const SubmissionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REVISIONS: 'REVISIONS'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BriefStatus = $Enums.BriefStatus

export const BriefStatus: typeof $Enums.BriefStatus

export type BidStatus = $Enums.BidStatus

export const BidStatus: typeof $Enums.BidStatus

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brief`: Exposes CRUD operations for the **Brief** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Briefs
    * const briefs = await prisma.brief.findMany()
    * ```
    */
  get brief(): Prisma.BriefDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Brief: 'Brief',
    Bid: 'Bid',
    Project: 'Project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "brief" | "bid" | "project"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Brief: {
        payload: Prisma.$BriefPayload<ExtArgs>
        fields: Prisma.BriefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BriefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BriefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>
          }
          findFirst: {
            args: Prisma.BriefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BriefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>
          }
          findMany: {
            args: Prisma.BriefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>[]
          }
          create: {
            args: Prisma.BriefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>
          }
          createMany: {
            args: Prisma.BriefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BriefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>[]
          }
          delete: {
            args: Prisma.BriefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>
          }
          update: {
            args: Prisma.BriefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>
          }
          deleteMany: {
            args: Prisma.BriefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BriefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BriefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>[]
          }
          upsert: {
            args: Prisma.BriefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BriefPayload>
          }
          aggregate: {
            args: Prisma.BriefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrief>
          }
          groupBy: {
            args: Prisma.BriefGroupByArgs<ExtArgs>
            result: $Utils.Optional<BriefGroupByOutputType>[]
          }
          count: {
            args: Prisma.BriefCountArgs<ExtArgs>
            result: $Utils.Optional<BriefCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    brief?: BriefOmit
    bid?: BidOmit
    project?: ProjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    briefsAsBrand: number
    bidsAsCreator: number
    projectsAsBrand: number
    projectsAsCreator: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    briefsAsBrand?: boolean | UserCountOutputTypeCountBriefsAsBrandArgs
    bidsAsCreator?: boolean | UserCountOutputTypeCountBidsAsCreatorArgs
    projectsAsBrand?: boolean | UserCountOutputTypeCountProjectsAsBrandArgs
    projectsAsCreator?: boolean | UserCountOutputTypeCountProjectsAsCreatorArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBriefsAsBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BriefWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsAsBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type BriefCountOutputType
   */

  export type BriefCountOutputType = {
    bids: number
    projects: number
  }

  export type BriefCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | BriefCountOutputTypeCountBidsArgs
    projects?: boolean | BriefCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * BriefCountOutputType without action
   */
  export type BriefCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BriefCountOutputType
     */
    select?: BriefCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BriefCountOutputType without action
   */
  export type BriefCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * BriefCountOutputType without action
   */
  export type BriefCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    role: $Enums.Role | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    role: $Enums.Role | null
    credits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    role: number
    credits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    role?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    role?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    role?: true
    credits?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    briefsAsBrand?: boolean | User$briefsAsBrandArgs<ExtArgs>
    bidsAsCreator?: boolean | User$bidsAsCreatorArgs<ExtArgs>
    projectsAsBrand?: boolean | User$projectsAsBrandArgs<ExtArgs>
    projectsAsCreator?: boolean | User$projectsAsCreatorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    role?: boolean
    credits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "role" | "credits" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    briefsAsBrand?: boolean | User$briefsAsBrandArgs<ExtArgs>
    bidsAsCreator?: boolean | User$bidsAsCreatorArgs<ExtArgs>
    projectsAsBrand?: boolean | User$projectsAsBrandArgs<ExtArgs>
    projectsAsCreator?: boolean | User$projectsAsCreatorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      briefsAsBrand: Prisma.$BriefPayload<ExtArgs>[]
      bidsAsCreator: Prisma.$BidPayload<ExtArgs>[]
      projectsAsBrand: Prisma.$ProjectPayload<ExtArgs>[]
      projectsAsCreator: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      role: $Enums.Role
      credits: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    briefsAsBrand<T extends User$briefsAsBrandArgs<ExtArgs> = {}>(args?: Subset<T, User$briefsAsBrandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bidsAsCreator<T extends User$bidsAsCreatorArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsAsCreatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsAsBrand<T extends User$projectsAsBrandArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsAsBrandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsAsCreator<T extends User$projectsAsCreatorArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsAsCreatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.briefsAsBrand
   */
  export type User$briefsAsBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    where?: BriefWhereInput
    orderBy?: BriefOrderByWithRelationInput | BriefOrderByWithRelationInput[]
    cursor?: BriefWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BriefScalarFieldEnum | BriefScalarFieldEnum[]
  }

  /**
   * User.bidsAsCreator
   */
  export type User$bidsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * User.projectsAsBrand
   */
  export type User$projectsAsBrandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.projectsAsCreator
   */
  export type User$projectsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Brief
   */

  export type AggregateBrief = {
    _count: BriefCountAggregateOutputType | null
    _min: BriefMinAggregateOutputType | null
    _max: BriefMaxAggregateOutputType | null
  }

  export type BriefMinAggregateOutputType = {
    id: string | null
    title: string | null
    productDescription: string | null
    hook1: string | null
    hook2: string | null
    hook3: string | null
    status: $Enums.BriefStatus | null
    brandId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BriefMaxAggregateOutputType = {
    id: string | null
    title: string | null
    productDescription: string | null
    hook1: string | null
    hook2: string | null
    hook3: string | null
    status: $Enums.BriefStatus | null
    brandId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BriefCountAggregateOutputType = {
    id: number
    title: number
    productDescription: number
    hook1: number
    hook2: number
    hook3: number
    status: number
    brandId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BriefMinAggregateInputType = {
    id?: true
    title?: true
    productDescription?: true
    hook1?: true
    hook2?: true
    hook3?: true
    status?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BriefMaxAggregateInputType = {
    id?: true
    title?: true
    productDescription?: true
    hook1?: true
    hook2?: true
    hook3?: true
    status?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BriefCountAggregateInputType = {
    id?: true
    title?: true
    productDescription?: true
    hook1?: true
    hook2?: true
    hook3?: true
    status?: true
    brandId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BriefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brief to aggregate.
     */
    where?: BriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Briefs to fetch.
     */
    orderBy?: BriefOrderByWithRelationInput | BriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Briefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Briefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Briefs
    **/
    _count?: true | BriefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BriefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BriefMaxAggregateInputType
  }

  export type GetBriefAggregateType<T extends BriefAggregateArgs> = {
        [P in keyof T & keyof AggregateBrief]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrief[P]>
      : GetScalarType<T[P], AggregateBrief[P]>
  }




  export type BriefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BriefWhereInput
    orderBy?: BriefOrderByWithAggregationInput | BriefOrderByWithAggregationInput[]
    by: BriefScalarFieldEnum[] | BriefScalarFieldEnum
    having?: BriefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BriefCountAggregateInputType | true
    _min?: BriefMinAggregateInputType
    _max?: BriefMaxAggregateInputType
  }

  export type BriefGroupByOutputType = {
    id: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status: $Enums.BriefStatus
    brandId: string
    createdAt: Date
    updatedAt: Date
    _count: BriefCountAggregateOutputType | null
    _min: BriefMinAggregateOutputType | null
    _max: BriefMaxAggregateOutputType | null
  }

  type GetBriefGroupByPayload<T extends BriefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BriefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BriefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BriefGroupByOutputType[P]>
            : GetScalarType<T[P], BriefGroupByOutputType[P]>
        }
      >
    >


  export type BriefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    productDescription?: boolean
    hook1?: boolean
    hook2?: boolean
    hook3?: boolean
    status?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
    bids?: boolean | Brief$bidsArgs<ExtArgs>
    projects?: boolean | Brief$projectsArgs<ExtArgs>
    _count?: boolean | BriefCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brief"]>

  export type BriefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    productDescription?: boolean
    hook1?: boolean
    hook2?: boolean
    hook3?: boolean
    status?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brief"]>

  export type BriefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    productDescription?: boolean
    hook1?: boolean
    hook2?: boolean
    hook3?: boolean
    status?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brief"]>

  export type BriefSelectScalar = {
    id?: boolean
    title?: boolean
    productDescription?: boolean
    hook1?: boolean
    hook2?: boolean
    hook3?: boolean
    status?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BriefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "productDescription" | "hook1" | "hook2" | "hook3" | "status" | "brandId" | "createdAt" | "updatedAt", ExtArgs["result"]["brief"]>
  export type BriefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
    bids?: boolean | Brief$bidsArgs<ExtArgs>
    projects?: boolean | Brief$projectsArgs<ExtArgs>
    _count?: boolean | BriefCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BriefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BriefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BriefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brief"
    objects: {
      brand: Prisma.$UserPayload<ExtArgs>
      bids: Prisma.$BidPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      productDescription: string
      hook1: string
      hook2: string
      hook3: string
      status: $Enums.BriefStatus
      brandId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["brief"]>
    composites: {}
  }

  type BriefGetPayload<S extends boolean | null | undefined | BriefDefaultArgs> = $Result.GetResult<Prisma.$BriefPayload, S>

  type BriefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BriefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BriefCountAggregateInputType | true
    }

  export interface BriefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brief'], meta: { name: 'Brief' } }
    /**
     * Find zero or one Brief that matches the filter.
     * @param {BriefFindUniqueArgs} args - Arguments to find a Brief
     * @example
     * // Get one Brief
     * const brief = await prisma.brief.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BriefFindUniqueArgs>(args: SelectSubset<T, BriefFindUniqueArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brief that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BriefFindUniqueOrThrowArgs} args - Arguments to find a Brief
     * @example
     * // Get one Brief
     * const brief = await prisma.brief.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BriefFindUniqueOrThrowArgs>(args: SelectSubset<T, BriefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brief that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BriefFindFirstArgs} args - Arguments to find a Brief
     * @example
     * // Get one Brief
     * const brief = await prisma.brief.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BriefFindFirstArgs>(args?: SelectSubset<T, BriefFindFirstArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brief that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BriefFindFirstOrThrowArgs} args - Arguments to find a Brief
     * @example
     * // Get one Brief
     * const brief = await prisma.brief.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BriefFindFirstOrThrowArgs>(args?: SelectSubset<T, BriefFindFirstOrThrowArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Briefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BriefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Briefs
     * const briefs = await prisma.brief.findMany()
     * 
     * // Get first 10 Briefs
     * const briefs = await prisma.brief.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const briefWithIdOnly = await prisma.brief.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BriefFindManyArgs>(args?: SelectSubset<T, BriefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brief.
     * @param {BriefCreateArgs} args - Arguments to create a Brief.
     * @example
     * // Create one Brief
     * const Brief = await prisma.brief.create({
     *   data: {
     *     // ... data to create a Brief
     *   }
     * })
     * 
     */
    create<T extends BriefCreateArgs>(args: SelectSubset<T, BriefCreateArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Briefs.
     * @param {BriefCreateManyArgs} args - Arguments to create many Briefs.
     * @example
     * // Create many Briefs
     * const brief = await prisma.brief.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BriefCreateManyArgs>(args?: SelectSubset<T, BriefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Briefs and returns the data saved in the database.
     * @param {BriefCreateManyAndReturnArgs} args - Arguments to create many Briefs.
     * @example
     * // Create many Briefs
     * const brief = await prisma.brief.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Briefs and only return the `id`
     * const briefWithIdOnly = await prisma.brief.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BriefCreateManyAndReturnArgs>(args?: SelectSubset<T, BriefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brief.
     * @param {BriefDeleteArgs} args - Arguments to delete one Brief.
     * @example
     * // Delete one Brief
     * const Brief = await prisma.brief.delete({
     *   where: {
     *     // ... filter to delete one Brief
     *   }
     * })
     * 
     */
    delete<T extends BriefDeleteArgs>(args: SelectSubset<T, BriefDeleteArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brief.
     * @param {BriefUpdateArgs} args - Arguments to update one Brief.
     * @example
     * // Update one Brief
     * const brief = await prisma.brief.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BriefUpdateArgs>(args: SelectSubset<T, BriefUpdateArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Briefs.
     * @param {BriefDeleteManyArgs} args - Arguments to filter Briefs to delete.
     * @example
     * // Delete a few Briefs
     * const { count } = await prisma.brief.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BriefDeleteManyArgs>(args?: SelectSubset<T, BriefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Briefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BriefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Briefs
     * const brief = await prisma.brief.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BriefUpdateManyArgs>(args: SelectSubset<T, BriefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Briefs and returns the data updated in the database.
     * @param {BriefUpdateManyAndReturnArgs} args - Arguments to update many Briefs.
     * @example
     * // Update many Briefs
     * const brief = await prisma.brief.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Briefs and only return the `id`
     * const briefWithIdOnly = await prisma.brief.updateManyAndReturn({
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
    updateManyAndReturn<T extends BriefUpdateManyAndReturnArgs>(args: SelectSubset<T, BriefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brief.
     * @param {BriefUpsertArgs} args - Arguments to update or create a Brief.
     * @example
     * // Update or create a Brief
     * const brief = await prisma.brief.upsert({
     *   create: {
     *     // ... data to create a Brief
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brief we want to update
     *   }
     * })
     */
    upsert<T extends BriefUpsertArgs>(args: SelectSubset<T, BriefUpsertArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Briefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BriefCountArgs} args - Arguments to filter Briefs to count.
     * @example
     * // Count the number of Briefs
     * const count = await prisma.brief.count({
     *   where: {
     *     // ... the filter for the Briefs we want to count
     *   }
     * })
    **/
    count<T extends BriefCountArgs>(
      args?: Subset<T, BriefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BriefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BriefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BriefAggregateArgs>(args: Subset<T, BriefAggregateArgs>): Prisma.PrismaPromise<GetBriefAggregateType<T>>

    /**
     * Group by Brief.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BriefGroupByArgs} args - Group by arguments.
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
      T extends BriefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BriefGroupByArgs['orderBy'] }
        : { orderBy?: BriefGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BriefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBriefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brief model
   */
  readonly fields: BriefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brief.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BriefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bids<T extends Brief$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Brief$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Brief$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Brief$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brief model
   */
  interface BriefFieldRefs {
    readonly id: FieldRef<"Brief", 'String'>
    readonly title: FieldRef<"Brief", 'String'>
    readonly productDescription: FieldRef<"Brief", 'String'>
    readonly hook1: FieldRef<"Brief", 'String'>
    readonly hook2: FieldRef<"Brief", 'String'>
    readonly hook3: FieldRef<"Brief", 'String'>
    readonly status: FieldRef<"Brief", 'BriefStatus'>
    readonly brandId: FieldRef<"Brief", 'String'>
    readonly createdAt: FieldRef<"Brief", 'DateTime'>
    readonly updatedAt: FieldRef<"Brief", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brief findUnique
   */
  export type BriefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * Filter, which Brief to fetch.
     */
    where: BriefWhereUniqueInput
  }

  /**
   * Brief findUniqueOrThrow
   */
  export type BriefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * Filter, which Brief to fetch.
     */
    where: BriefWhereUniqueInput
  }

  /**
   * Brief findFirst
   */
  export type BriefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * Filter, which Brief to fetch.
     */
    where?: BriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Briefs to fetch.
     */
    orderBy?: BriefOrderByWithRelationInput | BriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Briefs.
     */
    cursor?: BriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Briefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Briefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Briefs.
     */
    distinct?: BriefScalarFieldEnum | BriefScalarFieldEnum[]
  }

  /**
   * Brief findFirstOrThrow
   */
  export type BriefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * Filter, which Brief to fetch.
     */
    where?: BriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Briefs to fetch.
     */
    orderBy?: BriefOrderByWithRelationInput | BriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Briefs.
     */
    cursor?: BriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Briefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Briefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Briefs.
     */
    distinct?: BriefScalarFieldEnum | BriefScalarFieldEnum[]
  }

  /**
   * Brief findMany
   */
  export type BriefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * Filter, which Briefs to fetch.
     */
    where?: BriefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Briefs to fetch.
     */
    orderBy?: BriefOrderByWithRelationInput | BriefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Briefs.
     */
    cursor?: BriefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Briefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Briefs.
     */
    skip?: number
    distinct?: BriefScalarFieldEnum | BriefScalarFieldEnum[]
  }

  /**
   * Brief create
   */
  export type BriefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * The data needed to create a Brief.
     */
    data: XOR<BriefCreateInput, BriefUncheckedCreateInput>
  }

  /**
   * Brief createMany
   */
  export type BriefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Briefs.
     */
    data: BriefCreateManyInput | BriefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brief createManyAndReturn
   */
  export type BriefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * The data used to create many Briefs.
     */
    data: BriefCreateManyInput | BriefCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brief update
   */
  export type BriefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * The data needed to update a Brief.
     */
    data: XOR<BriefUpdateInput, BriefUncheckedUpdateInput>
    /**
     * Choose, which Brief to update.
     */
    where: BriefWhereUniqueInput
  }

  /**
   * Brief updateMany
   */
  export type BriefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Briefs.
     */
    data: XOR<BriefUpdateManyMutationInput, BriefUncheckedUpdateManyInput>
    /**
     * Filter which Briefs to update
     */
    where?: BriefWhereInput
    /**
     * Limit how many Briefs to update.
     */
    limit?: number
  }

  /**
   * Brief updateManyAndReturn
   */
  export type BriefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * The data used to update Briefs.
     */
    data: XOR<BriefUpdateManyMutationInput, BriefUncheckedUpdateManyInput>
    /**
     * Filter which Briefs to update
     */
    where?: BriefWhereInput
    /**
     * Limit how many Briefs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Brief upsert
   */
  export type BriefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * The filter to search for the Brief to update in case it exists.
     */
    where: BriefWhereUniqueInput
    /**
     * In case the Brief found by the `where` argument doesn't exist, create a new Brief with this data.
     */
    create: XOR<BriefCreateInput, BriefUncheckedCreateInput>
    /**
     * In case the Brief was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BriefUpdateInput, BriefUncheckedUpdateInput>
  }

  /**
   * Brief delete
   */
  export type BriefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
    /**
     * Filter which Brief to delete.
     */
    where: BriefWhereUniqueInput
  }

  /**
   * Brief deleteMany
   */
  export type BriefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Briefs to delete
     */
    where?: BriefWhereInput
    /**
     * Limit how many Briefs to delete.
     */
    limit?: number
  }

  /**
   * Brief.bids
   */
  export type Brief$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Brief.projects
   */
  export type Brief$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Brief without action
   */
  export type BriefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brief
     */
    select?: BriefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brief
     */
    omit?: BriefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BriefInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    amount: number | null
  }

  export type BidSumAggregateOutputType = {
    amount: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    pitchText: string | null
    amount: number | null
    status: $Enums.BidStatus | null
    briefId: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    pitchText: string | null
    amount: number | null
    status: $Enums.BidStatus | null
    briefId: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    pitchText: number
    amount: number
    status: number
    briefId: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    amount?: true
  }

  export type BidSumAggregateInputType = {
    amount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    pitchText?: true
    amount?: true
    status?: true
    briefId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    pitchText?: true
    amount?: true
    status?: true
    briefId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    pitchText?: true
    amount?: true
    status?: true
    briefId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    pitchText: string
    amount: number
    status: $Enums.BidStatus
    briefId: string
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchText?: boolean
    amount?: boolean
    status?: boolean
    briefId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchText?: boolean
    amount?: boolean
    status?: boolean
    briefId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pitchText?: boolean
    amount?: boolean
    status?: boolean
    briefId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    pitchText?: boolean
    amount?: boolean
    status?: boolean
    briefId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pitchText" | "amount" | "status" | "briefId" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["bid"]>
  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      brief: Prisma.$BriefPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pitchText: string
      amount: number
      status: $Enums.BidStatus
      briefId: string
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {BidUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.updateManyAndReturn({
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
    updateManyAndReturn<T extends BidUpdateManyAndReturnArgs>(args: SelectSubset<T, BidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
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
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brief<T extends BriefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BriefDefaultArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bid model
   */
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly pitchText: FieldRef<"Bid", 'String'>
    readonly amount: FieldRef<"Bid", 'Int'>
    readonly status: FieldRef<"Bid", 'BidStatus'>
    readonly briefId: FieldRef<"Bid", 'String'>
    readonly creatorId: FieldRef<"Bid", 'String'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
    readonly updatedAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
  }

  /**
   * Bid updateManyAndReturn
   */
  export type BidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to delete.
     */
    limit?: number
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    videoUrl: string | null
    submissionStatus: $Enums.SubmissionStatus | null
    briefId: string | null
    brandId: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    videoUrl: string | null
    submissionStatus: $Enums.SubmissionStatus | null
    briefId: string | null
    brandId: string | null
    creatorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    videoUrl: number
    submissionStatus: number
    briefId: number
    brandId: number
    creatorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    videoUrl?: true
    submissionStatus?: true
    briefId?: true
    brandId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    videoUrl?: true
    submissionStatus?: true
    briefId?: true
    brandId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    videoUrl?: true
    submissionStatus?: true
    briefId?: true
    brandId?: true
    creatorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    videoUrl: string | null
    submissionStatus: $Enums.SubmissionStatus
    briefId: string
    brandId: string
    creatorId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoUrl?: boolean
    submissionStatus?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoUrl?: boolean
    submissionStatus?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    videoUrl?: boolean
    submissionStatus?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    videoUrl?: boolean
    submissionStatus?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "videoUrl" | "submissionStatus" | "briefId" | "brandId" | "creatorId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      brief: Prisma.$BriefPayload<ExtArgs>
      brand: Prisma.$UserPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      videoUrl: string | null
      submissionStatus: $Enums.SubmissionStatus
      briefId: string
      brandId: string
      creatorId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brief<T extends BriefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BriefDefaultArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly videoUrl: FieldRef<"Project", 'String'>
    readonly submissionStatus: FieldRef<"Project", 'SubmissionStatus'>
    readonly briefId: FieldRef<"Project", 'String'>
    readonly brandId: FieldRef<"Project", 'String'>
    readonly creatorId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    role: 'role',
    credits: 'credits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BriefScalarFieldEnum: {
    id: 'id',
    title: 'title',
    productDescription: 'productDescription',
    hook1: 'hook1',
    hook2: 'hook2',
    hook3: 'hook3',
    status: 'status',
    brandId: 'brandId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BriefScalarFieldEnum = (typeof BriefScalarFieldEnum)[keyof typeof BriefScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    pitchText: 'pitchText',
    amount: 'amount',
    status: 'status',
    briefId: 'briefId',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    videoUrl: 'videoUrl',
    submissionStatus: 'submissionStatus',
    briefId: 'briefId',
    brandId: 'brandId',
    creatorId: 'creatorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BriefStatus'
   */
  export type EnumBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BriefStatus'>
    


  /**
   * Reference to a field of type 'BriefStatus[]'
   */
  export type ListEnumBriefStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BriefStatus[]'>
    


  /**
   * Reference to a field of type 'BidStatus'
   */
  export type EnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus'>
    


  /**
   * Reference to a field of type 'BidStatus[]'
   */
  export type ListEnumBidStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BidStatus[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    credits?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    briefsAsBrand?: BriefListRelationFilter
    bidsAsCreator?: BidListRelationFilter
    projectsAsBrand?: ProjectListRelationFilter
    projectsAsCreator?: ProjectListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    briefsAsBrand?: BriefOrderByRelationAggregateInput
    bidsAsCreator?: BidOrderByRelationAggregateInput
    projectsAsBrand?: ProjectOrderByRelationAggregateInput
    projectsAsCreator?: ProjectOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumRoleFilter<"User"> | $Enums.Role
    credits?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    briefsAsBrand?: BriefListRelationFilter
    bidsAsCreator?: BidListRelationFilter
    projectsAsBrand?: ProjectListRelationFilter
    projectsAsCreator?: ProjectListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    credits?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BriefWhereInput = {
    AND?: BriefWhereInput | BriefWhereInput[]
    OR?: BriefWhereInput[]
    NOT?: BriefWhereInput | BriefWhereInput[]
    id?: StringFilter<"Brief"> | string
    title?: StringFilter<"Brief"> | string
    productDescription?: StringFilter<"Brief"> | string
    hook1?: StringFilter<"Brief"> | string
    hook2?: StringFilter<"Brief"> | string
    hook3?: StringFilter<"Brief"> | string
    status?: EnumBriefStatusFilter<"Brief"> | $Enums.BriefStatus
    brandId?: StringFilter<"Brief"> | string
    createdAt?: DateTimeFilter<"Brief"> | Date | string
    updatedAt?: DateTimeFilter<"Brief"> | Date | string
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    bids?: BidListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type BriefOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: UserOrderByWithRelationInput
    bids?: BidOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type BriefWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BriefWhereInput | BriefWhereInput[]
    OR?: BriefWhereInput[]
    NOT?: BriefWhereInput | BriefWhereInput[]
    title?: StringFilter<"Brief"> | string
    productDescription?: StringFilter<"Brief"> | string
    hook1?: StringFilter<"Brief"> | string
    hook2?: StringFilter<"Brief"> | string
    hook3?: StringFilter<"Brief"> | string
    status?: EnumBriefStatusFilter<"Brief"> | $Enums.BriefStatus
    brandId?: StringFilter<"Brief"> | string
    createdAt?: DateTimeFilter<"Brief"> | Date | string
    updatedAt?: DateTimeFilter<"Brief"> | Date | string
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    bids?: BidListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id">

  export type BriefOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BriefCountOrderByAggregateInput
    _max?: BriefMaxOrderByAggregateInput
    _min?: BriefMinOrderByAggregateInput
  }

  export type BriefScalarWhereWithAggregatesInput = {
    AND?: BriefScalarWhereWithAggregatesInput | BriefScalarWhereWithAggregatesInput[]
    OR?: BriefScalarWhereWithAggregatesInput[]
    NOT?: BriefScalarWhereWithAggregatesInput | BriefScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brief"> | string
    title?: StringWithAggregatesFilter<"Brief"> | string
    productDescription?: StringWithAggregatesFilter<"Brief"> | string
    hook1?: StringWithAggregatesFilter<"Brief"> | string
    hook2?: StringWithAggregatesFilter<"Brief"> | string
    hook3?: StringWithAggregatesFilter<"Brief"> | string
    status?: EnumBriefStatusWithAggregatesFilter<"Brief"> | $Enums.BriefStatus
    brandId?: StringWithAggregatesFilter<"Brief"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Brief"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Brief"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    pitchText?: StringFilter<"Bid"> | string
    amount?: IntFilter<"Bid"> | number
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    briefId?: StringFilter<"Bid"> | string
    creatorId?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    updatedAt?: DateTimeFilter<"Bid"> | Date | string
    brief?: XOR<BriefScalarRelationFilter, BriefWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    pitchText?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    briefId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brief?: BriefOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    pitchText?: StringFilter<"Bid"> | string
    amount?: IntFilter<"Bid"> | number
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    briefId?: StringFilter<"Bid"> | string
    creatorId?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    updatedAt?: DateTimeFilter<"Bid"> | Date | string
    brief?: XOR<BriefScalarRelationFilter, BriefWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    pitchText?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    briefId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    pitchText?: StringWithAggregatesFilter<"Bid"> | string
    amount?: IntWithAggregatesFilter<"Bid"> | number
    status?: EnumBidStatusWithAggregatesFilter<"Bid"> | $Enums.BidStatus
    briefId?: StringWithAggregatesFilter<"Bid"> | string
    creatorId?: StringWithAggregatesFilter<"Bid"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    videoUrl?: StringNullableFilter<"Project"> | string | null
    submissionStatus?: EnumSubmissionStatusFilter<"Project"> | $Enums.SubmissionStatus
    briefId?: StringFilter<"Project"> | string
    brandId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    brief?: XOR<BriefScalarRelationFilter, BriefWhereInput>
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    submissionStatus?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brief?: BriefOrderByWithRelationInput
    brand?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    videoUrl?: StringNullableFilter<"Project"> | string | null
    submissionStatus?: EnumSubmissionStatusFilter<"Project"> | $Enums.SubmissionStatus
    briefId?: StringFilter<"Project"> | string
    brandId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    brief?: XOR<BriefScalarRelationFilter, BriefWhereInput>
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    submissionStatus?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    submissionStatus?: EnumSubmissionStatusWithAggregatesFilter<"Project"> | $Enums.SubmissionStatus
    briefId?: StringWithAggregatesFilter<"Project"> | string
    brandId?: StringWithAggregatesFilter<"Project"> | string
    creatorId?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BriefCreateInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutBriefsAsBrandInput
    bids?: BidCreateNestedManyWithoutBriefInput
    projects?: ProjectCreateNestedManyWithoutBriefInput
  }

  export type BriefUncheckedCreateInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutBriefInput
    projects?: ProjectUncheckedCreateNestedManyWithoutBriefInput
  }

  export type BriefUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutBriefsAsBrandNestedInput
    bids?: BidUpdateManyWithoutBriefNestedInput
    projects?: ProjectUpdateManyWithoutBriefNestedInput
  }

  export type BriefUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutBriefNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutBriefNestedInput
  }

  export type BriefCreateManyInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BriefUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BriefUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutBidsInput
    creator: UserCreateNestedOneWithoutBidsAsCreatorInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    briefId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutBidsNestedInput
    creator?: UserUpdateOneRequiredWithoutBidsAsCreatorNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    briefId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    briefId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    briefId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    briefId: string
    brandId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    briefId: string
    brandId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BriefListRelationFilter = {
    every?: BriefWhereInput
    some?: BriefWhereInput
    none?: BriefWhereInput
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type BriefOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | EnumBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBriefStatusFilter<$PrismaModel> | $Enums.BriefStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BriefCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BriefMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BriefMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | EnumBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.BriefStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBriefStatusFilter<$PrismaModel>
    _max?: NestedEnumBriefStatusFilter<$PrismaModel>
  }

  export type EnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type BriefScalarRelationFilter = {
    is?: BriefWhereInput
    isNot?: BriefWhereInput
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    pitchText?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    briefId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    pitchText?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    briefId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    pitchText?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    briefId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    videoUrl?: SortOrder
    submissionStatus?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    videoUrl?: SortOrder
    submissionStatus?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    videoUrl?: SortOrder
    submissionStatus?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type BriefCreateNestedManyWithoutBrandInput = {
    create?: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput> | BriefCreateWithoutBrandInput[] | BriefUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BriefCreateOrConnectWithoutBrandInput | BriefCreateOrConnectWithoutBrandInput[]
    createMany?: BriefCreateManyBrandInputEnvelope
    connect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput> | BidCreateWithoutCreatorInput[] | BidUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutCreatorInput | BidCreateOrConnectWithoutCreatorInput[]
    createMany?: BidCreateManyCreatorInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProjectCreateWithoutBrandInput, ProjectUncheckedCreateWithoutBrandInput> | ProjectCreateWithoutBrandInput[] | ProjectUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBrandInput | ProjectCreateOrConnectWithoutBrandInput[]
    createMany?: ProjectCreateManyBrandInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type BriefUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput> | BriefCreateWithoutBrandInput[] | BriefUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BriefCreateOrConnectWithoutBrandInput | BriefCreateOrConnectWithoutBrandInput[]
    createMany?: BriefCreateManyBrandInputEnvelope
    connect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput> | BidCreateWithoutCreatorInput[] | BidUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutCreatorInput | BidCreateOrConnectWithoutCreatorInput[]
    createMany?: BidCreateManyCreatorInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProjectCreateWithoutBrandInput, ProjectUncheckedCreateWithoutBrandInput> | ProjectCreateWithoutBrandInput[] | ProjectUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBrandInput | ProjectCreateOrConnectWithoutBrandInput[]
    createMany?: ProjectCreateManyBrandInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BriefUpdateManyWithoutBrandNestedInput = {
    create?: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput> | BriefCreateWithoutBrandInput[] | BriefUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BriefCreateOrConnectWithoutBrandInput | BriefCreateOrConnectWithoutBrandInput[]
    upsert?: BriefUpsertWithWhereUniqueWithoutBrandInput | BriefUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: BriefCreateManyBrandInputEnvelope
    set?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    disconnect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    delete?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    connect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    update?: BriefUpdateWithWhereUniqueWithoutBrandInput | BriefUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: BriefUpdateManyWithWhereWithoutBrandInput | BriefUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: BriefScalarWhereInput | BriefScalarWhereInput[]
  }

  export type BidUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput> | BidCreateWithoutCreatorInput[] | BidUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutCreatorInput | BidCreateOrConnectWithoutCreatorInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutCreatorInput | BidUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BidCreateManyCreatorInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutCreatorInput | BidUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BidUpdateManyWithWhereWithoutCreatorInput | BidUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProjectCreateWithoutBrandInput, ProjectUncheckedCreateWithoutBrandInput> | ProjectCreateWithoutBrandInput[] | ProjectUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBrandInput | ProjectCreateOrConnectWithoutBrandInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutBrandInput | ProjectUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProjectCreateManyBrandInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutBrandInput | ProjectUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutBrandInput | ProjectUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type BriefUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput> | BriefCreateWithoutBrandInput[] | BriefUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BriefCreateOrConnectWithoutBrandInput | BriefCreateOrConnectWithoutBrandInput[]
    upsert?: BriefUpsertWithWhereUniqueWithoutBrandInput | BriefUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: BriefCreateManyBrandInputEnvelope
    set?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    disconnect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    delete?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    connect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
    update?: BriefUpdateWithWhereUniqueWithoutBrandInput | BriefUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: BriefUpdateManyWithWhereWithoutBrandInput | BriefUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: BriefScalarWhereInput | BriefScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput> | BidCreateWithoutCreatorInput[] | BidUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutCreatorInput | BidCreateOrConnectWithoutCreatorInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutCreatorInput | BidUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BidCreateManyCreatorInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutCreatorInput | BidUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BidUpdateManyWithWhereWithoutCreatorInput | BidUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProjectCreateWithoutBrandInput, ProjectUncheckedCreateWithoutBrandInput> | ProjectCreateWithoutBrandInput[] | ProjectUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBrandInput | ProjectCreateOrConnectWithoutBrandInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutBrandInput | ProjectUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProjectCreateManyBrandInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutBrandInput | ProjectUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutBrandInput | ProjectUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput> | ProjectCreateWithoutCreatorInput[] | ProjectUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCreatorInput | ProjectCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCreatorInput | ProjectUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectCreateManyCreatorInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCreatorInput | ProjectUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCreatorInput | ProjectUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBriefsAsBrandInput = {
    create?: XOR<UserCreateWithoutBriefsAsBrandInput, UserUncheckedCreateWithoutBriefsAsBrandInput>
    connectOrCreate?: UserCreateOrConnectWithoutBriefsAsBrandInput
    connect?: UserWhereUniqueInput
  }

  export type BidCreateNestedManyWithoutBriefInput = {
    create?: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput> | BidCreateWithoutBriefInput[] | BidUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBriefInput | BidCreateOrConnectWithoutBriefInput[]
    createMany?: BidCreateManyBriefInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutBriefInput = {
    create?: XOR<ProjectCreateWithoutBriefInput, ProjectUncheckedCreateWithoutBriefInput> | ProjectCreateWithoutBriefInput[] | ProjectUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBriefInput | ProjectCreateOrConnectWithoutBriefInput[]
    createMany?: ProjectCreateManyBriefInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutBriefInput = {
    create?: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput> | BidCreateWithoutBriefInput[] | BidUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBriefInput | BidCreateOrConnectWithoutBriefInput[]
    createMany?: BidCreateManyBriefInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutBriefInput = {
    create?: XOR<ProjectCreateWithoutBriefInput, ProjectUncheckedCreateWithoutBriefInput> | ProjectCreateWithoutBriefInput[] | ProjectUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBriefInput | ProjectCreateOrConnectWithoutBriefInput[]
    createMany?: ProjectCreateManyBriefInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EnumBriefStatusFieldUpdateOperationsInput = {
    set?: $Enums.BriefStatus
  }

  export type UserUpdateOneRequiredWithoutBriefsAsBrandNestedInput = {
    create?: XOR<UserCreateWithoutBriefsAsBrandInput, UserUncheckedCreateWithoutBriefsAsBrandInput>
    connectOrCreate?: UserCreateOrConnectWithoutBriefsAsBrandInput
    upsert?: UserUpsertWithoutBriefsAsBrandInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBriefsAsBrandInput, UserUpdateWithoutBriefsAsBrandInput>, UserUncheckedUpdateWithoutBriefsAsBrandInput>
  }

  export type BidUpdateManyWithoutBriefNestedInput = {
    create?: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput> | BidCreateWithoutBriefInput[] | BidUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBriefInput | BidCreateOrConnectWithoutBriefInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutBriefInput | BidUpsertWithWhereUniqueWithoutBriefInput[]
    createMany?: BidCreateManyBriefInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutBriefInput | BidUpdateWithWhereUniqueWithoutBriefInput[]
    updateMany?: BidUpdateManyWithWhereWithoutBriefInput | BidUpdateManyWithWhereWithoutBriefInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutBriefNestedInput = {
    create?: XOR<ProjectCreateWithoutBriefInput, ProjectUncheckedCreateWithoutBriefInput> | ProjectCreateWithoutBriefInput[] | ProjectUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBriefInput | ProjectCreateOrConnectWithoutBriefInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutBriefInput | ProjectUpsertWithWhereUniqueWithoutBriefInput[]
    createMany?: ProjectCreateManyBriefInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutBriefInput | ProjectUpdateWithWhereUniqueWithoutBriefInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutBriefInput | ProjectUpdateManyWithWhereWithoutBriefInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutBriefNestedInput = {
    create?: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput> | BidCreateWithoutBriefInput[] | BidUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBriefInput | BidCreateOrConnectWithoutBriefInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutBriefInput | BidUpsertWithWhereUniqueWithoutBriefInput[]
    createMany?: BidCreateManyBriefInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutBriefInput | BidUpdateWithWhereUniqueWithoutBriefInput[]
    updateMany?: BidUpdateManyWithWhereWithoutBriefInput | BidUpdateManyWithWhereWithoutBriefInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutBriefNestedInput = {
    create?: XOR<ProjectCreateWithoutBriefInput, ProjectUncheckedCreateWithoutBriefInput> | ProjectCreateWithoutBriefInput[] | ProjectUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutBriefInput | ProjectCreateOrConnectWithoutBriefInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutBriefInput | ProjectUpsertWithWhereUniqueWithoutBriefInput[]
    createMany?: ProjectCreateManyBriefInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutBriefInput | ProjectUpdateWithWhereUniqueWithoutBriefInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutBriefInput | ProjectUpdateManyWithWhereWithoutBriefInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type BriefCreateNestedOneWithoutBidsInput = {
    create?: XOR<BriefCreateWithoutBidsInput, BriefUncheckedCreateWithoutBidsInput>
    connectOrCreate?: BriefCreateOrConnectWithoutBidsInput
    connect?: BriefWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBidsAsCreatorInput = {
    create?: XOR<UserCreateWithoutBidsAsCreatorInput, UserUncheckedCreateWithoutBidsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsAsCreatorInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBidStatusFieldUpdateOperationsInput = {
    set?: $Enums.BidStatus
  }

  export type BriefUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<BriefCreateWithoutBidsInput, BriefUncheckedCreateWithoutBidsInput>
    connectOrCreate?: BriefCreateOrConnectWithoutBidsInput
    upsert?: BriefUpsertWithoutBidsInput
    connect?: BriefWhereUniqueInput
    update?: XOR<XOR<BriefUpdateToOneWithWhereWithoutBidsInput, BriefUpdateWithoutBidsInput>, BriefUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateOneRequiredWithoutBidsAsCreatorNestedInput = {
    create?: XOR<UserCreateWithoutBidsAsCreatorInput, UserUncheckedCreateWithoutBidsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsAsCreatorInput
    upsert?: UserUpsertWithoutBidsAsCreatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsAsCreatorInput, UserUpdateWithoutBidsAsCreatorInput>, UserUncheckedUpdateWithoutBidsAsCreatorInput>
  }

  export type BriefCreateNestedOneWithoutProjectsInput = {
    create?: XOR<BriefCreateWithoutProjectsInput, BriefUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: BriefCreateOrConnectWithoutProjectsInput
    connect?: BriefWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsAsBrandInput = {
    create?: XOR<UserCreateWithoutProjectsAsBrandInput, UserUncheckedCreateWithoutProjectsAsBrandInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsAsBrandInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectsAsCreatorInput = {
    create?: XOR<UserCreateWithoutProjectsAsCreatorInput, UserUncheckedCreateWithoutProjectsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsAsCreatorInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type BriefUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<BriefCreateWithoutProjectsInput, BriefUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: BriefCreateOrConnectWithoutProjectsInput
    upsert?: BriefUpsertWithoutProjectsInput
    connect?: BriefWhereUniqueInput
    update?: XOR<XOR<BriefUpdateToOneWithWhereWithoutProjectsInput, BriefUpdateWithoutProjectsInput>, BriefUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput = {
    create?: XOR<UserCreateWithoutProjectsAsBrandInput, UserUncheckedCreateWithoutProjectsAsBrandInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsAsBrandInput
    upsert?: UserUpsertWithoutProjectsAsBrandInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsAsBrandInput, UserUpdateWithoutProjectsAsBrandInput>, UserUncheckedUpdateWithoutProjectsAsBrandInput>
  }

  export type UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput = {
    create?: XOR<UserCreateWithoutProjectsAsCreatorInput, UserUncheckedCreateWithoutProjectsAsCreatorInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsAsCreatorInput
    upsert?: UserUpsertWithoutProjectsAsCreatorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsAsCreatorInput, UserUpdateWithoutProjectsAsCreatorInput>, UserUncheckedUpdateWithoutProjectsAsCreatorInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumBriefStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | EnumBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBriefStatusFilter<$PrismaModel> | $Enums.BriefStatus
  }

  export type NestedEnumBriefStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BriefStatus | EnumBriefStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BriefStatus[] | ListEnumBriefStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBriefStatusWithAggregatesFilter<$PrismaModel> | $Enums.BriefStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBriefStatusFilter<$PrismaModel>
    _max?: NestedEnumBriefStatusFilter<$PrismaModel>
  }

  export type NestedEnumBidStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusFilter<$PrismaModel> | $Enums.BidStatus
  }

  export type NestedEnumBidStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BidStatus | EnumBidStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BidStatus[] | ListEnumBidStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBidStatusWithAggregatesFilter<$PrismaModel> | $Enums.BidStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBidStatusFilter<$PrismaModel>
    _max?: NestedEnumBidStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type BriefCreateWithoutBrandInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutBriefInput
    projects?: ProjectCreateNestedManyWithoutBriefInput
  }

  export type BriefUncheckedCreateWithoutBrandInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutBriefInput
    projects?: ProjectUncheckedCreateNestedManyWithoutBriefInput
  }

  export type BriefCreateOrConnectWithoutBrandInput = {
    where: BriefWhereUniqueInput
    create: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput>
  }

  export type BriefCreateManyBrandInputEnvelope = {
    data: BriefCreateManyBrandInput | BriefCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutCreatorInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutCreatorInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    briefId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateOrConnectWithoutCreatorInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput>
  }

  export type BidCreateManyCreatorInputEnvelope = {
    data: BidCreateManyCreatorInput | BidCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutBrandInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
  }

  export type ProjectUncheckedCreateWithoutBrandInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    briefId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutBrandInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBrandInput, ProjectUncheckedCreateWithoutBrandInput>
  }

  export type ProjectCreateManyBrandInputEnvelope = {
    data: ProjectCreateManyBrandInput | ProjectCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutCreatorInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
  }

  export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    briefId: string
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectCreateManyCreatorInputEnvelope = {
    data: ProjectCreateManyCreatorInput | ProjectCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BriefUpsertWithWhereUniqueWithoutBrandInput = {
    where: BriefWhereUniqueInput
    update: XOR<BriefUpdateWithoutBrandInput, BriefUncheckedUpdateWithoutBrandInput>
    create: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput>
  }

  export type BriefUpdateWithWhereUniqueWithoutBrandInput = {
    where: BriefWhereUniqueInput
    data: XOR<BriefUpdateWithoutBrandInput, BriefUncheckedUpdateWithoutBrandInput>
  }

  export type BriefUpdateManyWithWhereWithoutBrandInput = {
    where: BriefScalarWhereInput
    data: XOR<BriefUpdateManyMutationInput, BriefUncheckedUpdateManyWithoutBrandInput>
  }

  export type BriefScalarWhereInput = {
    AND?: BriefScalarWhereInput | BriefScalarWhereInput[]
    OR?: BriefScalarWhereInput[]
    NOT?: BriefScalarWhereInput | BriefScalarWhereInput[]
    id?: StringFilter<"Brief"> | string
    title?: StringFilter<"Brief"> | string
    productDescription?: StringFilter<"Brief"> | string
    hook1?: StringFilter<"Brief"> | string
    hook2?: StringFilter<"Brief"> | string
    hook3?: StringFilter<"Brief"> | string
    status?: EnumBriefStatusFilter<"Brief"> | $Enums.BriefStatus
    brandId?: StringFilter<"Brief"> | string
    createdAt?: DateTimeFilter<"Brief"> | Date | string
    updatedAt?: DateTimeFilter<"Brief"> | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutCreatorInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutCreatorInput, BidUncheckedUpdateWithoutCreatorInput>
    create: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput>
  }

  export type BidUpdateWithWhereUniqueWithoutCreatorInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutCreatorInput, BidUncheckedUpdateWithoutCreatorInput>
  }

  export type BidUpdateManyWithWhereWithoutCreatorInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutCreatorInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    pitchText?: StringFilter<"Bid"> | string
    amount?: IntFilter<"Bid"> | number
    status?: EnumBidStatusFilter<"Bid"> | $Enums.BidStatus
    briefId?: StringFilter<"Bid"> | string
    creatorId?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    updatedAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutBrandInput, ProjectUncheckedUpdateWithoutBrandInput>
    create: XOR<ProjectCreateWithoutBrandInput, ProjectUncheckedCreateWithoutBrandInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutBrandInput, ProjectUncheckedUpdateWithoutBrandInput>
  }

  export type ProjectUpdateManyWithWhereWithoutBrandInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    videoUrl?: StringNullableFilter<"Project"> | string | null
    submissionStatus?: EnumSubmissionStatusFilter<"Project"> | $Enums.SubmissionStatus
    briefId?: StringFilter<"Project"> | string
    brandId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCreatorInput, ProjectUncheckedUpdateWithoutCreatorInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCreatorInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCreatorInput>
  }

  export type UserCreateWithoutBriefsAsBrandInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutBriefsAsBrandInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutBriefsAsBrandInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBriefsAsBrandInput, UserUncheckedCreateWithoutBriefsAsBrandInput>
  }

  export type BidCreateWithoutBriefInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutBidsAsCreatorInput
  }

  export type BidUncheckedCreateWithoutBriefInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateOrConnectWithoutBriefInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput>
  }

  export type BidCreateManyBriefInputEnvelope = {
    data: BidCreateManyBriefInput | BidCreateManyBriefInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutBriefInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
  }

  export type ProjectUncheckedCreateWithoutBriefInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    brandId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutBriefInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBriefInput, ProjectUncheckedCreateWithoutBriefInput>
  }

  export type ProjectCreateManyBriefInputEnvelope = {
    data: ProjectCreateManyBriefInput | ProjectCreateManyBriefInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBriefsAsBrandInput = {
    update: XOR<UserUpdateWithoutBriefsAsBrandInput, UserUncheckedUpdateWithoutBriefsAsBrandInput>
    create: XOR<UserCreateWithoutBriefsAsBrandInput, UserUncheckedCreateWithoutBriefsAsBrandInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBriefsAsBrandInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBriefsAsBrandInput, UserUncheckedUpdateWithoutBriefsAsBrandInput>
  }

  export type UserUpdateWithoutBriefsAsBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutBriefsAsBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type BidUpsertWithWhereUniqueWithoutBriefInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutBriefInput, BidUncheckedUpdateWithoutBriefInput>
    create: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput>
  }

  export type BidUpdateWithWhereUniqueWithoutBriefInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutBriefInput, BidUncheckedUpdateWithoutBriefInput>
  }

  export type BidUpdateManyWithWhereWithoutBriefInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutBriefInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutBriefInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutBriefInput, ProjectUncheckedUpdateWithoutBriefInput>
    create: XOR<ProjectCreateWithoutBriefInput, ProjectUncheckedCreateWithoutBriefInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutBriefInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutBriefInput, ProjectUncheckedUpdateWithoutBriefInput>
  }

  export type ProjectUpdateManyWithWhereWithoutBriefInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutBriefInput>
  }

  export type BriefCreateWithoutBidsInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutBriefsAsBrandInput
    projects?: ProjectCreateNestedManyWithoutBriefInput
  }

  export type BriefUncheckedCreateWithoutBidsInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutBriefInput
  }

  export type BriefCreateOrConnectWithoutBidsInput = {
    where: BriefWhereUniqueInput
    create: XOR<BriefCreateWithoutBidsInput, BriefUncheckedCreateWithoutBidsInput>
  }

  export type UserCreateWithoutBidsAsCreatorInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutBidsAsCreatorInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutBidsAsCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsAsCreatorInput, UserUncheckedCreateWithoutBidsAsCreatorInput>
  }

  export type BriefUpsertWithoutBidsInput = {
    update: XOR<BriefUpdateWithoutBidsInput, BriefUncheckedUpdateWithoutBidsInput>
    create: XOR<BriefCreateWithoutBidsInput, BriefUncheckedCreateWithoutBidsInput>
    where?: BriefWhereInput
  }

  export type BriefUpdateToOneWithWhereWithoutBidsInput = {
    where?: BriefWhereInput
    data: XOR<BriefUpdateWithoutBidsInput, BriefUncheckedUpdateWithoutBidsInput>
  }

  export type BriefUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutBriefsAsBrandNestedInput
    projects?: ProjectUpdateManyWithoutBriefNestedInput
  }

  export type BriefUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutBriefNestedInput
  }

  export type UserUpsertWithoutBidsAsCreatorInput = {
    update: XOR<UserUpdateWithoutBidsAsCreatorInput, UserUncheckedUpdateWithoutBidsAsCreatorInput>
    create: XOR<UserCreateWithoutBidsAsCreatorInput, UserUncheckedCreateWithoutBidsAsCreatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsAsCreatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsAsCreatorInput, UserUncheckedUpdateWithoutBidsAsCreatorInput>
  }

  export type UserUpdateWithoutBidsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type BriefCreateWithoutProjectsInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: UserCreateNestedOneWithoutBriefsAsBrandInput
    bids?: BidCreateNestedManyWithoutBriefInput
  }

  export type BriefUncheckedCreateWithoutProjectsInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutBriefInput
  }

  export type BriefCreateOrConnectWithoutProjectsInput = {
    where: BriefWhereUniqueInput
    create: XOR<BriefCreateWithoutProjectsInput, BriefUncheckedCreateWithoutProjectsInput>
  }

  export type UserCreateWithoutProjectsAsBrandInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProjectsAsBrandInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProjectsAsBrandInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsAsBrandInput, UserUncheckedCreateWithoutProjectsAsBrandInput>
  }

  export type UserCreateWithoutProjectsAsCreatorInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
  }

  export type UserUncheckedCreateWithoutProjectsAsCreatorInput = {
    id?: string
    clerkId: string
    email: string
    role: $Enums.Role
    credits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
  }

  export type UserCreateOrConnectWithoutProjectsAsCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsAsCreatorInput, UserUncheckedCreateWithoutProjectsAsCreatorInput>
  }

  export type BriefUpsertWithoutProjectsInput = {
    update: XOR<BriefUpdateWithoutProjectsInput, BriefUncheckedUpdateWithoutProjectsInput>
    create: XOR<BriefCreateWithoutProjectsInput, BriefUncheckedCreateWithoutProjectsInput>
    where?: BriefWhereInput
  }

  export type BriefUpdateToOneWithWhereWithoutProjectsInput = {
    where?: BriefWhereInput
    data: XOR<BriefUpdateWithoutProjectsInput, BriefUncheckedUpdateWithoutProjectsInput>
  }

  export type BriefUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutBriefsAsBrandNestedInput
    bids?: BidUpdateManyWithoutBriefNestedInput
  }

  export type BriefUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutBriefNestedInput
  }

  export type UserUpsertWithoutProjectsAsBrandInput = {
    update: XOR<UserUpdateWithoutProjectsAsBrandInput, UserUncheckedUpdateWithoutProjectsAsBrandInput>
    create: XOR<UserCreateWithoutProjectsAsBrandInput, UserUncheckedCreateWithoutProjectsAsBrandInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsAsBrandInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsAsBrandInput, UserUncheckedUpdateWithoutProjectsAsBrandInput>
  }

  export type UserUpdateWithoutProjectsAsBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsAsBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutProjectsAsCreatorInput = {
    update: XOR<UserUpdateWithoutProjectsAsCreatorInput, UserUncheckedUpdateWithoutProjectsAsCreatorInput>
    create: XOR<UserCreateWithoutProjectsAsCreatorInput, UserUncheckedCreateWithoutProjectsAsCreatorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsAsCreatorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsAsCreatorInput, UserUncheckedUpdateWithoutProjectsAsCreatorInput>
  }

  export type UserUpdateWithoutProjectsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    credits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BriefCreateManyBrandInput = {
    id?: string
    title: string
    productDescription: string
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateManyCreatorInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    briefId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyBrandInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    briefId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyCreatorInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    briefId: string
    brandId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BriefUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutBriefNestedInput
    projects?: ProjectUpdateManyWithoutBriefNestedInput
  }

  export type BriefUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutBriefNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutBriefNestedInput
  }

  export type BriefUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    briefId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    briefId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    briefId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    briefId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyBriefInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyBriefInput = {
    id?: string
    videoUrl?: string | null
    submissionStatus?: $Enums.SubmissionStatus
    brandId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutBidsAsCreatorNestedInput
  }

  export type BidUncheckedUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    submissionStatus?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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