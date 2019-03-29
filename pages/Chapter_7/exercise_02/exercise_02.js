// pages/Chapter_7/exercise_02/exercise_02.js
Page({
  data: {
    showTopTips: false,
    characterNum:0,
    errorMessage: "Everthing is ok!",
    radioItems: [
      { name: '男', value: '1', checked: true },
      { name: '女', value: '0' }
    ],
    checkboxItems: [
      { name: '公司聚餐', value: '0', checked: true },
      { name: '社团招新', value: '1' },
      { name: '春游', value: '2' },
      { name: '健身房私教课', value: '3' },
    ],
    accounts: ["手机号","微信号", "QQ", "Email"],
    accountIndex: 0,
    isAgree: false
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
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);

    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
    }

    this.setData({
      radioItems: radioItems
    });
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var checkboxItems = this.data.checkboxItems;
    var values = e.detail.value;
    for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
      checkboxItems[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (checkboxItems[i].value == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }
    this.setData({
      checkboxItems: checkboxItems
    });
  },
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);

    this.setData({
      accountIndex: e.detail.value
    })
  },
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },
  countCharacters: function (e) {
    let value = e.detail.value
    this.setData({
      characterNum: value.length
    })
  },
  formSubmit:function(e){
    let sign = e.detail.value
    console.log(sign)
    if(sign.name.length == 0){
      this.showTopTips("请输入姓名")
    }else if(sign.activities.length == 0){
      this.showTopTips("请至少选择一项活动")
    }else if(sign.accountDetail == 0){
      this.showTopTips("请输入联系方式")
    }else if(sign.agree[0] != "agree"){
      this.showTopTips("请同意相关条款")
    }else{
      console.log("提交成功")
    }
  },
  formReset:function(e){
    console.log(e)
  }
})