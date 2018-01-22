<template>
    <p id="i4">
        <label for="due"> 기한: </label>
        <input type="date" id="userdue" name="userdue"
         @input="$emit('input', $event.target.value)"
         :value="value">
    </p>
</template>
<script>
export default {
  props:['value']
}
</script>

