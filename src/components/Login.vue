<template>
    <div class="login">
        <h3> Login </h3>
        <div class="form=group">
            <input type="text" placeholder="ID" v-model="userId">
            <input type="password" placeholder="password" v-model="userPass">
        </div>
        <button class="btn btn-primary" @click="tryLogin"> LOGIN </button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            userId: '',
            userPass: ''
        }
    },
    methods: {
        tryLogin(){
            //로그인 성공이면
            
        }
    }
}
</script>

<style>