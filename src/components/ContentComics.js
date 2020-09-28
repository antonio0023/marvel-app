import React from "react";
import Comics from "./Comics";
import "../styles/App.css";

const ContentComics = () => {
  return (
    <div className="container">
      <div className="row">
        <Comics />
      </div>
    </div>
  );
};

export default ContentComics;
