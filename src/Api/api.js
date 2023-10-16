const omdbKey = process.env.REACT_APP_OMDB_KEY;

export const getMovies = (movieName = "superman", type = "movie") => {
  if (!omdbKey) {
    throw new Error('OMDB API key is not defined. Please set the REACT_APP_OMDB_KEY environment variable.');
  }

  const url = `https://www.omdbapi.com/?apikey=${omdbKey}&s=${movieName}&type=${type}`;

  console.log("API Request URL:", url);

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`OMDB API request failed. HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.Search) {
        console.log("API Response Data:", data.Search);
        return data.Search;
      } else {
        throw new Error("OMDB API did not return expected data.");
      }
    })
    .catch((error) => {
      // Handle errors here, you can log or display user-friendly messages
      console.error("API Request Error:", error);
      throw error; // Rethrow the error for higher-level handling
    });
};


export const getMovie=(movieID)=>{
  if (!omdbKey) {
    throw new Error('OMDB API key is not defined. Please set the REACT_APP_OMDB_KEY environment variable.');
  }

  const url = `https://www.omdbapi.com/?apikey=${omdbKey}&i=${movieID}&plot=full`;

  console.log("API Request URL:", url);

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`OMDB API request failed. HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response Data:", data);
      return data;
    })
    .catch((error) => {
      // Handle errors here, log or display user-friendly messages
      console.error("API Request Error:", error);
      throw error; // Rethrow the error for higher-level handling
    });

}
