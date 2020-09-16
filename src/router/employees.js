const { STATUS_CODES } = require('http')
const conn = require('../config')
const router = require('express').Router()

router.get('/api/employees', (req, res) => {
    const sql = `SELECT * FROM employees`

    conn.query(sql, (err, result) => {
        if(err) return res.status(500).send(err)

        res.status(200).send(result)
    })
})

router.get('/api/employees/:id', (req, res) => {
    const sql = `SELECT * FROM employees WHERE id = ${req.params.id}`

    conn.query(sql, (err, result) => {
        if(err) return res.status(500).send(err)
        
        res.status(200).send(result)
    })
})

router.post('/api/employees', (req, res) => {
    const sql = `INSERT INTO employees SET ?`
    const data = req.body
    
    conn.query(sql, data, (err, result) => {
        if(err) return res.status(500).send(err)

        const sql = `SELECT * FROM employees WHERE id = ${result.insertId}`
        
        conn.query(sql, (err, result) => {
            if(err) return res.status(500).send(err)

            res.status(201).send(result)
        })
    })
})

router.put('/api/employees/:id', (req, res) => {
    const sql = `UPDATE employees SET ? WHERE id = ${req.params.id}`
    const data = [req.body]

    conn.query(sql, data, (err, result) => {
        if(err) return res.status(500).send(err)
        
        const sql = `SELECT * FROM employees WHERE id = ${req.params.id}`

        conn.query(sql, (err, result) => {
            if(err) return res.status(500).send(err)

            res.status(200).send(result)
        })
    })
})

router.delete('/api/employees/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ${req.params.id}`

    conn.query(sql, (err, result) => {
        if(err) return res.status(500).send(err)

        res.status(204).send(result)
    })
})

module.exports = router