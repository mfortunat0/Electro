import { createContext, useState } from "react";

interface Post {
  id: string;
  title: string;
  description: string;
  company: string;
  value: number;
  userName: string;
  userId: string;
  link: string;
}

interface IPostContext {
  post: Post | null;
  setPost: (post: Post | null) => void;
}

export const PostContext = createContext({} as IPostContext);

export default function PostContextProvider({ children }) {
  const [post, setPost] = useState<Post>();
  return (
    <PostContext.Provider value={{ setPost, post }}>
      {children}
    </PostContext.Provider>
  );
}
