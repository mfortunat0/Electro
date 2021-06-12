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
import { ModalLoginContext } from "../contexts/ModalLogin-Context";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { setIsShow } = useContext(ModalLoginContext);
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
          <Button onClick={() => setIsShow(true)}>
            <FaUserAlt /> &nbsp; Cadastrar / Logar
          </Button>
        )}

        <Button onClick={() => setIsShow(true)}>
          <FaPlus />
          &nbsp; Enviar
        </Button>
      </ContainerForm>
    </Nav>
  );
}
