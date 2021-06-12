import { createContext, useEffect, useState } from "react";

interface IUserContext {
  userStatus: string;
  setUserStatus: (value: string) => void;
}

export const UserContext = createContext({} as IUserContext);

export default function UserContextProvider({ children }) {
  const [userStatus, setUserStatus] = useState("noLogged");
  useEffect(() => {
    setUserStatus(localStorage.getItem("userStatus"));
  }, []);
  return (
    <UserContext.Provider value={{ userStatus, setUserStatus }}>
      {children}
    </UserContext.Provider>
  );
}
