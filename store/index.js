import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
	state: {
		count: 3
	},
	mutations: {

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
