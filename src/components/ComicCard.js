import React from "react";
import "../styles/App.css";

export default function ComicCard(props) {
  return props.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="container">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img
              src={props.comics.thumbnail.path + "/standard_medium.jpg"}
              alt="Comic thumbnail"
            />
          </div>
          <div className="card-back">
            <h1>Name: {props.comics.title}</h1>
            <p>Issue Number: {props.comics.issueNumber}</p>
            <p>Description: {props.comics.variantDescription}</p>
            <p>Language: {props.comics.textObjects.language}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
