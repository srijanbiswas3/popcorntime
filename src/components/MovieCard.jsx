import React from 'react'
import "./MovieCard.css"
import {useNavigate} from "react-router-dom"

function MovieCard({movie}) {
  const navigate = useNavigate(); 
  return (
    <div className='movie-card' onClick={()=>navigate(`/${movie.imdbID}`)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      
    </div>
  )
}

export default MovieCard