const app = getApp()

Page({
  data: {
    code: ''
  },
  onLoad: function () {
    let that = this
    tt.login({
      success(res) {
        that.setData({
          code: res.code
        })
        console.log(`login 调用成功`, res);
      },
      fail(res) {
        console.log(`login 调用失败`);
      }
    });
  },
})
