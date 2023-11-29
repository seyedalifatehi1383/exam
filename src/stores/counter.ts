import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type Product = {
  id:string,
  title: string
}

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  let products = ref([] as Product[])
  
  function addProduct (id:string, title:string) {
    products.value.push({id, title})
  }

  function removeProduct (id:string) {
    for (let i = 0; i < products.value.length; i++) {
      if (products[i].value.id === id) {
        for(let j = i + 1; j < products.value.length; j++) {
          products[j - 1] = products[j]
        }
      }
    }
  }

  export default {
    return { count, doubleCount, products, addProduct, removeProduct }
  }
})
