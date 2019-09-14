import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		accessToken: null,
		username: null
	},
	mutations: {
		setAccessToken(state, provider) {
			console.log('setAccessToken');
            console.log(state);
            console.log(provider);
			state.accessToken = provider.accessToken;
		},
		setUsername(state,provider){
			console.log('setUsername');
			console.log(state);
            console.log(provider);
			state.username = provider.username;
		}
	},
	
});

export default store;
