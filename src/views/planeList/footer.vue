<template>
  <div class="planeList-footer">
    <van-tabbar v-model="active" >
      <van-tabbar-item @click="show = true">
        <span>筛选</span>
        <van-icon
          slot="icon"
          class-prefix="my-icon"
          name="shaixuan"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>价格</span>
        <van-icon
          slot="icon"
          name="refund-o"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>直飞优先</span>
        <van-icon
          slot="icon"
          class-prefix="my-icon"
          name="zhifei"
        />
      </van-tabbar-item>
      <van-tabbar-item>
        <span>时间早-晚</span>
        <van-icon
          slot="icon"
          class-prefix="my-icon"
          name="shijian"
        />
      </van-tabbar-item>
    </van-tabbar>
    <!-- <van-action-sheet v-model="show" round>
      <div class="filter-title">
        <span @click="show = false">取消</span>
        <span>重置</span>
        <span class="confirm" @click="show = false">确定</span>
      </div>
      <div class="filter-condtions">
        <van-button size="small" icon="cross" class="condtion">按钮</van-button>
      </div>
      <div class="filter-checkbox">
        <van-checkbox v-model="noPrice" checked-color="#dc3841">显示不含税价</van-checkbox>
        <van-checkbox v-model="tofly" checked-color="#dc3841">只看直飞</van-checkbox>
      </div>
    </van-action-sheet> -->
    <filter-picker :show="show" @filterPickerHandle="filterPickerHandle"></filter-picker>
  </div>
</template>
<script>
import filterPicker from "./filter-picker";
export default {
  components: {
    filterPicker
  },
  data () {
    return {
      a: '',
      active: 0,
      show: false
    }
  },
  methods: {
    handle () {
    },
    filterPickerHandle(v) {
      this.show = v;
    }
  }
}
</script>
<style lang="stylus">
.planeList-footer {
}
</style>
<style lang="stylus" scoped>
.planeList-footer {
}
</style>
