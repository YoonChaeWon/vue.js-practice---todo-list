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
                    <router-link :to="{name: 'updatetodo', params: {todo_name:todo.todo}}"> 
                        <td>{{ todo.todo }}</td>
                     </router-link> 
                    <td>{{ todo.desc }}</td>
                    <td>{{ todo.importance }}</td>
                    <td>{{ todo.due }}</td>
                </tr>
            </tbody>
        </table>
        <div>
            <button type="button" class="btn btn-primary" @click="getTodoList">Get List</button>
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
import api from '../main.js'
import { eventBus } from '../main.js'
import AddItem from './AddItem.vue'
import DeleteItem from './DeleteItem.vue'

export default {
    components: {
        AddItem
    },
    data(){
        return {
            todos: [],
            deleted:'',
            len: 0
        }
    },
    created(){
        
    },
    methods:{
        addTodo(d1, d2, d3, d4){
            console.log(this.len)
            api.post('http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos', {
                "id": ++this.len, "todo": d1, "desc": d2, "importance": d3, "due": d4 
            }).then((response) => {
                console.log('addTodo', response)
            })
        },
        deleteTodo(data){
            api.delete('http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos',{
                    "todo": data
            }).then((response)=>{
                console.log('deleteTodo', response)
                })
            this.len--
        },
        getTodoList(){
            api.get('http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos')
                .then((response)=>{
                    this.todos = response.data.data
                    this.len = this.todos.length
                })
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