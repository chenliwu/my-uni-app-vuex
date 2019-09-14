<template>
	<view class="">
		<button @click="getStoreInfo()">获取store</button>
		<button @click="setStoreInfo()">设置store</button>
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
			let moduleACount = this.$store.state.a.count;
			console.log("moduleA.state.count:",moduleACount);
			let moduleBCount = this.$store.state.b.count;
			console.log("moduleB.state.count:",moduleBCount);
		},
		setStoreInfo: function() {
			this.$store.state.a.count = 7;
			this.$store.state.b.count = 8;
		}
	}
};
</script>

<style></style>
