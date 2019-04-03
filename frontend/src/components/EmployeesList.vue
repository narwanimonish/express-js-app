<template>
    <div class="emp-list">
        <h3>List of Employees</h3>
        <br>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">e-mail</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(emp,key) in emps" :key="key">
                    <th scope="row">{{emp.id}}</th>
                    <td>{{emp.name}}</td>
                    <td>{{emp.email}}</td>
                    <td>{{emp.mobile}}</td>
                    <td>{{emp.jobTitle}}</td>
                    <td>
                        <button class="btn btn-primary" @click="editEmp(emp.id, key)">Edit</button>
                        <button class="btn btn-danger" @click="deleteEmp(emp.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        emps: {

        }
    },
    created () {
        
    },
    data () {
        return {
            
        }
    },
    methods: {
        deleteEmp(id) {
            let response = confirm("Are you sure, you want to delete employee with id: " + id)

            if (response) {
                this.$emit("emp-delete", {
                    id
                })
            }
            
        },

        editEmp(id, key) {
            this.$emit("emp-edit", {
                id, 
                key
            })
        }
    }
}
</script>

<style scoped>
button {
    margin-right: 0.25rem;
}
</style>
