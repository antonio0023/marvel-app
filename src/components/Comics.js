import React, { useEffect, useState } from "react";
import ComicCard from "./ComicCard";
import axios from "axios";
const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const TSTAMP = 23;
const HASH = "71324bdab65a361050de1ed0792211f4";
const URL_CUSTOM = `http://gateway.marvel.com/v1/public/comics?ts=${TSTAMP}&apikey=${API_PUBLIC_KEY}&hash=${HASH}`;

const Comics = () => {
  const [Comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(URL_CUSTOM);
      setComics(result.data.data.results);
      setIsLoading(false);
      console.log(result);
    };
    fetchItems();
  }, []);

  return (
    <section className="cards">
      {Comics.map((comics, id) => (
        <ComicCard key={id} comics={comics} isLoading={isLoading} />
      ))}
    </section>
  );
};

export default Comics;
