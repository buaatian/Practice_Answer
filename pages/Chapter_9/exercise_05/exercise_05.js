// pages/Chapter_9/exercise_05/exercise_05.js
const context = wx.createCanvasContext('canvas')
Page({
  drawBall:function(x,y) {
    context.beginPath(0)
    context.arc(x, y, 5, 0, Math.PI * 2)
    context.setFillStyle('#1aad19')
    context.setStrokeStyle('rgba(1,1,1,0)')
    context.fill()
    context.stroke()
    context.draw()
  },
  onUnload() {
    clearInterval(this.interval)
  },
  touchStart:function(e){
    console.log(e)
    // this.drawBall(e.touches[0].x, e.touches[0].y)
  },
  touchMove:function(e){
    console.log(e)
    this.drawBall(e.touches[0].x, e.touches[0].y)
  },
  touchEnd:function(e){
    console.log(e)
  }
})
