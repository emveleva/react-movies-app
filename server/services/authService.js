const User = require('../Models/User');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {SECRET, SALT_ROUNDS} = require('../config/config');

module.exports = {
    register: 
        async ({username, password, rePassword}) => {
            if (password !== rePassword) 
                throw {message: 'The passwords should match!'}
            let userAlreadyCreated = await User.findOne({username});
            if (userAlreadyCreated) 
                throw {message: 'User already exists!'};
            let hash = await bcrypt.hash(password, SALT_ROUNDS);
            let user = await new User({username, password: hash}).save();
            return jwt.sign({_id: user._id, username: user.username}, SECRET);
    },
    login: 
        async ({username, password}) => {
            let userExists = await User.findOne({username});
            let notMatch = await bcrypt.compare(password, user.password);
            if (!userExists || !notMatch) 
                throw {message: 'Wrong username or password.'};
            return jwt.sign({_id: user._id, username: user.username}, SECRET);
    }
}