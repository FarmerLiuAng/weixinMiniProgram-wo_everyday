// miniprogram/movie-detail/movie-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    imgs: [{
      id: 2
    }, {
      id: 4
    }, {
      id: 6
    }, {
      id: 8
    }, {
      id: 10
    }],
    starId: 6,
    src1: '/images/star.png',
    src2: '/images/grayStar.png',
    movieposter:'',
    description:'',
    actor:'',
    year:'',
    duration:'',
    director:'',
    writer:'',
    path:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
    let that = this
    wx.request({
      
      url: 'https://www.pkula.xyz/getMovieid',
      method:'POST',
      data: {
        moviename : options.title,
      },
      success (res) {
        // console.log(res.data.data[0].movieid)
        let movieurl = 'https://movie.querydata.org/api?id=' + res.data.data[0].movieid
        wx.request({
          url: movieurl,  //如果不设置method 则默认get请求地址
    　　　 method: 'get',
          data: {     　　　　　　
    　　  },
          success: function(res) {
            let actors = res.data.actor[0].data[0].name + '/' + res.data.actor[1].data[0].name + '/' + res.data.actor[2].data[0].name + '/' + res.data.actor[3].data[0].name
            let durations = String(res.data.duration/60) + '分钟' 
            let paths = 'subPackage/pages/searchResult/searchResult?source=&query=' + options.title + '&key=&pos=&rfr=wx_home&vfrm=' 
            that.setData({
              movieposter : res.data.data[0].poster,
              genre : res.data.data[0].genre,
              description : res.data.data[0].description,
              actor : actors, 
              year :  res.data.year,
              duration : durations,
              director: res.data.director[0].data[0].name,
              writer: res.data.writer[0].data[0].name,
              path:paths
            })
            console.log(res.data)
            console.log(res.data.director) 
            console.log(paths)
          },
        })
      }
    })
  },

  select(e) {
    console.log(e)
    this.data.starId = e.currentTarget.dataset.index;
    this.setData({
      starId: this.data.starId
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