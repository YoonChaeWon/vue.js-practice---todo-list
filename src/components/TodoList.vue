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
                        :todo="item">
                </TodoItem>
            </tr>
        </table>
    </div>

    
</template>

<script>
import { eventBus } from '../main.js'
import TodoItem from './TodoItem.vue'
import AddItem from './AddItem.vue'

export default {
    components: {
        TodoItem,
        AddItem
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
            ]
        }
    },
    methods:{
        addTodo: function(){
            console.log('data')
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