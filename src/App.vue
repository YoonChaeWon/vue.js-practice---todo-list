<template>
  <div id="app">
    <HeaderMessage></HeaderMessage>
    <TodoList></TodoList>

    <AddItem></AddItem>
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
h3{
    text-align: center;
}
</style>
