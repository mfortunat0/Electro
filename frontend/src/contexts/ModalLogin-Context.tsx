import { createContext, useState } from "react";

interface IModalLoginContext {
  isShow: boolean;
  setIsShow: (state: boolean) => void;
}

export const ModalLoginContext = createContext({} as IModalLoginContext);

export default function ModalLoginContextProvider({ children }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <ModalLoginContext.Provider value={{ isShow, setIsShow }}>
      {children}
    </ModalLoginContext.Provider>
  );
}
