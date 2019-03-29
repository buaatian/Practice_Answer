// pages/Chapter_7/exercise_01/exercise_01.js
const nowDate = new Date()
Page({
  data: {
    showTopTips: false,
    characterNum:0,
    errorMessage: "Everthing is ok!",
    date: nowDate.toLocaleDateString(),
    time: nowDate.getHours()+":"+nowDate.getMinutes(),
    region:["北京市,北京市,东城区"],
    accounts: ["手机号","微信号", "QQ", "Email"],
    accountIndex: 0,
    isAgree: false,
    fee:false
  },
  showTopTips: function (error) {
    var that = this;
    this.setData({
      errorMessage: error,
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange:function(e){
    this.setData({
      region:e.detail.value
    })
  },
  changeFee:function(e){
    this.setData({
      fee:e.detail.value
    })
  },
  countCharacters:function(e){
    let value = e.detail.value
    this.setData({
      characterNum: value.length
    })
  },
  bindAccountChange: function (e) {
    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  formSubmit:function(e){
    let activity = e.detail.value
    console.log(activity)
    if(activity.activityName.length == 0){
      this.showTopTips("活动名称不能为空")
    }else if(activity.activityPlaceDetail.length == 0){
      this.showTopTips("活动详细地址不能为空")
    } else if (activity.needFee && (activity.feeDetail.length == 0 || activity.feeDetail == 0)){
      this.showTopTips("活动费用不能为空")
    } else if (activity.accountDetail.length == 0){
      this.showTopTips("联系方式不能为空")
    }else if (activity.agree[0] != "agree"){
      this.showTopTips("请同意服务条款")
    }else{
      console.log("提交成功")
    }
  },
  formReset:function(e){
    console.log(e)
  }
});