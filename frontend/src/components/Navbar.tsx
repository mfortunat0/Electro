import {
  Button,
  Input,
  Dropdown,
  Logo,
  ContainerForm,
  Nav,
  Icon,
  Profile,
} from "../styles/components/navbar";
import { FaUserAlt, FaSearch, FaPlus, FaCaretDown } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { setLoginVisibility } = useContext(ModalContext);
  const { userStatus } = useContext(UserContext);
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
        {userStatus === "logged" ? (
          <Profile src="profile.jpg" />
        ) : (
          <Button onClick={() => setLoginVisibility(true)}>
            <FaUserAlt /> &nbsp; Cadastrar / Logar
          </Button>
        )}

        <Button onClick={() => setLoginVisibility(true)}>
          <FaPlus />
          &nbsp; Enviar
        </Button>
      </ContainerForm>
    </Nav>
  );
}
