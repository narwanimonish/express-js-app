import Vue from 'vue'
import VueRouter from 'vue-router'

import Employees from "./../src/components/Employees";
import WeatherForecast from "./../src/components/WeatherForecast";

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: "active",
    routes: [
        {
            path: '/',
            name: 'Employees',
            component: Employees
        },
        {
            path: '/weather',
            name: 'Weather',
            component: WeatherForecast
        }
    ]
})
