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
  color: #0033d1;
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
  background-color: transparent;
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
    color: #0033d1;
    font-size: 12px;
    font-weight: bold;
  }
`;
