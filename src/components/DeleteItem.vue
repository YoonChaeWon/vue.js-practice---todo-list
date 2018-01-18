<template>
    <div id="delete-page">
        <h3> Delete Todo Page </h3>
        <p>
            <input placeholder="삭제할 todo 입력" 
                   v-model="deleted">
            <button @click="deleteTodo">삭제</button>
        </p>
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
            eventBus.$emit('delete', this.deleted)
            this.deleted=''
        }
    },
    props: ['todos']
}
</script>