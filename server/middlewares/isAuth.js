module.exports = (req, res, next) => {
    if (!req.user) 
        return res.render('login', 
        {error: {message: 'You should be authenticated.'}});

    next();
}