import styled from "styled-components";

export const Container = styled.main`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

export const Dialog = styled.dialog`
  display: flex;
  margin: auto;
  width: 45%;
  height: 80%;
  border: unset;
  border-radius: 8px;
  div,
  form {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }
  div:first-child {
    padding: 20px 20px;
    background-color: #f6f7f9;
    h2 {
      color: #c3ced7;
      font-size: 16px;
      align-self: flex-start;
    }
    img {
      height: 25%;
    }
    h3,
    p {
      text-align: center;
      color: #34373b;
      line-height: 24px;
    }
    button,
    a {
      width: 100%;
      text-align: center;
      font-weight: bold;
      padding: 10px;
      border-radius: 4px;
      font-size: 14px;
    }

    a {
      color: #ff7323;
    }
    button {
      color: #fff;
      background-color: #ff7323;
    }
  }
  form {
    padding: 10px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    button:first-child {
      align-self: flex-end;
      font-size: 20px;
      color: #8d8f92;
      cursor: pointer;
    }
    h2 {
      color: #343746;
      font-size: 18px;
      margin: 1px 0 10px 0;
    }
    h2:first-child {
      color: blue;
    }
    button:nth-child(3),
    button:nth-child(4),
    button:nth-child(5),
    button:last-child {
      width: 100%;
      font-weight: bold;
      padding: 10px;
      border-radius: 4px;
      font-size: 14px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
    }
    button:nth-child(3) {
      background-color: #2d5a95;
    }
    button:nth-child(4) {
      color: #373a3e;
      border: 1px solid #d0d5db;
    }
    button:nth-child(5) {
      color: #000;
      border: 1px solid #000;
      margin-bottom: 10px;
    }
    button:last-child {
      color: #fff;
      background-color: #0060a1;
      margin-top: auto;
    }
    h3 {
      color: #8d8f92;
      font-size: 13px;
      margin-bottom: 5px;
      margin-top: 10px;
    }
    input {
      outline: unset;
      border: 1px solid #d0d5db;
      padding: 10px 20px;
      border-radius: 4px;
      width: 100%;
      font-size: 16px;
    }
    span {
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: 20px;
      a {
        color: #0060a1;
        font-weight: bold;
        margin-left: auto;
      }
      color: #8e949b;
      button:first-child {
        color: #0060a1;
        margin-right: 10px;
        background-color: transparent;
        width: 42px;
      }
    }
  }
`;
