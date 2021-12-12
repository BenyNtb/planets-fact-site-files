<template>
    <div>
    <div>
        <router-link :to="{name:'PlanetsDetails', params:{planetsSlug : info.id}}"
        v-for="info in infoId" :key="info.id">
        {{planets.name}}
        </router-link>
    </div>
    <router-view :key='$route.path'/>
    </div>
</template>

<script>
import store from '../assets/store'
export default {
    name: 'Home',
    data() {
        return {
            infoId: store.planets
        }
    }
}
</script>
