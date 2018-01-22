<template>
    <div class="form-horizontal">
        <p id="i4">
            <label for="due" class="col-sm-1 control-label"> 기한 </label>
            <input type="date" id="userdue" name="userdue" class="form-control"
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
<style scoped>
.form-control{
    width: 150px;
}
</style>
