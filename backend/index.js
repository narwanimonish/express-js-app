const express = require('express')
const app = express()
const port = 3000

const employeesRoutes = require('./routes/employees.js')

app.use(express.json())

app.use('/api/employees', employeesRoutes)

app.get('/', (req, res) => {
    res.send("Its working")
})



app.listen(port, () => console.log(`Started on port: ${port}!`))

