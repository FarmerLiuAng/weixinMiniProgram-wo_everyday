// miniprogram/mood/mood.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    auto_height:false,
    tempFilePaths: '/images/学习.jpg',
    xinqing:'',
  },
  bindTextAreaBlur:function(){
    this.setData({
      auto_height:false
    })
  },
  areafocus:function(){
    this.setData({
      auto_height: true,
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://www.pkula.xyz/xinqingSearch',
      method:'POST',
      data: {
        openid : app.globalData.openid,    
      },
      success (res) {
        console.log(res.data.data)
        console.log(res.data.data[res.data.data.length-1].imagesrc)
        that.setData({
          tempFilePaths: res.data.data[res.data.data.length-1].imagesrc,
          xinqing: res.data.data[res.data.data.length-1].text,
        })
      }
    }) 
    this.setData({
      title: options.title
    })
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({
          tempFilePaths:res.tempFilePaths
        })
      }
    })
  },
  
  bindXinqingChange:function(e){
    this.setData({
      xinqing:e.detail.value
    })
  },
  
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    console.log(app.globalData.openid);
    console.log(this.data.tempFilePaths);
    var that = this;
    wx.request({
      url: 'https://www.pkula.xyz/xinqingSubmit',
      method:'POST',
      data: {
        xinqing :e.detail.value.xinqing,
        openid : app.globalData.openid,
        tempFilePaths : that.data.tempFilePaths
      
      },
      success (res) {
        console.log(res.data)
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