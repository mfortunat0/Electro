import {
  Container,
  Content,
  Avatar,
  Button,
  ButtonGroup,
  Description,
  Name,
  PriceInformation,
  Title,
  Time,
} from "../styles/components/card";
import {
  FaFireAlt,
  FaClock,
  FaPlus,
  FaMinus,
  FaTabletAlt,
  FaComment,
  FaExternalLinkAlt,
  FaBookmark,
} from "react-icons/fa";
import Image from "next/image";

export default function Card() {
  return (
    <Container>
      <FaFireAlt style={{ color: "#F10037" }} size={28} />
      <Image src="/img2.jpg" height={194} width={162} objectFit="cover" />
      <Content>
        <div>
          <ButtonGroup>
            <Button>
              <FaMinus />
            </Button>
            <span>368°</span>
            <Button>
              <FaPlus />
            </Button>
          </ButtonGroup>
          <Time>
            <FaClock />
            &nbsp; 56 m atrás
          </Time>
        </div>
        <div>
          <Title>Carregador Portátil 10.000Mah Geonav | R$ 68</Title>
          <PriceInformation>
            <span>R$68</span>
            <span>Vendido por</span>
            <span>Amazon</span>
          </PriceInformation>
        </div>
        <Description>
          Forma de pagamento: à vista (R$94,90) Destaques: Menor preço de acordo
          com o Google Shopping Alto-falantes de 40 mm Som surround, redução de
          ruído externo Microfone omn
        </Description>
        <div>
          <Avatar src="/avatar.jpg" />
          <Name>lucas.fernandesYvK</Name>
          <FaTabletAlt style={{ color: "#8E949B" }} />
          <ButtonGroup>
            <Button>
              <FaBookmark size={18} />
            </Button>
            <Button>
              <FaComment size={18} /> &nbsp; 3
            </Button>
            <Button>
              Pegar promoção &nbsp;
              <FaExternalLinkAlt size={18} />
            </Button>
          </ButtonGroup>
        </div>
      </Content>
    </Container>
  );
}
