<template>
    <div class="page-header">
        <h3> {{ message }} </h3>
    </div>
</template>

<script>
export default {
    name: 'HeaderMessage',
    data: function(){
        return{
            message: 'Message'
        }
    }
}
</script>

<style>
h3{
    text-align: center;
}
</style>
