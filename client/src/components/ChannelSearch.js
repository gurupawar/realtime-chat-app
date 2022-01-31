import React, { useState, useEffect } from "react";
import { getChannel, useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (text) => {
    try {
      //TODO: fetch channels
    } catch (error) {
      setQuery("");
      console.log(error);
    }
  };
  const onSerach = (e) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  };
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-serach__input__icon">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="channel-search__input__text"
          placeholder="Search"
          value={query}
          onChange={onSerach}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
