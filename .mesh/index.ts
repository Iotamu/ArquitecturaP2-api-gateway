// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, type ExecuteMeshFn, type SubscribeMeshFn, type MeshContext as BaseMeshContext, type MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { ImportFn } from '@graphql-mesh/types';
import type { UserTypes } from './sources/User/types';
import type { AuthTypes } from './sources/Auth/types';
import type { TournamentMockTypes } from './sources/TournamentMock/types';
import type { TeamMockTypes } from './sources/TeamMock/types';
import type { GameTypes } from './sources/Game/types';
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
  user__GetAllUsersRequest_Input: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  TransportOptions: { input: any; output: any; }
};

export type Query = {
  auth_AuthService_GetGoogleAuthURL?: Maybe<auth__AuthURLResponse>;
  auth_AuthService_GetDiscordAuthURL?: Maybe<auth__AuthURLResponse>;
  auth_AuthService_connectivityState?: Maybe<ConnectivityState>;
  user_UserService_GetUser?: Maybe<user__UserResponse>;
  user_UserService_GetAllUsers?: Maybe<user__ListUsersResponse>;
  user_UserService_connectivityState?: Maybe<ConnectivityState>;
  getTeam?: Maybe<Team>;
  listTeams: Array<Team>;
  getTournament?: Maybe<Tournament>;
  listTournament: Array<Tournament>;
  game_GameService_GetGame?: Maybe<game__GameResponse>;
  game_GameService_connectivityState?: Maybe<ConnectivityState>;
};


export type Queryauth_AuthService_GetGoogleAuthURLArgs = {
  input?: InputMaybe<auth__GetAuthURLRequest_Input>;
};


export type Queryauth_AuthService_GetDiscordAuthURLArgs = {
  input?: InputMaybe<auth__GetAuthURLRequest_Input>;
};


export type Queryauth_AuthService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Queryuser_UserService_GetUserArgs = {
  input?: InputMaybe<user__GetUserRequest_Input>;
};


export type Queryuser_UserService_GetAllUsersArgs = {
  input?: InputMaybe<Scalars['user__GetAllUsersRequest_Input']['input']>;
};


export type Queryuser_UserService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerygetTeamArgs = {
  id: Scalars['ID']['input'];
};


export type QuerygetTournamentArgs = {
  id: Scalars['ID']['input'];
};


export type Querygame_GameService_GetGameArgs = {
  input?: InputMaybe<game__GetGameRequest_Input>;
};


export type Querygame_GameService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  auth_AuthService_GoogleCallback?: Maybe<auth__AuthResponse>;
  auth_AuthService_DiscordCallback?: Maybe<auth__AuthResponse>;
  auth_AuthService_Login?: Maybe<auth__AuthResponse>;
  auth_AuthService_ValidateToken?: Maybe<auth__ValidateTokenResponse>;
  user_UserService_CreateUser?: Maybe<user__UserResponse>;
  user_UserService_UpdateUser?: Maybe<user__UserResponse>;
  user_UserService_DeleteUser?: Maybe<user__DeleteUserResponse>;
  game_GameService_CreateGame?: Maybe<game__GameResponse>;
};


export type Mutationauth_AuthService_GoogleCallbackArgs = {
  input?: InputMaybe<auth__OAuthCallbackRequest_Input>;
};


export type Mutationauth_AuthService_DiscordCallbackArgs = {
  input?: InputMaybe<auth__OAuthCallbackRequest_Input>;
};


export type Mutationauth_AuthService_LoginArgs = {
  input?: InputMaybe<auth__LoginRequest_Input>;
};


export type Mutationauth_AuthService_ValidateTokenArgs = {
  input?: InputMaybe<auth__ValidateTokenRequest_Input>;
};


export type Mutationuser_UserService_CreateUserArgs = {
  input?: InputMaybe<user__CreateUserRequest_Input>;
};


export type Mutationuser_UserService_UpdateUserArgs = {
  input?: InputMaybe<user__UpdateUserRequest_Input>;
};


export type Mutationuser_UserService_DeleteUserArgs = {
  input?: InputMaybe<user__DeleteUserRequest_Input>;
};


export type Mutationgame_GameService_CreateGameArgs = {
  input?: InputMaybe<game__CreateGameRequest_Input>;
};

export type auth__AuthURLResponse = {
  url?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type auth__GetAuthURLRequest_Input = {
  state?: InputMaybe<Scalars['String']['input']>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

export type user__UserResponse = {
  user?: Maybe<user__User>;
  message?: Maybe<Scalars['String']['output']>;
};

export type user__User = {
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

export type user__GetUserRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type user__ListUsersResponse = {
  users?: Maybe<Array<Maybe<user__User>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type auth__AuthResponse = {
  access_token?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  expires_in?: Maybe<Scalars['BigInt']['output']>;
  user?: Maybe<auth__AuthUser>;
  message?: Maybe<Scalars['String']['output']>;
};

export type auth__AuthUser = {
  id?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  avatar_url?: Maybe<Scalars['String']['output']>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type auth__OAuthCallbackRequest_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type auth__LoginRequest_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type auth__ValidateTokenResponse = {
  valid?: Maybe<Scalars['Boolean']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

export type auth__ValidateTokenRequest_Input = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type user__CreateUserRequest_Input = {
  username?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type user__UpdateUserRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type user__DeleteUserResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type user__DeleteUserRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Team = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  members: Scalars['Int']['output'];
};

export type Tournament = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type game__GameResponse = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  genre?: Maybe<Scalars['String']['output']>;
};

export type game__GetGameRequest_Input = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type game__CreateGameRequest_Input = {
  name?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
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
  auth__AuthURLResponse: ResolverTypeWrapper<auth__AuthURLResponse>;
  auth__GetAuthURLRequest_Input: auth__GetAuthURLRequest_Input;
  ConnectivityState: ConnectivityState;
  user__UserResponse: ResolverTypeWrapper<user__UserResponse>;
  user__User: ResolverTypeWrapper<user__User>;
  user__GetUserRequest_Input: user__GetUserRequest_Input;
  user__ListUsersResponse: ResolverTypeWrapper<user__ListUsersResponse>;
  user__GetAllUsersRequest_Input: ResolverTypeWrapper<Scalars['user__GetAllUsersRequest_Input']['output']>;
  auth__AuthResponse: ResolverTypeWrapper<auth__AuthResponse>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  auth__AuthUser: ResolverTypeWrapper<auth__AuthUser>;
  auth__OAuthCallbackRequest_Input: auth__OAuthCallbackRequest_Input;
  auth__LoginRequest_Input: auth__LoginRequest_Input;
  auth__ValidateTokenResponse: ResolverTypeWrapper<auth__ValidateTokenResponse>;
  auth__ValidateTokenRequest_Input: auth__ValidateTokenRequest_Input;
  user__CreateUserRequest_Input: user__CreateUserRequest_Input;
  user__UpdateUserRequest_Input: user__UpdateUserRequest_Input;
  user__DeleteUserResponse: ResolverTypeWrapper<user__DeleteUserResponse>;
  user__DeleteUserRequest_Input: user__DeleteUserRequest_Input;
  TransportOptions: ResolverTypeWrapper<Scalars['TransportOptions']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Team: ResolverTypeWrapper<Team>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Tournament: ResolverTypeWrapper<Tournament>;
  game__GameResponse: ResolverTypeWrapper<game__GameResponse>;
  game__GetGameRequest_Input: game__GetGameRequest_Input;
  game__CreateGameRequest_Input: game__CreateGameRequest_Input;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: Record<PropertyKey, never>;
  Mutation: Record<PropertyKey, never>;
  auth__AuthURLResponse: auth__AuthURLResponse;
  auth__GetAuthURLRequest_Input: auth__GetAuthURLRequest_Input;
  user__UserResponse: user__UserResponse;
  user__User: user__User;
  user__GetUserRequest_Input: user__GetUserRequest_Input;
  user__ListUsersResponse: user__ListUsersResponse;
  user__GetAllUsersRequest_Input: Scalars['user__GetAllUsersRequest_Input']['output'];
  auth__AuthResponse: auth__AuthResponse;
  BigInt: Scalars['BigInt']['output'];
  auth__AuthUser: auth__AuthUser;
  auth__OAuthCallbackRequest_Input: auth__OAuthCallbackRequest_Input;
  auth__LoginRequest_Input: auth__LoginRequest_Input;
  auth__ValidateTokenResponse: auth__ValidateTokenResponse;
  auth__ValidateTokenRequest_Input: auth__ValidateTokenRequest_Input;
  user__CreateUserRequest_Input: user__CreateUserRequest_Input;
  user__UpdateUserRequest_Input: user__UpdateUserRequest_Input;
  user__DeleteUserResponse: user__DeleteUserResponse;
  user__DeleteUserRequest_Input: user__DeleteUserRequest_Input;
  TransportOptions: Scalars['TransportOptions']['output'];
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  Team: Team;
  ID: Scalars['ID']['output'];
  Tournament: Tournament;
  game__GameResponse: game__GameResponse;
  game__GetGameRequest_Input: game__GetGameRequest_Input;
  game__CreateGameRequest_Input: game__CreateGameRequest_Input;
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
  auth_AuthService_GetGoogleAuthURL?: Resolver<Maybe<ResolversTypes['auth__AuthURLResponse']>, ParentType, ContextType, Partial<Queryauth_AuthService_GetGoogleAuthURLArgs>>;
  auth_AuthService_GetDiscordAuthURL?: Resolver<Maybe<ResolversTypes['auth__AuthURLResponse']>, ParentType, ContextType, Partial<Queryauth_AuthService_GetDiscordAuthURLArgs>>;
  auth_AuthService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryauth_AuthService_connectivityStateArgs>>;
  user_UserService_GetUser?: Resolver<Maybe<ResolversTypes['user__UserResponse']>, ParentType, ContextType, Partial<Queryuser_UserService_GetUserArgs>>;
  user_UserService_GetAllUsers?: Resolver<Maybe<ResolversTypes['user__ListUsersResponse']>, ParentType, ContextType, Partial<Queryuser_UserService_GetAllUsersArgs>>;
  user_UserService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryuser_UserService_connectivityStateArgs>>;
  getTeam?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType, RequireFields<QuerygetTeamArgs, 'id'>>;
  listTeams?: Resolver<Array<ResolversTypes['Team']>, ParentType, ContextType>;
  getTournament?: Resolver<Maybe<ResolversTypes['Tournament']>, ParentType, ContextType, RequireFields<QuerygetTournamentArgs, 'id'>>;
  listTournament?: Resolver<Array<ResolversTypes['Tournament']>, ParentType, ContextType>;
  game_GameService_GetGame?: Resolver<Maybe<ResolversTypes['game__GameResponse']>, ParentType, ContextType, Partial<Querygame_GameService_GetGameArgs>>;
  game_GameService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querygame_GameService_connectivityStateArgs>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  auth_AuthService_GoogleCallback?: Resolver<Maybe<ResolversTypes['auth__AuthResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_GoogleCallbackArgs>>;
  auth_AuthService_DiscordCallback?: Resolver<Maybe<ResolversTypes['auth__AuthResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_DiscordCallbackArgs>>;
  auth_AuthService_Login?: Resolver<Maybe<ResolversTypes['auth__AuthResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_LoginArgs>>;
  auth_AuthService_ValidateToken?: Resolver<Maybe<ResolversTypes['auth__ValidateTokenResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_ValidateTokenArgs>>;
  user_UserService_CreateUser?: Resolver<Maybe<ResolversTypes['user__UserResponse']>, ParentType, ContextType, Partial<Mutationuser_UserService_CreateUserArgs>>;
  user_UserService_UpdateUser?: Resolver<Maybe<ResolversTypes['user__UserResponse']>, ParentType, ContextType, Partial<Mutationuser_UserService_UpdateUserArgs>>;
  user_UserService_DeleteUser?: Resolver<Maybe<ResolversTypes['user__DeleteUserResponse']>, ParentType, ContextType, Partial<Mutationuser_UserService_DeleteUserArgs>>;
  game_GameService_CreateGame?: Resolver<Maybe<ResolversTypes['game__GameResponse']>, ParentType, ContextType, Partial<Mutationgame_GameService_CreateGameArgs>>;
}>;

export type auth__AuthURLResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['auth__AuthURLResponse'] = ResolversParentTypes['auth__AuthURLResponse']> = ResolversObject<{
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type user__UserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['user__UserResponse'] = ResolversParentTypes['user__UserResponse']> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['user__User']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type user__UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['user__User'] = ResolversParentTypes['user__User']> = ResolversObject<{
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

export type user__ListUsersResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['user__ListUsersResponse'] = ResolversParentTypes['user__ListUsersResponse']> = ResolversObject<{
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['user__User']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export interface user__GetAllUsersRequest_InputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['user__GetAllUsersRequest_Input'], any> {
  name: 'user__GetAllUsersRequest_Input';
}

export type auth__AuthResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['auth__AuthResponse'] = ResolversParentTypes['auth__AuthResponse']> = ResolversObject<{
  access_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_in?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['auth__AuthUser']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type auth__AuthUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['auth__AuthUser'] = ResolversParentTypes['auth__AuthUser']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}>;

export type auth__ValidateTokenResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['auth__ValidateTokenResponse'] = ResolversParentTypes['auth__ValidateTokenResponse']> = ResolversObject<{
  valid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type user__DeleteUserResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['user__DeleteUserResponse'] = ResolversParentTypes['user__DeleteUserResponse']> = ResolversObject<{
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

export type TournamentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tournament'] = ResolversParentTypes['Tournament']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type game__GameResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['game__GameResponse'] = ResolversParentTypes['game__GameResponse']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  auth__AuthURLResponse?: auth__AuthURLResponseResolvers<ContextType>;
  user__UserResponse?: user__UserResponseResolvers<ContextType>;
  user__User?: user__UserResolvers<ContextType>;
  user__ListUsersResponse?: user__ListUsersResponseResolvers<ContextType>;
  user__GetAllUsersRequest_Input?: GraphQLScalarType;
  auth__AuthResponse?: auth__AuthResponseResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  auth__AuthUser?: auth__AuthUserResolvers<ContextType>;
  auth__ValidateTokenResponse?: auth__ValidateTokenResponseResolvers<ContextType>;
  user__DeleteUserResponse?: user__DeleteUserResponseResolvers<ContextType>;
  TransportOptions?: GraphQLScalarType;
  Team?: TeamResolvers<ContextType>;
  Tournament?: TournamentResolvers<ContextType>;
  game__GameResponse?: game__GameResponseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  grpcMethod?: grpcMethodDirectiveResolver<any, any, ContextType>;
  grpcConnectivityState?: grpcConnectivityStateDirectiveResolver<any, any, ContextType>;
  stream?: streamDirectiveResolver<any, any, ContextType>;
  transport?: transportDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = UserTypes.Context & AuthTypes.Context & TeamMockTypes.Context & TournamentMockTypes.Context & GameTypes.Context & BaseMeshContext;


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