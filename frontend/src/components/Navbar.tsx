import { Button, Container, Nav, Profile } from "../styles/components/navbar";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { setPostVisibility, setLoginVisibility } = useContext(ModalContext);
  const { setUser, user } = useContext(UserContext);
  return (
    <Nav>
      <h1>Electro</h1>
      <Container>
        {user?.name ? (
          <>
            <Profile
              src={`http://localhost:3001/uploads/photo/profile/${user.id}.jpg`}
            />
            <Button onClick={() => setPostVisibility(true)}>
              <FaPlus />
              &nbsp; Adicionar Promoção
            </Button>
            <Button onClick={() => setUser(null)}>Sair</Button>
          </>
        ) : (
          <Button onClick={() => setLoginVisibility(true)}>
            <FaUserAlt /> &nbsp; Cadastrar / Logar
          </Button>
        )}
      </Container>
    </Nav>
  );
}
