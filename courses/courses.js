// miniprogram/courses/courses.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentTitle1:'',
    content1: '' ,
    contentTitle3:'  ',
    content3: '' ,
    contentTitle2:'  ',
    content2: '' ,
    image1:'',
    image2:'',
    image3:'',
    url1:'',
    url2:'',
    url3:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://www.pkula.xyz/getCourse',
      method:'POST',
      data: {
      },
      success (res) {
        console.log(res.data)
        var shortcontent1 = res.data.data[0].intro.substring(0,40) + "......"
        var shortcontent2 = res.data.data[1].intro.substring(0,40) + "......"
        var shortcontent3 = res.data.data[2].intro.substring(0,40) + "......"
        var url1 = "/content2/content2?title=" + res.data.data[0].coursename
        var url2 = "/content2/content2?title=" + res.data.data[1].coursename
        var url3 = "/content2/content2?title=" + res.data.data[2].coursename
        console.log(url1)
        that.setData({
          image1:res.data.data[0].imagesrc,
          image2:res.data.data[1].imagesrc,
          image3:res.data.data[2].imagesrc,
          url1:url1,
          url2:url2,
          url3:url3, 
          contentTitle1:res.data.data[0].coursename,
          content1: shortcontent1  ,
          contentTitle2:res.data.data[1].coursename,
          content2: shortcontent2 ,
          contentTitle3:res.data.data[2].coursename,
          content3: shortcontent3 ,
        })
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