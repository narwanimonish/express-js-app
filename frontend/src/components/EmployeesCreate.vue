<template>
    <div class="emp-create">
        <h3>Create new Employee</h3>
        <br>

        <div class="card" style="width: 60rem;">
            <div class="card-body">
                <form @submit.prevent="createEmployee">

                    <div class="form-group">
                        <!-- <label for="emp-name">Enter Name</label> -->
                        <input type="text" class="form-control" id="emp-name" aria-describedby="empName" placeholder="Enter Name" v-model="emp.name" :class="{'is-invalid': isError}">
                        <small class="invalid-feedback" v-if="isError">Enter valid name</small>
                    </div>

                    <div class="form-group">
                        <!-- <label for="emp-email">Enter email</label> -->
                        <input type="email" class="form-control" id="emp-email" aria-describedby="empemail" placeholder="Enter e-mail" v-model="emp.email" :class="{'is-invalid': isError}">
                        <small class="invalid-feedback" v-if="isError">Enter valid email</small>
                    </div>

                    <div class="form-group">
                        <!-- <label for="emp-mobile">Enter mobile</label> -->
                        <input type="text" class="form-control" id="emp-mobile" aria-describedby="empmobile" placeholder="Enter mobile number" v-model="emp.mobile" :class="{'is-invalid': isError}">
                        <small class="invalid-feedback" v-if="isError">Enter valid mobile number</small>
                    </div>

                    <div class="form-group">
                        <!-- <label for="emp-jobTitle">Enter Job title</label> -->
                        <input type="text" class="form-control" id="emp-jobTitle" aria-describedby="empjobTitle" placeholder="Enter Job title" v-model="emp.jobTitle" :class="{'is-invalid': isError}">
                        <small class="invalid-feedback" v-if="isError">Enter valid Job title</small>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Create</button>
                    <button type="submit" class="btn btn-danger" @click="resetForm">Reset</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            emp: {
                name: "monish",
                email: "narwanimonish@gmail.com",
                mobile: "8080690808",
                jobTitle: "Software Developer"
            }, 
            isError: false
        }
    },

    methods: {
        resetForm () {
            this.emp = {
                name: "",
                email: "",
                mobile: "",
                jobTitle: ""
            }
        },
        createEmployee () {
            this.$emit("emp-create", {
                emp: this.emp
            })
            // this.resetForm()
        },
    }
}
</script>


<style scoped>
button {
    margin-right: 0.25rem;
}
</style>
