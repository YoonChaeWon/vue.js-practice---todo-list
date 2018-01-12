<template>
  <div id="app">
    <div id="home">
      <router-link to="/"> <HeaderMessage></HeaderMessage> </router-link>
      <p>
        <router-link to="/add-item"> <button>Add Page</button> </router-link>
        <router-link to="/delete-item"> <button>Delete Page</button> </router-link>
        <router-link to="/update-item"> <button>Update Page</button> </router-link>
      </p>
      
    </div>
    <div>
      <p>
        <router-view></router-view>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderMessage from './components/HeaderMessage'
import TodoList from './components/TodoList'
import AddItem from './components/AddItem'

export default {
  name: 'app',
  components: {
    HeaderMessage,
    TodoList,
    AddItem
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
h1, h3{
    text-align: center;
}
p{
  text-align:center;
}
</style>
