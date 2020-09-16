const express = require('express')
const cors = require('cors')
const app = express()
const port = 2020

// Router Zone
const employees = require('./src/router/employees')
const soal1 = require('./src/router/soal1')
const soal2 = require('./src/router/soal2')
const soal3 = require('./src/router/soal3')
//

app.use(cors())
app.use(express.json())

// app.use Router
app.use(employees)
app.use(soal1)
app.use(soal2)
app.use(soal3)
//

app.get('/', (req, res) => {
    res.send({
        message : 'RESTfull_API READY'
    })
})

app.listen(port, () => console.log('API IS RUNNING AT ' + port))