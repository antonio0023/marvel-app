import React, {useState, useEffect} from 'react'
import '../App.css'

export default function ComicCard(props){
    return (
            <div className="column">
                <div className="card">
                <img src={props.comics.thumbnail} alt="Comic thumbnail"/>
                    <h1>{props.comics.title}</h1>
                    <h4>ID: {props.comics.id}</h4>
                    <p>MODIFIED: {props.comics.modified}</p>
                    <p>PAGE COUNT: {props.comics.pageCount}</p>
                    <p id="desc">DESCRIPTION: {props.comics.description}</p>
                </div>
            </div>

    )
}
