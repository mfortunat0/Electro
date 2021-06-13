import {
  Button,
  Nav,
  Link,
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
import TopGroupCard from "../components/TopGroupCard";
import TopShopCard from "../components/TopShopCard";
import ModalLogin from "../components/ModalLogin";
import ModalRegister from "../components/ModalRegister";
import ModalPost from "../components/ModalPost";
import { ModalContext } from "../contexts/ModalContext";
import axios from "axios";
import { nanoid } from "nanoid";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Destaque");
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
      <Nav>
        <Link
          isActive={activeTab === "Destaque"}
          onClick={() => setActiveTab("Destaque")}
        >
          Destaque
        </Link>
        <Link
          isActive={activeTab === "Novidades"}
          onClick={() => setActiveTab("Novidades")}
        >
          Novidades
        </Link>
        <Link
          isActive={activeTab === "Comentarios"}
          onClick={() => setActiveTab("Comentarios")}
        >
          Comentarios
        </Link>
      </Nav>
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
                key={nanoid()}
              />
            ))}
        </CardContainer>
        <TopContainer>
          <TopGroupCard />
          <TopShopCard />
        </TopContainer>
      </Container>
      {loginVisibility && <ModalLogin />}
      {registerVisibility && <ModalRegister />}
      {postVisibility && <ModalPost getCards={getCards} />}
    </>
  );
}
