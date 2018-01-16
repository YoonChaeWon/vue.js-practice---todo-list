
const API_URL = 'http://crud-vuejs.vivans.net:35000'
const LOGIN_URL = API_URL + '/vuejs/api/v1.0/login'
import axios from 'axios'

export default{
    user:{
        authenticated: false
    },

    login(){
        axios.post('http://crud-vuejs.vivans.net:35000/aaa/api/v1.0/login', {
            "user_id": "vuejs",
            "password": "34db9a6d86aaac93b3e784e9ec6f3b11c2128c0abe8e4922ceac53e0b8895a4e"
        })
        .then(function(response){
            console.log('login!')
            console.log(response)

            localStorage.setItem('id_token', response.data.id_token)
            localStorage.setItem('access_token', response.data.access_token)
            this.user.authenticated = true
        })
    },
    checkAuth(){
        var jwt = localStorage.getItem('id_token')
        if(jwt){
            this.user.authenticated = true
        }
        else{
            this.user.authenticated = false
        }
    },

    getAuthHeader(){
        return {
            'Authorization': 'Bearer ' + localStorage.getItem
        }
    }
}