import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const TSTAMP = 23;
const HASH = "71324bdab65a361050de1ed0792211f4";
const URL_CUSTOM = `http://gateway.marvel.com/v1/public/characters?ts=${TSTAMP}&apikey=${API_PUBLIC_KEY}&hash=${HASH}`;

const Characters = () => {
  const [Characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(URL_CUSTOM);
      setCharacters(result.data.data.results);
      setIsLoading(false);
      console.log(result);
    };
    fetchItems();
  }, []);

  return (
    <section className="cards">
      {Characters.map((characters, id) => (
        <CharacterCard key={id} characters={characters} isLoading={isLoading} />
      ))}
    </section>
  );
};

export default Characters;
