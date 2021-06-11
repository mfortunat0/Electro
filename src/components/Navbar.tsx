import {
  Button,
  Input,
  Dropdown,
  Logo,
  ContainerForm,
  Nav,
  Icon,
} from "../styles/components/navbar";
import { FaUserAlt, FaSearch, FaPlus, FaCaretDown } from "react-icons/fa";
import { useContext } from "react";
import { ModalLoginContext } from "../contexts/ModalLogin-Context";

export default function Navbar() {
  const { setIsShow } = useContext(ModalLoginContext);
  return (
    <Nav>
      <Logo />
      <Dropdown>
        Categoria &nbsp; <FaCaretDown />
      </Dropdown>
      <ContainerForm onSubmit={(e) => e.preventDefault()}>
        <Icon>
          <FaSearch />
        </Icon>
        <Input placeholder="Procurar Lojas, Cupons, Produtos..." />
        <Button onClick={() => setIsShow(true)}>
          <FaUserAlt /> &nbsp; Cadastrar / Logar
        </Button>
        <Button onClick={() => setIsShow(true)}>
          <FaPlus />
          &nbsp; Enviar
        </Button>
      </ContainerForm>
    </Nav>
  );
}
