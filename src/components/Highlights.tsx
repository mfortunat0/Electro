import {
  Dropdown,
  Header,
  Text,
  Container,
  Button,
  Content,
  Description,
  Item,
  Arrows,
} from "../styles/components/highlights";
import {
  FaWhmcs,
  FaCaretDown,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import Image from "next/image";

export default function Highlights() {
  return (
    <Container>
      <Header>
        <Text>Melhores do</Text>
        <Dropdown>
          Mês <FaCaretDown />
        </Dropdown>
        <Button>
          <FaWhmcs />
        </Button>
      </Header>
      <Content>
        <Arrows>
          <FaAngleLeft />
        </Arrows>
        <Item>
          <Image src="/img.jpg" width={70} height={70} objectFit="cover" />
          <Description>
            <p>
              <span>7273°</span> Vivo Valoriza - Ação #VivoPelosPets{" "}
            </p>
            <span>R$187</span>
          </Description>
        </Item>
        <Item>
          <Image src="/img.jpg" width={70} height={70} objectFit="cover" />
          <Description>
            <p>
              <span>7273°</span> Vivo Valoriza - Ação #VivoPelosPets{" "}
            </p>
            <span>R$187</span>
          </Description>
        </Item>
        <Item>
          <Image src="/img.jpg" width={70} height={70} objectFit="cover" />
          <Description>
            <p>
              <span>7273°</span> Vivo Valoriza - Ação #VivoPelosPets{" "}
            </p>
            <span>R$187</span>
          </Description>
        </Item>
        <Item>
          <Image src="/img.jpg" width={70} height={70} objectFit="cover" />
          <Description>
            <p>
              <span>7273°</span> Vivo Valoriza - Ação #VivoPelosPets{" "}
            </p>
            <span>R$187</span>
          </Description>
        </Item>
        <Arrows>
          <FaAngleRight />
        </Arrows>
      </Content>
    </Container>
  );
}
