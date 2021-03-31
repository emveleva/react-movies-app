const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const { addNew, getAll, getOne } = require('../services/movieService')


router.post('/add-new', (req, res) => {
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
    console.log(movieId)
    getOne(movieId)
        .then(movie => {
            console.log(movie)
            res.status(200).json(movie)
    }).catch((error) => res.json(error));
});


// router.post('/refill', isAuthenticated, (req, res) => {
//     let user = req.user;

//     refill(req.body.refill, user._id)
//         .then(() => res.redirect('/'));
// });



module.exports = router;