import React from "react";
import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "sssangha",
    userImg: " https://links.papareact.com/Jke",
    img: "https://links.papareact.com/jke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithism!",
  },
  {
    id: "123",
    username: "sssangha",
    userImg: " https://links.papareact.com/Jke",
    img: "https://links.papareact.com/jke",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON for the YT algorithism!",
  },
];

export default function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => {
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.img}
          caption={post.caption}
        />;
      })}
    </div>
  );
}
