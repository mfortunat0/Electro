import {
  Container,
  Title,
  ContainerTitle,
  ContainerUsers,
  Avatar,
  AvatarName,
  ContainerAvatar,
} from "../styles/components/topUsersCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

interface Users {
  id: number;
  name: string;
  email: string;
  password: string;
}

export default function TopCard() {
  const [users, setUsers] = useState<Users[]>([]);

  const getUsers = async () => {
    setUsers(await (await axios.get("http://localhost:3001/users")).data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.length > 0 && (
        <Container>
          <ContainerTitle>
            <Title>Top Usuarios</Title>
          </ContainerTitle>
          <ContainerUsers>
            {users.map((user) => {
              return (
                <ContainerAvatar key={nanoid()}>
                  <Avatar src={`http://localhost:3001/user/${user.id}.jpg`} />
                  <AvatarName>{user.name}</AvatarName>
                </ContainerAvatar>
              );
            })}
          </ContainerUsers>
        </Container>
      )}
    </>
  );
}
