<template>
	<view class="">
		<button @click="getStoreInfo()">获取store</button>
		<button @click="setStoreInfo()">设置store</button>
		<view>
			<text>moduleACount:{{ this.$store.state.a.count }}</text>
		</view>
		<view>
			<text>moduleBCount:{{ this.$store.state.b.count }}</text>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	methods: {
		getStoreInfo: function() {
			// 基础使用store属性的方法
			let moduleACount = this.$store.state.a.count;
			console.log('moduleA.state.count:', moduleACount);
			let moduleBCount = this.$store.state.b.count;
			console.log('moduleB.state.count:', moduleBCount);
		},
		setStoreInfo: function() {
			// 对store的属性赋值的基本方法：直接赋值
			this.$store.state.a.count = 7;
			this.$store.state.b.count = 8;
		}
	}
};
</script>

<style></style>
