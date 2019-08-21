<template>
  <van-action-sheet
    v-model="showFlag"
    round
    title="选择城市"
    ref="sheet"
  >
    <div  class="city-box">
      <van-nav-bar>
        <template  slot="title">
          <form action="/">
          <!--                -->
            <van-search
              v-model="value"
              @focus="showTemplateFlag = true"
              @blur="showTemplateFlag = false"
              placeholder="目的地、关键词"
              @search="onSearch"
              shape="round"
            />
          </form>
        </template>
      </van-nav-bar>
      <!-- 搜索状态 -->
      <div v-if="showTemplateFlag">a</div>
      <!-- 选择状态 -->
      <van-tabs v-model="activeName" v-else>
        <van-tab title="国内" name="a">
          <van-col span="24">
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
        </van-tab>
        <van-tab title="国际/港澳台" name="b">
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
        </van-tab>
      </van-tabs>
    </div>
  </van-action-sheet>
</template>
<script>
export default {
  props: ['cityShow', 'title'],
  data() {
    return {
      name: 'xxx',
      showFlag: null,
      activeKey: 0,
      activeName: 'a',
      value: '',
      indexList: ['历史', '热门', 'A', 'B', 'C', 'D', 'E', 'F'],
      activeClass: 'search-city2',
      showTemplateFlag: false
    };
  },
  watch: {
    cityShow () {
      this.showFlag = this.cityShow
    },
    showFlag (value) {
      !value && this.$emit('cityShowHandle', false)
    },
    showTemplateFlag(v) {
      if (v) {
        document.querySelector('.van-action-sheet').style.height = '90%';
      }
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
};
</script>
<style lang="stylus">
.city-box {
  .van-sidebar-item__text {
    padding: 1rem;
  }
  .van-index-bar__index {
    padding: 0.25vh 4px 0.25vh 16px;
    width: 22px;
  }
  .van-index-anchor {
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
  .van-tabs__wrap {
    border-width: 0px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  }
  .van-action-sheet {
    height: 90%;
  }
}
</style>
<style lang="stylus" scoped>
.city-box {
  .van-tabs {
    background-color: white;
    .city-body {
      // margin-top: $headerHeight;
      display: flex;
      flex-flow: row nowrap;
      margin-top: 15px;
    }
  }
  .van-nav-bar {
    // position: fixed;
    // z-index 2!important;
    // top: 0px;
    width: 100%;
    .van-nav-bar__title {
      max-width: 95%;
      .van-search {
        // padding: 5px 12px;
      }
    }
  }
}
</style>
