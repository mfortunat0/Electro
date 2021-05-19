import { Container, Dialog } from "../styles/components/modalLogin";
import {
  FaTimes,
  FaFacebookF,
  FaGoogle,
  FaApple,
  FaCheckSquare,
} from "react-icons/fa";

export default function ModalLogin() {
  return (
    <Container>
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
          <button>Criar nova conta</button>
        </div>
        <form></form>
      </Dialog>
    </Container>
  );
}
