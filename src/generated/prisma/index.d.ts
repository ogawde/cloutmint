
/**
 * Client
**/

import * as runtime from './runtime/binary.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AuthUser
 * 
 */
export type AuthUser = $Result.DefaultSelection<Prisma.$AuthUserPayload>
/**
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model AuthAccount
 * 
 */
export type AuthAccount = $Result.DefaultSelection<Prisma.$AuthAccountPayload>
/**
 * Model AuthVerification
 * 
 */
export type AuthVerification = $Result.DefaultSelection<Prisma.$AuthVerificationPayload>
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
 * Model ProjectDeliverable
 * 
 */
export type ProjectDeliverable = $Result.DefaultSelection<Prisma.$ProjectDeliverablePayload>
/**
 * Model ProjectMessage
 * 
 */
export type ProjectMessage = $Result.DefaultSelection<Prisma.$ProjectMessagePayload>
/**
 * Model ProjectEscrow
 * 
 */
export type ProjectEscrow = $Result.DefaultSelection<Prisma.$ProjectEscrowPayload>
/**
 * Model ProjectEvent
 * 
 */
export type ProjectEvent = $Result.DefaultSelection<Prisma.$ProjectEventPayload>

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
  COMPLETED: 'COMPLETED',
  ARCHIVED: 'ARCHIVED'
};

export type BriefStatus = (typeof BriefStatus)[keyof typeof BriefStatus]


export const BidStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED'
};

export type BidStatus = (typeof BidStatus)[keyof typeof BidStatus]


export const ProjectStatus: {
  AWAITING_FUNDING: 'AWAITING_FUNDING',
  ACTIVE: 'ACTIVE',
  SUBMITTED: 'SUBMITTED',
  REVISION_REQUESTED: 'REVISION_REQUESTED',
  APPROVED: 'APPROVED',
  AUTO_RELEASED: 'AUTO_RELEASED',
  CANCELED: 'CANCELED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]


export const EscrowStatus: {
  HELD: 'HELD',
  RELEASED: 'RELEASED',
  REFUNDED: 'REFUNDED'
};

export type EscrowStatus = (typeof EscrowStatus)[keyof typeof EscrowStatus]


export const EscrowReleaseReason: {
  BRAND_APPROVAL: 'BRAND_APPROVAL',
  AUTO_TIMEOUT: 'AUTO_TIMEOUT',
  MANUAL_REFUND: 'MANUAL_REFUND'
};

export type EscrowReleaseReason = (typeof EscrowReleaseReason)[keyof typeof EscrowReleaseReason]


export const ProjectEventType: {
  ESCROW_HELD: 'ESCROW_HELD',
  MESSAGE_SENT: 'MESSAGE_SENT',
  DELIVERABLE_ADDED: 'DELIVERABLE_ADDED',
  DELIVERABLE_REMOVED: 'DELIVERABLE_REMOVED',
  CREATOR_SUBMITTED: 'CREATOR_SUBMITTED',
  BRAND_APPROVED: 'BRAND_APPROVED',
  REVISION_REQUESTED: 'REVISION_REQUESTED',
  AUTO_RELEASED: 'AUTO_RELEASED',
  ESCROW_REFUNDED: 'ESCROW_REFUNDED'
};

export type ProjectEventType = (typeof ProjectEventType)[keyof typeof ProjectEventType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type BriefStatus = $Enums.BriefStatus

export const BriefStatus: typeof $Enums.BriefStatus

export type BidStatus = $Enums.BidStatus

export const BidStatus: typeof $Enums.BidStatus

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

export type EscrowStatus = $Enums.EscrowStatus

export const EscrowStatus: typeof $Enums.EscrowStatus

export type EscrowReleaseReason = $Enums.EscrowReleaseReason

export const EscrowReleaseReason: typeof $Enums.EscrowReleaseReason

export type ProjectEventType = $Enums.ProjectEventType

export const ProjectEventType: typeof $Enums.ProjectEventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuthUsers
 * const authUsers = await prisma.authUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more AuthUsers
   * const authUsers = await prisma.authUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => $Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;

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
   * `prisma.authUser`: Exposes CRUD operations for the **AuthUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthUsers
    * const authUsers = await prisma.authUser.findMany()
    * ```
    */
  get authUser(): Prisma.AuthUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authAccount`: Exposes CRUD operations for the **AuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthAccounts
    * const authAccounts = await prisma.authAccount.findMany()
    * ```
    */
  get authAccount(): Prisma.AuthAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authVerification`: Exposes CRUD operations for the **AuthVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthVerifications
    * const authVerifications = await prisma.authVerification.findMany()
    * ```
    */
  get authVerification(): Prisma.AuthVerificationDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.projectDeliverable`: Exposes CRUD operations for the **ProjectDeliverable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDeliverables
    * const projectDeliverables = await prisma.projectDeliverable.findMany()
    * ```
    */
  get projectDeliverable(): Prisma.ProjectDeliverableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMessage`: Exposes CRUD operations for the **ProjectMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMessages
    * const projectMessages = await prisma.projectMessage.findMany()
    * ```
    */
  get projectMessage(): Prisma.ProjectMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectEscrow`: Exposes CRUD operations for the **ProjectEscrow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectEscrows
    * const projectEscrows = await prisma.projectEscrow.findMany()
    * ```
    */
  get projectEscrow(): Prisma.ProjectEscrowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectEvent`: Exposes CRUD operations for the **ProjectEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectEvents
    * const projectEvents = await prisma.projectEvent.findMany()
    * ```
    */
  get projectEvent(): Prisma.ProjectEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    AuthUser: 'AuthUser',
    AuthSession: 'AuthSession',
    AuthAccount: 'AuthAccount',
    AuthVerification: 'AuthVerification',
    User: 'User',
    Brief: 'Brief',
    Bid: 'Bid',
    Project: 'Project',
    ProjectDeliverable: 'ProjectDeliverable',
    ProjectMessage: 'ProjectMessage',
    ProjectEscrow: 'ProjectEscrow',
    ProjectEvent: 'ProjectEvent'
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
      modelProps: "authUser" | "authSession" | "authAccount" | "authVerification" | "user" | "brief" | "bid" | "project" | "projectDeliverable" | "projectMessage" | "projectEscrow" | "projectEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AuthUser: {
        payload: Prisma.$AuthUserPayload<ExtArgs>
        fields: Prisma.AuthUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          findFirst: {
            args: Prisma.AuthUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          findMany: {
            args: Prisma.AuthUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          create: {
            args: Prisma.AuthUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          createMany: {
            args: Prisma.AuthUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          delete: {
            args: Prisma.AuthUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          update: {
            args: Prisma.AuthUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          deleteMany: {
            args: Prisma.AuthUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>[]
          }
          upsert: {
            args: Prisma.AuthUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthUserPayload>
          }
          aggregate: {
            args: Prisma.AuthUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthUser>
          }
          groupBy: {
            args: Prisma.AuthUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthUserCountArgs<ExtArgs>
            result: $Utils.Optional<AuthUserCountAggregateOutputType> | number
          }
        }
      }
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      AuthAccount: {
        payload: Prisma.$AuthAccountPayload<ExtArgs>
        fields: Prisma.AuthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findFirst: {
            args: Prisma.AuthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findMany: {
            args: Prisma.AuthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          create: {
            args: Prisma.AuthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          createMany: {
            args: Prisma.AuthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          delete: {
            args: Prisma.AuthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          update: {
            args: Prisma.AuthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          deleteMany: {
            args: Prisma.AuthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          upsert: {
            args: Prisma.AuthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          aggregate: {
            args: Prisma.AuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthAccount>
          }
          groupBy: {
            args: Prisma.AuthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountCountAggregateOutputType> | number
          }
        }
      }
      AuthVerification: {
        payload: Prisma.$AuthVerificationPayload<ExtArgs>
        fields: Prisma.AuthVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          findFirst: {
            args: Prisma.AuthVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          findMany: {
            args: Prisma.AuthVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>[]
          }
          create: {
            args: Prisma.AuthVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          createMany: {
            args: Prisma.AuthVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>[]
          }
          delete: {
            args: Prisma.AuthVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          update: {
            args: Prisma.AuthVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          deleteMany: {
            args: Prisma.AuthVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>[]
          }
          upsert: {
            args: Prisma.AuthVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthVerificationPayload>
          }
          aggregate: {
            args: Prisma.AuthVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthVerification>
          }
          groupBy: {
            args: Prisma.AuthVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<AuthVerificationCountAggregateOutputType> | number
          }
        }
      }
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
      ProjectDeliverable: {
        payload: Prisma.$ProjectDeliverablePayload<ExtArgs>
        fields: Prisma.ProjectDeliverableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDeliverableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDeliverableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>
          }
          findFirst: {
            args: Prisma.ProjectDeliverableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDeliverableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>
          }
          findMany: {
            args: Prisma.ProjectDeliverableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>[]
          }
          create: {
            args: Prisma.ProjectDeliverableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>
          }
          createMany: {
            args: Prisma.ProjectDeliverableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectDeliverableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>[]
          }
          delete: {
            args: Prisma.ProjectDeliverableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>
          }
          update: {
            args: Prisma.ProjectDeliverableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeliverableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDeliverableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectDeliverableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>[]
          }
          upsert: {
            args: Prisma.ProjectDeliverableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDeliverablePayload>
          }
          aggregate: {
            args: Prisma.ProjectDeliverableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDeliverable>
          }
          groupBy: {
            args: Prisma.ProjectDeliverableGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDeliverableGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDeliverableCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDeliverableCountAggregateOutputType> | number
          }
        }
      }
      ProjectMessage: {
        payload: Prisma.$ProjectMessagePayload<ExtArgs>
        fields: Prisma.ProjectMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>
          }
          findFirst: {
            args: Prisma.ProjectMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>
          }
          findMany: {
            args: Prisma.ProjectMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>[]
          }
          create: {
            args: Prisma.ProjectMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>
          }
          createMany: {
            args: Prisma.ProjectMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>[]
          }
          delete: {
            args: Prisma.ProjectMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>
          }
          update: {
            args: Prisma.ProjectMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>
          }
          deleteMany: {
            args: Prisma.ProjectMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>[]
          }
          upsert: {
            args: Prisma.ProjectMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMessagePayload>
          }
          aggregate: {
            args: Prisma.ProjectMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMessage>
          }
          groupBy: {
            args: Prisma.ProjectMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMessageCountAggregateOutputType> | number
          }
        }
      }
      ProjectEscrow: {
        payload: Prisma.$ProjectEscrowPayload<ExtArgs>
        fields: Prisma.ProjectEscrowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectEscrowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectEscrowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>
          }
          findFirst: {
            args: Prisma.ProjectEscrowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectEscrowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>
          }
          findMany: {
            args: Prisma.ProjectEscrowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>[]
          }
          create: {
            args: Prisma.ProjectEscrowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>
          }
          createMany: {
            args: Prisma.ProjectEscrowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectEscrowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>[]
          }
          delete: {
            args: Prisma.ProjectEscrowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>
          }
          update: {
            args: Prisma.ProjectEscrowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>
          }
          deleteMany: {
            args: Prisma.ProjectEscrowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectEscrowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectEscrowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>[]
          }
          upsert: {
            args: Prisma.ProjectEscrowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEscrowPayload>
          }
          aggregate: {
            args: Prisma.ProjectEscrowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectEscrow>
          }
          groupBy: {
            args: Prisma.ProjectEscrowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectEscrowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectEscrowCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectEscrowCountAggregateOutputType> | number
          }
        }
      }
      ProjectEvent: {
        payload: Prisma.$ProjectEventPayload<ExtArgs>
        fields: Prisma.ProjectEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>
          }
          findFirst: {
            args: Prisma.ProjectEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>
          }
          findMany: {
            args: Prisma.ProjectEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>[]
          }
          create: {
            args: Prisma.ProjectEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>
          }
          createMany: {
            args: Prisma.ProjectEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>[]
          }
          delete: {
            args: Prisma.ProjectEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>
          }
          update: {
            args: Prisma.ProjectEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>
          }
          deleteMany: {
            args: Prisma.ProjectEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>[]
          }
          upsert: {
            args: Prisma.ProjectEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectEventPayload>
          }
          aggregate: {
            args: Prisma.ProjectEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectEvent>
          }
          groupBy: {
            args: Prisma.ProjectEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectEventCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectEventCountAggregateOutputType> | number
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
    authUser?: AuthUserOmit
    authSession?: AuthSessionOmit
    authAccount?: AuthAccountOmit
    authVerification?: AuthVerificationOmit
    user?: UserOmit
    brief?: BriefOmit
    bid?: BidOmit
    project?: ProjectOmit
    projectDeliverable?: ProjectDeliverableOmit
    projectMessage?: ProjectMessageOmit
    projectEscrow?: ProjectEscrowOmit
    projectEvent?: ProjectEventOmit
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
   * Count Type AuthUserCountOutputType
   */

  export type AuthUserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type AuthUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | AuthUserCountOutputTypeCountAccountsArgs
    sessions?: boolean | AuthUserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUserCountOutputType
     */
    select?: AuthUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
  }

  /**
   * AuthUserCountOutputType without action
   */
  export type AuthUserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bidsAsCreator: number
    briefsAsBrand: number
    projectsAsBrand: number
    projectsAsCreator: number
    projectsApproved: number
    projectMessages: number
    projectEvents: number
    brandEscrows: number
    creatorEscrows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bidsAsCreator?: boolean | UserCountOutputTypeCountBidsAsCreatorArgs
    briefsAsBrand?: boolean | UserCountOutputTypeCountBriefsAsBrandArgs
    projectsAsBrand?: boolean | UserCountOutputTypeCountProjectsAsBrandArgs
    projectsAsCreator?: boolean | UserCountOutputTypeCountProjectsAsCreatorArgs
    projectsApproved?: boolean | UserCountOutputTypeCountProjectsApprovedArgs
    projectMessages?: boolean | UserCountOutputTypeCountProjectMessagesArgs
    projectEvents?: boolean | UserCountOutputTypeCountProjectEventsArgs
    brandEscrows?: boolean | UserCountOutputTypeCountBrandEscrowsArgs
    creatorEscrows?: boolean | UserCountOutputTypeCountCreatorEscrowsArgs
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
  export type UserCountOutputTypeCountBidsAsCreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
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
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsApprovedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBrandEscrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEscrowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatorEscrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEscrowWhereInput
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    deliverables: number
    messages: number
    events: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliverables?: boolean | ProjectCountOutputTypeCountDeliverablesArgs
    messages?: boolean | ProjectCountOutputTypeCountMessagesArgs
    events?: boolean | ProjectCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDeliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDeliverableWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMessageWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AuthUser
   */

  export type AggregateAuthUser = {
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  export type AuthUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUser to aggregate.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthUsers
    **/
    _count?: true | AuthUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthUserMaxAggregateInputType
  }

  export type GetAuthUserAggregateType<T extends AuthUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthUser[P]>
      : GetScalarType<T[P], AggregateAuthUser[P]>
  }




  export type AuthUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthUserWhereInput
    orderBy?: AuthUserOrderByWithAggregationInput | AuthUserOrderByWithAggregationInput[]
    by: AuthUserScalarFieldEnum[] | AuthUserScalarFieldEnum
    having?: AuthUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthUserCountAggregateInputType | true
    _min?: AuthUserMinAggregateInputType
    _max?: AuthUserMaxAggregateInputType
  }

  export type AuthUserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuthUserCountAggregateOutputType | null
    _min: AuthUserMinAggregateOutputType | null
    _max: AuthUserMaxAggregateOutputType | null
  }

  type GetAuthUserGroupByPayload<T extends AuthUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
            : GetScalarType<T[P], AuthUserGroupByOutputType[P]>
        }
      >
    >


  export type AuthUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | AuthUser$accountsArgs<ExtArgs>
    sessions?: boolean | AuthUser$sessionsArgs<ExtArgs>
    _count?: boolean | AuthUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authUser"]>

  export type AuthUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["authUser"]>
  export type AuthUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | AuthUser$accountsArgs<ExtArgs>
    sessions?: boolean | AuthUser$sessionsArgs<ExtArgs>
    _count?: boolean | AuthUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthUser"
    objects: {
      accounts: Prisma.$AuthAccountPayload<ExtArgs>[]
      sessions: Prisma.$AuthSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authUser"]>
    composites: {}
  }

  type AuthUserGetPayload<S extends boolean | null | undefined | AuthUserDefaultArgs> = $Result.GetResult<Prisma.$AuthUserPayload, S>

  type AuthUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthUserCountAggregateInputType | true
    }

  export interface AuthUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthUser'], meta: { name: 'AuthUser' } }
    /**
     * Find zero or one AuthUser that matches the filter.
     * @param {AuthUserFindUniqueArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthUserFindUniqueArgs>(args: SelectSubset<T, AuthUserFindUniqueArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthUserFindUniqueOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthUserFindFirstArgs>(args?: SelectSubset<T, AuthUserFindFirstArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthUsers
     * const authUsers = await prisma.authUser.findMany()
     * 
     * // Get first 10 AuthUsers
     * const authUsers = await prisma.authUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authUserWithIdOnly = await prisma.authUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthUserFindManyArgs>(args?: SelectSubset<T, AuthUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthUser.
     * @param {AuthUserCreateArgs} args - Arguments to create a AuthUser.
     * @example
     * // Create one AuthUser
     * const AuthUser = await prisma.authUser.create({
     *   data: {
     *     // ... data to create a AuthUser
     *   }
     * })
     * 
     */
    create<T extends AuthUserCreateArgs>(args: SelectSubset<T, AuthUserCreateArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthUsers.
     * @param {AuthUserCreateManyArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthUserCreateManyArgs>(args?: SelectSubset<T, AuthUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthUsers and returns the data saved in the database.
     * @param {AuthUserCreateManyAndReturnArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthUser.
     * @param {AuthUserDeleteArgs} args - Arguments to delete one AuthUser.
     * @example
     * // Delete one AuthUser
     * const AuthUser = await prisma.authUser.delete({
     *   where: {
     *     // ... filter to delete one AuthUser
     *   }
     * })
     * 
     */
    delete<T extends AuthUserDeleteArgs>(args: SelectSubset<T, AuthUserDeleteArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthUser.
     * @param {AuthUserUpdateArgs} args - Arguments to update one AuthUser.
     * @example
     * // Update one AuthUser
     * const authUser = await prisma.authUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthUserUpdateArgs>(args: SelectSubset<T, AuthUserUpdateArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthUsers.
     * @param {AuthUserDeleteManyArgs} args - Arguments to filter AuthUsers to delete.
     * @example
     * // Delete a few AuthUsers
     * const { count } = await prisma.authUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthUserDeleteManyArgs>(args?: SelectSubset<T, AuthUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthUserUpdateManyArgs>(args: SelectSubset<T, AuthUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthUsers and returns the data updated in the database.
     * @param {AuthUserUpdateManyAndReturnArgs} args - Arguments to update many AuthUsers.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthUsers and only return the `id`
     * const authUserWithIdOnly = await prisma.authUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthUser.
     * @param {AuthUserUpsertArgs} args - Arguments to update or create a AuthUser.
     * @example
     * // Update or create a AuthUser
     * const authUser = await prisma.authUser.upsert({
     *   create: {
     *     // ... data to create a AuthUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthUser we want to update
     *   }
     * })
     */
    upsert<T extends AuthUserUpsertArgs>(args: SelectSubset<T, AuthUserUpsertArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserCountArgs} args - Arguments to filter AuthUsers to count.
     * @example
     * // Count the number of AuthUsers
     * const count = await prisma.authUser.count({
     *   where: {
     *     // ... the filter for the AuthUsers we want to count
     *   }
     * })
    **/
    count<T extends AuthUserCountArgs>(
      args?: Subset<T, AuthUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthUserAggregateArgs>(args: Subset<T, AuthUserAggregateArgs>): Prisma.PrismaPromise<GetAuthUserAggregateType<T>>

    /**
     * Group by AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserGroupByArgs} args - Group by arguments.
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
      T extends AuthUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthUserGroupByArgs['orderBy'] }
        : { orderBy?: AuthUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthUser model
   */
  readonly fields: AuthUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends AuthUser$accountsArgs<ExtArgs> = {}>(args?: Subset<T, AuthUser$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends AuthUser$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, AuthUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AuthUser model
   */
  interface AuthUserFieldRefs {
    readonly id: FieldRef<"AuthUser", 'String'>
    readonly name: FieldRef<"AuthUser", 'String'>
    readonly email: FieldRef<"AuthUser", 'String'>
    readonly emailVerified: FieldRef<"AuthUser", 'Boolean'>
    readonly image: FieldRef<"AuthUser", 'String'>
    readonly createdAt: FieldRef<"AuthUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthUser findUnique
   */
  export type AuthUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser findUniqueOrThrow
   */
  export type AuthUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser findFirst
   */
  export type AuthUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser findFirstOrThrow
   */
  export type AuthUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser findMany
   */
  export type AuthUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter, which AuthUsers to fetch.
     */
    where?: AuthUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: AuthUserOrderByWithRelationInput | AuthUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthUsers.
     */
    cursor?: AuthUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthUsers.
     */
    skip?: number
    distinct?: AuthUserScalarFieldEnum | AuthUserScalarFieldEnum[]
  }

  /**
   * AuthUser create
   */
  export type AuthUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthUser.
     */
    data: XOR<AuthUserCreateInput, AuthUserUncheckedCreateInput>
  }

  /**
   * AuthUser createMany
   */
  export type AuthUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthUsers.
     */
    data: AuthUserCreateManyInput | AuthUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthUser createManyAndReturn
   */
  export type AuthUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data used to create many AuthUsers.
     */
    data: AuthUserCreateManyInput | AuthUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthUser update
   */
  export type AuthUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthUser.
     */
    data: XOR<AuthUserUpdateInput, AuthUserUncheckedUpdateInput>
    /**
     * Choose, which AuthUser to update.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser updateMany
   */
  export type AuthUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthUsers.
     */
    data: XOR<AuthUserUpdateManyMutationInput, AuthUserUncheckedUpdateManyInput>
    /**
     * Filter which AuthUsers to update
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number
  }

  /**
   * AuthUser updateManyAndReturn
   */
  export type AuthUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * The data used to update AuthUsers.
     */
    data: XOR<AuthUserUpdateManyMutationInput, AuthUserUncheckedUpdateManyInput>
    /**
     * Filter which AuthUsers to update
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number
  }

  /**
   * AuthUser upsert
   */
  export type AuthUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthUser to update in case it exists.
     */
    where: AuthUserWhereUniqueInput
    /**
     * In case the AuthUser found by the `where` argument doesn't exist, create a new AuthUser with this data.
     */
    create: XOR<AuthUserCreateInput, AuthUserUncheckedCreateInput>
    /**
     * In case the AuthUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthUserUpdateInput, AuthUserUncheckedUpdateInput>
  }

  /**
   * AuthUser delete
   */
  export type AuthUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
    /**
     * Filter which AuthUser to delete.
     */
    where: AuthUserWhereUniqueInput
  }

  /**
   * AuthUser deleteMany
   */
  export type AuthUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUsers to delete
     */
    where?: AuthUserWhereInput
    /**
     * Limit how many AuthUsers to delete.
     */
    limit?: number
  }

  /**
   * AuthUser.accounts
   */
  export type AuthUser$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    cursor?: AuthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthUser.sessions
   */
  export type AuthUser$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    cursor?: AuthSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthUser without action
   */
  export type AuthUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: AuthUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: AuthUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthUserInclude<ExtArgs> | null
  }


  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type AuthSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["authSession"]>
  export type AuthSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {
      user: Prisma.$AuthUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {AuthSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions and returns the data updated in the database.
     * @param {AuthSessionUpdateManyAndReturnArgs} args - Arguments to update many AuthSessions.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
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
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuthUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthUserDefaultArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthSession model
   */
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly expiresAt: FieldRef<"AuthSession", 'DateTime'>
    readonly token: FieldRef<"AuthSession", 'String'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthSession", 'DateTime'>
    readonly ipAddress: FieldRef<"AuthSession", 'String'>
    readonly userAgent: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthSession createManyAndReturn
   */
  export type AuthSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
  }

  /**
   * AuthSession updateManyAndReturn
   */
  export type AuthSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
    /**
     * Limit how many AuthSessions to delete.
     */
    limit?: number
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthSession
     */
    omit?: AuthSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
  }


  /**
   * Model AuthAccount
   */

  export type AggregateAuthAccount = {
    _count: AuthAccountCountAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  export type AuthAccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthAccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthAccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthAccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccount to aggregate.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthAccounts
    **/
    _count?: true | AuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthAccountMaxAggregateInputType
  }

  export type GetAuthAccountAggregateType<T extends AuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthAccount[P]>
      : GetScalarType<T[P], AggregateAuthAccount[P]>
  }




  export type AuthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithAggregationInput | AuthAccountOrderByWithAggregationInput[]
    by: AuthAccountScalarFieldEnum[] | AuthAccountScalarFieldEnum
    having?: AuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthAccountCountAggregateInputType | true
    _min?: AuthAccountMinAggregateInputType
    _max?: AuthAccountMaxAggregateInputType
  }

  export type AuthAccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AuthAccountCountAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  type GetAuthAccountGroupByPayload<T extends AuthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type AuthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["authAccount"]>
  export type AuthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }
  export type AuthAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuthUserDefaultArgs<ExtArgs>
  }

  export type $AuthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthAccount"
    objects: {
      user: Prisma.$AuthUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["authAccount"]>
    composites: {}
  }

  type AuthAccountGetPayload<S extends boolean | null | undefined | AuthAccountDefaultArgs> = $Result.GetResult<Prisma.$AuthAccountPayload, S>

  type AuthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthAccountCountAggregateInputType | true
    }

  export interface AuthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthAccount'], meta: { name: 'AuthAccount' } }
    /**
     * Find zero or one AuthAccount that matches the filter.
     * @param {AuthAccountFindUniqueArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthAccountFindUniqueArgs>(args: SelectSubset<T, AuthAccountFindUniqueArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthAccountFindUniqueOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthAccountFindFirstArgs>(args?: SelectSubset<T, AuthAccountFindFirstArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany()
     * 
     * // Get first 10 AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthAccountFindManyArgs>(args?: SelectSubset<T, AuthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthAccount.
     * @param {AuthAccountCreateArgs} args - Arguments to create a AuthAccount.
     * @example
     * // Create one AuthAccount
     * const AuthAccount = await prisma.authAccount.create({
     *   data: {
     *     // ... data to create a AuthAccount
     *   }
     * })
     * 
     */
    create<T extends AuthAccountCreateArgs>(args: SelectSubset<T, AuthAccountCreateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthAccounts.
     * @param {AuthAccountCreateManyArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthAccountCreateManyArgs>(args?: SelectSubset<T, AuthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthAccounts and returns the data saved in the database.
     * @param {AuthAccountCreateManyAndReturnArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthAccount.
     * @param {AuthAccountDeleteArgs} args - Arguments to delete one AuthAccount.
     * @example
     * // Delete one AuthAccount
     * const AuthAccount = await prisma.authAccount.delete({
     *   where: {
     *     // ... filter to delete one AuthAccount
     *   }
     * })
     * 
     */
    delete<T extends AuthAccountDeleteArgs>(args: SelectSubset<T, AuthAccountDeleteArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthAccount.
     * @param {AuthAccountUpdateArgs} args - Arguments to update one AuthAccount.
     * @example
     * // Update one AuthAccount
     * const authAccount = await prisma.authAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthAccountUpdateArgs>(args: SelectSubset<T, AuthAccountUpdateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthAccounts.
     * @param {AuthAccountDeleteManyArgs} args - Arguments to filter AuthAccounts to delete.
     * @example
     * // Delete a few AuthAccounts
     * const { count } = await prisma.authAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthAccountDeleteManyArgs>(args?: SelectSubset<T, AuthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthAccountUpdateManyArgs>(args: SelectSubset<T, AuthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts and returns the data updated in the database.
     * @param {AuthAccountUpdateManyAndReturnArgs} args - Arguments to update many AuthAccounts.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthAccount.
     * @param {AuthAccountUpsertArgs} args - Arguments to update or create a AuthAccount.
     * @example
     * // Update or create a AuthAccount
     * const authAccount = await prisma.authAccount.upsert({
     *   create: {
     *     // ... data to create a AuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends AuthAccountUpsertArgs>(args: SelectSubset<T, AuthAccountUpsertArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountCountArgs} args - Arguments to filter AuthAccounts to count.
     * @example
     * // Count the number of AuthAccounts
     * const count = await prisma.authAccount.count({
     *   where: {
     *     // ... the filter for the AuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends AuthAccountCountArgs>(
      args?: Subset<T, AuthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthAccountAggregateArgs>(args: Subset<T, AuthAccountAggregateArgs>): Prisma.PrismaPromise<GetAuthAccountAggregateType<T>>

    /**
     * Group by AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountGroupByArgs} args - Group by arguments.
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
      T extends AuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: AuthAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthAccount model
   */
  readonly fields: AuthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuthUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthUserDefaultArgs<ExtArgs>>): Prisma__AuthUserClient<$Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuthAccount model
   */
  interface AuthAccountFieldRefs {
    readonly id: FieldRef<"AuthAccount", 'String'>
    readonly accountId: FieldRef<"AuthAccount", 'String'>
    readonly providerId: FieldRef<"AuthAccount", 'String'>
    readonly userId: FieldRef<"AuthAccount", 'String'>
    readonly accessToken: FieldRef<"AuthAccount", 'String'>
    readonly refreshToken: FieldRef<"AuthAccount", 'String'>
    readonly idToken: FieldRef<"AuthAccount", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly scope: FieldRef<"AuthAccount", 'String'>
    readonly password: FieldRef<"AuthAccount", 'String'>
    readonly createdAt: FieldRef<"AuthAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthAccount findUnique
   */
  export type AuthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findUniqueOrThrow
   */
  export type AuthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findFirst
   */
  export type AuthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findFirstOrThrow
   */
  export type AuthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findMany
   */
  export type AuthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccounts to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount create
   */
  export type AuthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthAccount.
     */
    data: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
  }

  /**
   * AuthAccount createMany
   */
  export type AuthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthAccount createManyAndReturn
   */
  export type AuthAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthAccount update
   */
  export type AuthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthAccount.
     */
    data: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
    /**
     * Choose, which AuthAccount to update.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount updateMany
   */
  export type AuthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthAccounts.
     */
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which AuthAccounts to update
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to update.
     */
    limit?: number
  }

  /**
   * AuthAccount updateManyAndReturn
   */
  export type AuthAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * The data used to update AuthAccounts.
     */
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which AuthAccounts to update
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthAccount upsert
   */
  export type AuthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthAccount to update in case it exists.
     */
    where: AuthAccountWhereUniqueInput
    /**
     * In case the AuthAccount found by the `where` argument doesn't exist, create a new AuthAccount with this data.
     */
    create: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
    /**
     * In case the AuthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
  }

  /**
   * AuthAccount delete
   */
  export type AuthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter which AuthAccount to delete.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount deleteMany
   */
  export type AuthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccounts to delete
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to delete.
     */
    limit?: number
  }

  /**
   * AuthAccount without action
   */
  export type AuthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
  }


  /**
   * Model AuthVerification
   */

  export type AggregateAuthVerification = {
    _count: AuthVerificationCountAggregateOutputType | null
    _min: AuthVerificationMinAggregateOutputType | null
    _max: AuthVerificationMaxAggregateOutputType | null
  }

  export type AuthVerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AuthVerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AuthVerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AuthVerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AuthVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthVerification to aggregate.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthVerifications
    **/
    _count?: true | AuthVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthVerificationMaxAggregateInputType
  }

  export type GetAuthVerificationAggregateType<T extends AuthVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthVerification[P]>
      : GetScalarType<T[P], AggregateAuthVerification[P]>
  }




  export type AuthVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthVerificationWhereInput
    orderBy?: AuthVerificationOrderByWithAggregationInput | AuthVerificationOrderByWithAggregationInput[]
    by: AuthVerificationScalarFieldEnum[] | AuthVerificationScalarFieldEnum
    having?: AuthVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthVerificationCountAggregateInputType | true
    _min?: AuthVerificationMinAggregateInputType
    _max?: AuthVerificationMaxAggregateInputType
  }

  export type AuthVerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: AuthVerificationCountAggregateOutputType | null
    _min: AuthVerificationMinAggregateOutputType | null
    _max: AuthVerificationMaxAggregateOutputType | null
  }

  type GetAuthVerificationGroupByPayload<T extends AuthVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], AuthVerificationGroupByOutputType[P]>
        }
      >
    >


  export type AuthVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type AuthVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type AuthVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["authVerification"]>

  export type AuthVerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AuthVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["authVerification"]>

  export type $AuthVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["authVerification"]>
    composites: {}
  }

  type AuthVerificationGetPayload<S extends boolean | null | undefined | AuthVerificationDefaultArgs> = $Result.GetResult<Prisma.$AuthVerificationPayload, S>

  type AuthVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthVerificationCountAggregateInputType | true
    }

  export interface AuthVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthVerification'], meta: { name: 'AuthVerification' } }
    /**
     * Find zero or one AuthVerification that matches the filter.
     * @param {AuthVerificationFindUniqueArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthVerificationFindUniqueArgs>(args: SelectSubset<T, AuthVerificationFindUniqueArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthVerificationFindUniqueOrThrowArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationFindFirstArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthVerificationFindFirstArgs>(args?: SelectSubset<T, AuthVerificationFindFirstArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationFindFirstOrThrowArgs} args - Arguments to find a AuthVerification
     * @example
     * // Get one AuthVerification
     * const authVerification = await prisma.authVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthVerifications
     * const authVerifications = await prisma.authVerification.findMany()
     * 
     * // Get first 10 AuthVerifications
     * const authVerifications = await prisma.authVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthVerificationFindManyArgs>(args?: SelectSubset<T, AuthVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthVerification.
     * @param {AuthVerificationCreateArgs} args - Arguments to create a AuthVerification.
     * @example
     * // Create one AuthVerification
     * const AuthVerification = await prisma.authVerification.create({
     *   data: {
     *     // ... data to create a AuthVerification
     *   }
     * })
     * 
     */
    create<T extends AuthVerificationCreateArgs>(args: SelectSubset<T, AuthVerificationCreateArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthVerifications.
     * @param {AuthVerificationCreateManyArgs} args - Arguments to create many AuthVerifications.
     * @example
     * // Create many AuthVerifications
     * const authVerification = await prisma.authVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthVerificationCreateManyArgs>(args?: SelectSubset<T, AuthVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthVerifications and returns the data saved in the database.
     * @param {AuthVerificationCreateManyAndReturnArgs} args - Arguments to create many AuthVerifications.
     * @example
     * // Create many AuthVerifications
     * const authVerification = await prisma.authVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthVerifications and only return the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthVerification.
     * @param {AuthVerificationDeleteArgs} args - Arguments to delete one AuthVerification.
     * @example
     * // Delete one AuthVerification
     * const AuthVerification = await prisma.authVerification.delete({
     *   where: {
     *     // ... filter to delete one AuthVerification
     *   }
     * })
     * 
     */
    delete<T extends AuthVerificationDeleteArgs>(args: SelectSubset<T, AuthVerificationDeleteArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthVerification.
     * @param {AuthVerificationUpdateArgs} args - Arguments to update one AuthVerification.
     * @example
     * // Update one AuthVerification
     * const authVerification = await prisma.authVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthVerificationUpdateArgs>(args: SelectSubset<T, AuthVerificationUpdateArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthVerifications.
     * @param {AuthVerificationDeleteManyArgs} args - Arguments to filter AuthVerifications to delete.
     * @example
     * // Delete a few AuthVerifications
     * const { count } = await prisma.authVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthVerificationDeleteManyArgs>(args?: SelectSubset<T, AuthVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthVerifications
     * const authVerification = await prisma.authVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthVerificationUpdateManyArgs>(args: SelectSubset<T, AuthVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthVerifications and returns the data updated in the database.
     * @param {AuthVerificationUpdateManyAndReturnArgs} args - Arguments to update many AuthVerifications.
     * @example
     * // Update many AuthVerifications
     * const authVerification = await prisma.authVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthVerifications and only return the `id`
     * const authVerificationWithIdOnly = await prisma.authVerification.updateManyAndReturn({
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
    updateManyAndReturn<T extends AuthVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthVerification.
     * @param {AuthVerificationUpsertArgs} args - Arguments to update or create a AuthVerification.
     * @example
     * // Update or create a AuthVerification
     * const authVerification = await prisma.authVerification.upsert({
     *   create: {
     *     // ... data to create a AuthVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthVerification we want to update
     *   }
     * })
     */
    upsert<T extends AuthVerificationUpsertArgs>(args: SelectSubset<T, AuthVerificationUpsertArgs<ExtArgs>>): Prisma__AuthVerificationClient<$Result.GetResult<Prisma.$AuthVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationCountArgs} args - Arguments to filter AuthVerifications to count.
     * @example
     * // Count the number of AuthVerifications
     * const count = await prisma.authVerification.count({
     *   where: {
     *     // ... the filter for the AuthVerifications we want to count
     *   }
     * })
    **/
    count<T extends AuthVerificationCountArgs>(
      args?: Subset<T, AuthVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthVerificationAggregateArgs>(args: Subset<T, AuthVerificationAggregateArgs>): Prisma.PrismaPromise<GetAuthVerificationAggregateType<T>>

    /**
     * Group by AuthVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthVerificationGroupByArgs} args - Group by arguments.
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
      T extends AuthVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthVerificationGroupByArgs['orderBy'] }
        : { orderBy?: AuthVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuthVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthVerification model
   */
  readonly fields: AuthVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AuthVerification model
   */
  interface AuthVerificationFieldRefs {
    readonly id: FieldRef<"AuthVerification", 'String'>
    readonly identifier: FieldRef<"AuthVerification", 'String'>
    readonly value: FieldRef<"AuthVerification", 'String'>
    readonly expiresAt: FieldRef<"AuthVerification", 'DateTime'>
    readonly createdAt: FieldRef<"AuthVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"AuthVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthVerification findUnique
   */
  export type AuthVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification findUniqueOrThrow
   */
  export type AuthVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification findFirst
   */
  export type AuthVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthVerifications.
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthVerifications.
     */
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * AuthVerification findFirstOrThrow
   */
  export type AuthVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerification to fetch.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthVerifications.
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthVerifications.
     */
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * AuthVerification findMany
   */
  export type AuthVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter, which AuthVerifications to fetch.
     */
    where?: AuthVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthVerifications to fetch.
     */
    orderBy?: AuthVerificationOrderByWithRelationInput | AuthVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthVerifications.
     */
    cursor?: AuthVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthVerifications.
     */
    skip?: number
    distinct?: AuthVerificationScalarFieldEnum | AuthVerificationScalarFieldEnum[]
  }

  /**
   * AuthVerification create
   */
  export type AuthVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a AuthVerification.
     */
    data: XOR<AuthVerificationCreateInput, AuthVerificationUncheckedCreateInput>
  }

  /**
   * AuthVerification createMany
   */
  export type AuthVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthVerifications.
     */
    data: AuthVerificationCreateManyInput | AuthVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthVerification createManyAndReturn
   */
  export type AuthVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many AuthVerifications.
     */
    data: AuthVerificationCreateManyInput | AuthVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthVerification update
   */
  export type AuthVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a AuthVerification.
     */
    data: XOR<AuthVerificationUpdateInput, AuthVerificationUncheckedUpdateInput>
    /**
     * Choose, which AuthVerification to update.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification updateMany
   */
  export type AuthVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthVerifications.
     */
    data: XOR<AuthVerificationUpdateManyMutationInput, AuthVerificationUncheckedUpdateManyInput>
    /**
     * Filter which AuthVerifications to update
     */
    where?: AuthVerificationWhereInput
    /**
     * Limit how many AuthVerifications to update.
     */
    limit?: number
  }

  /**
   * AuthVerification updateManyAndReturn
   */
  export type AuthVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The data used to update AuthVerifications.
     */
    data: XOR<AuthVerificationUpdateManyMutationInput, AuthVerificationUncheckedUpdateManyInput>
    /**
     * Filter which AuthVerifications to update
     */
    where?: AuthVerificationWhereInput
    /**
     * Limit how many AuthVerifications to update.
     */
    limit?: number
  }

  /**
   * AuthVerification upsert
   */
  export type AuthVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the AuthVerification to update in case it exists.
     */
    where: AuthVerificationWhereUniqueInput
    /**
     * In case the AuthVerification found by the `where` argument doesn't exist, create a new AuthVerification with this data.
     */
    create: XOR<AuthVerificationCreateInput, AuthVerificationUncheckedCreateInput>
    /**
     * In case the AuthVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthVerificationUpdateInput, AuthVerificationUncheckedUpdateInput>
  }

  /**
   * AuthVerification delete
   */
  export type AuthVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
    /**
     * Filter which AuthVerification to delete.
     */
    where: AuthVerificationWhereUniqueInput
  }

  /**
   * AuthVerification deleteMany
   */
  export type AuthVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthVerifications to delete
     */
    where?: AuthVerificationWhereInput
    /**
     * Limit how many AuthVerifications to delete.
     */
    limit?: number
  }

  /**
   * AuthVerification without action
   */
  export type AuthVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthVerification
     */
    select?: AuthVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthVerification
     */
    omit?: AuthVerificationOmit<ExtArgs> | null
  }


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
    earnings: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
    earnings: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    authUserId: string | null
    email: string | null
    displayName: string | null
    bio: string | null
    logoUrl: string | null
    instagramUrl: string | null
    youtubeUrl: string | null
    tiktokUrl: string | null
    twitterUrl: string | null
    snapchatUrl: string | null
    role: $Enums.Role | null
    credits: number | null
    earnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    authUserId: string | null
    email: string | null
    displayName: string | null
    bio: string | null
    logoUrl: string | null
    instagramUrl: string | null
    youtubeUrl: string | null
    tiktokUrl: string | null
    twitterUrl: string | null
    snapchatUrl: string | null
    role: $Enums.Role | null
    credits: number | null
    earnings: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    authUserId: number
    email: number
    displayName: number
    bio: number
    logoUrl: number
    instagramUrl: number
    youtubeUrl: number
    tiktokUrl: number
    twitterUrl: number
    snapchatUrl: number
    role: number
    credits: number
    earnings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
    earnings?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
    earnings?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    authUserId?: true
    email?: true
    displayName?: true
    bio?: true
    logoUrl?: true
    instagramUrl?: true
    youtubeUrl?: true
    tiktokUrl?: true
    twitterUrl?: true
    snapchatUrl?: true
    role?: true
    credits?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    authUserId?: true
    email?: true
    displayName?: true
    bio?: true
    logoUrl?: true
    instagramUrl?: true
    youtubeUrl?: true
    tiktokUrl?: true
    twitterUrl?: true
    snapchatUrl?: true
    role?: true
    credits?: true
    earnings?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    authUserId?: true
    email?: true
    displayName?: true
    bio?: true
    logoUrl?: true
    instagramUrl?: true
    youtubeUrl?: true
    tiktokUrl?: true
    twitterUrl?: true
    snapchatUrl?: true
    role?: true
    credits?: true
    earnings?: true
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
    authUserId: string
    email: string
    displayName: string | null
    bio: string | null
    logoUrl: string | null
    instagramUrl: string | null
    youtubeUrl: string | null
    tiktokUrl: string | null
    twitterUrl: string | null
    snapchatUrl: string | null
    role: $Enums.Role | null
    credits: number
    earnings: number
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
    authUserId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    logoUrl?: boolean
    instagramUrl?: boolean
    youtubeUrl?: boolean
    tiktokUrl?: boolean
    twitterUrl?: boolean
    snapchatUrl?: boolean
    role?: boolean
    credits?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bidsAsCreator?: boolean | User$bidsAsCreatorArgs<ExtArgs>
    briefsAsBrand?: boolean | User$briefsAsBrandArgs<ExtArgs>
    projectsAsBrand?: boolean | User$projectsAsBrandArgs<ExtArgs>
    projectsAsCreator?: boolean | User$projectsAsCreatorArgs<ExtArgs>
    projectsApproved?: boolean | User$projectsApprovedArgs<ExtArgs>
    projectMessages?: boolean | User$projectMessagesArgs<ExtArgs>
    projectEvents?: boolean | User$projectEventsArgs<ExtArgs>
    brandEscrows?: boolean | User$brandEscrowsArgs<ExtArgs>
    creatorEscrows?: boolean | User$creatorEscrowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    logoUrl?: boolean
    instagramUrl?: boolean
    youtubeUrl?: boolean
    tiktokUrl?: boolean
    twitterUrl?: boolean
    snapchatUrl?: boolean
    role?: boolean
    credits?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authUserId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    logoUrl?: boolean
    instagramUrl?: boolean
    youtubeUrl?: boolean
    tiktokUrl?: boolean
    twitterUrl?: boolean
    snapchatUrl?: boolean
    role?: boolean
    credits?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    authUserId?: boolean
    email?: boolean
    displayName?: boolean
    bio?: boolean
    logoUrl?: boolean
    instagramUrl?: boolean
    youtubeUrl?: boolean
    tiktokUrl?: boolean
    twitterUrl?: boolean
    snapchatUrl?: boolean
    role?: boolean
    credits?: boolean
    earnings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authUserId" | "email" | "displayName" | "bio" | "logoUrl" | "instagramUrl" | "youtubeUrl" | "tiktokUrl" | "twitterUrl" | "snapchatUrl" | "role" | "credits" | "earnings" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bidsAsCreator?: boolean | User$bidsAsCreatorArgs<ExtArgs>
    briefsAsBrand?: boolean | User$briefsAsBrandArgs<ExtArgs>
    projectsAsBrand?: boolean | User$projectsAsBrandArgs<ExtArgs>
    projectsAsCreator?: boolean | User$projectsAsCreatorArgs<ExtArgs>
    projectsApproved?: boolean | User$projectsApprovedArgs<ExtArgs>
    projectMessages?: boolean | User$projectMessagesArgs<ExtArgs>
    projectEvents?: boolean | User$projectEventsArgs<ExtArgs>
    brandEscrows?: boolean | User$brandEscrowsArgs<ExtArgs>
    creatorEscrows?: boolean | User$creatorEscrowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bidsAsCreator: Prisma.$BidPayload<ExtArgs>[]
      briefsAsBrand: Prisma.$BriefPayload<ExtArgs>[]
      projectsAsBrand: Prisma.$ProjectPayload<ExtArgs>[]
      projectsAsCreator: Prisma.$ProjectPayload<ExtArgs>[]
      projectsApproved: Prisma.$ProjectPayload<ExtArgs>[]
      projectMessages: Prisma.$ProjectMessagePayload<ExtArgs>[]
      projectEvents: Prisma.$ProjectEventPayload<ExtArgs>[]
      brandEscrows: Prisma.$ProjectEscrowPayload<ExtArgs>[]
      creatorEscrows: Prisma.$ProjectEscrowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authUserId: string
      email: string
      displayName: string | null
      bio: string | null
      logoUrl: string | null
      instagramUrl: string | null
      youtubeUrl: string | null
      tiktokUrl: string | null
      twitterUrl: string | null
      snapchatUrl: string | null
      role: $Enums.Role | null
      credits: number
      earnings: number
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
    bidsAsCreator<T extends User$bidsAsCreatorArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsAsCreatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    briefsAsBrand<T extends User$briefsAsBrandArgs<ExtArgs> = {}>(args?: Subset<T, User$briefsAsBrandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsAsBrand<T extends User$projectsAsBrandArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsAsBrandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsAsCreator<T extends User$projectsAsCreatorArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsAsCreatorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsApproved<T extends User$projectsApprovedArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsApprovedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectMessages<T extends User$projectMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$projectMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectEvents<T extends User$projectEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brandEscrows<T extends User$brandEscrowsArgs<ExtArgs> = {}>(args?: Subset<T, User$brandEscrowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creatorEscrows<T extends User$creatorEscrowsArgs<ExtArgs> = {}>(args?: Subset<T, User$creatorEscrowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly authUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly logoUrl: FieldRef<"User", 'String'>
    readonly instagramUrl: FieldRef<"User", 'String'>
    readonly youtubeUrl: FieldRef<"User", 'String'>
    readonly tiktokUrl: FieldRef<"User", 'String'>
    readonly twitterUrl: FieldRef<"User", 'String'>
    readonly snapchatUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly earnings: FieldRef<"User", 'Int'>
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
   * User.projectsApproved
   */
  export type User$projectsApprovedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.projectMessages
   */
  export type User$projectMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    where?: ProjectMessageWhereInput
    orderBy?: ProjectMessageOrderByWithRelationInput | ProjectMessageOrderByWithRelationInput[]
    cursor?: ProjectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMessageScalarFieldEnum | ProjectMessageScalarFieldEnum[]
  }

  /**
   * User.projectEvents
   */
  export type User$projectEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    where?: ProjectEventWhereInput
    orderBy?: ProjectEventOrderByWithRelationInput | ProjectEventOrderByWithRelationInput[]
    cursor?: ProjectEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEventScalarFieldEnum | ProjectEventScalarFieldEnum[]
  }

  /**
   * User.brandEscrows
   */
  export type User$brandEscrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    where?: ProjectEscrowWhereInput
    orderBy?: ProjectEscrowOrderByWithRelationInput | ProjectEscrowOrderByWithRelationInput[]
    cursor?: ProjectEscrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEscrowScalarFieldEnum | ProjectEscrowScalarFieldEnum[]
  }

  /**
   * User.creatorEscrows
   */
  export type User$creatorEscrowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    where?: ProjectEscrowWhereInput
    orderBy?: ProjectEscrowOrderByWithRelationInput | ProjectEscrowOrderByWithRelationInput[]
    cursor?: ProjectEscrowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEscrowScalarFieldEnum | ProjectEscrowScalarFieldEnum[]
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
    _avg: BriefAvgAggregateOutputType | null
    _sum: BriefSumAggregateOutputType | null
    _min: BriefMinAggregateOutputType | null
    _max: BriefMaxAggregateOutputType | null
  }

  export type BriefAvgAggregateOutputType = {
    minBidAmount: number | null
    maxBidAmount: number | null
  }

  export type BriefSumAggregateOutputType = {
    minBidAmount: number | null
    maxBidAmount: number | null
  }

  export type BriefMinAggregateOutputType = {
    id: string | null
    title: string | null
    productDescription: string | null
    reelScript: string | null
    productUrl: string | null
    minBidAmount: number | null
    maxBidAmount: number | null
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
    reelScript: string | null
    productUrl: string | null
    minBidAmount: number | null
    maxBidAmount: number | null
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
    reelScript: number
    targetPlatforms: number
    productUrl: number
    minBidAmount: number
    maxBidAmount: number
    hook1: number
    hook2: number
    hook3: number
    status: number
    brandId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BriefAvgAggregateInputType = {
    minBidAmount?: true
    maxBidAmount?: true
  }

  export type BriefSumAggregateInputType = {
    minBidAmount?: true
    maxBidAmount?: true
  }

  export type BriefMinAggregateInputType = {
    id?: true
    title?: true
    productDescription?: true
    reelScript?: true
    productUrl?: true
    minBidAmount?: true
    maxBidAmount?: true
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
    reelScript?: true
    productUrl?: true
    minBidAmount?: true
    maxBidAmount?: true
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
    reelScript?: true
    targetPlatforms?: true
    productUrl?: true
    minBidAmount?: true
    maxBidAmount?: true
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
     * Select which fields to average
    **/
    _avg?: BriefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BriefSumAggregateInputType
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
    _avg?: BriefAvgAggregateInputType
    _sum?: BriefSumAggregateInputType
    _min?: BriefMinAggregateInputType
    _max?: BriefMaxAggregateInputType
  }

  export type BriefGroupByOutputType = {
    id: string
    title: string
    productDescription: string
    reelScript: string
    targetPlatforms: string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
    hook1: string
    hook2: string
    hook3: string
    status: $Enums.BriefStatus
    brandId: string
    createdAt: Date
    updatedAt: Date
    _count: BriefCountAggregateOutputType | null
    _avg: BriefAvgAggregateOutputType | null
    _sum: BriefSumAggregateOutputType | null
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
    reelScript?: boolean
    targetPlatforms?: boolean
    productUrl?: boolean
    minBidAmount?: boolean
    maxBidAmount?: boolean
    hook1?: boolean
    hook2?: boolean
    hook3?: boolean
    status?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bids?: boolean | Brief$bidsArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    projects?: boolean | Brief$projectsArgs<ExtArgs>
    _count?: boolean | BriefCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brief"]>

  export type BriefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    productDescription?: boolean
    reelScript?: boolean
    targetPlatforms?: boolean
    productUrl?: boolean
    minBidAmount?: boolean
    maxBidAmount?: boolean
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
    reelScript?: boolean
    targetPlatforms?: boolean
    productUrl?: boolean
    minBidAmount?: boolean
    maxBidAmount?: boolean
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
    reelScript?: boolean
    targetPlatforms?: boolean
    productUrl?: boolean
    minBidAmount?: boolean
    maxBidAmount?: boolean
    hook1?: boolean
    hook2?: boolean
    hook3?: boolean
    status?: boolean
    brandId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BriefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "productDescription" | "reelScript" | "targetPlatforms" | "productUrl" | "minBidAmount" | "maxBidAmount" | "hook1" | "hook2" | "hook3" | "status" | "brandId" | "createdAt" | "updatedAt", ExtArgs["result"]["brief"]>
  export type BriefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bids?: boolean | Brief$bidsArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
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
      bids: Prisma.$BidPayload<ExtArgs>[]
      brand: Prisma.$UserPayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      productDescription: string
      reelScript: string
      targetPlatforms: string[]
      productUrl: string
      minBidAmount: number
      maxBidAmount: number
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
    bids<T extends Brief$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Brief$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brand<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly reelScript: FieldRef<"Brief", 'String'>
    readonly targetPlatforms: FieldRef<"Brief", 'String[]'>
    readonly productUrl: FieldRef<"Brief", 'String'>
    readonly minBidAmount: FieldRef<"Brief", 'Int'>
    readonly maxBidAmount: FieldRef<"Brief", 'Int'>
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
    project?: boolean | Bid$projectArgs<ExtArgs>
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
    project?: boolean | Bid$projectArgs<ExtArgs>
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
      project: Prisma.$ProjectPayload<ExtArgs> | null
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
    project<T extends Bid$projectArgs<ExtArgs> = {}>(args?: Subset<T, Bid$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Bid.project
   */
  export type Bid$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    agreedAmount: number | null
  }

  export type ProjectSumAggregateOutputType = {
    agreedAmount: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    bidId: string | null
    briefId: string | null
    brandId: string | null
    creatorId: string | null
    agreedAmount: number | null
    status: $Enums.ProjectStatus | null
    creatorSubmittedAt: Date | null
    creatorSubmissionNote: string | null
    brandApprovedAt: Date | null
    approvedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    bidId: string | null
    briefId: string | null
    brandId: string | null
    creatorId: string | null
    agreedAmount: number | null
    status: $Enums.ProjectStatus | null
    creatorSubmittedAt: Date | null
    creatorSubmissionNote: string | null
    brandApprovedAt: Date | null
    approvedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    bidId: number
    briefId: number
    brandId: number
    creatorId: number
    agreedAmount: number
    status: number
    creatorSubmittedAt: number
    creatorSubmissionNote: number
    brandApprovedAt: number
    approvedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    agreedAmount?: true
  }

  export type ProjectSumAggregateInputType = {
    agreedAmount?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    bidId?: true
    briefId?: true
    brandId?: true
    creatorId?: true
    agreedAmount?: true
    status?: true
    creatorSubmittedAt?: true
    creatorSubmissionNote?: true
    brandApprovedAt?: true
    approvedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    bidId?: true
    briefId?: true
    brandId?: true
    creatorId?: true
    agreedAmount?: true
    status?: true
    creatorSubmittedAt?: true
    creatorSubmissionNote?: true
    brandApprovedAt?: true
    approvedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    bidId?: true
    briefId?: true
    brandId?: true
    creatorId?: true
    agreedAmount?: true
    status?: true
    creatorSubmittedAt?: true
    creatorSubmissionNote?: true
    brandApprovedAt?: true
    approvedById?: true
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
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
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
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status: $Enums.ProjectStatus
    creatorSubmittedAt: Date | null
    creatorSubmissionNote: string | null
    brandApprovedAt: Date | null
    approvedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
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
    bidId?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    agreedAmount?: boolean
    status?: boolean
    creatorSubmittedAt?: boolean
    creatorSubmissionNote?: boolean
    brandApprovedAt?: boolean
    approvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bid?: boolean | BidDefaultArgs<ExtArgs>
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Project$approvedByArgs<ExtArgs>
    deliverables?: boolean | Project$deliverablesArgs<ExtArgs>
    messages?: boolean | Project$messagesArgs<ExtArgs>
    escrow?: boolean | Project$escrowArgs<ExtArgs>
    events?: boolean | Project$eventsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bidId?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    agreedAmount?: boolean
    status?: boolean
    creatorSubmittedAt?: boolean
    creatorSubmissionNote?: boolean
    brandApprovedAt?: boolean
    approvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bid?: boolean | BidDefaultArgs<ExtArgs>
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Project$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bidId?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    agreedAmount?: boolean
    status?: boolean
    creatorSubmittedAt?: boolean
    creatorSubmissionNote?: boolean
    brandApprovedAt?: boolean
    approvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bid?: boolean | BidDefaultArgs<ExtArgs>
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Project$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    bidId?: boolean
    briefId?: boolean
    brandId?: boolean
    creatorId?: boolean
    agreedAmount?: boolean
    status?: boolean
    creatorSubmittedAt?: boolean
    creatorSubmissionNote?: boolean
    brandApprovedAt?: boolean
    approvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bidId" | "briefId" | "brandId" | "creatorId" | "agreedAmount" | "status" | "creatorSubmittedAt" | "creatorSubmissionNote" | "brandApprovedAt" | "approvedById" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | BidDefaultArgs<ExtArgs>
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Project$approvedByArgs<ExtArgs>
    deliverables?: boolean | Project$deliverablesArgs<ExtArgs>
    messages?: boolean | Project$messagesArgs<ExtArgs>
    escrow?: boolean | Project$escrowArgs<ExtArgs>
    events?: boolean | Project$eventsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | BidDefaultArgs<ExtArgs>
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Project$approvedByArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bid?: boolean | BidDefaultArgs<ExtArgs>
    brief?: boolean | BriefDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | Project$approvedByArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      bid: Prisma.$BidPayload<ExtArgs>
      brief: Prisma.$BriefPayload<ExtArgs>
      brand: Prisma.$UserPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
      deliverables: Prisma.$ProjectDeliverablePayload<ExtArgs>[]
      messages: Prisma.$ProjectMessagePayload<ExtArgs>[]
      escrow: Prisma.$ProjectEscrowPayload<ExtArgs> | null
      events: Prisma.$ProjectEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bidId: string
      briefId: string
      brandId: string
      creatorId: string
      agreedAmount: number
      status: $Enums.ProjectStatus
      creatorSubmittedAt: Date | null
      creatorSubmissionNote: string | null
      brandApprovedAt: Date | null
      approvedById: string | null
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
    bid<T extends BidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BidDefaultArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brief<T extends BriefDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BriefDefaultArgs<ExtArgs>>): Prisma__BriefClient<$Result.GetResult<Prisma.$BriefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    brand<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends Project$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, Project$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deliverables<T extends Project$deliverablesArgs<ExtArgs> = {}>(args?: Subset<T, Project$deliverablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Project$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Project$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    escrow<T extends Project$escrowArgs<ExtArgs> = {}>(args?: Subset<T, Project$escrowArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    events<T extends Project$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Project$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly bidId: FieldRef<"Project", 'String'>
    readonly briefId: FieldRef<"Project", 'String'>
    readonly brandId: FieldRef<"Project", 'String'>
    readonly creatorId: FieldRef<"Project", 'String'>
    readonly agreedAmount: FieldRef<"Project", 'Int'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
    readonly creatorSubmittedAt: FieldRef<"Project", 'DateTime'>
    readonly creatorSubmissionNote: FieldRef<"Project", 'String'>
    readonly brandApprovedAt: FieldRef<"Project", 'DateTime'>
    readonly approvedById: FieldRef<"Project", 'String'>
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
   * Project.approvedBy
   */
  export type Project$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Project.deliverables
   */
  export type Project$deliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    where?: ProjectDeliverableWhereInput
    orderBy?: ProjectDeliverableOrderByWithRelationInput | ProjectDeliverableOrderByWithRelationInput[]
    cursor?: ProjectDeliverableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDeliverableScalarFieldEnum | ProjectDeliverableScalarFieldEnum[]
  }

  /**
   * Project.messages
   */
  export type Project$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    where?: ProjectMessageWhereInput
    orderBy?: ProjectMessageOrderByWithRelationInput | ProjectMessageOrderByWithRelationInput[]
    cursor?: ProjectMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMessageScalarFieldEnum | ProjectMessageScalarFieldEnum[]
  }

  /**
   * Project.escrow
   */
  export type Project$escrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    where?: ProjectEscrowWhereInput
  }

  /**
   * Project.events
   */
  export type Project$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    where?: ProjectEventWhereInput
    orderBy?: ProjectEventOrderByWithRelationInput | ProjectEventOrderByWithRelationInput[]
    cursor?: ProjectEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectEventScalarFieldEnum | ProjectEventScalarFieldEnum[]
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
   * Model ProjectDeliverable
   */

  export type AggregateProjectDeliverable = {
    _count: ProjectDeliverableCountAggregateOutputType | null
    _avg: ProjectDeliverableAvgAggregateOutputType | null
    _sum: ProjectDeliverableSumAggregateOutputType | null
    _min: ProjectDeliverableMinAggregateOutputType | null
    _max: ProjectDeliverableMaxAggregateOutputType | null
  }

  export type ProjectDeliverableAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProjectDeliverableSumAggregateOutputType = {
    sortOrder: number | null
  }

  export type ProjectDeliverableMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    platform: string | null
    url: string | null
    notes: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDeliverableMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    platform: string | null
    url: string | null
    notes: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectDeliverableCountAggregateOutputType = {
    id: number
    projectId: number
    platform: number
    url: number
    notes: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectDeliverableAvgAggregateInputType = {
    sortOrder?: true
  }

  export type ProjectDeliverableSumAggregateInputType = {
    sortOrder?: true
  }

  export type ProjectDeliverableMinAggregateInputType = {
    id?: true
    projectId?: true
    platform?: true
    url?: true
    notes?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDeliverableMaxAggregateInputType = {
    id?: true
    projectId?: true
    platform?: true
    url?: true
    notes?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectDeliverableCountAggregateInputType = {
    id?: true
    projectId?: true
    platform?: true
    url?: true
    notes?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectDeliverableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDeliverable to aggregate.
     */
    where?: ProjectDeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDeliverables to fetch.
     */
    orderBy?: ProjectDeliverableOrderByWithRelationInput | ProjectDeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDeliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDeliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDeliverables
    **/
    _count?: true | ProjectDeliverableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectDeliverableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectDeliverableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDeliverableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDeliverableMaxAggregateInputType
  }

  export type GetProjectDeliverableAggregateType<T extends ProjectDeliverableAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDeliverable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDeliverable[P]>
      : GetScalarType<T[P], AggregateProjectDeliverable[P]>
  }




  export type ProjectDeliverableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDeliverableWhereInput
    orderBy?: ProjectDeliverableOrderByWithAggregationInput | ProjectDeliverableOrderByWithAggregationInput[]
    by: ProjectDeliverableScalarFieldEnum[] | ProjectDeliverableScalarFieldEnum
    having?: ProjectDeliverableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDeliverableCountAggregateInputType | true
    _avg?: ProjectDeliverableAvgAggregateInputType
    _sum?: ProjectDeliverableSumAggregateInputType
    _min?: ProjectDeliverableMinAggregateInputType
    _max?: ProjectDeliverableMaxAggregateInputType
  }

  export type ProjectDeliverableGroupByOutputType = {
    id: string
    projectId: string
    platform: string
    url: string
    notes: string | null
    sortOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectDeliverableCountAggregateOutputType | null
    _avg: ProjectDeliverableAvgAggregateOutputType | null
    _sum: ProjectDeliverableSumAggregateOutputType | null
    _min: ProjectDeliverableMinAggregateOutputType | null
    _max: ProjectDeliverableMaxAggregateOutputType | null
  }

  type GetProjectDeliverableGroupByPayload<T extends ProjectDeliverableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDeliverableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDeliverableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDeliverableGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDeliverableGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDeliverableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    platform?: boolean
    url?: boolean
    notes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDeliverable"]>

  export type ProjectDeliverableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    platform?: boolean
    url?: boolean
    notes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDeliverable"]>

  export type ProjectDeliverableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    platform?: boolean
    url?: boolean
    notes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectDeliverable"]>

  export type ProjectDeliverableSelectScalar = {
    id?: boolean
    projectId?: boolean
    platform?: boolean
    url?: boolean
    notes?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectDeliverableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "platform" | "url" | "notes" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["projectDeliverable"]>
  export type ProjectDeliverableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectDeliverableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectDeliverableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectDeliverablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDeliverable"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      platform: string
      url: string
      notes: string | null
      sortOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectDeliverable"]>
    composites: {}
  }

  type ProjectDeliverableGetPayload<S extends boolean | null | undefined | ProjectDeliverableDefaultArgs> = $Result.GetResult<Prisma.$ProjectDeliverablePayload, S>

  type ProjectDeliverableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDeliverableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDeliverableCountAggregateInputType | true
    }

  export interface ProjectDeliverableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDeliverable'], meta: { name: 'ProjectDeliverable' } }
    /**
     * Find zero or one ProjectDeliverable that matches the filter.
     * @param {ProjectDeliverableFindUniqueArgs} args - Arguments to find a ProjectDeliverable
     * @example
     * // Get one ProjectDeliverable
     * const projectDeliverable = await prisma.projectDeliverable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDeliverableFindUniqueArgs>(args: SelectSubset<T, ProjectDeliverableFindUniqueArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectDeliverable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDeliverableFindUniqueOrThrowArgs} args - Arguments to find a ProjectDeliverable
     * @example
     * // Get one ProjectDeliverable
     * const projectDeliverable = await prisma.projectDeliverable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDeliverableFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDeliverableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDeliverable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDeliverableFindFirstArgs} args - Arguments to find a ProjectDeliverable
     * @example
     * // Get one ProjectDeliverable
     * const projectDeliverable = await prisma.projectDeliverable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDeliverableFindFirstArgs>(args?: SelectSubset<T, ProjectDeliverableFindFirstArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDeliverable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDeliverableFindFirstOrThrowArgs} args - Arguments to find a ProjectDeliverable
     * @example
     * // Get one ProjectDeliverable
     * const projectDeliverable = await prisma.projectDeliverable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDeliverableFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDeliverableFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectDeliverables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDeliverableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDeliverables
     * const projectDeliverables = await prisma.projectDeliverable.findMany()
     * 
     * // Get first 10 ProjectDeliverables
     * const projectDeliverables = await prisma.projectDeliverable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectDeliverableWithIdOnly = await prisma.projectDeliverable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectDeliverableFindManyArgs>(args?: SelectSubset<T, ProjectDeliverableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectDeliverable.
     * @param {ProjectDeliverableCreateArgs} args - Arguments to create a ProjectDeliverable.
     * @example
     * // Create one ProjectDeliverable
     * const ProjectDeliverable = await prisma.projectDeliverable.create({
     *   data: {
     *     // ... data to create a ProjectDeliverable
     *   }
     * })
     * 
     */
    create<T extends ProjectDeliverableCreateArgs>(args: SelectSubset<T, ProjectDeliverableCreateArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectDeliverables.
     * @param {ProjectDeliverableCreateManyArgs} args - Arguments to create many ProjectDeliverables.
     * @example
     * // Create many ProjectDeliverables
     * const projectDeliverable = await prisma.projectDeliverable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDeliverableCreateManyArgs>(args?: SelectSubset<T, ProjectDeliverableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectDeliverables and returns the data saved in the database.
     * @param {ProjectDeliverableCreateManyAndReturnArgs} args - Arguments to create many ProjectDeliverables.
     * @example
     * // Create many ProjectDeliverables
     * const projectDeliverable = await prisma.projectDeliverable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectDeliverables and only return the `id`
     * const projectDeliverableWithIdOnly = await prisma.projectDeliverable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectDeliverableCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectDeliverableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectDeliverable.
     * @param {ProjectDeliverableDeleteArgs} args - Arguments to delete one ProjectDeliverable.
     * @example
     * // Delete one ProjectDeliverable
     * const ProjectDeliverable = await prisma.projectDeliverable.delete({
     *   where: {
     *     // ... filter to delete one ProjectDeliverable
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeliverableDeleteArgs>(args: SelectSubset<T, ProjectDeliverableDeleteArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectDeliverable.
     * @param {ProjectDeliverableUpdateArgs} args - Arguments to update one ProjectDeliverable.
     * @example
     * // Update one ProjectDeliverable
     * const projectDeliverable = await prisma.projectDeliverable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDeliverableUpdateArgs>(args: SelectSubset<T, ProjectDeliverableUpdateArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectDeliverables.
     * @param {ProjectDeliverableDeleteManyArgs} args - Arguments to filter ProjectDeliverables to delete.
     * @example
     * // Delete a few ProjectDeliverables
     * const { count } = await prisma.projectDeliverable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeliverableDeleteManyArgs>(args?: SelectSubset<T, ProjectDeliverableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDeliverables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDeliverableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDeliverables
     * const projectDeliverable = await prisma.projectDeliverable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDeliverableUpdateManyArgs>(args: SelectSubset<T, ProjectDeliverableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDeliverables and returns the data updated in the database.
     * @param {ProjectDeliverableUpdateManyAndReturnArgs} args - Arguments to update many ProjectDeliverables.
     * @example
     * // Update many ProjectDeliverables
     * const projectDeliverable = await prisma.projectDeliverable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectDeliverables and only return the `id`
     * const projectDeliverableWithIdOnly = await prisma.projectDeliverable.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectDeliverableUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectDeliverableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectDeliverable.
     * @param {ProjectDeliverableUpsertArgs} args - Arguments to update or create a ProjectDeliverable.
     * @example
     * // Update or create a ProjectDeliverable
     * const projectDeliverable = await prisma.projectDeliverable.upsert({
     *   create: {
     *     // ... data to create a ProjectDeliverable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDeliverable we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDeliverableUpsertArgs>(args: SelectSubset<T, ProjectDeliverableUpsertArgs<ExtArgs>>): Prisma__ProjectDeliverableClient<$Result.GetResult<Prisma.$ProjectDeliverablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectDeliverables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDeliverableCountArgs} args - Arguments to filter ProjectDeliverables to count.
     * @example
     * // Count the number of ProjectDeliverables
     * const count = await prisma.projectDeliverable.count({
     *   where: {
     *     // ... the filter for the ProjectDeliverables we want to count
     *   }
     * })
    **/
    count<T extends ProjectDeliverableCountArgs>(
      args?: Subset<T, ProjectDeliverableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDeliverableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDeliverable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDeliverableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectDeliverableAggregateArgs>(args: Subset<T, ProjectDeliverableAggregateArgs>): Prisma.PrismaPromise<GetProjectDeliverableAggregateType<T>>

    /**
     * Group by ProjectDeliverable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDeliverableGroupByArgs} args - Group by arguments.
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
      T extends ProjectDeliverableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDeliverableGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDeliverableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectDeliverableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDeliverableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDeliverable model
   */
  readonly fields: ProjectDeliverableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDeliverable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDeliverableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectDeliverable model
   */
  interface ProjectDeliverableFieldRefs {
    readonly id: FieldRef<"ProjectDeliverable", 'String'>
    readonly projectId: FieldRef<"ProjectDeliverable", 'String'>
    readonly platform: FieldRef<"ProjectDeliverable", 'String'>
    readonly url: FieldRef<"ProjectDeliverable", 'String'>
    readonly notes: FieldRef<"ProjectDeliverable", 'String'>
    readonly sortOrder: FieldRef<"ProjectDeliverable", 'Int'>
    readonly createdAt: FieldRef<"ProjectDeliverable", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectDeliverable", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDeliverable findUnique
   */
  export type ProjectDeliverableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDeliverable to fetch.
     */
    where: ProjectDeliverableWhereUniqueInput
  }

  /**
   * ProjectDeliverable findUniqueOrThrow
   */
  export type ProjectDeliverableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDeliverable to fetch.
     */
    where: ProjectDeliverableWhereUniqueInput
  }

  /**
   * ProjectDeliverable findFirst
   */
  export type ProjectDeliverableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDeliverable to fetch.
     */
    where?: ProjectDeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDeliverables to fetch.
     */
    orderBy?: ProjectDeliverableOrderByWithRelationInput | ProjectDeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDeliverables.
     */
    cursor?: ProjectDeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDeliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDeliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDeliverables.
     */
    distinct?: ProjectDeliverableScalarFieldEnum | ProjectDeliverableScalarFieldEnum[]
  }

  /**
   * ProjectDeliverable findFirstOrThrow
   */
  export type ProjectDeliverableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDeliverable to fetch.
     */
    where?: ProjectDeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDeliverables to fetch.
     */
    orderBy?: ProjectDeliverableOrderByWithRelationInput | ProjectDeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDeliverables.
     */
    cursor?: ProjectDeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDeliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDeliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDeliverables.
     */
    distinct?: ProjectDeliverableScalarFieldEnum | ProjectDeliverableScalarFieldEnum[]
  }

  /**
   * ProjectDeliverable findMany
   */
  export type ProjectDeliverableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDeliverables to fetch.
     */
    where?: ProjectDeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDeliverables to fetch.
     */
    orderBy?: ProjectDeliverableOrderByWithRelationInput | ProjectDeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDeliverables.
     */
    cursor?: ProjectDeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDeliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDeliverables.
     */
    skip?: number
    distinct?: ProjectDeliverableScalarFieldEnum | ProjectDeliverableScalarFieldEnum[]
  }

  /**
   * ProjectDeliverable create
   */
  export type ProjectDeliverableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectDeliverable.
     */
    data: XOR<ProjectDeliverableCreateInput, ProjectDeliverableUncheckedCreateInput>
  }

  /**
   * ProjectDeliverable createMany
   */
  export type ProjectDeliverableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDeliverables.
     */
    data: ProjectDeliverableCreateManyInput | ProjectDeliverableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDeliverable createManyAndReturn
   */
  export type ProjectDeliverableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectDeliverables.
     */
    data: ProjectDeliverableCreateManyInput | ProjectDeliverableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDeliverable update
   */
  export type ProjectDeliverableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectDeliverable.
     */
    data: XOR<ProjectDeliverableUpdateInput, ProjectDeliverableUncheckedUpdateInput>
    /**
     * Choose, which ProjectDeliverable to update.
     */
    where: ProjectDeliverableWhereUniqueInput
  }

  /**
   * ProjectDeliverable updateMany
   */
  export type ProjectDeliverableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDeliverables.
     */
    data: XOR<ProjectDeliverableUpdateManyMutationInput, ProjectDeliverableUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDeliverables to update
     */
    where?: ProjectDeliverableWhereInput
    /**
     * Limit how many ProjectDeliverables to update.
     */
    limit?: number
  }

  /**
   * ProjectDeliverable updateManyAndReturn
   */
  export type ProjectDeliverableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * The data used to update ProjectDeliverables.
     */
    data: XOR<ProjectDeliverableUpdateManyMutationInput, ProjectDeliverableUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDeliverables to update
     */
    where?: ProjectDeliverableWhereInput
    /**
     * Limit how many ProjectDeliverables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectDeliverable upsert
   */
  export type ProjectDeliverableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectDeliverable to update in case it exists.
     */
    where: ProjectDeliverableWhereUniqueInput
    /**
     * In case the ProjectDeliverable found by the `where` argument doesn't exist, create a new ProjectDeliverable with this data.
     */
    create: XOR<ProjectDeliverableCreateInput, ProjectDeliverableUncheckedCreateInput>
    /**
     * In case the ProjectDeliverable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDeliverableUpdateInput, ProjectDeliverableUncheckedUpdateInput>
  }

  /**
   * ProjectDeliverable delete
   */
  export type ProjectDeliverableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
    /**
     * Filter which ProjectDeliverable to delete.
     */
    where: ProjectDeliverableWhereUniqueInput
  }

  /**
   * ProjectDeliverable deleteMany
   */
  export type ProjectDeliverableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDeliverables to delete
     */
    where?: ProjectDeliverableWhereInput
    /**
     * Limit how many ProjectDeliverables to delete.
     */
    limit?: number
  }

  /**
   * ProjectDeliverable without action
   */
  export type ProjectDeliverableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDeliverable
     */
    select?: ProjectDeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDeliverable
     */
    omit?: ProjectDeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDeliverableInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMessage
   */

  export type AggregateProjectMessage = {
    _count: ProjectMessageCountAggregateOutputType | null
    _min: ProjectMessageMinAggregateOutputType | null
    _max: ProjectMessageMaxAggregateOutputType | null
  }

  export type ProjectMessageMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    senderId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type ProjectMessageMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    senderId: string | null
    body: string | null
    createdAt: Date | null
  }

  export type ProjectMessageCountAggregateOutputType = {
    id: number
    projectId: number
    senderId: number
    body: number
    createdAt: number
    _all: number
  }


  export type ProjectMessageMinAggregateInputType = {
    id?: true
    projectId?: true
    senderId?: true
    body?: true
    createdAt?: true
  }

  export type ProjectMessageMaxAggregateInputType = {
    id?: true
    projectId?: true
    senderId?: true
    body?: true
    createdAt?: true
  }

  export type ProjectMessageCountAggregateInputType = {
    id?: true
    projectId?: true
    senderId?: true
    body?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMessage to aggregate.
     */
    where?: ProjectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMessages to fetch.
     */
    orderBy?: ProjectMessageOrderByWithRelationInput | ProjectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMessages
    **/
    _count?: true | ProjectMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMessageMaxAggregateInputType
  }

  export type GetProjectMessageAggregateType<T extends ProjectMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMessage[P]>
      : GetScalarType<T[P], AggregateProjectMessage[P]>
  }




  export type ProjectMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMessageWhereInput
    orderBy?: ProjectMessageOrderByWithAggregationInput | ProjectMessageOrderByWithAggregationInput[]
    by: ProjectMessageScalarFieldEnum[] | ProjectMessageScalarFieldEnum
    having?: ProjectMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMessageCountAggregateInputType | true
    _min?: ProjectMessageMinAggregateInputType
    _max?: ProjectMessageMaxAggregateInputType
  }

  export type ProjectMessageGroupByOutputType = {
    id: string
    projectId: string
    senderId: string
    body: string
    createdAt: Date
    _count: ProjectMessageCountAggregateOutputType | null
    _min: ProjectMessageMinAggregateOutputType | null
    _max: ProjectMessageMaxAggregateOutputType | null
  }

  type GetProjectMessageGroupByPayload<T extends ProjectMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMessageGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMessage"]>

  export type ProjectMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMessage"]>

  export type ProjectMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMessage"]>

  export type ProjectMessageSelectScalar = {
    id?: boolean
    projectId?: boolean
    senderId?: boolean
    body?: boolean
    createdAt?: boolean
  }

  export type ProjectMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "senderId" | "body" | "createdAt", ExtArgs["result"]["projectMessage"]>
  export type ProjectMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMessage"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      senderId: string
      body: string
      createdAt: Date
    }, ExtArgs["result"]["projectMessage"]>
    composites: {}
  }

  type ProjectMessageGetPayload<S extends boolean | null | undefined | ProjectMessageDefaultArgs> = $Result.GetResult<Prisma.$ProjectMessagePayload, S>

  type ProjectMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMessageCountAggregateInputType | true
    }

  export interface ProjectMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMessage'], meta: { name: 'ProjectMessage' } }
    /**
     * Find zero or one ProjectMessage that matches the filter.
     * @param {ProjectMessageFindUniqueArgs} args - Arguments to find a ProjectMessage
     * @example
     * // Get one ProjectMessage
     * const projectMessage = await prisma.projectMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMessageFindUniqueArgs>(args: SelectSubset<T, ProjectMessageFindUniqueArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMessageFindUniqueOrThrowArgs} args - Arguments to find a ProjectMessage
     * @example
     * // Get one ProjectMessage
     * const projectMessage = await prisma.projectMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMessageFindFirstArgs} args - Arguments to find a ProjectMessage
     * @example
     * // Get one ProjectMessage
     * const projectMessage = await prisma.projectMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMessageFindFirstArgs>(args?: SelectSubset<T, ProjectMessageFindFirstArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMessageFindFirstOrThrowArgs} args - Arguments to find a ProjectMessage
     * @example
     * // Get one ProjectMessage
     * const projectMessage = await prisma.projectMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMessages
     * const projectMessages = await prisma.projectMessage.findMany()
     * 
     * // Get first 10 ProjectMessages
     * const projectMessages = await prisma.projectMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMessageWithIdOnly = await prisma.projectMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMessageFindManyArgs>(args?: SelectSubset<T, ProjectMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMessage.
     * @param {ProjectMessageCreateArgs} args - Arguments to create a ProjectMessage.
     * @example
     * // Create one ProjectMessage
     * const ProjectMessage = await prisma.projectMessage.create({
     *   data: {
     *     // ... data to create a ProjectMessage
     *   }
     * })
     * 
     */
    create<T extends ProjectMessageCreateArgs>(args: SelectSubset<T, ProjectMessageCreateArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMessages.
     * @param {ProjectMessageCreateManyArgs} args - Arguments to create many ProjectMessages.
     * @example
     * // Create many ProjectMessages
     * const projectMessage = await prisma.projectMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMessageCreateManyArgs>(args?: SelectSubset<T, ProjectMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMessages and returns the data saved in the database.
     * @param {ProjectMessageCreateManyAndReturnArgs} args - Arguments to create many ProjectMessages.
     * @example
     * // Create many ProjectMessages
     * const projectMessage = await prisma.projectMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMessages and only return the `id`
     * const projectMessageWithIdOnly = await prisma.projectMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectMessage.
     * @param {ProjectMessageDeleteArgs} args - Arguments to delete one ProjectMessage.
     * @example
     * // Delete one ProjectMessage
     * const ProjectMessage = await prisma.projectMessage.delete({
     *   where: {
     *     // ... filter to delete one ProjectMessage
     *   }
     * })
     * 
     */
    delete<T extends ProjectMessageDeleteArgs>(args: SelectSubset<T, ProjectMessageDeleteArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMessage.
     * @param {ProjectMessageUpdateArgs} args - Arguments to update one ProjectMessage.
     * @example
     * // Update one ProjectMessage
     * const projectMessage = await prisma.projectMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMessageUpdateArgs>(args: SelectSubset<T, ProjectMessageUpdateArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMessages.
     * @param {ProjectMessageDeleteManyArgs} args - Arguments to filter ProjectMessages to delete.
     * @example
     * // Delete a few ProjectMessages
     * const { count } = await prisma.projectMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMessageDeleteManyArgs>(args?: SelectSubset<T, ProjectMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMessages
     * const projectMessage = await prisma.projectMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMessageUpdateManyArgs>(args: SelectSubset<T, ProjectMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMessages and returns the data updated in the database.
     * @param {ProjectMessageUpdateManyAndReturnArgs} args - Arguments to update many ProjectMessages.
     * @example
     * // Update many ProjectMessages
     * const projectMessage = await prisma.projectMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectMessages and only return the `id`
     * const projectMessageWithIdOnly = await prisma.projectMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectMessage.
     * @param {ProjectMessageUpsertArgs} args - Arguments to update or create a ProjectMessage.
     * @example
     * // Update or create a ProjectMessage
     * const projectMessage = await prisma.projectMessage.upsert({
     *   create: {
     *     // ... data to create a ProjectMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMessage we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMessageUpsertArgs>(args: SelectSubset<T, ProjectMessageUpsertArgs<ExtArgs>>): Prisma__ProjectMessageClient<$Result.GetResult<Prisma.$ProjectMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMessageCountArgs} args - Arguments to filter ProjectMessages to count.
     * @example
     * // Count the number of ProjectMessages
     * const count = await prisma.projectMessage.count({
     *   where: {
     *     // ... the filter for the ProjectMessages we want to count
     *   }
     * })
    **/
    count<T extends ProjectMessageCountArgs>(
      args?: Subset<T, ProjectMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectMessageAggregateArgs>(args: Subset<T, ProjectMessageAggregateArgs>): Prisma.PrismaPromise<GetProjectMessageAggregateType<T>>

    /**
     * Group by ProjectMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMessageGroupByArgs} args - Group by arguments.
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
      T extends ProjectMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMessageGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMessage model
   */
  readonly fields: ProjectMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectMessage model
   */
  interface ProjectMessageFieldRefs {
    readonly id: FieldRef<"ProjectMessage", 'String'>
    readonly projectId: FieldRef<"ProjectMessage", 'String'>
    readonly senderId: FieldRef<"ProjectMessage", 'String'>
    readonly body: FieldRef<"ProjectMessage", 'String'>
    readonly createdAt: FieldRef<"ProjectMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMessage findUnique
   */
  export type ProjectMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMessage to fetch.
     */
    where: ProjectMessageWhereUniqueInput
  }

  /**
   * ProjectMessage findUniqueOrThrow
   */
  export type ProjectMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMessage to fetch.
     */
    where: ProjectMessageWhereUniqueInput
  }

  /**
   * ProjectMessage findFirst
   */
  export type ProjectMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMessage to fetch.
     */
    where?: ProjectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMessages to fetch.
     */
    orderBy?: ProjectMessageOrderByWithRelationInput | ProjectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMessages.
     */
    cursor?: ProjectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMessages.
     */
    distinct?: ProjectMessageScalarFieldEnum | ProjectMessageScalarFieldEnum[]
  }

  /**
   * ProjectMessage findFirstOrThrow
   */
  export type ProjectMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMessage to fetch.
     */
    where?: ProjectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMessages to fetch.
     */
    orderBy?: ProjectMessageOrderByWithRelationInput | ProjectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMessages.
     */
    cursor?: ProjectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMessages.
     */
    distinct?: ProjectMessageScalarFieldEnum | ProjectMessageScalarFieldEnum[]
  }

  /**
   * ProjectMessage findMany
   */
  export type ProjectMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMessages to fetch.
     */
    where?: ProjectMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMessages to fetch.
     */
    orderBy?: ProjectMessageOrderByWithRelationInput | ProjectMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMessages.
     */
    cursor?: ProjectMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMessages.
     */
    skip?: number
    distinct?: ProjectMessageScalarFieldEnum | ProjectMessageScalarFieldEnum[]
  }

  /**
   * ProjectMessage create
   */
  export type ProjectMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMessage.
     */
    data: XOR<ProjectMessageCreateInput, ProjectMessageUncheckedCreateInput>
  }

  /**
   * ProjectMessage createMany
   */
  export type ProjectMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMessages.
     */
    data: ProjectMessageCreateManyInput | ProjectMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMessage createManyAndReturn
   */
  export type ProjectMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectMessages.
     */
    data: ProjectMessageCreateManyInput | ProjectMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMessage update
   */
  export type ProjectMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMessage.
     */
    data: XOR<ProjectMessageUpdateInput, ProjectMessageUncheckedUpdateInput>
    /**
     * Choose, which ProjectMessage to update.
     */
    where: ProjectMessageWhereUniqueInput
  }

  /**
   * ProjectMessage updateMany
   */
  export type ProjectMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMessages.
     */
    data: XOR<ProjectMessageUpdateManyMutationInput, ProjectMessageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMessages to update
     */
    where?: ProjectMessageWhereInput
    /**
     * Limit how many ProjectMessages to update.
     */
    limit?: number
  }

  /**
   * ProjectMessage updateManyAndReturn
   */
  export type ProjectMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * The data used to update ProjectMessages.
     */
    data: XOR<ProjectMessageUpdateManyMutationInput, ProjectMessageUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMessages to update
     */
    where?: ProjectMessageWhereInput
    /**
     * Limit how many ProjectMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMessage upsert
   */
  export type ProjectMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMessage to update in case it exists.
     */
    where: ProjectMessageWhereUniqueInput
    /**
     * In case the ProjectMessage found by the `where` argument doesn't exist, create a new ProjectMessage with this data.
     */
    create: XOR<ProjectMessageCreateInput, ProjectMessageUncheckedCreateInput>
    /**
     * In case the ProjectMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMessageUpdateInput, ProjectMessageUncheckedUpdateInput>
  }

  /**
   * ProjectMessage delete
   */
  export type ProjectMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
    /**
     * Filter which ProjectMessage to delete.
     */
    where: ProjectMessageWhereUniqueInput
  }

  /**
   * ProjectMessage deleteMany
   */
  export type ProjectMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMessages to delete
     */
    where?: ProjectMessageWhereInput
    /**
     * Limit how many ProjectMessages to delete.
     */
    limit?: number
  }

  /**
   * ProjectMessage without action
   */
  export type ProjectMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMessage
     */
    select?: ProjectMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMessage
     */
    omit?: ProjectMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMessageInclude<ExtArgs> | null
  }


  /**
   * Model ProjectEscrow
   */

  export type AggregateProjectEscrow = {
    _count: ProjectEscrowCountAggregateOutputType | null
    _avg: ProjectEscrowAvgAggregateOutputType | null
    _sum: ProjectEscrowSumAggregateOutputType | null
    _min: ProjectEscrowMinAggregateOutputType | null
    _max: ProjectEscrowMaxAggregateOutputType | null
  }

  export type ProjectEscrowAvgAggregateOutputType = {
    amount: number | null
  }

  export type ProjectEscrowSumAggregateOutputType = {
    amount: number | null
  }

  export type ProjectEscrowMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    brandId: string | null
    creatorId: string | null
    amount: number | null
    status: $Enums.EscrowStatus | null
    holdPlacedAt: Date | null
    autoReleaseAt: Date | null
    releasedAt: Date | null
    releaseReason: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    brandId: string | null
    creatorId: string | null
    amount: number | null
    status: $Enums.EscrowStatus | null
    holdPlacedAt: Date | null
    autoReleaseAt: Date | null
    releasedAt: Date | null
    releaseReason: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowCountAggregateOutputType = {
    id: number
    projectId: number
    brandId: number
    creatorId: number
    amount: number
    status: number
    holdPlacedAt: number
    autoReleaseAt: number
    releasedAt: number
    releaseReason: number
    _all: number
  }


  export type ProjectEscrowAvgAggregateInputType = {
    amount?: true
  }

  export type ProjectEscrowSumAggregateInputType = {
    amount?: true
  }

  export type ProjectEscrowMinAggregateInputType = {
    id?: true
    projectId?: true
    brandId?: true
    creatorId?: true
    amount?: true
    status?: true
    holdPlacedAt?: true
    autoReleaseAt?: true
    releasedAt?: true
    releaseReason?: true
  }

  export type ProjectEscrowMaxAggregateInputType = {
    id?: true
    projectId?: true
    brandId?: true
    creatorId?: true
    amount?: true
    status?: true
    holdPlacedAt?: true
    autoReleaseAt?: true
    releasedAt?: true
    releaseReason?: true
  }

  export type ProjectEscrowCountAggregateInputType = {
    id?: true
    projectId?: true
    brandId?: true
    creatorId?: true
    amount?: true
    status?: true
    holdPlacedAt?: true
    autoReleaseAt?: true
    releasedAt?: true
    releaseReason?: true
    _all?: true
  }

  export type ProjectEscrowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEscrow to aggregate.
     */
    where?: ProjectEscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEscrows to fetch.
     */
    orderBy?: ProjectEscrowOrderByWithRelationInput | ProjectEscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectEscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEscrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEscrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectEscrows
    **/
    _count?: true | ProjectEscrowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectEscrowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectEscrowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectEscrowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectEscrowMaxAggregateInputType
  }

  export type GetProjectEscrowAggregateType<T extends ProjectEscrowAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectEscrow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectEscrow[P]>
      : GetScalarType<T[P], AggregateProjectEscrow[P]>
  }




  export type ProjectEscrowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEscrowWhereInput
    orderBy?: ProjectEscrowOrderByWithAggregationInput | ProjectEscrowOrderByWithAggregationInput[]
    by: ProjectEscrowScalarFieldEnum[] | ProjectEscrowScalarFieldEnum
    having?: ProjectEscrowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectEscrowCountAggregateInputType | true
    _avg?: ProjectEscrowAvgAggregateInputType
    _sum?: ProjectEscrowSumAggregateInputType
    _min?: ProjectEscrowMinAggregateInputType
    _max?: ProjectEscrowMaxAggregateInputType
  }

  export type ProjectEscrowGroupByOutputType = {
    id: string
    projectId: string
    brandId: string
    creatorId: string
    amount: number
    status: $Enums.EscrowStatus
    holdPlacedAt: Date
    autoReleaseAt: Date | null
    releasedAt: Date | null
    releaseReason: $Enums.EscrowReleaseReason | null
    _count: ProjectEscrowCountAggregateOutputType | null
    _avg: ProjectEscrowAvgAggregateOutputType | null
    _sum: ProjectEscrowSumAggregateOutputType | null
    _min: ProjectEscrowMinAggregateOutputType | null
    _max: ProjectEscrowMaxAggregateOutputType | null
  }

  type GetProjectEscrowGroupByPayload<T extends ProjectEscrowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectEscrowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectEscrowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectEscrowGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectEscrowGroupByOutputType[P]>
        }
      >
    >


  export type ProjectEscrowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    brandId?: boolean
    creatorId?: boolean
    amount?: boolean
    status?: boolean
    holdPlacedAt?: boolean
    autoReleaseAt?: boolean
    releasedAt?: boolean
    releaseReason?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEscrow"]>

  export type ProjectEscrowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    brandId?: boolean
    creatorId?: boolean
    amount?: boolean
    status?: boolean
    holdPlacedAt?: boolean
    autoReleaseAt?: boolean
    releasedAt?: boolean
    releaseReason?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEscrow"]>

  export type ProjectEscrowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    brandId?: boolean
    creatorId?: boolean
    amount?: boolean
    status?: boolean
    holdPlacedAt?: boolean
    autoReleaseAt?: boolean
    releasedAt?: boolean
    releaseReason?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectEscrow"]>

  export type ProjectEscrowSelectScalar = {
    id?: boolean
    projectId?: boolean
    brandId?: boolean
    creatorId?: boolean
    amount?: boolean
    status?: boolean
    holdPlacedAt?: boolean
    autoReleaseAt?: boolean
    releasedAt?: boolean
    releaseReason?: boolean
  }

  export type ProjectEscrowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "brandId" | "creatorId" | "amount" | "status" | "holdPlacedAt" | "autoReleaseAt" | "releasedAt" | "releaseReason", ExtArgs["result"]["projectEscrow"]>
  export type ProjectEscrowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectEscrowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectEscrowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    brand?: boolean | UserDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectEscrowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectEscrow"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      brand: Prisma.$UserPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      brandId: string
      creatorId: string
      amount: number
      status: $Enums.EscrowStatus
      holdPlacedAt: Date
      autoReleaseAt: Date | null
      releasedAt: Date | null
      releaseReason: $Enums.EscrowReleaseReason | null
    }, ExtArgs["result"]["projectEscrow"]>
    composites: {}
  }

  type ProjectEscrowGetPayload<S extends boolean | null | undefined | ProjectEscrowDefaultArgs> = $Result.GetResult<Prisma.$ProjectEscrowPayload, S>

  type ProjectEscrowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectEscrowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectEscrowCountAggregateInputType | true
    }

  export interface ProjectEscrowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectEscrow'], meta: { name: 'ProjectEscrow' } }
    /**
     * Find zero or one ProjectEscrow that matches the filter.
     * @param {ProjectEscrowFindUniqueArgs} args - Arguments to find a ProjectEscrow
     * @example
     * // Get one ProjectEscrow
     * const projectEscrow = await prisma.projectEscrow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectEscrowFindUniqueArgs>(args: SelectSubset<T, ProjectEscrowFindUniqueArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectEscrow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectEscrowFindUniqueOrThrowArgs} args - Arguments to find a ProjectEscrow
     * @example
     * // Get one ProjectEscrow
     * const projectEscrow = await prisma.projectEscrow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectEscrowFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectEscrowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEscrow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEscrowFindFirstArgs} args - Arguments to find a ProjectEscrow
     * @example
     * // Get one ProjectEscrow
     * const projectEscrow = await prisma.projectEscrow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectEscrowFindFirstArgs>(args?: SelectSubset<T, ProjectEscrowFindFirstArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEscrow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEscrowFindFirstOrThrowArgs} args - Arguments to find a ProjectEscrow
     * @example
     * // Get one ProjectEscrow
     * const projectEscrow = await prisma.projectEscrow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectEscrowFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectEscrowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectEscrows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEscrowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectEscrows
     * const projectEscrows = await prisma.projectEscrow.findMany()
     * 
     * // Get first 10 ProjectEscrows
     * const projectEscrows = await prisma.projectEscrow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectEscrowWithIdOnly = await prisma.projectEscrow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectEscrowFindManyArgs>(args?: SelectSubset<T, ProjectEscrowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectEscrow.
     * @param {ProjectEscrowCreateArgs} args - Arguments to create a ProjectEscrow.
     * @example
     * // Create one ProjectEscrow
     * const ProjectEscrow = await prisma.projectEscrow.create({
     *   data: {
     *     // ... data to create a ProjectEscrow
     *   }
     * })
     * 
     */
    create<T extends ProjectEscrowCreateArgs>(args: SelectSubset<T, ProjectEscrowCreateArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectEscrows.
     * @param {ProjectEscrowCreateManyArgs} args - Arguments to create many ProjectEscrows.
     * @example
     * // Create many ProjectEscrows
     * const projectEscrow = await prisma.projectEscrow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectEscrowCreateManyArgs>(args?: SelectSubset<T, ProjectEscrowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectEscrows and returns the data saved in the database.
     * @param {ProjectEscrowCreateManyAndReturnArgs} args - Arguments to create many ProjectEscrows.
     * @example
     * // Create many ProjectEscrows
     * const projectEscrow = await prisma.projectEscrow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectEscrows and only return the `id`
     * const projectEscrowWithIdOnly = await prisma.projectEscrow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectEscrowCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectEscrowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectEscrow.
     * @param {ProjectEscrowDeleteArgs} args - Arguments to delete one ProjectEscrow.
     * @example
     * // Delete one ProjectEscrow
     * const ProjectEscrow = await prisma.projectEscrow.delete({
     *   where: {
     *     // ... filter to delete one ProjectEscrow
     *   }
     * })
     * 
     */
    delete<T extends ProjectEscrowDeleteArgs>(args: SelectSubset<T, ProjectEscrowDeleteArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectEscrow.
     * @param {ProjectEscrowUpdateArgs} args - Arguments to update one ProjectEscrow.
     * @example
     * // Update one ProjectEscrow
     * const projectEscrow = await prisma.projectEscrow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectEscrowUpdateArgs>(args: SelectSubset<T, ProjectEscrowUpdateArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectEscrows.
     * @param {ProjectEscrowDeleteManyArgs} args - Arguments to filter ProjectEscrows to delete.
     * @example
     * // Delete a few ProjectEscrows
     * const { count } = await prisma.projectEscrow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectEscrowDeleteManyArgs>(args?: SelectSubset<T, ProjectEscrowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEscrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEscrowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectEscrows
     * const projectEscrow = await prisma.projectEscrow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectEscrowUpdateManyArgs>(args: SelectSubset<T, ProjectEscrowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEscrows and returns the data updated in the database.
     * @param {ProjectEscrowUpdateManyAndReturnArgs} args - Arguments to update many ProjectEscrows.
     * @example
     * // Update many ProjectEscrows
     * const projectEscrow = await prisma.projectEscrow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectEscrows and only return the `id`
     * const projectEscrowWithIdOnly = await prisma.projectEscrow.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectEscrowUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectEscrowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectEscrow.
     * @param {ProjectEscrowUpsertArgs} args - Arguments to update or create a ProjectEscrow.
     * @example
     * // Update or create a ProjectEscrow
     * const projectEscrow = await prisma.projectEscrow.upsert({
     *   create: {
     *     // ... data to create a ProjectEscrow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectEscrow we want to update
     *   }
     * })
     */
    upsert<T extends ProjectEscrowUpsertArgs>(args: SelectSubset<T, ProjectEscrowUpsertArgs<ExtArgs>>): Prisma__ProjectEscrowClient<$Result.GetResult<Prisma.$ProjectEscrowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectEscrows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEscrowCountArgs} args - Arguments to filter ProjectEscrows to count.
     * @example
     * // Count the number of ProjectEscrows
     * const count = await prisma.projectEscrow.count({
     *   where: {
     *     // ... the filter for the ProjectEscrows we want to count
     *   }
     * })
    **/
    count<T extends ProjectEscrowCountArgs>(
      args?: Subset<T, ProjectEscrowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectEscrowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectEscrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEscrowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectEscrowAggregateArgs>(args: Subset<T, ProjectEscrowAggregateArgs>): Prisma.PrismaPromise<GetProjectEscrowAggregateType<T>>

    /**
     * Group by ProjectEscrow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEscrowGroupByArgs} args - Group by arguments.
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
      T extends ProjectEscrowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectEscrowGroupByArgs['orderBy'] }
        : { orderBy?: ProjectEscrowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectEscrowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectEscrowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectEscrow model
   */
  readonly fields: ProjectEscrowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectEscrow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectEscrowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectEscrow model
   */
  interface ProjectEscrowFieldRefs {
    readonly id: FieldRef<"ProjectEscrow", 'String'>
    readonly projectId: FieldRef<"ProjectEscrow", 'String'>
    readonly brandId: FieldRef<"ProjectEscrow", 'String'>
    readonly creatorId: FieldRef<"ProjectEscrow", 'String'>
    readonly amount: FieldRef<"ProjectEscrow", 'Int'>
    readonly status: FieldRef<"ProjectEscrow", 'EscrowStatus'>
    readonly holdPlacedAt: FieldRef<"ProjectEscrow", 'DateTime'>
    readonly autoReleaseAt: FieldRef<"ProjectEscrow", 'DateTime'>
    readonly releasedAt: FieldRef<"ProjectEscrow", 'DateTime'>
    readonly releaseReason: FieldRef<"ProjectEscrow", 'EscrowReleaseReason'>
  }
    

  // Custom InputTypes
  /**
   * ProjectEscrow findUnique
   */
  export type ProjectEscrowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEscrow to fetch.
     */
    where: ProjectEscrowWhereUniqueInput
  }

  /**
   * ProjectEscrow findUniqueOrThrow
   */
  export type ProjectEscrowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEscrow to fetch.
     */
    where: ProjectEscrowWhereUniqueInput
  }

  /**
   * ProjectEscrow findFirst
   */
  export type ProjectEscrowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEscrow to fetch.
     */
    where?: ProjectEscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEscrows to fetch.
     */
    orderBy?: ProjectEscrowOrderByWithRelationInput | ProjectEscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEscrows.
     */
    cursor?: ProjectEscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEscrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEscrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEscrows.
     */
    distinct?: ProjectEscrowScalarFieldEnum | ProjectEscrowScalarFieldEnum[]
  }

  /**
   * ProjectEscrow findFirstOrThrow
   */
  export type ProjectEscrowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEscrow to fetch.
     */
    where?: ProjectEscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEscrows to fetch.
     */
    orderBy?: ProjectEscrowOrderByWithRelationInput | ProjectEscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEscrows.
     */
    cursor?: ProjectEscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEscrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEscrows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEscrows.
     */
    distinct?: ProjectEscrowScalarFieldEnum | ProjectEscrowScalarFieldEnum[]
  }

  /**
   * ProjectEscrow findMany
   */
  export type ProjectEscrowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEscrows to fetch.
     */
    where?: ProjectEscrowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEscrows to fetch.
     */
    orderBy?: ProjectEscrowOrderByWithRelationInput | ProjectEscrowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectEscrows.
     */
    cursor?: ProjectEscrowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEscrows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEscrows.
     */
    skip?: number
    distinct?: ProjectEscrowScalarFieldEnum | ProjectEscrowScalarFieldEnum[]
  }

  /**
   * ProjectEscrow create
   */
  export type ProjectEscrowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectEscrow.
     */
    data: XOR<ProjectEscrowCreateInput, ProjectEscrowUncheckedCreateInput>
  }

  /**
   * ProjectEscrow createMany
   */
  export type ProjectEscrowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectEscrows.
     */
    data: ProjectEscrowCreateManyInput | ProjectEscrowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectEscrow createManyAndReturn
   */
  export type ProjectEscrowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectEscrows.
     */
    data: ProjectEscrowCreateManyInput | ProjectEscrowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEscrow update
   */
  export type ProjectEscrowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectEscrow.
     */
    data: XOR<ProjectEscrowUpdateInput, ProjectEscrowUncheckedUpdateInput>
    /**
     * Choose, which ProjectEscrow to update.
     */
    where: ProjectEscrowWhereUniqueInput
  }

  /**
   * ProjectEscrow updateMany
   */
  export type ProjectEscrowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectEscrows.
     */
    data: XOR<ProjectEscrowUpdateManyMutationInput, ProjectEscrowUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEscrows to update
     */
    where?: ProjectEscrowWhereInput
    /**
     * Limit how many ProjectEscrows to update.
     */
    limit?: number
  }

  /**
   * ProjectEscrow updateManyAndReturn
   */
  export type ProjectEscrowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * The data used to update ProjectEscrows.
     */
    data: XOR<ProjectEscrowUpdateManyMutationInput, ProjectEscrowUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEscrows to update
     */
    where?: ProjectEscrowWhereInput
    /**
     * Limit how many ProjectEscrows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEscrow upsert
   */
  export type ProjectEscrowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectEscrow to update in case it exists.
     */
    where: ProjectEscrowWhereUniqueInput
    /**
     * In case the ProjectEscrow found by the `where` argument doesn't exist, create a new ProjectEscrow with this data.
     */
    create: XOR<ProjectEscrowCreateInput, ProjectEscrowUncheckedCreateInput>
    /**
     * In case the ProjectEscrow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectEscrowUpdateInput, ProjectEscrowUncheckedUpdateInput>
  }

  /**
   * ProjectEscrow delete
   */
  export type ProjectEscrowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
    /**
     * Filter which ProjectEscrow to delete.
     */
    where: ProjectEscrowWhereUniqueInput
  }

  /**
   * ProjectEscrow deleteMany
   */
  export type ProjectEscrowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEscrows to delete
     */
    where?: ProjectEscrowWhereInput
    /**
     * Limit how many ProjectEscrows to delete.
     */
    limit?: number
  }

  /**
   * ProjectEscrow without action
   */
  export type ProjectEscrowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEscrow
     */
    select?: ProjectEscrowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEscrow
     */
    omit?: ProjectEscrowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEscrowInclude<ExtArgs> | null
  }


  /**
   * Model ProjectEvent
   */

  export type AggregateProjectEvent = {
    _count: ProjectEventCountAggregateOutputType | null
    _min: ProjectEventMinAggregateOutputType | null
    _max: ProjectEventMaxAggregateOutputType | null
  }

  export type ProjectEventMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    actorId: string | null
    type: $Enums.ProjectEventType | null
    note: string | null
    createdAt: Date | null
  }

  export type ProjectEventMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    actorId: string | null
    type: $Enums.ProjectEventType | null
    note: string | null
    createdAt: Date | null
  }

  export type ProjectEventCountAggregateOutputType = {
    id: number
    projectId: number
    actorId: number
    type: number
    note: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ProjectEventMinAggregateInputType = {
    id?: true
    projectId?: true
    actorId?: true
    type?: true
    note?: true
    createdAt?: true
  }

  export type ProjectEventMaxAggregateInputType = {
    id?: true
    projectId?: true
    actorId?: true
    type?: true
    note?: true
    createdAt?: true
  }

  export type ProjectEventCountAggregateInputType = {
    id?: true
    projectId?: true
    actorId?: true
    type?: true
    note?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEvent to aggregate.
     */
    where?: ProjectEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEvents to fetch.
     */
    orderBy?: ProjectEventOrderByWithRelationInput | ProjectEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectEvents
    **/
    _count?: true | ProjectEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectEventMaxAggregateInputType
  }

  export type GetProjectEventAggregateType<T extends ProjectEventAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectEvent[P]>
      : GetScalarType<T[P], AggregateProjectEvent[P]>
  }




  export type ProjectEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectEventWhereInput
    orderBy?: ProjectEventOrderByWithAggregationInput | ProjectEventOrderByWithAggregationInput[]
    by: ProjectEventScalarFieldEnum[] | ProjectEventScalarFieldEnum
    having?: ProjectEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectEventCountAggregateInputType | true
    _min?: ProjectEventMinAggregateInputType
    _max?: ProjectEventMaxAggregateInputType
  }

  export type ProjectEventGroupByOutputType = {
    id: string
    projectId: string
    actorId: string | null
    type: $Enums.ProjectEventType
    note: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ProjectEventCountAggregateOutputType | null
    _min: ProjectEventMinAggregateOutputType | null
    _max: ProjectEventMaxAggregateOutputType | null
  }

  type GetProjectEventGroupByPayload<T extends ProjectEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectEventGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectEventGroupByOutputType[P]>
        }
      >
    >


  export type ProjectEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    actorId?: boolean
    type?: boolean
    note?: boolean
    metadata?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    actor?: boolean | ProjectEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["projectEvent"]>

  export type ProjectEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    actorId?: boolean
    type?: boolean
    note?: boolean
    metadata?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    actor?: boolean | ProjectEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["projectEvent"]>

  export type ProjectEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    actorId?: boolean
    type?: boolean
    note?: boolean
    metadata?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    actor?: boolean | ProjectEvent$actorArgs<ExtArgs>
  }, ExtArgs["result"]["projectEvent"]>

  export type ProjectEventSelectScalar = {
    id?: boolean
    projectId?: boolean
    actorId?: boolean
    type?: boolean
    note?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ProjectEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "actorId" | "type" | "note" | "metadata" | "createdAt", ExtArgs["result"]["projectEvent"]>
  export type ProjectEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    actor?: boolean | ProjectEvent$actorArgs<ExtArgs>
  }
  export type ProjectEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    actor?: boolean | ProjectEvent$actorArgs<ExtArgs>
  }
  export type ProjectEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    actor?: boolean | ProjectEvent$actorArgs<ExtArgs>
  }

  export type $ProjectEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectEvent"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      actorId: string | null
      type: $Enums.ProjectEventType
      note: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["projectEvent"]>
    composites: {}
  }

  type ProjectEventGetPayload<S extends boolean | null | undefined | ProjectEventDefaultArgs> = $Result.GetResult<Prisma.$ProjectEventPayload, S>

  type ProjectEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectEventCountAggregateInputType | true
    }

  export interface ProjectEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectEvent'], meta: { name: 'ProjectEvent' } }
    /**
     * Find zero or one ProjectEvent that matches the filter.
     * @param {ProjectEventFindUniqueArgs} args - Arguments to find a ProjectEvent
     * @example
     * // Get one ProjectEvent
     * const projectEvent = await prisma.projectEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectEventFindUniqueArgs>(args: SelectSubset<T, ProjectEventFindUniqueArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectEventFindUniqueOrThrowArgs} args - Arguments to find a ProjectEvent
     * @example
     * // Get one ProjectEvent
     * const projectEvent = await prisma.projectEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEventFindFirstArgs} args - Arguments to find a ProjectEvent
     * @example
     * // Get one ProjectEvent
     * const projectEvent = await prisma.projectEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectEventFindFirstArgs>(args?: SelectSubset<T, ProjectEventFindFirstArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEventFindFirstOrThrowArgs} args - Arguments to find a ProjectEvent
     * @example
     * // Get one ProjectEvent
     * const projectEvent = await prisma.projectEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectEvents
     * const projectEvents = await prisma.projectEvent.findMany()
     * 
     * // Get first 10 ProjectEvents
     * const projectEvents = await prisma.projectEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectEventWithIdOnly = await prisma.projectEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectEventFindManyArgs>(args?: SelectSubset<T, ProjectEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectEvent.
     * @param {ProjectEventCreateArgs} args - Arguments to create a ProjectEvent.
     * @example
     * // Create one ProjectEvent
     * const ProjectEvent = await prisma.projectEvent.create({
     *   data: {
     *     // ... data to create a ProjectEvent
     *   }
     * })
     * 
     */
    create<T extends ProjectEventCreateArgs>(args: SelectSubset<T, ProjectEventCreateArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectEvents.
     * @param {ProjectEventCreateManyArgs} args - Arguments to create many ProjectEvents.
     * @example
     * // Create many ProjectEvents
     * const projectEvent = await prisma.projectEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectEventCreateManyArgs>(args?: SelectSubset<T, ProjectEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectEvents and returns the data saved in the database.
     * @param {ProjectEventCreateManyAndReturnArgs} args - Arguments to create many ProjectEvents.
     * @example
     * // Create many ProjectEvents
     * const projectEvent = await prisma.projectEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectEvents and only return the `id`
     * const projectEventWithIdOnly = await prisma.projectEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectEvent.
     * @param {ProjectEventDeleteArgs} args - Arguments to delete one ProjectEvent.
     * @example
     * // Delete one ProjectEvent
     * const ProjectEvent = await prisma.projectEvent.delete({
     *   where: {
     *     // ... filter to delete one ProjectEvent
     *   }
     * })
     * 
     */
    delete<T extends ProjectEventDeleteArgs>(args: SelectSubset<T, ProjectEventDeleteArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectEvent.
     * @param {ProjectEventUpdateArgs} args - Arguments to update one ProjectEvent.
     * @example
     * // Update one ProjectEvent
     * const projectEvent = await prisma.projectEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectEventUpdateArgs>(args: SelectSubset<T, ProjectEventUpdateArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectEvents.
     * @param {ProjectEventDeleteManyArgs} args - Arguments to filter ProjectEvents to delete.
     * @example
     * // Delete a few ProjectEvents
     * const { count } = await prisma.projectEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectEventDeleteManyArgs>(args?: SelectSubset<T, ProjectEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectEvents
     * const projectEvent = await prisma.projectEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectEventUpdateManyArgs>(args: SelectSubset<T, ProjectEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectEvents and returns the data updated in the database.
     * @param {ProjectEventUpdateManyAndReturnArgs} args - Arguments to update many ProjectEvents.
     * @example
     * // Update many ProjectEvents
     * const projectEvent = await prisma.projectEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectEvents and only return the `id`
     * const projectEventWithIdOnly = await prisma.projectEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjectEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectEvent.
     * @param {ProjectEventUpsertArgs} args - Arguments to update or create a ProjectEvent.
     * @example
     * // Update or create a ProjectEvent
     * const projectEvent = await prisma.projectEvent.upsert({
     *   create: {
     *     // ... data to create a ProjectEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectEvent we want to update
     *   }
     * })
     */
    upsert<T extends ProjectEventUpsertArgs>(args: SelectSubset<T, ProjectEventUpsertArgs<ExtArgs>>): Prisma__ProjectEventClient<$Result.GetResult<Prisma.$ProjectEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEventCountArgs} args - Arguments to filter ProjectEvents to count.
     * @example
     * // Count the number of ProjectEvents
     * const count = await prisma.projectEvent.count({
     *   where: {
     *     // ... the filter for the ProjectEvents we want to count
     *   }
     * })
    **/
    count<T extends ProjectEventCountArgs>(
      args?: Subset<T, ProjectEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectEventAggregateArgs>(args: Subset<T, ProjectEventAggregateArgs>): Prisma.PrismaPromise<GetProjectEventAggregateType<T>>

    /**
     * Group by ProjectEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectEventGroupByArgs} args - Group by arguments.
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
      T extends ProjectEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectEventGroupByArgs['orderBy'] }
        : { orderBy?: ProjectEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectEvent model
   */
  readonly fields: ProjectEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends ProjectEvent$actorArgs<ExtArgs> = {}>(args?: Subset<T, ProjectEvent$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProjectEvent model
   */
  interface ProjectEventFieldRefs {
    readonly id: FieldRef<"ProjectEvent", 'String'>
    readonly projectId: FieldRef<"ProjectEvent", 'String'>
    readonly actorId: FieldRef<"ProjectEvent", 'String'>
    readonly type: FieldRef<"ProjectEvent", 'ProjectEventType'>
    readonly note: FieldRef<"ProjectEvent", 'String'>
    readonly metadata: FieldRef<"ProjectEvent", 'Json'>
    readonly createdAt: FieldRef<"ProjectEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectEvent findUnique
   */
  export type ProjectEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEvent to fetch.
     */
    where: ProjectEventWhereUniqueInput
  }

  /**
   * ProjectEvent findUniqueOrThrow
   */
  export type ProjectEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEvent to fetch.
     */
    where: ProjectEventWhereUniqueInput
  }

  /**
   * ProjectEvent findFirst
   */
  export type ProjectEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEvent to fetch.
     */
    where?: ProjectEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEvents to fetch.
     */
    orderBy?: ProjectEventOrderByWithRelationInput | ProjectEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEvents.
     */
    cursor?: ProjectEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEvents.
     */
    distinct?: ProjectEventScalarFieldEnum | ProjectEventScalarFieldEnum[]
  }

  /**
   * ProjectEvent findFirstOrThrow
   */
  export type ProjectEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEvent to fetch.
     */
    where?: ProjectEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEvents to fetch.
     */
    orderBy?: ProjectEventOrderByWithRelationInput | ProjectEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectEvents.
     */
    cursor?: ProjectEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectEvents.
     */
    distinct?: ProjectEventScalarFieldEnum | ProjectEventScalarFieldEnum[]
  }

  /**
   * ProjectEvent findMany
   */
  export type ProjectEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * Filter, which ProjectEvents to fetch.
     */
    where?: ProjectEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectEvents to fetch.
     */
    orderBy?: ProjectEventOrderByWithRelationInput | ProjectEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectEvents.
     */
    cursor?: ProjectEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectEvents.
     */
    skip?: number
    distinct?: ProjectEventScalarFieldEnum | ProjectEventScalarFieldEnum[]
  }

  /**
   * ProjectEvent create
   */
  export type ProjectEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectEvent.
     */
    data: XOR<ProjectEventCreateInput, ProjectEventUncheckedCreateInput>
  }

  /**
   * ProjectEvent createMany
   */
  export type ProjectEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectEvents.
     */
    data: ProjectEventCreateManyInput | ProjectEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectEvent createManyAndReturn
   */
  export type ProjectEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectEvents.
     */
    data: ProjectEventCreateManyInput | ProjectEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEvent update
   */
  export type ProjectEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectEvent.
     */
    data: XOR<ProjectEventUpdateInput, ProjectEventUncheckedUpdateInput>
    /**
     * Choose, which ProjectEvent to update.
     */
    where: ProjectEventWhereUniqueInput
  }

  /**
   * ProjectEvent updateMany
   */
  export type ProjectEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectEvents.
     */
    data: XOR<ProjectEventUpdateManyMutationInput, ProjectEventUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEvents to update
     */
    where?: ProjectEventWhereInput
    /**
     * Limit how many ProjectEvents to update.
     */
    limit?: number
  }

  /**
   * ProjectEvent updateManyAndReturn
   */
  export type ProjectEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * The data used to update ProjectEvents.
     */
    data: XOR<ProjectEventUpdateManyMutationInput, ProjectEventUncheckedUpdateManyInput>
    /**
     * Filter which ProjectEvents to update
     */
    where?: ProjectEventWhereInput
    /**
     * Limit how many ProjectEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectEvent upsert
   */
  export type ProjectEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectEvent to update in case it exists.
     */
    where: ProjectEventWhereUniqueInput
    /**
     * In case the ProjectEvent found by the `where` argument doesn't exist, create a new ProjectEvent with this data.
     */
    create: XOR<ProjectEventCreateInput, ProjectEventUncheckedCreateInput>
    /**
     * In case the ProjectEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectEventUpdateInput, ProjectEventUncheckedUpdateInput>
  }

  /**
   * ProjectEvent delete
   */
  export type ProjectEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
    /**
     * Filter which ProjectEvent to delete.
     */
    where: ProjectEventWhereUniqueInput
  }

  /**
   * ProjectEvent deleteMany
   */
  export type ProjectEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectEvents to delete
     */
    where?: ProjectEventWhereInput
    /**
     * Limit how many ProjectEvents to delete.
     */
    limit?: number
  }

  /**
   * ProjectEvent.actor
   */
  export type ProjectEvent$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * ProjectEvent without action
   */
  export type ProjectEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectEvent
     */
    select?: ProjectEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectEvent
     */
    omit?: ProjectEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectEventInclude<ExtArgs> | null
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


  export const AuthUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthUserScalarFieldEnum = (typeof AuthUserScalarFieldEnum)[keyof typeof AuthUserScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const AuthAccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthAccountScalarFieldEnum = (typeof AuthAccountScalarFieldEnum)[keyof typeof AuthAccountScalarFieldEnum]


  export const AuthVerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AuthVerificationScalarFieldEnum = (typeof AuthVerificationScalarFieldEnum)[keyof typeof AuthVerificationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    authUserId: 'authUserId',
    email: 'email',
    displayName: 'displayName',
    bio: 'bio',
    logoUrl: 'logoUrl',
    instagramUrl: 'instagramUrl',
    youtubeUrl: 'youtubeUrl',
    tiktokUrl: 'tiktokUrl',
    twitterUrl: 'twitterUrl',
    snapchatUrl: 'snapchatUrl',
    role: 'role',
    credits: 'credits',
    earnings: 'earnings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BriefScalarFieldEnum: {
    id: 'id',
    title: 'title',
    productDescription: 'productDescription',
    reelScript: 'reelScript',
    targetPlatforms: 'targetPlatforms',
    productUrl: 'productUrl',
    minBidAmount: 'minBidAmount',
    maxBidAmount: 'maxBidAmount',
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
    bidId: 'bidId',
    briefId: 'briefId',
    brandId: 'brandId',
    creatorId: 'creatorId',
    agreedAmount: 'agreedAmount',
    status: 'status',
    creatorSubmittedAt: 'creatorSubmittedAt',
    creatorSubmissionNote: 'creatorSubmissionNote',
    brandApprovedAt: 'brandApprovedAt',
    approvedById: 'approvedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectDeliverableScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    platform: 'platform',
    url: 'url',
    notes: 'notes',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectDeliverableScalarFieldEnum = (typeof ProjectDeliverableScalarFieldEnum)[keyof typeof ProjectDeliverableScalarFieldEnum]


  export const ProjectMessageScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    senderId: 'senderId',
    body: 'body',
    createdAt: 'createdAt'
  };

  export type ProjectMessageScalarFieldEnum = (typeof ProjectMessageScalarFieldEnum)[keyof typeof ProjectMessageScalarFieldEnum]


  export const ProjectEscrowScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    brandId: 'brandId',
    creatorId: 'creatorId',
    amount: 'amount',
    status: 'status',
    holdPlacedAt: 'holdPlacedAt',
    autoReleaseAt: 'autoReleaseAt',
    releasedAt: 'releasedAt',
    releaseReason: 'releaseReason'
  };

  export type ProjectEscrowScalarFieldEnum = (typeof ProjectEscrowScalarFieldEnum)[keyof typeof ProjectEscrowScalarFieldEnum]


  export const ProjectEventScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    actorId: 'actorId',
    type: 'type',
    note: 'note',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ProjectEventScalarFieldEnum = (typeof ProjectEventScalarFieldEnum)[keyof typeof ProjectEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'EscrowStatus'
   */
  export type EnumEscrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowStatus'>
    


  /**
   * Reference to a field of type 'EscrowStatus[]'
   */
  export type ListEnumEscrowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowStatus[]'>
    


  /**
   * Reference to a field of type 'EscrowReleaseReason'
   */
  export type EnumEscrowReleaseReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowReleaseReason'>
    


  /**
   * Reference to a field of type 'EscrowReleaseReason[]'
   */
  export type ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EscrowReleaseReason[]'>
    


  /**
   * Reference to a field of type 'ProjectEventType'
   */
  export type EnumProjectEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectEventType'>
    


  /**
   * Reference to a field of type 'ProjectEventType[]'
   */
  export type ListEnumProjectEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectEventType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type AuthUserWhereInput = {
    AND?: AuthUserWhereInput | AuthUserWhereInput[]
    OR?: AuthUserWhereInput[]
    NOT?: AuthUserWhereInput | AuthUserWhereInput[]
    id?: StringFilter<"AuthUser"> | string
    name?: StringFilter<"AuthUser"> | string
    email?: StringFilter<"AuthUser"> | string
    emailVerified?: BoolFilter<"AuthUser"> | boolean
    image?: StringNullableFilter<"AuthUser"> | string | null
    createdAt?: DateTimeFilter<"AuthUser"> | Date | string
    updatedAt?: DateTimeFilter<"AuthUser"> | Date | string
    accounts?: AuthAccountListRelationFilter
    sessions?: AuthSessionListRelationFilter
  }

  export type AuthUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AuthAccountOrderByRelationAggregateInput
    sessions?: AuthSessionOrderByRelationAggregateInput
  }

  export type AuthUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AuthUserWhereInput | AuthUserWhereInput[]
    OR?: AuthUserWhereInput[]
    NOT?: AuthUserWhereInput | AuthUserWhereInput[]
    name?: StringFilter<"AuthUser"> | string
    emailVerified?: BoolFilter<"AuthUser"> | boolean
    image?: StringNullableFilter<"AuthUser"> | string | null
    createdAt?: DateTimeFilter<"AuthUser"> | Date | string
    updatedAt?: DateTimeFilter<"AuthUser"> | Date | string
    accounts?: AuthAccountListRelationFilter
    sessions?: AuthSessionListRelationFilter
  }, "id" | "email">

  export type AuthUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthUserCountOrderByAggregateInput
    _max?: AuthUserMaxOrderByAggregateInput
    _min?: AuthUserMinOrderByAggregateInput
  }

  export type AuthUserScalarWhereWithAggregatesInput = {
    AND?: AuthUserScalarWhereWithAggregatesInput | AuthUserScalarWhereWithAggregatesInput[]
    OR?: AuthUserScalarWhereWithAggregatesInput[]
    NOT?: AuthUserScalarWhereWithAggregatesInput | AuthUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthUser"> | string
    name?: StringWithAggregatesFilter<"AuthUser"> | string
    email?: StringWithAggregatesFilter<"AuthUser"> | string
    emailVerified?: BoolWithAggregatesFilter<"AuthUser"> | boolean
    image?: StringNullableWithAggregatesFilter<"AuthUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthUser"> | Date | string
  }

  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    token?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    userId?: StringFilter<"AuthSession"> | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: AuthUserOrderByWithRelationInput
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    userId?: StringFilter<"AuthSession"> | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }, "id" | "token">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    token?: StringWithAggregatesFilter<"AuthSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"AuthSession"> | string | null
    userId?: StringWithAggregatesFilter<"AuthSession"> | string
  }

  export type AuthAccountWhereInput = {
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    id?: StringFilter<"AuthAccount"> | string
    accountId?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: StringFilter<"AuthAccount"> | string
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    idToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableFilter<"AuthAccount"> | string | null
    password?: StringNullableFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }

  export type AuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: AuthUserOrderByWithRelationInput
  }

  export type AuthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_accountId?: AuthAccountProviderIdAccountIdCompoundUniqueInput
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    accountId?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: StringFilter<"AuthAccount"> | string
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    idToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableFilter<"AuthAccount"> | string | null
    password?: StringNullableFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
    user?: XOR<AuthUserScalarRelationFilter, AuthUserWhereInput>
  }, "id" | "providerId_accountId">

  export type AuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AuthAccountCountOrderByAggregateInput
    _max?: AuthAccountMaxOrderByAggregateInput
    _min?: AuthAccountMinOrderByAggregateInput
  }

  export type AuthAccountScalarWhereWithAggregatesInput = {
    AND?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    OR?: AuthAccountScalarWhereWithAggregatesInput[]
    NOT?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthAccount"> | string
    accountId?: StringWithAggregatesFilter<"AuthAccount"> | string
    providerId?: StringWithAggregatesFilter<"AuthAccount"> | string
    userId?: StringWithAggregatesFilter<"AuthAccount"> | string
    accessToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    password?: StringNullableWithAggregatesFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AuthAccount"> | Date | string
  }

  export type AuthVerificationWhereInput = {
    AND?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    OR?: AuthVerificationWhereInput[]
    NOT?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    id?: StringFilter<"AuthVerification"> | string
    identifier?: StringFilter<"AuthVerification"> | string
    value?: StringFilter<"AuthVerification"> | string
    expiresAt?: DateTimeFilter<"AuthVerification"> | Date | string
    createdAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
  }

  export type AuthVerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type AuthVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    OR?: AuthVerificationWhereInput[]
    NOT?: AuthVerificationWhereInput | AuthVerificationWhereInput[]
    identifier?: StringFilter<"AuthVerification"> | string
    value?: StringFilter<"AuthVerification"> | string
    expiresAt?: DateTimeFilter<"AuthVerification"> | Date | string
    createdAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"AuthVerification"> | Date | string | null
  }, "id">

  export type AuthVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AuthVerificationCountOrderByAggregateInput
    _max?: AuthVerificationMaxOrderByAggregateInput
    _min?: AuthVerificationMinOrderByAggregateInput
  }

  export type AuthVerificationScalarWhereWithAggregatesInput = {
    AND?: AuthVerificationScalarWhereWithAggregatesInput | AuthVerificationScalarWhereWithAggregatesInput[]
    OR?: AuthVerificationScalarWhereWithAggregatesInput[]
    NOT?: AuthVerificationScalarWhereWithAggregatesInput | AuthVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthVerification"> | string
    identifier?: StringWithAggregatesFilter<"AuthVerification"> | string
    value?: StringWithAggregatesFilter<"AuthVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AuthVerification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"AuthVerification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"AuthVerification"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    authUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    logoUrl?: StringNullableFilter<"User"> | string | null
    instagramUrl?: StringNullableFilter<"User"> | string | null
    youtubeUrl?: StringNullableFilter<"User"> | string | null
    tiktokUrl?: StringNullableFilter<"User"> | string | null
    twitterUrl?: StringNullableFilter<"User"> | string | null
    snapchatUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    credits?: IntFilter<"User"> | number
    earnings?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bidsAsCreator?: BidListRelationFilter
    briefsAsBrand?: BriefListRelationFilter
    projectsAsBrand?: ProjectListRelationFilter
    projectsAsCreator?: ProjectListRelationFilter
    projectsApproved?: ProjectListRelationFilter
    projectMessages?: ProjectMessageListRelationFilter
    projectEvents?: ProjectEventListRelationFilter
    brandEscrows?: ProjectEscrowListRelationFilter
    creatorEscrows?: ProjectEscrowListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    tiktokUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    snapchatUrl?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    credits?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bidsAsCreator?: BidOrderByRelationAggregateInput
    briefsAsBrand?: BriefOrderByRelationAggregateInput
    projectsAsBrand?: ProjectOrderByRelationAggregateInput
    projectsAsCreator?: ProjectOrderByRelationAggregateInput
    projectsApproved?: ProjectOrderByRelationAggregateInput
    projectMessages?: ProjectMessageOrderByRelationAggregateInput
    projectEvents?: ProjectEventOrderByRelationAggregateInput
    brandEscrows?: ProjectEscrowOrderByRelationAggregateInput
    creatorEscrows?: ProjectEscrowOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    authUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    logoUrl?: StringNullableFilter<"User"> | string | null
    instagramUrl?: StringNullableFilter<"User"> | string | null
    youtubeUrl?: StringNullableFilter<"User"> | string | null
    tiktokUrl?: StringNullableFilter<"User"> | string | null
    twitterUrl?: StringNullableFilter<"User"> | string | null
    snapchatUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    credits?: IntFilter<"User"> | number
    earnings?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bidsAsCreator?: BidListRelationFilter
    briefsAsBrand?: BriefListRelationFilter
    projectsAsBrand?: ProjectListRelationFilter
    projectsAsCreator?: ProjectListRelationFilter
    projectsApproved?: ProjectListRelationFilter
    projectMessages?: ProjectMessageListRelationFilter
    projectEvents?: ProjectEventListRelationFilter
    brandEscrows?: ProjectEscrowListRelationFilter
    creatorEscrows?: ProjectEscrowListRelationFilter
  }, "id" | "authUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    displayName?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    youtubeUrl?: SortOrderInput | SortOrder
    tiktokUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    snapchatUrl?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    credits?: SortOrder
    earnings?: SortOrder
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
    authUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagramUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    youtubeUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    tiktokUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    snapchatUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
    credits?: IntWithAggregatesFilter<"User"> | number
    earnings?: IntWithAggregatesFilter<"User"> | number
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
    reelScript?: StringFilter<"Brief"> | string
    targetPlatforms?: StringNullableListFilter<"Brief">
    productUrl?: StringFilter<"Brief"> | string
    minBidAmount?: IntFilter<"Brief"> | number
    maxBidAmount?: IntFilter<"Brief"> | number
    hook1?: StringFilter<"Brief"> | string
    hook2?: StringFilter<"Brief"> | string
    hook3?: StringFilter<"Brief"> | string
    status?: EnumBriefStatusFilter<"Brief"> | $Enums.BriefStatus
    brandId?: StringFilter<"Brief"> | string
    createdAt?: DateTimeFilter<"Brief"> | Date | string
    updatedAt?: DateTimeFilter<"Brief"> | Date | string
    bids?: BidListRelationFilter
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    projects?: ProjectListRelationFilter
  }

  export type BriefOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    reelScript?: SortOrder
    targetPlatforms?: SortOrder
    productUrl?: SortOrder
    minBidAmount?: SortOrder
    maxBidAmount?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bids?: BidOrderByRelationAggregateInput
    brand?: UserOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type BriefWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BriefWhereInput | BriefWhereInput[]
    OR?: BriefWhereInput[]
    NOT?: BriefWhereInput | BriefWhereInput[]
    title?: StringFilter<"Brief"> | string
    productDescription?: StringFilter<"Brief"> | string
    reelScript?: StringFilter<"Brief"> | string
    targetPlatforms?: StringNullableListFilter<"Brief">
    productUrl?: StringFilter<"Brief"> | string
    minBidAmount?: IntFilter<"Brief"> | number
    maxBidAmount?: IntFilter<"Brief"> | number
    hook1?: StringFilter<"Brief"> | string
    hook2?: StringFilter<"Brief"> | string
    hook3?: StringFilter<"Brief"> | string
    status?: EnumBriefStatusFilter<"Brief"> | $Enums.BriefStatus
    brandId?: StringFilter<"Brief"> | string
    createdAt?: DateTimeFilter<"Brief"> | Date | string
    updatedAt?: DateTimeFilter<"Brief"> | Date | string
    bids?: BidListRelationFilter
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    projects?: ProjectListRelationFilter
  }, "id">

  export type BriefOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    reelScript?: SortOrder
    targetPlatforms?: SortOrder
    productUrl?: SortOrder
    minBidAmount?: SortOrder
    maxBidAmount?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BriefCountOrderByAggregateInput
    _avg?: BriefAvgOrderByAggregateInput
    _max?: BriefMaxOrderByAggregateInput
    _min?: BriefMinOrderByAggregateInput
    _sum?: BriefSumOrderByAggregateInput
  }

  export type BriefScalarWhereWithAggregatesInput = {
    AND?: BriefScalarWhereWithAggregatesInput | BriefScalarWhereWithAggregatesInput[]
    OR?: BriefScalarWhereWithAggregatesInput[]
    NOT?: BriefScalarWhereWithAggregatesInput | BriefScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brief"> | string
    title?: StringWithAggregatesFilter<"Brief"> | string
    productDescription?: StringWithAggregatesFilter<"Brief"> | string
    reelScript?: StringWithAggregatesFilter<"Brief"> | string
    targetPlatforms?: StringNullableListFilter<"Brief">
    productUrl?: StringWithAggregatesFilter<"Brief"> | string
    minBidAmount?: IntWithAggregatesFilter<"Brief"> | number
    maxBidAmount?: IntWithAggregatesFilter<"Brief"> | number
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
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
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
    project?: ProjectOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    briefId_creatorId?: BidBriefIdCreatorIdCompoundUniqueInput
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
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
  }, "id" | "briefId_creatorId">

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
    bidId?: StringFilter<"Project"> | string
    briefId?: StringFilter<"Project"> | string
    brandId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    agreedAmount?: IntFilter<"Project"> | number
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    creatorSubmittedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    creatorSubmissionNote?: StringNullableFilter<"Project"> | string | null
    brandApprovedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    approvedById?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    bid?: XOR<BidScalarRelationFilter, BidWhereInput>
    brief?: XOR<BriefScalarRelationFilter, BriefWhereInput>
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deliverables?: ProjectDeliverableListRelationFilter
    messages?: ProjectMessageListRelationFilter
    escrow?: XOR<ProjectEscrowNullableScalarRelationFilter, ProjectEscrowWhereInput> | null
    events?: ProjectEventListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    bidId?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    agreedAmount?: SortOrder
    status?: SortOrder
    creatorSubmittedAt?: SortOrderInput | SortOrder
    creatorSubmissionNote?: SortOrderInput | SortOrder
    brandApprovedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bid?: BidOrderByWithRelationInput
    brief?: BriefOrderByWithRelationInput
    brand?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
    deliverables?: ProjectDeliverableOrderByRelationAggregateInput
    messages?: ProjectMessageOrderByRelationAggregateInput
    escrow?: ProjectEscrowOrderByWithRelationInput
    events?: ProjectEventOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bidId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    briefId?: StringFilter<"Project"> | string
    brandId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    agreedAmount?: IntFilter<"Project"> | number
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    creatorSubmittedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    creatorSubmissionNote?: StringNullableFilter<"Project"> | string | null
    brandApprovedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    approvedById?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    bid?: XOR<BidScalarRelationFilter, BidWhereInput>
    brief?: XOR<BriefScalarRelationFilter, BriefWhereInput>
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deliverables?: ProjectDeliverableListRelationFilter
    messages?: ProjectMessageListRelationFilter
    escrow?: XOR<ProjectEscrowNullableScalarRelationFilter, ProjectEscrowWhereInput> | null
    events?: ProjectEventListRelationFilter
  }, "id" | "bidId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    bidId?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    agreedAmount?: SortOrder
    status?: SortOrder
    creatorSubmittedAt?: SortOrderInput | SortOrder
    creatorSubmissionNote?: SortOrderInput | SortOrder
    brandApprovedAt?: SortOrderInput | SortOrder
    approvedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    bidId?: StringWithAggregatesFilter<"Project"> | string
    briefId?: StringWithAggregatesFilter<"Project"> | string
    brandId?: StringWithAggregatesFilter<"Project"> | string
    creatorId?: StringWithAggregatesFilter<"Project"> | string
    agreedAmount?: IntWithAggregatesFilter<"Project"> | number
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
    creatorSubmittedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    creatorSubmissionNote?: StringNullableWithAggregatesFilter<"Project"> | string | null
    brandApprovedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    approvedById?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ProjectDeliverableWhereInput = {
    AND?: ProjectDeliverableWhereInput | ProjectDeliverableWhereInput[]
    OR?: ProjectDeliverableWhereInput[]
    NOT?: ProjectDeliverableWhereInput | ProjectDeliverableWhereInput[]
    id?: StringFilter<"ProjectDeliverable"> | string
    projectId?: StringFilter<"ProjectDeliverable"> | string
    platform?: StringFilter<"ProjectDeliverable"> | string
    url?: StringFilter<"ProjectDeliverable"> | string
    notes?: StringNullableFilter<"ProjectDeliverable"> | string | null
    sortOrder?: IntFilter<"ProjectDeliverable"> | number
    createdAt?: DateTimeFilter<"ProjectDeliverable"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDeliverable"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectDeliverableOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    notes?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectDeliverableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectDeliverableWhereInput | ProjectDeliverableWhereInput[]
    OR?: ProjectDeliverableWhereInput[]
    NOT?: ProjectDeliverableWhereInput | ProjectDeliverableWhereInput[]
    projectId?: StringFilter<"ProjectDeliverable"> | string
    platform?: StringFilter<"ProjectDeliverable"> | string
    url?: StringFilter<"ProjectDeliverable"> | string
    notes?: StringNullableFilter<"ProjectDeliverable"> | string | null
    sortOrder?: IntFilter<"ProjectDeliverable"> | number
    createdAt?: DateTimeFilter<"ProjectDeliverable"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDeliverable"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ProjectDeliverableOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    notes?: SortOrderInput | SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectDeliverableCountOrderByAggregateInput
    _avg?: ProjectDeliverableAvgOrderByAggregateInput
    _max?: ProjectDeliverableMaxOrderByAggregateInput
    _min?: ProjectDeliverableMinOrderByAggregateInput
    _sum?: ProjectDeliverableSumOrderByAggregateInput
  }

  export type ProjectDeliverableScalarWhereWithAggregatesInput = {
    AND?: ProjectDeliverableScalarWhereWithAggregatesInput | ProjectDeliverableScalarWhereWithAggregatesInput[]
    OR?: ProjectDeliverableScalarWhereWithAggregatesInput[]
    NOT?: ProjectDeliverableScalarWhereWithAggregatesInput | ProjectDeliverableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectDeliverable"> | string
    projectId?: StringWithAggregatesFilter<"ProjectDeliverable"> | string
    platform?: StringWithAggregatesFilter<"ProjectDeliverable"> | string
    url?: StringWithAggregatesFilter<"ProjectDeliverable"> | string
    notes?: StringNullableWithAggregatesFilter<"ProjectDeliverable"> | string | null
    sortOrder?: IntWithAggregatesFilter<"ProjectDeliverable"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ProjectDeliverable"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectDeliverable"> | Date | string
  }

  export type ProjectMessageWhereInput = {
    AND?: ProjectMessageWhereInput | ProjectMessageWhereInput[]
    OR?: ProjectMessageWhereInput[]
    NOT?: ProjectMessageWhereInput | ProjectMessageWhereInput[]
    id?: StringFilter<"ProjectMessage"> | string
    projectId?: StringFilter<"ProjectMessage"> | string
    senderId?: StringFilter<"ProjectMessage"> | string
    body?: StringFilter<"ProjectMessage"> | string
    createdAt?: DateTimeFilter<"ProjectMessage"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectMessageOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type ProjectMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectMessageWhereInput | ProjectMessageWhereInput[]
    OR?: ProjectMessageWhereInput[]
    NOT?: ProjectMessageWhereInput | ProjectMessageWhereInput[]
    projectId?: StringFilter<"ProjectMessage"> | string
    senderId?: StringFilter<"ProjectMessage"> | string
    body?: StringFilter<"ProjectMessage"> | string
    createdAt?: DateTimeFilter<"ProjectMessage"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectMessageOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectMessageCountOrderByAggregateInput
    _max?: ProjectMessageMaxOrderByAggregateInput
    _min?: ProjectMessageMinOrderByAggregateInput
  }

  export type ProjectMessageScalarWhereWithAggregatesInput = {
    AND?: ProjectMessageScalarWhereWithAggregatesInput | ProjectMessageScalarWhereWithAggregatesInput[]
    OR?: ProjectMessageScalarWhereWithAggregatesInput[]
    NOT?: ProjectMessageScalarWhereWithAggregatesInput | ProjectMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMessage"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMessage"> | string
    senderId?: StringWithAggregatesFilter<"ProjectMessage"> | string
    body?: StringWithAggregatesFilter<"ProjectMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMessage"> | Date | string
  }

  export type ProjectEscrowWhereInput = {
    AND?: ProjectEscrowWhereInput | ProjectEscrowWhereInput[]
    OR?: ProjectEscrowWhereInput[]
    NOT?: ProjectEscrowWhereInput | ProjectEscrowWhereInput[]
    id?: StringFilter<"ProjectEscrow"> | string
    projectId?: StringFilter<"ProjectEscrow"> | string
    brandId?: StringFilter<"ProjectEscrow"> | string
    creatorId?: StringFilter<"ProjectEscrow"> | string
    amount?: IntFilter<"ProjectEscrow"> | number
    status?: EnumEscrowStatusFilter<"ProjectEscrow"> | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFilter<"ProjectEscrow"> | Date | string
    autoReleaseAt?: DateTimeNullableFilter<"ProjectEscrow"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"ProjectEscrow"> | Date | string | null
    releaseReason?: EnumEscrowReleaseReasonNullableFilter<"ProjectEscrow"> | $Enums.EscrowReleaseReason | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectEscrowOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    holdPlacedAt?: SortOrder
    autoReleaseAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    releaseReason?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    brand?: UserOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type ProjectEscrowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: ProjectEscrowWhereInput | ProjectEscrowWhereInput[]
    OR?: ProjectEscrowWhereInput[]
    NOT?: ProjectEscrowWhereInput | ProjectEscrowWhereInput[]
    brandId?: StringFilter<"ProjectEscrow"> | string
    creatorId?: StringFilter<"ProjectEscrow"> | string
    amount?: IntFilter<"ProjectEscrow"> | number
    status?: EnumEscrowStatusFilter<"ProjectEscrow"> | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFilter<"ProjectEscrow"> | Date | string
    autoReleaseAt?: DateTimeNullableFilter<"ProjectEscrow"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"ProjectEscrow"> | Date | string | null
    releaseReason?: EnumEscrowReleaseReasonNullableFilter<"ProjectEscrow"> | $Enums.EscrowReleaseReason | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    brand?: XOR<UserScalarRelationFilter, UserWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId">

  export type ProjectEscrowOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    holdPlacedAt?: SortOrder
    autoReleaseAt?: SortOrderInput | SortOrder
    releasedAt?: SortOrderInput | SortOrder
    releaseReason?: SortOrderInput | SortOrder
    _count?: ProjectEscrowCountOrderByAggregateInput
    _avg?: ProjectEscrowAvgOrderByAggregateInput
    _max?: ProjectEscrowMaxOrderByAggregateInput
    _min?: ProjectEscrowMinOrderByAggregateInput
    _sum?: ProjectEscrowSumOrderByAggregateInput
  }

  export type ProjectEscrowScalarWhereWithAggregatesInput = {
    AND?: ProjectEscrowScalarWhereWithAggregatesInput | ProjectEscrowScalarWhereWithAggregatesInput[]
    OR?: ProjectEscrowScalarWhereWithAggregatesInput[]
    NOT?: ProjectEscrowScalarWhereWithAggregatesInput | ProjectEscrowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectEscrow"> | string
    projectId?: StringWithAggregatesFilter<"ProjectEscrow"> | string
    brandId?: StringWithAggregatesFilter<"ProjectEscrow"> | string
    creatorId?: StringWithAggregatesFilter<"ProjectEscrow"> | string
    amount?: IntWithAggregatesFilter<"ProjectEscrow"> | number
    status?: EnumEscrowStatusWithAggregatesFilter<"ProjectEscrow"> | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeWithAggregatesFilter<"ProjectEscrow"> | Date | string
    autoReleaseAt?: DateTimeNullableWithAggregatesFilter<"ProjectEscrow"> | Date | string | null
    releasedAt?: DateTimeNullableWithAggregatesFilter<"ProjectEscrow"> | Date | string | null
    releaseReason?: EnumEscrowReleaseReasonNullableWithAggregatesFilter<"ProjectEscrow"> | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEventWhereInput = {
    AND?: ProjectEventWhereInput | ProjectEventWhereInput[]
    OR?: ProjectEventWhereInput[]
    NOT?: ProjectEventWhereInput | ProjectEventWhereInput[]
    id?: StringFilter<"ProjectEvent"> | string
    projectId?: StringFilter<"ProjectEvent"> | string
    actorId?: StringNullableFilter<"ProjectEvent"> | string | null
    type?: EnumProjectEventTypeFilter<"ProjectEvent"> | $Enums.ProjectEventType
    note?: StringNullableFilter<"ProjectEvent"> | string | null
    metadata?: JsonNullableFilter<"ProjectEvent">
    createdAt?: DateTimeFilter<"ProjectEvent"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProjectEventOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type ProjectEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectEventWhereInput | ProjectEventWhereInput[]
    OR?: ProjectEventWhereInput[]
    NOT?: ProjectEventWhereInput | ProjectEventWhereInput[]
    projectId?: StringFilter<"ProjectEvent"> | string
    actorId?: StringNullableFilter<"ProjectEvent"> | string | null
    type?: EnumProjectEventTypeFilter<"ProjectEvent"> | $Enums.ProjectEventType
    note?: StringNullableFilter<"ProjectEvent"> | string | null
    metadata?: JsonNullableFilter<"ProjectEvent">
    createdAt?: DateTimeFilter<"ProjectEvent"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectEventOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    actorId?: SortOrderInput | SortOrder
    type?: SortOrder
    note?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProjectEventCountOrderByAggregateInput
    _max?: ProjectEventMaxOrderByAggregateInput
    _min?: ProjectEventMinOrderByAggregateInput
  }

  export type ProjectEventScalarWhereWithAggregatesInput = {
    AND?: ProjectEventScalarWhereWithAggregatesInput | ProjectEventScalarWhereWithAggregatesInput[]
    OR?: ProjectEventScalarWhereWithAggregatesInput[]
    NOT?: ProjectEventScalarWhereWithAggregatesInput | ProjectEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectEvent"> | string
    projectId?: StringWithAggregatesFilter<"ProjectEvent"> | string
    actorId?: StringNullableWithAggregatesFilter<"ProjectEvent"> | string | null
    type?: EnumProjectEventTypeWithAggregatesFilter<"ProjectEvent"> | $Enums.ProjectEventType
    note?: StringNullableWithAggregatesFilter<"ProjectEvent"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"ProjectEvent">
    createdAt?: DateTimeWithAggregatesFilter<"ProjectEvent"> | Date | string
  }

  export type AuthUserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AuthAccountCreateNestedManyWithoutUserInput
    sessions?: AuthSessionCreateNestedManyWithoutUserInput
  }

  export type AuthUserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type AuthUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AuthAccountUpdateManyWithoutUserNestedInput
    sessions?: AuthSessionUpdateManyWithoutUserNestedInput
  }

  export type AuthUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthUserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: AuthUserCreateNestedOneWithoutSessionsInput
  }

  export type AuthSessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: AuthUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthSessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AuthAccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: AuthUserCreateNestedOneWithoutAccountsInput
  }

  export type AuthAccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AuthUserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AuthAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthVerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AuthVerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AuthVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthVerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AuthVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BriefCreateInput = {
    id?: string
    title: string
    productDescription: string
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutBriefInput
    brand: UserCreateNestedOneWithoutBriefsAsBrandInput
    projects?: ProjectCreateNestedManyWithoutBriefInput
  }

  export type BriefUncheckedCreateInput = {
    id?: string
    title: string
    productDescription: string
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutBriefNestedInput
    brand?: UserUpdateOneRequiredWithoutBriefsAsBrandNestedInput
    projects?: ProjectUpdateManyWithoutBriefNestedInput
  }

  export type BriefUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    project?: ProjectCreateNestedOneWithoutBidInput
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
    project?: ProjectUncheckedCreateNestedOneWithoutBidInput
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
    project?: ProjectUpdateOneWithoutBidNestedInput
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
    project?: ProjectUncheckedUpdateOneWithoutBidNestedInput
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
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDeliverableCreateInput = {
    id?: string
    platform: string
    url: string
    notes?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutDeliverablesInput
  }

  export type ProjectDeliverableUncheckedCreateInput = {
    id?: string
    projectId: string
    platform: string
    url: string
    notes?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDeliverableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDeliverablesNestedInput
  }

  export type ProjectDeliverableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDeliverableCreateManyInput = {
    id?: string
    projectId: string
    platform: string
    url: string
    notes?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDeliverableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDeliverableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMessageCreateInput = {
    id?: string
    body: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutProjectMessagesInput
  }

  export type ProjectMessageUncheckedCreateInput = {
    id?: string
    projectId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type ProjectMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutProjectMessagesNestedInput
  }

  export type ProjectMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMessageCreateManyInput = {
    id?: string
    projectId: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type ProjectMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEscrowCreateInput = {
    id?: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
    project: ProjectCreateNestedOneWithoutEscrowInput
    brand: UserCreateNestedOneWithoutBrandEscrowsInput
    creator: UserCreateNestedOneWithoutCreatorEscrowsInput
  }

  export type ProjectEscrowUncheckedCreateInput = {
    id?: string
    projectId: string
    brandId: string
    creatorId: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
    project?: ProjectUpdateOneRequiredWithoutEscrowNestedInput
    brand?: UserUpdateOneRequiredWithoutBrandEscrowsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatorEscrowsNestedInput
  }

  export type ProjectEscrowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowCreateManyInput = {
    id?: string
    projectId: string
    brandId: string
    creatorId: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEventCreateInput = {
    id?: string
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutEventsInput
    actor?: UserCreateNestedOneWithoutProjectEventsInput
  }

  export type ProjectEventUncheckedCreateInput = {
    id?: string
    projectId: string
    actorId?: string | null
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEventsNestedInput
    actor?: UserUpdateOneWithoutProjectEventsNestedInput
  }

  export type ProjectEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEventCreateManyInput = {
    id?: string
    projectId: string
    actorId?: string | null
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AuthAccountListRelationFilter = {
    every?: AuthAccountWhereInput
    some?: AuthAccountWhereInput
    none?: AuthAccountWhereInput
  }

  export type AuthSessionListRelationFilter = {
    every?: AuthSessionWhereInput
    some?: AuthSessionWhereInput
    none?: AuthSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AuthUserScalarRelationFilter = {
    is?: AuthUserWhereInput
    isNot?: AuthUserWhereInput
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AuthAccountProviderIdAccountIdCompoundUniqueInput = {
    providerId: string
    accountId: string
  }

  export type AuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AuthVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AuthVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
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

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type BriefListRelationFilter = {
    every?: BriefWhereInput
    some?: BriefWhereInput
    none?: BriefWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ProjectMessageListRelationFilter = {
    every?: ProjectMessageWhereInput
    some?: ProjectMessageWhereInput
    none?: ProjectMessageWhereInput
  }

  export type ProjectEventListRelationFilter = {
    every?: ProjectEventWhereInput
    some?: ProjectEventWhereInput
    none?: ProjectEventWhereInput
  }

  export type ProjectEscrowListRelationFilter = {
    every?: ProjectEscrowWhereInput
    some?: ProjectEscrowWhereInput
    none?: ProjectEscrowWhereInput
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BriefOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectEscrowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    logoUrl?: SortOrder
    instagramUrl?: SortOrder
    youtubeUrl?: SortOrder
    tiktokUrl?: SortOrder
    twitterUrl?: SortOrder
    snapchatUrl?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
    earnings?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    logoUrl?: SortOrder
    instagramUrl?: SortOrder
    youtubeUrl?: SortOrder
    tiktokUrl?: SortOrder
    twitterUrl?: SortOrder
    snapchatUrl?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    authUserId?: SortOrder
    email?: SortOrder
    displayName?: SortOrder
    bio?: SortOrder
    logoUrl?: SortOrder
    instagramUrl?: SortOrder
    youtubeUrl?: SortOrder
    tiktokUrl?: SortOrder
    twitterUrl?: SortOrder
    snapchatUrl?: SortOrder
    role?: SortOrder
    credits?: SortOrder
    earnings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
    earnings?: SortOrder
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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
    reelScript?: SortOrder
    targetPlatforms?: SortOrder
    productUrl?: SortOrder
    minBidAmount?: SortOrder
    maxBidAmount?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BriefAvgOrderByAggregateInput = {
    minBidAmount?: SortOrder
    maxBidAmount?: SortOrder
  }

  export type BriefMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productDescription?: SortOrder
    reelScript?: SortOrder
    productUrl?: SortOrder
    minBidAmount?: SortOrder
    maxBidAmount?: SortOrder
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
    reelScript?: SortOrder
    productUrl?: SortOrder
    minBidAmount?: SortOrder
    maxBidAmount?: SortOrder
    hook1?: SortOrder
    hook2?: SortOrder
    hook3?: SortOrder
    status?: SortOrder
    brandId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BriefSumOrderByAggregateInput = {
    minBidAmount?: SortOrder
    maxBidAmount?: SortOrder
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

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type BidBriefIdCreatorIdCompoundUniqueInput = {
    briefId: string
    creatorId: string
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

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type BidScalarRelationFilter = {
    is?: BidWhereInput
    isNot?: BidWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ProjectDeliverableListRelationFilter = {
    every?: ProjectDeliverableWhereInput
    some?: ProjectDeliverableWhereInput
    none?: ProjectDeliverableWhereInput
  }

  export type ProjectEscrowNullableScalarRelationFilter = {
    is?: ProjectEscrowWhereInput | null
    isNot?: ProjectEscrowWhereInput | null
  }

  export type ProjectDeliverableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    bidId?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    agreedAmount?: SortOrder
    status?: SortOrder
    creatorSubmittedAt?: SortOrder
    creatorSubmissionNote?: SortOrder
    brandApprovedAt?: SortOrder
    approvedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    agreedAmount?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    bidId?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    agreedAmount?: SortOrder
    status?: SortOrder
    creatorSubmittedAt?: SortOrder
    creatorSubmissionNote?: SortOrder
    brandApprovedAt?: SortOrder
    approvedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    bidId?: SortOrder
    briefId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    agreedAmount?: SortOrder
    status?: SortOrder
    creatorSubmittedAt?: SortOrder
    creatorSubmissionNote?: SortOrder
    brandApprovedAt?: SortOrder
    approvedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    agreedAmount?: SortOrder
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectDeliverableCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDeliverableAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProjectDeliverableMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDeliverableMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    notes?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectDeliverableSumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type ProjectMessageCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMessageMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    senderId?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumEscrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusFilter<$PrismaModel> | $Enums.EscrowStatus
  }

  export type EnumEscrowReleaseReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowReleaseReason | EnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscrowReleaseReasonNullableFilter<$PrismaModel> | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    holdPlacedAt?: SortOrder
    autoReleaseAt?: SortOrder
    releasedAt?: SortOrder
    releaseReason?: SortOrder
  }

  export type ProjectEscrowAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ProjectEscrowMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    holdPlacedAt?: SortOrder
    autoReleaseAt?: SortOrder
    releasedAt?: SortOrder
    releaseReason?: SortOrder
  }

  export type ProjectEscrowMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    brandId?: SortOrder
    creatorId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    holdPlacedAt?: SortOrder
    autoReleaseAt?: SortOrder
    releasedAt?: SortOrder
    releaseReason?: SortOrder
  }

  export type ProjectEscrowSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumEscrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.EscrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscrowStatusFilter<$PrismaModel>
    _max?: NestedEnumEscrowStatusFilter<$PrismaModel>
  }

  export type EnumEscrowReleaseReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowReleaseReason | EnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscrowReleaseReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.EscrowReleaseReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEscrowReleaseReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumEscrowReleaseReasonNullableFilter<$PrismaModel>
  }

  export type EnumProjectEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectEventType | EnumProjectEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectEventTypeFilter<$PrismaModel> | $Enums.ProjectEventType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProjectEventCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    note?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectEventMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectEventMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    actorId?: SortOrder
    type?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumProjectEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectEventType | EnumProjectEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectEventTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectEventTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type AuthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type AuthSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type AuthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type AuthSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type AuthSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type AuthUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutSessionsInput
    connect?: AuthUserWhereUniqueInput
  }

  export type AuthUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutSessionsInput
    upsert?: AuthUserUpsertWithoutSessionsInput
    connect?: AuthUserWhereUniqueInput
    update?: XOR<XOR<AuthUserUpdateToOneWithWhereWithoutSessionsInput, AuthUserUpdateWithoutSessionsInput>, AuthUserUncheckedUpdateWithoutSessionsInput>
  }

  export type AuthUserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutAccountsInput
    connect?: AuthUserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AuthUserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: AuthUserCreateOrConnectWithoutAccountsInput
    upsert?: AuthUserUpsertWithoutAccountsInput
    connect?: AuthUserWhereUniqueInput
    update?: XOR<XOR<AuthUserUpdateToOneWithWhereWithoutAccountsInput, AuthUserUpdateWithoutAccountsInput>, AuthUserUncheckedUpdateWithoutAccountsInput>
  }

  export type BidCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput> | BidCreateWithoutCreatorInput[] | BidUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutCreatorInput | BidCreateOrConnectWithoutCreatorInput[]
    createMany?: BidCreateManyCreatorInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type BriefCreateNestedManyWithoutBrandInput = {
    create?: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput> | BriefCreateWithoutBrandInput[] | BriefUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BriefCreateOrConnectWithoutBrandInput | BriefCreateOrConnectWithoutBrandInput[]
    createMany?: BriefCreateManyBrandInputEnvelope
    connect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
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

  export type ProjectCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ProjectCreateWithoutApprovedByInput, ProjectUncheckedCreateWithoutApprovedByInput> | ProjectCreateWithoutApprovedByInput[] | ProjectUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutApprovedByInput | ProjectCreateOrConnectWithoutApprovedByInput[]
    createMany?: ProjectCreateManyApprovedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ProjectMessageCreateWithoutSenderInput, ProjectMessageUncheckedCreateWithoutSenderInput> | ProjectMessageCreateWithoutSenderInput[] | ProjectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutSenderInput | ProjectMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ProjectMessageCreateManySenderInputEnvelope
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
  }

  export type ProjectEventCreateNestedManyWithoutActorInput = {
    create?: XOR<ProjectEventCreateWithoutActorInput, ProjectEventUncheckedCreateWithoutActorInput> | ProjectEventCreateWithoutActorInput[] | ProjectEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutActorInput | ProjectEventCreateOrConnectWithoutActorInput[]
    createMany?: ProjectEventCreateManyActorInputEnvelope
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
  }

  export type ProjectEscrowCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProjectEscrowCreateWithoutBrandInput, ProjectEscrowUncheckedCreateWithoutBrandInput> | ProjectEscrowCreateWithoutBrandInput[] | ProjectEscrowUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutBrandInput | ProjectEscrowCreateOrConnectWithoutBrandInput[]
    createMany?: ProjectEscrowCreateManyBrandInputEnvelope
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
  }

  export type ProjectEscrowCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectEscrowCreateWithoutCreatorInput, ProjectEscrowUncheckedCreateWithoutCreatorInput> | ProjectEscrowCreateWithoutCreatorInput[] | ProjectEscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutCreatorInput | ProjectEscrowCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectEscrowCreateManyCreatorInputEnvelope
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput> | BidCreateWithoutCreatorInput[] | BidUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BidCreateOrConnectWithoutCreatorInput | BidCreateOrConnectWithoutCreatorInput[]
    createMany?: BidCreateManyCreatorInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type BriefUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<BriefCreateWithoutBrandInput, BriefUncheckedCreateWithoutBrandInput> | BriefCreateWithoutBrandInput[] | BriefUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: BriefCreateOrConnectWithoutBrandInput | BriefCreateOrConnectWithoutBrandInput[]
    createMany?: BriefCreateManyBrandInputEnvelope
    connect?: BriefWhereUniqueInput | BriefWhereUniqueInput[]
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

  export type ProjectUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<ProjectCreateWithoutApprovedByInput, ProjectUncheckedCreateWithoutApprovedByInput> | ProjectCreateWithoutApprovedByInput[] | ProjectUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutApprovedByInput | ProjectCreateOrConnectWithoutApprovedByInput[]
    createMany?: ProjectCreateManyApprovedByInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ProjectMessageCreateWithoutSenderInput, ProjectMessageUncheckedCreateWithoutSenderInput> | ProjectMessageCreateWithoutSenderInput[] | ProjectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutSenderInput | ProjectMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ProjectMessageCreateManySenderInputEnvelope
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
  }

  export type ProjectEventUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<ProjectEventCreateWithoutActorInput, ProjectEventUncheckedCreateWithoutActorInput> | ProjectEventCreateWithoutActorInput[] | ProjectEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutActorInput | ProjectEventCreateOrConnectWithoutActorInput[]
    createMany?: ProjectEventCreateManyActorInputEnvelope
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
  }

  export type ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProjectEscrowCreateWithoutBrandInput, ProjectEscrowUncheckedCreateWithoutBrandInput> | ProjectEscrowCreateWithoutBrandInput[] | ProjectEscrowUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutBrandInput | ProjectEscrowCreateOrConnectWithoutBrandInput[]
    createMany?: ProjectEscrowCreateManyBrandInputEnvelope
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
  }

  export type ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProjectEscrowCreateWithoutCreatorInput, ProjectEscrowUncheckedCreateWithoutCreatorInput> | ProjectEscrowCreateWithoutCreatorInput[] | ProjectEscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutCreatorInput | ProjectEscrowCreateOrConnectWithoutCreatorInput[]
    createMany?: ProjectEscrowCreateManyCreatorInputEnvelope
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type ProjectUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ProjectCreateWithoutApprovedByInput, ProjectUncheckedCreateWithoutApprovedByInput> | ProjectCreateWithoutApprovedByInput[] | ProjectUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutApprovedByInput | ProjectCreateOrConnectWithoutApprovedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutApprovedByInput | ProjectUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ProjectCreateManyApprovedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutApprovedByInput | ProjectUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutApprovedByInput | ProjectUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ProjectMessageCreateWithoutSenderInput, ProjectMessageUncheckedCreateWithoutSenderInput> | ProjectMessageCreateWithoutSenderInput[] | ProjectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutSenderInput | ProjectMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ProjectMessageUpsertWithWhereUniqueWithoutSenderInput | ProjectMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ProjectMessageCreateManySenderInputEnvelope
    set?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    disconnect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    delete?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    update?: ProjectMessageUpdateWithWhereUniqueWithoutSenderInput | ProjectMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ProjectMessageUpdateManyWithWhereWithoutSenderInput | ProjectMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ProjectMessageScalarWhereInput | ProjectMessageScalarWhereInput[]
  }

  export type ProjectEventUpdateManyWithoutActorNestedInput = {
    create?: XOR<ProjectEventCreateWithoutActorInput, ProjectEventUncheckedCreateWithoutActorInput> | ProjectEventCreateWithoutActorInput[] | ProjectEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutActorInput | ProjectEventCreateOrConnectWithoutActorInput[]
    upsert?: ProjectEventUpsertWithWhereUniqueWithoutActorInput | ProjectEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ProjectEventCreateManyActorInputEnvelope
    set?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    disconnect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    delete?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    update?: ProjectEventUpdateWithWhereUniqueWithoutActorInput | ProjectEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ProjectEventUpdateManyWithWhereWithoutActorInput | ProjectEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ProjectEventScalarWhereInput | ProjectEventScalarWhereInput[]
  }

  export type ProjectEscrowUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProjectEscrowCreateWithoutBrandInput, ProjectEscrowUncheckedCreateWithoutBrandInput> | ProjectEscrowCreateWithoutBrandInput[] | ProjectEscrowUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutBrandInput | ProjectEscrowCreateOrConnectWithoutBrandInput[]
    upsert?: ProjectEscrowUpsertWithWhereUniqueWithoutBrandInput | ProjectEscrowUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProjectEscrowCreateManyBrandInputEnvelope
    set?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    disconnect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    delete?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    update?: ProjectEscrowUpdateWithWhereUniqueWithoutBrandInput | ProjectEscrowUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProjectEscrowUpdateManyWithWhereWithoutBrandInput | ProjectEscrowUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProjectEscrowScalarWhereInput | ProjectEscrowScalarWhereInput[]
  }

  export type ProjectEscrowUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectEscrowCreateWithoutCreatorInput, ProjectEscrowUncheckedCreateWithoutCreatorInput> | ProjectEscrowCreateWithoutCreatorInput[] | ProjectEscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutCreatorInput | ProjectEscrowCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectEscrowUpsertWithWhereUniqueWithoutCreatorInput | ProjectEscrowUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectEscrowCreateManyCreatorInputEnvelope
    set?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    disconnect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    delete?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    update?: ProjectEscrowUpdateWithWhereUniqueWithoutCreatorInput | ProjectEscrowUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectEscrowUpdateManyWithWhereWithoutCreatorInput | ProjectEscrowUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectEscrowScalarWhereInput | ProjectEscrowScalarWhereInput[]
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

  export type ProjectUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<ProjectCreateWithoutApprovedByInput, ProjectUncheckedCreateWithoutApprovedByInput> | ProjectCreateWithoutApprovedByInput[] | ProjectUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutApprovedByInput | ProjectCreateOrConnectWithoutApprovedByInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutApprovedByInput | ProjectUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: ProjectCreateManyApprovedByInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutApprovedByInput | ProjectUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutApprovedByInput | ProjectUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ProjectMessageCreateWithoutSenderInput, ProjectMessageUncheckedCreateWithoutSenderInput> | ProjectMessageCreateWithoutSenderInput[] | ProjectMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutSenderInput | ProjectMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ProjectMessageUpsertWithWhereUniqueWithoutSenderInput | ProjectMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ProjectMessageCreateManySenderInputEnvelope
    set?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    disconnect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    delete?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    update?: ProjectMessageUpdateWithWhereUniqueWithoutSenderInput | ProjectMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ProjectMessageUpdateManyWithWhereWithoutSenderInput | ProjectMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ProjectMessageScalarWhereInput | ProjectMessageScalarWhereInput[]
  }

  export type ProjectEventUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<ProjectEventCreateWithoutActorInput, ProjectEventUncheckedCreateWithoutActorInput> | ProjectEventCreateWithoutActorInput[] | ProjectEventUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutActorInput | ProjectEventCreateOrConnectWithoutActorInput[]
    upsert?: ProjectEventUpsertWithWhereUniqueWithoutActorInput | ProjectEventUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ProjectEventCreateManyActorInputEnvelope
    set?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    disconnect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    delete?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    update?: ProjectEventUpdateWithWhereUniqueWithoutActorInput | ProjectEventUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ProjectEventUpdateManyWithWhereWithoutActorInput | ProjectEventUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ProjectEventScalarWhereInput | ProjectEventScalarWhereInput[]
  }

  export type ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProjectEscrowCreateWithoutBrandInput, ProjectEscrowUncheckedCreateWithoutBrandInput> | ProjectEscrowCreateWithoutBrandInput[] | ProjectEscrowUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutBrandInput | ProjectEscrowCreateOrConnectWithoutBrandInput[]
    upsert?: ProjectEscrowUpsertWithWhereUniqueWithoutBrandInput | ProjectEscrowUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProjectEscrowCreateManyBrandInputEnvelope
    set?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    disconnect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    delete?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    update?: ProjectEscrowUpdateWithWhereUniqueWithoutBrandInput | ProjectEscrowUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProjectEscrowUpdateManyWithWhereWithoutBrandInput | ProjectEscrowUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProjectEscrowScalarWhereInput | ProjectEscrowScalarWhereInput[]
  }

  export type ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProjectEscrowCreateWithoutCreatorInput, ProjectEscrowUncheckedCreateWithoutCreatorInput> | ProjectEscrowCreateWithoutCreatorInput[] | ProjectEscrowUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutCreatorInput | ProjectEscrowCreateOrConnectWithoutCreatorInput[]
    upsert?: ProjectEscrowUpsertWithWhereUniqueWithoutCreatorInput | ProjectEscrowUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProjectEscrowCreateManyCreatorInputEnvelope
    set?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    disconnect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    delete?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    connect?: ProjectEscrowWhereUniqueInput | ProjectEscrowWhereUniqueInput[]
    update?: ProjectEscrowUpdateWithWhereUniqueWithoutCreatorInput | ProjectEscrowUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProjectEscrowUpdateManyWithWhereWithoutCreatorInput | ProjectEscrowUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProjectEscrowScalarWhereInput | ProjectEscrowScalarWhereInput[]
  }

  export type BriefCreatetargetPlatformsInput = {
    set: string[]
  }

  export type BidCreateNestedManyWithoutBriefInput = {
    create?: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput> | BidCreateWithoutBriefInput[] | BidUncheckedCreateWithoutBriefInput[]
    connectOrCreate?: BidCreateOrConnectWithoutBriefInput | BidCreateOrConnectWithoutBriefInput[]
    createMany?: BidCreateManyBriefInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutBriefsAsBrandInput = {
    create?: XOR<UserCreateWithoutBriefsAsBrandInput, UserUncheckedCreateWithoutBriefsAsBrandInput>
    connectOrCreate?: UserCreateOrConnectWithoutBriefsAsBrandInput
    connect?: UserWhereUniqueInput
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

  export type BriefUpdatetargetPlatformsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumBriefStatusFieldUpdateOperationsInput = {
    set?: $Enums.BriefStatus
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

  export type UserUpdateOneRequiredWithoutBriefsAsBrandNestedInput = {
    create?: XOR<UserCreateWithoutBriefsAsBrandInput, UserUncheckedCreateWithoutBriefsAsBrandInput>
    connectOrCreate?: UserCreateOrConnectWithoutBriefsAsBrandInput
    upsert?: UserUpsertWithoutBriefsAsBrandInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBriefsAsBrandInput, UserUpdateWithoutBriefsAsBrandInput>, UserUncheckedUpdateWithoutBriefsAsBrandInput>
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

  export type ProjectCreateNestedOneWithoutBidInput = {
    create?: XOR<ProjectCreateWithoutBidInput, ProjectUncheckedCreateWithoutBidInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBidInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUncheckedCreateNestedOneWithoutBidInput = {
    create?: XOR<ProjectCreateWithoutBidInput, ProjectUncheckedCreateWithoutBidInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBidInput
    connect?: ProjectWhereUniqueInput
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

  export type ProjectUpdateOneWithoutBidNestedInput = {
    create?: XOR<ProjectCreateWithoutBidInput, ProjectUncheckedCreateWithoutBidInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBidInput
    upsert?: ProjectUpsertWithoutBidInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBidInput, ProjectUpdateWithoutBidInput>, ProjectUncheckedUpdateWithoutBidInput>
  }

  export type ProjectUncheckedUpdateOneWithoutBidNestedInput = {
    create?: XOR<ProjectCreateWithoutBidInput, ProjectUncheckedCreateWithoutBidInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutBidInput
    upsert?: ProjectUpsertWithoutBidInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutBidInput, ProjectUpdateWithoutBidInput>, ProjectUncheckedUpdateWithoutBidInput>
  }

  export type BidCreateNestedOneWithoutProjectInput = {
    create?: XOR<BidCreateWithoutProjectInput, BidUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BidCreateOrConnectWithoutProjectInput
    connect?: BidWhereUniqueInput
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

  export type UserCreateNestedOneWithoutProjectsApprovedInput = {
    create?: XOR<UserCreateWithoutProjectsApprovedInput, UserUncheckedCreateWithoutProjectsApprovedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsApprovedInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectDeliverableCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDeliverableCreateWithoutProjectInput, ProjectDeliverableUncheckedCreateWithoutProjectInput> | ProjectDeliverableCreateWithoutProjectInput[] | ProjectDeliverableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDeliverableCreateOrConnectWithoutProjectInput | ProjectDeliverableCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDeliverableCreateManyProjectInputEnvelope
    connect?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
  }

  export type ProjectMessageCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMessageCreateWithoutProjectInput, ProjectMessageUncheckedCreateWithoutProjectInput> | ProjectMessageCreateWithoutProjectInput[] | ProjectMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutProjectInput | ProjectMessageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMessageCreateManyProjectInputEnvelope
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
  }

  export type ProjectEscrowCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectEscrowCreateWithoutProjectInput, ProjectEscrowUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutProjectInput
    connect?: ProjectEscrowWhereUniqueInput
  }

  export type ProjectEventCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectEventCreateWithoutProjectInput, ProjectEventUncheckedCreateWithoutProjectInput> | ProjectEventCreateWithoutProjectInput[] | ProjectEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutProjectInput | ProjectEventCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectEventCreateManyProjectInputEnvelope
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
  }

  export type ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectDeliverableCreateWithoutProjectInput, ProjectDeliverableUncheckedCreateWithoutProjectInput> | ProjectDeliverableCreateWithoutProjectInput[] | ProjectDeliverableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDeliverableCreateOrConnectWithoutProjectInput | ProjectDeliverableCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectDeliverableCreateManyProjectInputEnvelope
    connect?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
  }

  export type ProjectMessageUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMessageCreateWithoutProjectInput, ProjectMessageUncheckedCreateWithoutProjectInput> | ProjectMessageCreateWithoutProjectInput[] | ProjectMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutProjectInput | ProjectMessageCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMessageCreateManyProjectInputEnvelope
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
  }

  export type ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectEscrowCreateWithoutProjectInput, ProjectEscrowUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutProjectInput
    connect?: ProjectEscrowWhereUniqueInput
  }

  export type ProjectEventUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectEventCreateWithoutProjectInput, ProjectEventUncheckedCreateWithoutProjectInput> | ProjectEventCreateWithoutProjectInput[] | ProjectEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutProjectInput | ProjectEventCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectEventCreateManyProjectInputEnvelope
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type BidUpdateOneRequiredWithoutProjectNestedInput = {
    create?: XOR<BidCreateWithoutProjectInput, BidUncheckedCreateWithoutProjectInput>
    connectOrCreate?: BidCreateOrConnectWithoutProjectInput
    upsert?: BidUpsertWithoutProjectInput
    connect?: BidWhereUniqueInput
    update?: XOR<XOR<BidUpdateToOneWithWhereWithoutProjectInput, BidUpdateWithoutProjectInput>, BidUncheckedUpdateWithoutProjectInput>
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

  export type UserUpdateOneWithoutProjectsApprovedNestedInput = {
    create?: XOR<UserCreateWithoutProjectsApprovedInput, UserUncheckedCreateWithoutProjectsApprovedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsApprovedInput
    upsert?: UserUpsertWithoutProjectsApprovedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsApprovedInput, UserUpdateWithoutProjectsApprovedInput>, UserUncheckedUpdateWithoutProjectsApprovedInput>
  }

  export type ProjectDeliverableUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDeliverableCreateWithoutProjectInput, ProjectDeliverableUncheckedCreateWithoutProjectInput> | ProjectDeliverableCreateWithoutProjectInput[] | ProjectDeliverableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDeliverableCreateOrConnectWithoutProjectInput | ProjectDeliverableCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDeliverableUpsertWithWhereUniqueWithoutProjectInput | ProjectDeliverableUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDeliverableCreateManyProjectInputEnvelope
    set?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    disconnect?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    delete?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    connect?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    update?: ProjectDeliverableUpdateWithWhereUniqueWithoutProjectInput | ProjectDeliverableUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDeliverableUpdateManyWithWhereWithoutProjectInput | ProjectDeliverableUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDeliverableScalarWhereInput | ProjectDeliverableScalarWhereInput[]
  }

  export type ProjectMessageUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMessageCreateWithoutProjectInput, ProjectMessageUncheckedCreateWithoutProjectInput> | ProjectMessageCreateWithoutProjectInput[] | ProjectMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutProjectInput | ProjectMessageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMessageUpsertWithWhereUniqueWithoutProjectInput | ProjectMessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMessageCreateManyProjectInputEnvelope
    set?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    disconnect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    delete?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    update?: ProjectMessageUpdateWithWhereUniqueWithoutProjectInput | ProjectMessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMessageUpdateManyWithWhereWithoutProjectInput | ProjectMessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMessageScalarWhereInput | ProjectMessageScalarWhereInput[]
  }

  export type ProjectEscrowUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectEscrowCreateWithoutProjectInput, ProjectEscrowUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutProjectInput
    upsert?: ProjectEscrowUpsertWithoutProjectInput
    disconnect?: ProjectEscrowWhereInput | boolean
    delete?: ProjectEscrowWhereInput | boolean
    connect?: ProjectEscrowWhereUniqueInput
    update?: XOR<XOR<ProjectEscrowUpdateToOneWithWhereWithoutProjectInput, ProjectEscrowUpdateWithoutProjectInput>, ProjectEscrowUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectEventUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectEventCreateWithoutProjectInput, ProjectEventUncheckedCreateWithoutProjectInput> | ProjectEventCreateWithoutProjectInput[] | ProjectEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutProjectInput | ProjectEventCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectEventUpsertWithWhereUniqueWithoutProjectInput | ProjectEventUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectEventCreateManyProjectInputEnvelope
    set?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    disconnect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    delete?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    update?: ProjectEventUpdateWithWhereUniqueWithoutProjectInput | ProjectEventUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectEventUpdateManyWithWhereWithoutProjectInput | ProjectEventUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectEventScalarWhereInput | ProjectEventScalarWhereInput[]
  }

  export type ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectDeliverableCreateWithoutProjectInput, ProjectDeliverableUncheckedCreateWithoutProjectInput> | ProjectDeliverableCreateWithoutProjectInput[] | ProjectDeliverableUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectDeliverableCreateOrConnectWithoutProjectInput | ProjectDeliverableCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectDeliverableUpsertWithWhereUniqueWithoutProjectInput | ProjectDeliverableUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectDeliverableCreateManyProjectInputEnvelope
    set?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    disconnect?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    delete?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    connect?: ProjectDeliverableWhereUniqueInput | ProjectDeliverableWhereUniqueInput[]
    update?: ProjectDeliverableUpdateWithWhereUniqueWithoutProjectInput | ProjectDeliverableUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectDeliverableUpdateManyWithWhereWithoutProjectInput | ProjectDeliverableUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectDeliverableScalarWhereInput | ProjectDeliverableScalarWhereInput[]
  }

  export type ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMessageCreateWithoutProjectInput, ProjectMessageUncheckedCreateWithoutProjectInput> | ProjectMessageCreateWithoutProjectInput[] | ProjectMessageUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMessageCreateOrConnectWithoutProjectInput | ProjectMessageCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMessageUpsertWithWhereUniqueWithoutProjectInput | ProjectMessageUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMessageCreateManyProjectInputEnvelope
    set?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    disconnect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    delete?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    connect?: ProjectMessageWhereUniqueInput | ProjectMessageWhereUniqueInput[]
    update?: ProjectMessageUpdateWithWhereUniqueWithoutProjectInput | ProjectMessageUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMessageUpdateManyWithWhereWithoutProjectInput | ProjectMessageUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMessageScalarWhereInput | ProjectMessageScalarWhereInput[]
  }

  export type ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectEscrowCreateWithoutProjectInput, ProjectEscrowUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectEscrowCreateOrConnectWithoutProjectInput
    upsert?: ProjectEscrowUpsertWithoutProjectInput
    disconnect?: ProjectEscrowWhereInput | boolean
    delete?: ProjectEscrowWhereInput | boolean
    connect?: ProjectEscrowWhereUniqueInput
    update?: XOR<XOR<ProjectEscrowUpdateToOneWithWhereWithoutProjectInput, ProjectEscrowUpdateWithoutProjectInput>, ProjectEscrowUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectEventUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectEventCreateWithoutProjectInput, ProjectEventUncheckedCreateWithoutProjectInput> | ProjectEventCreateWithoutProjectInput[] | ProjectEventUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectEventCreateOrConnectWithoutProjectInput | ProjectEventCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectEventUpsertWithWhereUniqueWithoutProjectInput | ProjectEventUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectEventCreateManyProjectInputEnvelope
    set?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    disconnect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    delete?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    connect?: ProjectEventWhereUniqueInput | ProjectEventWhereUniqueInput[]
    update?: ProjectEventUpdateWithWhereUniqueWithoutProjectInput | ProjectEventUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectEventUpdateManyWithWhereWithoutProjectInput | ProjectEventUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectEventScalarWhereInput | ProjectEventScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutDeliverablesInput = {
    create?: XOR<ProjectCreateWithoutDeliverablesInput, ProjectUncheckedCreateWithoutDeliverablesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeliverablesInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDeliverablesNestedInput = {
    create?: XOR<ProjectCreateWithoutDeliverablesInput, ProjectUncheckedCreateWithoutDeliverablesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDeliverablesInput
    upsert?: ProjectUpsertWithoutDeliverablesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDeliverablesInput, ProjectUpdateWithoutDeliverablesInput>, ProjectUncheckedUpdateWithoutDeliverablesInput>
  }

  export type ProjectCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMessagesInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectMessagesInput = {
    create?: XOR<UserCreateWithoutProjectMessagesInput, UserUncheckedCreateWithoutProjectMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMessagesInput
    upsert?: ProjectUpsertWithoutMessagesInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMessagesInput, ProjectUpdateWithoutMessagesInput>, ProjectUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutProjectMessagesNestedInput = {
    create?: XOR<UserCreateWithoutProjectMessagesInput, UserUncheckedCreateWithoutProjectMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectMessagesInput
    upsert?: UserUpsertWithoutProjectMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectMessagesInput, UserUpdateWithoutProjectMessagesInput>, UserUncheckedUpdateWithoutProjectMessagesInput>
  }

  export type ProjectCreateNestedOneWithoutEscrowInput = {
    create?: XOR<ProjectCreateWithoutEscrowInput, ProjectUncheckedCreateWithoutEscrowInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEscrowInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBrandEscrowsInput = {
    create?: XOR<UserCreateWithoutBrandEscrowsInput, UserUncheckedCreateWithoutBrandEscrowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandEscrowsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatorEscrowsInput = {
    create?: XOR<UserCreateWithoutCreatorEscrowsInput, UserUncheckedCreateWithoutCreatorEscrowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatorEscrowsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEscrowStatusFieldUpdateOperationsInput = {
    set?: $Enums.EscrowStatus
  }

  export type NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput = {
    set?: $Enums.EscrowReleaseReason | null
  }

  export type ProjectUpdateOneRequiredWithoutEscrowNestedInput = {
    create?: XOR<ProjectCreateWithoutEscrowInput, ProjectUncheckedCreateWithoutEscrowInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEscrowInput
    upsert?: ProjectUpsertWithoutEscrowInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEscrowInput, ProjectUpdateWithoutEscrowInput>, ProjectUncheckedUpdateWithoutEscrowInput>
  }

  export type UserUpdateOneRequiredWithoutBrandEscrowsNestedInput = {
    create?: XOR<UserCreateWithoutBrandEscrowsInput, UserUncheckedCreateWithoutBrandEscrowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBrandEscrowsInput
    upsert?: UserUpsertWithoutBrandEscrowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBrandEscrowsInput, UserUpdateWithoutBrandEscrowsInput>, UserUncheckedUpdateWithoutBrandEscrowsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatorEscrowsNestedInput = {
    create?: XOR<UserCreateWithoutCreatorEscrowsInput, UserUncheckedCreateWithoutCreatorEscrowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatorEscrowsInput
    upsert?: UserUpsertWithoutCreatorEscrowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatorEscrowsInput, UserUpdateWithoutCreatorEscrowsInput>, UserUncheckedUpdateWithoutCreatorEscrowsInput>
  }

  export type ProjectCreateNestedOneWithoutEventsInput = {
    create?: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEventsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProjectEventsInput = {
    create?: XOR<UserCreateWithoutProjectEventsInput, UserUncheckedCreateWithoutProjectEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumProjectEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectEventType
  }

  export type ProjectUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEventsInput
    upsert?: ProjectUpsertWithoutEventsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEventsInput, ProjectUpdateWithoutEventsInput>, ProjectUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutProjectEventsNestedInput = {
    create?: XOR<UserCreateWithoutProjectEventsInput, UserUncheckedCreateWithoutProjectEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectEventsInput
    upsert?: UserUpsertWithoutProjectEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectEventsInput, UserUpdateWithoutProjectEventsInput>, UserUncheckedUpdateWithoutProjectEventsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
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

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumEscrowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusFilter<$PrismaModel> | $Enums.EscrowStatus
  }

  export type NestedEnumEscrowReleaseReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowReleaseReason | EnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscrowReleaseReasonNullableFilter<$PrismaModel> | $Enums.EscrowReleaseReason | null
  }

  export type NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowStatus | EnumEscrowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EscrowStatus[] | ListEnumEscrowStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEscrowStatusWithAggregatesFilter<$PrismaModel> | $Enums.EscrowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEscrowStatusFilter<$PrismaModel>
    _max?: NestedEnumEscrowStatusFilter<$PrismaModel>
  }

  export type NestedEnumEscrowReleaseReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EscrowReleaseReason | EnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.EscrowReleaseReason[] | ListEnumEscrowReleaseReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumEscrowReleaseReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.EscrowReleaseReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumEscrowReleaseReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumEscrowReleaseReasonNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectEventType | EnumProjectEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectEventTypeFilter<$PrismaModel> | $Enums.ProjectEventType
  }

  export type NestedEnumProjectEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectEventType | EnumProjectEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectEventType[] | ListEnumProjectEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectEventTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectEventTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuthAccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthAccountCreateOrConnectWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountCreateManyUserInputEnvelope = {
    data: AuthAccountCreateManyUserInput | AuthAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthSessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuthSessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuthSessionCreateOrConnectWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionCreateManyUserInputEnvelope = {
    data: AuthSessionCreateManyUserInput | AuthSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    update: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    data: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
  }

  export type AuthAccountUpdateManyWithWhereWithoutUserInput = {
    where: AuthAccountScalarWhereInput
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthAccountScalarWhereInput = {
    AND?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    OR?: AuthAccountScalarWhereInput[]
    NOT?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    id?: StringFilter<"AuthAccount"> | string
    accountId?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: StringFilter<"AuthAccount"> | string
    accessToken?: StringNullableFilter<"AuthAccount"> | string | null
    refreshToken?: StringNullableFilter<"AuthAccount"> | string | null
    idToken?: StringNullableFilter<"AuthAccount"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AuthAccount"> | Date | string | null
    scope?: StringNullableFilter<"AuthAccount"> | string | null
    password?: StringNullableFilter<"AuthAccount"> | string | null
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AuthAccount"> | Date | string
  }

  export type AuthSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    update: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    data: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuthSessionUpdateManyWithWhereWithoutUserInput = {
    where: AuthSessionScalarWhereInput
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthSessionScalarWhereInput = {
    AND?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    OR?: AuthSessionScalarWhereInput[]
    NOT?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    expiresAt?: DateTimeFilter<"AuthSession"> | Date | string
    token?: StringFilter<"AuthSession"> | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    updatedAt?: DateTimeFilter<"AuthSession"> | Date | string
    ipAddress?: StringNullableFilter<"AuthSession"> | string | null
    userAgent?: StringNullableFilter<"AuthSession"> | string | null
    userId?: StringFilter<"AuthSession"> | string
  }

  export type AuthUserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AuthAccountCreateNestedManyWithoutUserInput
  }

  export type AuthUserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    accounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type AuthUserCreateOrConnectWithoutSessionsInput = {
    where: AuthUserWhereUniqueInput
    create: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
  }

  export type AuthUserUpsertWithoutSessionsInput = {
    update: XOR<AuthUserUpdateWithoutSessionsInput, AuthUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<AuthUserCreateWithoutSessionsInput, AuthUserUncheckedCreateWithoutSessionsInput>
    where?: AuthUserWhereInput
  }

  export type AuthUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AuthUserWhereInput
    data: XOR<AuthUserUpdateWithoutSessionsInput, AuthUserUncheckedUpdateWithoutSessionsInput>
  }

  export type AuthUserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AuthAccountUpdateManyWithoutUserNestedInput
  }

  export type AuthUserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthUserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: AuthSessionCreateNestedManyWithoutUserInput
  }

  export type AuthUserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    sessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type AuthUserCreateOrConnectWithoutAccountsInput = {
    where: AuthUserWhereUniqueInput
    create: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
  }

  export type AuthUserUpsertWithoutAccountsInput = {
    update: XOR<AuthUserUpdateWithoutAccountsInput, AuthUserUncheckedUpdateWithoutAccountsInput>
    create: XOR<AuthUserCreateWithoutAccountsInput, AuthUserUncheckedCreateWithoutAccountsInput>
    where?: AuthUserWhereInput
  }

  export type AuthUserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: AuthUserWhereInput
    data: XOR<AuthUserUpdateWithoutAccountsInput, AuthUserUncheckedUpdateWithoutAccountsInput>
  }

  export type AuthUserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUpdateManyWithoutUserNestedInput
  }

  export type AuthUserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BidCreateWithoutCreatorInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutBidsInput
    project?: ProjectCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateWithoutCreatorInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    briefId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidCreateOrConnectWithoutCreatorInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutCreatorInput, BidUncheckedCreateWithoutCreatorInput>
  }

  export type BidCreateManyCreatorInputEnvelope = {
    data: BidCreateManyCreatorInput | BidCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BriefCreateWithoutBrandInput = {
    id?: string
    title: string
    productDescription: string
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
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
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
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

  export type ProjectCreateWithoutBrandInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBrandInput = {
    id?: string
    bidId: string
    briefId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
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
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCreatorInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCreatorInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCreatorInput, ProjectUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectCreateManyCreatorInputEnvelope = {
    data: ProjectCreateManyCreatorInput | ProjectCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutApprovedByInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutApprovedByInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutApprovedByInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutApprovedByInput, ProjectUncheckedCreateWithoutApprovedByInput>
  }

  export type ProjectCreateManyApprovedByInputEnvelope = {
    data: ProjectCreateManyApprovedByInput | ProjectCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMessageCreateWithoutSenderInput = {
    id?: string
    body: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutMessagesInput
  }

  export type ProjectMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    projectId: string
    body: string
    createdAt?: Date | string
  }

  export type ProjectMessageCreateOrConnectWithoutSenderInput = {
    where: ProjectMessageWhereUniqueInput
    create: XOR<ProjectMessageCreateWithoutSenderInput, ProjectMessageUncheckedCreateWithoutSenderInput>
  }

  export type ProjectMessageCreateManySenderInputEnvelope = {
    data: ProjectMessageCreateManySenderInput | ProjectMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEventCreateWithoutActorInput = {
    id?: string
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutEventsInput
  }

  export type ProjectEventUncheckedCreateWithoutActorInput = {
    id?: string
    projectId: string
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectEventCreateOrConnectWithoutActorInput = {
    where: ProjectEventWhereUniqueInput
    create: XOR<ProjectEventCreateWithoutActorInput, ProjectEventUncheckedCreateWithoutActorInput>
  }

  export type ProjectEventCreateManyActorInputEnvelope = {
    data: ProjectEventCreateManyActorInput | ProjectEventCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEscrowCreateWithoutBrandInput = {
    id?: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
    project: ProjectCreateNestedOneWithoutEscrowInput
    creator: UserCreateNestedOneWithoutCreatorEscrowsInput
  }

  export type ProjectEscrowUncheckedCreateWithoutBrandInput = {
    id?: string
    projectId: string
    creatorId: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowCreateOrConnectWithoutBrandInput = {
    where: ProjectEscrowWhereUniqueInput
    create: XOR<ProjectEscrowCreateWithoutBrandInput, ProjectEscrowUncheckedCreateWithoutBrandInput>
  }

  export type ProjectEscrowCreateManyBrandInputEnvelope = {
    data: ProjectEscrowCreateManyBrandInput | ProjectEscrowCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEscrowCreateWithoutCreatorInput = {
    id?: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
    project: ProjectCreateNestedOneWithoutEscrowInput
    brand: UserCreateNestedOneWithoutBrandEscrowsInput
  }

  export type ProjectEscrowUncheckedCreateWithoutCreatorInput = {
    id?: string
    projectId: string
    brandId: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowCreateOrConnectWithoutCreatorInput = {
    where: ProjectEscrowWhereUniqueInput
    create: XOR<ProjectEscrowCreateWithoutCreatorInput, ProjectEscrowUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectEscrowCreateManyCreatorInputEnvelope = {
    data: ProjectEscrowCreateManyCreatorInput | ProjectEscrowCreateManyCreatorInput[]
    skipDuplicates?: boolean
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
    reelScript?: StringFilter<"Brief"> | string
    targetPlatforms?: StringNullableListFilter<"Brief">
    productUrl?: StringFilter<"Brief"> | string
    minBidAmount?: IntFilter<"Brief"> | number
    maxBidAmount?: IntFilter<"Brief"> | number
    hook1?: StringFilter<"Brief"> | string
    hook2?: StringFilter<"Brief"> | string
    hook3?: StringFilter<"Brief"> | string
    status?: EnumBriefStatusFilter<"Brief"> | $Enums.BriefStatus
    brandId?: StringFilter<"Brief"> | string
    createdAt?: DateTimeFilter<"Brief"> | Date | string
    updatedAt?: DateTimeFilter<"Brief"> | Date | string
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
    bidId?: StringFilter<"Project"> | string
    briefId?: StringFilter<"Project"> | string
    brandId?: StringFilter<"Project"> | string
    creatorId?: StringFilter<"Project"> | string
    agreedAmount?: IntFilter<"Project"> | number
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    creatorSubmittedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    creatorSubmissionNote?: StringNullableFilter<"Project"> | string | null
    brandApprovedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    approvedById?: StringNullableFilter<"Project"> | string | null
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

  export type ProjectUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutApprovedByInput, ProjectUncheckedUpdateWithoutApprovedByInput>
    create: XOR<ProjectCreateWithoutApprovedByInput, ProjectUncheckedCreateWithoutApprovedByInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutApprovedByInput, ProjectUncheckedUpdateWithoutApprovedByInput>
  }

  export type ProjectUpdateManyWithWhereWithoutApprovedByInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type ProjectMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ProjectMessageWhereUniqueInput
    update: XOR<ProjectMessageUpdateWithoutSenderInput, ProjectMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ProjectMessageCreateWithoutSenderInput, ProjectMessageUncheckedCreateWithoutSenderInput>
  }

  export type ProjectMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ProjectMessageWhereUniqueInput
    data: XOR<ProjectMessageUpdateWithoutSenderInput, ProjectMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ProjectMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ProjectMessageScalarWhereInput
    data: XOR<ProjectMessageUpdateManyMutationInput, ProjectMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ProjectMessageScalarWhereInput = {
    AND?: ProjectMessageScalarWhereInput | ProjectMessageScalarWhereInput[]
    OR?: ProjectMessageScalarWhereInput[]
    NOT?: ProjectMessageScalarWhereInput | ProjectMessageScalarWhereInput[]
    id?: StringFilter<"ProjectMessage"> | string
    projectId?: StringFilter<"ProjectMessage"> | string
    senderId?: StringFilter<"ProjectMessage"> | string
    body?: StringFilter<"ProjectMessage"> | string
    createdAt?: DateTimeFilter<"ProjectMessage"> | Date | string
  }

  export type ProjectEventUpsertWithWhereUniqueWithoutActorInput = {
    where: ProjectEventWhereUniqueInput
    update: XOR<ProjectEventUpdateWithoutActorInput, ProjectEventUncheckedUpdateWithoutActorInput>
    create: XOR<ProjectEventCreateWithoutActorInput, ProjectEventUncheckedCreateWithoutActorInput>
  }

  export type ProjectEventUpdateWithWhereUniqueWithoutActorInput = {
    where: ProjectEventWhereUniqueInput
    data: XOR<ProjectEventUpdateWithoutActorInput, ProjectEventUncheckedUpdateWithoutActorInput>
  }

  export type ProjectEventUpdateManyWithWhereWithoutActorInput = {
    where: ProjectEventScalarWhereInput
    data: XOR<ProjectEventUpdateManyMutationInput, ProjectEventUncheckedUpdateManyWithoutActorInput>
  }

  export type ProjectEventScalarWhereInput = {
    AND?: ProjectEventScalarWhereInput | ProjectEventScalarWhereInput[]
    OR?: ProjectEventScalarWhereInput[]
    NOT?: ProjectEventScalarWhereInput | ProjectEventScalarWhereInput[]
    id?: StringFilter<"ProjectEvent"> | string
    projectId?: StringFilter<"ProjectEvent"> | string
    actorId?: StringNullableFilter<"ProjectEvent"> | string | null
    type?: EnumProjectEventTypeFilter<"ProjectEvent"> | $Enums.ProjectEventType
    note?: StringNullableFilter<"ProjectEvent"> | string | null
    metadata?: JsonNullableFilter<"ProjectEvent">
    createdAt?: DateTimeFilter<"ProjectEvent"> | Date | string
  }

  export type ProjectEscrowUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProjectEscrowWhereUniqueInput
    update: XOR<ProjectEscrowUpdateWithoutBrandInput, ProjectEscrowUncheckedUpdateWithoutBrandInput>
    create: XOR<ProjectEscrowCreateWithoutBrandInput, ProjectEscrowUncheckedCreateWithoutBrandInput>
  }

  export type ProjectEscrowUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProjectEscrowWhereUniqueInput
    data: XOR<ProjectEscrowUpdateWithoutBrandInput, ProjectEscrowUncheckedUpdateWithoutBrandInput>
  }

  export type ProjectEscrowUpdateManyWithWhereWithoutBrandInput = {
    where: ProjectEscrowScalarWhereInput
    data: XOR<ProjectEscrowUpdateManyMutationInput, ProjectEscrowUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProjectEscrowScalarWhereInput = {
    AND?: ProjectEscrowScalarWhereInput | ProjectEscrowScalarWhereInput[]
    OR?: ProjectEscrowScalarWhereInput[]
    NOT?: ProjectEscrowScalarWhereInput | ProjectEscrowScalarWhereInput[]
    id?: StringFilter<"ProjectEscrow"> | string
    projectId?: StringFilter<"ProjectEscrow"> | string
    brandId?: StringFilter<"ProjectEscrow"> | string
    creatorId?: StringFilter<"ProjectEscrow"> | string
    amount?: IntFilter<"ProjectEscrow"> | number
    status?: EnumEscrowStatusFilter<"ProjectEscrow"> | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFilter<"ProjectEscrow"> | Date | string
    autoReleaseAt?: DateTimeNullableFilter<"ProjectEscrow"> | Date | string | null
    releasedAt?: DateTimeNullableFilter<"ProjectEscrow"> | Date | string | null
    releaseReason?: EnumEscrowReleaseReasonNullableFilter<"ProjectEscrow"> | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProjectEscrowWhereUniqueInput
    update: XOR<ProjectEscrowUpdateWithoutCreatorInput, ProjectEscrowUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProjectEscrowCreateWithoutCreatorInput, ProjectEscrowUncheckedCreateWithoutCreatorInput>
  }

  export type ProjectEscrowUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProjectEscrowWhereUniqueInput
    data: XOR<ProjectEscrowUpdateWithoutCreatorInput, ProjectEscrowUncheckedUpdateWithoutCreatorInput>
  }

  export type ProjectEscrowUpdateManyWithWhereWithoutCreatorInput = {
    where: ProjectEscrowScalarWhereInput
    data: XOR<ProjectEscrowUpdateManyMutationInput, ProjectEscrowUncheckedUpdateManyWithoutCreatorInput>
  }

  export type BidCreateWithoutBriefInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutBidsAsCreatorInput
    project?: ProjectCreateNestedOneWithoutBidInput
  }

  export type BidUncheckedCreateWithoutBriefInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project?: ProjectUncheckedCreateNestedOneWithoutBidInput
  }

  export type BidCreateOrConnectWithoutBriefInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutBriefInput, BidUncheckedCreateWithoutBriefInput>
  }

  export type BidCreateManyBriefInputEnvelope = {
    data: BidCreateManyBriefInput | BidCreateManyBriefInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBriefsAsBrandInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutBriefsAsBrandInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutBriefsAsBrandInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBriefsAsBrandInput, UserUncheckedCreateWithoutBriefsAsBrandInput>
  }

  export type ProjectCreateWithoutBriefInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBriefInput = {
    id?: string
    bidId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBriefInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBriefInput, ProjectUncheckedCreateWithoutBriefInput>
  }

  export type ProjectCreateManyBriefInputEnvelope = {
    data: ProjectCreateManyBriefInput | ProjectCreateManyBriefInput[]
    skipDuplicates?: boolean
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
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutBriefsAsBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
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
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
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
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
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
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutBidsAsCreatorInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutBidsAsCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsAsCreatorInput, UserUncheckedCreateWithoutBidsAsCreatorInput>
  }

  export type ProjectCreateWithoutBidInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutBidInput = {
    id?: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutBidInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutBidInput, ProjectUncheckedCreateWithoutBidInput>
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ProjectUpsertWithoutBidInput = {
    update: XOR<ProjectUpdateWithoutBidInput, ProjectUncheckedUpdateWithoutBidInput>
    create: XOR<ProjectCreateWithoutBidInput, ProjectUncheckedCreateWithoutBidInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutBidInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutBidInput, ProjectUncheckedUpdateWithoutBidInput>
  }

  export type ProjectUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBidInput = {
    id?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type BidCreateWithoutProjectInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    brief: BriefCreateNestedOneWithoutBidsInput
    creator: UserCreateNestedOneWithoutBidsAsCreatorInput
  }

  export type BidUncheckedCreateWithoutProjectInput = {
    id?: string
    pitchText: string
    amount: number
    status?: $Enums.BidStatus
    briefId: string
    creatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateOrConnectWithoutProjectInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutProjectInput, BidUncheckedCreateWithoutProjectInput>
  }

  export type BriefCreateWithoutProjectsInput = {
    id?: string
    title: string
    productDescription: string
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidCreateNestedManyWithoutBriefInput
    brand: UserCreateNestedOneWithoutBriefsAsBrandInput
  }

  export type BriefUncheckedCreateWithoutProjectsInput = {
    id?: string
    title: string
    productDescription: string
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
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
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProjectsAsBrandInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProjectsAsBrandInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsAsBrandInput, UserUncheckedCreateWithoutProjectsAsBrandInput>
  }

  export type UserCreateWithoutProjectsAsCreatorInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProjectsAsCreatorInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProjectsAsCreatorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsAsCreatorInput, UserUncheckedCreateWithoutProjectsAsCreatorInput>
  }

  export type UserCreateWithoutProjectsApprovedInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProjectsApprovedInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProjectsApprovedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsApprovedInput, UserUncheckedCreateWithoutProjectsApprovedInput>
  }

  export type ProjectDeliverableCreateWithoutProjectInput = {
    id?: string
    platform: string
    url: string
    notes?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDeliverableUncheckedCreateWithoutProjectInput = {
    id?: string
    platform: string
    url: string
    notes?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectDeliverableCreateOrConnectWithoutProjectInput = {
    where: ProjectDeliverableWhereUniqueInput
    create: XOR<ProjectDeliverableCreateWithoutProjectInput, ProjectDeliverableUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDeliverableCreateManyProjectInputEnvelope = {
    data: ProjectDeliverableCreateManyProjectInput | ProjectDeliverableCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMessageCreateWithoutProjectInput = {
    id?: string
    body: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutProjectMessagesInput
  }

  export type ProjectMessageUncheckedCreateWithoutProjectInput = {
    id?: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type ProjectMessageCreateOrConnectWithoutProjectInput = {
    where: ProjectMessageWhereUniqueInput
    create: XOR<ProjectMessageCreateWithoutProjectInput, ProjectMessageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMessageCreateManyProjectInputEnvelope = {
    data: ProjectMessageCreateManyProjectInput | ProjectMessageCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectEscrowCreateWithoutProjectInput = {
    id?: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
    brand: UserCreateNestedOneWithoutBrandEscrowsInput
    creator: UserCreateNestedOneWithoutCreatorEscrowsInput
  }

  export type ProjectEscrowUncheckedCreateWithoutProjectInput = {
    id?: string
    brandId: string
    creatorId: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowCreateOrConnectWithoutProjectInput = {
    where: ProjectEscrowWhereUniqueInput
    create: XOR<ProjectEscrowCreateWithoutProjectInput, ProjectEscrowUncheckedCreateWithoutProjectInput>
  }

  export type ProjectEventCreateWithoutProjectInput = {
    id?: string
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutProjectEventsInput
  }

  export type ProjectEventUncheckedCreateWithoutProjectInput = {
    id?: string
    actorId?: string | null
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectEventCreateOrConnectWithoutProjectInput = {
    where: ProjectEventWhereUniqueInput
    create: XOR<ProjectEventCreateWithoutProjectInput, ProjectEventUncheckedCreateWithoutProjectInput>
  }

  export type ProjectEventCreateManyProjectInputEnvelope = {
    data: ProjectEventCreateManyProjectInput | ProjectEventCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type BidUpsertWithoutProjectInput = {
    update: XOR<BidUpdateWithoutProjectInput, BidUncheckedUpdateWithoutProjectInput>
    create: XOR<BidCreateWithoutProjectInput, BidUncheckedCreateWithoutProjectInput>
    where?: BidWhereInput
  }

  export type BidUpdateToOneWithWhereWithoutProjectInput = {
    where?: BidWhereInput
    data: XOR<BidUpdateWithoutProjectInput, BidUncheckedUpdateWithoutProjectInput>
  }

  export type BidUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutBidsNestedInput
    creator?: UserUpdateOneRequiredWithoutBidsAsCreatorNestedInput
  }

  export type BidUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    briefId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUpdateManyWithoutBriefNestedInput
    brand?: UserUpdateOneRequiredWithoutBriefsAsBrandNestedInput
  }

  export type BriefUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsAsBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
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
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsAsCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutProjectsApprovedInput = {
    update: XOR<UserUpdateWithoutProjectsApprovedInput, UserUncheckedUpdateWithoutProjectsApprovedInput>
    create: XOR<UserCreateWithoutProjectsApprovedInput, UserUncheckedCreateWithoutProjectsApprovedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsApprovedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsApprovedInput, UserUncheckedUpdateWithoutProjectsApprovedInput>
  }

  export type UserUpdateWithoutProjectsApprovedInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsApprovedInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ProjectDeliverableUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectDeliverableWhereUniqueInput
    update: XOR<ProjectDeliverableUpdateWithoutProjectInput, ProjectDeliverableUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectDeliverableCreateWithoutProjectInput, ProjectDeliverableUncheckedCreateWithoutProjectInput>
  }

  export type ProjectDeliverableUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectDeliverableWhereUniqueInput
    data: XOR<ProjectDeliverableUpdateWithoutProjectInput, ProjectDeliverableUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectDeliverableUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectDeliverableScalarWhereInput
    data: XOR<ProjectDeliverableUpdateManyMutationInput, ProjectDeliverableUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectDeliverableScalarWhereInput = {
    AND?: ProjectDeliverableScalarWhereInput | ProjectDeliverableScalarWhereInput[]
    OR?: ProjectDeliverableScalarWhereInput[]
    NOT?: ProjectDeliverableScalarWhereInput | ProjectDeliverableScalarWhereInput[]
    id?: StringFilter<"ProjectDeliverable"> | string
    projectId?: StringFilter<"ProjectDeliverable"> | string
    platform?: StringFilter<"ProjectDeliverable"> | string
    url?: StringFilter<"ProjectDeliverable"> | string
    notes?: StringNullableFilter<"ProjectDeliverable"> | string | null
    sortOrder?: IntFilter<"ProjectDeliverable"> | number
    createdAt?: DateTimeFilter<"ProjectDeliverable"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectDeliverable"> | Date | string
  }

  export type ProjectMessageUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMessageWhereUniqueInput
    update: XOR<ProjectMessageUpdateWithoutProjectInput, ProjectMessageUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMessageCreateWithoutProjectInput, ProjectMessageUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMessageUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMessageWhereUniqueInput
    data: XOR<ProjectMessageUpdateWithoutProjectInput, ProjectMessageUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMessageUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMessageScalarWhereInput
    data: XOR<ProjectMessageUpdateManyMutationInput, ProjectMessageUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectEscrowUpsertWithoutProjectInput = {
    update: XOR<ProjectEscrowUpdateWithoutProjectInput, ProjectEscrowUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectEscrowCreateWithoutProjectInput, ProjectEscrowUncheckedCreateWithoutProjectInput>
    where?: ProjectEscrowWhereInput
  }

  export type ProjectEscrowUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectEscrowWhereInput
    data: XOR<ProjectEscrowUpdateWithoutProjectInput, ProjectEscrowUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectEscrowUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
    brand?: UserUpdateOneRequiredWithoutBrandEscrowsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatorEscrowsNestedInput
  }

  export type ProjectEscrowUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEventUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectEventWhereUniqueInput
    update: XOR<ProjectEventUpdateWithoutProjectInput, ProjectEventUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectEventCreateWithoutProjectInput, ProjectEventUncheckedCreateWithoutProjectInput>
  }

  export type ProjectEventUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectEventWhereUniqueInput
    data: XOR<ProjectEventUpdateWithoutProjectInput, ProjectEventUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectEventUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectEventScalarWhereInput
    data: XOR<ProjectEventUpdateManyMutationInput, ProjectEventUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutDeliverablesInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDeliverablesInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDeliverablesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDeliverablesInput, ProjectUncheckedCreateWithoutDeliverablesInput>
  }

  export type ProjectUpsertWithoutDeliverablesInput = {
    update: XOR<ProjectUpdateWithoutDeliverablesInput, ProjectUncheckedUpdateWithoutDeliverablesInput>
    create: XOR<ProjectCreateWithoutDeliverablesInput, ProjectUncheckedCreateWithoutDeliverablesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDeliverablesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDeliverablesInput, ProjectUncheckedUpdateWithoutDeliverablesInput>
  }

  export type ProjectUpdateWithoutDeliverablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDeliverablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutMessagesInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMessagesInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMessagesInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutProjectMessagesInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProjectMessagesInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProjectMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectMessagesInput, UserUncheckedCreateWithoutProjectMessagesInput>
  }

  export type ProjectUpsertWithoutMessagesInput = {
    update: XOR<ProjectUpdateWithoutMessagesInput, ProjectUncheckedUpdateWithoutMessagesInput>
    create: XOR<ProjectCreateWithoutMessagesInput, ProjectUncheckedCreateWithoutMessagesInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMessagesInput, ProjectUncheckedUpdateWithoutMessagesInput>
  }

  export type ProjectUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectMessagesInput = {
    update: XOR<UserUpdateWithoutProjectMessagesInput, UserUncheckedUpdateWithoutProjectMessagesInput>
    create: XOR<UserCreateWithoutProjectMessagesInput, UserUncheckedCreateWithoutProjectMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectMessagesInput, UserUncheckedUpdateWithoutProjectMessagesInput>
  }

  export type UserUpdateWithoutProjectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ProjectCreateWithoutEscrowInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    events?: ProjectEventCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEscrowInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    events?: ProjectEventUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEscrowInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEscrowInput, ProjectUncheckedCreateWithoutEscrowInput>
  }

  export type UserCreateWithoutBrandEscrowsInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutBrandEscrowsInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutBrandEscrowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrandEscrowsInput, UserUncheckedCreateWithoutBrandEscrowsInput>
  }

  export type UserCreateWithoutCreatorEscrowsInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
  }

  export type UserUncheckedCreateWithoutCreatorEscrowsInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    projectEvents?: ProjectEventUncheckedCreateNestedManyWithoutActorInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
  }

  export type UserCreateOrConnectWithoutCreatorEscrowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatorEscrowsInput, UserUncheckedCreateWithoutCreatorEscrowsInput>
  }

  export type ProjectUpsertWithoutEscrowInput = {
    update: XOR<ProjectUpdateWithoutEscrowInput, ProjectUncheckedUpdateWithoutEscrowInput>
    create: XOR<ProjectCreateWithoutEscrowInput, ProjectUncheckedCreateWithoutEscrowInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEscrowInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEscrowInput, ProjectUncheckedUpdateWithoutEscrowInput>
  }

  export type ProjectUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEscrowInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutBrandEscrowsInput = {
    update: XOR<UserUpdateWithoutBrandEscrowsInput, UserUncheckedUpdateWithoutBrandEscrowsInput>
    create: XOR<UserCreateWithoutBrandEscrowsInput, UserUncheckedCreateWithoutBrandEscrowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBrandEscrowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBrandEscrowsInput, UserUncheckedUpdateWithoutBrandEscrowsInput>
  }

  export type UserUpdateWithoutBrandEscrowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutBrandEscrowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithoutCreatorEscrowsInput = {
    update: XOR<UserUpdateWithoutCreatorEscrowsInput, UserUncheckedUpdateWithoutCreatorEscrowsInput>
    create: XOR<UserCreateWithoutCreatorEscrowsInput, UserUncheckedCreateWithoutCreatorEscrowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatorEscrowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatorEscrowsInput, UserUncheckedUpdateWithoutCreatorEscrowsInput>
  }

  export type UserUpdateWithoutCreatorEscrowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatorEscrowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    projectEvents?: ProjectEventUncheckedUpdateManyWithoutActorNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ProjectCreateWithoutEventsInput = {
    id?: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bid: BidCreateNestedOneWithoutProjectInput
    brief: BriefCreateNestedOneWithoutProjectsInput
    brand: UserCreateNestedOneWithoutProjectsAsBrandInput
    creator: UserCreateNestedOneWithoutProjectsAsCreatorInput
    approvedBy?: UserCreateNestedOneWithoutProjectsApprovedInput
    deliverables?: ProjectDeliverableCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowCreateNestedOneWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEventsInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliverables?: ProjectDeliverableUncheckedCreateNestedManyWithoutProjectInput
    messages?: ProjectMessageUncheckedCreateNestedManyWithoutProjectInput
    escrow?: ProjectEscrowUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEventsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutProjectEventsInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageCreateNestedManyWithoutSenderInput
    brandEscrows?: ProjectEscrowCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutProjectEventsInput = {
    id?: string
    authUserId: string
    email: string
    displayName?: string | null
    bio?: string | null
    logoUrl?: string | null
    instagramUrl?: string | null
    youtubeUrl?: string | null
    tiktokUrl?: string | null
    twitterUrl?: string | null
    snapchatUrl?: string | null
    role?: $Enums.Role | null
    credits?: number
    earnings?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bidsAsCreator?: BidUncheckedCreateNestedManyWithoutCreatorInput
    briefsAsBrand?: BriefUncheckedCreateNestedManyWithoutBrandInput
    projectsAsBrand?: ProjectUncheckedCreateNestedManyWithoutBrandInput
    projectsAsCreator?: ProjectUncheckedCreateNestedManyWithoutCreatorInput
    projectsApproved?: ProjectUncheckedCreateNestedManyWithoutApprovedByInput
    projectMessages?: ProjectMessageUncheckedCreateNestedManyWithoutSenderInput
    brandEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutBrandInput
    creatorEscrows?: ProjectEscrowUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutProjectEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectEventsInput, UserUncheckedCreateWithoutProjectEventsInput>
  }

  export type ProjectUpsertWithoutEventsInput = {
    update: XOR<ProjectUpdateWithoutEventsInput, ProjectUncheckedUpdateWithoutEventsInput>
    create: XOR<ProjectCreateWithoutEventsInput, ProjectUncheckedCreateWithoutEventsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEventsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEventsInput, ProjectUncheckedUpdateWithoutEventsInput>
  }

  export type ProjectUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type UserUpsertWithoutProjectEventsInput = {
    update: XOR<UserUpdateWithoutProjectEventsInput, UserUncheckedUpdateWithoutProjectEventsInput>
    create: XOR<UserCreateWithoutProjectEventsInput, UserUncheckedCreateWithoutProjectEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectEventsInput, UserUncheckedUpdateWithoutProjectEventsInput>
  }

  export type UserUpdateWithoutProjectEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUpdateManyWithoutSenderNestedInput
    brandEscrows?: ProjectEscrowUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    youtubeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tiktokUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    snapchatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    credits?: IntFieldUpdateOperationsInput | number
    earnings?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bidsAsCreator?: BidUncheckedUpdateManyWithoutCreatorNestedInput
    briefsAsBrand?: BriefUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsBrand?: ProjectUncheckedUpdateManyWithoutBrandNestedInput
    projectsAsCreator?: ProjectUncheckedUpdateManyWithoutCreatorNestedInput
    projectsApproved?: ProjectUncheckedUpdateManyWithoutApprovedByNestedInput
    projectMessages?: ProjectMessageUncheckedUpdateManyWithoutSenderNestedInput
    brandEscrows?: ProjectEscrowUncheckedUpdateManyWithoutBrandNestedInput
    creatorEscrows?: ProjectEscrowUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type AuthAccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AuthSessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AuthAccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type BriefCreateManyBrandInput = {
    id?: string
    title: string
    productDescription: string
    reelScript?: string
    targetPlatforms?: BriefCreatetargetPlatformsInput | string[]
    productUrl: string
    minBidAmount: number
    maxBidAmount: number
    hook1: string
    hook2: string
    hook3: string
    status?: $Enums.BriefStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyBrandInput = {
    id?: string
    bidId: string
    briefId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyCreatorInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyApprovedByInput = {
    id?: string
    bidId: string
    briefId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMessageCreateManySenderInput = {
    id?: string
    projectId: string
    body: string
    createdAt?: Date | string
  }

  export type ProjectEventCreateManyActorInput = {
    id?: string
    projectId: string
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectEscrowCreateManyBrandInput = {
    id?: string
    projectId: string
    creatorId: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowCreateManyCreatorInput = {
    id?: string
    projectId: string
    brandId: string
    amount: number
    status?: $Enums.EscrowStatus
    holdPlacedAt?: Date | string
    autoReleaseAt?: Date | string | null
    releasedAt?: Date | string | null
    releaseReason?: $Enums.EscrowReleaseReason | null
  }

  export type BidUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brief?: BriefUpdateOneRequiredWithoutBidsNestedInput
    project?: ProjectUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    briefId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUncheckedUpdateOneWithoutBidNestedInput
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

  export type BriefUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    productDescription?: StringFieldUpdateOperationsInput | string
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
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
    reelScript?: StringFieldUpdateOperationsInput | string
    targetPlatforms?: BriefUpdatetargetPlatformsInput | string[]
    productUrl?: StringFieldUpdateOperationsInput | string
    minBidAmount?: IntFieldUpdateOperationsInput | number
    maxBidAmount?: IntFieldUpdateOperationsInput | number
    hook1?: StringFieldUpdateOperationsInput | string
    hook2?: StringFieldUpdateOperationsInput | string
    hook3?: StringFieldUpdateOperationsInput | string
    status?: EnumBriefStatusFieldUpdateOperationsInput | $Enums.BriefStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brief?: BriefUpdateOneRequiredWithoutProjectsNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    briefId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ProjectMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEventUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ProjectEventUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEventUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEscrowUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
    project?: ProjectUpdateOneRequiredWithoutEscrowNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatorEscrowsNestedInput
  }

  export type ProjectEscrowUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
    project?: ProjectUpdateOneRequiredWithoutEscrowNestedInput
    brand?: UserUpdateOneRequiredWithoutBrandEscrowsNestedInput
  }

  export type ProjectEscrowUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
  }

  export type ProjectEscrowUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumEscrowStatusFieldUpdateOperationsInput | $Enums.EscrowStatus
    holdPlacedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    autoReleaseAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releasedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    releaseReason?: NullableEnumEscrowReleaseReasonFieldUpdateOperationsInput | $Enums.EscrowReleaseReason | null
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
    bidId: string
    brandId: string
    creatorId: string
    agreedAmount: number
    status?: $Enums.ProjectStatus
    creatorSubmittedAt?: Date | string | null
    creatorSubmissionNote?: string | null
    brandApprovedAt?: Date | string | null
    approvedById?: string | null
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
    project?: ProjectUpdateOneWithoutBidNestedInput
  }

  export type BidUncheckedUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    pitchText?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumBidStatusFieldUpdateOperationsInput | $Enums.BidStatus
    creatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUncheckedUpdateOneWithoutBidNestedInput
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
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bid?: BidUpdateOneRequiredWithoutProjectNestedInput
    brand?: UserUpdateOneRequiredWithoutProjectsAsBrandNestedInput
    creator?: UserUpdateOneRequiredWithoutProjectsAsCreatorNestedInput
    approvedBy?: UserUpdateOneWithoutProjectsApprovedNestedInput
    deliverables?: ProjectDeliverableUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliverables?: ProjectDeliverableUncheckedUpdateManyWithoutProjectNestedInput
    messages?: ProjectMessageUncheckedUpdateManyWithoutProjectNestedInput
    escrow?: ProjectEscrowUncheckedUpdateOneWithoutProjectNestedInput
    events?: ProjectEventUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutBriefInput = {
    id?: StringFieldUpdateOperationsInput | string
    bidId?: StringFieldUpdateOperationsInput | string
    brandId?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    agreedAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    creatorSubmittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorSubmissionNote?: NullableStringFieldUpdateOperationsInput | string | null
    brandApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDeliverableCreateManyProjectInput = {
    id?: string
    platform: string
    url: string
    notes?: string | null
    sortOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectMessageCreateManyProjectInput = {
    id?: string
    senderId: string
    body: string
    createdAt?: Date | string
  }

  export type ProjectEventCreateManyProjectInput = {
    id?: string
    actorId?: string | null
    type: $Enums.ProjectEventType
    note?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ProjectDeliverableUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDeliverableUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDeliverableUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMessageUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutProjectMessagesNestedInput
  }

  export type ProjectMessageUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMessageUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEventUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutProjectEventsNestedInput
  }

  export type ProjectEventUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectEventUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumProjectEventTypeFieldUpdateOperationsInput | $Enums.ProjectEventType
    note?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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