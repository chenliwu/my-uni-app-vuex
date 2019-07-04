<template>
	<view>
		<view class="">
			<text>登录页面</text>
			<button type="primary" @click="testSetAccessToken()">设置AccessToken</button>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	onLoad(options) {
		this.testSetAccessToken();
	},
	onReady() {
		console.log('login.onReady');
		var that = this;
		setTimeout(function() {
			console.log('accessToken:',that.accessToken);
			if (that.accessToken) {
				uni.redirectTo({
					url: '../index/index'
				});
			}
		}, 2000);
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
				accessToken: 'sasdasdd',
				username: this.username
			});
		}
	}
};
</script>

<style></style>
