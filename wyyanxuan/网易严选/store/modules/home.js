import request from "../../utils/request.js"

const state = {
	initData:"初始化数据",
	indexData:{}   //主页数据
}
const mutations = {
	changeIndexDataMutation(state,indexData){
		state.indexData = indexData
	}
}
const actions = {
	async getIndexDataAction({commit}){
		//1.执行异步任务
		let  result = await request('/getIndexData');
		//2.触发mutations 并将数据传给mutations
		commit('changeIndexDataMutation',result)
	}
}
const getters = {
	
}

export default {
	state,
	mutations,
	actions,
	getters
}