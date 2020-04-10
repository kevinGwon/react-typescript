export interface UserStateType {
  login?: boolean;
  name: string | null;
  account: number | null;
  favorite: [];
  token: string | null;
  session: string | null;
  loading?: boolean;
  error?: any | null;
}
