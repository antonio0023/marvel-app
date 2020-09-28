import React, { useEffect, useState } from "react";
import StoriesCard from "./StoriesCard";
import axios from "axios";
const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const TSTAMP = 23;
const HASH = "71324bdab65a361050de1ed0792211f4";
const URL_CUSTOM = `http://gateway.marvel.com/v1/public/stories?ts=${TSTAMP}&apikey=${API_PUBLIC_KEY}&hash=${HASH}`;

const Stories = () => {
  const [Stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(URL_CUSTOM);
      setStories(result.data.data.results);
      setIsLoading(false);
      console.log(result);
    };
    fetchItems();
  }, []);

  return (
    <section className="cards">
      {Stories.map((stories, id) => (
        <StoriesCard key={id} stories={stories} isLoading={isLoading} />
      ))}
    </section>
  );
};

export default Stories;
