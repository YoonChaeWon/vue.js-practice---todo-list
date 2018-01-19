<template>
    <div id="update-page">
        <h3> Update Todo Page </h3>
        <h4> {{todo_name}} 수정 </h4>
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
                <option v-for="option in options" :key="option.num">
                        {{option.num}}
                </option>
            </select>
        </p>
        <p id="i4">
            <label for="due"> 기한: </label>
            <input type="date" v-model="due" id="userdue" name="userdue" value="">
        </p>
        <!-- <button class="btn btn-danger" @click="findTodo">Bring</button> -->
        <button class="btn btn-primary" @click="updateTodo">Edit</button>
    </div>
</template>

<script>
import api from '../main.js'

var TODO_API = 'http://vuejs.crudbot.vivans.net:31230/mongo/rc_api/v1.0/todos'
var FILTER_API = '?json=%7B%22filter%22%3A%20%7B%22todo%22%3A%20%22'
var REST_API = '%22%7D%7D'

export default{
    props:['todo_name', 'p_desc', 'p_imp', 'p_due'],
    data(){
        return{
            todo: this.todo_name,
            desc: this.p_desc,
            importance: this.p_imp,
            due: this.p_due,
            options: [
              {num: 1}, {num: 2}, {num: 3}, {num: 4}, {num: 5}
            ]
        }
    },
    methods:{
        updateTodo(){
            api.put(TODO_API, {
                "sets": {"todo": this.todo, "desc": this.desc, "importance": this.importance, "due": this.due},
                "filter": {"todo": this.todo_name}
            }).then((response)=> {
                console.log(response)
                this.findTodo()
            })
        }
    },
    watch: {
       todo_name: function(){
           this.todo = this.todo_name
       },
       p_desc: function(){
           this.desc = this.p_desc
       },
       p_imp: function(){
           this.importance = this.p_imp
       },
       p_due: function(){
           this.due = this.p_due
       }
    }
}
</script>