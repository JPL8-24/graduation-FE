import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('./views/Login/Login.vue')
const Home = () => import('./views/Home/Home.vue')
const question = () => import('./views/question/question.vue')
const Forum = () => import('./views/Forum/Forum.vue')
const Publish = () => import('./views/Publish/index.vue')
const THome = () => import('./views/THome/THome.vue')
const Check = () => import('./views/Check/check.vue')
const Analyze = () => import('./views/Analyze/analyze.vue')
const Personal = () => import('./views/Personal/personal.vue')
const ForumDetail = () => import('./views/ForumDetail/ForumDetail.vue')
const ModifyPassword = () => import('./views/ModifyPassword/ModifyPassWord.vue')
const uploadPortrait = () => import('./views/uploadPortrait/uploadPortrait.vue')
const uploadPaper = () => import('./views/uoloadPaper/uploadPaper.vue')
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
  }, {
    path: '/question',
    name: 'question',
    component: question
  }, {
    path: '/forum',
    name: 'forum',
    component: Forum
  }, {
    path: '/publish',
    name: 'publish',
    component: Publish
  }, {
    path: '/THome',
    name: 'THome',
    component: THome
  }, {
    path: '/check',
    name: 'check',
    component: Check
  }, {
    path: '/analyze',
    name: 'analyze',
    component: Analyze
  }, {
    path: '/personal',
    name: 'personal',
    component: Personal
  }, {
    path: '/forumDetail',
    name: 'forumDetail',
    component: ForumDetail
  }, {
    path: '/ModifyPassword',
    name: "ModifyPassword",
    component: ModifyPassword
  }, {
    path: '/uploadPortrait',
    name: "uploadPortrait",
    component: uploadPortrait
  }, {
    path: '/uploadPaper',
    name: "uploadPaper",
    component: uploadPaper
  }]
})