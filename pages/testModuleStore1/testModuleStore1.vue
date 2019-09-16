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
		<view>
			<text>
				
			</text>
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
		/**
		 * module未启用namespace的情况下：
		 * 通过store的mutation更改state。
		 *
		 * 问题记录与思考：
		 * 1、如果module A和module B有一个mutation是同名的，
		 * 那么this.$store.commit("increment");这语句会调用哪个module的increment呢？
		 *
		 * 代码运行结果：结果是module A和module B的increment都调用了一次。
		 *
		 */
		setStoreInfo: function() {
			this.$store.commit('increment');
		}
	}
};
</script>

<style></style>
