const router = require('express').Router();

const isAuth = require('./middlewares/isAuth')
const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const expenseController = require('./controllers/expenseController');
// Controllers

router.use('/',  homeController);
router.use('/auth', authController)
router.use('/expenses', isAuth, expenseController)
router.use('*', (req, res) => {
    res.render('404')
})



module.exports = router;