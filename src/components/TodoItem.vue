<template>
    <div class="item">
        <tr>
            <td>{{ id }}</td>
            <td>{{ todo }}</td>
            <td>{{ desc }}</td>
            <td>{{ importance }}</td>
            <td>{{ due }}</td>
        </tr>
    </div>
</template>

<script>
export default{
    name: 'TodoItem',
    props: ['id', 'todo', 'desc', 'importance', 'due']
}
</script>

<style>
.item{
    width: 90%;
    margin:auto;
}
</style>