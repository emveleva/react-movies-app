const url = 'http://localhost:5000/movies';

export const getAll = (genre = '') => {
    let moviesUrl = url + ((genre && genre !== 'all') ? `?genre=${genre}` : '');
    console.log(moviesUrl)
    return fetch(moviesUrl)
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOne = (movieID) => {
    return fetch(`${url}/${movieID}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}