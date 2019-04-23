// pages/Chapter_12/exercise_02/exercise_02.js
Page({
  data: {
    key: '',
    data: '',
    dialog: {
      title: '',
      content: '',
      hidden: true
    }
  },

  keyChange(e) {
    this.data.key = e.detail.value
  },

  dataChange(e) {
    this.data.data = e.detail.value
  },

  getStorage() {
    const { key, data } = this.data
    let storageData
    if (key.length === 0) {
      this.setData({
        key,
        data,
        'dialog.hidden': false,
        'dialog.title': '读取数据失败',
        'dialog.content': 'key 不能为空'
      })
    } else {
      storageData = wx.getStorageSync(key)
      if (storageData === '') {
        this.setData({
          key,
          data:'',
          'dialog.hidden': false,
          'dialog.title': '读取数据失败',
          'dialog.content': '找不到 key 对应的数据'
        })
      } else {
        this.setData({
          key,
          data: storageData,
          'dialog.hidden': false,
          'dialog.title': '读取数据成功',
          // 'dialog.content': "data: '" + storageData + "'"
        })
      }
    }
  },
  removeStorage(){
    const { key, data } = this.data
    let storageData
    if (key.length === 0) {
      this.setData({
        key,
        data:'',
        'dialog.hidden': false,
        'dialog.title': '读取数据失败',
        'dialog.content': 'key 不能为空'
      })
    } else {
      storageData = wx.getStorageSync(key)
      if (storageData === '') {
        this.setData({
          key,
          data:'',
          'dialog.hidden': false,
          'dialog.title': '读取数据失败',
          'dialog.content': '找不到 key 对应的数据'
        })
      } else {
        wx.removeStorageSync(key)
        this.setData({
          key:'',
          data:'',
          'dialog.hidden': false,
          'dialog.title': '清除 '+key+' 对应的数据成功',
        })
      }
    }
  },
  setStorage() {
    const { key, data } = this.data
    if (key.length === 0) {
      this.setData({
        key,
        data,
        'dialog.hidden': false,
        'dialog.title': '保存数据失败',
        'dialog.content': 'key 不能为空'
      })
    } else {
      wx.setStorageSync(key, data)
      this.setData({
        key,
        data,
        'dialog.hidden': false,
        'dialog.title': '存储数据成功'
      })
    }
  },

  clearStorage() {
    wx.clearStorageSync()
    this.setData({
      key: '',
      data: '',
      'dialog.hidden': false,
      'dialog.title': '清除数据成功',
      'dialog.content': ''
    })
  },
  getStorageInfo(){
    const self = this;
    wx.getStorageInfo({
      success: function(res) {
        self.setData({
          'dialog.hidden': false,
          'dialog.title': '查询到 '+res.keys.length+' 个Key',
          'dialog.content': res.keys
        })
      },
    })
  },
  confirm() {
    this.setData({
      'dialog.hidden': true,
      'dialog.title': '',
      'dialog.content': ''
    })
  }
})
