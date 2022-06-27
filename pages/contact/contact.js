// pages/contact/contact.js
const api = require("../../api/index");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isLoading: false,
  },
  async getColor() {
    this.setData({
      isLoading: true,
    });
    wx.showLoading({
      title: "loading",
    });
    const { data } = await api.getColors();
    this.setData({
      isLoading: false,
    });
    this.setData({
      list: [...this.data.list, ...data.data],
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getColor();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("show");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("hide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  async onReachBottom() {
    if (!this.data.isLoading) {
      this.getColor();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
