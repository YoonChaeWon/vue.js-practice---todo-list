<template>
    <div class="delete-page">
        <div class="page-header">
            <h3> Delete Todo Page </h3>
        </div>
        <div class="form-inline">
            <input placeholder="삭제할 todo 입력" class="form-control" 
                v-model="deleted">
            <button type="submit" class="btn btn-danger" @click="deleteTodo(deleted)">Delete</button>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../main.js'
import api from '../main.js'

var TODO_API = 'http://localhost/mongo/rc_api/v1.0/todos'
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
    }
}
</script>
<style scoped>
.form-control{
    width: 250px;
}
.form-inline{
    padding-left: 2%;
}
</style>
