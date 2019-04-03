<template>
    <div class="weather-forcast">
        
        <table class="table table-bordered">
            <tbody>
                <tr>
                    <template v-for="(temp,key) in temps">
                        <th scope="row"  :key="key">{{getDay(temp.dt_txt)}}</th>
                    </template>
                </tr>
                <tr>
                    <template v-for="(temp,key) in temps">
                        <td  :key="key">{{temp.main.temp}}&#8451;</td>
                    </template>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {weatherApi} from './../config'
export default {
    created() {
        this.fetchWeatherData()
    },

    data() {
        return {
            temps: []
        }
    },

    methods: {
        fetchWeatherData() {
            this.$http.get(weatherApi).then((response) => {
                let tempsData = response.data
                if(tempsData.list.length) {
                    let currDate = ""
                    for(let i = 0; i < tempsData.list.length; i++) {
                        if (currDate != tempsData.list[i].dt_txt.substr(0, 10)) {
                            currDate = tempsData.list[i].dt_txt.substr(0, 10)
                            this.temps.push(tempsData.list[i])
                        }
                    }
                }
            })
        },
        getDay(dateVal) {
            let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
            let dateObj = new Date(dateVal)
            
            return days[dateObj.getDay()]
        }
    }
}
</script>

<style scoped>
.weather-forcast {
    padding-top: 5rem;
}
</style>

