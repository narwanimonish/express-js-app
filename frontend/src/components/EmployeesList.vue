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
                    <th scope="row">{{key + 1}}</th>
                    <td>{{emp.name}}</td>
                    <td>{{emp.email}}</td>
                    <td>{{emp.mobile}}</td>
                    <td>{{emp.jobTitle}}</td>
                    <td>
                        <button class="btn btn-primary">Edit</button>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {empDomain} from './../config'
export default {
    created () {
        
    },
    data () {
        return {
            emps: [
                {
                    "name": "Jon",
                    "email": "jon@gmail.com",
                    "mobile": "9874563210",
                    "jobTitle": "Tester",
                    "id": 1
                },
                {
                    "name": "Jack",
                    "email": "jack@gmail.com",
                    "mobile": "9877893210",
                    "jobTitle": "Developer",
                    "id": 2
                },
                {
                    "name": "Sharon",
                    "email": "sharon@gmail.com",
                    "mobile": "7884563210",
                    "jobTitle": "Manager",
                    "id": 3
                }
            ]
        }
    },
    
}
</script>

