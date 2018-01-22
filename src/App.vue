<template>
  <div id="app">
    <div id="home">
      <div class="page-header">
        <router-link to="/"><h2 class="home"> Home </h2> </router-link>
      </div>
      <TodoList></TodoList>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-button{
  text-align: left;
  padding-left: 1.6%;
}
h3{
  padding-left: 2%;
}
.go-add, .go-delete{
  background-color: white;
  border: none;
}
.home{
  text-align: left;
  padding-left: 2%;
}
</style>
