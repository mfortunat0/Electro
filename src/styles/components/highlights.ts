import styled from "styled-components";

export const Container = styled.section`
  margin: 0 5.8vw;
  padding: 15px;
  background-color: #fff;
  margin-top: 2vh;
  border-radius: 4px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #8e949b;
`;

export const Dropdown = styled.button`
  border: unset;
  outline: unset;
  color: #ff7323;
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff7323;
  border: unset;
  outline: unset;
  background-color: transparent;
  font-size: 25px;
  margin-left: auto;
  cursor: pointer;
`;

export const Content = styled.section`
  height: 70px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.div`
  display: flex;
`;

export const Description = styled.div`
  width: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;

  p {
    font-size: 12px;
    line-height: 18px;
    font-weight: bold;
    color: #3b3740;
    span {
      color: #f4003c;
    }
  }
  span {
    color: #ff7323;
    font-size: 12px;
    font-weight: bold;
  }
`;

export const Arrows = styled.button`
  border: unset;
  outline: unset;
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 20px;
  cursor: pointer;
  :first-child {
    margin-right: 10px;
  }
  :last-child {
    color: #ff7323;
    margin-left: 10px;
  }
`;
