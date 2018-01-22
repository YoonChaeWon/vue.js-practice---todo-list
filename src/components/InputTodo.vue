<template>
    <div class="user-input">
        <div class="form-horizontal">
            <label for="todo" class="col-sm-1 control-label"> 할 일 </label>
            <input id="todo" placeholder="할 일을 입력하세요(필수)" class="form-control"
             @input="$emit('input', $event.target.value)"
             :value="value">
        </div>
    </div>
</template>

<script>
export default {
    props:['value']
}
</script>

<style scoped>
.form-control{
    width: 250px;
}
</style>
