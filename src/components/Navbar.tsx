import {
  Button,
  Input,
  Dropdown,
  Logo,
  ContainerForm,
  Nav,
  Icon,
} from "../styles/navbar";
import { FaUserAlt, FaSearch, FaPlus, FaCaretDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <Nav>
      <Logo />
      <Dropdown>
        Categoria &nbsp; <FaCaretDown />
      </Dropdown>
      <ContainerForm>
        <Icon>
          <FaSearch />
        </Icon>
        <Input placeholder="Procurar Lojas, Cupons, Produtos..." />
        <Button>
          <FaUserAlt /> &nbsp; Cadastrar / Logar
        </Button>
        <Button>
          <FaPlus />
          &nbsp; Enviar
        </Button>
      </ContainerForm>
    </Nav>
  );
}
