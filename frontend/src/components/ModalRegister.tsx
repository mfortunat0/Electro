import { Container, Dialog } from "../styles/components/modalRegister";
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
  const { setLoginVisibility } = useContext(ModalContext);
  const { setUserStatus } = useContext(UserContext);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

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
    }
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
        <div>
          <h2>Bem vindo ao Pelando</h2>
          <img src="/logo-vertical.svg" alt="logo" />
          <h3>Entre agora para a maior comunidade do Brasil!</h3>
          <p>
            Pelando tem as <b>melhores promoções</b>, das marcas que você ama,
            enviadas por <b>pessoas de verdade</b>, igual você!
          </p>
          <a>Veja mais</a>
          <button type="button">Criar nova conta</button>
        </div>
        <form onSubmit={LoginHandle}>
          <button type="button" onClick={() => setLoginVisibility(false)}>
            <FaTimes />
          </button>
          <h2>Login social</h2>
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
          <h3>NOME DE USUÁRIO OU E-MAIL</h3>
          <input ref={inputEmailRef} type="text" placeholder="Seu Nome" />
          <span>
            <h3>SENHA</h3>
            <a>Esqueceu?</a>
          </span>
          <input
            ref={inputPasswordRef}
            type="password"
            placeholder="*********"
          />
          <span>
            <button type="button">
              <FaCheckSquare size={25} />
            </button>
            Me mantenha logado
          </span>
          <button type="submit">Logar</button>
        </form>
      </Dialog>
    </Container>
  );
}
