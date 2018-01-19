<template>
    <div class="top">
        <div class="list">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Description</th>
                        <th>Importance</th>
                        <th>Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="todo in todos" :key="todo.todo">
                        <td><router-link :to="{name: 'updatetodo', params: {todo_name:todo.todo, p_desc:todo.desc, p_imp: todo.importance, p_due: todo.due}}"> {{ todo.todo }}</router-link></td>
                        <td>{{ todo.desc }}</td>
                        <td>{{ todo.importance }}</td>
                        <td>{{ todo.due }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p class="router-page">
            <keep-alive> <router-view></router-view> </keep-alive>
        </p>  
    </div>
</template>

<script>
import api from '../main.js'
import { eventBus } from '../main.js'

var TODO_API = 'http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos'
var FILTER_API = '?json=%7B%22filter%22%3A%20%7B%22todo%22%3A%20%22'
var REST_API = '%22%7D%7D'

export default {
    created(){
        api.get(TODO_API)
           .then((response) => {
                this.todos = response.data.data
            })
    },
    data(){
        return {
            todos: [],
            deleted:'',
        }
    },
    methods:{
        addTodo(data){
            this.todos.push(data)
        },
        deleteTodo(data){
            var index = this.findIndex(data)
            this.todos.splice(index, 1)
        },
        findIndex(data){
            for(var i = 0; i < this.todos.length; i++){
                if(this.todos[i].todo === data){
                    return i
                }
            }
        }
    },
    mounted(){
        let self = this
        eventBus.$on('add', function(data){
            self.addTodo(data)
        })
        eventBus.$on('delete', function(data){
            self.deleteTodo(data)
        })
    },
    name: 'TodoList'
}
</script>

<style>
tr {display: block; }
th, td { width: 300px; }
tbody { display: block; height: 200px; overflow: auto;} 
</style>