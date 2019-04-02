const express = require('express')
const router = express.Router();

/* Importing employees */
const employees = require("./../employees.json")

router.get('/', (req, res) => {
    res.send(employees)
})

router.post('/', (req, res) => {

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

router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    
    let employee = employees.find( e => e.id == id);

    if (!employee) {
        return res.status(404).send("Employee not found on server")
    }

    return res.send(employee);
})

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);

    let employee = employees.find( e => e.id == id);

    if (!employee) {
        return res.status(404).send("Employee not found on server")
    }

    const index = employees.indexOf(employee);
    employees.splice(index, 1);

    return res.send(employees);
})

module.exports = router;
