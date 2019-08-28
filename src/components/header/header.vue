<template>
  <van-nav-bar
    class="title-header"
    :title="title"
    left-text=""
    :right-text="leftText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <van-icon name="search" v-if="!leftText" slot="right" @click="onClickRight()"/>
  </van-nav-bar>
</template>
<script>
// import { constants } from 'fs'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    config: {
      type: String,
      default: '11'
    },
    contentColor: {
      type: String,
      default: 'black'
    },
    leftText: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    chooseData: {
      // type: Array
    }
  },
  mounted () {
    this.handleFontColor();
  },
  beforeRouteEnter (to, from, next) {
    this.handleFontColor();
    console.log('aaaa');
  },
  watch: {
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$emit('handleRright')
    },
    handleFontColor () {
      const title = document.querySelector('.van-nav-bar__title')
      const left = document.querySelector('.van-icon')
      const right = this.leftText ? document.querySelector('.van-nav-bar__text') : document.querySelector('.van-icon')
      right.style.color = title.style.color = left.style.color = this.contentColor
    }
  }
}
</script>
<style lang="stylus" scoped>
.van-nav-bar {
  position: fixed;
  width: 100%;
  color: white;
  .van-nav-bar__title, .van-nav-bar__left, .van-nav-bar__right, .van-icon {
    color: white;
  }
}
</style>
