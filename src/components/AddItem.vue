<template>
    <div class="add-page">
        <div class="page-header">
            <h3> Add Todo Page </h3>
        </div>
        <div class="form-group">
            <input-todo v-model="todo"></input-todo>
            <input-desc v-model="desc"></input-desc>
            <input-imp v-model="importance"></input-imp>
            <input-due v-model="due"></input-due>
            <div class="add-button">
            <button class="btn btn-primary" @click="addTodo">Add</button>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main.js'
import api from '../main.js'
import InputTodo from './InputTodo.vue'
import InputDesc from './InputDesc.vue'
import InputImp from './InputImp.vue'
import InputDue from './InputDue.vue'

var TODO_API = 'http://localhost/mongo/rc_api/v1.0/todos'

export default{
    components:{
        InputTodo,
        InputDesc,
        InputImp,
        InputDue
    },
    data: function(){
        return {
            todo: '',
            desc: '',
            importance: '',
            due: ''
        }
    },
    methods: {
        addTodo: function(){
            if(this.todo.trim() === ''){
                alert('할 일을 반드시 적어야 함') 
            }
            else{
                api.post(TODO_API, {
                    "todo": this.todo, "desc": this.desc, "importance": this.importance, "due": this.due 
                }).then((response) => {
                    console.log('addTodo', response)
                    eventBus.$emit('add', response.data.data[0]) // TodoList에게 추가한 todo item 전송
                })
            }
            this.todo=''
            this.desc=''
            this.importance=''
            this.due=''
        }
    },
    name: 'AddItem'
}
</script>

<style scoped>
.add-button{
    padding-left: 15%;
}
</style>