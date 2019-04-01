const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

/* Importing employees */
const employees = require("./employees.json")

app.get('/', (req, res) => {
    res.send("Its working")
})

app.get('/employees', (req, res) => {
    res.send(employees)
})

app.post('/employee', (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let jobTitle = req.body.jobTitle;
    let newId = employees.length + 1;

    let newEmp = {
        name,
        email,
        mobile,
        jobTitle,
        id: newId
    };

    employees.push(newEmp);

    return res.send(newEmp);
})

app.get('/employee/:id', (req, res) => {
    let id = parseInt(req.params.id);
    
    let employee = employees.find( e => e.id == id);

    if (!employee) {
        return res.status(404).send("Employee not found on server")
    }

    return res.send(employee);
})

app.put('/employee/:id', (req, res) => {
    let id = parseInt(req.params.id);
    
    let employee = employees.find( e => e.id == id);

    if (!employee) {
        return res.status(404).send("Employee not found on server")
    }

    employee.name = req.body.name;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.jobTitle = req.body.jobTitle;

    return res.send(employee);

})

app.delete('/employee/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let employee = employees.find( e => e.id == id);

    if (!employee) {
        return res.status(404).send("Employee not found on server")
    }

    const index = employees.indexOf(employee);
    employees.splice(index, 1);

    return res.send(employees);
})

app.listen(port, () => console.log(`Started on port: ${port}!`))

