import React from "react";
import { Followers } from "../../data/FollowersData";
import "./FollowersCard.css";

interface IFollowers {
  name: string;
  username: string;
  img: string;
}

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is following you</h3>

      {Followers.map((follower: IFollowers, id: number) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="followerImage" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
