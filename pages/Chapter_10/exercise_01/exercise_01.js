// pages/Chapter_10/exercise_01/exercise_01.js
Page({
  data:{
    uploadProgress:0,
    downloadProgress:0,
    hiddenUploadProgress:true,
    showDownloadProgress:false,
    downloadTask:null
  },
  chooseImage() {
    const self = this

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0])

        const imageSrc = res.tempFilePaths[0]
        self.setData({
          imageSrc,
          hiddenUploadProgress:false
        })
        const uploadTask = wx.uploadFile({
          url: "https://mini.ecbc413.cn/index.php/index/Index/upload",
          filePath: imageSrc,
          name: 'image',
          success(res) {
            console.log('uploadImage success, res is:', res)

            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })
            self.setData({
              hiddenUploadProgress: true
            })
          },
          fail({ errMsg }) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })

        uploadTask.onProgressUpdate((res) => {
          self.setData({
            uploadProgress: res.progress
          })
        })
      },

      fail({ errMsg }) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  },
  downloadImage() {
    const self = this
    self.setData({
      showDownloadProgress: true
    })
    self.data.downloadTask = wx.downloadFile({
      url: "https://mini.ecbc413.cn/index.php/index/Index/download?id=1",
      success(res) {
        console.log('downloadFile success, res is', res)

        self.setData({
          imageDownloadSrc: res.tempFilePath,
          showDownloadProgress:false
        })
      },
      fail({ errMsg }) {
        console.log('downloadFile fail, err is:', errMsg)
      }
    })
    this.data.downloadTask.onProgressUpdate((res)=>{
      self.setData({
        downloadProgress: res.progress
      })
    })
  },
  cancelDownload(){
    const self = this
    self.data.downloadTask.abort()
    self.setData({
      showDownloadProgress:false
    })
  }
})
