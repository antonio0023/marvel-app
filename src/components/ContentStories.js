import React from "react";
import Stories from "./Stories";
import "../styles/App.css";

const ContentStories = () => {
  return (
    <div className="contenido">
      <div className="row">
        <Stories />
      </div>
    </div>
  );
};

export default ContentStories;
