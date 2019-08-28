<template>
  <div class="tips-box">
    <div class="tips-box-left">
      <p :class="[isTips ? 'ellipsis' : '']"><span class="label">单程提醒：</span><span>商务、旅游等短期签证，部分国家或地区要求入境需持有返程机票，建议购买往返票或持有返程票，以免无法办理乘机和出入境手续。</span></p>
      <p :class="[isTips ? 'ellipsis' : '']"><span class="label">特别提醒：</span><span>未满18周岁单独乘机，以航司规则为准。</span></p>
    </div>
    <div class="tips-box-right" @click="isTips = !isTips">
      <van-icon
        v-if="isTips"
        slot="icon"
        name="arrow"
      />
      <van-icon
        v-else
        slot="icon"
        name="arrow-up"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isTips: false
    }
  }
}
</script>
<style lang="stylus" scoped>
.tips-box {
  // min-height: 4rem;
  flex-row-between();
  .tips-box-left {
    height: 100%;
    width: calc(100% - 3rem);
    text-align: left;
    p {
      display: inline-block;
      width: 100%
      // ellipsis();
      span {
        font-size: 1rem;
        color: #666666;
        line-height: 1.5rem;
      }
      .label {
        color: #f08200;
      }
    }
    .ellipsis {
      ellipsis();
    }
  }
  .tips-box-right {
    height: 100%;
    // min-height: 4rem;
    width: 3rem;
    flex-row-center();
  }
}
</style>
