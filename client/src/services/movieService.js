const fetchMovie = (movieId) => {
    return fetch(`http://localhost:4003/movies/details/${movieId}`)
    .then(res => res.json())
}
const fetchLists = (userId) => {
    return fetch(`http://localhost:4003/dashboard/${userId}`)
    .then(res => res.json())
}

const addToWatch = ({movie, userId}) => {
    return fetch(`http://localhost:4003/dashboard/to-watch`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movie, userId})
      }).then(res => res.json())
}

const addWatched = ({movie, userId}) => {
    return fetch(`http://localhost:4003/dashboard/watched`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movie, userId})
      }).then(res => res.json())
}

const removeToWatch = ({movie, userId}) => {
    return fetch(`http://localhost:4003/dashboard/to-watch`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({movie, userId})
    }).then(res => res.json())
}

const removeWatched = ({movie, userId}) => {
    return fetch(`http://localhost:4003/dashboard/watched`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movie, userId})
      }).then(res => res.json())
}

export  {fetchMovie, fetchLists, addToWatch, addWatched, removeToWatch, removeWatched}