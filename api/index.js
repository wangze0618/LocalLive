const request = require("../utils/request")
// 获取轮播图数据
const getSlides = ()=>{
	return request('/slides','get')
}

// 获取九宫格数据
const getCategories = ()=>{
	return request('/categories','get')
}

module.exports = {
	getSlides,
	getCategories
}