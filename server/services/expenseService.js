const User = require('../models/User');
const Expense = require('../models/Expense');

const create = (expenseData, userId) =>  {
    let expense = new Expense({ ...expenseData, user: userId})
    return expense.save()
}

const getAll = () => {
    return Expense.find({}).lean();
}

const getOne = (id, userId) => 
    Expense
    .findById(id)
    .then(expense => {
    return expense    
    })
    


module.exports = {
    create,
    getAll,
    getOne
}