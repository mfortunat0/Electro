import { Container } from "../styles/components/topShopCard";
import { FaTimes } from "react-icons/fa";

export default function TopCard() {
  return (
    <Container>
      <div>
        <span>Top Lojas</span>
        <button>
          <FaTimes />
        </button>
      </div>
      <div>
        <img src="/shop.jpg" width={54} height={54} />
        <img src="/shop.jpg" width={54} height={54} />
        <img src="/shop.jpg" width={54} height={54} />
        <img src="/shop.jpg" width={54} height={54} />
        <img src="/shop.jpg" width={54} height={54} />
        <img src="/shop.jpg" width={54} height={54} />
      </div>
    </Container>
  );
}
