import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import ModalLoginContextProvider from "../contexts/ModalContext";
import UserContextProvider from "../contexts/UserContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif
  }
  body{
    background-color:#E9EAED
  }
  button,a{
    border: unset;
    outline: unset;
    cursor: pointer;
    background-color: transparent;
  }
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <UserContextProvider>
          <ModalLoginContextProvider>
            <Navbar />
            <Component {...pageProps} />
          </ModalLoginContextProvider>
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}
