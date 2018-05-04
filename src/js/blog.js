import Vue from 'vue'
import blog from '../views/blog.vue'

Vue.config.productionTip = false

new Vue({
	el: '#blog',
	components: { blog },
	template: '<blog/>'
})