<template>
    <div class="addition">
        <h3> Add Todo Page </h3>
            <p id="i1">
                <label for="todo"> 할 일: </label>
                <input id="todo" v-model="todo" placeholder="할 일을 입력하세요" >
            </p>
            <p id="i2">
                <label for="desc"> 세부내용: </label><br>
                <textarea id="desc" cols="40" rows="10" v-model="desc"></textarea>
            </p>
            <p id="i3">
                <label for="importance"> 중요도: </label>
                <select v-model="importance">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </p>
            <p id="i4">
                <label for="due"> 기한: </label>
                <input type="date" v-model="due" id="userdue" name="userdue" value="">
            </p>
            <button class="btn btn-primary" @click="addTodo">Add</button>

    </div>
</template>

<script>
import { eventBus } from '../main.js'

export default{
    data: function(){
        return {
            todo: '',
            desc: '',
            importance: '',
            due: ''
        }
    },
    methods: {
        addTodo: function(){
            eventBus.$emit('add', [this.todo, this.desc, this.importance, this.due])
        }
    },
    name: 'AddItem'
}
</script>

<style scoped>
form{
    position: relative;
    margin: 0 auto;
    width: 20%;
}

</style>