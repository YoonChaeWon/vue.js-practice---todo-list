<template>
    <div class="top">
        <table class="table">
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
                    <td><router-link :to="{name: 'updatetodo', params: {todo_name:todo.todo}}"> {{ todo.todo }}</router-link></td>
                    <td>{{ todo.desc }}</td>
                    <td>{{ todo.importance }}</td>
                    <td>{{ todo.due }}</td>
                </tr>
            </tbody>
        </table>
        <div>
            <p>
                <keep-alive> <router-view></router-view> </keep-alive>
            </p>
        </div>
        
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
        addTodo(d1, d2, d3, d4){
                api.post(TODO_API, {
                   "todo": d1, "desc": d2, "importance": d3, "due": d4 
                }).then((response) => {
                    console.log('addTodo', response)
                    this.todos.push(response.data.data[0])
                })
        },
        deleteTodo(data){
            api.delete(TODO_API + FILTER_API + data + REST_API , {
                    "filter": {"todo": data}
            }).then((response) => {
                console.log('deleteTodo', response)
                var index = this.findIndex(data)
                this.todos.splice(index, 1)
            })
        },
        findIndex(data){
            for(var i = 0; i < this.todos.length; i++){
                if(this.todos[i].todo === data){
                    console.log(i)
                    return i
                }
            }
        }
    },
    mounted(){
        let self = this
        eventBus.$on('add', function(data){
            self.addTodo(data[0], data[1], data[2], data[3])
        })
        eventBus.$on('delete', function(data){
            self.deleteTodo(data)
        })
    },
    name: 'TodoList'
}

</script>

<style>

</style>