const authController = require('./controllers/authController');
const movieController = require('./controllers/movieController');

module.exports = (app) => {
    app.use('/', authController);
    app.use('/movies', movieController);
    app.get('*', (req, res) => {
        res.render('404');
    })
}