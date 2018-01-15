<template>
    <div id="delete-page">
        <p>
            <input placeholder="삭제할 todo의 id입력" 
                   v-model="deleted">
            <button @click="deleteTodo">삭제</button>
        </p>
        {{ deleted }}
    </div>
</template>

<script>

export default{
    data: function(){
        return{
            deleted: ''
        }
    },
    methods: {
        deleteTodo: function(){
          
        }
    }
}
</script>