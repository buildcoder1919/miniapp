// pages/homepage/homepage.js
let appDatas=getApp();
let utils = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modules:[],
    menus:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    wx.request({
      url: appDatas.data.url2 + appDatas.data.url0 + '/ccwcservice/life/wechat-life/ignore/rightsList?timestamp=' + utils.getTimeStamp() + '&nonce=' + utils.loadRandom(4),
      data:'{\"moduleCode\":\"'+appDatas.data.moduleCode+'\"}',
      method:'post',
      dataType:'json',
      success: json => {
        //更新状态值
        this.setData({
            modules: json.data.list
        })
      }
    })

    wx.request({
      url: appDatas.data.url2 + appDatas.data.url0 + '/ccwcservice/life/wechat-life/ignore/rightsList?timestamp=' + utils.getTimeStamp() + '&nonce=' + utils.loadRandom(4),
      data: '{\"moduleCode\":\"homeGuide\"}',
      method: 'post',
      dataType: 'json',
      success: json => {
        //更新状态值
        this.setData({
          menus: json.data.list
        })
        appDatas.data.menus = this.data.menus
      }
    })
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

  }
})