import Vue from 'vue'
import VueRouter from 'vue-router'

import Employees from "./../src/components/Employees";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Employees',
            component: Employees
        }
    ]
})
