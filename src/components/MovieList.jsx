import React, { useState } from 'react'
import MovieCard from './MovieCard'
import "./MovieList.css"
import Dropdown from 'react-bootstrap/Dropdown';

function MovieList({ movies, type,movieSearch }) {
    const [filter, setFilter] = useState("Latest")

    const sortMovies = (eventKey) => {
        console.log("Sort By : " + eventKey)
        switch (eventKey) {
            case "Latest": { movies.sort((a, b) => b.Year - a.Year); setFilter("Latest"); break }
            case "Oldest": { movies.sort((a, b) => a.Year - b.Year); setFilter("Oldest"); break }
            case "Rating": { movies.sort((a, b) => b.imdbRating - a.imdbRating); setFilter("Rating"); break }
            case "Name": { movies.sort((a, b) => a.Title.localeCompare(b.Title)); setFilter("Name(A-Z)"); break }
            case "NameR": { movies.sort((a, b) => b.Title.localeCompare(a.Title)); setFilter("Name(Z-A)"); break }
            default: setFilter("Latest");

        }
    }


    return (
        <div className='movie-container'>
            <Dropdown onSelect={sortMovies} className={{ left: 0 }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic" >
                    {filter}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="Latest">Latest</Dropdown.Item>
                    <Dropdown.Item eventKey="Oldest">Oldest</Dropdown.Item>
                    <Dropdown.Item eventKey="Rating" >Rating</Dropdown.Item>
                    <Dropdown.Item eventKey="Name">Name(A-Z)</Dropdown.Item>
                    <Dropdown.Item eventKey="NameR">Name(Z-A)</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <h2>Showing all {movieSearch} {type}</h2>
            <div className='movie-list'>

                {movies.map(movie => {
                    return (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    )
                })}

            </div>
        </div>
    )
}

export default MovieList