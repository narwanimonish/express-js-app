<template>
    <div class="emp-edit" v-if="show">
        <div class="modal">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" @click="closeEdit">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form @submit.prevent="editEmployee">
                        <div class="modal-body">

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
            this.$emit("emp-save-modal", {
                emp: this.emp
            })
        }
    }
}
</script>

<style scoped>
.modal {
  display:block;
}
</style>

