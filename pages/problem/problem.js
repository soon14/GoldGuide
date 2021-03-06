const app = getApp()
const QQMap = require('../../utils/qqmap.js')
// pages/problem/problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_data()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

    get_data: function (event) {
        app.http_get('Getprob', (ret) => {
            let list = ret.result
            list.forEach((value, index, array) => {
                value.on = false
                if (index == list.length - 1) {
                    this.setData({
                        list: list
                    })
                }
            })
        })
    },

  tap_item: function (event) {
        let list = this.data.list
        let item = list[event.currentTarget.dataset.id]
        item.on = !item.on
        this.setData({
            list: list
        })
  }

})