// miniprogram/empty/empty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据源
    items:[
      "3201 上午",
      "3301 上午",
      "3302 上午",
      "3301 下午",
      "3302 下午",
      "3303 晚上",
    ],
    array1: ['星期一', '星期二', '星期三','星期四','星期五','星期六','星期日'],
    value1: 0,
  },
  bindPicker1Change: function(e) {
    this.setData({
        value1: e.detail.value
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    let that = this
    wx.request({
      url: 'https://www.pkula.xyz/empty',
      method:'POST',
      data: {
        time: e.detail.value ,
      },
      success (res) {
        console.log(res.data)
        that.setData({
          items: res.data.data
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
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