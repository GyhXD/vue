<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item
      v-for="(item, index) in footerConfig"
      :key="index"
      replace
      :to="item.to"
      :icon="item.icon"
    >
      {{item.name}}
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  props: {
    footerConfig: {
      tyoe: 'Array',
      default: function () {
        return [
          {
            to: '/home',
            icon: 'home-o',
            name: '首页'
          },
          {
            to: '/myRoot',
            icon: 'apps-o',
            name: '工作台'
          },
          {
            to: '/planeList',
            icon: 'balance-list-o',
            name: '报表'
          },
          {
            to: '/chooseCity',
            icon: 'user-o',
            name: '我的'
          }
        ]
      }
    }
  },
  data () {
    return {
      a: '',
      active: 0
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
