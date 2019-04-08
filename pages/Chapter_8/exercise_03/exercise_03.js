// pages/Chapter_8/exercise_03/exercise_03.js
Page({
  data: {
    result: {}
  },
  scanCode(e) {
    console.log('scanCode:', e)
    this.setData({
      result: e.detail
    })
  },
  error(e) {
    console.log(e.detail)
  }
})