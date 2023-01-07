import React from "react";
import "./Posts.css";
import Post from "../Post";
import { PostsData } from "../../data/PostsData";

interface IPostData {
  img: string;
  name: string;
  desc: string;
  likes: number;
  liked: boolean;
}
const Posts = () => {
  return (
    <div className="Posts">
      {PostsData.map((post: IPostData, id: number) => {
        return <Post data={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
