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
  min-width: 350px;
  max-height: 90%;
  border: unset;
  border-radius: 8px;
`;

export const FormContainer = styled.form`
  width: 100%;
  padding: 10px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: #0060a1;
    border-radius: 4px;
  }
`;

const DefaultButton = styled.button`
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
`;

export const ButtonClose = styled(DefaultButton)`
  align-self: flex-end;
  font-size: 20px;
  color: #8d8f92;
  cursor: pointer;
  width: 20px;
  padding: 0px;
  margin-bottom: 10px;
`;

export const ButtonPrimary = styled(DefaultButton)`
  color: #0060a1;
  border: unset;
  margin-bottom: 10px;
`;

export const ButtonSecondary = styled(DefaultButton)`
  color: #fff;
  background-color: #0060a1;
  margin-top: auto;
`;

export const Title = styled.h2`
  color: #343746;
  font-size: 18px;
  margin: 10px 0 10px 0;
`;

export const SubTitle = styled.h3`
  color: #8d8f92;
  font-size: 13px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const DefaultInput = `
  outline: unset;
  border: 1px solid #d0d5db;
  padding: 10px 20px;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
`;

export const InputFile = styled.input.attrs({ type: "file" })`
  ${DefaultInput}
  display: none;
`;

export const InputEmail = styled.input.attrs({ type: "email" })`
  ${DefaultInput}
`;

export const InputPassword = styled.input.attrs({ type: "password" })`
  ${DefaultInput}
`;

export const InputText = styled.input.attrs({ type: "text" })`
  ${DefaultInput}
`;

export const InputNumber = styled.input.attrs({ type: "number" })`
  ${DefaultInput}
`;

export const InputUrl = styled.input.attrs({ type: "url" })`
  ${DefaultInput}
`;

export const WrapperPreviewImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  border-radius: 4px;
  font-size: 16px;
  background-color: #0060a1;
  padding: 10px 20px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

export const Wrapper = styled.span`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 5px;
  color: #8e949b;
`;

export const Link = styled.a`
  color: #0060a1;
  font-weight: bold;
  margin-left: auto;
`;

export const ButtonLogged = styled.button`
  color: #0060a1;
  margin-right: 10px;
  background-color: transparent;
  width: 42px;
`;
