<template>
	<view class="">
		<button @click="getStoreInfo()">获取store</button>
		<button @click="setStoreInfo()">设置store</button>
		<button @click="getStoreInfoByGetters()">getStoreInfoByGetters</button>
		<view>
			<text>moduleACount:{{ this.$store.state.a.count }}</text>
		</view>
		<view>
			<text>moduleBCount:{{ this.$store.state.b.count }}</text>
		</view>
		<view><text></text></view>
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
		getStoreInfoByGetters: function() {
			// 基础使用store属性的方法
			let moduleACount = this.$store.getters.getCount;
			console.log('getStoreInfoByGetters,getCount:',moduleACount);
		},
		/**
		 * 通过action
		 */
		setStoreInfo: function() {
			this.$store.dispatch('increment');
		}
	}
};
</script>

<style></style>
