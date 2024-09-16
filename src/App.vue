<template>
  <div class="container">
    <Task4 />
    <Task5 />
    <Task6 />
    <Task7 />
  </div>
</template>

<script>
import Task4 from "@/components/Task4.vue"
import Task5 from "@/components/Task5.vue"
import Task6 from "@/components/Task6.vue"
import Task7 from "@/components/Task7.vue"


export default {
  name: 'App',
  components: {
    Task4,
    Task5,
    Task6,
    Task7,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.task-border {
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    margin-top: 25px;
    display: inline-block;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center
}
</style>
