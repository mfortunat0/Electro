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
  userId: string;
}

export default function Card({
  title,
  description,
  value,
  company,
  user,
  userId,
}: IProps) {
  console.log(`${window.location.href}:3001/uploads/photo/post/${userId}.jpg`);
  return (
    <Container>
      <AiFillThunderbolt style={{ color: "#0033D1" }} size={28} />
      <Image
        src={`http://localhost:3001/uploads/photo/post/${userId}.jpg`}
        height={194}
        width={162}
        objectFit="cover"
      />
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
