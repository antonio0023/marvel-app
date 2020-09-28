import React from "react";
import Search from "./Search";
import ContentComics from "../ContentComics";
import ContentCharacters from "../ContentCharacters";
import ContentStories from "../ContentStories";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/App.css";
import "../../styles/navbar.css";
const NavBar = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/">Comics</Link>
          </li>
          <li style={{ float: "right" }}>
            <Search />
          </li>
        </ul>
        <Route exact path="/" component={ContentComics}></Route>
        <Route exact path="/characters" component={ContentCharacters}></Route>
        <Route exact path="/stories" component={ContentStories}></Route>
      </Router>
    </>
  );
};

export default NavBar;
