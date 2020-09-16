const router = require('express').Router()
const fun = require('../function/function')

router.post('/api/combination', (req, res) => {
    const {n, r} = req.body
    const set = fun.nSet(n)
    const k = r

    res.status(200).send({result: fun.k_combinations(set, k)})
})

module.exports = router