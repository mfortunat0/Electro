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
          <Avatar src="/profile.jpg" />
          <Name>Admin</Name>
          <ButtonGroup>
            <Button>
              <FaBookmark size={18} />
            </Button>
            <Button>
              Obter &nbsp;
              <FaExternalLinkAlt size={18} />
            </Button>
          </ButtonGroup>
        </div>
      </Content>
    </Container>
  );
}
