import api from './api';

export const getAll = () => {
    return fetch(api.movies)
        .then(res => res.json())
        .catch(err => console.log('Handled error:' + err));
};
export const getOne = (movieId) => {
    return fetch(`${api}/${movieId}`)
        .then(res => res.json())
        .catch(error => console.log(error));
}