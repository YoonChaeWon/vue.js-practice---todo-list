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
                        v-bind:id="item.id"
                        v-bind:todo="item.todo"
                        v-bind:desc="item.desc"
                        v-bind:importance="item.importance"
                        v-bind:due="item.due">
                </TodoItem>
            </tr>
        </table>
    </div>
</template>

<script>
import { eventBus } from '../main.js'
import TodoItem from './TodoItem.vue'

export default {
    components: {
        TodoItem
    },
    created() {
        eventBus.$on('addition', function(data){
            console.log(data[0])
            console.log(data[1])
            console.log(data[2])
            console.log(data[3])
        })
    },
    data(){
        return{
            todos:[
                {id: 1, todo: 'Todo1', desc: 'Todo1입니다.', 
                    importance: '1', due: ''},
                {id: 2, todo: 'Todo2', desc: 'Todo2입니다.', 
                    importance: '2', due: '2018-01-30'},
                {id: 3, todo: 'Todo3', desc: 'Todo3입니다.', 
                    importance: '5', due: ''}
            ]
        }
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