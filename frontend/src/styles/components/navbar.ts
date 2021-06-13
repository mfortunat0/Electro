import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  padding: 0 5.8vw;
  background-color: #012fd6;
  height: 56px;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  h1 {
    color: #fff;
  }
`;

export const Icon = styled.span`
  border-radius: 4px 0 0 4px;
  background-color: #fff;
  height: 65%;
  display: flex;
  align-items: center;
  padding-left: 12px;
  color: #012fd6;
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
  color: #000;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  background-color: #ffce37;
`;

export const Profile = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin-left: 20px;
`;

export const ContainerForm = styled.form`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-end;
`;
