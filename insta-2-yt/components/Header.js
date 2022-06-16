import React from "react";
import Image from "next/image";

// heroIcom install
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    //   페이지 상단에 고정하기위한 스크롤을 내렸을때도
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* // left */}
        {/* large screen에서는 보이게 설정 */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          {/* 도메인이 존재하는경우 config에 적용해주어야함 */}
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            // 이미지가 늘어나 보이지않도록 조정
            objectFit="contain"
          />
        </div>
        {/* large screen에서는 보이지 않게 설정 */}

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* // middle-Search input field */}
        {/* hero Icon install */}
        <div>
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            {/* border 기본 css tailwind.css form css로 오버라이딩사용 */}
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray 
            focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* // right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-centers justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img
            src="https://avatars.githubusercontent.com/u/24712956?v=4"
            alt="profile pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
