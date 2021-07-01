import {
  Button,
  Nav,
  CardContainer,
  Container,
  TopContainer,
} from "../styles/index";
import {
  FaHeart,
  FaGamepad,
  FaPlug,
  FaBabyCarriage,
  FaCouch,
  FaLandmark,
  FaMask,
} from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Highlights from "../components/Highlights";
import Card from "../components/Card";
import TopUsersCard from "../components/TopUsersCard";
import TopShopCard from "../components/TopShopCard";
import ModalLogin from "../components/ModalLogin";
import ModalRegister from "../components/ModalRegister";
import ModalPost from "../components/ModalPost";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";
import { nanoid } from "nanoid";
import Topics from "../components/Topics";

export default function Home() {
  const [cards, setCards] = useState([]);
  const { loginVisibility, registerVisibility, postVisibility } = useContext(
    ModalContext
  );

  const getCards = async () => {
    setCards(await (await axios.get("http://localhost:3001/posts")).data);
  };
  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      <Nav>
        <Button>
          <FaPlug size={16} /> &nbsp; Eletrônicos
        </Button>
        <Button>
          <FaGamepad size={18} />
          &nbsp; Games e PC Gamer
        </Button>
        <Button>
          <FaCouch size={16} />
          &nbsp; Casa e Cozinha
        </Button>
        <Button>
          <FaMask size={16} />
          &nbsp; Moda
        </Button>
        <Button>
          <FaHeart size={16} />
          &nbsp; Saúde e Beleza
        </Button>
        <Button>
          <FaBabyCarriage size={16} />
          &nbsp; Família e Crianças
        </Button>
        <Button>
          <FaLandmark size={16} />
          &nbsp; Finanças
        </Button>
      </Nav>
      <Topics />
      <Highlights />
      <Container>
        <CardContainer>
          {cards.length > 0 &&
            cards.map((card) => (
              <Card
                user={card.user_name}
                company={card.company}
                description={card.description}
                title={card.title}
                value={card.value}
                userId={card.id}
                key={nanoid()}
              />
            ))}
        </CardContainer>
        <TopContainer>
          <TopUsersCard />
          <TopShopCard />
        </TopContainer>
      </Container>
      {loginVisibility && <ModalLogin />}
      {registerVisibility && <ModalRegister />}
      {postVisibility && <ModalPost getCards={getCards} />}
    </>
  );
}
