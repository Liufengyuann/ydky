import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login.vue'
import App from '../App.vue'
import index from '../components/index/index.vue'
import blog from '../components/blog/blog.vue'
Vue.use(Router)

export default new Router({
  routes: [
  {
  	path:'/index',
  	component: index
  },
  {
  	path:'/login',
  	component: login
  },
  {
  	path:'/blog',
  	component: blog
  }]
})
