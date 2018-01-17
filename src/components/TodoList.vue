<template>
    <div class="top">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th>Todo</th>
                    <th>Description</th>
                    <th>Importance</th>
                    <th>Due</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todos" :key="todo.id">
                     <td>{{ todo.id }}</td>
                    <!-- <router-link :to="{name: 'info', params:{todo_id: todo.id}}"> -->
                    <td>{{ todo.todo }}</td>
                    <!-- </router-link> -->
                    <td>{{ todo.desc }}</td>
                    <td>{{ todo.importance }}</td>
                    <td>{{ todo.due }}</td>
                </tr>
            </tbody>
        </table>
        <button type="button" class="btn btn-primary" @click="getTodoList">Get List</button>
    </div>
</template>

<script>
import api from '../main.js'
import { eventBus } from '../main.js'
import AddItem from './AddItem.vue'
import DeleteItem from './DeleteItem.vue'

export default {
    components: {
        AddItem
    },
    computed: {
        hasResult: function(){
            return this.posts.length > 0
        }
    },
    data(){
        return {
            todos: [],
            newid: 1
        }
    },
    created(){
        this.getTodoList()
    },
    methods:{
        addTodo(d1, d2, d3, d4){
            var len = this.todos.length
            console.log('len', len)
            api.post('http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos', {
                "id": ++len, "todo": d1, "desc": d2, "importance": d3, "due": d4 
            }).then((result) => {
                console.log('addTodo', result)
            })
        },
        deleteTodo(data){
            this.todos.splice(data, 1)
        },
        getTodoList(){
            api.get('http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos')
                .then((response)=>{
                    console.log('response', response)
                    console.log('getTodoList', response.data.data)
                    this.todos = response.data.data
                })
        },
        sendTodos(){
            eventBus.emit('todolist', this.todos)
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