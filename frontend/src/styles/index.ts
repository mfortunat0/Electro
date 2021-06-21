import styled from "styled-components";

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

export const Button = styled.button`
  color: #fff;
  outline: unset;
  border: unset;
  border-radius: 4px;
  background-color: #012fd6;
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
