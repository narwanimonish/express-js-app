<template>
    <div class="emp-edit" v-if="show">
        <div class="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Edit employee - {{emp.name}}</h5>
                        <button type="button" class="close" @click="closeEdit">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editEmployee">
                        <div class="modal-body">

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
                            
                        
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" @click="closeEdit">Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        emp: {},
        show: {}
    },

    data() {
        return {
            isError: false
        }
    },

    methods: {
        closeEdit() {
            this.$emit("emp-close-modal")
        },

        editEmployee() {
            if (this.validateEmp()) {
                this.$emit("emp-save-modal", {
                    emp: this.emp
                })
            }
        },
        validateEmp() {
            let emp = this.emp
            
            let keys = Object.keys(this.$refs)
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
.modal {
  display:block;
  background-color: rgba(74, 74, 74,0.5);
}
</style>

