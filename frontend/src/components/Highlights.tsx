import {
  Header,
  Text,
  Container,
  Content,
} from "../styles/components/highlights";
import Item from "../components/HighlightItem";

export default function Highlights() {
  return (
    <Container>
      <Header>
        <Text>Melhores da semana</Text>
      </Header>
      <Content>
        <Item />
        <Item />
        <Item />
        <Item />
      </Content>
    </Container>
  );
}
