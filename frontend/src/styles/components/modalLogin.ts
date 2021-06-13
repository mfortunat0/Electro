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
  width: 25%;
  height: 90%;
  border: unset;
  border-radius: 8px;

  form {
    width: 100%;
    padding: 10px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h2 {
      color: #343746;
      font-size: 18px;
      margin: 10px 0 10px 0;
    }
    h2:first-child {
      color: blue;
    }
    button {
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
    button:first-child {
      align-self: flex-end;
      font-size: 20px;
      color: #8d8f92;
      cursor: pointer;
      width: 20px;
      padding: 0px;
      margin-bottom: 10px;
    }

    button:nth-child(2) {
      background-color: #2d5a95;
    }
    button:nth-child(3) {
      color: #373a3e;
      border: 1px solid #d0d5db;
    }
    button:nth-child(4) {
      color: #000;
      border: 1px solid #000;
      margin-bottom: 10px;
    }
    button:nth-of-type(5) {
      color: #0060a1;
      border: unset;
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
    p {
      color: red;
      font-size: 12px;
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
      margin-top: 18px;
      margin-bottom: 5px;
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
