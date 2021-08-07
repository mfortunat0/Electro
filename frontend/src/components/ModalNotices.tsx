import {
  Container,
  Dialog,
  Title,
  SubTitle,
  FormContainer,
  ButtonClose,
} from "../styles/components/modal";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export default function ModalNotice() {
  const { setNoticeVisibility } = useContext(ModalContext);

  return (
    <Container
      onClick={(e) => {
        const { tagName } = e.target as HTMLElement;
        if (tagName === "MAIN") {
          setNoticeVisibility(false);
        }
      }}
    >
      <Dialog>
        <FormContainer>
          <ButtonClose type="button" onClick={() => setNoticeVisibility(false)}>
            <FaTimes />
          </ButtonClose>
          <Title>Aviso importante</Title>
          <SubTitle>
            Ola, seja bem vindo ao Electro, um web app em fase de
            desenvolvimento. Nenhuma informação sera mantida ate o lançamento
            oficial deste Web App.
            <br />
            Enquanto permanecer em fase de desenvolvimento, caso encontre algum
            bug entre em contato para este email ......
          </SubTitle>
        </FormContainer>
      </Dialog>
    </Container>
  );
}
