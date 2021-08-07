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
  Avatar,
} from "../styles/components/modal";
import { FaTimes } from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { PostContext } from "../contexts/PostContext";

export default function ModalPostModerator() {
  const { user } = useContext(UserContext);
  const { setModeratorPostVisibility } = useContext(ModalContext);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);
  const inputCompanyRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef<HTMLInputElement>(null);
  const inputLinkRef = useRef<HTMLInputElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const imagePreviewRef = useRef<HTMLImageElement>(null);

  const { post } = useContext(PostContext);
  const moderatorPostHandle = async (e: FormEvent) => {
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
      await axios.put("http://localhost:3001/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setModeratorPostVisibility(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      onClick={(e) => {
        const { tagName } = e.target as HTMLElement;
        if (tagName === "MAIN") {
          setModeratorPostVisibility(false);
        }
      }}
    >
      <Dialog>
        <FormContainer onSubmit={moderatorPostHandle}>
          <ButtonClose
            type="button"
            onClick={() => setModeratorPostVisibility(false)}
          >
            <FaTimes />
          </ButtonClose>
          <Title>Promoção</Title>
          <SubTitle>Titulo</SubTitle>
          <InputText ref={inputTitleRef} required value={post.title} />
          <SubTitle>Descrição</SubTitle>
          <InputText
            ref={inputDescriptionRef}
            required
            value={post.description}
          />
          <SubTitle>Empresa</SubTitle>
          <InputText ref={inputCompanyRef} required value={post.company} />
          <SubTitle>Preço</SubTitle>
          <InputNumber ref={inputValueRef} required value={post.value} />
          <SubTitle>Link</SubTitle>
          <InputUrl ref={inputLinkRef} required value={post.link} />
          <SubTitle>Foto</SubTitle>
          <InputFile
            ref={inputFileRef}
            name="postPhoto"
            id="files"
            onChange={() =>
              (imagePreviewRef.current.src = window.URL.createObjectURL(
                inputFileRef.current.files[0]
              ))
            }
          />
          <WrapperPreviewImage>
            <Label htmlFor="files">Mudar foto</Label>
            <Avatar
              src={`http://localhost:3001/post/${post.id}.jpg`}
              ref={imagePreviewRef}
            />
          </WrapperPreviewImage>
          <ButtonSecondary type="submit">Aprovar</ButtonSecondary>
        </FormContainer>
      </Dialog>
    </Container>
  );
}
