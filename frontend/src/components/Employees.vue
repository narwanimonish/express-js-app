<template>
    <div class="emp">
        <employees-create @emp-create="createEmp"></employees-create>
        <br>
        <br>
        <employees-list :emps="emps"></employees-list>
    </div>
</template>

<script>

import {empDomain} from './../config'
import EmployeesCreate from './EmployeesCreate'
import EmployeesList from './EmployeesList'

export default {
    components: {
        EmployeesCreate,
        EmployeesList,
    },

    created() {
        this.fetchEmp()
    },

    data() {
        return {
            emps: []
        }
    },

    methods: {
        fetchEmp() {
            this.$http.get(empDomain).then((response) => {
                this.emps = response.data
            })
        },

        createEmp(empData) {
            let emp = empData.emp
            
            this.$http.post(empDomain, emp).then((response) => {
                let newEmp = response.data
                this.emps.push(newEmp)
                alert("Employee created: " + newEmp.name)
            })
            
        }
    }
}
</script>

