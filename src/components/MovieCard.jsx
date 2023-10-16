import React from 'react'
import "./MovieCard.css"
import {useNavigate} from "react-router-dom"

function MovieCard({movie}) {
  const navigate = useNavigate(); 
  return (
    <div className='movie-card' onClick={()=>navigate(`/${movie.imdbID}`)}>
      <img src={movie.Poster} alt={movie.Title} />
      <hr/>
      <h4>{movie.Title}</h4>
      <hr/>
      <p>{movie.Year}</p>
      
    </div>
  )
}

export default MovieCard