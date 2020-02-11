Page({
  data: {
    http: getApp().globalData.http
  },
  getRequest () {
    this.data.http.get('getCustomer').then(res => {
      dd.alert({ content: JSON.stringify(res.data) })
    })
  },
  postRequest () {
    this.data.http.post('getCarouselList').then(res => {
      dd.alert({ content: JSON.stringify(res.data) })
    })
  },
  onLoad () {
  }
})
