export interface UserStateType {
  login?: boolean;
  name: string | null;
  id: number | null;
  favorite: [];
  token: string | null;
  session: string | null;
  loading?: boolean;
  error?: any | null;
}
