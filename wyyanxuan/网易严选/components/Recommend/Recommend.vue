<template>
<view class="recommendContainer">
		<swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="swiperImg" src="https://yanxuan.nosdn.127.net/c749ed7a8a4dacbe90033c069224a6d9.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiperImg" src="https://yanxuan.nosdn.127.net/static-union/1674990162c6f282.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="swiperImg" src="https://yanxuan.nosdn.127.net/ef5720c78053e8b3101fb6e6be4e9dbc.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	<!-- 三个图标区域 -->
	<view class="policyList">
		<view class="policyItem" v-for="(item,index) in indexData.policyDescList" :key='item.desc'>
			<image class="policyImg" :src="item.icon" mode=""></image>
			<text class="content">{{item.desc}}</text>
		</view>
	</view>
	<!-- 10个图标区域 -->
	<view class="kingKongList">
		<view class="kingKongItem" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
			<image class="kingImage" :src="item.picUrl" mode=""></image>
			<text class="kingContent">{{item.text}}</text>
		</view>
	</view>
	<!-- 分类区 -->
	<view class="categoryModuleContainer">
		<view class="categoryItem" v-for="item in indexData.categoryModule" :key="item.titlePicUrl">
			<image class="titlePic" :src="item.titlePicUrl" mode=""></image>
			<scroll-view class="shopListScroll" scroll-x="true" enable-flex>
				<view class="shopItem" v-for="shopItem in item.itemList" :key="shopItem.id">
					<image class="shopImg" :src="shopItem.showPicUrl" mode=""></image>
					<text class="shopInfo">{{shopItem.name}}</text>
				</view>
				<view class="shopItem more">
					<text>查看更多></text>
				</view>
			</scroll-view>
		</view>
	</view>
</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed:{
			...mapState({
				indexData: state => state.home.indexData
			})
		}
		
	}
</script>

<style lang="stylus">
.recommendContainer
	.banners
		width: 100%;
		height: 350rpx;
		.swiperImg
			width: 100%;
			height: 350rpx
	.policyList
		display: flex
		.policyItem
			flex 1
			text-align: center
			.policyImg
				width: 32rpx;
				height: 32rpx;
				vertical-align: middle
			.content
				font-size: 24rpx
				vertical-align: middle
	.kingKongList
		display: flex
		flex-wrap: wrap
		.kingKongItem
			width: 20%;
			display: flex
			flex-direction: column
			align-items: center
			.kingImage
				width: 110rpx;
				height: 110rpx;
				margin: 20rpx 0;
			.kingContent
				font-size: 26rpx
	.categoryModuleContainer
		.categoryItem
			margin-bottom: 20rpx
			.titlePic
				width: 100%;
				height: 370rpx;
			.shopListScroll
				white-space: nowrap
				.shopItem
					width: 200rpx;
					display: inline-block
					vertical-align: top
					margin-right: 20rpx
					&.more
						width: 200rpx;
						height: 200rpx;
						background: #eee
						font-size: 28rpx
						text-align: center
						line-height: 200rpx
					.shopImg
						width: 200rpx;
						height: 200rpx;
						background: #eee
					.shopInfo
						font-size: 26rpx
						white-space: pre-wrap
						display: -webkit-box
						-webkit-line-clamp: 2
						-webkit-box-orient: vertical
						text-overflow: ellipsis
						overflow: hidden
</style>