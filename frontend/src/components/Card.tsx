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
import { FaClock, FaExternalLinkAlt } from "react-icons/fa";
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
  time: Date;
  link: string;
}

export default function Card({
  title,
  description,
  value,
  company,
  postId,
  userId,
  userName,
  time,
  link,
}: IProps) {
  const cardTime = new Date(time);
  const day = cardTime.getDay();
  const month = cardTime.getMonth();
  const year = cardTime.getFullYear();
  return (
    <Container>
      <AiFillThunderbolt style={{ color: "#0033D1" }} size={28} />
      <Image
        src={`http://backend:3001/post/${postId}.jpg`}
        height={262}
        width={312}
      />
      <Content>
        <div>
          <Time>
            <FaClock />
            &nbsp;
            {`${String(day).padStart(2, "0")}/${String(month).padStart(
              2,
              "0"
            )}/${String(Math.abs(year)).padStart(2, "0")}`}
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
          <Avatar src={`http://localhost:3001/user/${userId}.jpg`} />
          <Name>{userName}</Name>
          <ButtonGroup>
            {/* }
            <Button>
              <FaBookmark size={18} />
            </Button>
              { */}
            <Button onClick={() => window.open(link)}>
              Obter &nbsp;
              <FaExternalLinkAlt size={18} />
            </Button>
          </ButtonGroup>
        </div>
      </Content>
    </Container>
  );
}
