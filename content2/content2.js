// miniprogram/content2/content2.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    intro:'',
    teacherIntro:'',
    teacher:'',
    image:'',
    src:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:options.title,
    })
    var coursenamepre = options.title
    let that = this
    wx.request({
      url: 'https://www.pkula.xyz/getCourse2',
      method:'POST',
      data: {
        coursename:coursenamepre.substring(0, coursenamepre.length-1),
      },
      success (res) {
        console.log(res.data)
        that.setData({
          intro:res.data.data[0].intro,
          teacherIntro:res.data.data[0].teacherIntro,
          teacher:res.data.data[0].teacher,
          image:res.data.data[0].imagesrc,
          src:res.data.data[0].courseindex,
        })
      }
    })
  },
  copyText: function (e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
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