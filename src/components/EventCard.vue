<template>
  <div class="event-card">

  <span> {{ event.title }}</span>
  <v-img v-bind:src=event.picture
                  max-height="125"
                  cover
                  class="bg-grey-lighten-2"
      ></v-img>
      
      <input id="ticketNum" type="number" name="ticketNum" v-bind:value=event.amount />
      <v-btn @click="commander()"> Ajouter au panier </v-btn>
      
      
      <!-- <button onclick="commander()" >Ajouter au panier</button> -->

  
  </div>
 </template>
 <script>

 export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
 }
 </script>
 <style scoped>
 .event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
 }
 .event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
 }
 .event-cart img{
  width: 300px;
  height: 200px;
 }
 </style>
