import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from '../Api/api';
import Loading from './Loading';
import './MovieDetail.css';

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { movieID } = useParams();

  useEffect(() => {
    getMovie(movieID)
      .then((data) => setMovie(data))
      .catch((error) => console.error(error));
  }, [movieID]);

  return (
    <div className="movie-detail-container">
      {movie ? (
        <div className="movie-details">
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-info">
            <h1 className="movie-title">{movie.Title}</h1>
            <div className="movie-meta">
              <p>
                <strong>Year:</strong> {movie.Year}
              </p>
              <p>
                <strong>Released:</strong> {movie.Released}
              </p>
              <p>
                <strong>Starring:</strong> {movie.Actors}
              </p>
              <p>
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p>
                <strong>Language:</strong> {movie.Language}
              </p>
              <p>
                <strong>Run Time:</strong> {movie.Runtime}
              </p>
            </div>
            <p className="movie-plot">{movie.Plot}</p>
            <div className="movie-rating">
              <p>
                <strong>Rating:</strong> {movie.imdbRating}
              </p>
              <ul className="ratings-list">
                {movie.Ratings.map((rating, i) => (
                  <li key={i}>
                    {rating.Source}: {rating.Value}
                  </li>
                ))}
              </ul>
            </div>
            <button className="watch-button">Watch Now</button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default MovieDetail;
