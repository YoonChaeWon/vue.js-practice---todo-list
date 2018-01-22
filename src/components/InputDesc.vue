<template>
    <div class="user-input">
        <p id="i2">
            <label for="desc"> 세부내용: </label><br>
            <textarea id="desc" cols="40" rows="10"
             @input="$emit('input', $event.target.value)"
             :value="value"></textarea>
        </p>
    </div>
</template>
<script>
export default {
    props:['value']
}
</script>
