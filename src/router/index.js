//0. 모듈 시스템을 사용하는 경우
//Vue  및  VueRouter를 import
//1. 라우트 컴포넌트 정의 ( 가져오기 )
import Vue from 'vue'
import VueRouter from 'vue-router'

import TodoList from '@/components/TodoList'
import AddItem from '@/components/AddItem'
import DeleteItem from '@/components/DeleteItem'
import UpdateItem from '@/components/UpdateItem'

Vue.use(VueRouter)

//2. 라우트 정의 및 인스턴스 생성해서 내보내기
export default new VueRouter({
    mode:'history', 
    routes: [
        {
            name: 'list',
            path: '/list',
            component: TodoList
        },
        {
            name: 'updatetodo',
            path: '/updatetodo/:todo_name',
            component: UpdateItem,
            props: true // pass route.params to props
        },
        {
            path: '/addtodo',
            component: AddItem
        },
        {
            path: '/deletetodo',
            component: DeleteItem
        }
    ]
})

//3. main.js의 Vue instance에 라우터 추가
//4. App.vue에서 라우트하는 내용이 뜰 부분에 <router-link>와 <router-view> 추가해주기