export const childDialogsHandle = {
  props: ['isshowing'],
  data () {
    return {
      showFlag: false
    }
  },
  watch: {
    isshowing () {
      this.showFlag = this.isshowing
    },
    showFlag (value) {
      !value && this.$emit('setShow', false)
    }
  }
}
