<template>
    <div>
        <h2>{{$route.params.todo}}</h2>
        <b>Description: </b>
        <div>{{$route.params.desc}}</div>
        <b> Importance: </b>
        <div>{{$route.params.importance}}</div>
        <b> Due: </b>
        <div>{{$route.params.due}}</div>
    </div>
</template>

<script>
import { eventBus } from '../main.js'

export default({
    created(){
        eventBus.$on('todolist', function(data){
            console.log(data)
        })
    },
    data: function(){
        return{
            
        }
    },
    methods: {
    },
    name:'TodoInfo'
})
</script>