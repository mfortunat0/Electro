import {
  Container,
  Dialog,
  FormContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonClose,
  InputEmail,
  InputFile,
  InputPassword,
  Label,
  SubTitle,
  Title,
  InputText,
  WrapperPreviewImage,
  Avatar,
} from "../styles/components/modal";
import { FaTimes } from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";
import toast from "react-hot-toast";

export default function ModalRegister() {
  const { setRegisterVisibility, setLoginVisibility } = useContext(
    ModalContext
  );
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const imagePreviewRef = useRef<HTMLImageElement>(null);

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
      toast.success("Cadastrado com sucesso");
      setRegisterVisibility(false);
      setLoginVisibility(true);
    } catch (error) {
      console.log(error);
      toast.error("Email ja cadastrado");
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
        <FormContainer onSubmit={registerHandle}>
          <ButtonClose
            type="button"
            onClick={() => setRegisterVisibility(false)}
          >
            <FaTimes />
          </ButtonClose>
          <Title>Se Cadastrar</Title>
          <SubTitle>E-MAIL</SubTitle>
          <InputEmail ref={inputEmailRef} required placeholder="Seu email" />
          <SubTitle>NOME</SubTitle>
          <InputText ref={inputNameRef} required placeholder="Seu nome" />
          <SubTitle>SENHA</SubTitle>
          <InputPassword
            ref={inputPasswordRef}
            placeholder="*********"
            required
          />
          <SubTitle>Foto</SubTitle>
          <InputFile
            ref={inputFileRef}
            name="profilePhoto"
            id="files"
            onChange={() =>
              (imagePreviewRef.current.src = window.URL.createObjectURL(
                inputFileRef.current.files[0]
              ))
            }
          />
          <WrapperPreviewImage>
            <Label htmlFor="files">Adicione uma foto</Label>
            <Avatar src="/default.jpg" ref={imagePreviewRef} />
          </WrapperPreviewImage>
          <ButtonPrimary type="button" onClick={toggleModal}>
            Ja possui uma conta?
          </ButtonPrimary>
          <ButtonSecondary type="submit">Cadastrar</ButtonSecondary>
        </FormContainer>
      </Dialog>
    </Container>
  );
}
