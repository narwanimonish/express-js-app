<template>
    <div class="emp-create">
        <h3>Create new Employee</h3>
        <br>

        <div class="card" style="width: 60rem;">
            <div class="card-body">
                <form @submit.prevent="createEmployee">

                    <div class="form-group">
                        <!-- <label for="emp-name">Enter Name</label> -->
                        <input type="text" class="form-control" id="emp-name" aria-describedby="empName" placeholder="Enter Name" v-model="emp.name" :class="{'is-invalid': isError}" ref="name">
                        <small class="invalid-feedback" v-if="isError">Enter valid name</small>
                    </div>

                    <div class="form-group">
                        <!-- <label for="emp-email">Enter email</label> -->
                        <input type="email" class="form-control" id="emp-email" aria-describedby="empemail" placeholder="Enter e-mail" v-model="emp.email" :class="{'is-invalid': isError}" ref="email">
                        <small class="invalid-feedback" v-if="isError">Enter valid email</small>
                    </div>

                    <div class="form-group">
                        <!-- <label for="emp-mobile">Enter mobile</label> -->
                        <input type="text" class="form-control" id="emp-mobile" aria-describedby="empmobile" placeholder="Enter mobile number" v-model="emp.mobile" :class="{'is-invalid': isError}" ref="mobile">
                        <small class="invalid-feedback" v-if="isError">Enter valid mobile number</small>
                    </div>

                    <div class="form-group">
                        <!-- <label for="emp-jobTitle">Enter Job title</label> -->
                        <input type="text" class="form-control" id="emp-jobTitle" aria-describedby="empjobTitle" placeholder="Enter Job title" v-model="emp.jobTitle" :class="{'is-invalid': isError}" ref="jobTitle">
                        <small class="invalid-feedback" v-if="isError">Enter valid Job title</small>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Create</button>
                    <button type="button" class="btn btn-danger" @click="resetForm">Reset</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { error } from 'util';
export default {
    data () {
        return {
            emp: {
                name: "",
                email: "",
                mobile: "",
                jobTitle: ""
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

            let keys = Object.keys(this.$refs)
            for(let i = 0; i < keys.length; i++) {
                this.$refs[keys[i]].classList.remove("is-invalid")
            }
            
        },
        createEmployee () {
            if(this.validateEmp()) {
                this.$emit("emp-create", {
                    emp: this.emp
                })
                this.resetForm()
            }
            
        },
        validateEmp() {
            let emp = this.emp
            
            let keys = Object.keys(emp)
            let errors = []
            for(let i = 0; i < keys.length; i++) {
                if(!emp[keys[i]] || !emp[keys[i]].length) {
                    errors.push(keys[i])
                    this.$refs[keys[i]].classList.add("is-invalid")
                } else {
                    this.$refs[keys[i]].classList.remove("is-invalid")
                }
            }
            
            if(errors.length == 0) {
                return true
            }
            return false
        }
    }
}
</script>


<style scoped>
button {
    margin-right: 0.25rem;
}
</style>
