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
    background-color: #1d1f20;
    justify-content: space-between;
  }
  :nth-child(3) {
    background-color: #fff;
    height: 52px;
  }
`;

export const Button = styled.button`
  color: #fff;
  outline: unset;
  border: unset;
  border-radius: 4px;
  background-color: #34373b;
  font-size: 12px;
  padding: 10px 14px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.3s;
  :hover {
    background-color: #595d62;
  }
`;

export const Link = styled.a<ILink>`
  color: ${(p) => (p.isActive ? "#ff7323" : "#595d62")};
  border-bottom: 3px solid ${(p) => (p.isActive ? "#ff7323" : "transparent")};
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
    color: #ff7323;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 0 5.8vw;
  padding: 0 0 10vh 0;
`;

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const TopContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 20%;
`;
