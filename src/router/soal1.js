const router = require('express').Router()
const fun = require('../function/function')

router.post('/api/reverse', (req, res) => {
    const {character} = req.body

    res.status(200).send({result: fun.reverse(character)})
})

module.exports = router