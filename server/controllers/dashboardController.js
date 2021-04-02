const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const { addToWatch, getLists, addWatched, deleteToWatch, deleteWatched } = require('../services/dashboardService')

// GET
router.get('/:userId', (req, res) => {
    let userId = req.params.userId;
    getLists(userId)
        .then((lists) => {
            res.status(200).json(lists)
        }).catch((error) => res.json(error));
});

router.post('/to-watch', (req, res) => {
    let data = req.body
    console.log(data.movieId, data.userId)
    addToWatch(req.body)
        .then(() => {
            res.status(200).json({mssage: "added"})
        }).catch((error) => res.json(error));
});

router.post('/watched', (req, res) => {
    let data = req.body
    addWatched(req.body)
        .then(() => {
            res.status(200).json({mssage: "added"})
        }).catch((error) => res.json(error));
});

router.delete('/to-watch', (req, res) => {
    let data = req.body
    deleteToWatch(req.body)
        .then(() => {
            res.status(200).json({mssage: "removed"})
        }).catch((error) => res.json(error));
});

router.delete('/watched', (req, res) => {
    let data = req.body
    deleteWatched(req.body)
        .then(() => {
            res.status(200).json({mssage: "removed"})
        }).catch((error) => res.json(error));
});
module.exports = router;