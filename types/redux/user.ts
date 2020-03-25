export interface UserStateType {
  login?: boolean;
  name: string | null;
  token: string | null;
  session: string | null;
  loading?: boolean;
  error?: any | null;
}
