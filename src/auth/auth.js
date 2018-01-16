
const API_URL = 'http://crud-vuejs.vivans.net:35000'
const LOGIN_URL = API_URL + '/vuejs/api/v1.0/login'
import axios from 'axios'

export default{
    user:{
        authenticated: false
    },

    login(context, id, pass, redirect){
        axios.post(LOGIN_URL, id, pass, (data)=>{
            localStorage.setItem('id_token', data.id_token)

            this.user.authenticated = true
            if(redirect){
                router.go(redirect)
            }
        }).error((err) => {
            context.error = err
        })
    }
}