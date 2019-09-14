<template>
	<view>
		<view class="">
			<text>登录页面</text>
			<button type="primary" @click="testSetAccessToken()">设置AccessToken</button>
			<button type="primary" @click="testGetAccessToken()">获取AccessToken</button>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	onLoad(options) {
		//this.testSetAccessToken();
	},
	onReady() {
		// console.log('login.onReady');
		// var that = this;
		// setTimeout(function() {
		// 	console.log('accessToken:',that.accessToken);
		// 	if (that.accessToken) {
		// 		uni.redirectTo({
		// 			url: '../index/index'
		// 		});
		// 	}
		// }, 2000);
	},

	data() {
		return {
			username: 'chenlw',
			password: 'chenlw123456'
		};
	},
	computed: {
		...mapState(['accessToken'])
	},
	methods: {
		testSetAccessToken() {
			this.$store.commit('setAccessToken', {
				accessToken: 'testSetAccessToken'
			});
			
			// 不能通过这种赋值给store的state
			// this.accessToken = "testSetAccessToken";
		},
		testGetAccessToken(){
			console.log('testGetAccessToken');
			console.log('this.$store.state.accessToken：',this.$store.state.accessToken);
			
			// 通过这种this.accessToken方式访问store的state，需要使用mapState将state映射到页面的computed当中。
			console.log('this.accessToken：',this.accessToken);
		}
	}
};
</script>

<style></style>
