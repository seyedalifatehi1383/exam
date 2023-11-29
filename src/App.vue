<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import {useCounterStore} from './stores/counter'

const counterStore = useCounterStore()

function search(title:string) {
  
}
</script>

<template>
<input type="text" >

<div v-for="item in counterStore.products" @dblclick="counterStore.removeProduct(item.id)">
  <p> {{item.id}} </p>
  <p> {{item.title}} </p>
  <br>
</div>  
</template>

<style scoped>
div {
  border: 2px solid red;
}
</style>
