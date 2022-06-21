const request = require("../utils/request")
const getSlides = ()=>{
	return request('/slides','get')
}
module.exports = {
	getSlides
}