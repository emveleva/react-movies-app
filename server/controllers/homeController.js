const router = require('express').Router();

const expenseService = require('../services/expenseService')
// Controllers


router.get('/', (req, res, next)=> {

    if (req.user){
        expenseService.getAll()
        .then(expenses => {
            console.log(expenses)
            if (!expenses.report){
                res.render('homeUser', ({expenses, report: ''}))
            }
 
        })
.catch(next)
    } else {
        res.render('home')
    }
    

    
})

// Use controllers



module.exports = router;