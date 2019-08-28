<template>
  <van-action-sheet
    class="signout-picker"
    :close-on-click-overlay=true
    v-model="show"
    round>
    <!-- <div class="signout-picker-box" @click="show = false">

    </div> -->
    <van-tabs v-model="active">
      <van-tab title="行李规则"  name="a">
        <div>
          <van-cell title="国内机票">
            <van-icon
              slot="icon"
              class-prefix="my-icon"
              name="guizeshuoming"
              style="line-height: inherit;"
            />
            <div slot="label">
              <p><span>预订舱位：经济舱</span><span></span></p>
              <p><span>预订舱位：经济舱</span><span></span></p>
              <p><span>预订舱位：经济舱</span><span></span></p>
            </div>
          </van-cell>
        </div>
      </van-tab>
      <van-tab title="退改签说明"  name="b">
        <div>
          <van-cell title="国内机票">
            <van-icon
              slot="icon"
              class-prefix="my-icon"
              name="guizeshuoming"
              style="line-height: inherit;"
            />
            <div slot="label">
              <p><span>预订舱位：经济舱</span><span></span></p>
              <p><span>预订舱位：经济舱</span><span></span></p>
              <p><span>预订舱位：经济舱</span><span></span></p>
            </div>
          </van-cell>
        </div>
      </van-tab>
    </van-tabs>
  </van-action-sheet>
</template>
<script>
export default {
  props: ['pickerShow'],
  data() {
    return {
      show: null,
      active: 'a'
    }
  },
  watch: {
    pickerShow(v) {
      this.show = v;
    },
    show(v) {
      !v && this.$emit('signoutPickerHandle', v);
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
<style lang="stylus">
.signout-picker {
  height: 50%;
  .van-tab--active {
    color: $rootColor;
  }
  .van-tabs__line {
    background-color: $rootColor;
  }
  .my-icon {
    margin-right: 10px;
    color: $rootColor;
  }
}
</style>
<style lang="stylus" scoped>
.signout-picker {
  .van-action-sheeta
  .signout-picker-box {
    height: 20rem;
  }
}
</style>
