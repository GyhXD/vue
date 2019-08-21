<template>
  <div class="index-content">
    <van-image
      width="100%"
      height="16rem"
      fit="cover"
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <!-- <van-grid square>
      <van-grid-item
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid> -->
    <van-grid square clickable>
      <van-grid-item
        v-for="(value, i) in routerConfig"
        :key="i"
        :icon="value.icon"
        :text="value.text"
        :to="value.to"
      />
    </van-grid>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerConfig: [
        {
          icon: 'photo-o',
          text: '机票',
          to: '/plane',
          url: ''
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.index-content {
  padding-top: $headerHeight;
  padding-bottom: $footerHeight;
  height: calc(100% - 50px - 46px);
}
</style>
