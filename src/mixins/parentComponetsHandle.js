export const parentDialogsHandle = {
  data () {
    return {
      isshowing: false
    }
  },
  methods: {
    toggleShow () {
      this.isshowing = true
    },
    handShowFlag (value) {
      this.isshowing = value
    }
  }
}
