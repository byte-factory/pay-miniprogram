// miniprogram/pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [{
      uuid:'nyEyQUVfj2H3EjSrbMjLXP',
      cate_icon: 'food',
      price: '32',
      date: '2020-07-20',
      tags: '生活,小宝',
      bz: '米粉updateupdate',
      is_auto: true
    }],
    default_content_title: '当月支出',
    navigationBar: {
      title: "默认账本",
      loading: false,
      color: '#333',
      background: '#f7f7f7',
      show: true,
      animated: false
    },
    tabbar_list: getApp().globalData.tabbar_list,
    cell: {
      icon: '/images/category/food.png',
      title: '2020-04-22'
    }
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false
    });
  },
  tabChange(e){
    console.log(e);
  },
  add_cost(e){
    wx.navigateTo({
      url: './index/add/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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