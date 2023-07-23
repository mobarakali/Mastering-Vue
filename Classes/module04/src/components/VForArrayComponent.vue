<template>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <span class="bold">{{ item.title }}</span> - {{ item.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const items = reactive([
        {
          id: 1,
          title: "Item 1",
          description: "Description for Item 1"
        },
        {
          id: 2,
          title: "Item 2",
          description: "Description for Item 2"
        },
        {
          id: 3,
          title: "Item 3",
          description: "Description for Item 3"
        },
        {
          id: 4,
          title: "Item 4",
          description: "Description for Item 4"
        },
        {
          id: 5,
          title: "Item 5",
          description: "Description for Item 5"
        },
        {
          id: 6,
          title: "Item 6",
          description: "Description for Item 6"
        }
      ]);
  
      return {
        items
      };
    }
  };
  </script>
  
<style scoped>
.bold{
    font-weight: bold;
}
</style>