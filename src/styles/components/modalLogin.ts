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
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
