import styled from "styled-components";

export const Container = styled.section`
  padding: 15px;
  background-color: #fff;
  margin-top: 2vh;
  border-radius: 4px;
  display: flex;
  height: 262px;
  gap: 3px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2vw;
  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Time = styled.p`
  margin-left: auto;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #575c60;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: unset;
  outline: unset;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  padding: 3px;
  transition: background-color 0.3s;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 3px;
  border-radius: 4px;
  margin-left: auto;
  ${Button} {
    color: #585c60;
    border: 1px solid #d0d5db;
    border-radius: 4px;
    padding: 10px;
    margin: 0 5px;
  }
  ${Button}:last-child {
    background-color: #0033d1;
    color: white;
    font-size: 15px;
  }
`;

export const Title = styled.h1`
  color: #34373b;
  width: 100%;
`;

export const PriceInformation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 1vh;
  span:first-child {
    color: #ffce37;
    font-weight: bold;
    font-size: 18px;
    margin-right: 20px;
    position: relative;
    ::after {
      content: "";
      width: 1px;
      height: 110%;
      background-color: #d0d5db;
      position: absolute;
      right: -10px;
    }
  }
  span:nth-child(2) {
    color: #9994a3;
    margin-right: 3px;
    font-size: 12px;
  }
  span:last-child {
    font-size: 12px;
    color: #0033d1;
    font-weight: bold;
  }
`;

export const Description = styled.p`
  color: #34373b;
  font-size: 14px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

export const Name = styled.span`
  font-weight: bold;
  margin: 0 6px;
  font-size: 12px;
  color: #34373b;
`;
