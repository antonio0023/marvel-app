import React from "react";
import "../styles/App.css";

export default function StoriesCard(props) {
  return props.isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="container">
      <div className="card">
        <h1>ID: {props.stories.id}</h1>
        <p>Description: {props.stories.title}</p>
        <p>Series: {props.stories.series.available}</p>
        <p>Comics: {props.stories.comics.items.name}</p>
      </div>
    </section>
  );
}
