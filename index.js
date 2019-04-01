const express = require('express')
const app = express()
const port = 3000

/* Importing employees */
let employees = require("./employees.json")

app.get('/', (req, res) => {
    res.send("Its working")
})

app.get('/employees', (req, res) => {
    res.send(employees)
})

app.listen(port, () => console.log(`Started on port: ${port}!`))
