<template>
  <div id="app">
    <div id="home">
      <div class="page-header">
        <router-link to="/"><h2> Home </h2> </router-link>
        <button class="but btn-primary" @click="login"> button </button>
      </div>
      <p>
        <router-link to="/list"><button> Show List </button></router-link>
        <router-link to="/addtodo"> <button>Add Page</button> </router-link>
        <router-link to="/deletetodo"> <button>Delete Page</button> </router-link>
        <router-link to="/updatetodo"> <button>Update Page</button> </router-link>
      </p>
      
    </div>
    <div>
      <p>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </p>
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
  },
  methods:{
    login(){
      this.$http.post('http://crud-vuejs.vivans.net:35000/aaa/api/v1.0/login', {
        "user_id": "vuejs",
        "password": "34db9a6d86aaac93b3e784e9ec6f3b11c2128c0abe8e4922ceac53e0b8895a4e"
      })
      .then(function(response){
        console.log(response)
      })
    }
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
