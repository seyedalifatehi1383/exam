<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import useCounterStore from './stores/counter'

const store = useCounterStore()
</script>

<template>
<div v-for="item in store" @click="">
  <p> item. </p>
  <p> item. </p>
</div>  
</template>

<style scoped>

</style>
