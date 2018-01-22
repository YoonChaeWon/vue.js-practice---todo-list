<template>
    <p id="i3">
        <label for="importance"> 중요도: </label>
        <select @input="$emit('input', $event.target.value)"
                :value="value">
            <option v-for="option in options" :key="option.num">
                {{option.num}}
            </option>
        </select>
    </p>
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
