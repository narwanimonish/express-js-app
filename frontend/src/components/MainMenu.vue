<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item"> <!-- active -->
                    <router-link class="nav-link" :to="{name: 'Employees'}">
                        Employees
                    </router-link>
                </li> 
                <li class="nav-item"> 
                    <router-link class="nav-link" :to="{name: 'Weather'}">
                        Weather Forecast
                    </router-link>
                </li> 
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

