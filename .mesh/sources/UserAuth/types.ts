// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace UserAuthTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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

  export type QuerySdk = {
      /** undefined **/
  use_UserService_GetUser: InContextSdkMethod<Query['use_UserService_GetUser'], Queryuse_UserService_GetUserArgs, MeshContext>,
  /** undefined **/
  use_UserService_GetAllUsers: InContextSdkMethod<Query['use_UserService_GetAllUsers'], Queryuse_UserService_GetAllUsersArgs, MeshContext>,
  /** undefined **/
  use_UserService_connectivityState: InContextSdkMethod<Query['use_UserService_connectivityState'], Queryuse_UserService_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  use_UserService_CreateUser: InContextSdkMethod<Mutation['use_UserService_CreateUser'], Mutationuse_UserService_CreateUserArgs, MeshContext>,
  /** undefined **/
  use_UserService_UpdateUser: InContextSdkMethod<Mutation['use_UserService_UpdateUser'], Mutationuse_UserService_UpdateUserArgs, MeshContext>,
  /** undefined **/
  use_UserService_DeleteUser: InContextSdkMethod<Mutation['use_UserService_DeleteUser'], Mutationuse_UserService_DeleteUserArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["UserAuth"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
