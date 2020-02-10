Page({
  data: {
    inputValue: '',
    toDoList: [],
    // 获取新的 toDoList
    getToDoList (that) {
      dd.getStorage({
        key: 'toDoList',
        success (res) {
          that.setData({
            toDoList: res.data || []
          })
        }
      })
    }
  },

  // 键盘输入时触发的事件
  bindInput (e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  // 输入后按回车键添加 ToDo
  bindConfirm (e) {
    if (e.detail.value !== '') {
      // 存入 Storage 中
      let that = this
      dd.setStorage({
        key: 'toDoList',
        data: [
          ...that.data.toDoList,
          { title: e.detail.value, done: false }
        ],
        success () {
          // 存入 Storage 成功后获取新的 toDoList 并清除输入框
          that.data.getToDoList(that)
          that.setData({
            inputValue: ''
          })
        }
      });
    }
  },
  // checkbox 发生变化时触发
  onChange (e) {
    let index = e.target.dataset.index

    // 可优化旧写法
    let list = this.data.toDoList
    list[index].done = !list[index].done

    this.setData({
      toDoList: list
    })


    // 优化写法不生效  https://ding-doc.dingtalk.com/doc#/dev/performance-tips
    // let todo = this.data.toDoList[index]
    // todo.done = !todo.done
    // console.log(todo)
    // this.setData({
    //   'toDoList[index]': todo
    // })

    // let done = this.data.toDoList[index].done
    // this.setData({
    //   'toDoList[index].done': !done
    // })

    dd.setStorage({
      key: 'toDoList',
      data: list
    });
  },
  // 删除 ToDo
  delToDo (e) {
    let index = e.target.dataset.index
    this.$spliceData({
      toDoList: [index, 1]
    })

    // 删除成功后删除 Storage 中的数据
    let that = this
    dd.setStorage({
      key: 'toDoList',
      data: that.data.toDoList,
      success () {
        that.showToast('成功', 1500)
      }
    });
  },

  // 页面加载
  onLoad (query) {
    this.data.getToDoList(this)
  },

  // 封装 toast
  showToast (content, duration = 3000) {
    // 弹出 toast
    dd.showToast({
      content,
      duration
    });

    // 固定时间后隐藏 toast
    setTimeout(() => {
      dd.hideToast()
    }, duration)
  }
})
