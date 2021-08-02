import {
  Container,
  Dialog,
  InputPassword,
  InputEmail,
  Title,
  SubTitle,
  Link,
  Wrapper,
  FormContainer,
  ButtonClose,
  ButtonPrimary,
  ButtonSecondary,
  ButtonLogged,
} from "../styles/components/modal";
import { FaTimes, FaCheckSquare } from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function ModalLogin() {
  const { setLoginVisibility, setRegisterVisibility } = useContext(
    ModalContext
  );
  const { setUser } = useContext(UserContext);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const LoginHandle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const user = await axios.get("http://localhost:3001/users", {
        params: {
          email: inputEmailRef.current.value,
          password: inputPasswordRef.current.value,
        },
      });
      setUser(user.data);
      setLoginVisibility(false);
      toast.success(`Bem vindo ${user.data.name}`);
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha invalidos");
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
        <FormContainer onSubmit={LoginHandle}>
          <ButtonClose type="button" onClick={() => setLoginVisibility(false)}>
            <FaTimes />
          </ButtonClose>
          <Title>Login</Title>
          <SubTitle>NOME DE USUÁRIO OU E-MAIL</SubTitle>
          <InputEmail ref={inputEmailRef} required placeholder="Seu email" />
          <Wrapper>
            <SubTitle>SENHA</SubTitle>
            <Link>Esqueceu?</Link>
          </Wrapper>
          <InputPassword
            ref={inputPasswordRef}
            type="password"
            placeholder="*********"
            required
          />
          <Wrapper>
            <ButtonLogged type="button">
              <FaCheckSquare size={25} />
            </ButtonLogged>
            Me mantenha logado
          </Wrapper>
          <ButtonPrimary type="button" onClick={showRegisterModal}>
            Criar nova conta
          </ButtonPrimary>
          <ButtonSecondary type="submit">Logar</ButtonSecondary>
        </FormContainer>
      </Dialog>
    </Container>
  );
}
