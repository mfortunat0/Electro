import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 0 5.8vw;
  background-color: #34373b;
  height: 56px;
  align-items: center;
`;

export const Logo = styled.div`
  background-size: 242px 30px;
  background-image: url("logo.svg");
  height: 30px;
  min-width: 121px;
  position: relative;
  top: -3px;
`;

export const Dropdown = styled.button`
  background-color: #595d62;
  height: 100%;
  color: #fff;
  border: unset;
  outline: unset;
  font-weight: bold;
  padding: 0 12px;
  width: 138px;
  margin-left: 1vw;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  transition: background-color 0.3s;
  :hover {
    background-color: #1d1f20;
  }
`;

export const Icon = styled.span`
  border-radius: 4px 0 0 4px;
  background-color: #fff;
  height: 65%;
  display: flex;
  align-items: center;
  padding-left: 12px;
  color: #c1c6cb;
`;

export const Input = styled.input`
  height: 65%;
  border: unset;
  outline: unset;
  border-radius: 0 4px 4px 0;
  padding: 12px;
  width: 30%;
`;

export const Button = styled.button`
  height: 65%;
  border: unset;
  outline: unset;
  border-radius: 4px;
  margin-left: 20px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  :first-of-type {
    background-color: #030c13;
    transition: background-color 0.3s;
    :hover {
      background-color: #595d62;
    }
  }
  :last-of-type {
    background-color: #ff7323;
  }
`;

export const ContainerForm = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-end;
`;
