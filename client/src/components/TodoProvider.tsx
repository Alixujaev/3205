import React, { useState } from "react";
import { createContext } from "react";
import { ContextType, UserType } from "../types";

export const TodoContext = createContext<ContextType>({
  users: [],
  setUsers: () => {},
  isLoading: false,
  setIsLoading: () => {},
  error: "",
  setError: () => {},
});

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  return (
    <TodoContext.Provider
      value={{ users, setUsers, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
