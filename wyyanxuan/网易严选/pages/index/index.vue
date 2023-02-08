<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<text  class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder">
			</view>
			<button>个人中心</button>
		</view>
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" class="navScroll" enable-flex>
			<view class="navItem" :class="{active: navIndex === -1}" @click="changeNav(-1,0)">
				推荐
			</view>	
			<view class="navItem"  :class="{active: navIndex === index}" @click="changeNav(index,item.L1Id)" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				{{item.text}}
			</view>	
		</scroll-view>
		<!-- 内容区 -->
		<scroll-view scroll-y="true" >
			<Recommend v-if="!!!navId"></Recommend>
			<CateList v-else :navId='navId'></CateList>
		</scroll-view>
	</view>
</template>

<script>
	import {mapActions,mapState} from 'vuex'
	import request from '../../utils/request.js'
	import Recommend from '../../components/Recommend/Recommend.vue'
	import CateList from '../../components/CateList/CateList.vue'
	export default {
		components:{
			Recommend,CateList
		},
		data() {
			return {
				// indexData:{},
				navIndex:-1  ,//导航推荐
				navId: 0  //导航的id
			};
		},
		mounted(){
			// 获取主页数据
			// this.getIndexData()
			// 测试获取store对象中的数据
			// console.log(this.$store.state.home.initData);
			// 获取主页数据的两种派发方法
			// this.$store.dispatch('getIndexDataAction')
			this.getIndexDataAction()
			
		},
		methods:{
			...mapActions({
				getIndexDataAction:'getIndexDataAction'
			}),
			
			async getIndexData(){
				let result = await request('/getIndexData')    //小程序写法
 				// let result = await request('/api/getIndexData')  //h5写			
				this.indexData = result
			},
			// 单击导航的回调
			changeNav(index,id){
				this.navIndex = index
				this.navId = id
			}
		},
		computed:{
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus">
	// stylus:
	// 1.省略大括号
	// 2.省略键值对的分号和冒号
	// 3.支持样式缩进、嵌套
	// .index 
	// 	color: red
	
// 头部样式
.indexContainer
	.header
		display: flex
		.logo
			width: 140rpx;
			height: 40rpx;
			margin: 10rpx 20rpx
		.search
			position: relative
			width: 420rpx;
			height: 60rpx;
			background: #eee
			.iconfont
				position: absolute
				font-size: 30rpx
				top: 15rpx
				left: 10rpx
			input
				width: 370rpx;
				margin-left: 50rpx
				height: 60rpx;
				.placeholder
					font-size: 26rpx
				
		button
			width: 144rpx;
			height: 60rpx;
			font-size: 24rpx
			text-align: center
			line-height: 60rpx
			padding: 0 4rpx		


//导航区
	.navScroll
		// display: flex: ;
		white-space: nowrap
		.navItem
			width: 140rpx;
			height: 80rpx;
			text-align: center
			line-height: 80rpx
			font-size: 26rpx
			display: inline-block
			&.active
				border-bottom: 1rpx solid #BB2C08 
			 
.test
	font-size: 5rpx
</style>
