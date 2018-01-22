<template>
    <div id="update-page">
        <div class="page-header">
            <h3> Update Todo Page </h3>
        </div>
        <input-todo :todo="todo" v-model="todo"></input-todo>
        <input-desc :desc="desc" v-model="desc"></input-desc>
        <input-imp :importance="importance" v-model="importance"></input-imp>
        <input-due :value="due" v-model="due"></input-due>
        <button class="btn btn-primary" @click="updateTodo">Edit</button>
    </div>
</template>

<script>
import api from '../main.js'
import { eventBus } from '../main.js'
import router from '../router'
import InputTodo from './InputTodo.vue'
import InputDesc from './InputDesc.vue'
import InputImp from './InputImp.vue'
import InputDue from './InputDue.vue'

var TODO_API = 'http://localhost/mongo/rc_api/v1.0/todos'
var FILTER_API = '?json=%7B%22filter%22%3A%20%7B%22todo%22%3A%20%22'
var REST_API = '%22%7D%7D'

export default{
    components:{
        InputTodo,
        InputDesc,
        InputImp,
        InputDue
    },
    props:['todo_name', 'p_desc', 'p_imp', 'p_due'],
    data(){
        return{
            todo: this.todo_name,
            desc: this.p_desc,
            importance: this.p_imp,
            due: this.p_due
        }
    },
    methods:{
        updateTodo(){
            api.put(TODO_API, {
                "sets": {"todo": this.todo, "desc": this.desc, "importance": this.importance, "due": this.due},
                "filter": {"todo": this.todo_name}
            }).then((response)=> {
                console.log(response)
                eventBus.$emit('update', this.todo_name)
                router.push('/')
            })
        }
    },
    watch: {
       todo_name: function(){
           this.todo = this.todo_name
       },
       p_desc: function(){
           this.desc = this.p_desc
       },
       p_imp: function(){
           this.importance = this.p_imp
       },
       p_due: function(){
           this.due = this.p_due
       }
    }
}
</script>