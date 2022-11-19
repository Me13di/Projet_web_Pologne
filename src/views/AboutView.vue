
<template>
  <div class="parent">
    <Panier v-for="event of events" :key="event.id" :event="event" />
  </div>
  </template>

  <script>

  import Panier from '../components/Panier.vue'
  import {useTodos} from '../store/produit.js'
  import {ref} from 'vue'

  export default {
    components: {
      Panier // register it as a child component
    },
    setup() {
      let events = ref([])
      const todos = useTodos()
      return {todos, events}
    }, 

    created() {
      console.log("Helo");
      this.events = this.todos.todos; 
    }
  }
  </script>
   <style scoped>
   .home {
     height: 100%
   }
   
   .parent {
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(2, 1fr);
   grid-column-gap: 0px;
   grid-row-gap: 0px;
   height: 100vh;
   }
   
   </style>
  