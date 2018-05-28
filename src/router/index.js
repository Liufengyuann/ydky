import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'
import App from '../App.vue'
import index from '../components/index/index.vue'
import blog from '../components/blog/blog.vue'
import blogSecond from '../components/blog/blogSecond.vue'
// import register from '../components/register/register.vue'
Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:'/index',
  	component: index,
  },
  {
  	path:'/login',
  	component: login,
    alias:'/register'
  },
  {
  	path:'/blog',
  	component: blog,
    name: 'blog'
  },
  {
    path:'/blog/:listId',
    name:'blogSecond',
    component: blogSecond
  }]
})
