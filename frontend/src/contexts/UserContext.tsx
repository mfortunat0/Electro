import { createContext, useState } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  pass: string;
}

interface IUserContext {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext({} as IUserContext);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={{ setUser, user }}>
      {children}
    </UserContext.Provider>
  );
}
