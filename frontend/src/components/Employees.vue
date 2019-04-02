<template>
    <div class="emp">
        <employees-create></employees-create>
        <br>
        <br>
        <employees-list></employees-list>
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
        fetchEmp () {
            this.$http.get(empDomain).then((response) => {
                this.emps = response.data
            })
        }
    }
}
</script>

