import {
  Button,
  Input,
  ContainerForm,
  Nav,
  Icon,
  Profile,
} from "../styles/components/navbar";
import { FaUserAlt, FaSearch, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { setPostVisibility, setLoginVisibility } = useContext(ModalContext);
  const { userStatus } = useContext(UserContext);
  return (
    <Nav>
      <h1>Electro</h1>
      <ContainerForm onSubmit={(e) => e.preventDefault()}>
        <Icon>
          <FaSearch />
        </Icon>
        <Input placeholder="Procurar Lojas, Cupons, Produtos..." />
        {userStatus === "logged" ? (
          <>
            <Profile src="profile.jpg" />
            <Button onClick={() => setPostVisibility(true)}>
              <FaPlus />
              &nbsp; Adicionar Promoção
            </Button>
          </>
        ) : (
          <Button onClick={() => setLoginVisibility(true)}>
            <FaUserAlt /> &nbsp; Cadastrar / Logar
          </Button>
        )}
      </ContainerForm>
    </Nav>
  );
}
