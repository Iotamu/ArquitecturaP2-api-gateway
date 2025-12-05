// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, type ExecuteMeshFn, type SubscribeMeshFn, type MeshContext as BaseMeshContext, type MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { ImportFn } from '@graphql-mesh/types';
import type { GameMockTypes } from './sources/GameMock/types';
import type { TeamMockTypes } from './sources/TeamMock/types';
import type { TournamentMockTypes } from './sources/TournamentMock/types';
import type { UserAuthTypes } from './sources/UserAuth/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  use__GetAllUsersRequest_Input: { input: any; output: any; }
  TransportOptions: { input: any; output: any; }
};

export type Query = {
  use_UserService_GetUser?: Maybe<use__UserResponse>;
  use_UserService_GetAllUsers?: Maybe<use__ListUsersResponse>;
  use_UserService_connectivityState?: Maybe<ConnectivityState>;
  getTeam?: Maybe<Team>;
  listTeams: Array<Team>;
  getGame?: Maybe<Game>;
  listGame: Array<Game>;
  getTournament?: Maybe<Tournament>;
  listTournament: Array<Tournament>;
};


export type Queryuse_UserService_GetUserArgs = {
  input?: InputMaybe<use__GetUserRequest_Input>;
};


export type Queryuse_UserService_GetAllUsersArgs = {
  input?: InputMaybe<Scalars['use__GetAllUsersRequest_Input']['input']>;
};


export type Queryuse_UserService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerygetTeamArgs = {
  id: Scalars['ID']['input'];
};


export type QuerygetGameArgs = {
  id: Scalars['ID']['input'];
};


export type QuerygetTournamentArgs = {
  id: Scalars['ID']['input'];
};

export type Mutation = {
  use_UserService_CreateUser?: Maybe<use__UserResponse>;
  use_UserService_UpdateUser?: Maybe<use__UserResponse>;
  use_UserService_DeleteUser?: Maybe<use__DeleteUserResponse>;
};


export type Mutationuse_UserService_CreateUserArgs = {
  input?: InputMaybe<use__CreateUserRequest_Input>;
};


export type Mutationuse_UserService_UpdateUserArgs = {
  input?: InputMaybe<use__UpdateUserRequest_Input>;
};


export type Mutationuse_UserService_DeleteUserArgs = {
  input?: InputMaybe<use__DeleteUserRequest_Input>;
};

export type use__UserResponse = {
  user?: Maybe<use__User>;
  message?: Maybe<Scalars['String']['output']>;
};

export type use__User = {
  id?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
  googleID?: Maybe<Scalars['String']['output']>;
  discordID?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  avatar_url?: Maybe<Scalars['String']['output']>;
};

export type use__GetUserRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type use__ListUsersResponse = {
  users?: Maybe<Array<Maybe<use__User>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

export type use__CreateUserRequest_Input = {
  username?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type use__UpdateUserRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type use__DeleteUserResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type use__DeleteUserRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  members: Scalars['Int']['output'];
};

export type Game = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Tournament = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<Record<PropertyKey, never>>;
  Mutation: ResolverTypeWrapper<Record<PropertyKey, never>>;
  use__UserResponse: ResolverTypeWrapper<use__UserResponse>;
  use__User: ResolverTypeWrapper<use__User>;
  use__GetUserRequest_Input: use__GetUserRequest_Input;
  use__ListUsersResponse: ResolverTypeWrapper<use__ListUsersResponse>;
  use__GetAllUsersRequest_Input: ResolverTypeWrapper<Scalars['use__GetAllUsersRequest_Input']['output']>;
  ConnectivityState: ConnectivityState;
  use__CreateUserRequest_Input: use__CreateUserRequest_Input;
  use__UpdateUserRequest_Input: use__UpdateUserRequest_Input;
  use__DeleteUserResponse: ResolverTypeWrapper<use__DeleteUserResponse>;
  use__DeleteUserRequest_Input: use__DeleteUserRequest_Input;
  TransportOptions: ResolverTypeWrapper<Scalars['TransportOptions']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Team: ResolverTypeWrapper<Team>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Game: ResolverTypeWrapper<Game>;
  Tournament: ResolverTypeWrapper<Tournament>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: Record<PropertyKey, never>;
  Mutation: Record<PropertyKey, never>;
  use__UserResponse: use__UserResponse;
  use__User: use__User;
  use__GetUserRequest_Input: use__GetUserRequest_Input;
  use__ListUsersResponse: use__ListUsersResponse;
  use__GetAllUsersRequest_Input: Scalars['use__GetAllUsersRequest_Input']['output'];
  use__CreateUserRequest_Input: use__CreateUserRequest_Input;
  use__UpdateUserRequest_Input: use__UpdateUserRequest_Input;
  use__DeleteUserResponse: use__DeleteUserResponse;
  use__DeleteUserRequest_Input: use__DeleteUserRequest_Input;
  TransportOptions: Scalars['TransportOptions']['output'];
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  Team: Team;
  ID: Scalars['ID']['output'];
  Game: Game;
  Tournament: Tournament;
}>;

export type grpcMethodDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  rootJsonName?: Maybe<Scalars['String']['input']>;
  objPath?: Maybe<Scalars['String']['input']>;
  methodName?: Maybe<Scalars['String']['input']>;
  responseStream?: Maybe<Scalars['Boolean']['input']>;
};

export type grpcMethodDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = grpcMethodDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type grpcConnectivityStateDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  rootJsonName?: Maybe<Scalars['String']['input']>;
  objPath?: Maybe<Scalars['String']['input']>;
};

export type grpcConnectivityStateDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = grpcConnectivityStateDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type streamDirectiveArgs = {
  if?: Scalars['Boolean']['input'];
  label?: Maybe<Scalars['String']['input']>;
  initialCount?: Maybe<Scalars['Int']['input']>;
};

export type streamDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = streamDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type transportDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  kind?: Maybe<Scalars['String']['input']>;
  location?: Maybe<Scalars['String']['input']>;
  options?: Maybe<Scalars['TransportOptions']['input']>;
};

export type transportDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = transportDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  use_UserService_GetUser?: Resolver<Maybe<ResolversTypes['use__UserResponse']>, ParentType, ContextType, Partial<Queryuse_UserService_GetUserArgs>>;
  use_UserService_GetAllUsers?: Resolver<Maybe<ResolversTypes['use__ListUsersResponse']>, ParentType, ContextType, Partial<Queryuse_UserService_GetAllUsersArgs>>;
  use_UserService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryuse_UserService_connectivityStateArgs>>;
  getTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QuerygetTeamArgs, 'id'>>;
  listTeams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>;
  getGame?: Resolver<Maybe<ResolversTypes['Game']>, ParentType, ContextType, RequireFields<QuerygetGameArgs, 'id'>>;
  listGame?: Resolver<Array<ResolversTypes['Game']>, ParentType, ContextType>;
  getTournament?: Resolver<Maybe<ResolversTypes['Tournament']>, ParentType, ContextType, RequireFields<QuerygetTournamentArgs, 'id'>>;
  listTournament?: Resolver<Array<ResolversTypes['Tournament']>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  use_UserService_CreateUser?: Resolver<Maybe<ResolversTypes['use__UserResponse']>, ParentType, ContextType, Partial<Mutationuse_UserService_CreateUserArgs>>;
  use_UserService_UpdateUser?: Resolver<Maybe<ResolversTypes['use__UserResponse']>, ParentType, ContextType, Partial<Mutationuse_UserService_UpdateUserArgs>>;
  use_UserService_DeleteUser?: Resolver<Maybe<ResolversTypes['use__DeleteUserResponse']>, ParentType, ContextType, Partial<Mutationuse_UserService_DeleteUserArgs>>;
}>;

export type use__UserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['use__UserResponse'] = ResolversParentTypes['use__UserResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['use__User']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type use__UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['use__User'] = ResolversParentTypes['use__User']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  googleID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discordID?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type use__ListUsersResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['use__ListUsersResponse'] = ResolversParentTypes['use__ListUsersResponse']> = ResolversObject<{
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['use__User']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export interface use__GetAllUsersRequest_InputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['use__GetAllUsersRequest_Input'], any> {
  name: 'use__GetAllUsersRequest_Input';
}

export type use__DeleteUserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['use__DeleteUserResponse'] = ResolversParentTypes['use__DeleteUserResponse']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export interface TransportOptionsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TransportOptions'], any> {
  name: 'TransportOptions';
}

export type TeamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  members?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
}>;

export type GameResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Game'] = ResolversParentTypes['Game']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type TournamentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tournament'] = ResolversParentTypes['Tournament']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  use__UserResponse?: use__UserResponseResolvers<ContextType>;
  use__User?: use__UserResolvers<ContextType>;
  use__ListUsersResponse?: use__ListUsersResponseResolvers<ContextType>;
  use__GetAllUsersRequest_Input?: GraphQLScalarType;
  use__DeleteUserResponse?: use__DeleteUserResponseResolvers<ContextType>;
  TransportOptions?: GraphQLScalarType;
  Team?: TeamResolvers<ContextType>;
  Game?: GameResolvers<ContextType>;
  Tournament?: TournamentResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  grpcMethod?: grpcMethodDirectiveResolver<any, any, ContextType>;
  grpcConnectivityState?: grpcConnectivityStateDirectiveResolver<any, any, ContextType>;
  stream?: streamDirectiveResolver<any, any, ContextType>;
  transport?: transportDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = UserAuthTypes.Context & TeamMockTypes.Context & GameMockTypes.Context & TournamentMockTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"port":4000,"mock":true},
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));