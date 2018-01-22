<template>
    <div class="form-horizontal">
        <p id="i3">
            <label for="importance" class="col-sm-1 control-label"> 중요도 </label>
            <select @input="$emit('input', $event.target.value)" class="form-control"
                    :value="value">
                <option v-for="option in options" :key="option.num">
                    {{option.num}}
                </option>
            </select>
        </p>
    </div>
</template>

<script>
export default {
    props:['value'],
    data(){
        return{
            options: [
                {num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5}
            ] 
        }
    }
}
</script>

<style scoped>
.form-control{
    width: 150px;
}
</style>
