import { useState } from "react";
import {
  Nav,
  Link,
  Input,
  SearchWrapper,
  Icon,
} from "../styles/components/topics";
import { FaSearch } from "react-icons/fa";

export default function Topics() {
  const [activeTab, setActiveTab] = useState("Destaque");
  return (
    <Nav>
      <Link
        isActive={activeTab === "Destaque"}
        onClick={() => setActiveTab("Destaque")}
      >
        Destaque
      </Link>
      <Link
        isActive={activeTab === "Novidades"}
        onClick={() => setActiveTab("Novidades")}
      >
        Novidades
      </Link>
      <Link
        isActive={activeTab === "Comentarios"}
        onClick={() => setActiveTab("Comentarios")}
      >
        Comentarios
      </Link>
      <SearchWrapper>
        <Icon>
          <FaSearch />
        </Icon>
        <Input />
      </SearchWrapper>
    </Nav>
  );
}
