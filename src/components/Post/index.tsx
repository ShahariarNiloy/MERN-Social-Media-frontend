import React from "react";
import "./Post.css";

interface IPostData {
  img: string;
  name: string;
  desc: string;
  likes: number;
  liked: boolean;
}

const Post = ({ data }: { data: IPostData }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />

      <div className="postReact">
        <img
          src={data.liked ? "/images/like.png" : "/images/notlike.png"}
          alt=""
        />
        <img src={"/images/comment.png"} alt="" />
        <img src={"/images/share.png"} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {data.likes} likes
      </span>

      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
