const express = require('express');
const cookieParser = require('cookie-parser');


const auth = require('../middlewares/auth')

function setupExpress(app){

    app.use(express.urlencoded({
        extended: true
    }))

    app.use(cookieParser());

    app.use(auth);
}

module.exports = setupExpress;