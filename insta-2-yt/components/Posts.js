import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "1",
    username: "sssangha",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithism!",
  },
  {
    id: "2",
    username: "sssangha",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithism!",
  },
];

export default function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          img={post.img}
          userImg={post.userImg}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
