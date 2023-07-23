<script setup>
// const items = [1,2,3,4,5];
const tasks =[
  {id:1, title:'Wakeup Early @ 4AM', status:"In Progress"},
  {id:2, title:'Perform Fajr Salat', status:"In Progress"},
  {id:3, title:'Morning Walk', status:"In Progress"},
  {id:4, title:'Start Office', status:"Completed"},
  {id:5, title:'Break Fast', status:"In Progress"}
]

function getCompletedTasks (){
  // return tasks.filter(task=>"Completed" ==task.status);
  return tasks.filter(task=>"Completed" == task.status)
} 
function getTasksInProgress (){
  return tasks.filter(task=>"In Progress" ==task.status);
} 

</script>

<template>
  <div>
    <h2>Task Completed</h2>
    <ul>
      <!-- <li v-for="item in items">{{ item }} </li> -->
      <!-- <li v-for="task in tasks" :key="task.id">{{ task.title }} </li> -->
      <li v-for="task in getCompletedTasks()" :key="task.id">{{ task.title }} </li>
    </ul>
    <h2>Task In Pregress</h2>
    <ul>
      <li v-for="task in getTasksInProgress()" :key="task.id">{{ task.title }} </li>
    </ul>

    <div style="margin: 10px auto ;" v-for="(task, index) in tasks" :key="index">
      {{ task.id }}. {{task.title }}
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
