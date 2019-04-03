<template>
    <div class="emp">
        <employees-create 
            @emp-create="createEmp"
        ></employees-create>

        <br>
        <br>

        <employees-list 
            :emps="emps"
            @emp-delete="deleteEmp"
            @emp-edit="editEmp"
        ></employees-list>

        <employees-edit-modal
            :emp="currEmp"
            :show="isEditing"
            @emp-close-modal="closeModal"
            @emp-save-modal="updateEmp"
        ></employees-edit-modal>
    </div>
</template>

<script>

import {empDomain} from './../config'
import EmployeesCreate from './EmployeesCreate'
import EmployeesList from './EmployeesList'
import EmployeesEditModal from './EmployeesEditModal'

export default {
    components: {
        EmployeesCreate,
        EmployeesList,
        EmployeesEditModal,
    },

    created() {
        this.fetchEmp()
    },

    data() {
        return {
            emps: [],
            currEmp: {},
            isEditing: false
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
            
        },

        deleteEmp(empData) {
            let id = empData.id
            this.$http.delete(empDomain + "/" + id).then((response) => {
                this.emps = response.data
            })
        },

        editEmp(empData) {
            let index = empData.key
            /* Cloning the current emp data to variable */
            this.currEmp = JSON.parse(JSON.stringify(this.emps[index]))
            this.isEditing = true
        },

        closeModal() {
            this.isEditing = false
        },

        updateEmp(empData) {
            let emp = empData.emp

            if (emp.id) {
                this.$http.put(empDomain + "/" + emp.id, emp).then(response => {
                    this.emps[emp.id - 1] = response.data
                    
                    /* written this just to overcome the problem which props is not reflecting change if changed on value in object */
                    this.emps = JSON.parse(JSON.stringify(this.emps))
                    
                    this.closeModal()
                })
            }
        }
    }
}
</script>


