import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  background-color: #fff;
  flex-wrap: wrap;
  margin-top: 2vh;

  div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #8e949b;

    span {
      font-size: 14px;
    }
    button {
      color: #8e949b;
      font-size: 16px;
    }
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 15px 10px 15px;
    height: 300px;

    span {
      color: #34373b;
      font-weight: bold;
      font-size: 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
      button {
        padding: 5px;
        border: 1px solid #d0d5db;
        display: flex;
        align-items: center;
        margin-right: 20px;
        border-radius: 8px;
        font-size: 24px;
        color: #34373b;
      }
    }
  }
`;
