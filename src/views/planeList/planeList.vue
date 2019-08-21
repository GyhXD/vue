<template>
  <div class="plane-list">
    <header-com
      :title="'国际机票'"
      class="header"
    ></header-com>
    <div class="date-choose">
      <van-tabs>
        <van-tab
          v-for="index in 8"
          :key="index"
          :title="'标签 ' + index"
        >
          <div
            slot="title"
            class="date-price"
          >
            <span>-月-日</span>
            <span>价格</span>
          </div>
        </van-tab>
      </van-tabs>
      <div
        class="calendar"
        @click="myCalendar()"
      >
        <van-icon
          class-prefix="my-icon"
          name="rili1"
        />
      </div>
    </div>
    <!-- 航班列表 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <p class="tips">航班起降时间均为当地时间</p>
      <div @click="jump">
        <van-row
          v-for="item in list"
          :key="item"
          class="plane-item"
          type="flex"
          justify="space-between">
          <van-col
            class="left"
            span="18">
            <van-row
              type="flex"
              class="left"
              justify="space-between"
            >
              <van-col span="6">
                <p><strong>¥</strong><strong class="price">1000</strong></p>
                <p class="ellipsis">xxxxxxxxxxxxxxx</p>
              </van-col>
              <van-col span="6" class="iocn-body">
                <span>xxxxx</span>
                <img class="to" src="../../assets/img/png/toline.png">
                <span>xxxxx</span>
              </van-col>
              <van-col span="6">
                <p><strong>¥</strong><strong class="price">1000</strong></p>
                <p class="ellipsis">xxxxx</p>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <p><strong>¥</strong><strong>1000</strong></p>
              </van-col>
            </van-row>
          </van-col>
          <van-col
            class="right"
            span="4">
            <p><strong class="price-icon">¥</strong><strong class="price">1000</strong></p>
            <p>含税总价</p>
            <van-row type="flex">
              <van-col span="24">
                <p><strong>¥</strong><strong>1000</strong></p>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
    </van-list>
    <!-- 补全footer空缺 -->
    <div class="footer-empty"></div>
    <transition name="fade">
      <footer-com v-if="footerShowFlag"></footer-com>
    </transition>
    <!-- 日期选择 -->
    <picker-calendar
      :isshowing2="isshowing2"
      @setCalendarShow="setCalendarShow"
    ></picker-calendar>
    <!-- 过期dilaog -->
  </div>
</template>
<script>
import headerCom from '@/components/header/header';
import footerCom from './footer';
import pickerCalendar from '@/components/pickerCalendar/pickerCalendar';
export default {
  components: {
    footerCom,
    headerCom,
    pickerCalendar
  },
  data() {
    return {
      list: [],
      loading: false,
      isshowing2: false,
      finished: false,
      footerShowFlag: true
    };
  },
  watch: {
    list (v) {
      if (v.length > 20) this.footerShowFlag = false;
    }
  },
  mounted() {
    // this.$dialog.alert({
    //   title: '标题',
    //   message: '弹窗内容'
    // })
  },
  methods: {
    // 日历picker
    myCalendar() {
      this.isshowing2 = true;
    },
    // 日历picker
    setCalendarShow(value) {
      this.isshowing2 = false;
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    jump() {
      console.log('xxx')
      this.$router.push({
        path: '/planeDetail',
        name: 'planeDetail'
      })
    }
  }
};
</script>
<style lang="stylus">
.plane-list {
  .van-tabs__wrap {
    height: 5rem;
  }
}
</style>
<style lang="stylus" scoped>
.plane-list {
  .header {
    background-color: $rootColor;

    &:after {
      border-bottom-width: 0px !important;
    }
  }

  .date-choose {
    padding-top: $headerHeight;
    display: flex;
    flex-flow: nowrap row;

    .van-tabs {
      width: calc(100% - 4rem - 10px);

      .date-price {
        padding: 10px 12px;

        span {
          line-height: 20px;
        }
      }
    }

    .calendar {
      margin-left: 10px;
      width: 4rem;
      height: 5rem;
      text-align: center;
      line-height: 5rem;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.04);
    }
  }

  .van-list {
    background-color: #fafafa;
    .plane-item {
      height: 7.5rem;
      margin-bottom: 5px;
      padding: 1rem 1.5rem;
      background-color: white;
      p {
        margin-block-start: 1em;
        margin-block-end: 1em;
      }
      .right {
        p {
          text-align: center;
          strong {
            display: inline-block
          }
          .price-icon {
            transform: scale(1)
            color: #ef5649;
          }
          .price {
            font-size: 3.5rem;
            color: #ef5649;
          }
        }
      }
      .left {
        p {
          strong {
            display: inline-block
          }
          .price {
            font-size: 3.5rem;
          }
        }
      }
      .ellipsis {
        ellipsis()
      }
      .iocn-body {
        padding: 1rem 0rem;
        .to {
          width: 5rem;
          margin: 0.4rem 0rem;
        }
        span {
          display: inline-block;
          width: 85%;
          text-align: center;
        }
      }
    }
    .tips {
      padding-block-start: 0.5em;
      padding-block-end: 0.5em;
      font-size: 2rem;
      text-align: center;
      color: #999999;
    }
  }
  .footer-empty {
    height: $footerHeight;
    background-color: red;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
