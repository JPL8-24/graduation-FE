import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('./views/Login/Login.vue')
const Home = () => import('./views/Home/Home.vue')
const question=()=>import('./views/question/question.vue')
const Forum =()=>import('./views/Forum/Forum.vue')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/home',
    name: 'home',
    component: Home
  },{
    path:'/question',
    name:'question',
    component:question
  },{
    path:'/forum',
    name:'forum',
    component:Forum
  }]
})