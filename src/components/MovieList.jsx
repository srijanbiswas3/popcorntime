import React from 'react'
import MovieCard from './MovieCard'
import "./MovieList.css"
import Dropdown from 'react-bootstrap/Dropdown';

function MovieList({ movies }) {
    return (
        <>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Latest</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Oldest</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Name(A-Z)</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

            <div className='movie-list'>

                {movies.map(movie => {
                    return (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    )
                })}

            </div>
        </>
    )
}

export default MovieList