import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1d1f20;
  height: 64px;
  padding: 0 5.8vw;
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
