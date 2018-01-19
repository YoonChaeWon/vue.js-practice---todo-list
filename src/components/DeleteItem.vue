<template>
    <div id="delete-page">
        <h3> Delete Todo Page </h3>
        <p>
            <input placeholder="삭제할 todo 입력" 
                   v-model="deleted">
            <button @click="deleteTodo(deleted)">삭제</button>
        </p>
    </div>
</template>

<script>
import { eventBus } from '../main.js'
import api from '../main.js'

var TODO_API = 'http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos'
var FILTER_API = '?json=%7B%22filter%22%3A%20%7B%22todo%22%3A%20%22'
var REST_API = '%22%7D%7D'

export default{
    data: function(){
        return{
            deleted: ''
        }
    },
    methods: {
        deleteTodo: function(deleted){
            if(deleted.trim() === ''){
                alert('반드시 입력') 
            }
            else{
                api.delete(TODO_API + FILTER_API + deleted + REST_API , {
                    "filter": {"todo": deleted}
                }).then((response) => {
                    console.log('deleteTodo', response)
                    eventBus.$emit('delete', deleted)
                })
            }
            this.deleted=''
        }
    },
    props: ['todos']
}
</script>