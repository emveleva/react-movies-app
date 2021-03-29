const express = require('express')
const app = express()
const { PORT }= require('./config/config')
const { register, login } = require('./services/authService');
const auth = require('./middlewares/auth')
const isAuth = require('./middlewares/isAuth')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const {SECRET, COOKIE_NAME} = require('./config/config');
const cookieParser = require('cookie-parser');

const path = require('path')
app.use(express.static('build'))

app.use(cors({credentials: true}))
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(auth())

// GET
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME)
    res.status(200).json({message: 'logged out'})
});

// POST
app.post('/register', (req, res) => {
    register(req.body)
        .then(token => {

            jwt.verify(token, SECRET, (err, user) => {
                if (err) {
                    res.clearCookie(COOKIE_NAME);
                } else {
                    res.status(200).cookie(COOKIE_NAME, token, {secure: true, httpOnly: true}).json({user, token})
                }
            })
        }).catch((error) => res.json(error))
});

app.post('/login', (req, res) => {
    login(req.body)
        .then(token => {
            jwt.verify(token, SECRET, (err, user) => {
                if (err) {
                    res.clearCookie(COOKIE_NAME);
                } else {
                    res.status(200).cookie(COOKIE_NAME, token, {sameSite: 'none', secure: true}).json({user, token})
                }
            })
        }).catch((error) => res.json(error))
});




require('./config/mongoose');
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));