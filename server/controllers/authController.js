const router = require('express').Router();
const authService = require('../services/authService')
const { COOKIE_NAME } = require('../config/config')

// Controllers


router.get('/', (req, res)=> {
    res.send('Auth controller')
})

router.get('/login', (req, res)=> {
    res.render('login')
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    authService.login(username, password)
        .then(token => {
            res.cookie(COOKIE_NAME, token, { httpOnly: true})
            res.redirect('/')
        })
        .catch(next)
    
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', async (req, res, next) => {
    const {username, password, repeatPassword} = req.body;
        if (password !== repeatPassword) {
            res.render('register', {error: {message: 'Passwords should match!'}})
            return;
        }   
        authService.register(username, password)
            .then(createdUser => {
            res.render('homeUser')
        })        
        .catch(next)
});

router.get('/logout', (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/')
})




module.exports = router;