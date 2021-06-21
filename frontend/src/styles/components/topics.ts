import styled from "styled-components";

interface ILink {
  isActive: boolean;
}

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 5.8vw;
  :nth-child(2) {
    background-color: #000f8b;
    justify-content: space-between;
  }
  :nth-child(3) {
    background-color: #fff;
    height: 52px;
  }
`;

export const Link = styled.a<ILink>`
  color: ${(p) => (p.isActive ? "#0033D1" : "#595d62")};
  border-bottom: 3px solid ${(p) => (p.isActive ? "#0033D1" : "transparent")};
  height: 100%;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 0 12px;
  font-size: 14px;
  transition: color 0.3s, border 0.3s;
  :first-child {
    margin-left: 0px;
  }
  :hover {
    color: #0033d1;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  height: 35px;
`;

export const Icon = styled.div`
  border-radius: 4px 0 0 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background-color: #0033d1;
  height: 100%;
`;

export const Input = styled.input`
  border-radius: 0 4px 4px 0;
  border: unset;
  outline: none;
  background-color: #0033d1;
  height: 100%;
  color: #fff;
`;
