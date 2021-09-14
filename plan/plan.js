// miniprogram/plan/plan.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start1: '',
    end1: '',
    content1: '',
    start2: '',
    end2: '',
    content2: '',
    start3: '',
    end3: '',
    content3: '',
    start4: '',
    end4: '',
    content4: '',
    start5: '',
    end5: '',
    content5: '',
    start6: '',
    end6: '',
    content6: '',
    start7: '',
    end7: '',
    content7: '',
    start8: '',
    end8: '',
    content8: '',
    start9: '',
    end9: '',
    content9: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    let that = this
    wx.request({
      url: 'https://www.pkula.xyz/planSearch',
      method:'POST',
      data: {
        openid : app.globalData.openid
      },
      success (res) {
        console.log(res.data.data[res.data.data.length-1])
        that.setData({
          start1: res.data.data[res.data.data.length-1].start1,
          end1: res.data.data[res.data.data.length-1].end1,
          content1: res.data.data[res.data.data.length-1].content1,
          start2: res.data.data[res.data.data.length-1].start2,
          end2: res.data.data[res.data.data.length-1].end2,
          content2: res.data.data[res.data.data.length-1].content2,
          start3: res.data.data[res.data.data.length-1].start3,
          end3: res.data.data[res.data.data.length-1].end3,
          content3: res.data.data[res.data.data.length-1].content3,
          start4: res.data.data[res.data.data.length-1].start4,
          end4: res.data.data[res.data.data.length-1].end4,
          content4: res.data.data[res.data.data.length-1].content4,
          start5: res.data.data[res.data.data.length-1].start5,
          end5: res.data.data[res.data.data.length-1].end5,
          content5: res.data.data[res.data.data.length-1].content5,
          start6: res.data.data[res.data.data.length-1].start6,
          end6: res.data.data[res.data.data.length-1].end6,
          content6: res.data.data[res.data.data.length-1].content6,
          start7: res.data.data[res.data.data.length-1].start7,
          end7: res.data.data[res.data.data.length-1].end7,
          content7: res.data.data[res.data.data.length-1].content7,
          start8: res.data.data[res.data.data.length-1].start8,
          end8: res.data.data[res.data.data.length-1].end8,
          content8: res.data.data[res.data.data.length-1].content8,
          start9: res.data.data[res.data.data.length-1].start9,
          end9: res.data.data[res.data.data.length-1].end9,
          content9: res.data.data[res.data.data.length-1].content9
        })
      }
    }),
    this.setData({
      title: options.title
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    console.log(app.globalData.openid);
 
   
    wx.request({
      url: 'https://www.pkula.xyz/planSubmit',
      method:'POST',
      data: {
        data : e.detail.value,
        openid : app.globalData.openid
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