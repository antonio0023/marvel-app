import React from "react";
import Characters from "./Characters";
import "../styles/App.css";

const ContentCharacters = () => {
  return (
    <div className="contenido">
      <div className="row">
        <Characters />
      </div>
    </div>
  );
};

export default ContentCharacters;
