const omdbKey = process.env.REACT_APP_OMDB_KEY;

export const getMovies = (movieName = "superman", type = "movie") => {
  const url = `https://www.omdbapi.com/?apikey=${omdbKey}&s=${movieName}&type=${type}`;

  console.log(url); // Log the API request URL

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.Search); // Log the data.Search array
      return data.Search;
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
      throw error; // You can choose to rethrow the error or handle it as needed
    });
};

export const getMovie=(movieID)=>{
  const url = `https://www.omdbapi.com/?apikey=${omdbKey}&i=${movieID}&plot=full`;

  console.log(url); // Log the API request URL

  return fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // Log the data.Search array
    return data;
  })
  .catch((error) => {
    // Handle errors here
    console.error(error);
    throw error; // You can choose to rethrow the error or handle it as needed
  });

}
