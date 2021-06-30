import { Container } from "../styles/components/topUsersCard";
import { FaDesktop, FaPlaystation, FaTag, FaAppleAlt } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

export default function TopCard() {
  return (
    <Container>
      <div>
        <span>Top Usuarios</span>
      </div>
      <div>
        <span>
          <button>
            <FaDesktop />
          </button>
          Notebook
        </span>
        <span>
          <button>
            <FaPlaystation />
          </button>
          Jogos
        </span>
        <span>
          <button>
            <IoGameController />
          </button>
          Games e PC Gamer
        </span>
        <span>
          <button>
            <FaAppleAlt />
          </button>
          Supermercado
        </span>
        <span>
          <button>
            <FaTag />
          </button>
          Gratis
        </span>
      </div>
    </Container>
  );
}
