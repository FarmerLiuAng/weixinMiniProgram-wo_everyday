
Page({
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  },


  navigateToMiniProgram(){
    let that = this
    wx.navigateToMiniProgram({
      
      appId: 'wxcd10170e55a1f55d',
      path: 'subPackage/pages/searchResult/searchResult?source=hot&query=唐人街探案&key=唐人街探案&pos=1&rfr=wx_home&vfrm=2-3-0-1',
      extraData: {
        
      },
      envVersion: 'release',
      
      success(res) {
        // 打开其他小程序成功同步触发
        wx.showToast({
          title: '跳转成功'
        })
        console.log(that.path)
      }
    })
  }
})