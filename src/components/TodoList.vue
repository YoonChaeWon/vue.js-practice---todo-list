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
        <button type="button" class="btn btn-primary" @click="insertTodoList">List Insert</button>
    </div>
</template>

<script>
import axios from 'axios'
import { eventBus } from '../main.js'
import AddItem from './AddItem.vue'
import DeleteItem from './DeleteItem.vue'
import axiosInstance from '../main.js'

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
            newid: 4,
            posts:[],
            postBody: '',
            errors:[]
        }
    },
    methods:{
        addTodo(d1, d2, d3, d4){
            this.todos.push(
                {id: this.newid++, todo: d1, desc: d2, 
                 importance: d3, due: d4}
            )
        },
        deleteTodo(data){
            this.todos.splice(data, 1)
        },
        insertTodoList(){
            axios.post('http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos', {
                todos: [
                    {id: 1, todo: 'Todo1', desc: 'Todo1입니다.', importance: '1', due: ''},
                    {id: 2, todo: 'Todo2', desc: 'Todo2입니다.', importance: '2', due: '2018-01-30'},
                    {id: 3, todo: 'Todo3', desc: 'Todo3입니다.', importance: '5', due: ''}
                ]
            }).then((result) => {
                console.log('Insert Todo List in DB')
                console.log(result)
            })
        },
        getTodoList(){
            axios.get('http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos')
            .then((response)=>{
                console.log(response)
                this.todos = response.data
            })
        },
        searchTerm(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((result) => {
                   console.log(result)
                   this.posts = result.data
               })
        },
        impPost(){
            console.log('impPost', 'impPoist is implementing...')
            axios.post('http://jsonplaceholder.typicode.com/posts', {
               title: this.postTittle,
               body: this.postBody
           })
           .then(response => {})
           .catch(e => {
               this.error.push(e)
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