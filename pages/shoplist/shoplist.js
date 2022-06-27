// pages/shoplist/shoplist.js
const { getShopList } = require("../../api/index");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    query: {
      title: "",
      id: "",
    },
    shopList: [],
    page: 1,
    pageSize: 10,
    total: 0, // 有多少页的数据
    isLoading: false,
  },

  // 获取商铺列表
  async getShopList() {
    this.setData({
      isLoading: true,
    });
    wx.showLoading({
      title: "loading",
    });
    const { data, header } = await getShopList(this.data.query.id, {
      _page: this.data.page,
      _limit: this.data.pageSize,
    });
    this.setData({
      shopList: [...this.data.shopList, ...data],
      total: Number(header["X-Total-Count"]),
    });
    this.setData({
      isLoading: false,
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options,
    });
    this.getShopList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      page: 1,
      shopList: [],
      total: 0,
    });
    this.getShopList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    let now =
      this.data.page * this.data.pageSize >= this.data.total ? true : false;
    if (now) {
      wx.showToast({
        title: "没有更多了！",
        icon: "error",
        duration: 2000,
      });
    }
    // 节流和提示
    if (!this.data.isLoading && now == false) {
      this.setData({
        page: this.data.page + 1,
      });
      this.getShopList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
