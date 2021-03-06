import React from "react";

export default function Story({ img, username }) {
  return (
    <div>
      <img
        className="h-14 w-14 rounded-full p-[1.5px]
         border-red-500 border-2 object-contain cusror-pointer
      hover:scale-110 transition trasnform duration-200 ease-out"
        src={img}
        alt=""
      />
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
}
