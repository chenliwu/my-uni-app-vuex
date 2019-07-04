<template>
	<view>
		<text>身份验证失败</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReady() {
			uni.showModal({
				title: '错误提示',
				content: '身份验证失败',
				showCancel: false,
				
			});
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
