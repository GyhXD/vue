<template>
  <van-action-sheet
    v-model="showFlag"
    title="我的权限规则"
  >
    <div class="my-root-box">
      <!-- <van-skeleton title avatar :row="3"/> -->
      <van-cell title="国内机票">
        <van-icon
          slot="icon"
          name="search"
          style="line-height: inherit;"
        />
        <div slot="label">
          <p><span>预订舱位：经济舱</span><span></span></p>
          <p><span>预订舱位：经济舱</span><span></span></p>
          <p><span>预订舱位：经济舱</span><span></span></p>
        </div>
      </van-cell>
      <van-cell title="国内机票">
        <van-icon
          slot="icon"
          name="search"
          style="line-height: inherit;"
        />
        <div slot="label">
          <p><span>预订舱位：经济舱</span><span></span></p>
          <p><span>预订舱位：经济舱</span><span></span></p>
          <p><span>预订舱位：经济舱</span><span></span></p>
        </div>
      </van-cell>
       <van-cell title="国内机票">
        <van-icon
          slot="icon"
          name="search"
          style="line-height: inherit;"
        />
        <div slot="label">
          <p><span>预订舱位：经济舱</span><span></span></p>
          <p><span>预订舱位：经济舱</span><span></span></p>
          <p><span>预订舱位：经济舱</span><span></span></p>
        </div>
      </van-cell>
    </div>
  </van-action-sheet>
</template>
<script>
// import { childDialogsHandle } from '@/mixins/childComponetsHandle.js';
export default {
  // mixins: [childDialogsHandle],
  props: ['isshowing'],
  data() {
    return {
      name: 'xxx',
      showFlag: null
    };
  },
  watch: {
    isshowing () {
      this.showFlag = this.isshowing
    },
    showFlag (value) {
      !value && this.$emit('setShow', false)
    }
  }
};
</script>
<style lang="stylus" scoped>
.van-action-sheet {
  .my-root-box {
    .van-icon {
      margin-right: 10px;
    }
  }
}
</style>
<style lang="stylus" scoped>
.van-action-sheet {
  border-radius: 15px 15px 0px 0px;

  .van-action-sheet__header {
    position: fixed;
    width: 100%;
    z-index: 2009;
    background-color: white;
    border-radius: 15px 15px 0px 0px;
  }

  .van-action-sheet__content {
    padding-top: 45px;
  }

  .my-root-box {
    padding: 20px 10px;
  }
}
</style>
