const router = require('express').Router();

const expenseService = require('../services/expenseService')

router.get('/create', (req, res) => {
    res.render('newExpense')
})

router.post('/create', (req, res, next) => {
    console.log(req.body)
    let { merchant, total, category, description, report } = req.body;
    let expenseData = {
        merchant, total, category, description, report: Boolean(report)
    }
    expenseService.create(expenseData, req.user._id)
        .then(expenseCreated => {
            res.redirect('/');
    })
        .catch (next) 
});

router.get('/:id/report', (req, res, next) => {
    expenseService.getOne(req.params.id, req.user._id)
        .then(expense => {
            res.render('report', expense )
        })
        .catch(next)
    
});



module.exports = router;