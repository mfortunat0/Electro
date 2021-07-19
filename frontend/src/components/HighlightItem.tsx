import { Description, Item } from "../styles/components/highlights";
import Image from "next/image";

export default function HighlightItem() {
  return (
    <Item>
      <Image src="/img.jpg" width={70} height={70} objectFit="cover" />
      <Description>
        <p>Vivo Valoriza - Ação #VivoPelosPets </p>
        <span>R$187</span>
      </Description>
    </Item>
  );
}
