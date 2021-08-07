import { createContext, useState } from "react";

interface IModalContext {
  loginVisibility: boolean;
  setLoginVisibility: (state: boolean) => void;
  registerVisibility: boolean;
  setRegisterVisibility: (state: boolean) => void;
  postVisibility: boolean;
  setPostVisibility: (state: boolean) => void;
  noticeVisibility: boolean;
  setNoticeVisibility: (state: boolean) => void;
  moderatorPostVisibility: boolean;
  setModeratorPostVisibility: (state: boolean) => void;
}

export const ModalContext = createContext({} as IModalContext);

export default function ModalLoginContextProvider({ children }) {
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [registerVisibility, setRegisterVisibility] = useState(false);
  const [postVisibility, setPostVisibility] = useState(false);
  const [noticeVisibility, setNoticeVisibility] = useState(true);
  const [moderatorPostVisibility, setModeratorPostVisibility] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        loginVisibility,
        setLoginVisibility,
        registerVisibility,
        setRegisterVisibility,
        postVisibility,
        setPostVisibility,
        noticeVisibility,
        setNoticeVisibility,
        moderatorPostVisibility,
        setModeratorPostVisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
