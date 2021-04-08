const fetchMovie = (movieId) => {
  return fetch(`http://localhost:4003/movies/details/${movieId}`).then((res) =>
    res.json()
  );
};
const fetchLists = (userId) => {
  return fetch(`http://localhost:4003/dashboard/${userId}`).then((res) =>
    res.json()
  );
};

const addToWatch = ({ movie, userId }) => {
  return fetch(`http://localhost:4003/dashboard/to-watch`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie, userId }),
  }).then((res) => res.json());
};

const addWatched = ({ movie, userId }) => {
  return fetch(`http://localhost:4003/dashboard/watched`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie, userId }),
  }).then((res) => res.json());
};

const removeToWatch = ({ movie, userId }) => {
  return fetch(`http://localhost:4003/dashboard/to-watch`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie, userId }),
  }).then((res) => res.json());
};

const removeWatched = ({ movie, userId }) => {
  return fetch(`http://localhost:4003/dashboard/watched`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ movie, userId }),
  }).then((res) => res.json());
};

const fetchAllMovies = () => {
  return fetch(`http://localhost:4003/movies/all`)
  .then((res) => res.json())
};

const fetchAllMoviesGenre = (genre) => {
      return fetch(`http://localhost:4003/movies/${genre}`)
        .then((res) => res.json())
};

const addNewMovie = ({title, year, description, actors, posterURL, genre, user}) => {
  return fetch("http://localhost:4003/movies/add-new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title,
      year,
      description,
      actors,
      posterURL,
      genre,
      user
    }),
  })
    .then((res) => res.json())
};

const getMovieToEdit = (movieId) => {
  return fetch(
    `http://localhost:4003/movies/details/edit/${movieId}`
  )
    .then((res) => res.json())
}

const editMoviePost = (movieId, title, year, description, actors, posterURL, genre) => {
  return fetch(
    `http://localhost:4003/movies/details/edit/${movieId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title,
        year,
        description,
        actors,
        posterURL,
        genre,
      }),
    }
  )
    .then((res) => res.json())
}


export {
  fetchMovie,
  fetchLists,
  addToWatch,
  addWatched,
  removeToWatch,
  removeWatched,
  fetchAllMovies,
  fetchAllMoviesGenre,
  addNewMovie, 
  getMovieToEdit,
  editMoviePost
};
