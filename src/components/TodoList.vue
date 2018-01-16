<template>
    <div class="top">
        <table class="thead">
            <tr>
                <th> </th>
                <th>Todo</th>
                <th>Description</th>
                <th>Importance</th>
                <th>Due</th>
            </tr>
        </table>
        <table class="tbody">
            <tr>
                <TodoItem v-for="item in todos"
                        :key="item.id"
                        :id="item.id"
                        :todo="item">
                </TodoItem>
            </tr>
        </table>

        <button @click="insertTodoList"> List Insert </button>

        <div v-if="hasResult">
            <div v-for="post in posts" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
            </div>
        </div>
        <button v-else @click="searchTerm"> Call </button>

        <div>
            <input type="text" v-model="postBody" @keyup.enter="impPost()"/>
            <ul v-if="errors && errors.length">
                <li v-for="error in errors>
                    {{error.message}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { eventBus } from '../main.js'
import TodoItem from './TodoItem.vue'
import AddItem from './AddItem.vue'
import DeleteItem from './DeleteItem.vue'

export default {
    components: {
        TodoItem,
        AddItem
    },
    computed: {
        hasResult: function(){
            return this.posts.length > 0
        }
    },
    data(){
        return {
            todos: [
                {id: 1, todo: 'Todo1', desc: 'Todo1입니다.', 
                    importance: '1', due: ''},
                {id: 2, todo: 'Todo2', desc: 'Todo2입니다.', 
                    importance: '2', due: '2018-01-30'},
                {id: 3, todo: 'Todo3', desc: 'Todo3입니다.', 
                    importance: '5', due: ''}
            ],
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
            
            axios.post('http://crud-vuejs.vivans.net:35000/mongo/rc_api/v1.0/todos', {
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
.thead{
    width: 70%;
    margin: auto;
}
.tbody{
    width: 90%;
}
</style>