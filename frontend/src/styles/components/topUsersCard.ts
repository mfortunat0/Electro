import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  background-color: #fff;
  flex-wrap: wrap;
  margin-top: 2vh;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #8e949b;
`;

export const Title = styled.h2`
  font-size: 14px;
`;

export const ContainerUsers = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 15px 10px 15px;
  align-items: center;
  height: 300px;
`;

export const ContainerAvatar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 8px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const AvatarName = styled.p`
  font-size: 12px;
  font-weight: bold;
  margin-left: 8px;
  text-transform: capitalize;
`;
