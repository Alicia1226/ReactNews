import React from 'react';
import './Card.css';

function Card(props) {

    return (
      <div>
        <h2>{props.news.title}</h2>
        <img id="img2" src={props.news.urlToImage} alt=""/>
        <p>{props.news.description}</p>
        <div class="button"> 
        <button onClick={props.remove}>Borrar noticia</button>
        </div>
       
      </div>
    );
  }

export default Card;