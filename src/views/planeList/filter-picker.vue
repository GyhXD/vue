<template>
  <van-action-sheet class="filter-picker" v-model="showFlag" round>
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
    <div class="filter-choose">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="(item, i) in navList" :key="i" :title="item.name" @click="chooseNav = item"/>
      </van-sidebar>
      <van-radio-group v-model="radio">
        <!-- 单选项 -->
        <van-cell-group v-if="chooseNav.isradio">
          <van-cell v-for="(item, i) in radioList" :key="i" :title="item.name" clickable @click="radio = item.value">
            <van-radio slot="right-icon" :name="item.value" />
          </van-cell>
        </van-cell-group>
        <!-- 多选项 -->
        <van-checkbox-group v-model="result" v-else>
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list"
              clickable
              :key="item"
              :title="`复选框 ${item}`"
              @click="toggle(index)"
            >
              <van-checkbox
                :name="item"
                ref="checkboxes"
                slot="right-icon"
              />
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </van-radio-group>
    </div>
  </van-action-sheet>
</template>
<script>
export default {
  props: ['show'],
  data() {
    return {
      showFlag: null,
      noPrice: false,
      tofly: false,
      radio: '1',
      radioList: [// 舱位list
        {
          value: 0,
          name: '经济舱'
        },
        {
          value: 1,
          name: '中机型'
        },
        {
          value: 2,
          name: '小机型'
        }
      ],
      navList: [
        {
          name: '航空公司',
          isradio: false
        },
        {
          name: '起抵时间',
          isradio: false
        },
        {
          name: '机场',
          isradio: false
        },
        {
          name: '机型',
          isradio: false
        },
        {
          name: '舱位',
          isradio: true
        },
        {
          name: '中转城市',
          isradio: false
        }
      ],
      chooseNav: null,
      list: ['a', 'b', 'c'], // 复选总list
      result: ['a', 'b'], // 复选中list
      activeKey: 0
    }
  },
  watch: {
    show(v) {
      this.showFlag = this.show;
    },
    showFlag(v) {
      !v && this.$emit('filterPickerHandle', v);
    }
  },
  created() {
    this.chooseNav = this.navList[this.activeKey]
  },
  methods: {
  }
}
</script>
<style lang="stylus">
.planeList-footer {
  .van-action-sheet {
    height: 70%;
  }
  .van-tabbar-item--active {
    color: $rootColor;
  }
  .filter-condtions {
    .van-button {
      background-color: #f5f5f5;
      border-color: #f5f5f5;
      &:before {
        background-color: #f5f5f5;
      }
    }
  }
  .van-sidebar-item__text {
    padding: 1.5rem 1rem;
    background-color: #f0f0f0;
  }
  .van-sidebar-item--select {
    background: #fff!important;
    .van-sidebar-item__text {
      background: #fff!important;
    }
  }
  .van-action-sheet__content {
    height: 100%;
  }
}
</style>
<style lang="stylus" scoped>
.filter-picker {
  .filter-title {
    padding: 1.2rem 1.5rem;
    font-size: 3rem;
    color: #666666;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #f2f2f2;
    .confirm {
      color: $rootColor;
    }
  }
  .filter-checkbox {
    padding: 1rem 1.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    border-bottom: 1px solid #f0f0f0;
    .van-checkbox {
      width: fit-content;
      margin-right: 1rem;
    }
  }
  .filter-condtions {
    padding: 1rem 1.5rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    .van-checkbox {
      margin-right: 1rem;
      background-color: #f5f5f5;
    }
  }
  .filter-choose {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    height: calc(100% - 142px);
    .van-sidebar {
      overflow-y: scroll;
    }
    .van-radio-group {
      width: calc(100% - 90px);
      overflow-y: scroll;
    }
  }
}
</style>
