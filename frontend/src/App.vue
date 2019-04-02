<template>
  <div id="app" class="container">
    <employees></employees>
  </div>
</template>

<script>
import Employees from './components/Employees.vue'

export default {
  name: 'app',
  components: {
    Employees
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
