import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirPlaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

import React from "react";

export default function ({ id, username, userImg, img, caption }) {
  return (
    <div>
      {/* Header */}
      <div className="bg-white my-7 border rounded-sm">
          <div className="flex items-center p-5"></div>
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* img */}

      {/* Butotns */}

      {/* caption */}

      {/* comments */}

      {/* input box */}
    </div>
  );
}
