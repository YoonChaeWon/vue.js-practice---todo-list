<template>
    <div class="item">
        <tr>
            <td>{{ todo.id }}</td>
            <router-link :to="{name: 'info', params:{todo_id: todo.id}}">
                <td>{{ todo.todo }}</td>
            </router-link>
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
            type: Object
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