Component({
  data: {},
  props: {
    status: 'processing',
    toDoList: [],
    onChange: () => {},
    onDelete: () => {}
  },
  methods: {
    // checkbox 发生变化时触发
    onChange (e) {
      this.props.onChange(e)
    },
    // 删除 ToDo
    onDelete (e) {
      this.props.onDelete(e)
    }
  },
  didMount () {
    // console.log(this.props)
  }
});
