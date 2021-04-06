const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const { addNew, getAll, getOne, editMovie } = require('../services/movieService')


router.post('/add-new', (req, res) => {
    console.log(req.body)
    addNew(req.body)
        .then((movieId) => {
            res.status(200).json(movieId)
        }).catch((error) => res.json(error));
});


router.get('/:genre', (req, res) => {
    let genre = req.params.genre;

    getAll(genre)
    .then((movies) => {
        res.status(200).json(movies)
    }).catch((error) => res.json(error));
});

router.get('/details/:movieId', (req, res) => {
    let movieId = req.params.movieId;
    getOne(movieId)
        .then((movie) => {
            res.status(200).json({message: "success", movie})
    }).catch((error) => res.json(error));
});

router.get('/details/edit/:movieId', (req, res) => {
    let movieId = req.params.movieId;

    getOne(movieId)
        .then((movie) => {
            res.status(200).json({message: "success", movie})
    }).catch((error) => res.json(error));
});

router.post('/details/edit/:movieId', (req, res) => {
    let movieId = req.params.movieId;
    let editedMovieInfo = req.body;
    console.log(editedMovieInfo)
    editMovie(movieId, editedMovieInfo)
    .then(() => {
        res.status(200).json({message: "edited"})
    }).catch((error) => res.json(error));
});





module.exports = router;