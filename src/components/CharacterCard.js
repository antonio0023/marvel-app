import React from "react";
import "../styles/App.css";

export default function CharacterCard(props) {
  return props.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="container">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <img
              src={props.characters.thumbnail.path + "/standard_medium.jpg"}
              alt="Comic thumbnail"
            />
          </div>
          <div className="card-back">
            <h1>Name: {props.characters.name}</h1>
            <p>Status: {props.characters.status}</p>
            <p>Series: {props.characters.series.available}</p>
            <p>Comics: {props.characters.comics.items.name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
