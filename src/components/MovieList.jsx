import React from 'react'
import MovieCard from './MovieCard'
import "./MovieList.css"

function MovieList({ movies }) {
    return (

        <div className='movie-list'>

            {movies.map(movie => {
                return (
                    <MovieCard key={movie.imdbID} movie={movie} />
                )
            })}

        </div>
    )
}

export default MovieList