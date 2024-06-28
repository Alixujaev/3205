export type UserType = {
  email: string
  number: string
}

export interface ContextType {
  users: UserType[];
  setUsers: React.Dispatch<React.SetStateAction<UserType[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
