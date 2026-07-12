
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
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Arbitre
 * 
 */
export type Arbitre = $Result.DefaultSelection<Prisma.$ArbitrePayload>
/**
 * Model Saison
 * 
 */
export type Saison = $Result.DefaultSelection<Prisma.$SaisonPayload>
/**
 * Model Division
 * 
 */
export type Division = $Result.DefaultSelection<Prisma.$DivisionPayload>
/**
 * Model Competition
 * 
 */
export type Competition = $Result.DefaultSelection<Prisma.$CompetitionPayload>
/**
 * Model Taux
 * 
 */
export type Taux = $Result.DefaultSelection<Prisma.$TauxPayload>
/**
 * Model Sanction
 * 
 */
export type Sanction = $Result.DefaultSelection<Prisma.$SanctionPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model FeuilleMatch
 * 
 */
export type FeuilleMatch = $Result.DefaultSelection<Prisma.$FeuilleMatchPayload>
/**
 * Model PresenceArbitre
 * 
 */
export type PresenceArbitre = $Result.DefaultSelection<Prisma.$PresenceArbitrePayload>
/**
 * Model SanctionAppliquee
 * 
 */
export type SanctionAppliquee = $Result.DefaultSelection<Prisma.$SanctionAppliqueePayload>
/**
 * Model ConfirmationPresence
 * 
 */
export type ConfirmationPresence = $Result.DefaultSelection<Prisma.$ConfirmationPresencePayload>
/**
 * Model RapportArbitre
 * 
 */
export type RapportArbitre = $Result.DefaultSelection<Prisma.$RapportArbitrePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Clubs
 * const clubs = await prisma.club.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Clubs
   * const clubs = await prisma.club.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.arbitre`: Exposes CRUD operations for the **Arbitre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Arbitres
    * const arbitres = await prisma.arbitre.findMany()
    * ```
    */
  get arbitre(): Prisma.ArbitreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saison`: Exposes CRUD operations for the **Saison** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saisons
    * const saisons = await prisma.saison.findMany()
    * ```
    */
  get saison(): Prisma.SaisonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.division`: Exposes CRUD operations for the **Division** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Divisions
    * const divisions = await prisma.division.findMany()
    * ```
    */
  get division(): Prisma.DivisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taux`: Exposes CRUD operations for the **Taux** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tauxes
    * const tauxes = await prisma.taux.findMany()
    * ```
    */
  get taux(): Prisma.TauxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanction`: Exposes CRUD operations for the **Sanction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sanctions
    * const sanctions = await prisma.sanction.findMany()
    * ```
    */
  get sanction(): Prisma.SanctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feuilleMatch`: Exposes CRUD operations for the **FeuilleMatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeuilleMatches
    * const feuilleMatches = await prisma.feuilleMatch.findMany()
    * ```
    */
  get feuilleMatch(): Prisma.FeuilleMatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.presenceArbitre`: Exposes CRUD operations for the **PresenceArbitre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PresenceArbitres
    * const presenceArbitres = await prisma.presenceArbitre.findMany()
    * ```
    */
  get presenceArbitre(): Prisma.PresenceArbitreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sanctionAppliquee`: Exposes CRUD operations for the **SanctionAppliquee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SanctionAppliquees
    * const sanctionAppliquees = await prisma.sanctionAppliquee.findMany()
    * ```
    */
  get sanctionAppliquee(): Prisma.SanctionAppliqueeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.confirmationPresence`: Exposes CRUD operations for the **ConfirmationPresence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfirmationPresences
    * const confirmationPresences = await prisma.confirmationPresence.findMany()
    * ```
    */
  get confirmationPresence(): Prisma.ConfirmationPresenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rapportArbitre`: Exposes CRUD operations for the **RapportArbitre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RapportArbitres
    * const rapportArbitres = await prisma.rapportArbitre.findMany()
    * ```
    */
  get rapportArbitre(): Prisma.RapportArbitreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Club: 'Club',
    Arbitre: 'Arbitre',
    Saison: 'Saison',
    Division: 'Division',
    Competition: 'Competition',
    Taux: 'Taux',
    Sanction: 'Sanction',
    Match: 'Match',
    FeuilleMatch: 'FeuilleMatch',
    PresenceArbitre: 'PresenceArbitre',
    SanctionAppliquee: 'SanctionAppliquee',
    ConfirmationPresence: 'ConfirmationPresence',
    RapportArbitre: 'RapportArbitre',
    User: 'User'
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
      modelProps: "club" | "arbitre" | "saison" | "division" | "competition" | "taux" | "sanction" | "match" | "feuilleMatch" | "presenceArbitre" | "sanctionAppliquee" | "confirmationPresence" | "rapportArbitre" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Arbitre: {
        payload: Prisma.$ArbitrePayload<ExtArgs>
        fields: Prisma.ArbitreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArbitreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArbitreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>
          }
          findFirst: {
            args: Prisma.ArbitreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArbitreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>
          }
          findMany: {
            args: Prisma.ArbitreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>[]
          }
          create: {
            args: Prisma.ArbitreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>
          }
          createMany: {
            args: Prisma.ArbitreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArbitreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>[]
          }
          delete: {
            args: Prisma.ArbitreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>
          }
          update: {
            args: Prisma.ArbitreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>
          }
          deleteMany: {
            args: Prisma.ArbitreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArbitreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArbitreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>[]
          }
          upsert: {
            args: Prisma.ArbitreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArbitrePayload>
          }
          aggregate: {
            args: Prisma.ArbitreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArbitre>
          }
          groupBy: {
            args: Prisma.ArbitreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArbitreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArbitreCountArgs<ExtArgs>
            result: $Utils.Optional<ArbitreCountAggregateOutputType> | number
          }
        }
      }
      Saison: {
        payload: Prisma.$SaisonPayload<ExtArgs>
        fields: Prisma.SaisonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaisonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaisonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>
          }
          findFirst: {
            args: Prisma.SaisonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaisonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>
          }
          findMany: {
            args: Prisma.SaisonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>[]
          }
          create: {
            args: Prisma.SaisonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>
          }
          createMany: {
            args: Prisma.SaisonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaisonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>[]
          }
          delete: {
            args: Prisma.SaisonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>
          }
          update: {
            args: Prisma.SaisonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>
          }
          deleteMany: {
            args: Prisma.SaisonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaisonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaisonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>[]
          }
          upsert: {
            args: Prisma.SaisonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaisonPayload>
          }
          aggregate: {
            args: Prisma.SaisonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaison>
          }
          groupBy: {
            args: Prisma.SaisonGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaisonGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaisonCountArgs<ExtArgs>
            result: $Utils.Optional<SaisonCountAggregateOutputType> | number
          }
        }
      }
      Division: {
        payload: Prisma.$DivisionPayload<ExtArgs>
        fields: Prisma.DivisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DivisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DivisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findFirst: {
            args: Prisma.DivisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DivisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          findMany: {
            args: Prisma.DivisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          create: {
            args: Prisma.DivisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          createMany: {
            args: Prisma.DivisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DivisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          delete: {
            args: Prisma.DivisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          update: {
            args: Prisma.DivisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          deleteMany: {
            args: Prisma.DivisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DivisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DivisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>[]
          }
          upsert: {
            args: Prisma.DivisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DivisionPayload>
          }
          aggregate: {
            args: Prisma.DivisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDivision>
          }
          groupBy: {
            args: Prisma.DivisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DivisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DivisionCountArgs<ExtArgs>
            result: $Utils.Optional<DivisionCountAggregateOutputType> | number
          }
        }
      }
      Competition: {
        payload: Prisma.$CompetitionPayload<ExtArgs>
        fields: Prisma.CompetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findMany: {
            args: Prisma.CompetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          create: {
            args: Prisma.CompetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          createMany: {
            args: Prisma.CompetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          delete: {
            args: Prisma.CompetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          update: {
            args: Prisma.CompetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.CompetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      Taux: {
        payload: Prisma.$TauxPayload<ExtArgs>
        fields: Prisma.TauxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TauxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TauxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>
          }
          findFirst: {
            args: Prisma.TauxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TauxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>
          }
          findMany: {
            args: Prisma.TauxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>[]
          }
          create: {
            args: Prisma.TauxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>
          }
          createMany: {
            args: Prisma.TauxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TauxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>[]
          }
          delete: {
            args: Prisma.TauxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>
          }
          update: {
            args: Prisma.TauxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>
          }
          deleteMany: {
            args: Prisma.TauxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TauxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TauxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>[]
          }
          upsert: {
            args: Prisma.TauxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TauxPayload>
          }
          aggregate: {
            args: Prisma.TauxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaux>
          }
          groupBy: {
            args: Prisma.TauxGroupByArgs<ExtArgs>
            result: $Utils.Optional<TauxGroupByOutputType>[]
          }
          count: {
            args: Prisma.TauxCountArgs<ExtArgs>
            result: $Utils.Optional<TauxCountAggregateOutputType> | number
          }
        }
      }
      Sanction: {
        payload: Prisma.$SanctionPayload<ExtArgs>
        fields: Prisma.SanctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>
          }
          findFirst: {
            args: Prisma.SanctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>
          }
          findMany: {
            args: Prisma.SanctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>[]
          }
          create: {
            args: Prisma.SanctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>
          }
          createMany: {
            args: Prisma.SanctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SanctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>[]
          }
          delete: {
            args: Prisma.SanctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>
          }
          update: {
            args: Prisma.SanctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>
          }
          deleteMany: {
            args: Prisma.SanctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SanctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>[]
          }
          upsert: {
            args: Prisma.SanctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionPayload>
          }
          aggregate: {
            args: Prisma.SanctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanction>
          }
          groupBy: {
            args: Prisma.SanctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanctionCountArgs<ExtArgs>
            result: $Utils.Optional<SanctionCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      FeuilleMatch: {
        payload: Prisma.$FeuilleMatchPayload<ExtArgs>
        fields: Prisma.FeuilleMatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeuilleMatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeuilleMatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>
          }
          findFirst: {
            args: Prisma.FeuilleMatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeuilleMatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>
          }
          findMany: {
            args: Prisma.FeuilleMatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>[]
          }
          create: {
            args: Prisma.FeuilleMatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>
          }
          createMany: {
            args: Prisma.FeuilleMatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeuilleMatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>[]
          }
          delete: {
            args: Prisma.FeuilleMatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>
          }
          update: {
            args: Prisma.FeuilleMatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>
          }
          deleteMany: {
            args: Prisma.FeuilleMatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeuilleMatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeuilleMatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>[]
          }
          upsert: {
            args: Prisma.FeuilleMatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeuilleMatchPayload>
          }
          aggregate: {
            args: Prisma.FeuilleMatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeuilleMatch>
          }
          groupBy: {
            args: Prisma.FeuilleMatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeuilleMatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeuilleMatchCountArgs<ExtArgs>
            result: $Utils.Optional<FeuilleMatchCountAggregateOutputType> | number
          }
        }
      }
      PresenceArbitre: {
        payload: Prisma.$PresenceArbitrePayload<ExtArgs>
        fields: Prisma.PresenceArbitreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PresenceArbitreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PresenceArbitreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>
          }
          findFirst: {
            args: Prisma.PresenceArbitreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PresenceArbitreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>
          }
          findMany: {
            args: Prisma.PresenceArbitreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>[]
          }
          create: {
            args: Prisma.PresenceArbitreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>
          }
          createMany: {
            args: Prisma.PresenceArbitreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PresenceArbitreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>[]
          }
          delete: {
            args: Prisma.PresenceArbitreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>
          }
          update: {
            args: Prisma.PresenceArbitreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>
          }
          deleteMany: {
            args: Prisma.PresenceArbitreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PresenceArbitreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PresenceArbitreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>[]
          }
          upsert: {
            args: Prisma.PresenceArbitreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PresenceArbitrePayload>
          }
          aggregate: {
            args: Prisma.PresenceArbitreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePresenceArbitre>
          }
          groupBy: {
            args: Prisma.PresenceArbitreGroupByArgs<ExtArgs>
            result: $Utils.Optional<PresenceArbitreGroupByOutputType>[]
          }
          count: {
            args: Prisma.PresenceArbitreCountArgs<ExtArgs>
            result: $Utils.Optional<PresenceArbitreCountAggregateOutputType> | number
          }
        }
      }
      SanctionAppliquee: {
        payload: Prisma.$SanctionAppliqueePayload<ExtArgs>
        fields: Prisma.SanctionAppliqueeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SanctionAppliqueeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SanctionAppliqueeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>
          }
          findFirst: {
            args: Prisma.SanctionAppliqueeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SanctionAppliqueeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>
          }
          findMany: {
            args: Prisma.SanctionAppliqueeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>[]
          }
          create: {
            args: Prisma.SanctionAppliqueeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>
          }
          createMany: {
            args: Prisma.SanctionAppliqueeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SanctionAppliqueeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>[]
          }
          delete: {
            args: Prisma.SanctionAppliqueeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>
          }
          update: {
            args: Prisma.SanctionAppliqueeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>
          }
          deleteMany: {
            args: Prisma.SanctionAppliqueeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SanctionAppliqueeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SanctionAppliqueeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>[]
          }
          upsert: {
            args: Prisma.SanctionAppliqueeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SanctionAppliqueePayload>
          }
          aggregate: {
            args: Prisma.SanctionAppliqueeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSanctionAppliquee>
          }
          groupBy: {
            args: Prisma.SanctionAppliqueeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SanctionAppliqueeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SanctionAppliqueeCountArgs<ExtArgs>
            result: $Utils.Optional<SanctionAppliqueeCountAggregateOutputType> | number
          }
        }
      }
      ConfirmationPresence: {
        payload: Prisma.$ConfirmationPresencePayload<ExtArgs>
        fields: Prisma.ConfirmationPresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmationPresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmationPresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>
          }
          findFirst: {
            args: Prisma.ConfirmationPresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmationPresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>
          }
          findMany: {
            args: Prisma.ConfirmationPresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>[]
          }
          create: {
            args: Prisma.ConfirmationPresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>
          }
          createMany: {
            args: Prisma.ConfirmationPresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfirmationPresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>[]
          }
          delete: {
            args: Prisma.ConfirmationPresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>
          }
          update: {
            args: Prisma.ConfirmationPresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>
          }
          deleteMany: {
            args: Prisma.ConfirmationPresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmationPresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfirmationPresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>[]
          }
          upsert: {
            args: Prisma.ConfirmationPresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmationPresencePayload>
          }
          aggregate: {
            args: Prisma.ConfirmationPresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfirmationPresence>
          }
          groupBy: {
            args: Prisma.ConfirmationPresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfirmationPresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmationPresenceCountArgs<ExtArgs>
            result: $Utils.Optional<ConfirmationPresenceCountAggregateOutputType> | number
          }
        }
      }
      RapportArbitre: {
        payload: Prisma.$RapportArbitrePayload<ExtArgs>
        fields: Prisma.RapportArbitreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RapportArbitreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RapportArbitreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>
          }
          findFirst: {
            args: Prisma.RapportArbitreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RapportArbitreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>
          }
          findMany: {
            args: Prisma.RapportArbitreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>[]
          }
          create: {
            args: Prisma.RapportArbitreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>
          }
          createMany: {
            args: Prisma.RapportArbitreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RapportArbitreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>[]
          }
          delete: {
            args: Prisma.RapportArbitreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>
          }
          update: {
            args: Prisma.RapportArbitreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>
          }
          deleteMany: {
            args: Prisma.RapportArbitreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RapportArbitreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RapportArbitreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>[]
          }
          upsert: {
            args: Prisma.RapportArbitreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RapportArbitrePayload>
          }
          aggregate: {
            args: Prisma.RapportArbitreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRapportArbitre>
          }
          groupBy: {
            args: Prisma.RapportArbitreGroupByArgs<ExtArgs>
            result: $Utils.Optional<RapportArbitreGroupByOutputType>[]
          }
          count: {
            args: Prisma.RapportArbitreCountArgs<ExtArgs>
            result: $Utils.Optional<RapportArbitreCountAggregateOutputType> | number
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
    club?: ClubOmit
    arbitre?: ArbitreOmit
    saison?: SaisonOmit
    division?: DivisionOmit
    competition?: CompetitionOmit
    taux?: TauxOmit
    sanction?: SanctionOmit
    match?: MatchOmit
    feuilleMatch?: FeuilleMatchOmit
    presenceArbitre?: PresenceArbitreOmit
    sanctionAppliquee?: SanctionAppliqueeOmit
    confirmationPresence?: ConfirmationPresenceOmit
    rapportArbitre?: RapportArbitreOmit
    user?: UserOmit
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
   * Models
   */

  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubAvgAggregateOutputType = {
    id: number | null
  }

  export type ClubSumAggregateOutputType = {
    id: number | null
  }

  export type ClubMinAggregateOutputType = {
    id: number | null
    nom: string | null
    ville: string | null
    stade: string | null
    couleurs: string | null
    coach: string | null
    telephone: string | null
    email: string | null
    notes: string | null
  }

  export type ClubMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    ville: string | null
    stade: string | null
    couleurs: string | null
    coach: string | null
    telephone: string | null
    email: string | null
    notes: string | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    nom: number
    ville: number
    stade: number
    couleurs: number
    coach: number
    telephone: number
    email: number
    notes: number
    _all: number
  }


  export type ClubAvgAggregateInputType = {
    id?: true
  }

  export type ClubSumAggregateInputType = {
    id?: true
  }

  export type ClubMinAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
    stade?: true
    couleurs?: true
    coach?: true
    telephone?: true
    email?: true
    notes?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
    stade?: true
    couleurs?: true
    coach?: true
    telephone?: true
    email?: true
    notes?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
    stade?: true
    couleurs?: true
    coach?: true
    telephone?: true
    email?: true
    notes?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _avg?: ClubAvgAggregateInputType
    _sum?: ClubSumAggregateInputType
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: number
    nom: string | null
    ville: string | null
    stade: string | null
    couleurs: string | null
    coach: string | null
    telephone: string | null
    email: string | null
    notes: string | null
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    ville?: boolean
    stade?: boolean
    couleurs?: boolean
    coach?: boolean
    telephone?: boolean
    email?: boolean
    notes?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    ville?: boolean
    stade?: boolean
    couleurs?: boolean
    coach?: boolean
    telephone?: boolean
    email?: boolean
    notes?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    ville?: boolean
    stade?: boolean
    couleurs?: boolean
    coach?: boolean
    telephone?: boolean
    email?: boolean
    notes?: boolean
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    nom?: boolean
    ville?: boolean
    stade?: boolean
    couleurs?: boolean
    coach?: boolean
    telephone?: boolean
    email?: boolean
    notes?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "ville" | "stade" | "couleurs" | "coach" | "telephone" | "email" | "notes", ExtArgs["result"]["club"]>

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string | null
      ville: string | null
      stade: string | null
      couleurs: string | null
      coach: string | null
      telephone: string | null
      email: string | null
      notes: string | null
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
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
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'Int'>
    readonly nom: FieldRef<"Club", 'String'>
    readonly ville: FieldRef<"Club", 'String'>
    readonly stade: FieldRef<"Club", 'String'>
    readonly couleurs: FieldRef<"Club", 'String'>
    readonly coach: FieldRef<"Club", 'String'>
    readonly telephone: FieldRef<"Club", 'String'>
    readonly email: FieldRef<"Club", 'String'>
    readonly notes: FieldRef<"Club", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data?: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
  }


  /**
   * Model Arbitre
   */

  export type AggregateArbitre = {
    _count: ArbitreCountAggregateOutputType | null
    _avg: ArbitreAvgAggregateOutputType | null
    _sum: ArbitreSumAggregateOutputType | null
    _min: ArbitreMinAggregateOutputType | null
    _max: ArbitreMaxAggregateOutputType | null
  }

  export type ArbitreAvgAggregateOutputType = {
    id: number | null
    nbMatchs: number | null
  }

  export type ArbitreSumAggregateOutputType = {
    id: number | null
    nbMatchs: number | null
  }

  export type ArbitreMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    type: string | null
    niveau: string | null
    telephone: string | null
    email: string | null
    licence: string | null
    statut: string | null
    nbMatchs: number | null
  }

  export type ArbitreMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    type: string | null
    niveau: string | null
    telephone: string | null
    email: string | null
    licence: string | null
    statut: string | null
    nbMatchs: number | null
  }

  export type ArbitreCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    type: number
    niveau: number
    telephone: number
    email: number
    licence: number
    statut: number
    nbMatchs: number
    _all: number
  }


  export type ArbitreAvgAggregateInputType = {
    id?: true
    nbMatchs?: true
  }

  export type ArbitreSumAggregateInputType = {
    id?: true
    nbMatchs?: true
  }

  export type ArbitreMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    type?: true
    niveau?: true
    telephone?: true
    email?: true
    licence?: true
    statut?: true
    nbMatchs?: true
  }

  export type ArbitreMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    type?: true
    niveau?: true
    telephone?: true
    email?: true
    licence?: true
    statut?: true
    nbMatchs?: true
  }

  export type ArbitreCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    type?: true
    niveau?: true
    telephone?: true
    email?: true
    licence?: true
    statut?: true
    nbMatchs?: true
    _all?: true
  }

  export type ArbitreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arbitre to aggregate.
     */
    where?: ArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitres to fetch.
     */
    orderBy?: ArbitreOrderByWithRelationInput | ArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Arbitres
    **/
    _count?: true | ArbitreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArbitreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArbitreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArbitreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArbitreMaxAggregateInputType
  }

  export type GetArbitreAggregateType<T extends ArbitreAggregateArgs> = {
        [P in keyof T & keyof AggregateArbitre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArbitre[P]>
      : GetScalarType<T[P], AggregateArbitre[P]>
  }




  export type ArbitreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArbitreWhereInput
    orderBy?: ArbitreOrderByWithAggregationInput | ArbitreOrderByWithAggregationInput[]
    by: ArbitreScalarFieldEnum[] | ArbitreScalarFieldEnum
    having?: ArbitreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArbitreCountAggregateInputType | true
    _avg?: ArbitreAvgAggregateInputType
    _sum?: ArbitreSumAggregateInputType
    _min?: ArbitreMinAggregateInputType
    _max?: ArbitreMaxAggregateInputType
  }

  export type ArbitreGroupByOutputType = {
    id: number
    nom: string | null
    prenom: string | null
    type: string | null
    niveau: string | null
    telephone: string | null
    email: string | null
    licence: string | null
    statut: string | null
    nbMatchs: number | null
    _count: ArbitreCountAggregateOutputType | null
    _avg: ArbitreAvgAggregateOutputType | null
    _sum: ArbitreSumAggregateOutputType | null
    _min: ArbitreMinAggregateOutputType | null
    _max: ArbitreMaxAggregateOutputType | null
  }

  type GetArbitreGroupByPayload<T extends ArbitreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArbitreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArbitreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArbitreGroupByOutputType[P]>
            : GetScalarType<T[P], ArbitreGroupByOutputType[P]>
        }
      >
    >


  export type ArbitreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    type?: boolean
    niveau?: boolean
    telephone?: boolean
    email?: boolean
    licence?: boolean
    statut?: boolean
    nbMatchs?: boolean
  }, ExtArgs["result"]["arbitre"]>

  export type ArbitreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    type?: boolean
    niveau?: boolean
    telephone?: boolean
    email?: boolean
    licence?: boolean
    statut?: boolean
    nbMatchs?: boolean
  }, ExtArgs["result"]["arbitre"]>

  export type ArbitreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    type?: boolean
    niveau?: boolean
    telephone?: boolean
    email?: boolean
    licence?: boolean
    statut?: boolean
    nbMatchs?: boolean
  }, ExtArgs["result"]["arbitre"]>

  export type ArbitreSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    type?: boolean
    niveau?: boolean
    telephone?: boolean
    email?: boolean
    licence?: boolean
    statut?: boolean
    nbMatchs?: boolean
  }

  export type ArbitreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "type" | "niveau" | "telephone" | "email" | "licence" | "statut" | "nbMatchs", ExtArgs["result"]["arbitre"]>

  export type $ArbitrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Arbitre"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string | null
      prenom: string | null
      type: string | null
      niveau: string | null
      telephone: string | null
      email: string | null
      licence: string | null
      statut: string | null
      nbMatchs: number | null
    }, ExtArgs["result"]["arbitre"]>
    composites: {}
  }

  type ArbitreGetPayload<S extends boolean | null | undefined | ArbitreDefaultArgs> = $Result.GetResult<Prisma.$ArbitrePayload, S>

  type ArbitreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArbitreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArbitreCountAggregateInputType | true
    }

  export interface ArbitreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Arbitre'], meta: { name: 'Arbitre' } }
    /**
     * Find zero or one Arbitre that matches the filter.
     * @param {ArbitreFindUniqueArgs} args - Arguments to find a Arbitre
     * @example
     * // Get one Arbitre
     * const arbitre = await prisma.arbitre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArbitreFindUniqueArgs>(args: SelectSubset<T, ArbitreFindUniqueArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Arbitre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArbitreFindUniqueOrThrowArgs} args - Arguments to find a Arbitre
     * @example
     * // Get one Arbitre
     * const arbitre = await prisma.arbitre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArbitreFindUniqueOrThrowArgs>(args: SelectSubset<T, ArbitreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arbitre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitreFindFirstArgs} args - Arguments to find a Arbitre
     * @example
     * // Get one Arbitre
     * const arbitre = await prisma.arbitre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArbitreFindFirstArgs>(args?: SelectSubset<T, ArbitreFindFirstArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Arbitre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitreFindFirstOrThrowArgs} args - Arguments to find a Arbitre
     * @example
     * // Get one Arbitre
     * const arbitre = await prisma.arbitre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArbitreFindFirstOrThrowArgs>(args?: SelectSubset<T, ArbitreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Arbitres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Arbitres
     * const arbitres = await prisma.arbitre.findMany()
     * 
     * // Get first 10 Arbitres
     * const arbitres = await prisma.arbitre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const arbitreWithIdOnly = await prisma.arbitre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArbitreFindManyArgs>(args?: SelectSubset<T, ArbitreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Arbitre.
     * @param {ArbitreCreateArgs} args - Arguments to create a Arbitre.
     * @example
     * // Create one Arbitre
     * const Arbitre = await prisma.arbitre.create({
     *   data: {
     *     // ... data to create a Arbitre
     *   }
     * })
     * 
     */
    create<T extends ArbitreCreateArgs>(args: SelectSubset<T, ArbitreCreateArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Arbitres.
     * @param {ArbitreCreateManyArgs} args - Arguments to create many Arbitres.
     * @example
     * // Create many Arbitres
     * const arbitre = await prisma.arbitre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArbitreCreateManyArgs>(args?: SelectSubset<T, ArbitreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Arbitres and returns the data saved in the database.
     * @param {ArbitreCreateManyAndReturnArgs} args - Arguments to create many Arbitres.
     * @example
     * // Create many Arbitres
     * const arbitre = await prisma.arbitre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Arbitres and only return the `id`
     * const arbitreWithIdOnly = await prisma.arbitre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArbitreCreateManyAndReturnArgs>(args?: SelectSubset<T, ArbitreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Arbitre.
     * @param {ArbitreDeleteArgs} args - Arguments to delete one Arbitre.
     * @example
     * // Delete one Arbitre
     * const Arbitre = await prisma.arbitre.delete({
     *   where: {
     *     // ... filter to delete one Arbitre
     *   }
     * })
     * 
     */
    delete<T extends ArbitreDeleteArgs>(args: SelectSubset<T, ArbitreDeleteArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Arbitre.
     * @param {ArbitreUpdateArgs} args - Arguments to update one Arbitre.
     * @example
     * // Update one Arbitre
     * const arbitre = await prisma.arbitre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArbitreUpdateArgs>(args: SelectSubset<T, ArbitreUpdateArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Arbitres.
     * @param {ArbitreDeleteManyArgs} args - Arguments to filter Arbitres to delete.
     * @example
     * // Delete a few Arbitres
     * const { count } = await prisma.arbitre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArbitreDeleteManyArgs>(args?: SelectSubset<T, ArbitreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arbitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Arbitres
     * const arbitre = await prisma.arbitre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArbitreUpdateManyArgs>(args: SelectSubset<T, ArbitreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Arbitres and returns the data updated in the database.
     * @param {ArbitreUpdateManyAndReturnArgs} args - Arguments to update many Arbitres.
     * @example
     * // Update many Arbitres
     * const arbitre = await prisma.arbitre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Arbitres and only return the `id`
     * const arbitreWithIdOnly = await prisma.arbitre.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArbitreUpdateManyAndReturnArgs>(args: SelectSubset<T, ArbitreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Arbitre.
     * @param {ArbitreUpsertArgs} args - Arguments to update or create a Arbitre.
     * @example
     * // Update or create a Arbitre
     * const arbitre = await prisma.arbitre.upsert({
     *   create: {
     *     // ... data to create a Arbitre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Arbitre we want to update
     *   }
     * })
     */
    upsert<T extends ArbitreUpsertArgs>(args: SelectSubset<T, ArbitreUpsertArgs<ExtArgs>>): Prisma__ArbitreClient<$Result.GetResult<Prisma.$ArbitrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Arbitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitreCountArgs} args - Arguments to filter Arbitres to count.
     * @example
     * // Count the number of Arbitres
     * const count = await prisma.arbitre.count({
     *   where: {
     *     // ... the filter for the Arbitres we want to count
     *   }
     * })
    **/
    count<T extends ArbitreCountArgs>(
      args?: Subset<T, ArbitreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArbitreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Arbitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArbitreAggregateArgs>(args: Subset<T, ArbitreAggregateArgs>): Prisma.PrismaPromise<GetArbitreAggregateType<T>>

    /**
     * Group by Arbitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArbitreGroupByArgs} args - Group by arguments.
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
      T extends ArbitreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArbitreGroupByArgs['orderBy'] }
        : { orderBy?: ArbitreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArbitreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArbitreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Arbitre model
   */
  readonly fields: ArbitreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Arbitre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArbitreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Arbitre model
   */
  interface ArbitreFieldRefs {
    readonly id: FieldRef<"Arbitre", 'Int'>
    readonly nom: FieldRef<"Arbitre", 'String'>
    readonly prenom: FieldRef<"Arbitre", 'String'>
    readonly type: FieldRef<"Arbitre", 'String'>
    readonly niveau: FieldRef<"Arbitre", 'String'>
    readonly telephone: FieldRef<"Arbitre", 'String'>
    readonly email: FieldRef<"Arbitre", 'String'>
    readonly licence: FieldRef<"Arbitre", 'String'>
    readonly statut: FieldRef<"Arbitre", 'String'>
    readonly nbMatchs: FieldRef<"Arbitre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Arbitre findUnique
   */
  export type ArbitreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * Filter, which Arbitre to fetch.
     */
    where: ArbitreWhereUniqueInput
  }

  /**
   * Arbitre findUniqueOrThrow
   */
  export type ArbitreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * Filter, which Arbitre to fetch.
     */
    where: ArbitreWhereUniqueInput
  }

  /**
   * Arbitre findFirst
   */
  export type ArbitreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * Filter, which Arbitre to fetch.
     */
    where?: ArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitres to fetch.
     */
    orderBy?: ArbitreOrderByWithRelationInput | ArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arbitres.
     */
    cursor?: ArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arbitres.
     */
    distinct?: ArbitreScalarFieldEnum | ArbitreScalarFieldEnum[]
  }

  /**
   * Arbitre findFirstOrThrow
   */
  export type ArbitreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * Filter, which Arbitre to fetch.
     */
    where?: ArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitres to fetch.
     */
    orderBy?: ArbitreOrderByWithRelationInput | ArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Arbitres.
     */
    cursor?: ArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arbitres.
     */
    distinct?: ArbitreScalarFieldEnum | ArbitreScalarFieldEnum[]
  }

  /**
   * Arbitre findMany
   */
  export type ArbitreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * Filter, which Arbitres to fetch.
     */
    where?: ArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Arbitres to fetch.
     */
    orderBy?: ArbitreOrderByWithRelationInput | ArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Arbitres.
     */
    cursor?: ArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Arbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Arbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Arbitres.
     */
    distinct?: ArbitreScalarFieldEnum | ArbitreScalarFieldEnum[]
  }

  /**
   * Arbitre create
   */
  export type ArbitreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * The data needed to create a Arbitre.
     */
    data?: XOR<ArbitreCreateInput, ArbitreUncheckedCreateInput>
  }

  /**
   * Arbitre createMany
   */
  export type ArbitreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Arbitres.
     */
    data: ArbitreCreateManyInput | ArbitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arbitre createManyAndReturn
   */
  export type ArbitreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * The data used to create many Arbitres.
     */
    data: ArbitreCreateManyInput | ArbitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Arbitre update
   */
  export type ArbitreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * The data needed to update a Arbitre.
     */
    data: XOR<ArbitreUpdateInput, ArbitreUncheckedUpdateInput>
    /**
     * Choose, which Arbitre to update.
     */
    where: ArbitreWhereUniqueInput
  }

  /**
   * Arbitre updateMany
   */
  export type ArbitreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Arbitres.
     */
    data: XOR<ArbitreUpdateManyMutationInput, ArbitreUncheckedUpdateManyInput>
    /**
     * Filter which Arbitres to update
     */
    where?: ArbitreWhereInput
    /**
     * Limit how many Arbitres to update.
     */
    limit?: number
  }

  /**
   * Arbitre updateManyAndReturn
   */
  export type ArbitreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * The data used to update Arbitres.
     */
    data: XOR<ArbitreUpdateManyMutationInput, ArbitreUncheckedUpdateManyInput>
    /**
     * Filter which Arbitres to update
     */
    where?: ArbitreWhereInput
    /**
     * Limit how many Arbitres to update.
     */
    limit?: number
  }

  /**
   * Arbitre upsert
   */
  export type ArbitreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * The filter to search for the Arbitre to update in case it exists.
     */
    where: ArbitreWhereUniqueInput
    /**
     * In case the Arbitre found by the `where` argument doesn't exist, create a new Arbitre with this data.
     */
    create: XOR<ArbitreCreateInput, ArbitreUncheckedCreateInput>
    /**
     * In case the Arbitre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArbitreUpdateInput, ArbitreUncheckedUpdateInput>
  }

  /**
   * Arbitre delete
   */
  export type ArbitreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
    /**
     * Filter which Arbitre to delete.
     */
    where: ArbitreWhereUniqueInput
  }

  /**
   * Arbitre deleteMany
   */
  export type ArbitreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Arbitres to delete
     */
    where?: ArbitreWhereInput
    /**
     * Limit how many Arbitres to delete.
     */
    limit?: number
  }

  /**
   * Arbitre without action
   */
  export type ArbitreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Arbitre
     */
    select?: ArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Arbitre
     */
    omit?: ArbitreOmit<ExtArgs> | null
  }


  /**
   * Model Saison
   */

  export type AggregateSaison = {
    _count: SaisonCountAggregateOutputType | null
    _avg: SaisonAvgAggregateOutputType | null
    _sum: SaisonSumAggregateOutputType | null
    _min: SaisonMinAggregateOutputType | null
    _max: SaisonMaxAggregateOutputType | null
  }

  export type SaisonAvgAggregateOutputType = {
    id: number | null
  }

  export type SaisonSumAggregateOutputType = {
    id: number | null
  }

  export type SaisonMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    dateDebut: string | null
    dateFin: string | null
    statut: string | null
  }

  export type SaisonMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    dateDebut: string | null
    dateFin: string | null
    statut: string | null
  }

  export type SaisonCountAggregateOutputType = {
    id: number
    libelle: number
    dateDebut: number
    dateFin: number
    statut: number
    _all: number
  }


  export type SaisonAvgAggregateInputType = {
    id?: true
  }

  export type SaisonSumAggregateInputType = {
    id?: true
  }

  export type SaisonMinAggregateInputType = {
    id?: true
    libelle?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
  }

  export type SaisonMaxAggregateInputType = {
    id?: true
    libelle?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
  }

  export type SaisonCountAggregateInputType = {
    id?: true
    libelle?: true
    dateDebut?: true
    dateFin?: true
    statut?: true
    _all?: true
  }

  export type SaisonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saison to aggregate.
     */
    where?: SaisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saisons to fetch.
     */
    orderBy?: SaisonOrderByWithRelationInput | SaisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Saisons
    **/
    _count?: true | SaisonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaisonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaisonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaisonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaisonMaxAggregateInputType
  }

  export type GetSaisonAggregateType<T extends SaisonAggregateArgs> = {
        [P in keyof T & keyof AggregateSaison]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaison[P]>
      : GetScalarType<T[P], AggregateSaison[P]>
  }




  export type SaisonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaisonWhereInput
    orderBy?: SaisonOrderByWithAggregationInput | SaisonOrderByWithAggregationInput[]
    by: SaisonScalarFieldEnum[] | SaisonScalarFieldEnum
    having?: SaisonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaisonCountAggregateInputType | true
    _avg?: SaisonAvgAggregateInputType
    _sum?: SaisonSumAggregateInputType
    _min?: SaisonMinAggregateInputType
    _max?: SaisonMaxAggregateInputType
  }

  export type SaisonGroupByOutputType = {
    id: number
    libelle: string | null
    dateDebut: string | null
    dateFin: string | null
    statut: string | null
    _count: SaisonCountAggregateOutputType | null
    _avg: SaisonAvgAggregateOutputType | null
    _sum: SaisonSumAggregateOutputType | null
    _min: SaisonMinAggregateOutputType | null
    _max: SaisonMaxAggregateOutputType | null
  }

  type GetSaisonGroupByPayload<T extends SaisonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaisonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaisonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaisonGroupByOutputType[P]>
            : GetScalarType<T[P], SaisonGroupByOutputType[P]>
        }
      >
    >


  export type SaisonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
  }, ExtArgs["result"]["saison"]>

  export type SaisonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
  }, ExtArgs["result"]["saison"]>

  export type SaisonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
  }, ExtArgs["result"]["saison"]>

  export type SaisonSelectScalar = {
    id?: boolean
    libelle?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    statut?: boolean
  }

  export type SaisonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "dateDebut" | "dateFin" | "statut", ExtArgs["result"]["saison"]>

  export type $SaisonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Saison"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string | null
      dateDebut: string | null
      dateFin: string | null
      statut: string | null
    }, ExtArgs["result"]["saison"]>
    composites: {}
  }

  type SaisonGetPayload<S extends boolean | null | undefined | SaisonDefaultArgs> = $Result.GetResult<Prisma.$SaisonPayload, S>

  type SaisonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaisonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaisonCountAggregateInputType | true
    }

  export interface SaisonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Saison'], meta: { name: 'Saison' } }
    /**
     * Find zero or one Saison that matches the filter.
     * @param {SaisonFindUniqueArgs} args - Arguments to find a Saison
     * @example
     * // Get one Saison
     * const saison = await prisma.saison.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaisonFindUniqueArgs>(args: SelectSubset<T, SaisonFindUniqueArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saison that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaisonFindUniqueOrThrowArgs} args - Arguments to find a Saison
     * @example
     * // Get one Saison
     * const saison = await prisma.saison.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaisonFindUniqueOrThrowArgs>(args: SelectSubset<T, SaisonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saison that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaisonFindFirstArgs} args - Arguments to find a Saison
     * @example
     * // Get one Saison
     * const saison = await prisma.saison.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaisonFindFirstArgs>(args?: SelectSubset<T, SaisonFindFirstArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saison that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaisonFindFirstOrThrowArgs} args - Arguments to find a Saison
     * @example
     * // Get one Saison
     * const saison = await prisma.saison.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaisonFindFirstOrThrowArgs>(args?: SelectSubset<T, SaisonFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saisons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaisonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saisons
     * const saisons = await prisma.saison.findMany()
     * 
     * // Get first 10 Saisons
     * const saisons = await prisma.saison.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saisonWithIdOnly = await prisma.saison.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaisonFindManyArgs>(args?: SelectSubset<T, SaisonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saison.
     * @param {SaisonCreateArgs} args - Arguments to create a Saison.
     * @example
     * // Create one Saison
     * const Saison = await prisma.saison.create({
     *   data: {
     *     // ... data to create a Saison
     *   }
     * })
     * 
     */
    create<T extends SaisonCreateArgs>(args: SelectSubset<T, SaisonCreateArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saisons.
     * @param {SaisonCreateManyArgs} args - Arguments to create many Saisons.
     * @example
     * // Create many Saisons
     * const saison = await prisma.saison.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaisonCreateManyArgs>(args?: SelectSubset<T, SaisonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saisons and returns the data saved in the database.
     * @param {SaisonCreateManyAndReturnArgs} args - Arguments to create many Saisons.
     * @example
     * // Create many Saisons
     * const saison = await prisma.saison.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saisons and only return the `id`
     * const saisonWithIdOnly = await prisma.saison.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaisonCreateManyAndReturnArgs>(args?: SelectSubset<T, SaisonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Saison.
     * @param {SaisonDeleteArgs} args - Arguments to delete one Saison.
     * @example
     * // Delete one Saison
     * const Saison = await prisma.saison.delete({
     *   where: {
     *     // ... filter to delete one Saison
     *   }
     * })
     * 
     */
    delete<T extends SaisonDeleteArgs>(args: SelectSubset<T, SaisonDeleteArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saison.
     * @param {SaisonUpdateArgs} args - Arguments to update one Saison.
     * @example
     * // Update one Saison
     * const saison = await prisma.saison.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaisonUpdateArgs>(args: SelectSubset<T, SaisonUpdateArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saisons.
     * @param {SaisonDeleteManyArgs} args - Arguments to filter Saisons to delete.
     * @example
     * // Delete a few Saisons
     * const { count } = await prisma.saison.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaisonDeleteManyArgs>(args?: SelectSubset<T, SaisonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaisonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saisons
     * const saison = await prisma.saison.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaisonUpdateManyArgs>(args: SelectSubset<T, SaisonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saisons and returns the data updated in the database.
     * @param {SaisonUpdateManyAndReturnArgs} args - Arguments to update many Saisons.
     * @example
     * // Update many Saisons
     * const saison = await prisma.saison.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saisons and only return the `id`
     * const saisonWithIdOnly = await prisma.saison.updateManyAndReturn({
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
    updateManyAndReturn<T extends SaisonUpdateManyAndReturnArgs>(args: SelectSubset<T, SaisonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Saison.
     * @param {SaisonUpsertArgs} args - Arguments to update or create a Saison.
     * @example
     * // Update or create a Saison
     * const saison = await prisma.saison.upsert({
     *   create: {
     *     // ... data to create a Saison
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saison we want to update
     *   }
     * })
     */
    upsert<T extends SaisonUpsertArgs>(args: SelectSubset<T, SaisonUpsertArgs<ExtArgs>>): Prisma__SaisonClient<$Result.GetResult<Prisma.$SaisonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saisons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaisonCountArgs} args - Arguments to filter Saisons to count.
     * @example
     * // Count the number of Saisons
     * const count = await prisma.saison.count({
     *   where: {
     *     // ... the filter for the Saisons we want to count
     *   }
     * })
    **/
    count<T extends SaisonCountArgs>(
      args?: Subset<T, SaisonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaisonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaisonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaisonAggregateArgs>(args: Subset<T, SaisonAggregateArgs>): Prisma.PrismaPromise<GetSaisonAggregateType<T>>

    /**
     * Group by Saison.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaisonGroupByArgs} args - Group by arguments.
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
      T extends SaisonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaisonGroupByArgs['orderBy'] }
        : { orderBy?: SaisonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaisonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaisonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Saison model
   */
  readonly fields: SaisonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Saison.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaisonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Saison model
   */
  interface SaisonFieldRefs {
    readonly id: FieldRef<"Saison", 'Int'>
    readonly libelle: FieldRef<"Saison", 'String'>
    readonly dateDebut: FieldRef<"Saison", 'String'>
    readonly dateFin: FieldRef<"Saison", 'String'>
    readonly statut: FieldRef<"Saison", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Saison findUnique
   */
  export type SaisonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * Filter, which Saison to fetch.
     */
    where: SaisonWhereUniqueInput
  }

  /**
   * Saison findUniqueOrThrow
   */
  export type SaisonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * Filter, which Saison to fetch.
     */
    where: SaisonWhereUniqueInput
  }

  /**
   * Saison findFirst
   */
  export type SaisonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * Filter, which Saison to fetch.
     */
    where?: SaisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saisons to fetch.
     */
    orderBy?: SaisonOrderByWithRelationInput | SaisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saisons.
     */
    cursor?: SaisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saisons.
     */
    distinct?: SaisonScalarFieldEnum | SaisonScalarFieldEnum[]
  }

  /**
   * Saison findFirstOrThrow
   */
  export type SaisonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * Filter, which Saison to fetch.
     */
    where?: SaisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saisons to fetch.
     */
    orderBy?: SaisonOrderByWithRelationInput | SaisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saisons.
     */
    cursor?: SaisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saisons.
     */
    distinct?: SaisonScalarFieldEnum | SaisonScalarFieldEnum[]
  }

  /**
   * Saison findMany
   */
  export type SaisonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * Filter, which Saisons to fetch.
     */
    where?: SaisonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saisons to fetch.
     */
    orderBy?: SaisonOrderByWithRelationInput | SaisonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Saisons.
     */
    cursor?: SaisonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saisons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saisons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saisons.
     */
    distinct?: SaisonScalarFieldEnum | SaisonScalarFieldEnum[]
  }

  /**
   * Saison create
   */
  export type SaisonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * The data needed to create a Saison.
     */
    data?: XOR<SaisonCreateInput, SaisonUncheckedCreateInput>
  }

  /**
   * Saison createMany
   */
  export type SaisonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saisons.
     */
    data: SaisonCreateManyInput | SaisonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Saison createManyAndReturn
   */
  export type SaisonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * The data used to create many Saisons.
     */
    data: SaisonCreateManyInput | SaisonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Saison update
   */
  export type SaisonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * The data needed to update a Saison.
     */
    data: XOR<SaisonUpdateInput, SaisonUncheckedUpdateInput>
    /**
     * Choose, which Saison to update.
     */
    where: SaisonWhereUniqueInput
  }

  /**
   * Saison updateMany
   */
  export type SaisonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Saisons.
     */
    data: XOR<SaisonUpdateManyMutationInput, SaisonUncheckedUpdateManyInput>
    /**
     * Filter which Saisons to update
     */
    where?: SaisonWhereInput
    /**
     * Limit how many Saisons to update.
     */
    limit?: number
  }

  /**
   * Saison updateManyAndReturn
   */
  export type SaisonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * The data used to update Saisons.
     */
    data: XOR<SaisonUpdateManyMutationInput, SaisonUncheckedUpdateManyInput>
    /**
     * Filter which Saisons to update
     */
    where?: SaisonWhereInput
    /**
     * Limit how many Saisons to update.
     */
    limit?: number
  }

  /**
   * Saison upsert
   */
  export type SaisonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * The filter to search for the Saison to update in case it exists.
     */
    where: SaisonWhereUniqueInput
    /**
     * In case the Saison found by the `where` argument doesn't exist, create a new Saison with this data.
     */
    create: XOR<SaisonCreateInput, SaisonUncheckedCreateInput>
    /**
     * In case the Saison was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaisonUpdateInput, SaisonUncheckedUpdateInput>
  }

  /**
   * Saison delete
   */
  export type SaisonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
    /**
     * Filter which Saison to delete.
     */
    where: SaisonWhereUniqueInput
  }

  /**
   * Saison deleteMany
   */
  export type SaisonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saisons to delete
     */
    where?: SaisonWhereInput
    /**
     * Limit how many Saisons to delete.
     */
    limit?: number
  }

  /**
   * Saison without action
   */
  export type SaisonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Saison
     */
    select?: SaisonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Saison
     */
    omit?: SaisonOmit<ExtArgs> | null
  }


  /**
   * Model Division
   */

  export type AggregateDivision = {
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  export type DivisionAvgAggregateOutputType = {
    id: number | null
    saisonId: number | null
    rang: number | null
    clubIds: number | null
    arbitreIds: number | null
  }

  export type DivisionSumAggregateOutputType = {
    id: number | null
    saisonId: number | null
    rang: number | null
    clubIds: number[]
    arbitreIds: number[]
  }

  export type DivisionMinAggregateOutputType = {
    id: number | null
    saisonId: number | null
    nom: string | null
    rang: number | null
  }

  export type DivisionMaxAggregateOutputType = {
    id: number | null
    saisonId: number | null
    nom: string | null
    rang: number | null
  }

  export type DivisionCountAggregateOutputType = {
    id: number
    saisonId: number
    nom: number
    rang: number
    clubIds: number
    arbitreIds: number
    _all: number
  }


  export type DivisionAvgAggregateInputType = {
    id?: true
    saisonId?: true
    rang?: true
    clubIds?: true
    arbitreIds?: true
  }

  export type DivisionSumAggregateInputType = {
    id?: true
    saisonId?: true
    rang?: true
    clubIds?: true
    arbitreIds?: true
  }

  export type DivisionMinAggregateInputType = {
    id?: true
    saisonId?: true
    nom?: true
    rang?: true
  }

  export type DivisionMaxAggregateInputType = {
    id?: true
    saisonId?: true
    nom?: true
    rang?: true
  }

  export type DivisionCountAggregateInputType = {
    id?: true
    saisonId?: true
    nom?: true
    rang?: true
    clubIds?: true
    arbitreIds?: true
    _all?: true
  }

  export type DivisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Division to aggregate.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Divisions
    **/
    _count?: true | DivisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DivisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DivisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DivisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DivisionMaxAggregateInputType
  }

  export type GetDivisionAggregateType<T extends DivisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDivision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDivision[P]>
      : GetScalarType<T[P], AggregateDivision[P]>
  }




  export type DivisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DivisionWhereInput
    orderBy?: DivisionOrderByWithAggregationInput | DivisionOrderByWithAggregationInput[]
    by: DivisionScalarFieldEnum[] | DivisionScalarFieldEnum
    having?: DivisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DivisionCountAggregateInputType | true
    _avg?: DivisionAvgAggregateInputType
    _sum?: DivisionSumAggregateInputType
    _min?: DivisionMinAggregateInputType
    _max?: DivisionMaxAggregateInputType
  }

  export type DivisionGroupByOutputType = {
    id: number
    saisonId: number | null
    nom: string | null
    rang: number | null
    clubIds: number[]
    arbitreIds: number[]
    _count: DivisionCountAggregateOutputType | null
    _avg: DivisionAvgAggregateOutputType | null
    _sum: DivisionSumAggregateOutputType | null
    _min: DivisionMinAggregateOutputType | null
    _max: DivisionMaxAggregateOutputType | null
  }

  type GetDivisionGroupByPayload<T extends DivisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DivisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DivisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DivisionGroupByOutputType[P]>
            : GetScalarType<T[P], DivisionGroupByOutputType[P]>
        }
      >
    >


  export type DivisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    rang?: boolean
    clubIds?: boolean
    arbitreIds?: boolean
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    rang?: boolean
    clubIds?: boolean
    arbitreIds?: boolean
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    rang?: boolean
    clubIds?: boolean
    arbitreIds?: boolean
  }, ExtArgs["result"]["division"]>

  export type DivisionSelectScalar = {
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    rang?: boolean
    clubIds?: boolean
    arbitreIds?: boolean
  }

  export type DivisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saisonId" | "nom" | "rang" | "clubIds" | "arbitreIds", ExtArgs["result"]["division"]>

  export type $DivisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Division"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saisonId: number | null
      nom: string | null
      rang: number | null
      clubIds: number[]
      arbitreIds: number[]
    }, ExtArgs["result"]["division"]>
    composites: {}
  }

  type DivisionGetPayload<S extends boolean | null | undefined | DivisionDefaultArgs> = $Result.GetResult<Prisma.$DivisionPayload, S>

  type DivisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DivisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DivisionCountAggregateInputType | true
    }

  export interface DivisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Division'], meta: { name: 'Division' } }
    /**
     * Find zero or one Division that matches the filter.
     * @param {DivisionFindUniqueArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DivisionFindUniqueArgs>(args: SelectSubset<T, DivisionFindUniqueArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Division that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DivisionFindUniqueOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DivisionFindUniqueOrThrowArgs>(args: SelectSubset<T, DivisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DivisionFindFirstArgs>(args?: SelectSubset<T, DivisionFindFirstArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Division that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindFirstOrThrowArgs} args - Arguments to find a Division
     * @example
     * // Get one Division
     * const division = await prisma.division.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DivisionFindFirstOrThrowArgs>(args?: SelectSubset<T, DivisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Divisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Divisions
     * const divisions = await prisma.division.findMany()
     * 
     * // Get first 10 Divisions
     * const divisions = await prisma.division.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const divisionWithIdOnly = await prisma.division.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DivisionFindManyArgs>(args?: SelectSubset<T, DivisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Division.
     * @param {DivisionCreateArgs} args - Arguments to create a Division.
     * @example
     * // Create one Division
     * const Division = await prisma.division.create({
     *   data: {
     *     // ... data to create a Division
     *   }
     * })
     * 
     */
    create<T extends DivisionCreateArgs>(args: SelectSubset<T, DivisionCreateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Divisions.
     * @param {DivisionCreateManyArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DivisionCreateManyArgs>(args?: SelectSubset<T, DivisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Divisions and returns the data saved in the database.
     * @param {DivisionCreateManyAndReturnArgs} args - Arguments to create many Divisions.
     * @example
     * // Create many Divisions
     * const division = await prisma.division.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Divisions and only return the `id`
     * const divisionWithIdOnly = await prisma.division.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DivisionCreateManyAndReturnArgs>(args?: SelectSubset<T, DivisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Division.
     * @param {DivisionDeleteArgs} args - Arguments to delete one Division.
     * @example
     * // Delete one Division
     * const Division = await prisma.division.delete({
     *   where: {
     *     // ... filter to delete one Division
     *   }
     * })
     * 
     */
    delete<T extends DivisionDeleteArgs>(args: SelectSubset<T, DivisionDeleteArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Division.
     * @param {DivisionUpdateArgs} args - Arguments to update one Division.
     * @example
     * // Update one Division
     * const division = await prisma.division.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DivisionUpdateArgs>(args: SelectSubset<T, DivisionUpdateArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Divisions.
     * @param {DivisionDeleteManyArgs} args - Arguments to filter Divisions to delete.
     * @example
     * // Delete a few Divisions
     * const { count } = await prisma.division.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DivisionDeleteManyArgs>(args?: SelectSubset<T, DivisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DivisionUpdateManyArgs>(args: SelectSubset<T, DivisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Divisions and returns the data updated in the database.
     * @param {DivisionUpdateManyAndReturnArgs} args - Arguments to update many Divisions.
     * @example
     * // Update many Divisions
     * const division = await prisma.division.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Divisions and only return the `id`
     * const divisionWithIdOnly = await prisma.division.updateManyAndReturn({
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
    updateManyAndReturn<T extends DivisionUpdateManyAndReturnArgs>(args: SelectSubset<T, DivisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Division.
     * @param {DivisionUpsertArgs} args - Arguments to update or create a Division.
     * @example
     * // Update or create a Division
     * const division = await prisma.division.upsert({
     *   create: {
     *     // ... data to create a Division
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Division we want to update
     *   }
     * })
     */
    upsert<T extends DivisionUpsertArgs>(args: SelectSubset<T, DivisionUpsertArgs<ExtArgs>>): Prisma__DivisionClient<$Result.GetResult<Prisma.$DivisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Divisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionCountArgs} args - Arguments to filter Divisions to count.
     * @example
     * // Count the number of Divisions
     * const count = await prisma.division.count({
     *   where: {
     *     // ... the filter for the Divisions we want to count
     *   }
     * })
    **/
    count<T extends DivisionCountArgs>(
      args?: Subset<T, DivisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DivisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DivisionAggregateArgs>(args: Subset<T, DivisionAggregateArgs>): Prisma.PrismaPromise<GetDivisionAggregateType<T>>

    /**
     * Group by Division.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DivisionGroupByArgs} args - Group by arguments.
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
      T extends DivisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DivisionGroupByArgs['orderBy'] }
        : { orderBy?: DivisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DivisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDivisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Division model
   */
  readonly fields: DivisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Division.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DivisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Division model
   */
  interface DivisionFieldRefs {
    readonly id: FieldRef<"Division", 'Int'>
    readonly saisonId: FieldRef<"Division", 'Int'>
    readonly nom: FieldRef<"Division", 'String'>
    readonly rang: FieldRef<"Division", 'Int'>
    readonly clubIds: FieldRef<"Division", 'Int[]'>
    readonly arbitreIds: FieldRef<"Division", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * Division findUnique
   */
  export type DivisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findUniqueOrThrow
   */
  export type DivisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division findFirst
   */
  export type DivisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findFirstOrThrow
   */
  export type DivisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Filter, which Division to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division findMany
   */
  export type DivisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Filter, which Divisions to fetch.
     */
    where?: DivisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Divisions to fetch.
     */
    orderBy?: DivisionOrderByWithRelationInput | DivisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Divisions.
     */
    cursor?: DivisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Divisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Divisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Divisions.
     */
    distinct?: DivisionScalarFieldEnum | DivisionScalarFieldEnum[]
  }

  /**
   * Division create
   */
  export type DivisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data needed to create a Division.
     */
    data?: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
  }

  /**
   * Division createMany
   */
  export type DivisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Division createManyAndReturn
   */
  export type DivisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data used to create many Divisions.
     */
    data: DivisionCreateManyInput | DivisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Division update
   */
  export type DivisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data needed to update a Division.
     */
    data: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
    /**
     * Choose, which Division to update.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division updateMany
   */
  export type DivisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to update.
     */
    limit?: number
  }

  /**
   * Division updateManyAndReturn
   */
  export type DivisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The data used to update Divisions.
     */
    data: XOR<DivisionUpdateManyMutationInput, DivisionUncheckedUpdateManyInput>
    /**
     * Filter which Divisions to update
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to update.
     */
    limit?: number
  }

  /**
   * Division upsert
   */
  export type DivisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * The filter to search for the Division to update in case it exists.
     */
    where: DivisionWhereUniqueInput
    /**
     * In case the Division found by the `where` argument doesn't exist, create a new Division with this data.
     */
    create: XOR<DivisionCreateInput, DivisionUncheckedCreateInput>
    /**
     * In case the Division was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DivisionUpdateInput, DivisionUncheckedUpdateInput>
  }

  /**
   * Division delete
   */
  export type DivisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
    /**
     * Filter which Division to delete.
     */
    where: DivisionWhereUniqueInput
  }

  /**
   * Division deleteMany
   */
  export type DivisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Divisions to delete
     */
    where?: DivisionWhereInput
    /**
     * Limit how many Divisions to delete.
     */
    limit?: number
  }

  /**
   * Division without action
   */
  export type DivisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Division
     */
    select?: DivisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Division
     */
    omit?: DivisionOmit<ExtArgs> | null
  }


  /**
   * Model Competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    id: number | null
    saisonId: number | null
    divisionIds: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    id: number | null
    saisonId: number | null
    divisionIds: number[]
  }

  export type CompetitionMinAggregateOutputType = {
    id: number | null
    saisonId: number | null
    nom: string | null
    type: string | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: number | null
    saisonId: number | null
    nom: string | null
    type: string | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    saisonId: number
    nom: number
    type: number
    divisionIds: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    id?: true
    saisonId?: true
    divisionIds?: true
  }

  export type CompetitionSumAggregateInputType = {
    id?: true
    saisonId?: true
    divisionIds?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    saisonId?: true
    nom?: true
    type?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    saisonId?: true
    nom?: true
    type?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    saisonId?: true
    nom?: true
    type?: true
    divisionIds?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithAggregationInput | CompetitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: number
    saisonId: number | null
    nom: string | null
    type: string | null
    divisionIds: number[]
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    type?: boolean
    divisionIds?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    type?: boolean
    divisionIds?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    type?: boolean
    divisionIds?: boolean
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectScalar = {
    id?: boolean
    saisonId?: boolean
    nom?: boolean
    type?: boolean
    divisionIds?: boolean
  }

  export type CompetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saisonId" | "nom" | "type" | "divisionIds", ExtArgs["result"]["competition"]>

  export type $CompetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saisonId: number | null
      nom: string | null
      type: string | null
      divisionIds: number[]
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionDefaultArgs> = $Result.GetResult<Prisma.$CompetitionPayload, S>

  type CompetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competition'], meta: { name: 'Competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionFindUniqueArgs>(args: SelectSubset<T, CompetitionFindUniqueArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionFindFirstArgs>(args?: SelectSubset<T, CompetitionFindFirstArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionFindManyArgs>(args?: SelectSubset<T, CompetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends CompetitionCreateArgs>(args: SelectSubset<T, CompetitionCreateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionCreateManyArgs>(args?: SelectSubset<T, CompetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {CompetitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends CompetitionDeleteArgs>(args: SelectSubset<T, CompetitionDeleteArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionUpdateArgs>(args: SelectSubset<T, CompetitionUpdateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionDeleteManyArgs>(args?: SelectSubset<T, CompetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionUpdateManyArgs>(args: SelectSubset<T, CompetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {CompetitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionUpsertArgs>(args: SelectSubset<T, CompetitionUpsertArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
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
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competition model
   */
  readonly fields: CompetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Competition model
   */
  interface CompetitionFieldRefs {
    readonly id: FieldRef<"Competition", 'Int'>
    readonly saisonId: FieldRef<"Competition", 'Int'>
    readonly nom: FieldRef<"Competition", 'String'>
    readonly type: FieldRef<"Competition", 'String'>
    readonly divisionIds: FieldRef<"Competition", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * Competition findUnique
   */
  export type CompetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findFirst
   */
  export type CompetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition create
   */
  export type CompetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data needed to create a Competition.
     */
    data?: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }

  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition createManyAndReturn
   */
  export type CompetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Competition update
   */
  export type CompetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition updateManyAndReturn
   */
  export type CompetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }

  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to delete.
     */
    limit?: number
  }

  /**
   * Competition without action
   */
  export type CompetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
  }


  /**
   * Model Taux
   */

  export type AggregateTaux = {
    _count: TauxCountAggregateOutputType | null
    _avg: TauxAvgAggregateOutputType | null
    _sum: TauxSumAggregateOutputType | null
    _min: TauxMinAggregateOutputType | null
    _max: TauxMaxAggregateOutputType | null
  }

  export type TauxAvgAggregateOutputType = {
    id: number | null
    saisonId: number | null
    divisionId: number | null
    rang: number | null
    montant: number | null
  }

  export type TauxSumAggregateOutputType = {
    id: number | null
    saisonId: number | null
    divisionId: number | null
    rang: number | null
    montant: number | null
  }

  export type TauxMinAggregateOutputType = {
    id: number | null
    saisonId: number | null
    divisionId: number | null
    division: string | null
    rang: number | null
    role: string | null
    montant: number | null
  }

  export type TauxMaxAggregateOutputType = {
    id: number | null
    saisonId: number | null
    divisionId: number | null
    division: string | null
    rang: number | null
    role: string | null
    montant: number | null
  }

  export type TauxCountAggregateOutputType = {
    id: number
    saisonId: number
    divisionId: number
    division: number
    rang: number
    role: number
    montant: number
    _all: number
  }


  export type TauxAvgAggregateInputType = {
    id?: true
    saisonId?: true
    divisionId?: true
    rang?: true
    montant?: true
  }

  export type TauxSumAggregateInputType = {
    id?: true
    saisonId?: true
    divisionId?: true
    rang?: true
    montant?: true
  }

  export type TauxMinAggregateInputType = {
    id?: true
    saisonId?: true
    divisionId?: true
    division?: true
    rang?: true
    role?: true
    montant?: true
  }

  export type TauxMaxAggregateInputType = {
    id?: true
    saisonId?: true
    divisionId?: true
    division?: true
    rang?: true
    role?: true
    montant?: true
  }

  export type TauxCountAggregateInputType = {
    id?: true
    saisonId?: true
    divisionId?: true
    division?: true
    rang?: true
    role?: true
    montant?: true
    _all?: true
  }

  export type TauxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Taux to aggregate.
     */
    where?: TauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tauxes to fetch.
     */
    orderBy?: TauxOrderByWithRelationInput | TauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tauxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tauxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tauxes
    **/
    _count?: true | TauxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TauxAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TauxSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TauxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TauxMaxAggregateInputType
  }

  export type GetTauxAggregateType<T extends TauxAggregateArgs> = {
        [P in keyof T & keyof AggregateTaux]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaux[P]>
      : GetScalarType<T[P], AggregateTaux[P]>
  }




  export type TauxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TauxWhereInput
    orderBy?: TauxOrderByWithAggregationInput | TauxOrderByWithAggregationInput[]
    by: TauxScalarFieldEnum[] | TauxScalarFieldEnum
    having?: TauxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TauxCountAggregateInputType | true
    _avg?: TauxAvgAggregateInputType
    _sum?: TauxSumAggregateInputType
    _min?: TauxMinAggregateInputType
    _max?: TauxMaxAggregateInputType
  }

  export type TauxGroupByOutputType = {
    id: number
    saisonId: number | null
    divisionId: number | null
    division: string | null
    rang: number | null
    role: string | null
    montant: number | null
    _count: TauxCountAggregateOutputType | null
    _avg: TauxAvgAggregateOutputType | null
    _sum: TauxSumAggregateOutputType | null
    _min: TauxMinAggregateOutputType | null
    _max: TauxMaxAggregateOutputType | null
  }

  type GetTauxGroupByPayload<T extends TauxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TauxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TauxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TauxGroupByOutputType[P]>
            : GetScalarType<T[P], TauxGroupByOutputType[P]>
        }
      >
    >


  export type TauxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    divisionId?: boolean
    division?: boolean
    rang?: boolean
    role?: boolean
    montant?: boolean
  }, ExtArgs["result"]["taux"]>

  export type TauxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    divisionId?: boolean
    division?: boolean
    rang?: boolean
    role?: boolean
    montant?: boolean
  }, ExtArgs["result"]["taux"]>

  export type TauxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saisonId?: boolean
    divisionId?: boolean
    division?: boolean
    rang?: boolean
    role?: boolean
    montant?: boolean
  }, ExtArgs["result"]["taux"]>

  export type TauxSelectScalar = {
    id?: boolean
    saisonId?: boolean
    divisionId?: boolean
    division?: boolean
    rang?: boolean
    role?: boolean
    montant?: boolean
  }

  export type TauxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saisonId" | "divisionId" | "division" | "rang" | "role" | "montant", ExtArgs["result"]["taux"]>

  export type $TauxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Taux"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saisonId: number | null
      divisionId: number | null
      division: string | null
      rang: number | null
      role: string | null
      montant: number | null
    }, ExtArgs["result"]["taux"]>
    composites: {}
  }

  type TauxGetPayload<S extends boolean | null | undefined | TauxDefaultArgs> = $Result.GetResult<Prisma.$TauxPayload, S>

  type TauxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TauxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TauxCountAggregateInputType | true
    }

  export interface TauxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Taux'], meta: { name: 'Taux' } }
    /**
     * Find zero or one Taux that matches the filter.
     * @param {TauxFindUniqueArgs} args - Arguments to find a Taux
     * @example
     * // Get one Taux
     * const taux = await prisma.taux.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TauxFindUniqueArgs>(args: SelectSubset<T, TauxFindUniqueArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Taux that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TauxFindUniqueOrThrowArgs} args - Arguments to find a Taux
     * @example
     * // Get one Taux
     * const taux = await prisma.taux.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TauxFindUniqueOrThrowArgs>(args: SelectSubset<T, TauxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taux that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TauxFindFirstArgs} args - Arguments to find a Taux
     * @example
     * // Get one Taux
     * const taux = await prisma.taux.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TauxFindFirstArgs>(args?: SelectSubset<T, TauxFindFirstArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Taux that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TauxFindFirstOrThrowArgs} args - Arguments to find a Taux
     * @example
     * // Get one Taux
     * const taux = await prisma.taux.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TauxFindFirstOrThrowArgs>(args?: SelectSubset<T, TauxFindFirstOrThrowArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tauxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TauxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tauxes
     * const tauxes = await prisma.taux.findMany()
     * 
     * // Get first 10 Tauxes
     * const tauxes = await prisma.taux.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tauxWithIdOnly = await prisma.taux.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TauxFindManyArgs>(args?: SelectSubset<T, TauxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Taux.
     * @param {TauxCreateArgs} args - Arguments to create a Taux.
     * @example
     * // Create one Taux
     * const Taux = await prisma.taux.create({
     *   data: {
     *     // ... data to create a Taux
     *   }
     * })
     * 
     */
    create<T extends TauxCreateArgs>(args: SelectSubset<T, TauxCreateArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tauxes.
     * @param {TauxCreateManyArgs} args - Arguments to create many Tauxes.
     * @example
     * // Create many Tauxes
     * const taux = await prisma.taux.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TauxCreateManyArgs>(args?: SelectSubset<T, TauxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tauxes and returns the data saved in the database.
     * @param {TauxCreateManyAndReturnArgs} args - Arguments to create many Tauxes.
     * @example
     * // Create many Tauxes
     * const taux = await prisma.taux.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tauxes and only return the `id`
     * const tauxWithIdOnly = await prisma.taux.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TauxCreateManyAndReturnArgs>(args?: SelectSubset<T, TauxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Taux.
     * @param {TauxDeleteArgs} args - Arguments to delete one Taux.
     * @example
     * // Delete one Taux
     * const Taux = await prisma.taux.delete({
     *   where: {
     *     // ... filter to delete one Taux
     *   }
     * })
     * 
     */
    delete<T extends TauxDeleteArgs>(args: SelectSubset<T, TauxDeleteArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Taux.
     * @param {TauxUpdateArgs} args - Arguments to update one Taux.
     * @example
     * // Update one Taux
     * const taux = await prisma.taux.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TauxUpdateArgs>(args: SelectSubset<T, TauxUpdateArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tauxes.
     * @param {TauxDeleteManyArgs} args - Arguments to filter Tauxes to delete.
     * @example
     * // Delete a few Tauxes
     * const { count } = await prisma.taux.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TauxDeleteManyArgs>(args?: SelectSubset<T, TauxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tauxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TauxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tauxes
     * const taux = await prisma.taux.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TauxUpdateManyArgs>(args: SelectSubset<T, TauxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tauxes and returns the data updated in the database.
     * @param {TauxUpdateManyAndReturnArgs} args - Arguments to update many Tauxes.
     * @example
     * // Update many Tauxes
     * const taux = await prisma.taux.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tauxes and only return the `id`
     * const tauxWithIdOnly = await prisma.taux.updateManyAndReturn({
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
    updateManyAndReturn<T extends TauxUpdateManyAndReturnArgs>(args: SelectSubset<T, TauxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Taux.
     * @param {TauxUpsertArgs} args - Arguments to update or create a Taux.
     * @example
     * // Update or create a Taux
     * const taux = await prisma.taux.upsert({
     *   create: {
     *     // ... data to create a Taux
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Taux we want to update
     *   }
     * })
     */
    upsert<T extends TauxUpsertArgs>(args: SelectSubset<T, TauxUpsertArgs<ExtArgs>>): Prisma__TauxClient<$Result.GetResult<Prisma.$TauxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tauxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TauxCountArgs} args - Arguments to filter Tauxes to count.
     * @example
     * // Count the number of Tauxes
     * const count = await prisma.taux.count({
     *   where: {
     *     // ... the filter for the Tauxes we want to count
     *   }
     * })
    **/
    count<T extends TauxCountArgs>(
      args?: Subset<T, TauxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TauxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Taux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TauxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TauxAggregateArgs>(args: Subset<T, TauxAggregateArgs>): Prisma.PrismaPromise<GetTauxAggregateType<T>>

    /**
     * Group by Taux.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TauxGroupByArgs} args - Group by arguments.
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
      T extends TauxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TauxGroupByArgs['orderBy'] }
        : { orderBy?: TauxGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TauxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTauxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Taux model
   */
  readonly fields: TauxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Taux.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TauxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Taux model
   */
  interface TauxFieldRefs {
    readonly id: FieldRef<"Taux", 'Int'>
    readonly saisonId: FieldRef<"Taux", 'Int'>
    readonly divisionId: FieldRef<"Taux", 'Int'>
    readonly division: FieldRef<"Taux", 'String'>
    readonly rang: FieldRef<"Taux", 'Int'>
    readonly role: FieldRef<"Taux", 'String'>
    readonly montant: FieldRef<"Taux", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Taux findUnique
   */
  export type TauxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * Filter, which Taux to fetch.
     */
    where: TauxWhereUniqueInput
  }

  /**
   * Taux findUniqueOrThrow
   */
  export type TauxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * Filter, which Taux to fetch.
     */
    where: TauxWhereUniqueInput
  }

  /**
   * Taux findFirst
   */
  export type TauxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * Filter, which Taux to fetch.
     */
    where?: TauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tauxes to fetch.
     */
    orderBy?: TauxOrderByWithRelationInput | TauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tauxes.
     */
    cursor?: TauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tauxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tauxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tauxes.
     */
    distinct?: TauxScalarFieldEnum | TauxScalarFieldEnum[]
  }

  /**
   * Taux findFirstOrThrow
   */
  export type TauxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * Filter, which Taux to fetch.
     */
    where?: TauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tauxes to fetch.
     */
    orderBy?: TauxOrderByWithRelationInput | TauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tauxes.
     */
    cursor?: TauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tauxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tauxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tauxes.
     */
    distinct?: TauxScalarFieldEnum | TauxScalarFieldEnum[]
  }

  /**
   * Taux findMany
   */
  export type TauxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * Filter, which Tauxes to fetch.
     */
    where?: TauxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tauxes to fetch.
     */
    orderBy?: TauxOrderByWithRelationInput | TauxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tauxes.
     */
    cursor?: TauxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tauxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tauxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tauxes.
     */
    distinct?: TauxScalarFieldEnum | TauxScalarFieldEnum[]
  }

  /**
   * Taux create
   */
  export type TauxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * The data needed to create a Taux.
     */
    data?: XOR<TauxCreateInput, TauxUncheckedCreateInput>
  }

  /**
   * Taux createMany
   */
  export type TauxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tauxes.
     */
    data: TauxCreateManyInput | TauxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taux createManyAndReturn
   */
  export type TauxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * The data used to create many Tauxes.
     */
    data: TauxCreateManyInput | TauxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Taux update
   */
  export type TauxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * The data needed to update a Taux.
     */
    data: XOR<TauxUpdateInput, TauxUncheckedUpdateInput>
    /**
     * Choose, which Taux to update.
     */
    where: TauxWhereUniqueInput
  }

  /**
   * Taux updateMany
   */
  export type TauxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tauxes.
     */
    data: XOR<TauxUpdateManyMutationInput, TauxUncheckedUpdateManyInput>
    /**
     * Filter which Tauxes to update
     */
    where?: TauxWhereInput
    /**
     * Limit how many Tauxes to update.
     */
    limit?: number
  }

  /**
   * Taux updateManyAndReturn
   */
  export type TauxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * The data used to update Tauxes.
     */
    data: XOR<TauxUpdateManyMutationInput, TauxUncheckedUpdateManyInput>
    /**
     * Filter which Tauxes to update
     */
    where?: TauxWhereInput
    /**
     * Limit how many Tauxes to update.
     */
    limit?: number
  }

  /**
   * Taux upsert
   */
  export type TauxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * The filter to search for the Taux to update in case it exists.
     */
    where: TauxWhereUniqueInput
    /**
     * In case the Taux found by the `where` argument doesn't exist, create a new Taux with this data.
     */
    create: XOR<TauxCreateInput, TauxUncheckedCreateInput>
    /**
     * In case the Taux was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TauxUpdateInput, TauxUncheckedUpdateInput>
  }

  /**
   * Taux delete
   */
  export type TauxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
    /**
     * Filter which Taux to delete.
     */
    where: TauxWhereUniqueInput
  }

  /**
   * Taux deleteMany
   */
  export type TauxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tauxes to delete
     */
    where?: TauxWhereInput
    /**
     * Limit how many Tauxes to delete.
     */
    limit?: number
  }

  /**
   * Taux without action
   */
  export type TauxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Taux
     */
    select?: TauxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Taux
     */
    omit?: TauxOmit<ExtArgs> | null
  }


  /**
   * Model Sanction
   */

  export type AggregateSanction = {
    _count: SanctionCountAggregateOutputType | null
    _avg: SanctionAvgAggregateOutputType | null
    _sum: SanctionSumAggregateOutputType | null
    _min: SanctionMinAggregateOutputType | null
    _max: SanctionMaxAggregateOutputType | null
  }

  export type SanctionAvgAggregateOutputType = {
    id: number | null
    valeur: number | null
  }

  export type SanctionSumAggregateOutputType = {
    id: number | null
    valeur: number | null
  }

  export type SanctionMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    modeCalcul: string | null
    valeur: number | null
  }

  export type SanctionMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    modeCalcul: string | null
    valeur: number | null
  }

  export type SanctionCountAggregateOutputType = {
    id: number
    libelle: number
    modeCalcul: number
    valeur: number
    _all: number
  }


  export type SanctionAvgAggregateInputType = {
    id?: true
    valeur?: true
  }

  export type SanctionSumAggregateInputType = {
    id?: true
    valeur?: true
  }

  export type SanctionMinAggregateInputType = {
    id?: true
    libelle?: true
    modeCalcul?: true
    valeur?: true
  }

  export type SanctionMaxAggregateInputType = {
    id?: true
    libelle?: true
    modeCalcul?: true
    valeur?: true
  }

  export type SanctionCountAggregateInputType = {
    id?: true
    libelle?: true
    modeCalcul?: true
    valeur?: true
    _all?: true
  }

  export type SanctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sanction to aggregate.
     */
    where?: SanctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionOrderByWithRelationInput | SanctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sanctions
    **/
    _count?: true | SanctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SanctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SanctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanctionMaxAggregateInputType
  }

  export type GetSanctionAggregateType<T extends SanctionAggregateArgs> = {
        [P in keyof T & keyof AggregateSanction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanction[P]>
      : GetScalarType<T[P], AggregateSanction[P]>
  }




  export type SanctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanctionWhereInput
    orderBy?: SanctionOrderByWithAggregationInput | SanctionOrderByWithAggregationInput[]
    by: SanctionScalarFieldEnum[] | SanctionScalarFieldEnum
    having?: SanctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanctionCountAggregateInputType | true
    _avg?: SanctionAvgAggregateInputType
    _sum?: SanctionSumAggregateInputType
    _min?: SanctionMinAggregateInputType
    _max?: SanctionMaxAggregateInputType
  }

  export type SanctionGroupByOutputType = {
    id: number
    libelle: string | null
    modeCalcul: string | null
    valeur: number | null
    _count: SanctionCountAggregateOutputType | null
    _avg: SanctionAvgAggregateOutputType | null
    _sum: SanctionSumAggregateOutputType | null
    _min: SanctionMinAggregateOutputType | null
    _max: SanctionMaxAggregateOutputType | null
  }

  type GetSanctionGroupByPayload<T extends SanctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanctionGroupByOutputType[P]>
            : GetScalarType<T[P], SanctionGroupByOutputType[P]>
        }
      >
    >


  export type SanctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    modeCalcul?: boolean
    valeur?: boolean
  }, ExtArgs["result"]["sanction"]>

  export type SanctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    modeCalcul?: boolean
    valeur?: boolean
  }, ExtArgs["result"]["sanction"]>

  export type SanctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    modeCalcul?: boolean
    valeur?: boolean
  }, ExtArgs["result"]["sanction"]>

  export type SanctionSelectScalar = {
    id?: boolean
    libelle?: boolean
    modeCalcul?: boolean
    valeur?: boolean
  }

  export type SanctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "modeCalcul" | "valeur", ExtArgs["result"]["sanction"]>

  export type $SanctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sanction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string | null
      modeCalcul: string | null
      valeur: number | null
    }, ExtArgs["result"]["sanction"]>
    composites: {}
  }

  type SanctionGetPayload<S extends boolean | null | undefined | SanctionDefaultArgs> = $Result.GetResult<Prisma.$SanctionPayload, S>

  type SanctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanctionCountAggregateInputType | true
    }

  export interface SanctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sanction'], meta: { name: 'Sanction' } }
    /**
     * Find zero or one Sanction that matches the filter.
     * @param {SanctionFindUniqueArgs} args - Arguments to find a Sanction
     * @example
     * // Get one Sanction
     * const sanction = await prisma.sanction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanctionFindUniqueArgs>(args: SelectSubset<T, SanctionFindUniqueArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sanction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanctionFindUniqueOrThrowArgs} args - Arguments to find a Sanction
     * @example
     * // Get one Sanction
     * const sanction = await prisma.sanction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanctionFindUniqueOrThrowArgs>(args: SelectSubset<T, SanctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sanction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionFindFirstArgs} args - Arguments to find a Sanction
     * @example
     * // Get one Sanction
     * const sanction = await prisma.sanction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanctionFindFirstArgs>(args?: SelectSubset<T, SanctionFindFirstArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sanction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionFindFirstOrThrowArgs} args - Arguments to find a Sanction
     * @example
     * // Get one Sanction
     * const sanction = await prisma.sanction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanctionFindFirstOrThrowArgs>(args?: SelectSubset<T, SanctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sanctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sanctions
     * const sanctions = await prisma.sanction.findMany()
     * 
     * // Get first 10 Sanctions
     * const sanctions = await prisma.sanction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sanctionWithIdOnly = await prisma.sanction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SanctionFindManyArgs>(args?: SelectSubset<T, SanctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sanction.
     * @param {SanctionCreateArgs} args - Arguments to create a Sanction.
     * @example
     * // Create one Sanction
     * const Sanction = await prisma.sanction.create({
     *   data: {
     *     // ... data to create a Sanction
     *   }
     * })
     * 
     */
    create<T extends SanctionCreateArgs>(args: SelectSubset<T, SanctionCreateArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sanctions.
     * @param {SanctionCreateManyArgs} args - Arguments to create many Sanctions.
     * @example
     * // Create many Sanctions
     * const sanction = await prisma.sanction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanctionCreateManyArgs>(args?: SelectSubset<T, SanctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sanctions and returns the data saved in the database.
     * @param {SanctionCreateManyAndReturnArgs} args - Arguments to create many Sanctions.
     * @example
     * // Create many Sanctions
     * const sanction = await prisma.sanction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sanctions and only return the `id`
     * const sanctionWithIdOnly = await prisma.sanction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SanctionCreateManyAndReturnArgs>(args?: SelectSubset<T, SanctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sanction.
     * @param {SanctionDeleteArgs} args - Arguments to delete one Sanction.
     * @example
     * // Delete one Sanction
     * const Sanction = await prisma.sanction.delete({
     *   where: {
     *     // ... filter to delete one Sanction
     *   }
     * })
     * 
     */
    delete<T extends SanctionDeleteArgs>(args: SelectSubset<T, SanctionDeleteArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sanction.
     * @param {SanctionUpdateArgs} args - Arguments to update one Sanction.
     * @example
     * // Update one Sanction
     * const sanction = await prisma.sanction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanctionUpdateArgs>(args: SelectSubset<T, SanctionUpdateArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sanctions.
     * @param {SanctionDeleteManyArgs} args - Arguments to filter Sanctions to delete.
     * @example
     * // Delete a few Sanctions
     * const { count } = await prisma.sanction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanctionDeleteManyArgs>(args?: SelectSubset<T, SanctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sanctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sanctions
     * const sanction = await prisma.sanction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanctionUpdateManyArgs>(args: SelectSubset<T, SanctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sanctions and returns the data updated in the database.
     * @param {SanctionUpdateManyAndReturnArgs} args - Arguments to update many Sanctions.
     * @example
     * // Update many Sanctions
     * const sanction = await prisma.sanction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sanctions and only return the `id`
     * const sanctionWithIdOnly = await prisma.sanction.updateManyAndReturn({
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
    updateManyAndReturn<T extends SanctionUpdateManyAndReturnArgs>(args: SelectSubset<T, SanctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sanction.
     * @param {SanctionUpsertArgs} args - Arguments to update or create a Sanction.
     * @example
     * // Update or create a Sanction
     * const sanction = await prisma.sanction.upsert({
     *   create: {
     *     // ... data to create a Sanction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sanction we want to update
     *   }
     * })
     */
    upsert<T extends SanctionUpsertArgs>(args: SelectSubset<T, SanctionUpsertArgs<ExtArgs>>): Prisma__SanctionClient<$Result.GetResult<Prisma.$SanctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sanctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionCountArgs} args - Arguments to filter Sanctions to count.
     * @example
     * // Count the number of Sanctions
     * const count = await prisma.sanction.count({
     *   where: {
     *     // ... the filter for the Sanctions we want to count
     *   }
     * })
    **/
    count<T extends SanctionCountArgs>(
      args?: Subset<T, SanctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sanction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SanctionAggregateArgs>(args: Subset<T, SanctionAggregateArgs>): Prisma.PrismaPromise<GetSanctionAggregateType<T>>

    /**
     * Group by Sanction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionGroupByArgs} args - Group by arguments.
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
      T extends SanctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanctionGroupByArgs['orderBy'] }
        : { orderBy?: SanctionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SanctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sanction model
   */
  readonly fields: SanctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sanction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sanction model
   */
  interface SanctionFieldRefs {
    readonly id: FieldRef<"Sanction", 'Int'>
    readonly libelle: FieldRef<"Sanction", 'String'>
    readonly modeCalcul: FieldRef<"Sanction", 'String'>
    readonly valeur: FieldRef<"Sanction", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Sanction findUnique
   */
  export type SanctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * Filter, which Sanction to fetch.
     */
    where: SanctionWhereUniqueInput
  }

  /**
   * Sanction findUniqueOrThrow
   */
  export type SanctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * Filter, which Sanction to fetch.
     */
    where: SanctionWhereUniqueInput
  }

  /**
   * Sanction findFirst
   */
  export type SanctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * Filter, which Sanction to fetch.
     */
    where?: SanctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionOrderByWithRelationInput | SanctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sanctions.
     */
    cursor?: SanctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sanctions.
     */
    distinct?: SanctionScalarFieldEnum | SanctionScalarFieldEnum[]
  }

  /**
   * Sanction findFirstOrThrow
   */
  export type SanctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * Filter, which Sanction to fetch.
     */
    where?: SanctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionOrderByWithRelationInput | SanctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sanctions.
     */
    cursor?: SanctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sanctions.
     */
    distinct?: SanctionScalarFieldEnum | SanctionScalarFieldEnum[]
  }

  /**
   * Sanction findMany
   */
  export type SanctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * Filter, which Sanctions to fetch.
     */
    where?: SanctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sanctions to fetch.
     */
    orderBy?: SanctionOrderByWithRelationInput | SanctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sanctions.
     */
    cursor?: SanctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sanctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sanctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sanctions.
     */
    distinct?: SanctionScalarFieldEnum | SanctionScalarFieldEnum[]
  }

  /**
   * Sanction create
   */
  export type SanctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * The data needed to create a Sanction.
     */
    data?: XOR<SanctionCreateInput, SanctionUncheckedCreateInput>
  }

  /**
   * Sanction createMany
   */
  export type SanctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sanctions.
     */
    data: SanctionCreateManyInput | SanctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sanction createManyAndReturn
   */
  export type SanctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * The data used to create many Sanctions.
     */
    data: SanctionCreateManyInput | SanctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sanction update
   */
  export type SanctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * The data needed to update a Sanction.
     */
    data: XOR<SanctionUpdateInput, SanctionUncheckedUpdateInput>
    /**
     * Choose, which Sanction to update.
     */
    where: SanctionWhereUniqueInput
  }

  /**
   * Sanction updateMany
   */
  export type SanctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sanctions.
     */
    data: XOR<SanctionUpdateManyMutationInput, SanctionUncheckedUpdateManyInput>
    /**
     * Filter which Sanctions to update
     */
    where?: SanctionWhereInput
    /**
     * Limit how many Sanctions to update.
     */
    limit?: number
  }

  /**
   * Sanction updateManyAndReturn
   */
  export type SanctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * The data used to update Sanctions.
     */
    data: XOR<SanctionUpdateManyMutationInput, SanctionUncheckedUpdateManyInput>
    /**
     * Filter which Sanctions to update
     */
    where?: SanctionWhereInput
    /**
     * Limit how many Sanctions to update.
     */
    limit?: number
  }

  /**
   * Sanction upsert
   */
  export type SanctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * The filter to search for the Sanction to update in case it exists.
     */
    where: SanctionWhereUniqueInput
    /**
     * In case the Sanction found by the `where` argument doesn't exist, create a new Sanction with this data.
     */
    create: XOR<SanctionCreateInput, SanctionUncheckedCreateInput>
    /**
     * In case the Sanction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanctionUpdateInput, SanctionUncheckedUpdateInput>
  }

  /**
   * Sanction delete
   */
  export type SanctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
    /**
     * Filter which Sanction to delete.
     */
    where: SanctionWhereUniqueInput
  }

  /**
   * Sanction deleteMany
   */
  export type SanctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sanctions to delete
     */
    where?: SanctionWhereInput
    /**
     * Limit how many Sanctions to delete.
     */
    limit?: number
  }

  /**
   * Sanction without action
   */
  export type SanctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sanction
     */
    select?: SanctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sanction
     */
    omit?: SanctionOmit<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    id: number | null
  }

  export type MatchSumAggregateOutputType = {
    id: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: number | null
    competition: string | null
    dom: string | null
    vis: string | null
    date: string | null
    heure: string | null
    journee: string | null
    stade: string | null
    statut: string | null
    notes: string | null
    assigned: boolean | null
    submitted: boolean | null
    ac: string | null
    a1: string | null
    a2: string | null
    a4: string | null
  }

  export type MatchMaxAggregateOutputType = {
    id: number | null
    competition: string | null
    dom: string | null
    vis: string | null
    date: string | null
    heure: string | null
    journee: string | null
    stade: string | null
    statut: string | null
    notes: string | null
    assigned: boolean | null
    submitted: boolean | null
    ac: string | null
    a1: string | null
    a2: string | null
    a4: string | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    competition: number
    dom: number
    vis: number
    date: number
    heure: number
    journee: number
    stade: number
    statut: number
    notes: number
    assigned: number
    submitted: number
    ac: number
    a1: number
    a2: number
    a4: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    id?: true
  }

  export type MatchSumAggregateInputType = {
    id?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    competition?: true
    dom?: true
    vis?: true
    date?: true
    heure?: true
    journee?: true
    stade?: true
    statut?: true
    notes?: true
    assigned?: true
    submitted?: true
    ac?: true
    a1?: true
    a2?: true
    a4?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    competition?: true
    dom?: true
    vis?: true
    date?: true
    heure?: true
    journee?: true
    stade?: true
    statut?: true
    notes?: true
    assigned?: true
    submitted?: true
    ac?: true
    a1?: true
    a2?: true
    a4?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    competition?: true
    dom?: true
    vis?: true
    date?: true
    heure?: true
    journee?: true
    stade?: true
    statut?: true
    notes?: true
    assigned?: true
    submitted?: true
    ac?: true
    a1?: true
    a2?: true
    a4?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: number
    competition: string | null
    dom: string | null
    vis: string | null
    date: string | null
    heure: string | null
    journee: string | null
    stade: string | null
    statut: string | null
    notes: string | null
    assigned: boolean | null
    submitted: boolean | null
    ac: string | null
    a1: string | null
    a2: string | null
    a4: string | null
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition?: boolean
    dom?: boolean
    vis?: boolean
    date?: boolean
    heure?: boolean
    journee?: boolean
    stade?: boolean
    statut?: boolean
    notes?: boolean
    assigned?: boolean
    submitted?: boolean
    ac?: boolean
    a1?: boolean
    a2?: boolean
    a4?: boolean
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition?: boolean
    dom?: boolean
    vis?: boolean
    date?: boolean
    heure?: boolean
    journee?: boolean
    stade?: boolean
    statut?: boolean
    notes?: boolean
    assigned?: boolean
    submitted?: boolean
    ac?: boolean
    a1?: boolean
    a2?: boolean
    a4?: boolean
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competition?: boolean
    dom?: boolean
    vis?: boolean
    date?: boolean
    heure?: boolean
    journee?: boolean
    stade?: boolean
    statut?: boolean
    notes?: boolean
    assigned?: boolean
    submitted?: boolean
    ac?: boolean
    a1?: boolean
    a2?: boolean
    a4?: boolean
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    competition?: boolean
    dom?: boolean
    vis?: boolean
    date?: boolean
    heure?: boolean
    journee?: boolean
    stade?: boolean
    statut?: boolean
    notes?: boolean
    assigned?: boolean
    submitted?: boolean
    ac?: boolean
    a1?: boolean
    a2?: boolean
    a4?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competition" | "dom" | "vis" | "date" | "heure" | "journee" | "stade" | "statut" | "notes" | "assigned" | "submitted" | "ac" | "a1" | "a2" | "a4", ExtArgs["result"]["match"]>

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      competition: string | null
      dom: string | null
      vis: string | null
      date: string | null
      heure: string | null
      journee: string | null
      stade: string | null
      statut: string | null
      notes: string | null
      assigned: boolean | null
      submitted: boolean | null
      ac: string | null
      a1: string | null
      a2: string | null
      a4: string | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
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
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
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
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'Int'>
    readonly competition: FieldRef<"Match", 'String'>
    readonly dom: FieldRef<"Match", 'String'>
    readonly vis: FieldRef<"Match", 'String'>
    readonly date: FieldRef<"Match", 'String'>
    readonly heure: FieldRef<"Match", 'String'>
    readonly journee: FieldRef<"Match", 'String'>
    readonly stade: FieldRef<"Match", 'String'>
    readonly statut: FieldRef<"Match", 'String'>
    readonly notes: FieldRef<"Match", 'String'>
    readonly assigned: FieldRef<"Match", 'Boolean'>
    readonly submitted: FieldRef<"Match", 'Boolean'>
    readonly ac: FieldRef<"Match", 'String'>
    readonly a1: FieldRef<"Match", 'String'>
    readonly a2: FieldRef<"Match", 'String'>
    readonly a4: FieldRef<"Match", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data?: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
  }


  /**
   * Model FeuilleMatch
   */

  export type AggregateFeuilleMatch = {
    _count: FeuilleMatchCountAggregateOutputType | null
    _avg: FeuilleMatchAvgAggregateOutputType | null
    _sum: FeuilleMatchSumAggregateOutputType | null
    _min: FeuilleMatchMinAggregateOutputType | null
    _max: FeuilleMatchMaxAggregateOutputType | null
  }

  export type FeuilleMatchAvgAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
  }

  export type FeuilleMatchSumAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
  }

  export type FeuilleMatchMinAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
    domicile: string | null
    visiteur: string | null
    competition: string | null
    dateMatch: string | null
    scoreDom: string | null
    scoreVis: string | null
    incidents: string | null
    divisionDom: string | null
    divisionVis: string | null
    divisionRetenue: string | null
    statut: string | null
    dateValidation: string | null
  }

  export type FeuilleMatchMaxAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
    domicile: string | null
    visiteur: string | null
    competition: string | null
    dateMatch: string | null
    scoreDom: string | null
    scoreVis: string | null
    incidents: string | null
    divisionDom: string | null
    divisionVis: string | null
    divisionRetenue: string | null
    statut: string | null
    dateValidation: string | null
  }

  export type FeuilleMatchCountAggregateOutputType = {
    id: number
    matchId: number
    saisonId: number
    domicile: number
    visiteur: number
    competition: number
    dateMatch: number
    scoreDom: number
    scoreVis: number
    incidents: number
    divisionDom: number
    divisionVis: number
    divisionRetenue: number
    statut: number
    dateValidation: number
    _all: number
  }


  export type FeuilleMatchAvgAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
  }

  export type FeuilleMatchSumAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
  }

  export type FeuilleMatchMinAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    domicile?: true
    visiteur?: true
    competition?: true
    dateMatch?: true
    scoreDom?: true
    scoreVis?: true
    incidents?: true
    divisionDom?: true
    divisionVis?: true
    divisionRetenue?: true
    statut?: true
    dateValidation?: true
  }

  export type FeuilleMatchMaxAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    domicile?: true
    visiteur?: true
    competition?: true
    dateMatch?: true
    scoreDom?: true
    scoreVis?: true
    incidents?: true
    divisionDom?: true
    divisionVis?: true
    divisionRetenue?: true
    statut?: true
    dateValidation?: true
  }

  export type FeuilleMatchCountAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    domicile?: true
    visiteur?: true
    competition?: true
    dateMatch?: true
    scoreDom?: true
    scoreVis?: true
    incidents?: true
    divisionDom?: true
    divisionVis?: true
    divisionRetenue?: true
    statut?: true
    dateValidation?: true
    _all?: true
  }

  export type FeuilleMatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeuilleMatch to aggregate.
     */
    where?: FeuilleMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeuilleMatches to fetch.
     */
    orderBy?: FeuilleMatchOrderByWithRelationInput | FeuilleMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeuilleMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeuilleMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeuilleMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeuilleMatches
    **/
    _count?: true | FeuilleMatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeuilleMatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeuilleMatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeuilleMatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeuilleMatchMaxAggregateInputType
  }

  export type GetFeuilleMatchAggregateType<T extends FeuilleMatchAggregateArgs> = {
        [P in keyof T & keyof AggregateFeuilleMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeuilleMatch[P]>
      : GetScalarType<T[P], AggregateFeuilleMatch[P]>
  }




  export type FeuilleMatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeuilleMatchWhereInput
    orderBy?: FeuilleMatchOrderByWithAggregationInput | FeuilleMatchOrderByWithAggregationInput[]
    by: FeuilleMatchScalarFieldEnum[] | FeuilleMatchScalarFieldEnum
    having?: FeuilleMatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeuilleMatchCountAggregateInputType | true
    _avg?: FeuilleMatchAvgAggregateInputType
    _sum?: FeuilleMatchSumAggregateInputType
    _min?: FeuilleMatchMinAggregateInputType
    _max?: FeuilleMatchMaxAggregateInputType
  }

  export type FeuilleMatchGroupByOutputType = {
    id: number
    matchId: number | null
    saisonId: number | null
    domicile: string | null
    visiteur: string | null
    competition: string | null
    dateMatch: string | null
    scoreDom: string | null
    scoreVis: string | null
    incidents: string | null
    divisionDom: string | null
    divisionVis: string | null
    divisionRetenue: string | null
    statut: string | null
    dateValidation: string | null
    _count: FeuilleMatchCountAggregateOutputType | null
    _avg: FeuilleMatchAvgAggregateOutputType | null
    _sum: FeuilleMatchSumAggregateOutputType | null
    _min: FeuilleMatchMinAggregateOutputType | null
    _max: FeuilleMatchMaxAggregateOutputType | null
  }

  type GetFeuilleMatchGroupByPayload<T extends FeuilleMatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeuilleMatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeuilleMatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeuilleMatchGroupByOutputType[P]>
            : GetScalarType<T[P], FeuilleMatchGroupByOutputType[P]>
        }
      >
    >


  export type FeuilleMatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    domicile?: boolean
    visiteur?: boolean
    competition?: boolean
    dateMatch?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    incidents?: boolean
    divisionDom?: boolean
    divisionVis?: boolean
    divisionRetenue?: boolean
    statut?: boolean
    dateValidation?: boolean
  }, ExtArgs["result"]["feuilleMatch"]>

  export type FeuilleMatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    domicile?: boolean
    visiteur?: boolean
    competition?: boolean
    dateMatch?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    incidents?: boolean
    divisionDom?: boolean
    divisionVis?: boolean
    divisionRetenue?: boolean
    statut?: boolean
    dateValidation?: boolean
  }, ExtArgs["result"]["feuilleMatch"]>

  export type FeuilleMatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    domicile?: boolean
    visiteur?: boolean
    competition?: boolean
    dateMatch?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    incidents?: boolean
    divisionDom?: boolean
    divisionVis?: boolean
    divisionRetenue?: boolean
    statut?: boolean
    dateValidation?: boolean
  }, ExtArgs["result"]["feuilleMatch"]>

  export type FeuilleMatchSelectScalar = {
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    domicile?: boolean
    visiteur?: boolean
    competition?: boolean
    dateMatch?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    incidents?: boolean
    divisionDom?: boolean
    divisionVis?: boolean
    divisionRetenue?: boolean
    statut?: boolean
    dateValidation?: boolean
  }

  export type FeuilleMatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "saisonId" | "domicile" | "visiteur" | "competition" | "dateMatch" | "scoreDom" | "scoreVis" | "incidents" | "divisionDom" | "divisionVis" | "divisionRetenue" | "statut" | "dateValidation", ExtArgs["result"]["feuilleMatch"]>

  export type $FeuilleMatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeuilleMatch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matchId: number | null
      saisonId: number | null
      domicile: string | null
      visiteur: string | null
      competition: string | null
      dateMatch: string | null
      scoreDom: string | null
      scoreVis: string | null
      incidents: string | null
      divisionDom: string | null
      divisionVis: string | null
      divisionRetenue: string | null
      statut: string | null
      dateValidation: string | null
    }, ExtArgs["result"]["feuilleMatch"]>
    composites: {}
  }

  type FeuilleMatchGetPayload<S extends boolean | null | undefined | FeuilleMatchDefaultArgs> = $Result.GetResult<Prisma.$FeuilleMatchPayload, S>

  type FeuilleMatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeuilleMatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeuilleMatchCountAggregateInputType | true
    }

  export interface FeuilleMatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeuilleMatch'], meta: { name: 'FeuilleMatch' } }
    /**
     * Find zero or one FeuilleMatch that matches the filter.
     * @param {FeuilleMatchFindUniqueArgs} args - Arguments to find a FeuilleMatch
     * @example
     * // Get one FeuilleMatch
     * const feuilleMatch = await prisma.feuilleMatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeuilleMatchFindUniqueArgs>(args: SelectSubset<T, FeuilleMatchFindUniqueArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeuilleMatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeuilleMatchFindUniqueOrThrowArgs} args - Arguments to find a FeuilleMatch
     * @example
     * // Get one FeuilleMatch
     * const feuilleMatch = await prisma.feuilleMatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeuilleMatchFindUniqueOrThrowArgs>(args: SelectSubset<T, FeuilleMatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeuilleMatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeuilleMatchFindFirstArgs} args - Arguments to find a FeuilleMatch
     * @example
     * // Get one FeuilleMatch
     * const feuilleMatch = await prisma.feuilleMatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeuilleMatchFindFirstArgs>(args?: SelectSubset<T, FeuilleMatchFindFirstArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeuilleMatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeuilleMatchFindFirstOrThrowArgs} args - Arguments to find a FeuilleMatch
     * @example
     * // Get one FeuilleMatch
     * const feuilleMatch = await prisma.feuilleMatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeuilleMatchFindFirstOrThrowArgs>(args?: SelectSubset<T, FeuilleMatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeuilleMatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeuilleMatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeuilleMatches
     * const feuilleMatches = await prisma.feuilleMatch.findMany()
     * 
     * // Get first 10 FeuilleMatches
     * const feuilleMatches = await prisma.feuilleMatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feuilleMatchWithIdOnly = await prisma.feuilleMatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeuilleMatchFindManyArgs>(args?: SelectSubset<T, FeuilleMatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeuilleMatch.
     * @param {FeuilleMatchCreateArgs} args - Arguments to create a FeuilleMatch.
     * @example
     * // Create one FeuilleMatch
     * const FeuilleMatch = await prisma.feuilleMatch.create({
     *   data: {
     *     // ... data to create a FeuilleMatch
     *   }
     * })
     * 
     */
    create<T extends FeuilleMatchCreateArgs>(args: SelectSubset<T, FeuilleMatchCreateArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeuilleMatches.
     * @param {FeuilleMatchCreateManyArgs} args - Arguments to create many FeuilleMatches.
     * @example
     * // Create many FeuilleMatches
     * const feuilleMatch = await prisma.feuilleMatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeuilleMatchCreateManyArgs>(args?: SelectSubset<T, FeuilleMatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeuilleMatches and returns the data saved in the database.
     * @param {FeuilleMatchCreateManyAndReturnArgs} args - Arguments to create many FeuilleMatches.
     * @example
     * // Create many FeuilleMatches
     * const feuilleMatch = await prisma.feuilleMatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeuilleMatches and only return the `id`
     * const feuilleMatchWithIdOnly = await prisma.feuilleMatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeuilleMatchCreateManyAndReturnArgs>(args?: SelectSubset<T, FeuilleMatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeuilleMatch.
     * @param {FeuilleMatchDeleteArgs} args - Arguments to delete one FeuilleMatch.
     * @example
     * // Delete one FeuilleMatch
     * const FeuilleMatch = await prisma.feuilleMatch.delete({
     *   where: {
     *     // ... filter to delete one FeuilleMatch
     *   }
     * })
     * 
     */
    delete<T extends FeuilleMatchDeleteArgs>(args: SelectSubset<T, FeuilleMatchDeleteArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeuilleMatch.
     * @param {FeuilleMatchUpdateArgs} args - Arguments to update one FeuilleMatch.
     * @example
     * // Update one FeuilleMatch
     * const feuilleMatch = await prisma.feuilleMatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeuilleMatchUpdateArgs>(args: SelectSubset<T, FeuilleMatchUpdateArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeuilleMatches.
     * @param {FeuilleMatchDeleteManyArgs} args - Arguments to filter FeuilleMatches to delete.
     * @example
     * // Delete a few FeuilleMatches
     * const { count } = await prisma.feuilleMatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeuilleMatchDeleteManyArgs>(args?: SelectSubset<T, FeuilleMatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeuilleMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeuilleMatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeuilleMatches
     * const feuilleMatch = await prisma.feuilleMatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeuilleMatchUpdateManyArgs>(args: SelectSubset<T, FeuilleMatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeuilleMatches and returns the data updated in the database.
     * @param {FeuilleMatchUpdateManyAndReturnArgs} args - Arguments to update many FeuilleMatches.
     * @example
     * // Update many FeuilleMatches
     * const feuilleMatch = await prisma.feuilleMatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeuilleMatches and only return the `id`
     * const feuilleMatchWithIdOnly = await prisma.feuilleMatch.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeuilleMatchUpdateManyAndReturnArgs>(args: SelectSubset<T, FeuilleMatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeuilleMatch.
     * @param {FeuilleMatchUpsertArgs} args - Arguments to update or create a FeuilleMatch.
     * @example
     * // Update or create a FeuilleMatch
     * const feuilleMatch = await prisma.feuilleMatch.upsert({
     *   create: {
     *     // ... data to create a FeuilleMatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeuilleMatch we want to update
     *   }
     * })
     */
    upsert<T extends FeuilleMatchUpsertArgs>(args: SelectSubset<T, FeuilleMatchUpsertArgs<ExtArgs>>): Prisma__FeuilleMatchClient<$Result.GetResult<Prisma.$FeuilleMatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeuilleMatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeuilleMatchCountArgs} args - Arguments to filter FeuilleMatches to count.
     * @example
     * // Count the number of FeuilleMatches
     * const count = await prisma.feuilleMatch.count({
     *   where: {
     *     // ... the filter for the FeuilleMatches we want to count
     *   }
     * })
    **/
    count<T extends FeuilleMatchCountArgs>(
      args?: Subset<T, FeuilleMatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeuilleMatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeuilleMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeuilleMatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeuilleMatchAggregateArgs>(args: Subset<T, FeuilleMatchAggregateArgs>): Prisma.PrismaPromise<GetFeuilleMatchAggregateType<T>>

    /**
     * Group by FeuilleMatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeuilleMatchGroupByArgs} args - Group by arguments.
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
      T extends FeuilleMatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeuilleMatchGroupByArgs['orderBy'] }
        : { orderBy?: FeuilleMatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeuilleMatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeuilleMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeuilleMatch model
   */
  readonly fields: FeuilleMatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeuilleMatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeuilleMatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FeuilleMatch model
   */
  interface FeuilleMatchFieldRefs {
    readonly id: FieldRef<"FeuilleMatch", 'Int'>
    readonly matchId: FieldRef<"FeuilleMatch", 'Int'>
    readonly saisonId: FieldRef<"FeuilleMatch", 'Int'>
    readonly domicile: FieldRef<"FeuilleMatch", 'String'>
    readonly visiteur: FieldRef<"FeuilleMatch", 'String'>
    readonly competition: FieldRef<"FeuilleMatch", 'String'>
    readonly dateMatch: FieldRef<"FeuilleMatch", 'String'>
    readonly scoreDom: FieldRef<"FeuilleMatch", 'String'>
    readonly scoreVis: FieldRef<"FeuilleMatch", 'String'>
    readonly incidents: FieldRef<"FeuilleMatch", 'String'>
    readonly divisionDom: FieldRef<"FeuilleMatch", 'String'>
    readonly divisionVis: FieldRef<"FeuilleMatch", 'String'>
    readonly divisionRetenue: FieldRef<"FeuilleMatch", 'String'>
    readonly statut: FieldRef<"FeuilleMatch", 'String'>
    readonly dateValidation: FieldRef<"FeuilleMatch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FeuilleMatch findUnique
   */
  export type FeuilleMatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * Filter, which FeuilleMatch to fetch.
     */
    where: FeuilleMatchWhereUniqueInput
  }

  /**
   * FeuilleMatch findUniqueOrThrow
   */
  export type FeuilleMatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * Filter, which FeuilleMatch to fetch.
     */
    where: FeuilleMatchWhereUniqueInput
  }

  /**
   * FeuilleMatch findFirst
   */
  export type FeuilleMatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * Filter, which FeuilleMatch to fetch.
     */
    where?: FeuilleMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeuilleMatches to fetch.
     */
    orderBy?: FeuilleMatchOrderByWithRelationInput | FeuilleMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeuilleMatches.
     */
    cursor?: FeuilleMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeuilleMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeuilleMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeuilleMatches.
     */
    distinct?: FeuilleMatchScalarFieldEnum | FeuilleMatchScalarFieldEnum[]
  }

  /**
   * FeuilleMatch findFirstOrThrow
   */
  export type FeuilleMatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * Filter, which FeuilleMatch to fetch.
     */
    where?: FeuilleMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeuilleMatches to fetch.
     */
    orderBy?: FeuilleMatchOrderByWithRelationInput | FeuilleMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeuilleMatches.
     */
    cursor?: FeuilleMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeuilleMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeuilleMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeuilleMatches.
     */
    distinct?: FeuilleMatchScalarFieldEnum | FeuilleMatchScalarFieldEnum[]
  }

  /**
   * FeuilleMatch findMany
   */
  export type FeuilleMatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * Filter, which FeuilleMatches to fetch.
     */
    where?: FeuilleMatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeuilleMatches to fetch.
     */
    orderBy?: FeuilleMatchOrderByWithRelationInput | FeuilleMatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeuilleMatches.
     */
    cursor?: FeuilleMatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeuilleMatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeuilleMatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeuilleMatches.
     */
    distinct?: FeuilleMatchScalarFieldEnum | FeuilleMatchScalarFieldEnum[]
  }

  /**
   * FeuilleMatch create
   */
  export type FeuilleMatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * The data needed to create a FeuilleMatch.
     */
    data?: XOR<FeuilleMatchCreateInput, FeuilleMatchUncheckedCreateInput>
  }

  /**
   * FeuilleMatch createMany
   */
  export type FeuilleMatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeuilleMatches.
     */
    data: FeuilleMatchCreateManyInput | FeuilleMatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeuilleMatch createManyAndReturn
   */
  export type FeuilleMatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * The data used to create many FeuilleMatches.
     */
    data: FeuilleMatchCreateManyInput | FeuilleMatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeuilleMatch update
   */
  export type FeuilleMatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * The data needed to update a FeuilleMatch.
     */
    data: XOR<FeuilleMatchUpdateInput, FeuilleMatchUncheckedUpdateInput>
    /**
     * Choose, which FeuilleMatch to update.
     */
    where: FeuilleMatchWhereUniqueInput
  }

  /**
   * FeuilleMatch updateMany
   */
  export type FeuilleMatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeuilleMatches.
     */
    data: XOR<FeuilleMatchUpdateManyMutationInput, FeuilleMatchUncheckedUpdateManyInput>
    /**
     * Filter which FeuilleMatches to update
     */
    where?: FeuilleMatchWhereInput
    /**
     * Limit how many FeuilleMatches to update.
     */
    limit?: number
  }

  /**
   * FeuilleMatch updateManyAndReturn
   */
  export type FeuilleMatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * The data used to update FeuilleMatches.
     */
    data: XOR<FeuilleMatchUpdateManyMutationInput, FeuilleMatchUncheckedUpdateManyInput>
    /**
     * Filter which FeuilleMatches to update
     */
    where?: FeuilleMatchWhereInput
    /**
     * Limit how many FeuilleMatches to update.
     */
    limit?: number
  }

  /**
   * FeuilleMatch upsert
   */
  export type FeuilleMatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * The filter to search for the FeuilleMatch to update in case it exists.
     */
    where: FeuilleMatchWhereUniqueInput
    /**
     * In case the FeuilleMatch found by the `where` argument doesn't exist, create a new FeuilleMatch with this data.
     */
    create: XOR<FeuilleMatchCreateInput, FeuilleMatchUncheckedCreateInput>
    /**
     * In case the FeuilleMatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeuilleMatchUpdateInput, FeuilleMatchUncheckedUpdateInput>
  }

  /**
   * FeuilleMatch delete
   */
  export type FeuilleMatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
    /**
     * Filter which FeuilleMatch to delete.
     */
    where: FeuilleMatchWhereUniqueInput
  }

  /**
   * FeuilleMatch deleteMany
   */
  export type FeuilleMatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeuilleMatches to delete
     */
    where?: FeuilleMatchWhereInput
    /**
     * Limit how many FeuilleMatches to delete.
     */
    limit?: number
  }

  /**
   * FeuilleMatch without action
   */
  export type FeuilleMatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeuilleMatch
     */
    select?: FeuilleMatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeuilleMatch
     */
    omit?: FeuilleMatchOmit<ExtArgs> | null
  }


  /**
   * Model PresenceArbitre
   */

  export type AggregatePresenceArbitre = {
    _count: PresenceArbitreCountAggregateOutputType | null
    _avg: PresenceArbitreAvgAggregateOutputType | null
    _sum: PresenceArbitreSumAggregateOutputType | null
    _min: PresenceArbitreMinAggregateOutputType | null
    _max: PresenceArbitreMaxAggregateOutputType | null
  }

  export type PresenceArbitreAvgAggregateOutputType = {
    id: number | null
    feuilleId: number | null
  }

  export type PresenceArbitreSumAggregateOutputType = {
    id: number | null
    feuilleId: number | null
  }

  export type PresenceArbitreMinAggregateOutputType = {
    id: number | null
    feuilleId: number | null
    nomArbitre: string | null
    roleArbitre: string | null
    present: boolean | null
  }

  export type PresenceArbitreMaxAggregateOutputType = {
    id: number | null
    feuilleId: number | null
    nomArbitre: string | null
    roleArbitre: string | null
    present: boolean | null
  }

  export type PresenceArbitreCountAggregateOutputType = {
    id: number
    feuilleId: number
    nomArbitre: number
    roleArbitre: number
    present: number
    _all: number
  }


  export type PresenceArbitreAvgAggregateInputType = {
    id?: true
    feuilleId?: true
  }

  export type PresenceArbitreSumAggregateInputType = {
    id?: true
    feuilleId?: true
  }

  export type PresenceArbitreMinAggregateInputType = {
    id?: true
    feuilleId?: true
    nomArbitre?: true
    roleArbitre?: true
    present?: true
  }

  export type PresenceArbitreMaxAggregateInputType = {
    id?: true
    feuilleId?: true
    nomArbitre?: true
    roleArbitre?: true
    present?: true
  }

  export type PresenceArbitreCountAggregateInputType = {
    id?: true
    feuilleId?: true
    nomArbitre?: true
    roleArbitre?: true
    present?: true
    _all?: true
  }

  export type PresenceArbitreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresenceArbitre to aggregate.
     */
    where?: PresenceArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresenceArbitres to fetch.
     */
    orderBy?: PresenceArbitreOrderByWithRelationInput | PresenceArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PresenceArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresenceArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresenceArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PresenceArbitres
    **/
    _count?: true | PresenceArbitreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresenceArbitreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresenceArbitreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresenceArbitreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresenceArbitreMaxAggregateInputType
  }

  export type GetPresenceArbitreAggregateType<T extends PresenceArbitreAggregateArgs> = {
        [P in keyof T & keyof AggregatePresenceArbitre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresenceArbitre[P]>
      : GetScalarType<T[P], AggregatePresenceArbitre[P]>
  }




  export type PresenceArbitreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PresenceArbitreWhereInput
    orderBy?: PresenceArbitreOrderByWithAggregationInput | PresenceArbitreOrderByWithAggregationInput[]
    by: PresenceArbitreScalarFieldEnum[] | PresenceArbitreScalarFieldEnum
    having?: PresenceArbitreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresenceArbitreCountAggregateInputType | true
    _avg?: PresenceArbitreAvgAggregateInputType
    _sum?: PresenceArbitreSumAggregateInputType
    _min?: PresenceArbitreMinAggregateInputType
    _max?: PresenceArbitreMaxAggregateInputType
  }

  export type PresenceArbitreGroupByOutputType = {
    id: number
    feuilleId: number | null
    nomArbitre: string | null
    roleArbitre: string | null
    present: boolean | null
    _count: PresenceArbitreCountAggregateOutputType | null
    _avg: PresenceArbitreAvgAggregateOutputType | null
    _sum: PresenceArbitreSumAggregateOutputType | null
    _min: PresenceArbitreMinAggregateOutputType | null
    _max: PresenceArbitreMaxAggregateOutputType | null
  }

  type GetPresenceArbitreGroupByPayload<T extends PresenceArbitreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PresenceArbitreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PresenceArbitreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PresenceArbitreGroupByOutputType[P]>
            : GetScalarType<T[P], PresenceArbitreGroupByOutputType[P]>
        }
      >
    >


  export type PresenceArbitreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feuilleId?: boolean
    nomArbitre?: boolean
    roleArbitre?: boolean
    present?: boolean
  }, ExtArgs["result"]["presenceArbitre"]>

  export type PresenceArbitreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feuilleId?: boolean
    nomArbitre?: boolean
    roleArbitre?: boolean
    present?: boolean
  }, ExtArgs["result"]["presenceArbitre"]>

  export type PresenceArbitreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    feuilleId?: boolean
    nomArbitre?: boolean
    roleArbitre?: boolean
    present?: boolean
  }, ExtArgs["result"]["presenceArbitre"]>

  export type PresenceArbitreSelectScalar = {
    id?: boolean
    feuilleId?: boolean
    nomArbitre?: boolean
    roleArbitre?: boolean
    present?: boolean
  }

  export type PresenceArbitreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "feuilleId" | "nomArbitre" | "roleArbitre" | "present", ExtArgs["result"]["presenceArbitre"]>

  export type $PresenceArbitrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PresenceArbitre"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      feuilleId: number | null
      nomArbitre: string | null
      roleArbitre: string | null
      present: boolean | null
    }, ExtArgs["result"]["presenceArbitre"]>
    composites: {}
  }

  type PresenceArbitreGetPayload<S extends boolean | null | undefined | PresenceArbitreDefaultArgs> = $Result.GetResult<Prisma.$PresenceArbitrePayload, S>

  type PresenceArbitreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PresenceArbitreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PresenceArbitreCountAggregateInputType | true
    }

  export interface PresenceArbitreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PresenceArbitre'], meta: { name: 'PresenceArbitre' } }
    /**
     * Find zero or one PresenceArbitre that matches the filter.
     * @param {PresenceArbitreFindUniqueArgs} args - Arguments to find a PresenceArbitre
     * @example
     * // Get one PresenceArbitre
     * const presenceArbitre = await prisma.presenceArbitre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PresenceArbitreFindUniqueArgs>(args: SelectSubset<T, PresenceArbitreFindUniqueArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PresenceArbitre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PresenceArbitreFindUniqueOrThrowArgs} args - Arguments to find a PresenceArbitre
     * @example
     * // Get one PresenceArbitre
     * const presenceArbitre = await prisma.presenceArbitre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PresenceArbitreFindUniqueOrThrowArgs>(args: SelectSubset<T, PresenceArbitreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PresenceArbitre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceArbitreFindFirstArgs} args - Arguments to find a PresenceArbitre
     * @example
     * // Get one PresenceArbitre
     * const presenceArbitre = await prisma.presenceArbitre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PresenceArbitreFindFirstArgs>(args?: SelectSubset<T, PresenceArbitreFindFirstArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PresenceArbitre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceArbitreFindFirstOrThrowArgs} args - Arguments to find a PresenceArbitre
     * @example
     * // Get one PresenceArbitre
     * const presenceArbitre = await prisma.presenceArbitre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PresenceArbitreFindFirstOrThrowArgs>(args?: SelectSubset<T, PresenceArbitreFindFirstOrThrowArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PresenceArbitres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceArbitreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PresenceArbitres
     * const presenceArbitres = await prisma.presenceArbitre.findMany()
     * 
     * // Get first 10 PresenceArbitres
     * const presenceArbitres = await prisma.presenceArbitre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presenceArbitreWithIdOnly = await prisma.presenceArbitre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PresenceArbitreFindManyArgs>(args?: SelectSubset<T, PresenceArbitreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PresenceArbitre.
     * @param {PresenceArbitreCreateArgs} args - Arguments to create a PresenceArbitre.
     * @example
     * // Create one PresenceArbitre
     * const PresenceArbitre = await prisma.presenceArbitre.create({
     *   data: {
     *     // ... data to create a PresenceArbitre
     *   }
     * })
     * 
     */
    create<T extends PresenceArbitreCreateArgs>(args: SelectSubset<T, PresenceArbitreCreateArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PresenceArbitres.
     * @param {PresenceArbitreCreateManyArgs} args - Arguments to create many PresenceArbitres.
     * @example
     * // Create many PresenceArbitres
     * const presenceArbitre = await prisma.presenceArbitre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PresenceArbitreCreateManyArgs>(args?: SelectSubset<T, PresenceArbitreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PresenceArbitres and returns the data saved in the database.
     * @param {PresenceArbitreCreateManyAndReturnArgs} args - Arguments to create many PresenceArbitres.
     * @example
     * // Create many PresenceArbitres
     * const presenceArbitre = await prisma.presenceArbitre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PresenceArbitres and only return the `id`
     * const presenceArbitreWithIdOnly = await prisma.presenceArbitre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PresenceArbitreCreateManyAndReturnArgs>(args?: SelectSubset<T, PresenceArbitreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PresenceArbitre.
     * @param {PresenceArbitreDeleteArgs} args - Arguments to delete one PresenceArbitre.
     * @example
     * // Delete one PresenceArbitre
     * const PresenceArbitre = await prisma.presenceArbitre.delete({
     *   where: {
     *     // ... filter to delete one PresenceArbitre
     *   }
     * })
     * 
     */
    delete<T extends PresenceArbitreDeleteArgs>(args: SelectSubset<T, PresenceArbitreDeleteArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PresenceArbitre.
     * @param {PresenceArbitreUpdateArgs} args - Arguments to update one PresenceArbitre.
     * @example
     * // Update one PresenceArbitre
     * const presenceArbitre = await prisma.presenceArbitre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PresenceArbitreUpdateArgs>(args: SelectSubset<T, PresenceArbitreUpdateArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PresenceArbitres.
     * @param {PresenceArbitreDeleteManyArgs} args - Arguments to filter PresenceArbitres to delete.
     * @example
     * // Delete a few PresenceArbitres
     * const { count } = await prisma.presenceArbitre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PresenceArbitreDeleteManyArgs>(args?: SelectSubset<T, PresenceArbitreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresenceArbitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceArbitreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PresenceArbitres
     * const presenceArbitre = await prisma.presenceArbitre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PresenceArbitreUpdateManyArgs>(args: SelectSubset<T, PresenceArbitreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresenceArbitres and returns the data updated in the database.
     * @param {PresenceArbitreUpdateManyAndReturnArgs} args - Arguments to update many PresenceArbitres.
     * @example
     * // Update many PresenceArbitres
     * const presenceArbitre = await prisma.presenceArbitre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PresenceArbitres and only return the `id`
     * const presenceArbitreWithIdOnly = await prisma.presenceArbitre.updateManyAndReturn({
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
    updateManyAndReturn<T extends PresenceArbitreUpdateManyAndReturnArgs>(args: SelectSubset<T, PresenceArbitreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PresenceArbitre.
     * @param {PresenceArbitreUpsertArgs} args - Arguments to update or create a PresenceArbitre.
     * @example
     * // Update or create a PresenceArbitre
     * const presenceArbitre = await prisma.presenceArbitre.upsert({
     *   create: {
     *     // ... data to create a PresenceArbitre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PresenceArbitre we want to update
     *   }
     * })
     */
    upsert<T extends PresenceArbitreUpsertArgs>(args: SelectSubset<T, PresenceArbitreUpsertArgs<ExtArgs>>): Prisma__PresenceArbitreClient<$Result.GetResult<Prisma.$PresenceArbitrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PresenceArbitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceArbitreCountArgs} args - Arguments to filter PresenceArbitres to count.
     * @example
     * // Count the number of PresenceArbitres
     * const count = await prisma.presenceArbitre.count({
     *   where: {
     *     // ... the filter for the PresenceArbitres we want to count
     *   }
     * })
    **/
    count<T extends PresenceArbitreCountArgs>(
      args?: Subset<T, PresenceArbitreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresenceArbitreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PresenceArbitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceArbitreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresenceArbitreAggregateArgs>(args: Subset<T, PresenceArbitreAggregateArgs>): Prisma.PrismaPromise<GetPresenceArbitreAggregateType<T>>

    /**
     * Group by PresenceArbitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresenceArbitreGroupByArgs} args - Group by arguments.
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
      T extends PresenceArbitreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresenceArbitreGroupByArgs['orderBy'] }
        : { orderBy?: PresenceArbitreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PresenceArbitreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresenceArbitreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PresenceArbitre model
   */
  readonly fields: PresenceArbitreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PresenceArbitre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PresenceArbitreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PresenceArbitre model
   */
  interface PresenceArbitreFieldRefs {
    readonly id: FieldRef<"PresenceArbitre", 'Int'>
    readonly feuilleId: FieldRef<"PresenceArbitre", 'Int'>
    readonly nomArbitre: FieldRef<"PresenceArbitre", 'String'>
    readonly roleArbitre: FieldRef<"PresenceArbitre", 'String'>
    readonly present: FieldRef<"PresenceArbitre", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PresenceArbitre findUnique
   */
  export type PresenceArbitreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * Filter, which PresenceArbitre to fetch.
     */
    where: PresenceArbitreWhereUniqueInput
  }

  /**
   * PresenceArbitre findUniqueOrThrow
   */
  export type PresenceArbitreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * Filter, which PresenceArbitre to fetch.
     */
    where: PresenceArbitreWhereUniqueInput
  }

  /**
   * PresenceArbitre findFirst
   */
  export type PresenceArbitreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * Filter, which PresenceArbitre to fetch.
     */
    where?: PresenceArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresenceArbitres to fetch.
     */
    orderBy?: PresenceArbitreOrderByWithRelationInput | PresenceArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresenceArbitres.
     */
    cursor?: PresenceArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresenceArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresenceArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresenceArbitres.
     */
    distinct?: PresenceArbitreScalarFieldEnum | PresenceArbitreScalarFieldEnum[]
  }

  /**
   * PresenceArbitre findFirstOrThrow
   */
  export type PresenceArbitreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * Filter, which PresenceArbitre to fetch.
     */
    where?: PresenceArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresenceArbitres to fetch.
     */
    orderBy?: PresenceArbitreOrderByWithRelationInput | PresenceArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresenceArbitres.
     */
    cursor?: PresenceArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresenceArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresenceArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresenceArbitres.
     */
    distinct?: PresenceArbitreScalarFieldEnum | PresenceArbitreScalarFieldEnum[]
  }

  /**
   * PresenceArbitre findMany
   */
  export type PresenceArbitreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * Filter, which PresenceArbitres to fetch.
     */
    where?: PresenceArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresenceArbitres to fetch.
     */
    orderBy?: PresenceArbitreOrderByWithRelationInput | PresenceArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PresenceArbitres.
     */
    cursor?: PresenceArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresenceArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresenceArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresenceArbitres.
     */
    distinct?: PresenceArbitreScalarFieldEnum | PresenceArbitreScalarFieldEnum[]
  }

  /**
   * PresenceArbitre create
   */
  export type PresenceArbitreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * The data needed to create a PresenceArbitre.
     */
    data?: XOR<PresenceArbitreCreateInput, PresenceArbitreUncheckedCreateInput>
  }

  /**
   * PresenceArbitre createMany
   */
  export type PresenceArbitreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PresenceArbitres.
     */
    data: PresenceArbitreCreateManyInput | PresenceArbitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PresenceArbitre createManyAndReturn
   */
  export type PresenceArbitreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * The data used to create many PresenceArbitres.
     */
    data: PresenceArbitreCreateManyInput | PresenceArbitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PresenceArbitre update
   */
  export type PresenceArbitreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * The data needed to update a PresenceArbitre.
     */
    data: XOR<PresenceArbitreUpdateInput, PresenceArbitreUncheckedUpdateInput>
    /**
     * Choose, which PresenceArbitre to update.
     */
    where: PresenceArbitreWhereUniqueInput
  }

  /**
   * PresenceArbitre updateMany
   */
  export type PresenceArbitreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PresenceArbitres.
     */
    data: XOR<PresenceArbitreUpdateManyMutationInput, PresenceArbitreUncheckedUpdateManyInput>
    /**
     * Filter which PresenceArbitres to update
     */
    where?: PresenceArbitreWhereInput
    /**
     * Limit how many PresenceArbitres to update.
     */
    limit?: number
  }

  /**
   * PresenceArbitre updateManyAndReturn
   */
  export type PresenceArbitreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * The data used to update PresenceArbitres.
     */
    data: XOR<PresenceArbitreUpdateManyMutationInput, PresenceArbitreUncheckedUpdateManyInput>
    /**
     * Filter which PresenceArbitres to update
     */
    where?: PresenceArbitreWhereInput
    /**
     * Limit how many PresenceArbitres to update.
     */
    limit?: number
  }

  /**
   * PresenceArbitre upsert
   */
  export type PresenceArbitreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * The filter to search for the PresenceArbitre to update in case it exists.
     */
    where: PresenceArbitreWhereUniqueInput
    /**
     * In case the PresenceArbitre found by the `where` argument doesn't exist, create a new PresenceArbitre with this data.
     */
    create: XOR<PresenceArbitreCreateInput, PresenceArbitreUncheckedCreateInput>
    /**
     * In case the PresenceArbitre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PresenceArbitreUpdateInput, PresenceArbitreUncheckedUpdateInput>
  }

  /**
   * PresenceArbitre delete
   */
  export type PresenceArbitreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
    /**
     * Filter which PresenceArbitre to delete.
     */
    where: PresenceArbitreWhereUniqueInput
  }

  /**
   * PresenceArbitre deleteMany
   */
  export type PresenceArbitreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PresenceArbitres to delete
     */
    where?: PresenceArbitreWhereInput
    /**
     * Limit how many PresenceArbitres to delete.
     */
    limit?: number
  }

  /**
   * PresenceArbitre without action
   */
  export type PresenceArbitreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PresenceArbitre
     */
    select?: PresenceArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PresenceArbitre
     */
    omit?: PresenceArbitreOmit<ExtArgs> | null
  }


  /**
   * Model SanctionAppliquee
   */

  export type AggregateSanctionAppliquee = {
    _count: SanctionAppliqueeCountAggregateOutputType | null
    _avg: SanctionAppliqueeAvgAggregateOutputType | null
    _sum: SanctionAppliqueeSumAggregateOutputType | null
    _min: SanctionAppliqueeMinAggregateOutputType | null
    _max: SanctionAppliqueeMaxAggregateOutputType | null
  }

  export type SanctionAppliqueeAvgAggregateOutputType = {
    id: number | null
    presenceId: number | null
    typeSanctionId: number | null
    montantApplique: number | null
  }

  export type SanctionAppliqueeSumAggregateOutputType = {
    id: number | null
    presenceId: number | null
    typeSanctionId: number | null
    montantApplique: number | null
  }

  export type SanctionAppliqueeMinAggregateOutputType = {
    id: number | null
    presenceId: number | null
    typeSanctionId: number | null
    montantApplique: number | null
    commentaire: string | null
  }

  export type SanctionAppliqueeMaxAggregateOutputType = {
    id: number | null
    presenceId: number | null
    typeSanctionId: number | null
    montantApplique: number | null
    commentaire: string | null
  }

  export type SanctionAppliqueeCountAggregateOutputType = {
    id: number
    presenceId: number
    typeSanctionId: number
    montantApplique: number
    commentaire: number
    _all: number
  }


  export type SanctionAppliqueeAvgAggregateInputType = {
    id?: true
    presenceId?: true
    typeSanctionId?: true
    montantApplique?: true
  }

  export type SanctionAppliqueeSumAggregateInputType = {
    id?: true
    presenceId?: true
    typeSanctionId?: true
    montantApplique?: true
  }

  export type SanctionAppliqueeMinAggregateInputType = {
    id?: true
    presenceId?: true
    typeSanctionId?: true
    montantApplique?: true
    commentaire?: true
  }

  export type SanctionAppliqueeMaxAggregateInputType = {
    id?: true
    presenceId?: true
    typeSanctionId?: true
    montantApplique?: true
    commentaire?: true
  }

  export type SanctionAppliqueeCountAggregateInputType = {
    id?: true
    presenceId?: true
    typeSanctionId?: true
    montantApplique?: true
    commentaire?: true
    _all?: true
  }

  export type SanctionAppliqueeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanctionAppliquee to aggregate.
     */
    where?: SanctionAppliqueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionAppliquees to fetch.
     */
    orderBy?: SanctionAppliqueeOrderByWithRelationInput | SanctionAppliqueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SanctionAppliqueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionAppliquees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionAppliquees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SanctionAppliquees
    **/
    _count?: true | SanctionAppliqueeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SanctionAppliqueeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SanctionAppliqueeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SanctionAppliqueeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SanctionAppliqueeMaxAggregateInputType
  }

  export type GetSanctionAppliqueeAggregateType<T extends SanctionAppliqueeAggregateArgs> = {
        [P in keyof T & keyof AggregateSanctionAppliquee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSanctionAppliquee[P]>
      : GetScalarType<T[P], AggregateSanctionAppliquee[P]>
  }




  export type SanctionAppliqueeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SanctionAppliqueeWhereInput
    orderBy?: SanctionAppliqueeOrderByWithAggregationInput | SanctionAppliqueeOrderByWithAggregationInput[]
    by: SanctionAppliqueeScalarFieldEnum[] | SanctionAppliqueeScalarFieldEnum
    having?: SanctionAppliqueeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SanctionAppliqueeCountAggregateInputType | true
    _avg?: SanctionAppliqueeAvgAggregateInputType
    _sum?: SanctionAppliqueeSumAggregateInputType
    _min?: SanctionAppliqueeMinAggregateInputType
    _max?: SanctionAppliqueeMaxAggregateInputType
  }

  export type SanctionAppliqueeGroupByOutputType = {
    id: number
    presenceId: number | null
    typeSanctionId: number | null
    montantApplique: number | null
    commentaire: string | null
    _count: SanctionAppliqueeCountAggregateOutputType | null
    _avg: SanctionAppliqueeAvgAggregateOutputType | null
    _sum: SanctionAppliqueeSumAggregateOutputType | null
    _min: SanctionAppliqueeMinAggregateOutputType | null
    _max: SanctionAppliqueeMaxAggregateOutputType | null
  }

  type GetSanctionAppliqueeGroupByPayload<T extends SanctionAppliqueeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SanctionAppliqueeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SanctionAppliqueeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SanctionAppliqueeGroupByOutputType[P]>
            : GetScalarType<T[P], SanctionAppliqueeGroupByOutputType[P]>
        }
      >
    >


  export type SanctionAppliqueeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presenceId?: boolean
    typeSanctionId?: boolean
    montantApplique?: boolean
    commentaire?: boolean
  }, ExtArgs["result"]["sanctionAppliquee"]>

  export type SanctionAppliqueeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presenceId?: boolean
    typeSanctionId?: boolean
    montantApplique?: boolean
    commentaire?: boolean
  }, ExtArgs["result"]["sanctionAppliquee"]>

  export type SanctionAppliqueeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    presenceId?: boolean
    typeSanctionId?: boolean
    montantApplique?: boolean
    commentaire?: boolean
  }, ExtArgs["result"]["sanctionAppliquee"]>

  export type SanctionAppliqueeSelectScalar = {
    id?: boolean
    presenceId?: boolean
    typeSanctionId?: boolean
    montantApplique?: boolean
    commentaire?: boolean
  }

  export type SanctionAppliqueeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "presenceId" | "typeSanctionId" | "montantApplique" | "commentaire", ExtArgs["result"]["sanctionAppliquee"]>

  export type $SanctionAppliqueePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SanctionAppliquee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      presenceId: number | null
      typeSanctionId: number | null
      montantApplique: number | null
      commentaire: string | null
    }, ExtArgs["result"]["sanctionAppliquee"]>
    composites: {}
  }

  type SanctionAppliqueeGetPayload<S extends boolean | null | undefined | SanctionAppliqueeDefaultArgs> = $Result.GetResult<Prisma.$SanctionAppliqueePayload, S>

  type SanctionAppliqueeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SanctionAppliqueeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SanctionAppliqueeCountAggregateInputType | true
    }

  export interface SanctionAppliqueeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SanctionAppliquee'], meta: { name: 'SanctionAppliquee' } }
    /**
     * Find zero or one SanctionAppliquee that matches the filter.
     * @param {SanctionAppliqueeFindUniqueArgs} args - Arguments to find a SanctionAppliquee
     * @example
     * // Get one SanctionAppliquee
     * const sanctionAppliquee = await prisma.sanctionAppliquee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SanctionAppliqueeFindUniqueArgs>(args: SelectSubset<T, SanctionAppliqueeFindUniqueArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SanctionAppliquee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SanctionAppliqueeFindUniqueOrThrowArgs} args - Arguments to find a SanctionAppliquee
     * @example
     * // Get one SanctionAppliquee
     * const sanctionAppliquee = await prisma.sanctionAppliquee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SanctionAppliqueeFindUniqueOrThrowArgs>(args: SelectSubset<T, SanctionAppliqueeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanctionAppliquee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAppliqueeFindFirstArgs} args - Arguments to find a SanctionAppliquee
     * @example
     * // Get one SanctionAppliquee
     * const sanctionAppliquee = await prisma.sanctionAppliquee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SanctionAppliqueeFindFirstArgs>(args?: SelectSubset<T, SanctionAppliqueeFindFirstArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SanctionAppliquee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAppliqueeFindFirstOrThrowArgs} args - Arguments to find a SanctionAppliquee
     * @example
     * // Get one SanctionAppliquee
     * const sanctionAppliquee = await prisma.sanctionAppliquee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SanctionAppliqueeFindFirstOrThrowArgs>(args?: SelectSubset<T, SanctionAppliqueeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SanctionAppliquees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAppliqueeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SanctionAppliquees
     * const sanctionAppliquees = await prisma.sanctionAppliquee.findMany()
     * 
     * // Get first 10 SanctionAppliquees
     * const sanctionAppliquees = await prisma.sanctionAppliquee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sanctionAppliqueeWithIdOnly = await prisma.sanctionAppliquee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SanctionAppliqueeFindManyArgs>(args?: SelectSubset<T, SanctionAppliqueeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SanctionAppliquee.
     * @param {SanctionAppliqueeCreateArgs} args - Arguments to create a SanctionAppliquee.
     * @example
     * // Create one SanctionAppliquee
     * const SanctionAppliquee = await prisma.sanctionAppliquee.create({
     *   data: {
     *     // ... data to create a SanctionAppliquee
     *   }
     * })
     * 
     */
    create<T extends SanctionAppliqueeCreateArgs>(args: SelectSubset<T, SanctionAppliqueeCreateArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SanctionAppliquees.
     * @param {SanctionAppliqueeCreateManyArgs} args - Arguments to create many SanctionAppliquees.
     * @example
     * // Create many SanctionAppliquees
     * const sanctionAppliquee = await prisma.sanctionAppliquee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SanctionAppliqueeCreateManyArgs>(args?: SelectSubset<T, SanctionAppliqueeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SanctionAppliquees and returns the data saved in the database.
     * @param {SanctionAppliqueeCreateManyAndReturnArgs} args - Arguments to create many SanctionAppliquees.
     * @example
     * // Create many SanctionAppliquees
     * const sanctionAppliquee = await prisma.sanctionAppliquee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SanctionAppliquees and only return the `id`
     * const sanctionAppliqueeWithIdOnly = await prisma.sanctionAppliquee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SanctionAppliqueeCreateManyAndReturnArgs>(args?: SelectSubset<T, SanctionAppliqueeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SanctionAppliquee.
     * @param {SanctionAppliqueeDeleteArgs} args - Arguments to delete one SanctionAppliquee.
     * @example
     * // Delete one SanctionAppliquee
     * const SanctionAppliquee = await prisma.sanctionAppliquee.delete({
     *   where: {
     *     // ... filter to delete one SanctionAppliquee
     *   }
     * })
     * 
     */
    delete<T extends SanctionAppliqueeDeleteArgs>(args: SelectSubset<T, SanctionAppliqueeDeleteArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SanctionAppliquee.
     * @param {SanctionAppliqueeUpdateArgs} args - Arguments to update one SanctionAppliquee.
     * @example
     * // Update one SanctionAppliquee
     * const sanctionAppliquee = await prisma.sanctionAppliquee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SanctionAppliqueeUpdateArgs>(args: SelectSubset<T, SanctionAppliqueeUpdateArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SanctionAppliquees.
     * @param {SanctionAppliqueeDeleteManyArgs} args - Arguments to filter SanctionAppliquees to delete.
     * @example
     * // Delete a few SanctionAppliquees
     * const { count } = await prisma.sanctionAppliquee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SanctionAppliqueeDeleteManyArgs>(args?: SelectSubset<T, SanctionAppliqueeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanctionAppliquees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAppliqueeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SanctionAppliquees
     * const sanctionAppliquee = await prisma.sanctionAppliquee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SanctionAppliqueeUpdateManyArgs>(args: SelectSubset<T, SanctionAppliqueeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SanctionAppliquees and returns the data updated in the database.
     * @param {SanctionAppliqueeUpdateManyAndReturnArgs} args - Arguments to update many SanctionAppliquees.
     * @example
     * // Update many SanctionAppliquees
     * const sanctionAppliquee = await prisma.sanctionAppliquee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SanctionAppliquees and only return the `id`
     * const sanctionAppliqueeWithIdOnly = await prisma.sanctionAppliquee.updateManyAndReturn({
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
    updateManyAndReturn<T extends SanctionAppliqueeUpdateManyAndReturnArgs>(args: SelectSubset<T, SanctionAppliqueeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SanctionAppliquee.
     * @param {SanctionAppliqueeUpsertArgs} args - Arguments to update or create a SanctionAppliquee.
     * @example
     * // Update or create a SanctionAppliquee
     * const sanctionAppliquee = await prisma.sanctionAppliquee.upsert({
     *   create: {
     *     // ... data to create a SanctionAppliquee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SanctionAppliquee we want to update
     *   }
     * })
     */
    upsert<T extends SanctionAppliqueeUpsertArgs>(args: SelectSubset<T, SanctionAppliqueeUpsertArgs<ExtArgs>>): Prisma__SanctionAppliqueeClient<$Result.GetResult<Prisma.$SanctionAppliqueePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SanctionAppliquees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAppliqueeCountArgs} args - Arguments to filter SanctionAppliquees to count.
     * @example
     * // Count the number of SanctionAppliquees
     * const count = await prisma.sanctionAppliquee.count({
     *   where: {
     *     // ... the filter for the SanctionAppliquees we want to count
     *   }
     * })
    **/
    count<T extends SanctionAppliqueeCountArgs>(
      args?: Subset<T, SanctionAppliqueeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SanctionAppliqueeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SanctionAppliquee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAppliqueeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SanctionAppliqueeAggregateArgs>(args: Subset<T, SanctionAppliqueeAggregateArgs>): Prisma.PrismaPromise<GetSanctionAppliqueeAggregateType<T>>

    /**
     * Group by SanctionAppliquee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SanctionAppliqueeGroupByArgs} args - Group by arguments.
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
      T extends SanctionAppliqueeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SanctionAppliqueeGroupByArgs['orderBy'] }
        : { orderBy?: SanctionAppliqueeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SanctionAppliqueeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSanctionAppliqueeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SanctionAppliquee model
   */
  readonly fields: SanctionAppliqueeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SanctionAppliquee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SanctionAppliqueeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SanctionAppliquee model
   */
  interface SanctionAppliqueeFieldRefs {
    readonly id: FieldRef<"SanctionAppliquee", 'Int'>
    readonly presenceId: FieldRef<"SanctionAppliquee", 'Int'>
    readonly typeSanctionId: FieldRef<"SanctionAppliquee", 'Int'>
    readonly montantApplique: FieldRef<"SanctionAppliquee", 'Float'>
    readonly commentaire: FieldRef<"SanctionAppliquee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SanctionAppliquee findUnique
   */
  export type SanctionAppliqueeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * Filter, which SanctionAppliquee to fetch.
     */
    where: SanctionAppliqueeWhereUniqueInput
  }

  /**
   * SanctionAppliquee findUniqueOrThrow
   */
  export type SanctionAppliqueeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * Filter, which SanctionAppliquee to fetch.
     */
    where: SanctionAppliqueeWhereUniqueInput
  }

  /**
   * SanctionAppliquee findFirst
   */
  export type SanctionAppliqueeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * Filter, which SanctionAppliquee to fetch.
     */
    where?: SanctionAppliqueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionAppliquees to fetch.
     */
    orderBy?: SanctionAppliqueeOrderByWithRelationInput | SanctionAppliqueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanctionAppliquees.
     */
    cursor?: SanctionAppliqueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionAppliquees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionAppliquees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanctionAppliquees.
     */
    distinct?: SanctionAppliqueeScalarFieldEnum | SanctionAppliqueeScalarFieldEnum[]
  }

  /**
   * SanctionAppliquee findFirstOrThrow
   */
  export type SanctionAppliqueeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * Filter, which SanctionAppliquee to fetch.
     */
    where?: SanctionAppliqueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionAppliquees to fetch.
     */
    orderBy?: SanctionAppliqueeOrderByWithRelationInput | SanctionAppliqueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SanctionAppliquees.
     */
    cursor?: SanctionAppliqueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionAppliquees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionAppliquees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanctionAppliquees.
     */
    distinct?: SanctionAppliqueeScalarFieldEnum | SanctionAppliqueeScalarFieldEnum[]
  }

  /**
   * SanctionAppliquee findMany
   */
  export type SanctionAppliqueeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * Filter, which SanctionAppliquees to fetch.
     */
    where?: SanctionAppliqueeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SanctionAppliquees to fetch.
     */
    orderBy?: SanctionAppliqueeOrderByWithRelationInput | SanctionAppliqueeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SanctionAppliquees.
     */
    cursor?: SanctionAppliqueeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SanctionAppliquees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SanctionAppliquees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SanctionAppliquees.
     */
    distinct?: SanctionAppliqueeScalarFieldEnum | SanctionAppliqueeScalarFieldEnum[]
  }

  /**
   * SanctionAppliquee create
   */
  export type SanctionAppliqueeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * The data needed to create a SanctionAppliquee.
     */
    data?: XOR<SanctionAppliqueeCreateInput, SanctionAppliqueeUncheckedCreateInput>
  }

  /**
   * SanctionAppliquee createMany
   */
  export type SanctionAppliqueeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SanctionAppliquees.
     */
    data: SanctionAppliqueeCreateManyInput | SanctionAppliqueeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SanctionAppliquee createManyAndReturn
   */
  export type SanctionAppliqueeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * The data used to create many SanctionAppliquees.
     */
    data: SanctionAppliqueeCreateManyInput | SanctionAppliqueeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SanctionAppliquee update
   */
  export type SanctionAppliqueeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * The data needed to update a SanctionAppliquee.
     */
    data: XOR<SanctionAppliqueeUpdateInput, SanctionAppliqueeUncheckedUpdateInput>
    /**
     * Choose, which SanctionAppliquee to update.
     */
    where: SanctionAppliqueeWhereUniqueInput
  }

  /**
   * SanctionAppliquee updateMany
   */
  export type SanctionAppliqueeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SanctionAppliquees.
     */
    data: XOR<SanctionAppliqueeUpdateManyMutationInput, SanctionAppliqueeUncheckedUpdateManyInput>
    /**
     * Filter which SanctionAppliquees to update
     */
    where?: SanctionAppliqueeWhereInput
    /**
     * Limit how many SanctionAppliquees to update.
     */
    limit?: number
  }

  /**
   * SanctionAppliquee updateManyAndReturn
   */
  export type SanctionAppliqueeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * The data used to update SanctionAppliquees.
     */
    data: XOR<SanctionAppliqueeUpdateManyMutationInput, SanctionAppliqueeUncheckedUpdateManyInput>
    /**
     * Filter which SanctionAppliquees to update
     */
    where?: SanctionAppliqueeWhereInput
    /**
     * Limit how many SanctionAppliquees to update.
     */
    limit?: number
  }

  /**
   * SanctionAppliquee upsert
   */
  export type SanctionAppliqueeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * The filter to search for the SanctionAppliquee to update in case it exists.
     */
    where: SanctionAppliqueeWhereUniqueInput
    /**
     * In case the SanctionAppliquee found by the `where` argument doesn't exist, create a new SanctionAppliquee with this data.
     */
    create: XOR<SanctionAppliqueeCreateInput, SanctionAppliqueeUncheckedCreateInput>
    /**
     * In case the SanctionAppliquee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SanctionAppliqueeUpdateInput, SanctionAppliqueeUncheckedUpdateInput>
  }

  /**
   * SanctionAppliquee delete
   */
  export type SanctionAppliqueeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
    /**
     * Filter which SanctionAppliquee to delete.
     */
    where: SanctionAppliqueeWhereUniqueInput
  }

  /**
   * SanctionAppliquee deleteMany
   */
  export type SanctionAppliqueeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SanctionAppliquees to delete
     */
    where?: SanctionAppliqueeWhereInput
    /**
     * Limit how many SanctionAppliquees to delete.
     */
    limit?: number
  }

  /**
   * SanctionAppliquee without action
   */
  export type SanctionAppliqueeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SanctionAppliquee
     */
    select?: SanctionAppliqueeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SanctionAppliquee
     */
    omit?: SanctionAppliqueeOmit<ExtArgs> | null
  }


  /**
   * Model ConfirmationPresence
   */

  export type AggregateConfirmationPresence = {
    _count: ConfirmationPresenceCountAggregateOutputType | null
    _avg: ConfirmationPresenceAvgAggregateOutputType | null
    _sum: ConfirmationPresenceSumAggregateOutputType | null
    _min: ConfirmationPresenceMinAggregateOutputType | null
    _max: ConfirmationPresenceMaxAggregateOutputType | null
  }

  export type ConfirmationPresenceAvgAggregateOutputType = {
    id: number | null
    matchId: number | null
    arbitreId: number | null
  }

  export type ConfirmationPresenceSumAggregateOutputType = {
    id: number | null
    matchId: number | null
    arbitreId: number | null
  }

  export type ConfirmationPresenceMinAggregateOutputType = {
    id: number | null
    matchId: number | null
    arbitreId: number | null
    date: string | null
  }

  export type ConfirmationPresenceMaxAggregateOutputType = {
    id: number | null
    matchId: number | null
    arbitreId: number | null
    date: string | null
  }

  export type ConfirmationPresenceCountAggregateOutputType = {
    id: number
    matchId: number
    arbitreId: number
    date: number
    _all: number
  }


  export type ConfirmationPresenceAvgAggregateInputType = {
    id?: true
    matchId?: true
    arbitreId?: true
  }

  export type ConfirmationPresenceSumAggregateInputType = {
    id?: true
    matchId?: true
    arbitreId?: true
  }

  export type ConfirmationPresenceMinAggregateInputType = {
    id?: true
    matchId?: true
    arbitreId?: true
    date?: true
  }

  export type ConfirmationPresenceMaxAggregateInputType = {
    id?: true
    matchId?: true
    arbitreId?: true
    date?: true
  }

  export type ConfirmationPresenceCountAggregateInputType = {
    id?: true
    matchId?: true
    arbitreId?: true
    date?: true
    _all?: true
  }

  export type ConfirmationPresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmationPresence to aggregate.
     */
    where?: ConfirmationPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationPresences to fetch.
     */
    orderBy?: ConfirmationPresenceOrderByWithRelationInput | ConfirmationPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmationPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfirmationPresences
    **/
    _count?: true | ConfirmationPresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfirmationPresenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfirmationPresenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmationPresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmationPresenceMaxAggregateInputType
  }

  export type GetConfirmationPresenceAggregateType<T extends ConfirmationPresenceAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirmationPresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirmationPresence[P]>
      : GetScalarType<T[P], AggregateConfirmationPresence[P]>
  }




  export type ConfirmationPresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmationPresenceWhereInput
    orderBy?: ConfirmationPresenceOrderByWithAggregationInput | ConfirmationPresenceOrderByWithAggregationInput[]
    by: ConfirmationPresenceScalarFieldEnum[] | ConfirmationPresenceScalarFieldEnum
    having?: ConfirmationPresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmationPresenceCountAggregateInputType | true
    _avg?: ConfirmationPresenceAvgAggregateInputType
    _sum?: ConfirmationPresenceSumAggregateInputType
    _min?: ConfirmationPresenceMinAggregateInputType
    _max?: ConfirmationPresenceMaxAggregateInputType
  }

  export type ConfirmationPresenceGroupByOutputType = {
    id: number
    matchId: number | null
    arbitreId: number | null
    date: string | null
    _count: ConfirmationPresenceCountAggregateOutputType | null
    _avg: ConfirmationPresenceAvgAggregateOutputType | null
    _sum: ConfirmationPresenceSumAggregateOutputType | null
    _min: ConfirmationPresenceMinAggregateOutputType | null
    _max: ConfirmationPresenceMaxAggregateOutputType | null
  }

  type GetConfirmationPresenceGroupByPayload<T extends ConfirmationPresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmationPresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmationPresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmationPresenceGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmationPresenceGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmationPresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    arbitreId?: boolean
    date?: boolean
  }, ExtArgs["result"]["confirmationPresence"]>

  export type ConfirmationPresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    arbitreId?: boolean
    date?: boolean
  }, ExtArgs["result"]["confirmationPresence"]>

  export type ConfirmationPresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    arbitreId?: boolean
    date?: boolean
  }, ExtArgs["result"]["confirmationPresence"]>

  export type ConfirmationPresenceSelectScalar = {
    id?: boolean
    matchId?: boolean
    arbitreId?: boolean
    date?: boolean
  }

  export type ConfirmationPresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "arbitreId" | "date", ExtArgs["result"]["confirmationPresence"]>

  export type $ConfirmationPresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfirmationPresence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matchId: number | null
      arbitreId: number | null
      date: string | null
    }, ExtArgs["result"]["confirmationPresence"]>
    composites: {}
  }

  type ConfirmationPresenceGetPayload<S extends boolean | null | undefined | ConfirmationPresenceDefaultArgs> = $Result.GetResult<Prisma.$ConfirmationPresencePayload, S>

  type ConfirmationPresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfirmationPresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfirmationPresenceCountAggregateInputType | true
    }

  export interface ConfirmationPresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfirmationPresence'], meta: { name: 'ConfirmationPresence' } }
    /**
     * Find zero or one ConfirmationPresence that matches the filter.
     * @param {ConfirmationPresenceFindUniqueArgs} args - Arguments to find a ConfirmationPresence
     * @example
     * // Get one ConfirmationPresence
     * const confirmationPresence = await prisma.confirmationPresence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfirmationPresenceFindUniqueArgs>(args: SelectSubset<T, ConfirmationPresenceFindUniqueArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfirmationPresence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfirmationPresenceFindUniqueOrThrowArgs} args - Arguments to find a ConfirmationPresence
     * @example
     * // Get one ConfirmationPresence
     * const confirmationPresence = await prisma.confirmationPresence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfirmationPresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfirmationPresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmationPresence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationPresenceFindFirstArgs} args - Arguments to find a ConfirmationPresence
     * @example
     * // Get one ConfirmationPresence
     * const confirmationPresence = await prisma.confirmationPresence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfirmationPresenceFindFirstArgs>(args?: SelectSubset<T, ConfirmationPresenceFindFirstArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmationPresence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationPresenceFindFirstOrThrowArgs} args - Arguments to find a ConfirmationPresence
     * @example
     * // Get one ConfirmationPresence
     * const confirmationPresence = await prisma.confirmationPresence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfirmationPresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfirmationPresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfirmationPresences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationPresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfirmationPresences
     * const confirmationPresences = await prisma.confirmationPresence.findMany()
     * 
     * // Get first 10 ConfirmationPresences
     * const confirmationPresences = await prisma.confirmationPresence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const confirmationPresenceWithIdOnly = await prisma.confirmationPresence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConfirmationPresenceFindManyArgs>(args?: SelectSubset<T, ConfirmationPresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfirmationPresence.
     * @param {ConfirmationPresenceCreateArgs} args - Arguments to create a ConfirmationPresence.
     * @example
     * // Create one ConfirmationPresence
     * const ConfirmationPresence = await prisma.confirmationPresence.create({
     *   data: {
     *     // ... data to create a ConfirmationPresence
     *   }
     * })
     * 
     */
    create<T extends ConfirmationPresenceCreateArgs>(args: SelectSubset<T, ConfirmationPresenceCreateArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfirmationPresences.
     * @param {ConfirmationPresenceCreateManyArgs} args - Arguments to create many ConfirmationPresences.
     * @example
     * // Create many ConfirmationPresences
     * const confirmationPresence = await prisma.confirmationPresence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfirmationPresenceCreateManyArgs>(args?: SelectSubset<T, ConfirmationPresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfirmationPresences and returns the data saved in the database.
     * @param {ConfirmationPresenceCreateManyAndReturnArgs} args - Arguments to create many ConfirmationPresences.
     * @example
     * // Create many ConfirmationPresences
     * const confirmationPresence = await prisma.confirmationPresence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfirmationPresences and only return the `id`
     * const confirmationPresenceWithIdOnly = await prisma.confirmationPresence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfirmationPresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfirmationPresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfirmationPresence.
     * @param {ConfirmationPresenceDeleteArgs} args - Arguments to delete one ConfirmationPresence.
     * @example
     * // Delete one ConfirmationPresence
     * const ConfirmationPresence = await prisma.confirmationPresence.delete({
     *   where: {
     *     // ... filter to delete one ConfirmationPresence
     *   }
     * })
     * 
     */
    delete<T extends ConfirmationPresenceDeleteArgs>(args: SelectSubset<T, ConfirmationPresenceDeleteArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfirmationPresence.
     * @param {ConfirmationPresenceUpdateArgs} args - Arguments to update one ConfirmationPresence.
     * @example
     * // Update one ConfirmationPresence
     * const confirmationPresence = await prisma.confirmationPresence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfirmationPresenceUpdateArgs>(args: SelectSubset<T, ConfirmationPresenceUpdateArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfirmationPresences.
     * @param {ConfirmationPresenceDeleteManyArgs} args - Arguments to filter ConfirmationPresences to delete.
     * @example
     * // Delete a few ConfirmationPresences
     * const { count } = await prisma.confirmationPresence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfirmationPresenceDeleteManyArgs>(args?: SelectSubset<T, ConfirmationPresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmationPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationPresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfirmationPresences
     * const confirmationPresence = await prisma.confirmationPresence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfirmationPresenceUpdateManyArgs>(args: SelectSubset<T, ConfirmationPresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmationPresences and returns the data updated in the database.
     * @param {ConfirmationPresenceUpdateManyAndReturnArgs} args - Arguments to update many ConfirmationPresences.
     * @example
     * // Update many ConfirmationPresences
     * const confirmationPresence = await prisma.confirmationPresence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfirmationPresences and only return the `id`
     * const confirmationPresenceWithIdOnly = await prisma.confirmationPresence.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConfirmationPresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfirmationPresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfirmationPresence.
     * @param {ConfirmationPresenceUpsertArgs} args - Arguments to update or create a ConfirmationPresence.
     * @example
     * // Update or create a ConfirmationPresence
     * const confirmationPresence = await prisma.confirmationPresence.upsert({
     *   create: {
     *     // ... data to create a ConfirmationPresence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfirmationPresence we want to update
     *   }
     * })
     */
    upsert<T extends ConfirmationPresenceUpsertArgs>(args: SelectSubset<T, ConfirmationPresenceUpsertArgs<ExtArgs>>): Prisma__ConfirmationPresenceClient<$Result.GetResult<Prisma.$ConfirmationPresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfirmationPresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationPresenceCountArgs} args - Arguments to filter ConfirmationPresences to count.
     * @example
     * // Count the number of ConfirmationPresences
     * const count = await prisma.confirmationPresence.count({
     *   where: {
     *     // ... the filter for the ConfirmationPresences we want to count
     *   }
     * })
    **/
    count<T extends ConfirmationPresenceCountArgs>(
      args?: Subset<T, ConfirmationPresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmationPresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfirmationPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationPresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConfirmationPresenceAggregateArgs>(args: Subset<T, ConfirmationPresenceAggregateArgs>): Prisma.PrismaPromise<GetConfirmationPresenceAggregateType<T>>

    /**
     * Group by ConfirmationPresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmationPresenceGroupByArgs} args - Group by arguments.
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
      T extends ConfirmationPresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmationPresenceGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmationPresenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConfirmationPresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmationPresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfirmationPresence model
   */
  readonly fields: ConfirmationPresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfirmationPresence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmationPresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ConfirmationPresence model
   */
  interface ConfirmationPresenceFieldRefs {
    readonly id: FieldRef<"ConfirmationPresence", 'Int'>
    readonly matchId: FieldRef<"ConfirmationPresence", 'Int'>
    readonly arbitreId: FieldRef<"ConfirmationPresence", 'Int'>
    readonly date: FieldRef<"ConfirmationPresence", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConfirmationPresence findUnique
   */
  export type ConfirmationPresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmationPresence to fetch.
     */
    where: ConfirmationPresenceWhereUniqueInput
  }

  /**
   * ConfirmationPresence findUniqueOrThrow
   */
  export type ConfirmationPresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmationPresence to fetch.
     */
    where: ConfirmationPresenceWhereUniqueInput
  }

  /**
   * ConfirmationPresence findFirst
   */
  export type ConfirmationPresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmationPresence to fetch.
     */
    where?: ConfirmationPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationPresences to fetch.
     */
    orderBy?: ConfirmationPresenceOrderByWithRelationInput | ConfirmationPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmationPresences.
     */
    cursor?: ConfirmationPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmationPresences.
     */
    distinct?: ConfirmationPresenceScalarFieldEnum | ConfirmationPresenceScalarFieldEnum[]
  }

  /**
   * ConfirmationPresence findFirstOrThrow
   */
  export type ConfirmationPresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmationPresence to fetch.
     */
    where?: ConfirmationPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationPresences to fetch.
     */
    orderBy?: ConfirmationPresenceOrderByWithRelationInput | ConfirmationPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmationPresences.
     */
    cursor?: ConfirmationPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmationPresences.
     */
    distinct?: ConfirmationPresenceScalarFieldEnum | ConfirmationPresenceScalarFieldEnum[]
  }

  /**
   * ConfirmationPresence findMany
   */
  export type ConfirmationPresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * Filter, which ConfirmationPresences to fetch.
     */
    where?: ConfirmationPresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmationPresences to fetch.
     */
    orderBy?: ConfirmationPresenceOrderByWithRelationInput | ConfirmationPresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfirmationPresences.
     */
    cursor?: ConfirmationPresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmationPresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmationPresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmationPresences.
     */
    distinct?: ConfirmationPresenceScalarFieldEnum | ConfirmationPresenceScalarFieldEnum[]
  }

  /**
   * ConfirmationPresence create
   */
  export type ConfirmationPresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * The data needed to create a ConfirmationPresence.
     */
    data?: XOR<ConfirmationPresenceCreateInput, ConfirmationPresenceUncheckedCreateInput>
  }

  /**
   * ConfirmationPresence createMany
   */
  export type ConfirmationPresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfirmationPresences.
     */
    data: ConfirmationPresenceCreateManyInput | ConfirmationPresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmationPresence createManyAndReturn
   */
  export type ConfirmationPresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * The data used to create many ConfirmationPresences.
     */
    data: ConfirmationPresenceCreateManyInput | ConfirmationPresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmationPresence update
   */
  export type ConfirmationPresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * The data needed to update a ConfirmationPresence.
     */
    data: XOR<ConfirmationPresenceUpdateInput, ConfirmationPresenceUncheckedUpdateInput>
    /**
     * Choose, which ConfirmationPresence to update.
     */
    where: ConfirmationPresenceWhereUniqueInput
  }

  /**
   * ConfirmationPresence updateMany
   */
  export type ConfirmationPresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfirmationPresences.
     */
    data: XOR<ConfirmationPresenceUpdateManyMutationInput, ConfirmationPresenceUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmationPresences to update
     */
    where?: ConfirmationPresenceWhereInput
    /**
     * Limit how many ConfirmationPresences to update.
     */
    limit?: number
  }

  /**
   * ConfirmationPresence updateManyAndReturn
   */
  export type ConfirmationPresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * The data used to update ConfirmationPresences.
     */
    data: XOR<ConfirmationPresenceUpdateManyMutationInput, ConfirmationPresenceUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmationPresences to update
     */
    where?: ConfirmationPresenceWhereInput
    /**
     * Limit how many ConfirmationPresences to update.
     */
    limit?: number
  }

  /**
   * ConfirmationPresence upsert
   */
  export type ConfirmationPresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * The filter to search for the ConfirmationPresence to update in case it exists.
     */
    where: ConfirmationPresenceWhereUniqueInput
    /**
     * In case the ConfirmationPresence found by the `where` argument doesn't exist, create a new ConfirmationPresence with this data.
     */
    create: XOR<ConfirmationPresenceCreateInput, ConfirmationPresenceUncheckedCreateInput>
    /**
     * In case the ConfirmationPresence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmationPresenceUpdateInput, ConfirmationPresenceUncheckedUpdateInput>
  }

  /**
   * ConfirmationPresence delete
   */
  export type ConfirmationPresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
    /**
     * Filter which ConfirmationPresence to delete.
     */
    where: ConfirmationPresenceWhereUniqueInput
  }

  /**
   * ConfirmationPresence deleteMany
   */
  export type ConfirmationPresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmationPresences to delete
     */
    where?: ConfirmationPresenceWhereInput
    /**
     * Limit how many ConfirmationPresences to delete.
     */
    limit?: number
  }

  /**
   * ConfirmationPresence without action
   */
  export type ConfirmationPresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmationPresence
     */
    select?: ConfirmationPresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmationPresence
     */
    omit?: ConfirmationPresenceOmit<ExtArgs> | null
  }


  /**
   * Model RapportArbitre
   */

  export type AggregateRapportArbitre = {
    _count: RapportArbitreCountAggregateOutputType | null
    _avg: RapportArbitreAvgAggregateOutputType | null
    _sum: RapportArbitreSumAggregateOutputType | null
    _min: RapportArbitreMinAggregateOutputType | null
    _max: RapportArbitreMaxAggregateOutputType | null
  }

  export type RapportArbitreAvgAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
    arbitreId: number | null
  }

  export type RapportArbitreSumAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
    arbitreId: number | null
  }

  export type RapportArbitreMinAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
    arbitreId: number | null
    redacteurNom: string | null
    scoreDom: string | null
    scoreVis: string | null
    discipline: string | null
    incidents: string | null
    observations: string | null
    statut: string | null
    dateEnvoi: string | null
    numMatch: string | null
    enFaveurDe: string | null
    assesseur: string | null
    commentaires: string | null
    decisionsImpacte: string | null
    arbitreRecommande: string | null
    suiviParticulier: string | null
  }

  export type RapportArbitreMaxAggregateOutputType = {
    id: number | null
    matchId: number | null
    saisonId: number | null
    arbitreId: number | null
    redacteurNom: string | null
    scoreDom: string | null
    scoreVis: string | null
    discipline: string | null
    incidents: string | null
    observations: string | null
    statut: string | null
    dateEnvoi: string | null
    numMatch: string | null
    enFaveurDe: string | null
    assesseur: string | null
    commentaires: string | null
    decisionsImpacte: string | null
    arbitreRecommande: string | null
    suiviParticulier: string | null
  }

  export type RapportArbitreCountAggregateOutputType = {
    id: number
    matchId: number
    saisonId: number
    arbitreId: number
    redacteurNom: number
    scoreDom: number
    scoreVis: number
    discipline: number
    incidents: number
    observations: number
    equipe: number
    statut: number
    dateEnvoi: number
    numMatch: number
    enFaveurDe: number
    assesseur: number
    commentaires: number
    decisionsImpacte: number
    arbitreRecommande: number
    suiviParticulier: number
    _all: number
  }


  export type RapportArbitreAvgAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    arbitreId?: true
  }

  export type RapportArbitreSumAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    arbitreId?: true
  }

  export type RapportArbitreMinAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    arbitreId?: true
    redacteurNom?: true
    scoreDom?: true
    scoreVis?: true
    discipline?: true
    incidents?: true
    observations?: true
    statut?: true
    dateEnvoi?: true
    numMatch?: true
    enFaveurDe?: true
    assesseur?: true
    commentaires?: true
    decisionsImpacte?: true
    arbitreRecommande?: true
    suiviParticulier?: true
  }

  export type RapportArbitreMaxAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    arbitreId?: true
    redacteurNom?: true
    scoreDom?: true
    scoreVis?: true
    discipline?: true
    incidents?: true
    observations?: true
    statut?: true
    dateEnvoi?: true
    numMatch?: true
    enFaveurDe?: true
    assesseur?: true
    commentaires?: true
    decisionsImpacte?: true
    arbitreRecommande?: true
    suiviParticulier?: true
  }

  export type RapportArbitreCountAggregateInputType = {
    id?: true
    matchId?: true
    saisonId?: true
    arbitreId?: true
    redacteurNom?: true
    scoreDom?: true
    scoreVis?: true
    discipline?: true
    incidents?: true
    observations?: true
    equipe?: true
    statut?: true
    dateEnvoi?: true
    numMatch?: true
    enFaveurDe?: true
    assesseur?: true
    commentaires?: true
    decisionsImpacte?: true
    arbitreRecommande?: true
    suiviParticulier?: true
    _all?: true
  }

  export type RapportArbitreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RapportArbitre to aggregate.
     */
    where?: RapportArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapportArbitres to fetch.
     */
    orderBy?: RapportArbitreOrderByWithRelationInput | RapportArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RapportArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapportArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapportArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RapportArbitres
    **/
    _count?: true | RapportArbitreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RapportArbitreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RapportArbitreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RapportArbitreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RapportArbitreMaxAggregateInputType
  }

  export type GetRapportArbitreAggregateType<T extends RapportArbitreAggregateArgs> = {
        [P in keyof T & keyof AggregateRapportArbitre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRapportArbitre[P]>
      : GetScalarType<T[P], AggregateRapportArbitre[P]>
  }




  export type RapportArbitreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RapportArbitreWhereInput
    orderBy?: RapportArbitreOrderByWithAggregationInput | RapportArbitreOrderByWithAggregationInput[]
    by: RapportArbitreScalarFieldEnum[] | RapportArbitreScalarFieldEnum
    having?: RapportArbitreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RapportArbitreCountAggregateInputType | true
    _avg?: RapportArbitreAvgAggregateInputType
    _sum?: RapportArbitreSumAggregateInputType
    _min?: RapportArbitreMinAggregateInputType
    _max?: RapportArbitreMaxAggregateInputType
  }

  export type RapportArbitreGroupByOutputType = {
    id: number
    matchId: number | null
    saisonId: number | null
    arbitreId: number | null
    redacteurNom: string | null
    scoreDom: string | null
    scoreVis: string | null
    discipline: string | null
    incidents: string | null
    observations: string | null
    equipe: JsonValue | null
    statut: string | null
    dateEnvoi: string | null
    numMatch: string | null
    enFaveurDe: string | null
    assesseur: string | null
    commentaires: string | null
    decisionsImpacte: string | null
    arbitreRecommande: string | null
    suiviParticulier: string | null
    _count: RapportArbitreCountAggregateOutputType | null
    _avg: RapportArbitreAvgAggregateOutputType | null
    _sum: RapportArbitreSumAggregateOutputType | null
    _min: RapportArbitreMinAggregateOutputType | null
    _max: RapportArbitreMaxAggregateOutputType | null
  }

  type GetRapportArbitreGroupByPayload<T extends RapportArbitreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RapportArbitreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RapportArbitreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RapportArbitreGroupByOutputType[P]>
            : GetScalarType<T[P], RapportArbitreGroupByOutputType[P]>
        }
      >
    >


  export type RapportArbitreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    arbitreId?: boolean
    redacteurNom?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    discipline?: boolean
    incidents?: boolean
    observations?: boolean
    equipe?: boolean
    statut?: boolean
    dateEnvoi?: boolean
    numMatch?: boolean
    enFaveurDe?: boolean
    assesseur?: boolean
    commentaires?: boolean
    decisionsImpacte?: boolean
    arbitreRecommande?: boolean
    suiviParticulier?: boolean
  }, ExtArgs["result"]["rapportArbitre"]>

  export type RapportArbitreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    arbitreId?: boolean
    redacteurNom?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    discipline?: boolean
    incidents?: boolean
    observations?: boolean
    equipe?: boolean
    statut?: boolean
    dateEnvoi?: boolean
    numMatch?: boolean
    enFaveurDe?: boolean
    assesseur?: boolean
    commentaires?: boolean
    decisionsImpacte?: boolean
    arbitreRecommande?: boolean
    suiviParticulier?: boolean
  }, ExtArgs["result"]["rapportArbitre"]>

  export type RapportArbitreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    arbitreId?: boolean
    redacteurNom?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    discipline?: boolean
    incidents?: boolean
    observations?: boolean
    equipe?: boolean
    statut?: boolean
    dateEnvoi?: boolean
    numMatch?: boolean
    enFaveurDe?: boolean
    assesseur?: boolean
    commentaires?: boolean
    decisionsImpacte?: boolean
    arbitreRecommande?: boolean
    suiviParticulier?: boolean
  }, ExtArgs["result"]["rapportArbitre"]>

  export type RapportArbitreSelectScalar = {
    id?: boolean
    matchId?: boolean
    saisonId?: boolean
    arbitreId?: boolean
    redacteurNom?: boolean
    scoreDom?: boolean
    scoreVis?: boolean
    discipline?: boolean
    incidents?: boolean
    observations?: boolean
    equipe?: boolean
    statut?: boolean
    dateEnvoi?: boolean
    numMatch?: boolean
    enFaveurDe?: boolean
    assesseur?: boolean
    commentaires?: boolean
    decisionsImpacte?: boolean
    arbitreRecommande?: boolean
    suiviParticulier?: boolean
  }

  export type RapportArbitreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "saisonId" | "arbitreId" | "redacteurNom" | "scoreDom" | "scoreVis" | "discipline" | "incidents" | "observations" | "equipe" | "statut" | "dateEnvoi" | "numMatch" | "enFaveurDe" | "assesseur" | "commentaires" | "decisionsImpacte" | "arbitreRecommande" | "suiviParticulier", ExtArgs["result"]["rapportArbitre"]>

  export type $RapportArbitrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RapportArbitre"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matchId: number | null
      saisonId: number | null
      arbitreId: number | null
      redacteurNom: string | null
      scoreDom: string | null
      scoreVis: string | null
      discipline: string | null
      incidents: string | null
      observations: string | null
      equipe: Prisma.JsonValue | null
      statut: string | null
      dateEnvoi: string | null
      numMatch: string | null
      enFaveurDe: string | null
      assesseur: string | null
      commentaires: string | null
      decisionsImpacte: string | null
      arbitreRecommande: string | null
      suiviParticulier: string | null
    }, ExtArgs["result"]["rapportArbitre"]>
    composites: {}
  }

  type RapportArbitreGetPayload<S extends boolean | null | undefined | RapportArbitreDefaultArgs> = $Result.GetResult<Prisma.$RapportArbitrePayload, S>

  type RapportArbitreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RapportArbitreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RapportArbitreCountAggregateInputType | true
    }

  export interface RapportArbitreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RapportArbitre'], meta: { name: 'RapportArbitre' } }
    /**
     * Find zero or one RapportArbitre that matches the filter.
     * @param {RapportArbitreFindUniqueArgs} args - Arguments to find a RapportArbitre
     * @example
     * // Get one RapportArbitre
     * const rapportArbitre = await prisma.rapportArbitre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RapportArbitreFindUniqueArgs>(args: SelectSubset<T, RapportArbitreFindUniqueArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RapportArbitre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RapportArbitreFindUniqueOrThrowArgs} args - Arguments to find a RapportArbitre
     * @example
     * // Get one RapportArbitre
     * const rapportArbitre = await prisma.rapportArbitre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RapportArbitreFindUniqueOrThrowArgs>(args: SelectSubset<T, RapportArbitreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RapportArbitre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportArbitreFindFirstArgs} args - Arguments to find a RapportArbitre
     * @example
     * // Get one RapportArbitre
     * const rapportArbitre = await prisma.rapportArbitre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RapportArbitreFindFirstArgs>(args?: SelectSubset<T, RapportArbitreFindFirstArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RapportArbitre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportArbitreFindFirstOrThrowArgs} args - Arguments to find a RapportArbitre
     * @example
     * // Get one RapportArbitre
     * const rapportArbitre = await prisma.rapportArbitre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RapportArbitreFindFirstOrThrowArgs>(args?: SelectSubset<T, RapportArbitreFindFirstOrThrowArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RapportArbitres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportArbitreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RapportArbitres
     * const rapportArbitres = await prisma.rapportArbitre.findMany()
     * 
     * // Get first 10 RapportArbitres
     * const rapportArbitres = await prisma.rapportArbitre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rapportArbitreWithIdOnly = await prisma.rapportArbitre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RapportArbitreFindManyArgs>(args?: SelectSubset<T, RapportArbitreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RapportArbitre.
     * @param {RapportArbitreCreateArgs} args - Arguments to create a RapportArbitre.
     * @example
     * // Create one RapportArbitre
     * const RapportArbitre = await prisma.rapportArbitre.create({
     *   data: {
     *     // ... data to create a RapportArbitre
     *   }
     * })
     * 
     */
    create<T extends RapportArbitreCreateArgs>(args: SelectSubset<T, RapportArbitreCreateArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RapportArbitres.
     * @param {RapportArbitreCreateManyArgs} args - Arguments to create many RapportArbitres.
     * @example
     * // Create many RapportArbitres
     * const rapportArbitre = await prisma.rapportArbitre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RapportArbitreCreateManyArgs>(args?: SelectSubset<T, RapportArbitreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RapportArbitres and returns the data saved in the database.
     * @param {RapportArbitreCreateManyAndReturnArgs} args - Arguments to create many RapportArbitres.
     * @example
     * // Create many RapportArbitres
     * const rapportArbitre = await prisma.rapportArbitre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RapportArbitres and only return the `id`
     * const rapportArbitreWithIdOnly = await prisma.rapportArbitre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RapportArbitreCreateManyAndReturnArgs>(args?: SelectSubset<T, RapportArbitreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RapportArbitre.
     * @param {RapportArbitreDeleteArgs} args - Arguments to delete one RapportArbitre.
     * @example
     * // Delete one RapportArbitre
     * const RapportArbitre = await prisma.rapportArbitre.delete({
     *   where: {
     *     // ... filter to delete one RapportArbitre
     *   }
     * })
     * 
     */
    delete<T extends RapportArbitreDeleteArgs>(args: SelectSubset<T, RapportArbitreDeleteArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RapportArbitre.
     * @param {RapportArbitreUpdateArgs} args - Arguments to update one RapportArbitre.
     * @example
     * // Update one RapportArbitre
     * const rapportArbitre = await prisma.rapportArbitre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RapportArbitreUpdateArgs>(args: SelectSubset<T, RapportArbitreUpdateArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RapportArbitres.
     * @param {RapportArbitreDeleteManyArgs} args - Arguments to filter RapportArbitres to delete.
     * @example
     * // Delete a few RapportArbitres
     * const { count } = await prisma.rapportArbitre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RapportArbitreDeleteManyArgs>(args?: SelectSubset<T, RapportArbitreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RapportArbitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportArbitreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RapportArbitres
     * const rapportArbitre = await prisma.rapportArbitre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RapportArbitreUpdateManyArgs>(args: SelectSubset<T, RapportArbitreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RapportArbitres and returns the data updated in the database.
     * @param {RapportArbitreUpdateManyAndReturnArgs} args - Arguments to update many RapportArbitres.
     * @example
     * // Update many RapportArbitres
     * const rapportArbitre = await prisma.rapportArbitre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RapportArbitres and only return the `id`
     * const rapportArbitreWithIdOnly = await prisma.rapportArbitre.updateManyAndReturn({
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
    updateManyAndReturn<T extends RapportArbitreUpdateManyAndReturnArgs>(args: SelectSubset<T, RapportArbitreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RapportArbitre.
     * @param {RapportArbitreUpsertArgs} args - Arguments to update or create a RapportArbitre.
     * @example
     * // Update or create a RapportArbitre
     * const rapportArbitre = await prisma.rapportArbitre.upsert({
     *   create: {
     *     // ... data to create a RapportArbitre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RapportArbitre we want to update
     *   }
     * })
     */
    upsert<T extends RapportArbitreUpsertArgs>(args: SelectSubset<T, RapportArbitreUpsertArgs<ExtArgs>>): Prisma__RapportArbitreClient<$Result.GetResult<Prisma.$RapportArbitrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RapportArbitres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportArbitreCountArgs} args - Arguments to filter RapportArbitres to count.
     * @example
     * // Count the number of RapportArbitres
     * const count = await prisma.rapportArbitre.count({
     *   where: {
     *     // ... the filter for the RapportArbitres we want to count
     *   }
     * })
    **/
    count<T extends RapportArbitreCountArgs>(
      args?: Subset<T, RapportArbitreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RapportArbitreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RapportArbitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportArbitreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RapportArbitreAggregateArgs>(args: Subset<T, RapportArbitreAggregateArgs>): Prisma.PrismaPromise<GetRapportArbitreAggregateType<T>>

    /**
     * Group by RapportArbitre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RapportArbitreGroupByArgs} args - Group by arguments.
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
      T extends RapportArbitreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RapportArbitreGroupByArgs['orderBy'] }
        : { orderBy?: RapportArbitreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RapportArbitreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRapportArbitreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RapportArbitre model
   */
  readonly fields: RapportArbitreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RapportArbitre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RapportArbitreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the RapportArbitre model
   */
  interface RapportArbitreFieldRefs {
    readonly id: FieldRef<"RapportArbitre", 'Int'>
    readonly matchId: FieldRef<"RapportArbitre", 'Int'>
    readonly saisonId: FieldRef<"RapportArbitre", 'Int'>
    readonly arbitreId: FieldRef<"RapportArbitre", 'Int'>
    readonly redacteurNom: FieldRef<"RapportArbitre", 'String'>
    readonly scoreDom: FieldRef<"RapportArbitre", 'String'>
    readonly scoreVis: FieldRef<"RapportArbitre", 'String'>
    readonly discipline: FieldRef<"RapportArbitre", 'String'>
    readonly incidents: FieldRef<"RapportArbitre", 'String'>
    readonly observations: FieldRef<"RapportArbitre", 'String'>
    readonly equipe: FieldRef<"RapportArbitre", 'Json'>
    readonly statut: FieldRef<"RapportArbitre", 'String'>
    readonly dateEnvoi: FieldRef<"RapportArbitre", 'String'>
    readonly numMatch: FieldRef<"RapportArbitre", 'String'>
    readonly enFaveurDe: FieldRef<"RapportArbitre", 'String'>
    readonly assesseur: FieldRef<"RapportArbitre", 'String'>
    readonly commentaires: FieldRef<"RapportArbitre", 'String'>
    readonly decisionsImpacte: FieldRef<"RapportArbitre", 'String'>
    readonly arbitreRecommande: FieldRef<"RapportArbitre", 'String'>
    readonly suiviParticulier: FieldRef<"RapportArbitre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RapportArbitre findUnique
   */
  export type RapportArbitreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * Filter, which RapportArbitre to fetch.
     */
    where: RapportArbitreWhereUniqueInput
  }

  /**
   * RapportArbitre findUniqueOrThrow
   */
  export type RapportArbitreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * Filter, which RapportArbitre to fetch.
     */
    where: RapportArbitreWhereUniqueInput
  }

  /**
   * RapportArbitre findFirst
   */
  export type RapportArbitreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * Filter, which RapportArbitre to fetch.
     */
    where?: RapportArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapportArbitres to fetch.
     */
    orderBy?: RapportArbitreOrderByWithRelationInput | RapportArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RapportArbitres.
     */
    cursor?: RapportArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapportArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapportArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapportArbitres.
     */
    distinct?: RapportArbitreScalarFieldEnum | RapportArbitreScalarFieldEnum[]
  }

  /**
   * RapportArbitre findFirstOrThrow
   */
  export type RapportArbitreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * Filter, which RapportArbitre to fetch.
     */
    where?: RapportArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapportArbitres to fetch.
     */
    orderBy?: RapportArbitreOrderByWithRelationInput | RapportArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RapportArbitres.
     */
    cursor?: RapportArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapportArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapportArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapportArbitres.
     */
    distinct?: RapportArbitreScalarFieldEnum | RapportArbitreScalarFieldEnum[]
  }

  /**
   * RapportArbitre findMany
   */
  export type RapportArbitreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * Filter, which RapportArbitres to fetch.
     */
    where?: RapportArbitreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RapportArbitres to fetch.
     */
    orderBy?: RapportArbitreOrderByWithRelationInput | RapportArbitreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RapportArbitres.
     */
    cursor?: RapportArbitreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RapportArbitres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RapportArbitres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RapportArbitres.
     */
    distinct?: RapportArbitreScalarFieldEnum | RapportArbitreScalarFieldEnum[]
  }

  /**
   * RapportArbitre create
   */
  export type RapportArbitreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * The data needed to create a RapportArbitre.
     */
    data?: XOR<RapportArbitreCreateInput, RapportArbitreUncheckedCreateInput>
  }

  /**
   * RapportArbitre createMany
   */
  export type RapportArbitreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RapportArbitres.
     */
    data: RapportArbitreCreateManyInput | RapportArbitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RapportArbitre createManyAndReturn
   */
  export type RapportArbitreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * The data used to create many RapportArbitres.
     */
    data: RapportArbitreCreateManyInput | RapportArbitreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RapportArbitre update
   */
  export type RapportArbitreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * The data needed to update a RapportArbitre.
     */
    data: XOR<RapportArbitreUpdateInput, RapportArbitreUncheckedUpdateInput>
    /**
     * Choose, which RapportArbitre to update.
     */
    where: RapportArbitreWhereUniqueInput
  }

  /**
   * RapportArbitre updateMany
   */
  export type RapportArbitreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RapportArbitres.
     */
    data: XOR<RapportArbitreUpdateManyMutationInput, RapportArbitreUncheckedUpdateManyInput>
    /**
     * Filter which RapportArbitres to update
     */
    where?: RapportArbitreWhereInput
    /**
     * Limit how many RapportArbitres to update.
     */
    limit?: number
  }

  /**
   * RapportArbitre updateManyAndReturn
   */
  export type RapportArbitreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * The data used to update RapportArbitres.
     */
    data: XOR<RapportArbitreUpdateManyMutationInput, RapportArbitreUncheckedUpdateManyInput>
    /**
     * Filter which RapportArbitres to update
     */
    where?: RapportArbitreWhereInput
    /**
     * Limit how many RapportArbitres to update.
     */
    limit?: number
  }

  /**
   * RapportArbitre upsert
   */
  export type RapportArbitreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * The filter to search for the RapportArbitre to update in case it exists.
     */
    where: RapportArbitreWhereUniqueInput
    /**
     * In case the RapportArbitre found by the `where` argument doesn't exist, create a new RapportArbitre with this data.
     */
    create: XOR<RapportArbitreCreateInput, RapportArbitreUncheckedCreateInput>
    /**
     * In case the RapportArbitre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RapportArbitreUpdateInput, RapportArbitreUncheckedUpdateInput>
  }

  /**
   * RapportArbitre delete
   */
  export type RapportArbitreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
    /**
     * Filter which RapportArbitre to delete.
     */
    where: RapportArbitreWhereUniqueInput
  }

  /**
   * RapportArbitre deleteMany
   */
  export type RapportArbitreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RapportArbitres to delete
     */
    where?: RapportArbitreWhereInput
    /**
     * Limit how many RapportArbitres to delete.
     */
    limit?: number
  }

  /**
   * RapportArbitre without action
   */
  export type RapportArbitreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RapportArbitre
     */
    select?: RapportArbitreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RapportArbitre
     */
    omit?: RapportArbitreOmit<ExtArgs> | null
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
    id: number | null
    refId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    refId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    code: string | null
    role: string | null
    refId: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    code: string | null
    role: string | null
    refId: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    code: number
    role: number
    refId: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    refId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    refId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    code?: true
    role?: true
    refId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    code?: true
    role?: true
    refId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    code?: true
    role?: true
    refId?: true
    createdAt?: true
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
    id: number
    email: string
    name: string | null
    code: string
    role: string
    refId: number | null
    createdAt: Date
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
    email?: boolean
    name?: boolean
    code?: boolean
    role?: boolean
    refId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    code?: boolean
    role?: boolean
    refId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    code?: boolean
    role?: boolean
    refId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    code?: boolean
    role?: boolean
    refId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "code" | "role" | "refId" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      code: string
      role: string
      refId: number | null
      createdAt: Date
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly code: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly refId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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


  export const ClubScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    ville: 'ville',
    stade: 'stade',
    couleurs: 'couleurs',
    coach: 'coach',
    telephone: 'telephone',
    email: 'email',
    notes: 'notes'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const ArbitreScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    type: 'type',
    niveau: 'niveau',
    telephone: 'telephone',
    email: 'email',
    licence: 'licence',
    statut: 'statut',
    nbMatchs: 'nbMatchs'
  };

  export type ArbitreScalarFieldEnum = (typeof ArbitreScalarFieldEnum)[keyof typeof ArbitreScalarFieldEnum]


  export const SaisonScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    statut: 'statut'
  };

  export type SaisonScalarFieldEnum = (typeof SaisonScalarFieldEnum)[keyof typeof SaisonScalarFieldEnum]


  export const DivisionScalarFieldEnum: {
    id: 'id',
    saisonId: 'saisonId',
    nom: 'nom',
    rang: 'rang',
    clubIds: 'clubIds',
    arbitreIds: 'arbitreIds'
  };

  export type DivisionScalarFieldEnum = (typeof DivisionScalarFieldEnum)[keyof typeof DivisionScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    saisonId: 'saisonId',
    nom: 'nom',
    type: 'type',
    divisionIds: 'divisionIds'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const TauxScalarFieldEnum: {
    id: 'id',
    saisonId: 'saisonId',
    divisionId: 'divisionId',
    division: 'division',
    rang: 'rang',
    role: 'role',
    montant: 'montant'
  };

  export type TauxScalarFieldEnum = (typeof TauxScalarFieldEnum)[keyof typeof TauxScalarFieldEnum]


  export const SanctionScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    modeCalcul: 'modeCalcul',
    valeur: 'valeur'
  };

  export type SanctionScalarFieldEnum = (typeof SanctionScalarFieldEnum)[keyof typeof SanctionScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    competition: 'competition',
    dom: 'dom',
    vis: 'vis',
    date: 'date',
    heure: 'heure',
    journee: 'journee',
    stade: 'stade',
    statut: 'statut',
    notes: 'notes',
    assigned: 'assigned',
    submitted: 'submitted',
    ac: 'ac',
    a1: 'a1',
    a2: 'a2',
    a4: 'a4'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const FeuilleMatchScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    saisonId: 'saisonId',
    domicile: 'domicile',
    visiteur: 'visiteur',
    competition: 'competition',
    dateMatch: 'dateMatch',
    scoreDom: 'scoreDom',
    scoreVis: 'scoreVis',
    incidents: 'incidents',
    divisionDom: 'divisionDom',
    divisionVis: 'divisionVis',
    divisionRetenue: 'divisionRetenue',
    statut: 'statut',
    dateValidation: 'dateValidation'
  };

  export type FeuilleMatchScalarFieldEnum = (typeof FeuilleMatchScalarFieldEnum)[keyof typeof FeuilleMatchScalarFieldEnum]


  export const PresenceArbitreScalarFieldEnum: {
    id: 'id',
    feuilleId: 'feuilleId',
    nomArbitre: 'nomArbitre',
    roleArbitre: 'roleArbitre',
    present: 'present'
  };

  export type PresenceArbitreScalarFieldEnum = (typeof PresenceArbitreScalarFieldEnum)[keyof typeof PresenceArbitreScalarFieldEnum]


  export const SanctionAppliqueeScalarFieldEnum: {
    id: 'id',
    presenceId: 'presenceId',
    typeSanctionId: 'typeSanctionId',
    montantApplique: 'montantApplique',
    commentaire: 'commentaire'
  };

  export type SanctionAppliqueeScalarFieldEnum = (typeof SanctionAppliqueeScalarFieldEnum)[keyof typeof SanctionAppliqueeScalarFieldEnum]


  export const ConfirmationPresenceScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    arbitreId: 'arbitreId',
    date: 'date'
  };

  export type ConfirmationPresenceScalarFieldEnum = (typeof ConfirmationPresenceScalarFieldEnum)[keyof typeof ConfirmationPresenceScalarFieldEnum]


  export const RapportArbitreScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    saisonId: 'saisonId',
    arbitreId: 'arbitreId',
    redacteurNom: 'redacteurNom',
    scoreDom: 'scoreDom',
    scoreVis: 'scoreVis',
    discipline: 'discipline',
    incidents: 'incidents',
    observations: 'observations',
    equipe: 'equipe',
    statut: 'statut',
    dateEnvoi: 'dateEnvoi',
    numMatch: 'numMatch',
    enFaveurDe: 'enFaveurDe',
    assesseur: 'assesseur',
    commentaires: 'commentaires',
    decisionsImpacte: 'decisionsImpacte',
    arbitreRecommande: 'arbitreRecommande',
    suiviParticulier: 'suiviParticulier'
  };

  export type RapportArbitreScalarFieldEnum = (typeof RapportArbitreScalarFieldEnum)[keyof typeof RapportArbitreScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    code: 'code',
    role: 'role',
    refId: 'refId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: IntFilter<"Club"> | number
    nom?: StringNullableFilter<"Club"> | string | null
    ville?: StringNullableFilter<"Club"> | string | null
    stade?: StringNullableFilter<"Club"> | string | null
    couleurs?: StringNullableFilter<"Club"> | string | null
    coach?: StringNullableFilter<"Club"> | string | null
    telephone?: StringNullableFilter<"Club"> | string | null
    email?: StringNullableFilter<"Club"> | string | null
    notes?: StringNullableFilter<"Club"> | string | null
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    stade?: SortOrderInput | SortOrder
    couleurs?: SortOrderInput | SortOrder
    coach?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    nom?: StringNullableFilter<"Club"> | string | null
    ville?: StringNullableFilter<"Club"> | string | null
    stade?: StringNullableFilter<"Club"> | string | null
    couleurs?: StringNullableFilter<"Club"> | string | null
    coach?: StringNullableFilter<"Club"> | string | null
    telephone?: StringNullableFilter<"Club"> | string | null
    email?: StringNullableFilter<"Club"> | string | null
    notes?: StringNullableFilter<"Club"> | string | null
  }, "id">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    ville?: SortOrderInput | SortOrder
    stade?: SortOrderInput | SortOrder
    couleurs?: SortOrderInput | SortOrder
    coach?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ClubCountOrderByAggregateInput
    _avg?: ClubAvgOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
    _sum?: ClubSumOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Club"> | number
    nom?: StringNullableWithAggregatesFilter<"Club"> | string | null
    ville?: StringNullableWithAggregatesFilter<"Club"> | string | null
    stade?: StringNullableWithAggregatesFilter<"Club"> | string | null
    couleurs?: StringNullableWithAggregatesFilter<"Club"> | string | null
    coach?: StringNullableWithAggregatesFilter<"Club"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"Club"> | string | null
    email?: StringNullableWithAggregatesFilter<"Club"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Club"> | string | null
  }

  export type ArbitreWhereInput = {
    AND?: ArbitreWhereInput | ArbitreWhereInput[]
    OR?: ArbitreWhereInput[]
    NOT?: ArbitreWhereInput | ArbitreWhereInput[]
    id?: IntFilter<"Arbitre"> | number
    nom?: StringNullableFilter<"Arbitre"> | string | null
    prenom?: StringNullableFilter<"Arbitre"> | string | null
    type?: StringNullableFilter<"Arbitre"> | string | null
    niveau?: StringNullableFilter<"Arbitre"> | string | null
    telephone?: StringNullableFilter<"Arbitre"> | string | null
    email?: StringNullableFilter<"Arbitre"> | string | null
    licence?: StringNullableFilter<"Arbitre"> | string | null
    statut?: StringNullableFilter<"Arbitre"> | string | null
    nbMatchs?: IntNullableFilter<"Arbitre"> | number | null
  }

  export type ArbitreOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    niveau?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    licence?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    nbMatchs?: SortOrderInput | SortOrder
  }

  export type ArbitreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArbitreWhereInput | ArbitreWhereInput[]
    OR?: ArbitreWhereInput[]
    NOT?: ArbitreWhereInput | ArbitreWhereInput[]
    nom?: StringNullableFilter<"Arbitre"> | string | null
    prenom?: StringNullableFilter<"Arbitre"> | string | null
    type?: StringNullableFilter<"Arbitre"> | string | null
    niveau?: StringNullableFilter<"Arbitre"> | string | null
    telephone?: StringNullableFilter<"Arbitre"> | string | null
    email?: StringNullableFilter<"Arbitre"> | string | null
    licence?: StringNullableFilter<"Arbitre"> | string | null
    statut?: StringNullableFilter<"Arbitre"> | string | null
    nbMatchs?: IntNullableFilter<"Arbitre"> | number | null
  }, "id">

  export type ArbitreOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrderInput | SortOrder
    prenom?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    niveau?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    licence?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    nbMatchs?: SortOrderInput | SortOrder
    _count?: ArbitreCountOrderByAggregateInput
    _avg?: ArbitreAvgOrderByAggregateInput
    _max?: ArbitreMaxOrderByAggregateInput
    _min?: ArbitreMinOrderByAggregateInput
    _sum?: ArbitreSumOrderByAggregateInput
  }

  export type ArbitreScalarWhereWithAggregatesInput = {
    AND?: ArbitreScalarWhereWithAggregatesInput | ArbitreScalarWhereWithAggregatesInput[]
    OR?: ArbitreScalarWhereWithAggregatesInput[]
    NOT?: ArbitreScalarWhereWithAggregatesInput | ArbitreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Arbitre"> | number
    nom?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    prenom?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    type?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    niveau?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    email?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    licence?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    statut?: StringNullableWithAggregatesFilter<"Arbitre"> | string | null
    nbMatchs?: IntNullableWithAggregatesFilter<"Arbitre"> | number | null
  }

  export type SaisonWhereInput = {
    AND?: SaisonWhereInput | SaisonWhereInput[]
    OR?: SaisonWhereInput[]
    NOT?: SaisonWhereInput | SaisonWhereInput[]
    id?: IntFilter<"Saison"> | number
    libelle?: StringNullableFilter<"Saison"> | string | null
    dateDebut?: StringNullableFilter<"Saison"> | string | null
    dateFin?: StringNullableFilter<"Saison"> | string | null
    statut?: StringNullableFilter<"Saison"> | string | null
  }

  export type SaisonOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrderInput | SortOrder
    dateDebut?: SortOrderInput | SortOrder
    dateFin?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
  }

  export type SaisonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaisonWhereInput | SaisonWhereInput[]
    OR?: SaisonWhereInput[]
    NOT?: SaisonWhereInput | SaisonWhereInput[]
    libelle?: StringNullableFilter<"Saison"> | string | null
    dateDebut?: StringNullableFilter<"Saison"> | string | null
    dateFin?: StringNullableFilter<"Saison"> | string | null
    statut?: StringNullableFilter<"Saison"> | string | null
  }, "id">

  export type SaisonOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrderInput | SortOrder
    dateDebut?: SortOrderInput | SortOrder
    dateFin?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    _count?: SaisonCountOrderByAggregateInput
    _avg?: SaisonAvgOrderByAggregateInput
    _max?: SaisonMaxOrderByAggregateInput
    _min?: SaisonMinOrderByAggregateInput
    _sum?: SaisonSumOrderByAggregateInput
  }

  export type SaisonScalarWhereWithAggregatesInput = {
    AND?: SaisonScalarWhereWithAggregatesInput | SaisonScalarWhereWithAggregatesInput[]
    OR?: SaisonScalarWhereWithAggregatesInput[]
    NOT?: SaisonScalarWhereWithAggregatesInput | SaisonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Saison"> | number
    libelle?: StringNullableWithAggregatesFilter<"Saison"> | string | null
    dateDebut?: StringNullableWithAggregatesFilter<"Saison"> | string | null
    dateFin?: StringNullableWithAggregatesFilter<"Saison"> | string | null
    statut?: StringNullableWithAggregatesFilter<"Saison"> | string | null
  }

  export type DivisionWhereInput = {
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    id?: IntFilter<"Division"> | number
    saisonId?: IntNullableFilter<"Division"> | number | null
    nom?: StringNullableFilter<"Division"> | string | null
    rang?: IntNullableFilter<"Division"> | number | null
    clubIds?: IntNullableListFilter<"Division">
    arbitreIds?: IntNullableListFilter<"Division">
  }

  export type DivisionOrderByWithRelationInput = {
    id?: SortOrder
    saisonId?: SortOrderInput | SortOrder
    nom?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    clubIds?: SortOrder
    arbitreIds?: SortOrder
  }

  export type DivisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DivisionWhereInput | DivisionWhereInput[]
    OR?: DivisionWhereInput[]
    NOT?: DivisionWhereInput | DivisionWhereInput[]
    saisonId?: IntNullableFilter<"Division"> | number | null
    nom?: StringNullableFilter<"Division"> | string | null
    rang?: IntNullableFilter<"Division"> | number | null
    clubIds?: IntNullableListFilter<"Division">
    arbitreIds?: IntNullableListFilter<"Division">
  }, "id">

  export type DivisionOrderByWithAggregationInput = {
    id?: SortOrder
    saisonId?: SortOrderInput | SortOrder
    nom?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    clubIds?: SortOrder
    arbitreIds?: SortOrder
    _count?: DivisionCountOrderByAggregateInput
    _avg?: DivisionAvgOrderByAggregateInput
    _max?: DivisionMaxOrderByAggregateInput
    _min?: DivisionMinOrderByAggregateInput
    _sum?: DivisionSumOrderByAggregateInput
  }

  export type DivisionScalarWhereWithAggregatesInput = {
    AND?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    OR?: DivisionScalarWhereWithAggregatesInput[]
    NOT?: DivisionScalarWhereWithAggregatesInput | DivisionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Division"> | number
    saisonId?: IntNullableWithAggregatesFilter<"Division"> | number | null
    nom?: StringNullableWithAggregatesFilter<"Division"> | string | null
    rang?: IntNullableWithAggregatesFilter<"Division"> | number | null
    clubIds?: IntNullableListFilter<"Division">
    arbitreIds?: IntNullableListFilter<"Division">
  }

  export type CompetitionWhereInput = {
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    id?: IntFilter<"Competition"> | number
    saisonId?: IntNullableFilter<"Competition"> | number | null
    nom?: StringNullableFilter<"Competition"> | string | null
    type?: StringNullableFilter<"Competition"> | string | null
    divisionIds?: IntNullableListFilter<"Competition">
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    saisonId?: SortOrderInput | SortOrder
    nom?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    divisionIds?: SortOrder
  }

  export type CompetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    saisonId?: IntNullableFilter<"Competition"> | number | null
    nom?: StringNullableFilter<"Competition"> | string | null
    type?: StringNullableFilter<"Competition"> | string | null
    divisionIds?: IntNullableListFilter<"Competition">
  }, "id">

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    saisonId?: SortOrderInput | SortOrder
    nom?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    divisionIds?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _avg?: CompetitionAvgOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
    _sum?: CompetitionSumOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    OR?: CompetitionScalarWhereWithAggregatesInput[]
    NOT?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Competition"> | number
    saisonId?: IntNullableWithAggregatesFilter<"Competition"> | number | null
    nom?: StringNullableWithAggregatesFilter<"Competition"> | string | null
    type?: StringNullableWithAggregatesFilter<"Competition"> | string | null
    divisionIds?: IntNullableListFilter<"Competition">
  }

  export type TauxWhereInput = {
    AND?: TauxWhereInput | TauxWhereInput[]
    OR?: TauxWhereInput[]
    NOT?: TauxWhereInput | TauxWhereInput[]
    id?: IntFilter<"Taux"> | number
    saisonId?: IntNullableFilter<"Taux"> | number | null
    divisionId?: IntNullableFilter<"Taux"> | number | null
    division?: StringNullableFilter<"Taux"> | string | null
    rang?: IntNullableFilter<"Taux"> | number | null
    role?: StringNullableFilter<"Taux"> | string | null
    montant?: FloatNullableFilter<"Taux"> | number | null
  }

  export type TauxOrderByWithRelationInput = {
    id?: SortOrder
    saisonId?: SortOrderInput | SortOrder
    divisionId?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    montant?: SortOrderInput | SortOrder
  }

  export type TauxWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TauxWhereInput | TauxWhereInput[]
    OR?: TauxWhereInput[]
    NOT?: TauxWhereInput | TauxWhereInput[]
    saisonId?: IntNullableFilter<"Taux"> | number | null
    divisionId?: IntNullableFilter<"Taux"> | number | null
    division?: StringNullableFilter<"Taux"> | string | null
    rang?: IntNullableFilter<"Taux"> | number | null
    role?: StringNullableFilter<"Taux"> | string | null
    montant?: FloatNullableFilter<"Taux"> | number | null
  }, "id">

  export type TauxOrderByWithAggregationInput = {
    id?: SortOrder
    saisonId?: SortOrderInput | SortOrder
    divisionId?: SortOrderInput | SortOrder
    division?: SortOrderInput | SortOrder
    rang?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    montant?: SortOrderInput | SortOrder
    _count?: TauxCountOrderByAggregateInput
    _avg?: TauxAvgOrderByAggregateInput
    _max?: TauxMaxOrderByAggregateInput
    _min?: TauxMinOrderByAggregateInput
    _sum?: TauxSumOrderByAggregateInput
  }

  export type TauxScalarWhereWithAggregatesInput = {
    AND?: TauxScalarWhereWithAggregatesInput | TauxScalarWhereWithAggregatesInput[]
    OR?: TauxScalarWhereWithAggregatesInput[]
    NOT?: TauxScalarWhereWithAggregatesInput | TauxScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Taux"> | number
    saisonId?: IntNullableWithAggregatesFilter<"Taux"> | number | null
    divisionId?: IntNullableWithAggregatesFilter<"Taux"> | number | null
    division?: StringNullableWithAggregatesFilter<"Taux"> | string | null
    rang?: IntNullableWithAggregatesFilter<"Taux"> | number | null
    role?: StringNullableWithAggregatesFilter<"Taux"> | string | null
    montant?: FloatNullableWithAggregatesFilter<"Taux"> | number | null
  }

  export type SanctionWhereInput = {
    AND?: SanctionWhereInput | SanctionWhereInput[]
    OR?: SanctionWhereInput[]
    NOT?: SanctionWhereInput | SanctionWhereInput[]
    id?: IntFilter<"Sanction"> | number
    libelle?: StringNullableFilter<"Sanction"> | string | null
    modeCalcul?: StringNullableFilter<"Sanction"> | string | null
    valeur?: FloatNullableFilter<"Sanction"> | number | null
  }

  export type SanctionOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrderInput | SortOrder
    modeCalcul?: SortOrderInput | SortOrder
    valeur?: SortOrderInput | SortOrder
  }

  export type SanctionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SanctionWhereInput | SanctionWhereInput[]
    OR?: SanctionWhereInput[]
    NOT?: SanctionWhereInput | SanctionWhereInput[]
    libelle?: StringNullableFilter<"Sanction"> | string | null
    modeCalcul?: StringNullableFilter<"Sanction"> | string | null
    valeur?: FloatNullableFilter<"Sanction"> | number | null
  }, "id">

  export type SanctionOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrderInput | SortOrder
    modeCalcul?: SortOrderInput | SortOrder
    valeur?: SortOrderInput | SortOrder
    _count?: SanctionCountOrderByAggregateInput
    _avg?: SanctionAvgOrderByAggregateInput
    _max?: SanctionMaxOrderByAggregateInput
    _min?: SanctionMinOrderByAggregateInput
    _sum?: SanctionSumOrderByAggregateInput
  }

  export type SanctionScalarWhereWithAggregatesInput = {
    AND?: SanctionScalarWhereWithAggregatesInput | SanctionScalarWhereWithAggregatesInput[]
    OR?: SanctionScalarWhereWithAggregatesInput[]
    NOT?: SanctionScalarWhereWithAggregatesInput | SanctionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sanction"> | number
    libelle?: StringNullableWithAggregatesFilter<"Sanction"> | string | null
    modeCalcul?: StringNullableWithAggregatesFilter<"Sanction"> | string | null
    valeur?: FloatNullableWithAggregatesFilter<"Sanction"> | number | null
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: IntFilter<"Match"> | number
    competition?: StringNullableFilter<"Match"> | string | null
    dom?: StringNullableFilter<"Match"> | string | null
    vis?: StringNullableFilter<"Match"> | string | null
    date?: StringNullableFilter<"Match"> | string | null
    heure?: StringNullableFilter<"Match"> | string | null
    journee?: StringNullableFilter<"Match"> | string | null
    stade?: StringNullableFilter<"Match"> | string | null
    statut?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
    assigned?: BoolNullableFilter<"Match"> | boolean | null
    submitted?: BoolNullableFilter<"Match"> | boolean | null
    ac?: StringNullableFilter<"Match"> | string | null
    a1?: StringNullableFilter<"Match"> | string | null
    a2?: StringNullableFilter<"Match"> | string | null
    a4?: StringNullableFilter<"Match"> | string | null
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    competition?: SortOrderInput | SortOrder
    dom?: SortOrderInput | SortOrder
    vis?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    heure?: SortOrderInput | SortOrder
    journee?: SortOrderInput | SortOrder
    stade?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    assigned?: SortOrderInput | SortOrder
    submitted?: SortOrderInput | SortOrder
    ac?: SortOrderInput | SortOrder
    a1?: SortOrderInput | SortOrder
    a2?: SortOrderInput | SortOrder
    a4?: SortOrderInput | SortOrder
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    competition?: StringNullableFilter<"Match"> | string | null
    dom?: StringNullableFilter<"Match"> | string | null
    vis?: StringNullableFilter<"Match"> | string | null
    date?: StringNullableFilter<"Match"> | string | null
    heure?: StringNullableFilter<"Match"> | string | null
    journee?: StringNullableFilter<"Match"> | string | null
    stade?: StringNullableFilter<"Match"> | string | null
    statut?: StringNullableFilter<"Match"> | string | null
    notes?: StringNullableFilter<"Match"> | string | null
    assigned?: BoolNullableFilter<"Match"> | boolean | null
    submitted?: BoolNullableFilter<"Match"> | boolean | null
    ac?: StringNullableFilter<"Match"> | string | null
    a1?: StringNullableFilter<"Match"> | string | null
    a2?: StringNullableFilter<"Match"> | string | null
    a4?: StringNullableFilter<"Match"> | string | null
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    competition?: SortOrderInput | SortOrder
    dom?: SortOrderInput | SortOrder
    vis?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    heure?: SortOrderInput | SortOrder
    journee?: SortOrderInput | SortOrder
    stade?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    assigned?: SortOrderInput | SortOrder
    submitted?: SortOrderInput | SortOrder
    ac?: SortOrderInput | SortOrder
    a1?: SortOrderInput | SortOrder
    a2?: SortOrderInput | SortOrder
    a4?: SortOrderInput | SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Match"> | number
    competition?: StringNullableWithAggregatesFilter<"Match"> | string | null
    dom?: StringNullableWithAggregatesFilter<"Match"> | string | null
    vis?: StringNullableWithAggregatesFilter<"Match"> | string | null
    date?: StringNullableWithAggregatesFilter<"Match"> | string | null
    heure?: StringNullableWithAggregatesFilter<"Match"> | string | null
    journee?: StringNullableWithAggregatesFilter<"Match"> | string | null
    stade?: StringNullableWithAggregatesFilter<"Match"> | string | null
    statut?: StringNullableWithAggregatesFilter<"Match"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Match"> | string | null
    assigned?: BoolNullableWithAggregatesFilter<"Match"> | boolean | null
    submitted?: BoolNullableWithAggregatesFilter<"Match"> | boolean | null
    ac?: StringNullableWithAggregatesFilter<"Match"> | string | null
    a1?: StringNullableWithAggregatesFilter<"Match"> | string | null
    a2?: StringNullableWithAggregatesFilter<"Match"> | string | null
    a4?: StringNullableWithAggregatesFilter<"Match"> | string | null
  }

  export type FeuilleMatchWhereInput = {
    AND?: FeuilleMatchWhereInput | FeuilleMatchWhereInput[]
    OR?: FeuilleMatchWhereInput[]
    NOT?: FeuilleMatchWhereInput | FeuilleMatchWhereInput[]
    id?: IntFilter<"FeuilleMatch"> | number
    matchId?: IntNullableFilter<"FeuilleMatch"> | number | null
    saisonId?: IntNullableFilter<"FeuilleMatch"> | number | null
    domicile?: StringNullableFilter<"FeuilleMatch"> | string | null
    visiteur?: StringNullableFilter<"FeuilleMatch"> | string | null
    competition?: StringNullableFilter<"FeuilleMatch"> | string | null
    dateMatch?: StringNullableFilter<"FeuilleMatch"> | string | null
    scoreDom?: StringNullableFilter<"FeuilleMatch"> | string | null
    scoreVis?: StringNullableFilter<"FeuilleMatch"> | string | null
    incidents?: StringNullableFilter<"FeuilleMatch"> | string | null
    divisionDom?: StringNullableFilter<"FeuilleMatch"> | string | null
    divisionVis?: StringNullableFilter<"FeuilleMatch"> | string | null
    divisionRetenue?: StringNullableFilter<"FeuilleMatch"> | string | null
    statut?: StringNullableFilter<"FeuilleMatch"> | string | null
    dateValidation?: StringNullableFilter<"FeuilleMatch"> | string | null
  }

  export type FeuilleMatchOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrderInput | SortOrder
    saisonId?: SortOrderInput | SortOrder
    domicile?: SortOrderInput | SortOrder
    visiteur?: SortOrderInput | SortOrder
    competition?: SortOrderInput | SortOrder
    dateMatch?: SortOrderInput | SortOrder
    scoreDom?: SortOrderInput | SortOrder
    scoreVis?: SortOrderInput | SortOrder
    incidents?: SortOrderInput | SortOrder
    divisionDom?: SortOrderInput | SortOrder
    divisionVis?: SortOrderInput | SortOrder
    divisionRetenue?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    dateValidation?: SortOrderInput | SortOrder
  }

  export type FeuilleMatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeuilleMatchWhereInput | FeuilleMatchWhereInput[]
    OR?: FeuilleMatchWhereInput[]
    NOT?: FeuilleMatchWhereInput | FeuilleMatchWhereInput[]
    matchId?: IntNullableFilter<"FeuilleMatch"> | number | null
    saisonId?: IntNullableFilter<"FeuilleMatch"> | number | null
    domicile?: StringNullableFilter<"FeuilleMatch"> | string | null
    visiteur?: StringNullableFilter<"FeuilleMatch"> | string | null
    competition?: StringNullableFilter<"FeuilleMatch"> | string | null
    dateMatch?: StringNullableFilter<"FeuilleMatch"> | string | null
    scoreDom?: StringNullableFilter<"FeuilleMatch"> | string | null
    scoreVis?: StringNullableFilter<"FeuilleMatch"> | string | null
    incidents?: StringNullableFilter<"FeuilleMatch"> | string | null
    divisionDom?: StringNullableFilter<"FeuilleMatch"> | string | null
    divisionVis?: StringNullableFilter<"FeuilleMatch"> | string | null
    divisionRetenue?: StringNullableFilter<"FeuilleMatch"> | string | null
    statut?: StringNullableFilter<"FeuilleMatch"> | string | null
    dateValidation?: StringNullableFilter<"FeuilleMatch"> | string | null
  }, "id">

  export type FeuilleMatchOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrderInput | SortOrder
    saisonId?: SortOrderInput | SortOrder
    domicile?: SortOrderInput | SortOrder
    visiteur?: SortOrderInput | SortOrder
    competition?: SortOrderInput | SortOrder
    dateMatch?: SortOrderInput | SortOrder
    scoreDom?: SortOrderInput | SortOrder
    scoreVis?: SortOrderInput | SortOrder
    incidents?: SortOrderInput | SortOrder
    divisionDom?: SortOrderInput | SortOrder
    divisionVis?: SortOrderInput | SortOrder
    divisionRetenue?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    dateValidation?: SortOrderInput | SortOrder
    _count?: FeuilleMatchCountOrderByAggregateInput
    _avg?: FeuilleMatchAvgOrderByAggregateInput
    _max?: FeuilleMatchMaxOrderByAggregateInput
    _min?: FeuilleMatchMinOrderByAggregateInput
    _sum?: FeuilleMatchSumOrderByAggregateInput
  }

  export type FeuilleMatchScalarWhereWithAggregatesInput = {
    AND?: FeuilleMatchScalarWhereWithAggregatesInput | FeuilleMatchScalarWhereWithAggregatesInput[]
    OR?: FeuilleMatchScalarWhereWithAggregatesInput[]
    NOT?: FeuilleMatchScalarWhereWithAggregatesInput | FeuilleMatchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FeuilleMatch"> | number
    matchId?: IntNullableWithAggregatesFilter<"FeuilleMatch"> | number | null
    saisonId?: IntNullableWithAggregatesFilter<"FeuilleMatch"> | number | null
    domicile?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    visiteur?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    competition?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    dateMatch?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    scoreDom?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    scoreVis?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    incidents?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    divisionDom?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    divisionVis?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    divisionRetenue?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    statut?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
    dateValidation?: StringNullableWithAggregatesFilter<"FeuilleMatch"> | string | null
  }

  export type PresenceArbitreWhereInput = {
    AND?: PresenceArbitreWhereInput | PresenceArbitreWhereInput[]
    OR?: PresenceArbitreWhereInput[]
    NOT?: PresenceArbitreWhereInput | PresenceArbitreWhereInput[]
    id?: IntFilter<"PresenceArbitre"> | number
    feuilleId?: IntNullableFilter<"PresenceArbitre"> | number | null
    nomArbitre?: StringNullableFilter<"PresenceArbitre"> | string | null
    roleArbitre?: StringNullableFilter<"PresenceArbitre"> | string | null
    present?: BoolNullableFilter<"PresenceArbitre"> | boolean | null
  }

  export type PresenceArbitreOrderByWithRelationInput = {
    id?: SortOrder
    feuilleId?: SortOrderInput | SortOrder
    nomArbitre?: SortOrderInput | SortOrder
    roleArbitre?: SortOrderInput | SortOrder
    present?: SortOrderInput | SortOrder
  }

  export type PresenceArbitreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PresenceArbitreWhereInput | PresenceArbitreWhereInput[]
    OR?: PresenceArbitreWhereInput[]
    NOT?: PresenceArbitreWhereInput | PresenceArbitreWhereInput[]
    feuilleId?: IntNullableFilter<"PresenceArbitre"> | number | null
    nomArbitre?: StringNullableFilter<"PresenceArbitre"> | string | null
    roleArbitre?: StringNullableFilter<"PresenceArbitre"> | string | null
    present?: BoolNullableFilter<"PresenceArbitre"> | boolean | null
  }, "id">

  export type PresenceArbitreOrderByWithAggregationInput = {
    id?: SortOrder
    feuilleId?: SortOrderInput | SortOrder
    nomArbitre?: SortOrderInput | SortOrder
    roleArbitre?: SortOrderInput | SortOrder
    present?: SortOrderInput | SortOrder
    _count?: PresenceArbitreCountOrderByAggregateInput
    _avg?: PresenceArbitreAvgOrderByAggregateInput
    _max?: PresenceArbitreMaxOrderByAggregateInput
    _min?: PresenceArbitreMinOrderByAggregateInput
    _sum?: PresenceArbitreSumOrderByAggregateInput
  }

  export type PresenceArbitreScalarWhereWithAggregatesInput = {
    AND?: PresenceArbitreScalarWhereWithAggregatesInput | PresenceArbitreScalarWhereWithAggregatesInput[]
    OR?: PresenceArbitreScalarWhereWithAggregatesInput[]
    NOT?: PresenceArbitreScalarWhereWithAggregatesInput | PresenceArbitreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PresenceArbitre"> | number
    feuilleId?: IntNullableWithAggregatesFilter<"PresenceArbitre"> | number | null
    nomArbitre?: StringNullableWithAggregatesFilter<"PresenceArbitre"> | string | null
    roleArbitre?: StringNullableWithAggregatesFilter<"PresenceArbitre"> | string | null
    present?: BoolNullableWithAggregatesFilter<"PresenceArbitre"> | boolean | null
  }

  export type SanctionAppliqueeWhereInput = {
    AND?: SanctionAppliqueeWhereInput | SanctionAppliqueeWhereInput[]
    OR?: SanctionAppliqueeWhereInput[]
    NOT?: SanctionAppliqueeWhereInput | SanctionAppliqueeWhereInput[]
    id?: IntFilter<"SanctionAppliquee"> | number
    presenceId?: IntNullableFilter<"SanctionAppliquee"> | number | null
    typeSanctionId?: IntNullableFilter<"SanctionAppliquee"> | number | null
    montantApplique?: FloatNullableFilter<"SanctionAppliquee"> | number | null
    commentaire?: StringNullableFilter<"SanctionAppliquee"> | string | null
  }

  export type SanctionAppliqueeOrderByWithRelationInput = {
    id?: SortOrder
    presenceId?: SortOrderInput | SortOrder
    typeSanctionId?: SortOrderInput | SortOrder
    montantApplique?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
  }

  export type SanctionAppliqueeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SanctionAppliqueeWhereInput | SanctionAppliqueeWhereInput[]
    OR?: SanctionAppliqueeWhereInput[]
    NOT?: SanctionAppliqueeWhereInput | SanctionAppliqueeWhereInput[]
    presenceId?: IntNullableFilter<"SanctionAppliquee"> | number | null
    typeSanctionId?: IntNullableFilter<"SanctionAppliquee"> | number | null
    montantApplique?: FloatNullableFilter<"SanctionAppliquee"> | number | null
    commentaire?: StringNullableFilter<"SanctionAppliquee"> | string | null
  }, "id">

  export type SanctionAppliqueeOrderByWithAggregationInput = {
    id?: SortOrder
    presenceId?: SortOrderInput | SortOrder
    typeSanctionId?: SortOrderInput | SortOrder
    montantApplique?: SortOrderInput | SortOrder
    commentaire?: SortOrderInput | SortOrder
    _count?: SanctionAppliqueeCountOrderByAggregateInput
    _avg?: SanctionAppliqueeAvgOrderByAggregateInput
    _max?: SanctionAppliqueeMaxOrderByAggregateInput
    _min?: SanctionAppliqueeMinOrderByAggregateInput
    _sum?: SanctionAppliqueeSumOrderByAggregateInput
  }

  export type SanctionAppliqueeScalarWhereWithAggregatesInput = {
    AND?: SanctionAppliqueeScalarWhereWithAggregatesInput | SanctionAppliqueeScalarWhereWithAggregatesInput[]
    OR?: SanctionAppliqueeScalarWhereWithAggregatesInput[]
    NOT?: SanctionAppliqueeScalarWhereWithAggregatesInput | SanctionAppliqueeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SanctionAppliquee"> | number
    presenceId?: IntNullableWithAggregatesFilter<"SanctionAppliquee"> | number | null
    typeSanctionId?: IntNullableWithAggregatesFilter<"SanctionAppliquee"> | number | null
    montantApplique?: FloatNullableWithAggregatesFilter<"SanctionAppliquee"> | number | null
    commentaire?: StringNullableWithAggregatesFilter<"SanctionAppliquee"> | string | null
  }

  export type ConfirmationPresenceWhereInput = {
    AND?: ConfirmationPresenceWhereInput | ConfirmationPresenceWhereInput[]
    OR?: ConfirmationPresenceWhereInput[]
    NOT?: ConfirmationPresenceWhereInput | ConfirmationPresenceWhereInput[]
    id?: IntFilter<"ConfirmationPresence"> | number
    matchId?: IntNullableFilter<"ConfirmationPresence"> | number | null
    arbitreId?: IntNullableFilter<"ConfirmationPresence"> | number | null
    date?: StringNullableFilter<"ConfirmationPresence"> | string | null
  }

  export type ConfirmationPresenceOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrderInput | SortOrder
    arbitreId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
  }

  export type ConfirmationPresenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConfirmationPresenceWhereInput | ConfirmationPresenceWhereInput[]
    OR?: ConfirmationPresenceWhereInput[]
    NOT?: ConfirmationPresenceWhereInput | ConfirmationPresenceWhereInput[]
    matchId?: IntNullableFilter<"ConfirmationPresence"> | number | null
    arbitreId?: IntNullableFilter<"ConfirmationPresence"> | number | null
    date?: StringNullableFilter<"ConfirmationPresence"> | string | null
  }, "id">

  export type ConfirmationPresenceOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrderInput | SortOrder
    arbitreId?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    _count?: ConfirmationPresenceCountOrderByAggregateInput
    _avg?: ConfirmationPresenceAvgOrderByAggregateInput
    _max?: ConfirmationPresenceMaxOrderByAggregateInput
    _min?: ConfirmationPresenceMinOrderByAggregateInput
    _sum?: ConfirmationPresenceSumOrderByAggregateInput
  }

  export type ConfirmationPresenceScalarWhereWithAggregatesInput = {
    AND?: ConfirmationPresenceScalarWhereWithAggregatesInput | ConfirmationPresenceScalarWhereWithAggregatesInput[]
    OR?: ConfirmationPresenceScalarWhereWithAggregatesInput[]
    NOT?: ConfirmationPresenceScalarWhereWithAggregatesInput | ConfirmationPresenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ConfirmationPresence"> | number
    matchId?: IntNullableWithAggregatesFilter<"ConfirmationPresence"> | number | null
    arbitreId?: IntNullableWithAggregatesFilter<"ConfirmationPresence"> | number | null
    date?: StringNullableWithAggregatesFilter<"ConfirmationPresence"> | string | null
  }

  export type RapportArbitreWhereInput = {
    AND?: RapportArbitreWhereInput | RapportArbitreWhereInput[]
    OR?: RapportArbitreWhereInput[]
    NOT?: RapportArbitreWhereInput | RapportArbitreWhereInput[]
    id?: IntFilter<"RapportArbitre"> | number
    matchId?: IntNullableFilter<"RapportArbitre"> | number | null
    saisonId?: IntNullableFilter<"RapportArbitre"> | number | null
    arbitreId?: IntNullableFilter<"RapportArbitre"> | number | null
    redacteurNom?: StringNullableFilter<"RapportArbitre"> | string | null
    scoreDom?: StringNullableFilter<"RapportArbitre"> | string | null
    scoreVis?: StringNullableFilter<"RapportArbitre"> | string | null
    discipline?: StringNullableFilter<"RapportArbitre"> | string | null
    incidents?: StringNullableFilter<"RapportArbitre"> | string | null
    observations?: StringNullableFilter<"RapportArbitre"> | string | null
    equipe?: JsonNullableFilter<"RapportArbitre">
    statut?: StringNullableFilter<"RapportArbitre"> | string | null
    dateEnvoi?: StringNullableFilter<"RapportArbitre"> | string | null
    numMatch?: StringNullableFilter<"RapportArbitre"> | string | null
    enFaveurDe?: StringNullableFilter<"RapportArbitre"> | string | null
    assesseur?: StringNullableFilter<"RapportArbitre"> | string | null
    commentaires?: StringNullableFilter<"RapportArbitre"> | string | null
    decisionsImpacte?: StringNullableFilter<"RapportArbitre"> | string | null
    arbitreRecommande?: StringNullableFilter<"RapportArbitre"> | string | null
    suiviParticulier?: StringNullableFilter<"RapportArbitre"> | string | null
  }

  export type RapportArbitreOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrderInput | SortOrder
    saisonId?: SortOrderInput | SortOrder
    arbitreId?: SortOrderInput | SortOrder
    redacteurNom?: SortOrderInput | SortOrder
    scoreDom?: SortOrderInput | SortOrder
    scoreVis?: SortOrderInput | SortOrder
    discipline?: SortOrderInput | SortOrder
    incidents?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    equipe?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    dateEnvoi?: SortOrderInput | SortOrder
    numMatch?: SortOrderInput | SortOrder
    enFaveurDe?: SortOrderInput | SortOrder
    assesseur?: SortOrderInput | SortOrder
    commentaires?: SortOrderInput | SortOrder
    decisionsImpacte?: SortOrderInput | SortOrder
    arbitreRecommande?: SortOrderInput | SortOrder
    suiviParticulier?: SortOrderInput | SortOrder
  }

  export type RapportArbitreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RapportArbitreWhereInput | RapportArbitreWhereInput[]
    OR?: RapportArbitreWhereInput[]
    NOT?: RapportArbitreWhereInput | RapportArbitreWhereInput[]
    matchId?: IntNullableFilter<"RapportArbitre"> | number | null
    saisonId?: IntNullableFilter<"RapportArbitre"> | number | null
    arbitreId?: IntNullableFilter<"RapportArbitre"> | number | null
    redacteurNom?: StringNullableFilter<"RapportArbitre"> | string | null
    scoreDom?: StringNullableFilter<"RapportArbitre"> | string | null
    scoreVis?: StringNullableFilter<"RapportArbitre"> | string | null
    discipline?: StringNullableFilter<"RapportArbitre"> | string | null
    incidents?: StringNullableFilter<"RapportArbitre"> | string | null
    observations?: StringNullableFilter<"RapportArbitre"> | string | null
    equipe?: JsonNullableFilter<"RapportArbitre">
    statut?: StringNullableFilter<"RapportArbitre"> | string | null
    dateEnvoi?: StringNullableFilter<"RapportArbitre"> | string | null
    numMatch?: StringNullableFilter<"RapportArbitre"> | string | null
    enFaveurDe?: StringNullableFilter<"RapportArbitre"> | string | null
    assesseur?: StringNullableFilter<"RapportArbitre"> | string | null
    commentaires?: StringNullableFilter<"RapportArbitre"> | string | null
    decisionsImpacte?: StringNullableFilter<"RapportArbitre"> | string | null
    arbitreRecommande?: StringNullableFilter<"RapportArbitre"> | string | null
    suiviParticulier?: StringNullableFilter<"RapportArbitre"> | string | null
  }, "id">

  export type RapportArbitreOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrderInput | SortOrder
    saisonId?: SortOrderInput | SortOrder
    arbitreId?: SortOrderInput | SortOrder
    redacteurNom?: SortOrderInput | SortOrder
    scoreDom?: SortOrderInput | SortOrder
    scoreVis?: SortOrderInput | SortOrder
    discipline?: SortOrderInput | SortOrder
    incidents?: SortOrderInput | SortOrder
    observations?: SortOrderInput | SortOrder
    equipe?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    dateEnvoi?: SortOrderInput | SortOrder
    numMatch?: SortOrderInput | SortOrder
    enFaveurDe?: SortOrderInput | SortOrder
    assesseur?: SortOrderInput | SortOrder
    commentaires?: SortOrderInput | SortOrder
    decisionsImpacte?: SortOrderInput | SortOrder
    arbitreRecommande?: SortOrderInput | SortOrder
    suiviParticulier?: SortOrderInput | SortOrder
    _count?: RapportArbitreCountOrderByAggregateInput
    _avg?: RapportArbitreAvgOrderByAggregateInput
    _max?: RapportArbitreMaxOrderByAggregateInput
    _min?: RapportArbitreMinOrderByAggregateInput
    _sum?: RapportArbitreSumOrderByAggregateInput
  }

  export type RapportArbitreScalarWhereWithAggregatesInput = {
    AND?: RapportArbitreScalarWhereWithAggregatesInput | RapportArbitreScalarWhereWithAggregatesInput[]
    OR?: RapportArbitreScalarWhereWithAggregatesInput[]
    NOT?: RapportArbitreScalarWhereWithAggregatesInput | RapportArbitreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RapportArbitre"> | number
    matchId?: IntNullableWithAggregatesFilter<"RapportArbitre"> | number | null
    saisonId?: IntNullableWithAggregatesFilter<"RapportArbitre"> | number | null
    arbitreId?: IntNullableWithAggregatesFilter<"RapportArbitre"> | number | null
    redacteurNom?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    scoreDom?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    scoreVis?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    discipline?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    incidents?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    observations?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    equipe?: JsonNullableWithAggregatesFilter<"RapportArbitre">
    statut?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    dateEnvoi?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    numMatch?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    enFaveurDe?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    assesseur?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    commentaires?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    decisionsImpacte?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    arbitreRecommande?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
    suiviParticulier?: StringNullableWithAggregatesFilter<"RapportArbitre"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    code?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    refId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    code?: SortOrder
    role?: SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    code?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    refId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    code?: SortOrder
    role?: SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    code?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    refId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClubCreateInput = {
    nom?: string | null
    ville?: string | null
    stade?: string | null
    couleurs?: string | null
    coach?: string | null
    telephone?: string | null
    email?: string | null
    notes?: string | null
  }

  export type ClubUncheckedCreateInput = {
    id?: number
    nom?: string | null
    ville?: string | null
    stade?: string | null
    couleurs?: string | null
    coach?: string | null
    telephone?: string | null
    email?: string | null
    notes?: string | null
  }

  export type ClubUpdateInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    couleurs?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClubUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    couleurs?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClubCreateManyInput = {
    id?: number
    nom?: string | null
    ville?: string | null
    stade?: string | null
    couleurs?: string | null
    coach?: string | null
    telephone?: string | null
    email?: string | null
    notes?: string | null
  }

  export type ClubUpdateManyMutationInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    couleurs?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    ville?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    couleurs?: NullableStringFieldUpdateOperationsInput | string | null
    coach?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArbitreCreateInput = {
    nom?: string | null
    prenom?: string | null
    type?: string | null
    niveau?: string | null
    telephone?: string | null
    email?: string | null
    licence?: string | null
    statut?: string | null
    nbMatchs?: number | null
  }

  export type ArbitreUncheckedCreateInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    type?: string | null
    niveau?: string | null
    telephone?: string | null
    email?: string | null
    licence?: string | null
    statut?: string | null
    nbMatchs?: number | null
  }

  export type ArbitreUpdateInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    nbMatchs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArbitreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    nbMatchs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArbitreCreateManyInput = {
    id?: number
    nom?: string | null
    prenom?: string | null
    type?: string | null
    niveau?: string | null
    telephone?: string | null
    email?: string | null
    licence?: string | null
    statut?: string | null
    nbMatchs?: number | null
  }

  export type ArbitreUpdateManyMutationInput = {
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    nbMatchs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArbitreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    prenom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    niveau?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    licence?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    nbMatchs?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SaisonCreateInput = {
    libelle?: string | null
    dateDebut?: string | null
    dateFin?: string | null
    statut?: string | null
  }

  export type SaisonUncheckedCreateInput = {
    id?: number
    libelle?: string | null
    dateDebut?: string | null
    dateFin?: string | null
    statut?: string | null
  }

  export type SaisonUpdateInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: NullableStringFieldUpdateOperationsInput | string | null
    dateFin?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaisonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: NullableStringFieldUpdateOperationsInput | string | null
    dateFin?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaisonCreateManyInput = {
    id?: number
    libelle?: string | null
    dateDebut?: string | null
    dateFin?: string | null
    statut?: string | null
  }

  export type SaisonUpdateManyMutationInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: NullableStringFieldUpdateOperationsInput | string | null
    dateFin?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaisonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    dateDebut?: NullableStringFieldUpdateOperationsInput | string | null
    dateFin?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DivisionCreateInput = {
    saisonId?: number | null
    nom?: string | null
    rang?: number | null
    clubIds?: DivisionCreateclubIdsInput | number[]
    arbitreIds?: DivisionCreatearbitreIdsInput | number[]
  }

  export type DivisionUncheckedCreateInput = {
    id?: number
    saisonId?: number | null
    nom?: string | null
    rang?: number | null
    clubIds?: DivisionCreateclubIdsInput | number[]
    arbitreIds?: DivisionCreatearbitreIdsInput | number[]
  }

  export type DivisionUpdateInput = {
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    clubIds?: DivisionUpdateclubIdsInput | number[]
    arbitreIds?: DivisionUpdatearbitreIdsInput | number[]
  }

  export type DivisionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    clubIds?: DivisionUpdateclubIdsInput | number[]
    arbitreIds?: DivisionUpdatearbitreIdsInput | number[]
  }

  export type DivisionCreateManyInput = {
    id?: number
    saisonId?: number | null
    nom?: string | null
    rang?: number | null
    clubIds?: DivisionCreateclubIdsInput | number[]
    arbitreIds?: DivisionCreatearbitreIdsInput | number[]
  }

  export type DivisionUpdateManyMutationInput = {
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    clubIds?: DivisionUpdateclubIdsInput | number[]
    arbitreIds?: DivisionUpdatearbitreIdsInput | number[]
  }

  export type DivisionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    clubIds?: DivisionUpdateclubIdsInput | number[]
    arbitreIds?: DivisionUpdatearbitreIdsInput | number[]
  }

  export type CompetitionCreateInput = {
    saisonId?: number | null
    nom?: string | null
    type?: string | null
    divisionIds?: CompetitionCreatedivisionIdsInput | number[]
  }

  export type CompetitionUncheckedCreateInput = {
    id?: number
    saisonId?: number | null
    nom?: string | null
    type?: string | null
    divisionIds?: CompetitionCreatedivisionIdsInput | number[]
  }

  export type CompetitionUpdateInput = {
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    divisionIds?: CompetitionUpdatedivisionIdsInput | number[]
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    divisionIds?: CompetitionUpdatedivisionIdsInput | number[]
  }

  export type CompetitionCreateManyInput = {
    id?: number
    saisonId?: number | null
    nom?: string | null
    type?: string | null
    divisionIds?: CompetitionCreatedivisionIdsInput | number[]
  }

  export type CompetitionUpdateManyMutationInput = {
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    divisionIds?: CompetitionUpdatedivisionIdsInput | number[]
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    divisionIds?: CompetitionUpdatedivisionIdsInput | number[]
  }

  export type TauxCreateInput = {
    saisonId?: number | null
    divisionId?: number | null
    division?: string | null
    rang?: number | null
    role?: string | null
    montant?: number | null
  }

  export type TauxUncheckedCreateInput = {
    id?: number
    saisonId?: number | null
    divisionId?: number | null
    division?: string | null
    rang?: number | null
    role?: string | null
    montant?: number | null
  }

  export type TauxUpdateInput = {
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    divisionId?: NullableIntFieldUpdateOperationsInput | number | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TauxUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    divisionId?: NullableIntFieldUpdateOperationsInput | number | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TauxCreateManyInput = {
    id?: number
    saisonId?: number | null
    divisionId?: number | null
    division?: string | null
    rang?: number | null
    role?: string | null
    montant?: number | null
  }

  export type TauxUpdateManyMutationInput = {
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    divisionId?: NullableIntFieldUpdateOperationsInput | number | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TauxUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    divisionId?: NullableIntFieldUpdateOperationsInput | number | null
    division?: NullableStringFieldUpdateOperationsInput | string | null
    rang?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    montant?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SanctionCreateInput = {
    libelle?: string | null
    modeCalcul?: string | null
    valeur?: number | null
  }

  export type SanctionUncheckedCreateInput = {
    id?: number
    libelle?: string | null
    modeCalcul?: string | null
    valeur?: number | null
  }

  export type SanctionUpdateInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    modeCalcul?: NullableStringFieldUpdateOperationsInput | string | null
    valeur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SanctionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    modeCalcul?: NullableStringFieldUpdateOperationsInput | string | null
    valeur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SanctionCreateManyInput = {
    id?: number
    libelle?: string | null
    modeCalcul?: string | null
    valeur?: number | null
  }

  export type SanctionUpdateManyMutationInput = {
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    modeCalcul?: NullableStringFieldUpdateOperationsInput | string | null
    valeur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SanctionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: NullableStringFieldUpdateOperationsInput | string | null
    modeCalcul?: NullableStringFieldUpdateOperationsInput | string | null
    valeur?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MatchCreateInput = {
    competition?: string | null
    dom?: string | null
    vis?: string | null
    date?: string | null
    heure?: string | null
    journee?: string | null
    stade?: string | null
    statut?: string | null
    notes?: string | null
    assigned?: boolean | null
    submitted?: boolean | null
    ac?: string | null
    a1?: string | null
    a2?: string | null
    a4?: string | null
  }

  export type MatchUncheckedCreateInput = {
    id?: number
    competition?: string | null
    dom?: string | null
    vis?: string | null
    date?: string | null
    heure?: string | null
    journee?: string | null
    stade?: string | null
    statut?: string | null
    notes?: string | null
    assigned?: boolean | null
    submitted?: boolean | null
    ac?: string | null
    a1?: string | null
    a2?: string | null
    a4?: string | null
  }

  export type MatchUpdateInput = {
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dom?: NullableStringFieldUpdateOperationsInput | string | null
    vis?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    journee?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    a1?: NullableStringFieldUpdateOperationsInput | string | null
    a2?: NullableStringFieldUpdateOperationsInput | string | null
    a4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dom?: NullableStringFieldUpdateOperationsInput | string | null
    vis?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    journee?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    a1?: NullableStringFieldUpdateOperationsInput | string | null
    a2?: NullableStringFieldUpdateOperationsInput | string | null
    a4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchCreateManyInput = {
    id?: number
    competition?: string | null
    dom?: string | null
    vis?: string | null
    date?: string | null
    heure?: string | null
    journee?: string | null
    stade?: string | null
    statut?: string | null
    notes?: string | null
    assigned?: boolean | null
    submitted?: boolean | null
    ac?: string | null
    a1?: string | null
    a2?: string | null
    a4?: string | null
  }

  export type MatchUpdateManyMutationInput = {
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dom?: NullableStringFieldUpdateOperationsInput | string | null
    vis?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    journee?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    a1?: NullableStringFieldUpdateOperationsInput | string | null
    a2?: NullableStringFieldUpdateOperationsInput | string | null
    a4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dom?: NullableStringFieldUpdateOperationsInput | string | null
    vis?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
    heure?: NullableStringFieldUpdateOperationsInput | string | null
    journee?: NullableStringFieldUpdateOperationsInput | string | null
    stade?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    assigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    submitted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ac?: NullableStringFieldUpdateOperationsInput | string | null
    a1?: NullableStringFieldUpdateOperationsInput | string | null
    a2?: NullableStringFieldUpdateOperationsInput | string | null
    a4?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeuilleMatchCreateInput = {
    matchId?: number | null
    saisonId?: number | null
    domicile?: string | null
    visiteur?: string | null
    competition?: string | null
    dateMatch?: string | null
    scoreDom?: string | null
    scoreVis?: string | null
    incidents?: string | null
    divisionDom?: string | null
    divisionVis?: string | null
    divisionRetenue?: string | null
    statut?: string | null
    dateValidation?: string | null
  }

  export type FeuilleMatchUncheckedCreateInput = {
    id?: number
    matchId?: number | null
    saisonId?: number | null
    domicile?: string | null
    visiteur?: string | null
    competition?: string | null
    dateMatch?: string | null
    scoreDom?: string | null
    scoreVis?: string | null
    incidents?: string | null
    divisionDom?: string | null
    divisionVis?: string | null
    divisionRetenue?: string | null
    statut?: string | null
    dateValidation?: string | null
  }

  export type FeuilleMatchUpdateInput = {
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    visiteur?: NullableStringFieldUpdateOperationsInput | string | null
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dateMatch?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    divisionDom?: NullableStringFieldUpdateOperationsInput | string | null
    divisionVis?: NullableStringFieldUpdateOperationsInput | string | null
    divisionRetenue?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateValidation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeuilleMatchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    visiteur?: NullableStringFieldUpdateOperationsInput | string | null
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dateMatch?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    divisionDom?: NullableStringFieldUpdateOperationsInput | string | null
    divisionVis?: NullableStringFieldUpdateOperationsInput | string | null
    divisionRetenue?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateValidation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeuilleMatchCreateManyInput = {
    id?: number
    matchId?: number | null
    saisonId?: number | null
    domicile?: string | null
    visiteur?: string | null
    competition?: string | null
    dateMatch?: string | null
    scoreDom?: string | null
    scoreVis?: string | null
    incidents?: string | null
    divisionDom?: string | null
    divisionVis?: string | null
    divisionRetenue?: string | null
    statut?: string | null
    dateValidation?: string | null
  }

  export type FeuilleMatchUpdateManyMutationInput = {
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    visiteur?: NullableStringFieldUpdateOperationsInput | string | null
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dateMatch?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    divisionDom?: NullableStringFieldUpdateOperationsInput | string | null
    divisionVis?: NullableStringFieldUpdateOperationsInput | string | null
    divisionRetenue?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateValidation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FeuilleMatchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    domicile?: NullableStringFieldUpdateOperationsInput | string | null
    visiteur?: NullableStringFieldUpdateOperationsInput | string | null
    competition?: NullableStringFieldUpdateOperationsInput | string | null
    dateMatch?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    divisionDom?: NullableStringFieldUpdateOperationsInput | string | null
    divisionVis?: NullableStringFieldUpdateOperationsInput | string | null
    divisionRetenue?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateValidation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PresenceArbitreCreateInput = {
    feuilleId?: number | null
    nomArbitre?: string | null
    roleArbitre?: string | null
    present?: boolean | null
  }

  export type PresenceArbitreUncheckedCreateInput = {
    id?: number
    feuilleId?: number | null
    nomArbitre?: string | null
    roleArbitre?: string | null
    present?: boolean | null
  }

  export type PresenceArbitreUpdateInput = {
    feuilleId?: NullableIntFieldUpdateOperationsInput | number | null
    nomArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    roleArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    present?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PresenceArbitreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    feuilleId?: NullableIntFieldUpdateOperationsInput | number | null
    nomArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    roleArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    present?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PresenceArbitreCreateManyInput = {
    id?: number
    feuilleId?: number | null
    nomArbitre?: string | null
    roleArbitre?: string | null
    present?: boolean | null
  }

  export type PresenceArbitreUpdateManyMutationInput = {
    feuilleId?: NullableIntFieldUpdateOperationsInput | number | null
    nomArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    roleArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    present?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PresenceArbitreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    feuilleId?: NullableIntFieldUpdateOperationsInput | number | null
    nomArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    roleArbitre?: NullableStringFieldUpdateOperationsInput | string | null
    present?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SanctionAppliqueeCreateInput = {
    presenceId?: number | null
    typeSanctionId?: number | null
    montantApplique?: number | null
    commentaire?: string | null
  }

  export type SanctionAppliqueeUncheckedCreateInput = {
    id?: number
    presenceId?: number | null
    typeSanctionId?: number | null
    montantApplique?: number | null
    commentaire?: string | null
  }

  export type SanctionAppliqueeUpdateInput = {
    presenceId?: NullableIntFieldUpdateOperationsInput | number | null
    typeSanctionId?: NullableIntFieldUpdateOperationsInput | number | null
    montantApplique?: NullableFloatFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SanctionAppliqueeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    presenceId?: NullableIntFieldUpdateOperationsInput | number | null
    typeSanctionId?: NullableIntFieldUpdateOperationsInput | number | null
    montantApplique?: NullableFloatFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SanctionAppliqueeCreateManyInput = {
    id?: number
    presenceId?: number | null
    typeSanctionId?: number | null
    montantApplique?: number | null
    commentaire?: string | null
  }

  export type SanctionAppliqueeUpdateManyMutationInput = {
    presenceId?: NullableIntFieldUpdateOperationsInput | number | null
    typeSanctionId?: NullableIntFieldUpdateOperationsInput | number | null
    montantApplique?: NullableFloatFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SanctionAppliqueeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    presenceId?: NullableIntFieldUpdateOperationsInput | number | null
    typeSanctionId?: NullableIntFieldUpdateOperationsInput | number | null
    montantApplique?: NullableFloatFieldUpdateOperationsInput | number | null
    commentaire?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConfirmationPresenceCreateInput = {
    matchId?: number | null
    arbitreId?: number | null
    date?: string | null
  }

  export type ConfirmationPresenceUncheckedCreateInput = {
    id?: number
    matchId?: number | null
    arbitreId?: number | null
    date?: string | null
  }

  export type ConfirmationPresenceUpdateInput = {
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConfirmationPresenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConfirmationPresenceCreateManyInput = {
    id?: number
    matchId?: number | null
    arbitreId?: number | null
    date?: string | null
  }

  export type ConfirmationPresenceUpdateManyMutationInput = {
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConfirmationPresenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapportArbitreCreateInput = {
    matchId?: number | null
    saisonId?: number | null
    arbitreId?: number | null
    redacteurNom?: string | null
    scoreDom?: string | null
    scoreVis?: string | null
    discipline?: string | null
    incidents?: string | null
    observations?: string | null
    equipe?: NullableJsonNullValueInput | InputJsonValue
    statut?: string | null
    dateEnvoi?: string | null
    numMatch?: string | null
    enFaveurDe?: string | null
    assesseur?: string | null
    commentaires?: string | null
    decisionsImpacte?: string | null
    arbitreRecommande?: string | null
    suiviParticulier?: string | null
  }

  export type RapportArbitreUncheckedCreateInput = {
    id?: number
    matchId?: number | null
    saisonId?: number | null
    arbitreId?: number | null
    redacteurNom?: string | null
    scoreDom?: string | null
    scoreVis?: string | null
    discipline?: string | null
    incidents?: string | null
    observations?: string | null
    equipe?: NullableJsonNullValueInput | InputJsonValue
    statut?: string | null
    dateEnvoi?: string | null
    numMatch?: string | null
    enFaveurDe?: string | null
    assesseur?: string | null
    commentaires?: string | null
    decisionsImpacte?: string | null
    arbitreRecommande?: string | null
    suiviParticulier?: string | null
  }

  export type RapportArbitreUpdateInput = {
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    redacteurNom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    equipe?: NullableJsonNullValueInput | InputJsonValue
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateEnvoi?: NullableStringFieldUpdateOperationsInput | string | null
    numMatch?: NullableStringFieldUpdateOperationsInput | string | null
    enFaveurDe?: NullableStringFieldUpdateOperationsInput | string | null
    assesseur?: NullableStringFieldUpdateOperationsInput | string | null
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    decisionsImpacte?: NullableStringFieldUpdateOperationsInput | string | null
    arbitreRecommande?: NullableStringFieldUpdateOperationsInput | string | null
    suiviParticulier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapportArbitreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    redacteurNom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    equipe?: NullableJsonNullValueInput | InputJsonValue
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateEnvoi?: NullableStringFieldUpdateOperationsInput | string | null
    numMatch?: NullableStringFieldUpdateOperationsInput | string | null
    enFaveurDe?: NullableStringFieldUpdateOperationsInput | string | null
    assesseur?: NullableStringFieldUpdateOperationsInput | string | null
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    decisionsImpacte?: NullableStringFieldUpdateOperationsInput | string | null
    arbitreRecommande?: NullableStringFieldUpdateOperationsInput | string | null
    suiviParticulier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapportArbitreCreateManyInput = {
    id?: number
    matchId?: number | null
    saisonId?: number | null
    arbitreId?: number | null
    redacteurNom?: string | null
    scoreDom?: string | null
    scoreVis?: string | null
    discipline?: string | null
    incidents?: string | null
    observations?: string | null
    equipe?: NullableJsonNullValueInput | InputJsonValue
    statut?: string | null
    dateEnvoi?: string | null
    numMatch?: string | null
    enFaveurDe?: string | null
    assesseur?: string | null
    commentaires?: string | null
    decisionsImpacte?: string | null
    arbitreRecommande?: string | null
    suiviParticulier?: string | null
  }

  export type RapportArbitreUpdateManyMutationInput = {
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    redacteurNom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    equipe?: NullableJsonNullValueInput | InputJsonValue
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateEnvoi?: NullableStringFieldUpdateOperationsInput | string | null
    numMatch?: NullableStringFieldUpdateOperationsInput | string | null
    enFaveurDe?: NullableStringFieldUpdateOperationsInput | string | null
    assesseur?: NullableStringFieldUpdateOperationsInput | string | null
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    decisionsImpacte?: NullableStringFieldUpdateOperationsInput | string | null
    arbitreRecommande?: NullableStringFieldUpdateOperationsInput | string | null
    suiviParticulier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RapportArbitreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matchId?: NullableIntFieldUpdateOperationsInput | number | null
    saisonId?: NullableIntFieldUpdateOperationsInput | number | null
    arbitreId?: NullableIntFieldUpdateOperationsInput | number | null
    redacteurNom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreDom?: NullableStringFieldUpdateOperationsInput | string | null
    scoreVis?: NullableStringFieldUpdateOperationsInput | string | null
    discipline?: NullableStringFieldUpdateOperationsInput | string | null
    incidents?: NullableStringFieldUpdateOperationsInput | string | null
    observations?: NullableStringFieldUpdateOperationsInput | string | null
    equipe?: NullableJsonNullValueInput | InputJsonValue
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    dateEnvoi?: NullableStringFieldUpdateOperationsInput | string | null
    numMatch?: NullableStringFieldUpdateOperationsInput | string | null
    enFaveurDe?: NullableStringFieldUpdateOperationsInput | string | null
    assesseur?: NullableStringFieldUpdateOperationsInput | string | null
    commentaires?: NullableStringFieldUpdateOperationsInput | string | null
    decisionsImpacte?: NullableStringFieldUpdateOperationsInput | string | null
    arbitreRecommande?: NullableStringFieldUpdateOperationsInput | string | null
    suiviParticulier?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    code?: string
    role?: string
    refId?: number | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    code?: string
    role?: string
    refId?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    code?: string
    role?: string
    refId?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    stade?: SortOrder
    couleurs?: SortOrder
    coach?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
  }

  export type ClubAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    stade?: SortOrder
    couleurs?: SortOrder
    coach?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    stade?: SortOrder
    couleurs?: SortOrder
    coach?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    notes?: SortOrder
  }

  export type ClubSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArbitreCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    type?: SortOrder
    niveau?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    licence?: SortOrder
    statut?: SortOrder
    nbMatchs?: SortOrder
  }

  export type ArbitreAvgOrderByAggregateInput = {
    id?: SortOrder
    nbMatchs?: SortOrder
  }

  export type ArbitreMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    type?: SortOrder
    niveau?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    licence?: SortOrder
    statut?: SortOrder
    nbMatchs?: SortOrder
  }

  export type ArbitreMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    type?: SortOrder
    niveau?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    licence?: SortOrder
    statut?: SortOrder
    nbMatchs?: SortOrder
  }

  export type ArbitreSumOrderByAggregateInput = {
    id?: SortOrder
    nbMatchs?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type SaisonCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
  }

  export type SaisonAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SaisonMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
  }

  export type SaisonMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    statut?: SortOrder
  }

  export type SaisonSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DivisionCountOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    nom?: SortOrder
    rang?: SortOrder
    clubIds?: SortOrder
    arbitreIds?: SortOrder
  }

  export type DivisionAvgOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    rang?: SortOrder
    clubIds?: SortOrder
    arbitreIds?: SortOrder
  }

  export type DivisionMaxOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    nom?: SortOrder
    rang?: SortOrder
  }

  export type DivisionMinOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    nom?: SortOrder
    rang?: SortOrder
  }

  export type DivisionSumOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    rang?: SortOrder
    clubIds?: SortOrder
    arbitreIds?: SortOrder
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    nom?: SortOrder
    type?: SortOrder
    divisionIds?: SortOrder
  }

  export type CompetitionAvgOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    divisionIds?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    nom?: SortOrder
    type?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    nom?: SortOrder
    type?: SortOrder
  }

  export type CompetitionSumOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    divisionIds?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TauxCountOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    divisionId?: SortOrder
    division?: SortOrder
    rang?: SortOrder
    role?: SortOrder
    montant?: SortOrder
  }

  export type TauxAvgOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    divisionId?: SortOrder
    rang?: SortOrder
    montant?: SortOrder
  }

  export type TauxMaxOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    divisionId?: SortOrder
    division?: SortOrder
    rang?: SortOrder
    role?: SortOrder
    montant?: SortOrder
  }

  export type TauxMinOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    divisionId?: SortOrder
    division?: SortOrder
    rang?: SortOrder
    role?: SortOrder
    montant?: SortOrder
  }

  export type TauxSumOrderByAggregateInput = {
    id?: SortOrder
    saisonId?: SortOrder
    divisionId?: SortOrder
    rang?: SortOrder
    montant?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type SanctionCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    modeCalcul?: SortOrder
    valeur?: SortOrder
  }

  export type SanctionAvgOrderByAggregateInput = {
    id?: SortOrder
    valeur?: SortOrder
  }

  export type SanctionMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    modeCalcul?: SortOrder
    valeur?: SortOrder
  }

  export type SanctionMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    modeCalcul?: SortOrder
    valeur?: SortOrder
  }

  export type SanctionSumOrderByAggregateInput = {
    id?: SortOrder
    valeur?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    dom?: SortOrder
    vis?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    journee?: SortOrder
    stade?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    assigned?: SortOrder
    submitted?: SortOrder
    ac?: SortOrder
    a1?: SortOrder
    a2?: SortOrder
    a4?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    dom?: SortOrder
    vis?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    journee?: SortOrder
    stade?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    assigned?: SortOrder
    submitted?: SortOrder
    ac?: SortOrder
    a1?: SortOrder
    a2?: SortOrder
    a4?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    competition?: SortOrder
    dom?: SortOrder
    vis?: SortOrder
    date?: SortOrder
    heure?: SortOrder
    journee?: SortOrder
    stade?: SortOrder
    statut?: SortOrder
    notes?: SortOrder
    assigned?: SortOrder
    submitted?: SortOrder
    ac?: SortOrder
    a1?: SortOrder
    a2?: SortOrder
    a4?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FeuilleMatchCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    domicile?: SortOrder
    visiteur?: SortOrder
    competition?: SortOrder
    dateMatch?: SortOrder
    scoreDom?: SortOrder
    scoreVis?: SortOrder
    incidents?: SortOrder
    divisionDom?: SortOrder
    divisionVis?: SortOrder
    divisionRetenue?: SortOrder
    statut?: SortOrder
    dateValidation?: SortOrder
  }

  export type FeuilleMatchAvgOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
  }

  export type FeuilleMatchMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    domicile?: SortOrder
    visiteur?: SortOrder
    competition?: SortOrder
    dateMatch?: SortOrder
    scoreDom?: SortOrder
    scoreVis?: SortOrder
    incidents?: SortOrder
    divisionDom?: SortOrder
    divisionVis?: SortOrder
    divisionRetenue?: SortOrder
    statut?: SortOrder
    dateValidation?: SortOrder
  }

  export type FeuilleMatchMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    domicile?: SortOrder
    visiteur?: SortOrder
    competition?: SortOrder
    dateMatch?: SortOrder
    scoreDom?: SortOrder
    scoreVis?: SortOrder
    incidents?: SortOrder
    divisionDom?: SortOrder
    divisionVis?: SortOrder
    divisionRetenue?: SortOrder
    statut?: SortOrder
    dateValidation?: SortOrder
  }

  export type FeuilleMatchSumOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
  }

  export type PresenceArbitreCountOrderByAggregateInput = {
    id?: SortOrder
    feuilleId?: SortOrder
    nomArbitre?: SortOrder
    roleArbitre?: SortOrder
    present?: SortOrder
  }

  export type PresenceArbitreAvgOrderByAggregateInput = {
    id?: SortOrder
    feuilleId?: SortOrder
  }

  export type PresenceArbitreMaxOrderByAggregateInput = {
    id?: SortOrder
    feuilleId?: SortOrder
    nomArbitre?: SortOrder
    roleArbitre?: SortOrder
    present?: SortOrder
  }

  export type PresenceArbitreMinOrderByAggregateInput = {
    id?: SortOrder
    feuilleId?: SortOrder
    nomArbitre?: SortOrder
    roleArbitre?: SortOrder
    present?: SortOrder
  }

  export type PresenceArbitreSumOrderByAggregateInput = {
    id?: SortOrder
    feuilleId?: SortOrder
  }

  export type SanctionAppliqueeCountOrderByAggregateInput = {
    id?: SortOrder
    presenceId?: SortOrder
    typeSanctionId?: SortOrder
    montantApplique?: SortOrder
    commentaire?: SortOrder
  }

  export type SanctionAppliqueeAvgOrderByAggregateInput = {
    id?: SortOrder
    presenceId?: SortOrder
    typeSanctionId?: SortOrder
    montantApplique?: SortOrder
  }

  export type SanctionAppliqueeMaxOrderByAggregateInput = {
    id?: SortOrder
    presenceId?: SortOrder
    typeSanctionId?: SortOrder
    montantApplique?: SortOrder
    commentaire?: SortOrder
  }

  export type SanctionAppliqueeMinOrderByAggregateInput = {
    id?: SortOrder
    presenceId?: SortOrder
    typeSanctionId?: SortOrder
    montantApplique?: SortOrder
    commentaire?: SortOrder
  }

  export type SanctionAppliqueeSumOrderByAggregateInput = {
    id?: SortOrder
    presenceId?: SortOrder
    typeSanctionId?: SortOrder
    montantApplique?: SortOrder
  }

  export type ConfirmationPresenceCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    arbitreId?: SortOrder
    date?: SortOrder
  }

  export type ConfirmationPresenceAvgOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    arbitreId?: SortOrder
  }

  export type ConfirmationPresenceMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    arbitreId?: SortOrder
    date?: SortOrder
  }

  export type ConfirmationPresenceMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    arbitreId?: SortOrder
    date?: SortOrder
  }

  export type ConfirmationPresenceSumOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    arbitreId?: SortOrder
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

  export type RapportArbitreCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    arbitreId?: SortOrder
    redacteurNom?: SortOrder
    scoreDom?: SortOrder
    scoreVis?: SortOrder
    discipline?: SortOrder
    incidents?: SortOrder
    observations?: SortOrder
    equipe?: SortOrder
    statut?: SortOrder
    dateEnvoi?: SortOrder
    numMatch?: SortOrder
    enFaveurDe?: SortOrder
    assesseur?: SortOrder
    commentaires?: SortOrder
    decisionsImpacte?: SortOrder
    arbitreRecommande?: SortOrder
    suiviParticulier?: SortOrder
  }

  export type RapportArbitreAvgOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    arbitreId?: SortOrder
  }

  export type RapportArbitreMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    arbitreId?: SortOrder
    redacteurNom?: SortOrder
    scoreDom?: SortOrder
    scoreVis?: SortOrder
    discipline?: SortOrder
    incidents?: SortOrder
    observations?: SortOrder
    statut?: SortOrder
    dateEnvoi?: SortOrder
    numMatch?: SortOrder
    enFaveurDe?: SortOrder
    assesseur?: SortOrder
    commentaires?: SortOrder
    decisionsImpacte?: SortOrder
    arbitreRecommande?: SortOrder
    suiviParticulier?: SortOrder
  }

  export type RapportArbitreMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    arbitreId?: SortOrder
    redacteurNom?: SortOrder
    scoreDom?: SortOrder
    scoreVis?: SortOrder
    discipline?: SortOrder
    incidents?: SortOrder
    observations?: SortOrder
    statut?: SortOrder
    dateEnvoi?: SortOrder
    numMatch?: SortOrder
    enFaveurDe?: SortOrder
    assesseur?: SortOrder
    commentaires?: SortOrder
    decisionsImpacte?: SortOrder
    arbitreRecommande?: SortOrder
    suiviParticulier?: SortOrder
  }

  export type RapportArbitreSumOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    saisonId?: SortOrder
    arbitreId?: SortOrder
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    code?: SortOrder
    role?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    refId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    code?: SortOrder
    role?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    code?: SortOrder
    role?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    refId?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type DivisionCreateclubIdsInput = {
    set: number[]
  }

  export type DivisionCreatearbitreIdsInput = {
    set: number[]
  }

  export type DivisionUpdateclubIdsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type DivisionUpdatearbitreIdsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type CompetitionCreatedivisionIdsInput = {
    set: number[]
  }

  export type CompetitionUpdatedivisionIdsInput = {
    set?: number[]
    push?: number | number[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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