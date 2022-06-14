export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed" | "LogIn";
  User: UserObj;
  AuthorizationToken: AuthorizationTokenObj;
}
export interface typeValues {
  username: string;
  password: string;
}
export interface UserObj {
  Products?: never[];
  Id: number;
  UserName?: string;
  FullName: string;
  Email: string;
  Initials: string;
  ClientRoles?: string[];
}
export interface AuthorizationTokenObj {
  AuthResult?: string;
  Token: string;
  TokenExpires: string;
  RefreshToken: string;
}
export interface AuthorizationTokenRetObj {
  User: UserObj;
  AuthorizationToken: AuthorizationTokenObj;
}
