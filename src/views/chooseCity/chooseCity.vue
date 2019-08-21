<template>
  <transition name="bounce">
    <div  class="city-box">
      <!-- <header-com :title="'国际机票'"></header-com> -->
      <van-nav-bar
      left-arrow
      @click-left="onClickLeft">
        <template  slot="title">
          <form action="/">
            <van-search
              v-model="value"
              placeholder="目的地、关键词"
              @search="onSearch"
              @focus="jump"
            />
          </form>
        </template>
      </van-nav-bar>
      <van-row class="city-body">
        <van-col span="6">
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="北京" />
            <van-sidebar-item title="黑龙江" />
            <van-sidebar-item title="四川" />
          </van-sidebar>
        </van-col>
        <van-col span="18">
          <van-index-bar :index-list="indexList">
            <van-index-anchor index="历史" />
            <van-row type="flex">
              <van-col span="6" v-for="item in 4" :key="item">
                <van-button type="default">{{item}}</van-button>
              </van-col>
            </van-row>
            <van-index-anchor index="热门" />
            <van-row type="flex">
              <van-col span="6" v-for="item in 14" :key="item">
                <van-button type="default">{{item}}</van-button>
              </van-col>
            </van-row>
            <van-index-anchor index="A" />
            <van-row type="flex">
              <van-col span="6" v-for="item in 9" :key="item">
                <van-button type="default">{{item}}</van-button>
              </van-col>
            </van-row>

            <van-index-anchor index="B" />
            <van-row type="flex">
              <van-col span="6" v-for="item in 9" :key="item">
                <van-button type="default">{{item}}</van-button>
              </van-col>
            </van-row>

            <van-index-anchor index="C" />
            <van-row type="flex">
              <van-col span="6" v-for="item in 9" :key="item">
                <van-button type="default">{{item}}</van-button>
              </van-col>
            </van-row>

            <van-index-anchor index="D" />
            <van-row type="flex">
              <van-col span="6" v-for="item in 9" :key="item">
                <van-button type="default">{{item}}</van-button>
              </van-col>
            </van-row>
          </van-index-bar>
        </van-col>
      </van-row>
    </div>
  </transition>
</template>
<script>
import headerCom from '@/components/header/header'
export default {
  components: {
    headerCom
  },
  data () {
    return {
      activeKey: 0,
      value: '',
      indexList: ['历史', '热门', 'A', 'B', 'C', 'D', 'E', 'F']
    }
  },
  methods: {
    onSearch(v) {
      console.log(v);
    },
    jump() {
      console.log('aaa');
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
}
</script>
<style lang="stylus">
.city-box {
  .van-index-bar__index {
    padding: 0.25vh 4px 0.25vh 16px;
    width: 22px;
  }
  .van-index-anchor {
    background-color: #e5e5e5;
  }
  .van-row--flex {
    flex-flow: wrap row;
    padding: 0rem 1rem;
    .van-col {
      padding: 7px 2px;
      .van-button--normal {
        width: 80%;
      }
    }
  }
}
</style>
<style lang="stylus" scoped>
.city-box {
  .city-body {
    // margin-top: $headerHeight;
    display: flex;
    flex-flow: row nowrap;
  }
  .van-nav-bar {
    // position: fixed;
    // z-index 2!important;
    // top: 0px;
    // width: 100%;
    .van-nav-bar__title {
      max-width: 80%;
      .van-search {
        padding: 5px 12px;
      }
    }
  }
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
