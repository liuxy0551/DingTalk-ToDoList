Page({
  data: {
    inputValue: '',
    toDoList: [
      { title: '111', done: false },
      { title: '222', done: false },
      { title: '333', done: true },
      { title: '444', done: true },
      { title: '555', done: false },
      { title: '666', done: false },
      { title: '777', done: true },
      { title: '888', done: true }
    ]
  },

  // 键盘输入时触发的事件
  bindInput (e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  // 输入后按回车键添加 ToDo
  bindConfirm (e) {
    console.log(e.detail.value);
  },
  // checkbox 发生变化时触发
  onChange (e) {
    let index = e.target.dataset.index
    let list = this.data.toDoList
    list[index].done = !list[index].done
    
    this.setData({
      toDoList: list
    })
  },
  // 删除 ToDo
  delToDo (e) {
    let index = e.target.dataset.index
    console.log(index)
  },

  onLoad (query) {
    // 页面加载
    // console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  }
})
