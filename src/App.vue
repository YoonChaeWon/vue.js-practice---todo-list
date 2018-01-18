<template>
  <div id="app">
    <div id="home">
      <div class="page-header">
        <router-link to="/"><h2> Home </h2> </router-link>
        <p>
          <!-- <router-link to="/list"><button> Show List </button></router-link> -->
          <router-link to="/addtodo"> <button>Add Page</button> </router-link>
          <router-link to="/deletetodo"> <button>Delete Page</button> </router-link>
          <!-- <router-link to="/updatetodo"> <button>Update Page</button> </router-link> -->
        </p>
      </div>
      <TodoList></TodoList>

    </div>
  </div>
</template>

<script>
import HeaderMessage from './components/HeaderMessage'
import TodoList from './components/TodoList'
import AddItem from './components/AddItem'
import DeleteItem from './components/DeleteItem'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HeaderMessage,
    TodoList,
    AddItem,
    DeleteItem
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
h1, h2, h3{
    text-align: center;
}
p{
  text-align:center;
}
</style>
