import React, {useEffect, useState} from 'react'
import ComicCard from './ComicCard'
import axios from 'axios'
const API_PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_KEY
const TSTAMP=23
const HASH = '71324bdab65a361050de1ed0792211f4'
const URL_CUSTOM=`http://gateway.marvel.com/v1/public/comics?ts=${TSTAMP}&apikey=${API_PUBLIC_KEY}&hash=${HASH}`

const Comics = () => {

    const [Comics, GetComics] = useState([]);
    useEffect(()=>{
        axios
            .get(URL_CUSTOM )
            .then(response =>{
                GetComics(response.data.data.results)
                console.log(response.data.data.results)
            })
  .catch( e => console.log(e))
    },[])

    return (
        <section className="comics">
            {Comics.map((comics, id) =><ComicCard key={id} comics={comics} />)}
        </section>
    )
}

export default Comics
