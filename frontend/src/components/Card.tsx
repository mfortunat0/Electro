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
  postId: string;
  userId: string;
  userName: string;
}

export default function Card({
  title,
  description,
  value,
  company,
  postId,
  userId,
  userName,
}: IProps) {
  console.log(userName);
  return (
    <Container>
      <AiFillThunderbolt style={{ color: "#0033D1" }} size={28} />
      <Image
        src={`http://backend:3001/uploads/photo/post/${postId}.jpg`}
        height={262}
        width={312}
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
          <Avatar
            src={`http://localhost:3001/uploads/photo/profile/${userId}.jpg`}
          />
          <Name>{userName}</Name>
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
