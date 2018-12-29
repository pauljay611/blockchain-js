import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import BlockData from './components/BlockData.vue'
import BlockSend from './components/BlockSend.vue'
import BlockTransaction from './components/BlockTransaction.vue'
import BlockMining from './components/BlockMining.vue'
import BlockExplorer from './components/BlockExplorer.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/BlockData', component: BlockData, name:'BlockData' },
		{ path: '/', component: BlockData, name:'Index' },
		{ path: '/BlockTransaction', component: BlockTransaction, name:'BlockTransaction' },
		{ path: '/BlockMining', component: BlockMining, name:'BlockMining' },
		{ path: '/BlockSend', component: BlockSend, name:'BlockSend' },
		{ path: '/BlockExplorer', component: BlockExplorer, name:'BlockExplorer' },
	]
})

new Vue({
	el: '#app',
	components: {App},
	template: '<App/>',
	router
})