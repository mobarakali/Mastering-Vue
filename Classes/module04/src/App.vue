<script setup>
// const items = [1,2,3,4,5];
const tasks =[
  'Wakeup Early @ 4AM',
  'Perform Fajr Salat',
  'Morning Walk',
  'Start Office',
  'Break Fast'
]

</script>

<template>
  <div>
    <ul>
      <!-- <li v-for="item in items">{{ item }} </li> -->
      <li v-for="task in tasks">{{ task }} </li>
    </ul>

    <div style="margin: 10px auto ;" v-for="(task, index) in tasks">
      {{ index+1 }}. {{ task }}
    </div>
  </div>
  
</template>

<style scoped>
ul{
  list-style-type: none;
  min-width: 300px;
}
li{
  background-color: #ffffff;
  margin: 2px auto;
  color: #000000;
  padding:15px;
  font-size: 1.125rem;
}

</style>
