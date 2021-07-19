import { Container, Dialog } from "../styles/components/modalRegister";
import { FaTimes, FaFacebookSquare, FaGoogle, FaApple } from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";

export default function ModalLogin() {
  const { setRegisterVisibility, setLoginVisibility } = useContext(
    ModalContext
  );
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const registerHandle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("profilePhoto", inputFileRef.current.files[0]);
      formData.append("email", inputEmailRef.current.value);
      formData.append("password", inputPasswordRef.current.value);
      formData.append("name", inputNameRef.current.value);
      await axios.post("http://localhost:3001/users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setRegisterVisibility(false);
      setLoginVisibility(true);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleModal = () => {
    setLoginVisibility(true);
    setRegisterVisibility(false);
  };

  return (
    <Container
      onClick={(e) => {
        const { tagName } = e.target as HTMLElement;
        if (tagName === "MAIN") {
          setRegisterVisibility(false);
        }
      }}
    >
      <Dialog>
        <form onSubmit={registerHandle}>
          <button type="button" onClick={() => setRegisterVisibility(false)}>
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
          <h2>Se Cadastrar</h2>
          <h3>E-MAIL</h3>
          <input
            ref={inputEmailRef}
            required
            type="email"
            placeholder="Seu email"
          />
          <h3>NOME</h3>
          <input
            ref={inputNameRef}
            required
            type="text"
            placeholder="Seu nome"
          />
          <h3>SENHA</h3>
          <input
            ref={inputPasswordRef}
            type="password"
            placeholder="*********"
            required
          />
          <h3>Foto</h3>
          <input
            ref={inputFileRef}
            name="profilePhoto"
            type="file"
            id="files"
          />
          <label htmlFor="files">Adicione uma foto</label>
          <button type="button" onClick={toggleModal}>
            Ja possui uma conta?
          </button>
          <button type="submit">Cadastrar</button>
        </form>
      </Dialog>
    </Container>
  );
}
