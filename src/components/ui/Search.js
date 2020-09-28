import React, { useState } from "react";
import "../../styles/App.css";
const Search = () => {
  const [text, setText] = useState("");
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Search Character"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        ></input>
      </form>
    </div>
  );
};

export default Search;
