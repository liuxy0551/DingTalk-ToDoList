Component({
  data: {},
  props: {
    status: 'processing',
    toDoList: []
  },
  methods: {},
  didMount () {
    console.log(this.props)
  }
});
