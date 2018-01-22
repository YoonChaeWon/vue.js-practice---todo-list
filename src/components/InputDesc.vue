<template>
    <div class="form-horizontal">
        <p id="i2">
            <label for="desc" class="col-sm-1 control-label"> 세부내용 </label><br>
            <textarea id="desc" rows="5" width="100px" class="form-control"
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
<style scoped>
.form-control{
    width: 400px;
    height: 150px;
    margin: 0px 31.5px 0px 0px;
}
</style>