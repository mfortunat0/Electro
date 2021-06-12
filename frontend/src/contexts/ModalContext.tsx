import { createContext, useState } from "react";

interface IModalContext {
  loginVisibility: boolean;
  setLoginVisibility: (state: boolean) => void;
  registerVisibility: boolean;
  setRegisterVisibility: (state: boolean) => void;
}

export const ModalContext = createContext({} as IModalContext);

export default function ModalLoginContextProvider({ children }) {
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [registerVisibility, setRegisterVisibility] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        loginVisibility,
        setLoginVisibility,
        registerVisibility,
        setRegisterVisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
