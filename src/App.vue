<template>
  <div id="app">
    <HeaderMessage></HeaderMessage>
    <TodoList></TodoList>
  </div>
</template>

<script>
import HeaderMessage from './components/HeaderMessage'
import TodoList from './components/TodoList'

export default {
  name: 'app',
  components: {
    HeaderMessage,
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
</style>
