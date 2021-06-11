import { Container, Dialog } from "../styles/components/modalLogin";
import {
  FaTimes,
  FaFacebookSquare,
  FaGoogle,
  FaApple,
  FaCheckSquare,
} from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalLoginContext } from "../contexts/ModalLogin-Context";

export default function ModalLogin() {
  const { isShow, setIsShow } = useContext(ModalLoginContext);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const LoginHandle = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      {isShow && (
        <Container
          onClick={(e) => {
            const { tagName } = e.target as HTMLElement;
            if (tagName === "MAIN") {
              setIsShow(false);
            }
          }}
        >
          <Dialog>
            <div>
              <h2>Bem vindo ao Pelando</h2>
              <img src="/logo-vertical.svg" alt="logo" />
              <h3>Entre agora para a maior comunidade do Brasil!</h3>
              <p>
                Pelando tem as <b>melhores promoções</b>, das marcas que você
                ama, enviadas por <b>pessoas de verdade</b>, igual você!
              </p>
              <a>Veja mais</a>
              <button>Criar nova conta</button>
            </div>
            <form onSubmit={LoginHandle}>
              <button onClick={() => setIsShow(false)}>
                <FaTimes />
              </button>
              <h2>Login social</h2>
              <button>
                <FaFacebookSquare style={{ color: "#fff" }} size={18} /> &nbsp;
                Entrar com Facebook
              </button>
              <button>
                <FaGoogle style={{ color: "#F10037" }} size={18} /> &nbsp;
                Entrar com Google
              </button>
              <button>
                <FaApple style={{ color: "#000" }} size={18} /> &nbsp; Entrar
                com Apple
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
                <button>
                  <FaCheckSquare size={25} />
                </button>
                Me mantenha logado
              </span>
              <button>Logar</button>
            </form>
          </Dialog>
        </Container>
      )}
    </>
  );
}
