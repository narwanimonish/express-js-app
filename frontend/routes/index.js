import Vue from 'vue'
import VueRouter from 'vue-router'

import Employees from "./../src/components/Employees";
import MainMenu from "./../src/components/MainMenu";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Employees',
            component: Employees
        },
        {
            path: '/weather',
            name: 'Weather',
            component: MainMenu
        }
    ]
})
