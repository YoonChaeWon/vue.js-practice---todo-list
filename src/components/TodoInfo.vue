<template>
    <div>
        <h2>{{todo.todo}}</h2>
        <b>Description: </b>
        <div>{{todo.desc}}</div>
        <b> Importance: </b>
        <div>{{todo.importance}}</div>
        <b> Due: </b>
        <div>{{todo.due}}</div>
    </div>
</template>

<script>
export default({
    props: {
        todo: {
            type: Object
        }
    }  
})
</script>