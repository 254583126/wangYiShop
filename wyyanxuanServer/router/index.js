const KoaRouter = require('koa-router')

//2.生成路由对象
const router = new KoaRouter();
// express: request,response,next
// koa: ctx(request,response),next
// router.get('/test',(ctx)=>{
// 	// 1.获取请求参数
// 	// 2.处理请求数据
// 	// 3.返回响应数据
// 	ctx.body = "返回测试数据"
// });

// 注册index主页的接口
const indexData = require('../datas/index.json')
router.get('/getIndexData',(ctx)=>{
	ctx.body = indexData
})

// 注册分类数据
const categoryDatas = require('../datas/categoryDatas.json');
router.get('/getCategoryData',(ctx)=>{
	ctx.body = categoryDatas;
});

// 注册主页分页数据
const indexCateList = require('../datas/indexCateList.json');
router.get('/getIndexCateList',(ctx)=>{
	ctx.body = indexCateList;
});


module.exports = router