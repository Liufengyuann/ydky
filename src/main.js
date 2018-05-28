// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/reset.css'
import '../src/assets/css/elementuiReset.css'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vuex from 'vuex'
// import './element-variables.scss'

Vue.use(VueResource)
Vue.use(App)
Vue.use(ElementUI)
Vue.use(vuex)
Vue.config.productionTip = false
// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next();
// });

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
router.push({ path: 'index' })
var store = new vuex.Store({
	state: {
		showLogin : true
	}
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
