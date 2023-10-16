import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../Api/api';
import Loading from './Loading';
import "./MovieDetail.css"

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    // Use an effect to fetch the movie data when the component mounts
    getMovie(movieID)
      .then(data => setMovie(data))
      .catch(error => console.error(error));
  }, [movieID]); // Run this effect whenever movieID changes

  // Check if movie is available and render accordingly
  return (
    <div>
      {movie ? (
        <>
          <div className="movie-details">
            <img src={movie.Poster} alt={movie.Title} />
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <p>Rating: {movie?.Ratings.map((rating,i) => (<li key={i}>{rating.Source} {rating.Value}</li>))}</p>
            <button>Watch Now</button>
          </div>

        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default MovieDetail;
