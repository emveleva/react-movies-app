const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SECRET, SALT_ROUNDS } = require('../config/config')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: ['Username is required'],
        unique: true,
        minlength: [4, 'Username should be at least 4 characters long'],
        validate: {
            validator: (v) => {
                return /^[A-Za-z0-9]+$/.test(v)
            },
            message: (props) => {
                return `Username should contains only english letters and digits`
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password should be at least 5 characters long'],
        validate: {
            validator: (v) => {
                return /^[A-Za-z0-9]+$/.test(v)
            },
            message: (props) => {
                return `Password should contains only english letters and digits`
            }
        }
    },

    toWatch: []
    },

    watched: []
});

userSchema.pre('save', function(next){
    bcrypt.genSalt(SALT_ROUNDS)
    .then(salt => bcrypt.hash(this.password, salt ))
    .then(hash => {
        this.password = hash;
        next();
    })
})

module.exports = mongoose.model('User', userSchema)