const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    merchant: {
        type: String,
        require: true,
    },
    total: {
        type: Number,
        require: true,
    },
    category: {
        type: String, 
        require: true,
    },
    description: {
        type: String, 
        require: true,
        minlength: [3, 'Description should be minimum 3 characters'],
        manlength: [30, 'Description should be maximum 30 characters']
    },
    report: {
        type: Boolean,
        require: true,
        default: false,
    }, 
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
})

module.exports = mongoose.model('Expense', ExpenseSchema);