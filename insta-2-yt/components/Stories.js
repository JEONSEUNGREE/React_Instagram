import React, { useState, useEffect } from "react";
import Story from "./Story";

export default function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user?size=20"
      );

      const reseponseData = await response.json();
      setSuggestions(reseponseData);
    };
    fetchUsersData();
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 
    bg-white mt-8 border-gray-200 border overflow-x-scroll
    scrollbar-thin scrollbar-thumb-black"
    >
      {suggestions &&
        suggestions.map((profile) => (
          <Story
            key={profile.id}
            id={profile.id}
            username={profile.username}
            img={profile.avatar}
          />
        ))}
      {!suggestions && <p>there is no data</p>}
    </div>
  );
}
