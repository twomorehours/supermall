<template>
	<div @click="changeRoute" class="tab-bar-item">
		<div v-show="!isActive">
			<slot name="icon"></slot>
		</div>
		<div v-show="isActive">
			<slot name="icon-active"></slot>
		</div>
		<div :style="textStyle">
			<slot name="text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBar',
		props:{
			path: String,
			textColor: {
				type: String,
				default: 'pink',
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) > -1; 
			},
			textStyle() {
				return this.isActive? {color: this.textColor} : {};
			}
		},
		methods:{
			changeRoute(){
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	
	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
	
</style>
