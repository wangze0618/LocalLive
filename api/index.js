const request = require("../utils/request");
// 获取轮播图数据
const getSlides = () => {
  return request("/slides", "get");
};

// 获取九宫格数据
const getCategories = () => {
  return request("/categories", "get");
};

// 获取随机颜色
const getColors = () => {
  return request("/api/color", "get");
};

// 获取商铺列表
const getShopList = (cateId, data) => {
  return request(`/categories/${cateId}/shops`, "get", data);
};

module.exports = {
  getSlides,
  getCategories,
  getColors,
  getShopList,
};
