// pages/Chapter_9/exercise_03/exercise_03.js
Page({
  data: {
    latitude: 39.9037448095,
    longitude: 116.3978290558,
    markers: [{
      iconPath:"/image/location.png",
      latitude: 39.9037448095,
      zIndex:-1,
      longitude: 116.3978290558,
      label:{
        content:"这里是天安门广场",
        borderRadius:10,
        bgColor:"#e77038",
        color:"#ffffff",
        borderColor:"#48c23d",
        padding:5,
        borderWidth:2
      }
    }],
  },
})
