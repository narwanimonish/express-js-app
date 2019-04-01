const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

/* Importing employees */
let employees = require("./employees.json")

app.get('/', (req, res) => {
    res.send("Its working")
})

app.get('/employees', (req, res) => {
    res.send(employees)
})

app.post('/employee', (req, res) => {
    let email = req.body.email;
    let mobile = req.body.mobile;
    let jobTitle = req.body.jobTitle;
    let newId = employees.length + 1;

    let newEmp = {
        email,
        mobile,
        jobTitle,
        newId
    };

    employees.push(newEmp);

    return res.send(newEmp);
})

app.listen(port, () => console.log(`Started on port: ${port}!`))
