// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, type ExecuteMeshFn, type SubscribeMeshFn, type MeshContext as BaseMeshContext, type MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { ImportFn } from '@graphql-mesh/types';
import type { TeamMemberTypes } from './sources/TeamMember/types';
import type { UserTypes } from './sources/User/types';
import type { AuthTypes } from './sources/Auth/types';
import type { InvitationTypes } from './sources/Invitation/types';
import type { PlayerStatsTypes } from './sources/PlayerStats/types';
import type { TeamTypes } from './sources/Team/types';
import type { MatchTeamTypes } from './sources/MatchTeam/types';
import type { MatchTypes } from './sources/Match/types';
import type { TournamentTeamTypes } from './sources/TournamentTeam/types';
import type { TournamentTypes } from './sources/Tournament/types';
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
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  user__GetAllUsersRequest_Input: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  TransportOptions: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Query = {
  auth_AuthService_GetGoogleAuthURL?: Maybe<auth__AuthURLResponse>;
  auth_AuthService_GetDiscordAuthURL?: Maybe<auth__AuthURLResponse>;
  auth_AuthService_connectivityState?: Maybe<ConnectivityState>;
  user_UserService_GetUser?: Maybe<user__UserResponse>;
  user_UserService_GetAllUsers?: Maybe<user__ListUsersResponse>;
  user_UserService_connectivityState?: Maybe<ConnectivityState>;
  team_InvitationService_GetInvitation?: Maybe<team__InvitationResponse>;
  team_InvitationService_GetTeamInvitations?: Maybe<team__ListInvitationsResponse>;
  team_InvitationService_GetUserInvitations?: Maybe<team__ListInvitationsResponse>;
  team_InvitationService_connectivityState?: Maybe<ConnectivityState>;
  team_TeamMemberService_GetMember?: Maybe<team__TeamMemberResponse>;
  team_TeamMemberService_GetTeamMembers?: Maybe<team__ListTeamMembersResponse>;
  team_TeamMemberService_connectivityState?: Maybe<ConnectivityState>;
  team_TeamService_GetTeam?: Maybe<team__TeamResponse>;
  team_TeamService_GetAllTeams?: Maybe<team__ListTeamsResponse>;
  team_TeamService_GetTeamsByOwner?: Maybe<team__ListTeamsResponse>;
  team_TeamService_connectivityState?: Maybe<ConnectivityState>;
  tournament_MatchTeamService_GetMatchTeam?: Maybe<tournament__MatchTeamResponse>;
  tournament_MatchTeamService_GetAllMatchTeams?: Maybe<tournament__MatchTeamListResponse>;
  tournament_MatchTeamService_connectivityState?: Maybe<ConnectivityState>;
  tournament_MatchService_GetMatch?: Maybe<tournament__MatchResponse>;
  tournament_MatchService_GetMatchesByTournament?: Maybe<tournament__MatchListResponse>;
  tournament_MatchService_connectivityState?: Maybe<ConnectivityState>;
  tournament_PlayerStatsService_GetPlayerStat?: Maybe<tournament__PlayerStatResponse>;
  tournament_PlayerStatsService_GetAllPlayerStats?: Maybe<tournament__PlayerStatListResponse>;
  tournament_PlayerStatsService_connectivityState?: Maybe<ConnectivityState>;
  tournament_TournamentTeamService_GetTournamentTeam?: Maybe<tournament__TournamentTeamResponse>;
  tournament_TournamentTeamService_GetAllTournamentTeam?: Maybe<tournament__TournamentTeamListResponse>;
  tournament_TournamentTeamService_connectivityState?: Maybe<ConnectivityState>;
  tournament_TournamentService_GetTournament?: Maybe<tournament__TournamentResponse>;
  tournament_TournamentService_GetAllTournaments?: Maybe<tournament__TournamentListResponse>;
  tournament_TournamentService_GetTournamentsByGame?: Maybe<tournament__TournamentListResponse>;
  tournament_TournamentService_connectivityState?: Maybe<ConnectivityState>;
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


export type Queryteam_InvitationService_GetInvitationArgs = {
  input?: InputMaybe<team__GetInvitationRequest_Input>;
};


export type Queryteam_InvitationService_GetTeamInvitationsArgs = {
  input?: InputMaybe<team__GetTeamInvitationsRequest_Input>;
};


export type Queryteam_InvitationService_GetUserInvitationsArgs = {
  input?: InputMaybe<team__GetUserInvitationsRequest_Input>;
};


export type Queryteam_InvitationService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Queryteam_TeamMemberService_GetMemberArgs = {
  input?: InputMaybe<team__GetMemberRequest_Input>;
};


export type Queryteam_TeamMemberService_GetTeamMembersArgs = {
  input?: InputMaybe<team__GetTeamMembersRequest_Input>;
};


export type Queryteam_TeamMemberService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Queryteam_TeamService_GetTeamArgs = {
  input?: InputMaybe<team__GetTeamRequest_Input>;
};


export type Queryteam_TeamService_GetAllTeamsArgs = {
  input?: InputMaybe<team__GetAllTeamsRequest_Input>;
};


export type Queryteam_TeamService_GetTeamsByOwnerArgs = {
  input?: InputMaybe<team__GetTeamsByOwnerRequest_Input>;
};


export type Queryteam_TeamService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querytournament_MatchTeamService_GetMatchTeamArgs = {
  input?: InputMaybe<tournament__GetMatchTeamRequest_Input>;
};


export type Querytournament_MatchTeamService_GetAllMatchTeamsArgs = {
  input?: InputMaybe<tournament__GetAllMatchTeamsRequest_Input>;
};


export type Querytournament_MatchTeamService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querytournament_MatchService_GetMatchArgs = {
  input?: InputMaybe<tournament__GetMatchRequest_Input>;
};


export type Querytournament_MatchService_GetMatchesByTournamentArgs = {
  input?: InputMaybe<tournament__GetMatchesByTournamentRequest_Input>;
};


export type Querytournament_MatchService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querytournament_PlayerStatsService_GetPlayerStatArgs = {
  input?: InputMaybe<tournament__GetPlayerStatRequest_Input>;
};


export type Querytournament_PlayerStatsService_GetAllPlayerStatsArgs = {
  input?: InputMaybe<tournament__GetAllPlayerStatsRequest_Input>;
};


export type Querytournament_PlayerStatsService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querytournament_TournamentTeamService_GetTournamentTeamArgs = {
  input?: InputMaybe<tournament__GetTournamentTeamRequest_Input>;
};


export type Querytournament_TournamentTeamService_GetAllTournamentTeamArgs = {
  input?: InputMaybe<tournament__GetAllTournamentTeamRequest_Input>;
};


export type Querytournament_TournamentTeamService_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Querytournament_TournamentService_GetTournamentArgs = {
  input?: InputMaybe<tournament__GetTournamentRequest_Input>;
};


export type Querytournament_TournamentService_GetAllTournamentsArgs = {
  input?: InputMaybe<tournament__GetAllTournamentsRequest_Input>;
};


export type Querytournament_TournamentService_GetTournamentsByGameArgs = {
  input?: InputMaybe<tournament__GetTournamentsByGameRequest_Input>;
};


export type Querytournament_TournamentService_connectivityStateArgs = {
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
  user_UserService_CheckEmailStatus?: Maybe<user__CheckEmailResponse>;
  team_InvitationService_CreateInvitation?: Maybe<team__InvitationResponse>;
  team_InvitationService_UpdateInvitationStatus?: Maybe<team__InvitationResponse>;
  team_TeamMemberService_AddMember?: Maybe<team__TeamMemberResponse>;
  team_TeamMemberService_UpdateMemberRole?: Maybe<team__TeamMemberResponse>;
  team_TeamMemberService_RemoveMember?: Maybe<team__RemoveMemberResponse>;
  team_TeamService_CreateTeam?: Maybe<team__TeamResponse>;
  team_TeamService_UpdateTeam?: Maybe<team__TeamResponse>;
  team_TeamService_DeleteTeam?: Maybe<team__DeleteTeamResponse>;
  tournament_MatchTeamService_CreateMatchTeam?: Maybe<tournament__MatchTeamResponse>;
  tournament_MatchTeamService_UpdateMatchTeam?: Maybe<tournament__MatchTeamResponse>;
  tournament_MatchTeamService_DeleteMatchTeam?: Maybe<tournament__DeleteMatchTeamResponse>;
  tournament_MatchService_CreateMatch?: Maybe<tournament__MatchResponse>;
  tournament_MatchService_UpdateMatch?: Maybe<tournament__MatchResponse>;
  tournament_PlayerStatsService_CreatePlayerStat?: Maybe<tournament__PlayerStatResponse>;
  tournament_PlayerStatsService_UpdatePlayerStat?: Maybe<tournament__PlayerStatResponse>;
  tournament_PlayerStatsService_DeletePlayerStat?: Maybe<tournament__DeletePlayerStatResponse>;
  tournament_TournamentTeamService_CreateTournamentTeam?: Maybe<tournament__TournamentTeamResponse>;
  tournament_TournamentTeamService_UpdateTournamentTeam?: Maybe<tournament__TournamentTeamResponse>;
  tournament_TournamentTeamService_DeleteTournamentTeam?: Maybe<tournament__DeleteTournamentTeamResponse>;
  tournament_TournamentService_CreateTournament?: Maybe<tournament__TournamentResponse>;
  tournament_TournamentService_UpdateTournament?: Maybe<tournament__TournamentResponse>;
  tournament_TournamentService_DeleteTournament?: Maybe<tournament__DeleteResponse>;
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


export type Mutationuser_UserService_CheckEmailStatusArgs = {
  input?: InputMaybe<user__CheckEmailRequest_Input>;
};


export type Mutationteam_InvitationService_CreateInvitationArgs = {
  input?: InputMaybe<team__CreateInvitationRequest_Input>;
};


export type Mutationteam_InvitationService_UpdateInvitationStatusArgs = {
  input?: InputMaybe<team__UpdateInvitationStatusRequest_Input>;
};


export type Mutationteam_TeamMemberService_AddMemberArgs = {
  input?: InputMaybe<team__AddMemberRequest_Input>;
};


export type Mutationteam_TeamMemberService_UpdateMemberRoleArgs = {
  input?: InputMaybe<team__UpdateMemberRoleRequest_Input>;
};


export type Mutationteam_TeamMemberService_RemoveMemberArgs = {
  input?: InputMaybe<team__RemoveMemberRequest_Input>;
};


export type Mutationteam_TeamService_CreateTeamArgs = {
  input?: InputMaybe<team__CreateTeamRequest_Input>;
};


export type Mutationteam_TeamService_UpdateTeamArgs = {
  input?: InputMaybe<team__UpdateTeamRequest_Input>;
};


export type Mutationteam_TeamService_DeleteTeamArgs = {
  input?: InputMaybe<team__DeleteTeamRequest_Input>;
};


export type Mutationtournament_MatchTeamService_CreateMatchTeamArgs = {
  input?: InputMaybe<tournament__CreateMatchTeamRequest_Input>;
};


export type Mutationtournament_MatchTeamService_UpdateMatchTeamArgs = {
  input?: InputMaybe<tournament__UpdateMatchTeamRequest_Input>;
};


export type Mutationtournament_MatchTeamService_DeleteMatchTeamArgs = {
  input?: InputMaybe<tournament__DeleteMatchTeamRequest_Input>;
};


export type Mutationtournament_MatchService_CreateMatchArgs = {
  input?: InputMaybe<tournament__CreateMatchRequest_Input>;
};


export type Mutationtournament_MatchService_UpdateMatchArgs = {
  input?: InputMaybe<tournament__UpdateMatchRequest_Input>;
};


export type Mutationtournament_PlayerStatsService_CreatePlayerStatArgs = {
  input?: InputMaybe<tournament__CreatePlayerStatRequest_Input>;
};


export type Mutationtournament_PlayerStatsService_UpdatePlayerStatArgs = {
  input?: InputMaybe<tournament__UpdatePlayerStatRequest_Input>;
};


export type Mutationtournament_PlayerStatsService_DeletePlayerStatArgs = {
  input?: InputMaybe<tournament__DeletePlayerStatRequest_Input>;
};


export type Mutationtournament_TournamentTeamService_CreateTournamentTeamArgs = {
  input?: InputMaybe<tournament__CreateTournamentTeamRequest_Input>;
};


export type Mutationtournament_TournamentTeamService_UpdateTournamentTeamArgs = {
  input?: InputMaybe<tournament__UpdateTournamentTeamRequest_Input>;
};


export type Mutationtournament_TournamentTeamService_DeleteTournamentTeamArgs = {
  input?: InputMaybe<tournament__DeleteTournamentTeamRequest_Input>;
};


export type Mutationtournament_TournamentService_CreateTournamentArgs = {
  input?: InputMaybe<tournament__CreateTournamentRequest_Input>;
};


export type Mutationtournament_TournamentService_UpdateTournamentArgs = {
  input?: InputMaybe<tournament__UpdateTournamentRequest_Input>;
};


export type Mutationtournament_TournamentService_DeleteTournamentArgs = {
  input?: InputMaybe<tournament__DeleteTournamentRequest_Input>;
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

export type user__CheckEmailResponse = {
  available?: Maybe<Scalars['Boolean']['output']>;
  has_password?: Maybe<Scalars['Boolean']['output']>;
  auth_provider?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  can_complete?: Maybe<Scalars['Boolean']['output']>;
};

export type user__CheckEmailRequest_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type team__InvitationResponse = {
  invitation?: Maybe<team__Invitation>;
  message?: Maybe<Scalars['String']['output']>;
};

export type team__Invitation = {
  invitation_id?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['String']['output']>;
  user_invited_id?: Maybe<Scalars['String']['output']>;
  user_invited_by_id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
};

export type team__GetInvitationRequest_Input = {
  invitation_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__ListInvitationsResponse = {
  invitations?: Maybe<Array<Maybe<team__Invitation>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type team__GetTeamInvitationsRequest_Input = {
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__GetUserInvitationsRequest_Input = {
  user_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__CreateInvitationRequest_Input = {
  team_id?: InputMaybe<Scalars['String']['input']>;
  user_invited_id?: InputMaybe<Scalars['String']['input']>;
  user_invited_by_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__UpdateInvitationStatusRequest_Input = {
  invitation_id?: InputMaybe<Scalars['String']['input']>;
  /** "accepted", "rejected", "cancelled" */
  status?: InputMaybe<Scalars['String']['input']>;
};

export type team__TeamMemberResponse = {
  member?: Maybe<team__TeamMember>;
  message?: Maybe<Scalars['String']['output']>;
};

export type team__TeamMember = {
  team_member_id?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  joined_at?: Maybe<Scalars['String']['output']>;
};

export type team__GetMemberRequest_Input = {
  team_member_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__ListTeamMembersResponse = {
  members?: Maybe<Array<Maybe<team__TeamMember>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type team__GetTeamMembersRequest_Input = {
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__AddMemberRequest_Input = {
  team_id?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type team__UpdateMemberRoleRequest_Input = {
  team_member_id?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type team__RemoveMemberResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type team__RemoveMemberRequest_Input = {
  team_member_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__TeamResponse = {
  team?: Maybe<team__Team>;
  message?: Maybe<Scalars['String']['output']>;
};

export type team__Team = {
  team_id?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['String']['output']>;
  game_id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  logo_url?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type team__GetTeamRequest_Input = {
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__ListTeamsResponse = {
  teams?: Maybe<Array<Maybe<team__Team>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type team__GetAllTeamsRequest_Input = {
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
};

export type team__GetTeamsByOwnerRequest_Input = {
  owner_id?: InputMaybe<Scalars['String']['input']>;
};

export type team__CreateTeamRequest_Input = {
  owner_id?: InputMaybe<Scalars['String']['input']>;
  game_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  logo_url?: InputMaybe<Scalars['String']['input']>;
};

export type team__UpdateTeamRequest_Input = {
  team_id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  logo_url?: InputMaybe<Scalars['String']['input']>;
};

export type team__DeleteTeamResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type team__DeleteTeamRequest_Input = {
  team_id?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__MatchTeamResponse = {
  match_team?: Maybe<tournament__MatchTeam>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__MatchTeam = {
  id_match_team?: Maybe<Scalars['String']['output']>;
  id_tournament_team?: Maybe<Scalars['String']['output']>;
  id_match?: Maybe<Scalars['String']['output']>;
  team_side?: Maybe<Scalars['String']['output']>;
  final_score?: Maybe<Scalars['Int']['output']>;
  placement?: Maybe<Scalars['Int']['output']>;
  points_earned?: Maybe<Scalars['Float']['output']>;
  results?: Maybe<Scalars['String']['output']>;
  stats?: Maybe<google__protobuf__Struct>;
  created_at?: Maybe<google__protobuf__Timestamp>;
};

export type google__protobuf__Struct = {
  fields?: Maybe<Scalars['JSON']['output']>;
};

export type google__protobuf__Timestamp = {
  seconds?: Maybe<Scalars['BigInt']['output']>;
  nanos?: Maybe<Scalars['Int']['output']>;
};

export type tournament__GetMatchTeamRequest_Input = {
  id_match_team?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__MatchTeamListResponse = {
  match_teams?: Maybe<Array<Maybe<tournament__MatchTeam>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type tournament__GetAllMatchTeamsRequest_Input = {
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  /** filtro opcional */
  id_match?: InputMaybe<Scalars['String']['input']>;
  /** filtro opcional */
  id_tournament_team?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__CreateMatchTeamRequest_Input = {
  id_tournament_team?: InputMaybe<Scalars['String']['input']>;
  id_match?: InputMaybe<Scalars['String']['input']>;
  team_side?: InputMaybe<Scalars['String']['input']>;
  final_score?: InputMaybe<Scalars['Int']['input']>;
  placement?: InputMaybe<Scalars['Int']['input']>;
  points_earned?: InputMaybe<Scalars['Float']['input']>;
  results?: InputMaybe<Scalars['String']['input']>;
  stats?: InputMaybe<google__protobuf__Struct_Input>;
};

export type google__protobuf__Struct_Input = {
  fields?: InputMaybe<Scalars['JSON']['input']>;
};

export type tournament__UpdateMatchTeamRequest_Input = {
  id_match_team?: InputMaybe<Scalars['String']['input']>;
  team_side?: InputMaybe<Scalars['String']['input']>;
  final_score?: InputMaybe<Scalars['Int']['input']>;
  placement?: InputMaybe<Scalars['Int']['input']>;
  points_earned?: InputMaybe<Scalars['Float']['input']>;
  results?: InputMaybe<Scalars['String']['input']>;
  stats?: InputMaybe<google__protobuf__Struct_Input>;
};

export type tournament__DeleteMatchTeamResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__DeleteMatchTeamRequest_Input = {
  id_match_team?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__MatchResponse = {
  match?: Maybe<tournament__Match>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__Match = {
  id_match?: Maybe<Scalars['String']['output']>;
  id_tournament?: Maybe<Scalars['String']['output']>;
  map_name?: Maybe<Scalars['String']['output']>;
  round_number?: Maybe<Scalars['Int']['output']>;
  match_number?: Maybe<Scalars['Int']['output']>;
  match_type?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  match_format?: Maybe<Scalars['String']['output']>;
  scheduled_time?: Maybe<Scalars['String']['output']>;
  start_time?: Maybe<Scalars['String']['output']>;
  end_time?: Maybe<Scalars['String']['output']>;
  winner_team_id?: Maybe<Scalars['String']['output']>;
  total_teams?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
};

export type tournament__GetMatchRequest_Input = {
  id_match?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__MatchListResponse = {
  matches?: Maybe<Array<Maybe<tournament__Match>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type tournament__GetMatchesByTournamentRequest_Input = {
  id_tournament?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__CreateMatchRequest_Input = {
  id_tournament?: InputMaybe<Scalars['String']['input']>;
  map_name?: InputMaybe<Scalars['String']['input']>;
  round_number?: InputMaybe<Scalars['Int']['input']>;
  match_number?: InputMaybe<Scalars['Int']['input']>;
  match_type?: InputMaybe<Scalars['String']['input']>;
  match_format?: InputMaybe<Scalars['String']['input']>;
  scheduled_time?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__UpdateMatchRequest_Input = {
  id_match?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  start_time?: InputMaybe<Scalars['String']['input']>;
  end_time?: InputMaybe<Scalars['String']['input']>;
  winner_team_id?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__PlayerStatResponse = {
  player_stat?: Maybe<tournament__PlayerStat>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__PlayerStat = {
  id_player_stat?: Maybe<Scalars['String']['output']>;
  id_match?: Maybe<Scalars['String']['output']>;
  id_match_team?: Maybe<Scalars['String']['output']>;
  id_team?: Maybe<Scalars['String']['output']>;
  id_user?: Maybe<Scalars['String']['output']>;
  kills?: Maybe<Scalars['Int']['output']>;
  deaths?: Maybe<Scalars['Int']['output']>;
  assists?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Int']['output']>;
  stats?: Maybe<google__protobuf__Struct>;
  created_at?: Maybe<google__protobuf__Timestamp>;
};

export type tournament__GetPlayerStatRequest_Input = {
  id_player_stat?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__PlayerStatListResponse = {
  player_stats?: Maybe<Array<Maybe<tournament__PlayerStat>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type tournament__GetAllPlayerStatsRequest_Input = {
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  /** filtro opcional */
  id_match?: InputMaybe<Scalars['String']['input']>;
  /** filtro opcional */
  id_user?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__CreatePlayerStatRequest_Input = {
  id_match?: InputMaybe<Scalars['String']['input']>;
  id_match_team?: InputMaybe<Scalars['String']['input']>;
  id_team?: InputMaybe<Scalars['String']['input']>;
  id_user?: InputMaybe<Scalars['String']['input']>;
  kills?: InputMaybe<Scalars['Int']['input']>;
  deaths?: InputMaybe<Scalars['Int']['input']>;
  assists?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  stats?: InputMaybe<google__protobuf__Struct_Input>;
};

export type tournament__UpdatePlayerStatRequest_Input = {
  id_player_stat?: InputMaybe<Scalars['String']['input']>;
  kills?: InputMaybe<Scalars['Int']['input']>;
  deaths?: InputMaybe<Scalars['Int']['input']>;
  assists?: InputMaybe<Scalars['Int']['input']>;
  score?: InputMaybe<Scalars['Int']['input']>;
  stats?: InputMaybe<google__protobuf__Struct_Input>;
};

export type tournament__DeletePlayerStatResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__DeletePlayerStatRequest_Input = {
  id_player_stat?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__TournamentTeamResponse = {
  tournament_team?: Maybe<tournament__TournamentTeam>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__TournamentTeam = {
  id_tournament_team?: Maybe<Scalars['String']['output']>;
  id_tournament?: Maybe<Scalars['String']['output']>;
  id_team?: Maybe<Scalars['String']['output']>;
  total_points?: Maybe<Scalars['Float']['output']>;
  wins?: Maybe<Scalars['Int']['output']>;
  loses?: Maybe<Scalars['Int']['output']>;
  draws?: Maybe<Scalars['Int']['output']>;
  total_kills?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type tournament__GetTournamentTeamRequest_Input = {
  id_tournament_team?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__TournamentTeamListResponse = {
  tournament_teams?: Maybe<Array<Maybe<tournament__TournamentTeam>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type tournament__GetAllTournamentTeamRequest_Input = {
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
  /** filtro opcional */
  id_tournament?: InputMaybe<Scalars['String']['input']>;
  /** filtro opcional */
  id_team?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__CreateTournamentTeamRequest_Input = {
  id_tournament?: InputMaybe<Scalars['String']['input']>;
  id_team?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__UpdateTournamentTeamRequest_Input = {
  id_tournament_team?: InputMaybe<Scalars['String']['input']>;
  total_points?: InputMaybe<Scalars['Float']['input']>;
  wins?: InputMaybe<Scalars['Int']['input']>;
  loses?: InputMaybe<Scalars['Int']['input']>;
  draws?: InputMaybe<Scalars['Int']['input']>;
  total_kills?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__DeleteTournamentTeamResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__DeleteTournamentTeamRequest_Input = {
  id_tournament_team?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__TournamentResponse = {
  tournament?: Maybe<tournament__Tournament>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__Tournament = {
  id_tournament?: Maybe<Scalars['String']['output']>;
  id_game?: Maybe<Scalars['String']['output']>;
  id_created_by?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  banner_url?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  started_date?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['String']['output']>;
  registration_deadline?: Maybe<Scalars['String']['output']>;
  max_teams?: Maybe<Scalars['Int']['output']>;
  min_teams?: Maybe<Scalars['Int']['output']>;
  team_size?: Maybe<Scalars['Int']['output']>;
  rules?: Maybe<Scalars['String']['output']>;
  scoring_schema?: Maybe<Scalars['String']['output']>;
  prize_pool?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
};

export type tournament__GetTournamentRequest_Input = {
  id_tournament?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__TournamentListResponse = {
  tournaments?: Maybe<Array<Maybe<tournament__Tournament>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type tournament__GetAllTournamentsRequest_Input = {
  page?: InputMaybe<Scalars['Int']['input']>;
  page_size?: InputMaybe<Scalars['Int']['input']>;
};

export type tournament__GetTournamentsByGameRequest_Input = {
  id_game?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__CreateTournamentRequest_Input = {
  id_game?: InputMaybe<Scalars['String']['input']>;
  id_created_by?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  banner_url?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  started_date?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['String']['input']>;
  registration_deadline?: InputMaybe<Scalars['String']['input']>;
  max_teams?: InputMaybe<Scalars['Int']['input']>;
  min_teams?: InputMaybe<Scalars['Int']['input']>;
  team_size?: InputMaybe<Scalars['Int']['input']>;
  rules?: InputMaybe<Scalars['String']['input']>;
  scoring_schema?: InputMaybe<Scalars['String']['input']>;
  prize_pool?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__UpdateTournamentRequest_Input = {
  id_tournament?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  banner_url?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type tournament__DeleteResponse = {
  success?: Maybe<Scalars['Boolean']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type tournament__DeleteTournamentRequest_Input = {
  id_tournament?: InputMaybe<Scalars['String']['input']>;
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
  user__CheckEmailResponse: ResolverTypeWrapper<user__CheckEmailResponse>;
  user__CheckEmailRequest_Input: user__CheckEmailRequest_Input;
  TransportOptions: ResolverTypeWrapper<Scalars['TransportOptions']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  team__InvitationResponse: ResolverTypeWrapper<team__InvitationResponse>;
  team__Invitation: ResolverTypeWrapper<team__Invitation>;
  team__GetInvitationRequest_Input: team__GetInvitationRequest_Input;
  team__ListInvitationsResponse: ResolverTypeWrapper<team__ListInvitationsResponse>;
  team__GetTeamInvitationsRequest_Input: team__GetTeamInvitationsRequest_Input;
  team__GetUserInvitationsRequest_Input: team__GetUserInvitationsRequest_Input;
  team__CreateInvitationRequest_Input: team__CreateInvitationRequest_Input;
  team__UpdateInvitationStatusRequest_Input: team__UpdateInvitationStatusRequest_Input;
  team__TeamMemberResponse: ResolverTypeWrapper<team__TeamMemberResponse>;
  team__TeamMember: ResolverTypeWrapper<team__TeamMember>;
  team__GetMemberRequest_Input: team__GetMemberRequest_Input;
  team__ListTeamMembersResponse: ResolverTypeWrapper<team__ListTeamMembersResponse>;
  team__GetTeamMembersRequest_Input: team__GetTeamMembersRequest_Input;
  team__AddMemberRequest_Input: team__AddMemberRequest_Input;
  team__UpdateMemberRoleRequest_Input: team__UpdateMemberRoleRequest_Input;
  team__RemoveMemberResponse: ResolverTypeWrapper<team__RemoveMemberResponse>;
  team__RemoveMemberRequest_Input: team__RemoveMemberRequest_Input;
  team__TeamResponse: ResolverTypeWrapper<team__TeamResponse>;
  team__Team: ResolverTypeWrapper<team__Team>;
  team__GetTeamRequest_Input: team__GetTeamRequest_Input;
  team__ListTeamsResponse: ResolverTypeWrapper<team__ListTeamsResponse>;
  team__GetAllTeamsRequest_Input: team__GetAllTeamsRequest_Input;
  team__GetTeamsByOwnerRequest_Input: team__GetTeamsByOwnerRequest_Input;
  team__CreateTeamRequest_Input: team__CreateTeamRequest_Input;
  team__UpdateTeamRequest_Input: team__UpdateTeamRequest_Input;
  team__DeleteTeamResponse: ResolverTypeWrapper<team__DeleteTeamResponse>;
  team__DeleteTeamRequest_Input: team__DeleteTeamRequest_Input;
  tournament__MatchTeamResponse: ResolverTypeWrapper<tournament__MatchTeamResponse>;
  tournament__MatchTeam: ResolverTypeWrapper<tournament__MatchTeam>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  google__protobuf__Struct: ResolverTypeWrapper<google__protobuf__Struct>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  google__protobuf__Timestamp: ResolverTypeWrapper<google__protobuf__Timestamp>;
  tournament__GetMatchTeamRequest_Input: tournament__GetMatchTeamRequest_Input;
  tournament__MatchTeamListResponse: ResolverTypeWrapper<tournament__MatchTeamListResponse>;
  tournament__GetAllMatchTeamsRequest_Input: tournament__GetAllMatchTeamsRequest_Input;
  tournament__CreateMatchTeamRequest_Input: tournament__CreateMatchTeamRequest_Input;
  google__protobuf__Struct_Input: google__protobuf__Struct_Input;
  tournament__UpdateMatchTeamRequest_Input: tournament__UpdateMatchTeamRequest_Input;
  tournament__DeleteMatchTeamResponse: ResolverTypeWrapper<tournament__DeleteMatchTeamResponse>;
  tournament__DeleteMatchTeamRequest_Input: tournament__DeleteMatchTeamRequest_Input;
  tournament__MatchResponse: ResolverTypeWrapper<tournament__MatchResponse>;
  tournament__Match: ResolverTypeWrapper<tournament__Match>;
  tournament__GetMatchRequest_Input: tournament__GetMatchRequest_Input;
  tournament__MatchListResponse: ResolverTypeWrapper<tournament__MatchListResponse>;
  tournament__GetMatchesByTournamentRequest_Input: tournament__GetMatchesByTournamentRequest_Input;
  tournament__CreateMatchRequest_Input: tournament__CreateMatchRequest_Input;
  tournament__UpdateMatchRequest_Input: tournament__UpdateMatchRequest_Input;
  tournament__PlayerStatResponse: ResolverTypeWrapper<tournament__PlayerStatResponse>;
  tournament__PlayerStat: ResolverTypeWrapper<tournament__PlayerStat>;
  tournament__GetPlayerStatRequest_Input: tournament__GetPlayerStatRequest_Input;
  tournament__PlayerStatListResponse: ResolverTypeWrapper<tournament__PlayerStatListResponse>;
  tournament__GetAllPlayerStatsRequest_Input: tournament__GetAllPlayerStatsRequest_Input;
  tournament__CreatePlayerStatRequest_Input: tournament__CreatePlayerStatRequest_Input;
  tournament__UpdatePlayerStatRequest_Input: tournament__UpdatePlayerStatRequest_Input;
  tournament__DeletePlayerStatResponse: ResolverTypeWrapper<tournament__DeletePlayerStatResponse>;
  tournament__DeletePlayerStatRequest_Input: tournament__DeletePlayerStatRequest_Input;
  tournament__TournamentTeamResponse: ResolverTypeWrapper<tournament__TournamentTeamResponse>;
  tournament__TournamentTeam: ResolverTypeWrapper<tournament__TournamentTeam>;
  tournament__GetTournamentTeamRequest_Input: tournament__GetTournamentTeamRequest_Input;
  tournament__TournamentTeamListResponse: ResolverTypeWrapper<tournament__TournamentTeamListResponse>;
  tournament__GetAllTournamentTeamRequest_Input: tournament__GetAllTournamentTeamRequest_Input;
  tournament__CreateTournamentTeamRequest_Input: tournament__CreateTournamentTeamRequest_Input;
  tournament__UpdateTournamentTeamRequest_Input: tournament__UpdateTournamentTeamRequest_Input;
  tournament__DeleteTournamentTeamResponse: ResolverTypeWrapper<tournament__DeleteTournamentTeamResponse>;
  tournament__DeleteTournamentTeamRequest_Input: tournament__DeleteTournamentTeamRequest_Input;
  tournament__TournamentResponse: ResolverTypeWrapper<tournament__TournamentResponse>;
  tournament__Tournament: ResolverTypeWrapper<tournament__Tournament>;
  tournament__GetTournamentRequest_Input: tournament__GetTournamentRequest_Input;
  tournament__TournamentListResponse: ResolverTypeWrapper<tournament__TournamentListResponse>;
  tournament__GetAllTournamentsRequest_Input: tournament__GetAllTournamentsRequest_Input;
  tournament__GetTournamentsByGameRequest_Input: tournament__GetTournamentsByGameRequest_Input;
  tournament__CreateTournamentRequest_Input: tournament__CreateTournamentRequest_Input;
  tournament__UpdateTournamentRequest_Input: tournament__UpdateTournamentRequest_Input;
  tournament__DeleteResponse: ResolverTypeWrapper<tournament__DeleteResponse>;
  tournament__DeleteTournamentRequest_Input: tournament__DeleteTournamentRequest_Input;
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
  user__CheckEmailResponse: user__CheckEmailResponse;
  user__CheckEmailRequest_Input: user__CheckEmailRequest_Input;
  TransportOptions: Scalars['TransportOptions']['output'];
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  team__InvitationResponse: team__InvitationResponse;
  team__Invitation: team__Invitation;
  team__GetInvitationRequest_Input: team__GetInvitationRequest_Input;
  team__ListInvitationsResponse: team__ListInvitationsResponse;
  team__GetTeamInvitationsRequest_Input: team__GetTeamInvitationsRequest_Input;
  team__GetUserInvitationsRequest_Input: team__GetUserInvitationsRequest_Input;
  team__CreateInvitationRequest_Input: team__CreateInvitationRequest_Input;
  team__UpdateInvitationStatusRequest_Input: team__UpdateInvitationStatusRequest_Input;
  team__TeamMemberResponse: team__TeamMemberResponse;
  team__TeamMember: team__TeamMember;
  team__GetMemberRequest_Input: team__GetMemberRequest_Input;
  team__ListTeamMembersResponse: team__ListTeamMembersResponse;
  team__GetTeamMembersRequest_Input: team__GetTeamMembersRequest_Input;
  team__AddMemberRequest_Input: team__AddMemberRequest_Input;
  team__UpdateMemberRoleRequest_Input: team__UpdateMemberRoleRequest_Input;
  team__RemoveMemberResponse: team__RemoveMemberResponse;
  team__RemoveMemberRequest_Input: team__RemoveMemberRequest_Input;
  team__TeamResponse: team__TeamResponse;
  team__Team: team__Team;
  team__GetTeamRequest_Input: team__GetTeamRequest_Input;
  team__ListTeamsResponse: team__ListTeamsResponse;
  team__GetAllTeamsRequest_Input: team__GetAllTeamsRequest_Input;
  team__GetTeamsByOwnerRequest_Input: team__GetTeamsByOwnerRequest_Input;
  team__CreateTeamRequest_Input: team__CreateTeamRequest_Input;
  team__UpdateTeamRequest_Input: team__UpdateTeamRequest_Input;
  team__DeleteTeamResponse: team__DeleteTeamResponse;
  team__DeleteTeamRequest_Input: team__DeleteTeamRequest_Input;
  tournament__MatchTeamResponse: tournament__MatchTeamResponse;
  tournament__MatchTeam: tournament__MatchTeam;
  Float: Scalars['Float']['output'];
  google__protobuf__Struct: google__protobuf__Struct;
  JSON: Scalars['JSON']['output'];
  google__protobuf__Timestamp: google__protobuf__Timestamp;
  tournament__GetMatchTeamRequest_Input: tournament__GetMatchTeamRequest_Input;
  tournament__MatchTeamListResponse: tournament__MatchTeamListResponse;
  tournament__GetAllMatchTeamsRequest_Input: tournament__GetAllMatchTeamsRequest_Input;
  tournament__CreateMatchTeamRequest_Input: tournament__CreateMatchTeamRequest_Input;
  google__protobuf__Struct_Input: google__protobuf__Struct_Input;
  tournament__UpdateMatchTeamRequest_Input: tournament__UpdateMatchTeamRequest_Input;
  tournament__DeleteMatchTeamResponse: tournament__DeleteMatchTeamResponse;
  tournament__DeleteMatchTeamRequest_Input: tournament__DeleteMatchTeamRequest_Input;
  tournament__MatchResponse: tournament__MatchResponse;
  tournament__Match: tournament__Match;
  tournament__GetMatchRequest_Input: tournament__GetMatchRequest_Input;
  tournament__MatchListResponse: tournament__MatchListResponse;
  tournament__GetMatchesByTournamentRequest_Input: tournament__GetMatchesByTournamentRequest_Input;
  tournament__CreateMatchRequest_Input: tournament__CreateMatchRequest_Input;
  tournament__UpdateMatchRequest_Input: tournament__UpdateMatchRequest_Input;
  tournament__PlayerStatResponse: tournament__PlayerStatResponse;
  tournament__PlayerStat: tournament__PlayerStat;
  tournament__GetPlayerStatRequest_Input: tournament__GetPlayerStatRequest_Input;
  tournament__PlayerStatListResponse: tournament__PlayerStatListResponse;
  tournament__GetAllPlayerStatsRequest_Input: tournament__GetAllPlayerStatsRequest_Input;
  tournament__CreatePlayerStatRequest_Input: tournament__CreatePlayerStatRequest_Input;
  tournament__UpdatePlayerStatRequest_Input: tournament__UpdatePlayerStatRequest_Input;
  tournament__DeletePlayerStatResponse: tournament__DeletePlayerStatResponse;
  tournament__DeletePlayerStatRequest_Input: tournament__DeletePlayerStatRequest_Input;
  tournament__TournamentTeamResponse: tournament__TournamentTeamResponse;
  tournament__TournamentTeam: tournament__TournamentTeam;
  tournament__GetTournamentTeamRequest_Input: tournament__GetTournamentTeamRequest_Input;
  tournament__TournamentTeamListResponse: tournament__TournamentTeamListResponse;
  tournament__GetAllTournamentTeamRequest_Input: tournament__GetAllTournamentTeamRequest_Input;
  tournament__CreateTournamentTeamRequest_Input: tournament__CreateTournamentTeamRequest_Input;
  tournament__UpdateTournamentTeamRequest_Input: tournament__UpdateTournamentTeamRequest_Input;
  tournament__DeleteTournamentTeamResponse: tournament__DeleteTournamentTeamResponse;
  tournament__DeleteTournamentTeamRequest_Input: tournament__DeleteTournamentTeamRequest_Input;
  tournament__TournamentResponse: tournament__TournamentResponse;
  tournament__Tournament: tournament__Tournament;
  tournament__GetTournamentRequest_Input: tournament__GetTournamentRequest_Input;
  tournament__TournamentListResponse: tournament__TournamentListResponse;
  tournament__GetAllTournamentsRequest_Input: tournament__GetAllTournamentsRequest_Input;
  tournament__GetTournamentsByGameRequest_Input: tournament__GetTournamentsByGameRequest_Input;
  tournament__CreateTournamentRequest_Input: tournament__CreateTournamentRequest_Input;
  tournament__UpdateTournamentRequest_Input: tournament__UpdateTournamentRequest_Input;
  tournament__DeleteResponse: tournament__DeleteResponse;
  tournament__DeleteTournamentRequest_Input: tournament__DeleteTournamentRequest_Input;
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

export type enumDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  auth_AuthService_GetGoogleAuthURL?: Resolver<Maybe<ResolversTypes['auth__AuthURLResponse']>, ParentType, ContextType, Partial<Queryauth_AuthService_GetGoogleAuthURLArgs>>;
  auth_AuthService_GetDiscordAuthURL?: Resolver<Maybe<ResolversTypes['auth__AuthURLResponse']>, ParentType, ContextType, Partial<Queryauth_AuthService_GetDiscordAuthURLArgs>>;
  auth_AuthService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryauth_AuthService_connectivityStateArgs>>;
  user_UserService_GetUser?: Resolver<Maybe<ResolversTypes['user__UserResponse']>, ParentType, ContextType, Partial<Queryuser_UserService_GetUserArgs>>;
  user_UserService_GetAllUsers?: Resolver<Maybe<ResolversTypes['user__ListUsersResponse']>, ParentType, ContextType, Partial<Queryuser_UserService_GetAllUsersArgs>>;
  user_UserService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryuser_UserService_connectivityStateArgs>>;
  team_InvitationService_GetInvitation?: Resolver<Maybe<ResolversTypes['team__InvitationResponse']>, ParentType, ContextType, Partial<Queryteam_InvitationService_GetInvitationArgs>>;
  team_InvitationService_GetTeamInvitations?: Resolver<Maybe<ResolversTypes['team__ListInvitationsResponse']>, ParentType, ContextType, Partial<Queryteam_InvitationService_GetTeamInvitationsArgs>>;
  team_InvitationService_GetUserInvitations?: Resolver<Maybe<ResolversTypes['team__ListInvitationsResponse']>, ParentType, ContextType, Partial<Queryteam_InvitationService_GetUserInvitationsArgs>>;
  team_InvitationService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryteam_InvitationService_connectivityStateArgs>>;
  team_TeamMemberService_GetMember?: Resolver<Maybe<ResolversTypes['team__TeamMemberResponse']>, ParentType, ContextType, Partial<Queryteam_TeamMemberService_GetMemberArgs>>;
  team_TeamMemberService_GetTeamMembers?: Resolver<Maybe<ResolversTypes['team__ListTeamMembersResponse']>, ParentType, ContextType, Partial<Queryteam_TeamMemberService_GetTeamMembersArgs>>;
  team_TeamMemberService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryteam_TeamMemberService_connectivityStateArgs>>;
  team_TeamService_GetTeam?: Resolver<Maybe<ResolversTypes['team__TeamResponse']>, ParentType, ContextType, Partial<Queryteam_TeamService_GetTeamArgs>>;
  team_TeamService_GetAllTeams?: Resolver<Maybe<ResolversTypes['team__ListTeamsResponse']>, ParentType, ContextType, Partial<Queryteam_TeamService_GetAllTeamsArgs>>;
  team_TeamService_GetTeamsByOwner?: Resolver<Maybe<ResolversTypes['team__ListTeamsResponse']>, ParentType, ContextType, Partial<Queryteam_TeamService_GetTeamsByOwnerArgs>>;
  team_TeamService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Queryteam_TeamService_connectivityStateArgs>>;
  tournament_MatchTeamService_GetMatchTeam?: Resolver<Maybe<ResolversTypes['tournament__MatchTeamResponse']>, ParentType, ContextType, Partial<Querytournament_MatchTeamService_GetMatchTeamArgs>>;
  tournament_MatchTeamService_GetAllMatchTeams?: Resolver<Maybe<ResolversTypes['tournament__MatchTeamListResponse']>, ParentType, ContextType, Partial<Querytournament_MatchTeamService_GetAllMatchTeamsArgs>>;
  tournament_MatchTeamService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querytournament_MatchTeamService_connectivityStateArgs>>;
  tournament_MatchService_GetMatch?: Resolver<Maybe<ResolversTypes['tournament__MatchResponse']>, ParentType, ContextType, Partial<Querytournament_MatchService_GetMatchArgs>>;
  tournament_MatchService_GetMatchesByTournament?: Resolver<Maybe<ResolversTypes['tournament__MatchListResponse']>, ParentType, ContextType, Partial<Querytournament_MatchService_GetMatchesByTournamentArgs>>;
  tournament_MatchService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querytournament_MatchService_connectivityStateArgs>>;
  tournament_PlayerStatsService_GetPlayerStat?: Resolver<Maybe<ResolversTypes['tournament__PlayerStatResponse']>, ParentType, ContextType, Partial<Querytournament_PlayerStatsService_GetPlayerStatArgs>>;
  tournament_PlayerStatsService_GetAllPlayerStats?: Resolver<Maybe<ResolversTypes['tournament__PlayerStatListResponse']>, ParentType, ContextType, Partial<Querytournament_PlayerStatsService_GetAllPlayerStatsArgs>>;
  tournament_PlayerStatsService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querytournament_PlayerStatsService_connectivityStateArgs>>;
  tournament_TournamentTeamService_GetTournamentTeam?: Resolver<Maybe<ResolversTypes['tournament__TournamentTeamResponse']>, ParentType, ContextType, Partial<Querytournament_TournamentTeamService_GetTournamentTeamArgs>>;
  tournament_TournamentTeamService_GetAllTournamentTeam?: Resolver<Maybe<ResolversTypes['tournament__TournamentTeamListResponse']>, ParentType, ContextType, Partial<Querytournament_TournamentTeamService_GetAllTournamentTeamArgs>>;
  tournament_TournamentTeamService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querytournament_TournamentTeamService_connectivityStateArgs>>;
  tournament_TournamentService_GetTournament?: Resolver<Maybe<ResolversTypes['tournament__TournamentResponse']>, ParentType, ContextType, Partial<Querytournament_TournamentService_GetTournamentArgs>>;
  tournament_TournamentService_GetAllTournaments?: Resolver<Maybe<ResolversTypes['tournament__TournamentListResponse']>, ParentType, ContextType, Partial<Querytournament_TournamentService_GetAllTournamentsArgs>>;
  tournament_TournamentService_GetTournamentsByGame?: Resolver<Maybe<ResolversTypes['tournament__TournamentListResponse']>, ParentType, ContextType, Partial<Querytournament_TournamentService_GetTournamentsByGameArgs>>;
  tournament_TournamentService_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<Querytournament_TournamentService_connectivityStateArgs>>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  auth_AuthService_GoogleCallback?: Resolver<Maybe<ResolversTypes['auth__AuthResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_GoogleCallbackArgs>>;
  auth_AuthService_DiscordCallback?: Resolver<Maybe<ResolversTypes['auth__AuthResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_DiscordCallbackArgs>>;
  auth_AuthService_Login?: Resolver<Maybe<ResolversTypes['auth__AuthResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_LoginArgs>>;
  auth_AuthService_ValidateToken?: Resolver<Maybe<ResolversTypes['auth__ValidateTokenResponse']>, ParentType, ContextType, Partial<Mutationauth_AuthService_ValidateTokenArgs>>;
  user_UserService_CreateUser?: Resolver<Maybe<ResolversTypes['user__UserResponse']>, ParentType, ContextType, Partial<Mutationuser_UserService_CreateUserArgs>>;
  user_UserService_UpdateUser?: Resolver<Maybe<ResolversTypes['user__UserResponse']>, ParentType, ContextType, Partial<Mutationuser_UserService_UpdateUserArgs>>;
  user_UserService_DeleteUser?: Resolver<Maybe<ResolversTypes['user__DeleteUserResponse']>, ParentType, ContextType, Partial<Mutationuser_UserService_DeleteUserArgs>>;
  user_UserService_CheckEmailStatus?: Resolver<Maybe<ResolversTypes['user__CheckEmailResponse']>, ParentType, ContextType, Partial<Mutationuser_UserService_CheckEmailStatusArgs>>;
  team_InvitationService_CreateInvitation?: Resolver<Maybe<ResolversTypes['team__InvitationResponse']>, ParentType, ContextType, Partial<Mutationteam_InvitationService_CreateInvitationArgs>>;
  team_InvitationService_UpdateInvitationStatus?: Resolver<Maybe<ResolversTypes['team__InvitationResponse']>, ParentType, ContextType, Partial<Mutationteam_InvitationService_UpdateInvitationStatusArgs>>;
  team_TeamMemberService_AddMember?: Resolver<Maybe<ResolversTypes['team__TeamMemberResponse']>, ParentType, ContextType, Partial<Mutationteam_TeamMemberService_AddMemberArgs>>;
  team_TeamMemberService_UpdateMemberRole?: Resolver<Maybe<ResolversTypes['team__TeamMemberResponse']>, ParentType, ContextType, Partial<Mutationteam_TeamMemberService_UpdateMemberRoleArgs>>;
  team_TeamMemberService_RemoveMember?: Resolver<Maybe<ResolversTypes['team__RemoveMemberResponse']>, ParentType, ContextType, Partial<Mutationteam_TeamMemberService_RemoveMemberArgs>>;
  team_TeamService_CreateTeam?: Resolver<Maybe<ResolversTypes['team__TeamResponse']>, ParentType, ContextType, Partial<Mutationteam_TeamService_CreateTeamArgs>>;
  team_TeamService_UpdateTeam?: Resolver<Maybe<ResolversTypes['team__TeamResponse']>, ParentType, ContextType, Partial<Mutationteam_TeamService_UpdateTeamArgs>>;
  team_TeamService_DeleteTeam?: Resolver<Maybe<ResolversTypes['team__DeleteTeamResponse']>, ParentType, ContextType, Partial<Mutationteam_TeamService_DeleteTeamArgs>>;
  tournament_MatchTeamService_CreateMatchTeam?: Resolver<Maybe<ResolversTypes['tournament__MatchTeamResponse']>, ParentType, ContextType, Partial<Mutationtournament_MatchTeamService_CreateMatchTeamArgs>>;
  tournament_MatchTeamService_UpdateMatchTeam?: Resolver<Maybe<ResolversTypes['tournament__MatchTeamResponse']>, ParentType, ContextType, Partial<Mutationtournament_MatchTeamService_UpdateMatchTeamArgs>>;
  tournament_MatchTeamService_DeleteMatchTeam?: Resolver<Maybe<ResolversTypes['tournament__DeleteMatchTeamResponse']>, ParentType, ContextType, Partial<Mutationtournament_MatchTeamService_DeleteMatchTeamArgs>>;
  tournament_MatchService_CreateMatch?: Resolver<Maybe<ResolversTypes['tournament__MatchResponse']>, ParentType, ContextType, Partial<Mutationtournament_MatchService_CreateMatchArgs>>;
  tournament_MatchService_UpdateMatch?: Resolver<Maybe<ResolversTypes['tournament__MatchResponse']>, ParentType, ContextType, Partial<Mutationtournament_MatchService_UpdateMatchArgs>>;
  tournament_PlayerStatsService_CreatePlayerStat?: Resolver<Maybe<ResolversTypes['tournament__PlayerStatResponse']>, ParentType, ContextType, Partial<Mutationtournament_PlayerStatsService_CreatePlayerStatArgs>>;
  tournament_PlayerStatsService_UpdatePlayerStat?: Resolver<Maybe<ResolversTypes['tournament__PlayerStatResponse']>, ParentType, ContextType, Partial<Mutationtournament_PlayerStatsService_UpdatePlayerStatArgs>>;
  tournament_PlayerStatsService_DeletePlayerStat?: Resolver<Maybe<ResolversTypes['tournament__DeletePlayerStatResponse']>, ParentType, ContextType, Partial<Mutationtournament_PlayerStatsService_DeletePlayerStatArgs>>;
  tournament_TournamentTeamService_CreateTournamentTeam?: Resolver<Maybe<ResolversTypes['tournament__TournamentTeamResponse']>, ParentType, ContextType, Partial<Mutationtournament_TournamentTeamService_CreateTournamentTeamArgs>>;
  tournament_TournamentTeamService_UpdateTournamentTeam?: Resolver<Maybe<ResolversTypes['tournament__TournamentTeamResponse']>, ParentType, ContextType, Partial<Mutationtournament_TournamentTeamService_UpdateTournamentTeamArgs>>;
  tournament_TournamentTeamService_DeleteTournamentTeam?: Resolver<Maybe<ResolversTypes['tournament__DeleteTournamentTeamResponse']>, ParentType, ContextType, Partial<Mutationtournament_TournamentTeamService_DeleteTournamentTeamArgs>>;
  tournament_TournamentService_CreateTournament?: Resolver<Maybe<ResolversTypes['tournament__TournamentResponse']>, ParentType, ContextType, Partial<Mutationtournament_TournamentService_CreateTournamentArgs>>;
  tournament_TournamentService_UpdateTournament?: Resolver<Maybe<ResolversTypes['tournament__TournamentResponse']>, ParentType, ContextType, Partial<Mutationtournament_TournamentService_UpdateTournamentArgs>>;
  tournament_TournamentService_DeleteTournament?: Resolver<Maybe<ResolversTypes['tournament__DeleteResponse']>, ParentType, ContextType, Partial<Mutationtournament_TournamentService_DeleteTournamentArgs>>;
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

export type user__CheckEmailResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['user__CheckEmailResponse'] = ResolversParentTypes['user__CheckEmailResponse']> = ResolversObject<{
  available?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  has_password?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  auth_provider?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  can_complete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
}>;

export interface TransportOptionsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TransportOptions'], any> {
  name: 'TransportOptions';
}

export type team__InvitationResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__InvitationResponse'] = ResolversParentTypes['team__InvitationResponse']> = ResolversObject<{
  invitation?: Resolver<Maybe<ResolversTypes['team__Invitation']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type team__InvitationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__Invitation'] = ResolversParentTypes['team__Invitation']> = ResolversObject<{
  invitation_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_invited_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_invited_by_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type team__ListInvitationsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__ListInvitationsResponse'] = ResolversParentTypes['team__ListInvitationsResponse']> = ResolversObject<{
  invitations?: Resolver<Maybe<Array<Maybe<ResolversTypes['team__Invitation']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type team__TeamMemberResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__TeamMemberResponse'] = ResolversParentTypes['team__TeamMemberResponse']> = ResolversObject<{
  member?: Resolver<Maybe<ResolversTypes['team__TeamMember']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type team__TeamMemberResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__TeamMember'] = ResolversParentTypes['team__TeamMember']> = ResolversObject<{
  team_member_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  joined_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type team__ListTeamMembersResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__ListTeamMembersResponse'] = ResolversParentTypes['team__ListTeamMembersResponse']> = ResolversObject<{
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['team__TeamMember']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type team__RemoveMemberResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__RemoveMemberResponse'] = ResolversParentTypes['team__RemoveMemberResponse']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type team__TeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__TeamResponse'] = ResolversParentTypes['team__TeamResponse']> = ResolversObject<{
  team?: Resolver<Maybe<ResolversTypes['team__Team']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type team__TeamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__Team'] = ResolversParentTypes['team__Team']> = ResolversObject<{
  team_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  game_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type team__ListTeamsResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__ListTeamsResponse'] = ResolversParentTypes['team__ListTeamsResponse']> = ResolversObject<{
  teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['team__Team']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type team__DeleteTeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['team__DeleteTeamResponse'] = ResolversParentTypes['team__DeleteTeamResponse']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__MatchTeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__MatchTeamResponse'] = ResolversParentTypes['tournament__MatchTeamResponse']> = ResolversObject<{
  match_team?: Resolver<Maybe<ResolversTypes['tournament__MatchTeam']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__MatchTeamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__MatchTeam'] = ResolversParentTypes['tournament__MatchTeam']> = ResolversObject<{
  id_match_team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_tournament_team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_match?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  team_side?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  final_score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  placement?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  points_earned?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  results?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['google__protobuf__Struct']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['google__protobuf__Timestamp']>, ParentType, ContextType>;
}>;

export type google__protobuf__StructResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['google__protobuf__Struct'] = ResolversParentTypes['google__protobuf__Struct']> = ResolversObject<{
  fields?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type google__protobuf__TimestampResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['google__protobuf__Timestamp'] = ResolversParentTypes['google__protobuf__Timestamp']> = ResolversObject<{
  seconds?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  nanos?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type tournament__MatchTeamListResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__MatchTeamListResponse'] = ResolversParentTypes['tournament__MatchTeamListResponse']> = ResolversObject<{
  match_teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['tournament__MatchTeam']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type tournament__DeleteMatchTeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__DeleteMatchTeamResponse'] = ResolversParentTypes['tournament__DeleteMatchTeamResponse']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__MatchResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__MatchResponse'] = ResolversParentTypes['tournament__MatchResponse']> = ResolversObject<{
  match?: Resolver<Maybe<ResolversTypes['tournament__Match']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__MatchResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__Match'] = ResolversParentTypes['tournament__Match']> = ResolversObject<{
  id_match?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_tournament?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  map_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  round_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  match_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  match_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  match_format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scheduled_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_time?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  winner_team_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_teams?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__MatchListResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__MatchListResponse'] = ResolversParentTypes['tournament__MatchListResponse']> = ResolversObject<{
  matches?: Resolver<Maybe<Array<Maybe<ResolversTypes['tournament__Match']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type tournament__PlayerStatResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__PlayerStatResponse'] = ResolversParentTypes['tournament__PlayerStatResponse']> = ResolversObject<{
  player_stat?: Resolver<Maybe<ResolversTypes['tournament__PlayerStat']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__PlayerStatResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__PlayerStat'] = ResolversParentTypes['tournament__PlayerStat']> = ResolversObject<{
  id_player_stat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_match?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_match_team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_user?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deaths?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  assists?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stats?: Resolver<Maybe<ResolversTypes['google__protobuf__Struct']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['google__protobuf__Timestamp']>, ParentType, ContextType>;
}>;

export type tournament__PlayerStatListResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__PlayerStatListResponse'] = ResolversParentTypes['tournament__PlayerStatListResponse']> = ResolversObject<{
  player_stats?: Resolver<Maybe<Array<Maybe<ResolversTypes['tournament__PlayerStat']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type tournament__DeletePlayerStatResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__DeletePlayerStatResponse'] = ResolversParentTypes['tournament__DeletePlayerStatResponse']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__TournamentTeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__TournamentTeamResponse'] = ResolversParentTypes['tournament__TournamentTeamResponse']> = ResolversObject<{
  tournament_team?: Resolver<Maybe<ResolversTypes['tournament__TournamentTeam']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__TournamentTeamResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__TournamentTeam'] = ResolversParentTypes['tournament__TournamentTeam']> = ResolversObject<{
  id_tournament_team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_tournament?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_team?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total_points?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  wins?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  loses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  draws?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_kills?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__TournamentTeamListResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__TournamentTeamListResponse'] = ResolversParentTypes['tournament__TournamentTeamListResponse']> = ResolversObject<{
  tournament_teams?: Resolver<Maybe<Array<Maybe<ResolversTypes['tournament__TournamentTeam']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type tournament__DeleteTournamentTeamResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__DeleteTournamentTeamResponse'] = ResolversParentTypes['tournament__DeleteTournamentTeamResponse']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__TournamentResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__TournamentResponse'] = ResolversParentTypes['tournament__TournamentResponse']> = ResolversObject<{
  tournament?: Resolver<Maybe<ResolversTypes['tournament__Tournament']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__TournamentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__Tournament'] = ResolversParentTypes['tournament__Tournament']> = ResolversObject<{
  id_tournament?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_game?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_created_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  banner_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  format?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  started_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  registration_deadline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  max_teams?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  min_teams?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  team_size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rules?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  scoring_schema?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  prize_pool?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type tournament__TournamentListResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__TournamentListResponse'] = ResolversParentTypes['tournament__TournamentListResponse']> = ResolversObject<{
  tournaments?: Resolver<Maybe<Array<Maybe<ResolversTypes['tournament__Tournament']>>>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
}>;

export type tournament__DeleteResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['tournament__DeleteResponse'] = ResolversParentTypes['tournament__DeleteResponse']> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  user__CheckEmailResponse?: user__CheckEmailResponseResolvers<ContextType>;
  TransportOptions?: GraphQLScalarType;
  team__InvitationResponse?: team__InvitationResponseResolvers<ContextType>;
  team__Invitation?: team__InvitationResolvers<ContextType>;
  team__ListInvitationsResponse?: team__ListInvitationsResponseResolvers<ContextType>;
  team__TeamMemberResponse?: team__TeamMemberResponseResolvers<ContextType>;
  team__TeamMember?: team__TeamMemberResolvers<ContextType>;
  team__ListTeamMembersResponse?: team__ListTeamMembersResponseResolvers<ContextType>;
  team__RemoveMemberResponse?: team__RemoveMemberResponseResolvers<ContextType>;
  team__TeamResponse?: team__TeamResponseResolvers<ContextType>;
  team__Team?: team__TeamResolvers<ContextType>;
  team__ListTeamsResponse?: team__ListTeamsResponseResolvers<ContextType>;
  team__DeleteTeamResponse?: team__DeleteTeamResponseResolvers<ContextType>;
  tournament__MatchTeamResponse?: tournament__MatchTeamResponseResolvers<ContextType>;
  tournament__MatchTeam?: tournament__MatchTeamResolvers<ContextType>;
  google__protobuf__Struct?: google__protobuf__StructResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  google__protobuf__Timestamp?: google__protobuf__TimestampResolvers<ContextType>;
  tournament__MatchTeamListResponse?: tournament__MatchTeamListResponseResolvers<ContextType>;
  tournament__DeleteMatchTeamResponse?: tournament__DeleteMatchTeamResponseResolvers<ContextType>;
  tournament__MatchResponse?: tournament__MatchResponseResolvers<ContextType>;
  tournament__Match?: tournament__MatchResolvers<ContextType>;
  tournament__MatchListResponse?: tournament__MatchListResponseResolvers<ContextType>;
  tournament__PlayerStatResponse?: tournament__PlayerStatResponseResolvers<ContextType>;
  tournament__PlayerStat?: tournament__PlayerStatResolvers<ContextType>;
  tournament__PlayerStatListResponse?: tournament__PlayerStatListResponseResolvers<ContextType>;
  tournament__DeletePlayerStatResponse?: tournament__DeletePlayerStatResponseResolvers<ContextType>;
  tournament__TournamentTeamResponse?: tournament__TournamentTeamResponseResolvers<ContextType>;
  tournament__TournamentTeam?: tournament__TournamentTeamResolvers<ContextType>;
  tournament__TournamentTeamListResponse?: tournament__TournamentTeamListResponseResolvers<ContextType>;
  tournament__DeleteTournamentTeamResponse?: tournament__DeleteTournamentTeamResponseResolvers<ContextType>;
  tournament__TournamentResponse?: tournament__TournamentResponseResolvers<ContextType>;
  tournament__Tournament?: tournament__TournamentResolvers<ContextType>;
  tournament__TournamentListResponse?: tournament__TournamentListResponseResolvers<ContextType>;
  tournament__DeleteResponse?: tournament__DeleteResponseResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  grpcMethod?: grpcMethodDirectiveResolver<any, any, ContextType>;
  grpcConnectivityState?: grpcConnectivityStateDirectiveResolver<any, any, ContextType>;
  stream?: streamDirectiveResolver<any, any, ContextType>;
  transport?: transportDirectiveResolver<any, any, ContextType>;
  enum?: enumDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = UserTypes.Context & AuthTypes.Context & InvitationTypes.Context & TeamMemberTypes.Context & TeamTypes.Context & MatchTeamTypes.Context & MatchTypes.Context & PlayerStatsTypes.Context & TournamentTeamTypes.Context & TournamentTypes.Context & BaseMeshContext;


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