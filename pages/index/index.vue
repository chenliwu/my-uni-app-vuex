<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
	data() {
		return {
			title: '主页'
		};
	},
	onLoad(options) {
		console.log('index.onLoad');
		console.log('accessToken',this.accessToken);
		if(!this.accessToken){
			uni.redirectTo({
				url: '../authenticationFaild/authenticationFaild'		
			});
		}
	},
	computed: {
		...mapState(['accessToken'])
	},
	methods: {}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
