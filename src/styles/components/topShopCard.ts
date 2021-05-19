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
    flex-wrap: wrap;
    padding: 30px 15px 10px 15px;

    img {
      padding: 2px;
      border: 1px solid #d0d5db;
      border-radius: 50%;
    }
  }
`;
