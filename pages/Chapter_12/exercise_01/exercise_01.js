// pages/Chapter_12/exercise_01/exercise_01.js
Page({
  data: {
    downloadProgress: 0,
    showDownloadProgress: false,
    downloadTask: null
  },
  downloadFile() {
    const self = this
    self.setData({
      showDownloadProgress: true
    })
    self.data.downloadTask = wx.downloadFile({
      url: "https://mini.ecbc413.cn/index.php/index/Index/download?type=file",
      success(res) {
        console.log('downloadFile success, res is', res)
        self.setData({
          fileDownloadSrc: res.tempFilePath,
          showDownloadProgress: false
        })
        wx.saveFile({
          tempFilePath: res.tempFilePath,
          success(res){
            console.log("文件保存成功，保存后的文件本地路径为：",res.savedFilePath)
            wx.getSavedFileInfo({
              filePath: res.savedFilePath,
              success(res){
                self.setData({
                  fileSize:res.size
                })
              }
            })
          }
        })
      },
      fail({ errMsg }) {
        console.log('downloadFile fail, err is:', errMsg)
      }
    })
    this.data.downloadTask.onProgressUpdate((res) => {
      self.setData({
        downloadProgress: res.progress
      })
    })
  },
  cancelDownload() {
    const self = this
    self.data.downloadTask.abort()
    self.setData({
      showDownloadProgress: false
    })
  },
  openFile(){
    wx.getSavedFileList({
      success(res){
        wx.openDocument({
          filePath: res.fileList[0].filePath,
        })
      }
    })
  }
})
