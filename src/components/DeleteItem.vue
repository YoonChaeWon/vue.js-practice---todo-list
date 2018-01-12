<template>
    <div id="delete-page">
        <p>
            <input placeholder="삭제할 todo의 id입력" 
                   v-model="deleted">
            <button @click="deleteTodo">삭제할게염~</button>
        </p>
        {{ deleted }}
    </div>
</template>

<script>
import { eventBus } from '../main.js'

export default{
    data: function(){
        return{
            deleted: ''
        }
    },
    methods: {
        deleteTodo: function(){
            console.log('in')
            eventBus.$emit('delete-todo')
        }
    }
}
</script>