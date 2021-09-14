//app.js
App({
  
  onLaunch() {
    this.getopenidByPromise().then(this.printOpenid);
  },
  globalData: {
    openid:"000"
  },
  getopenidByPromise: function(){
    let promise = new Promise((resolve,reject)=>{
      let that = this
      console.log("请求前")
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          //console.log(res.code)
          wx.request({
            url: 'https://www.pkula.xyz/getopenid', 
            method:'POST',
            data: {
              'code': res.code
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success (res) {
              console.log(res.data)
              console.log('111')
              if(res.data.openid){
                that.globalData.openid = res.data.openid
                resolve("成功了");
              }else
                reject('失败了')
              
            }
          })
        }
      })
    })
    console.log("请求后")
    return promise;
  },
  printOpenid: function (res) {
    console.log("返回的信息为："+res)
    console.log(this.globalData.openid)
    let that = this
    wx.request({
      url: 'https://www.pkula.xyz/getopenid2', 
      method:'POST',
      data: {
        openid:  that.globalData.openid
      },
      success (res) {
        console.log(res.data)
        console.log('完成查询或插入')
      }
    })
  },




})


