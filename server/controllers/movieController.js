const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');
const { addNew, getAll } = require('../services/movieService')


router.post('/add-new', (req, res, next) => {
    addNew(req.body)
        .then(() => {
            res.status(200).json({message: 'added'})
        }).catch((error) => res.json(error));
});


router.get('/:genre', (req, res) => {
    let genre = req.genre;
    getAll(genre)
    .then(() => {
        res.status(200).json({message: 'found'})
    }).catch((error) => res.json(error));
});

// router.get('/details/:expenseId', isAuthenticated, (req, res, next) => {
//     let user = req.user;
//     let expenseId = req.params.expenseId;

//     getOne(expenseId)
//         .then(expense => {
//             res.render('details', {expense, user});
//         }).catch(next)
// });


// router.post('/refill', isAuthenticated, (req, res) => {
//     let user = req.user;

//     refill(req.body.refill, user._id)
//         .then(() => res.redirect('/'));
// });



module.exports = router;