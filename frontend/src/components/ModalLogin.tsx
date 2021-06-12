import { Container, Dialog } from "../styles/components/modalLogin";
import {
  FaTimes,
  FaFacebookSquare,
  FaGoogle,
  FaApple,
  FaCheckSquare,
} from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function ModalLogin() {
  const { setLoginVisibility, setRegisterVisibility } = useContext(
    ModalContext
  );
  const { setUserStatus } = useContext(UserContext);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const errorMessageRef = useRef<HTMLParagraphElement>(null);

  const LoginHandle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.get("http://localhost:3001/users", {
        params: {
          email: inputEmailRef.current.value,
          password: inputPasswordRef.current.value,
        },
      });
      setLoginVisibility(false);
      setUserStatus("logged");
    } catch (error) {
      console.log(error);
      errorMessageRef.current.innerHTML = "Usuario nao cadastrado";
    }
  };

  const showRegisterModal = () => {
    setLoginVisibility(false);
    setRegisterVisibility(true);
  };

  return (
    <Container
      onClick={(e) => {
        const { tagName } = e.target as HTMLElement;
        if (tagName === "MAIN") {
          setLoginVisibility(false);
        }
      }}
    >
      <Dialog>
        <form onSubmit={LoginHandle}>
          <button type="button" onClick={() => setLoginVisibility(false)}>
            <FaTimes />
          </button>
          <button type="button">
            <FaFacebookSquare style={{ color: "#fff" }} size={18} /> &nbsp;
            Entrar com Facebook
          </button>
          <button type="button">
            <FaGoogle style={{ color: "#F10037" }} size={18} /> &nbsp; Entrar
            com Google
          </button>
          <button type="button">
            <FaApple style={{ color: "#000" }} size={18} /> &nbsp; Entrar com
            Apple
          </button>
          <h2>Login</h2>
          <p ref={errorMessageRef}></p>
          <h3>NOME DE USUÁRIO OU E-MAIL</h3>
          <input
            ref={inputEmailRef}
            required
            type="text"
            placeholder="Seu Nome"
          />
          <span>
            <h3>SENHA</h3>
            <a>Esqueceu?</a>
          </span>
          <input
            ref={inputPasswordRef}
            type="password"
            placeholder="*********"
            required
          />
          <span>
            <button type="button">
              <FaCheckSquare size={25} />
            </button>
            Me mantenha logado
          </span>
          <button type="button" onClick={showRegisterModal}>
            Criar nova conta
          </button>
          <button type="submit">Logar</button>
        </form>
      </Dialog>
    </Container>
  );
}
