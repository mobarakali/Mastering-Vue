<script setup>
const items = [1,2,3,4,5];

</script>

<template>
  <div>
    <ul>
      <!-- <li v-for="item in items">{{ item }} </li> -->
      <li v-for="n in 10">{{ n }} </li>
    </ul>
  </div>
  
</template>

<style scoped>
ul{
  list-style-type: none;
  min-width: 300px;
}
li{
  background-color: #ffffff66;
  margin: 2px auto;
  color: #0fff00;
  padding:5px;
}

</style>
