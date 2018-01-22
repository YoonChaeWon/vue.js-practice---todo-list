<template>
    <div class="user-input">
        <p id="i1">
            <label for="todo"> 할 일: </label>
            <input id="todo" placeholder="할 일을 입력하세요(필수)"
             @input="$emit('input', $event.target.value)"
             :value="value">
        </p>
    </div>
</template>
<script>
export default {
    props:['value']
}
</script>
