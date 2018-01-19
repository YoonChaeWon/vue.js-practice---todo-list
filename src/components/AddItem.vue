<template>
    <div class="add-page">
        <h3> Add Todo Page </h3>
            <p id="i1">
                <label for="todo"> 할 일: </label>
                <input id="todo" v-model="todo" placeholder="할 일을 입력하세요(필수)" >
            </p>
            <p id="i2">
                <label for="desc"> 세부내용: </label><br>
                <textarea id="desc" cols="40" rows="10" v-model="desc"></textarea>
            </p>
            <p id="i3">
                <label for="importance"> 중요도: </label>
                <select v-model="importance">
                    <option v-for="option in options" :key="option.num">
                            {{option.num}}
                    </option>
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
import api from '../main.js'

var TODO_API = 'http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos'

export default{
    data: function(){
        return {
            todo: '',
            desc: '',
            importance: '',
            due: '',
            options: [
              {num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5}
            ]
        }
    },
    methods: {
        addTodo: function(){
            if(this.todo.trim() === ''){
                alert('할 일을 반드시 적어야 함') 
            }
            else{
                api.post(TODO_API, {
                    "todo": this.todo, "desc": this.desc, "importance": this.importance, "due": this.due 
                }).then((response) => {
                    console.log('addTodo', response)
                    eventBus.$emit('add', response.data.data[0]) // TodoList에게 추가한 todo item 전송
                })
            }
            this.todo=''
            this.desc=''
            this.importance=''
            this.due=''
        }
    },
    name: 'AddItem'
}
</script>

<style scoped>

</style>