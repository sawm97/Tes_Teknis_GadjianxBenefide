const router = require('express').Router()
const fun = require('../function/function')

router.post('/api/fibonacci', (req, res) => {
    const {n} = req.body

    res.status(200).send({result: fun.fibonacci(n)})
})

module.exports = router