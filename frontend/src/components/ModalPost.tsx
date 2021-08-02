import {
  Container,
  Dialog,
  Title,
  ButtonSecondary,
  SubTitle,
  InputText,
  InputFile,
  FormContainer,
  ButtonClose,
  Label,
  InputNumber,
  InputUrl,
  WrapperPreviewImage,
} from "../styles/components/modal";
import { FaTimes } from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

interface IProps {
  getCards: () => void;
}

export default function ModalLogin({ getCards }: IProps) {
  const { user } = useContext(UserContext);
  const { setPostVisibility } = useContext(ModalContext);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);
  const inputCompanyRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef<HTMLInputElement>(null);
  const inputLinkRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const postHandle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("postPhoto", inputFileRef.current.files[0]);
      formData.append("title", inputTitleRef.current.value);
      formData.append("company", inputCompanyRef.current.value);
      formData.append("description", inputDescriptionRef.current.value);
      formData.append("value", inputValueRef.current.value);
      formData.append("userId", user.id);
      formData.append("userName", user.name);
      formData.append("link", inputLinkRef.current.value);
      await axios.post("http://localhost:3001/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      getCards();
      setPostVisibility(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      onClick={(e) => {
        const { tagName } = e.target as HTMLElement;
        if (tagName === "MAIN") {
          setPostVisibility(false);
        }
      }}
    >
      <Dialog>
        <FormContainer onSubmit={postHandle}>
          <ButtonClose type="button" onClick={() => setPostVisibility(false)}>
            <FaTimes />
          </ButtonClose>
          <Title>Nova promoção</Title>
          <SubTitle>Titulo</SubTitle>
          <InputText
            ref={inputTitleRef}
            required
            placeholder="Ex: Mouse gamer...."
          />
          <SubTitle>Descrição</SubTitle>
          <InputText
            ref={inputDescriptionRef}
            required
            placeholder="Ex: Mouse fabricado por....."
          />
          <SubTitle>Empresa</SubTitle>
          <InputText ref={inputCompanyRef} placeholder="Ex: Amazon" required />
          <SubTitle>Preço</SubTitle>
          <InputNumber ref={inputValueRef} placeholder="100.00" required />
          <SubTitle>Link</SubTitle>
          <InputUrl
            ref={inputLinkRef}
            placeholder="https://www.kabum.com.br/..."
            required
          />
          <SubTitle>Foto</SubTitle>
          <InputFile ref={inputFileRef} name="postPhoto" id="files" />
          <WrapperPreviewImage>
            <Label htmlFor="files">Adicione uma foto</Label>
          </WrapperPreviewImage>
          <ButtonSecondary type="submit">Publicar</ButtonSecondary>
        </FormContainer>
      </Dialog>
    </Container>
  );
}
