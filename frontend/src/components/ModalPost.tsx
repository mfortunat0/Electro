import { Container, Dialog } from "../styles/components/modalPost";
import { FaTimes } from "react-icons/fa";
import { FormEvent, useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";

interface IProps {
  getCards: () => void;
}

export default function ModalLogin({ getCards }: IProps) {
  const { setPostVisibility } = useContext(ModalContext);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);
  const inputCompanyRef = useRef<HTMLInputElement>(null);
  const inputValueRef = useRef<HTMLInputElement>(null);
  const inputLinkRef = useRef<HTMLInputElement>(null);

  const postHandle = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/posts", {
        data: {
          title: inputTitleRef.current.value,
          company: inputCompanyRef.current.value,
          description: inputDescriptionRef.current.value,
          value: inputValueRef.current.value,
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
        <form onSubmit={postHandle}>
          <button type="button" onClick={() => setPostVisibility(false)}>
            <FaTimes />
          </button>
          <h2>Nova promoção</h2>
          <h3>Titulo</h3>
          <input
            ref={inputTitleRef}
            required
            type="text"
            placeholder="Ex: Mouse gamer...."
          />
          <h3>Descrição</h3>
          <input
            ref={inputDescriptionRef}
            required
            type="text"
            placeholder="Ex: Mouse fabricado por....."
          />
          <h3>Empresa</h3>
          <input
            ref={inputCompanyRef}
            type="text"
            placeholder="Ex: Amazon"
            required
          />
          <h3>Preço</h3>
          <input
            ref={inputValueRef}
            type="number"
            placeholder="100.00"
            required
          />
          <h3>Link</h3>
          <input
            ref={inputLinkRef}
            type="text"
            placeholder="https://www.kabum.com.br/..."
            required
          />
          <h3>Foto</h3>
          <input type="file" id="files" />
          <label htmlFor="files">Adicione uma foto</label>
          <button type="submit">Publicar</button>
        </form>
      </Dialog>
    </Container>
  );
}
