import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('./views/Login/Login.vue')
const Home = () => import('./views/Home/Home.vue')
const question=()=>import('./views/question/question.vue')
const Forum =()=>import('./views/Forum/Forum.vue')
const Publish=()=> import('./views/Publish/index.vue')
const THome=()=> import('./views/THome/THome.vue')
const Check=()=> import('./views/Check/check.vue')
const Analyze=()=>import('./views/Analyze/analyze.vue')

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
  },{
    path:'/publish',
    name:'publish',
    component:Publish
  },{
    path:'/THome',
    name:'THome',
    component:THome
  },{
    path:'/check',
    name:'check',
    component:Check
  },{
    path:'/analyze',
    name:'analyze',
    component:Analyze
  }]
})