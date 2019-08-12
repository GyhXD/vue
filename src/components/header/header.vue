<template>
  <van-nav-bar
    class="title-header"
    :title="title"
    left-text=""
    :right-text="config"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    config: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
    onClickRight () {
      // Toast('按钮')
    }
  }
}
</script>
<style lang="stylus" scoped>
.van-nav-bar {
  position: fixed;
  width: 100%;
  height: $headerHeight;
}
</style>
