<template>
  <van-tabbar route>
    <van-tabbar-item
      replace
      to="/"
      icon="home-o"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/myRoot"
      icon="search"
    >
      其他
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data () {
    return {
      a: ''
    }
  },
  methods: {
    handle () {
    }
  }
}
</script>
<style lang="stylus" scoped>
$header-h = 50px
.header-box {
  height: $header-h;
  background-color : rgba(242, 242, 242, 1);
  line-height: $header-h;
}
</style>
