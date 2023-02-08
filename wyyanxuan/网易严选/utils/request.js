//封装请求方法
import config from './config.js'
import { rejects } from "assert"

export default (url,data={},method='GET')=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url: config.host + url,   //小程序写法
			// url,    //h5写法
			data,
			method,
			success:(res)=>{
				resolve(res.data);
			},
			fail:(err)=>{
				reject(err);
			}
		})
	})
}