Page({
  data: {
    inputValue: '',
    toDoList: [
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '1234', done: false },
      { title: '2345', done: true },
      { title: '3456', done: false }
    ]
  },
  // 输入后按回车键添加 ToDo
  bindConfirm (e) {
    console.log(e.detail.value);
  },
  // 键盘输入时触发的事件
  bindInput (e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  onLoad (query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  }
})
