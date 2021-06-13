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
import { FaClock, FaExternalLinkAlt, FaBookmark } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import Image from "next/image";

interface IProps {
  title: string;
  description: string;
  value: number;
  company: string;
  user: string;
}

export default function Card({
  title,
  description,
  value,
  company,
  user,
}: IProps) {
  return (
    <Container>
      <AiFillThunderbolt style={{ color: "#0033D1" }} size={28} />
      <Image src="/thumbnail.svg" height={194} width={162} objectFit="cover" />
      <Content>
        <div>
          <Time>
            <FaClock />
            &nbsp; 56 m atrás
          </Time>
        </div>
        <div>
          <Title>{title}</Title>
          <PriceInformation>
            <span>R${value}</span>
            <span>Vendido por</span>
            <span>{company}</span>
          </PriceInformation>
        </div>
        <Description>{description}</Description>
        <div>
          <Avatar src="/profile.jpg" />
          <Name>{user}</Name>
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
