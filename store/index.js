import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
	state: {
		count: 3
	},
	mutations: {
		increment(state) {
			// 变更状态
			state.count++
		}
	},
	actions: {

	},
	getters: {

	}
}

const moduleB = {
	state: {
		count: 5
	},
	mutations: {
		increment(state) {
			// 变更状态
			state.count++
		}
	},
	actions: {

	}
}

const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	}
})

export default store;
