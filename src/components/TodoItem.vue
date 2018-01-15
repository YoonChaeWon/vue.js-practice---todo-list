<template>
    <div class="item">
        <tr>
            <td>{{ todo.id }}</td>
            <td>{{ todo.todo }}</td>
            <td>{{ todo.desc }}</td>
            <td>{{ todo.importance }}</td>
            <td>{{ todo.due }}</td>
            <td><button> Delete </button></td>
        </tr>
    </div>
</template>

<script>
export default{
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.item{
    width: 90%;
    margin:auto;
}
</style>