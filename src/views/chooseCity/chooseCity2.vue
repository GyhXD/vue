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
          <!-- @blur="showTemplateFlag = false" -->
            <van-search
              v-model="value"
              @focus="showTemplateFlag = true"
              placeholder="目的地、关键词"
              @search="onSearch"
              shape="round"
            />
          </form>
        </template>
      </van-nav-bar>
      <!-- 搜索状态 -->
      <div v-if="showTemplateFlag" class="search-box">
        <div class="empty-box" v-if="!getSearchList.length">
          <img @click="searchs" class="empty-img" src="../../assets/img/png/empty-search.png">
          <p class="empty-title">没有符合的结果</p>
        </div>
        <div v-else>
          <p @click="selectCtiy(item)" v-for="item in getSearchList" :key="item.id">{{item.cityName}}{{item.airportCode}}</p>
        </div>
      </div>
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
              <div v-for="(item, i) in cityList" :key="i">
                <van-index-anchor :index="item.countryName" />
                <van-row type="flex">
                  <van-col span="8" :class="[(i > 7 && item.showMore) ? 'none' : '']" v-for="(city, i) in item.citys" :key="i">
                    <van-button  @click="selectCtiy(city)" type="default">{{city.cityName}}</van-button>
                  </van-col>
                  <van-col span="8">
                    <van-button v-if="item.citys.length > 7 && item.showMore" @click="item.showMore = false" type="default">{{'更多'}}</van-button>
                  </van-col>
                </van-row>
              </div>
            </van-index-bar>
          </van-col>
        </van-tab>
        <van-tab title="国际/港澳台" name="b">
          <van-row class="city-body">
            <van-col span="6">
              <van-sidebar v-model="activeKey">
                <van-sidebar-item :title="item" @click="getCountry(item)" :key="item" v-for="item in continentList"/>
              </van-sidebar>
            </van-col>
            <van-col span="21">
              <van-index-bar :index-list="indexList">
                <van-index-anchor index="历史" />
                <van-row type="flex">
                  <van-col span="8" v-for="item in 4" :key="item">
                    <van-button type="default">{{item}}</van-button>
                  </van-col>
                </van-row>
                <van-index-anchor index="热门" />
                <van-row type="flex">
                  <van-col span="8" v-for="item in 14" :key="item">
                    <van-button type="default">{{item}}</van-button>
                  </van-col>
                </van-row>
                <div v-for="(item, i) in cityList" :key="i">
                  <van-index-anchor :index="item.countryName" />
                  <van-row type="flex">
                    <van-col span="8" :class="[(i > 7 && item.showMore) ? 'none' : '']" v-for="(city, i) in item.citys" :key="i">
                      <van-button  @click="selectCtiy(city)" type="default">{{city.cityName}}</van-button>
                    </van-col>
                    <van-col span="8">
                      <van-button v-if="item.citys.length > 7 && item.showMore" @click="item.showMore = false" type="default">{{'更多'}}</van-button>
                    </van-col>
                  </van-row>
                </div>
              </van-index-bar>
            </van-col>
          </van-row>
        </van-tab>
      </van-tabs>
    </div>
  </van-action-sheet>
</template>
<script>
import planeService from '@/service/plane-service';
export default {
  props: ['cityShow', 'title', 'cityType'],
  data() {
    return {
      name: 'xxx',
      showFlag: null,
      activeKey: 0,
      activeName: 'a',
      value: '',
      continentList: ['历史', '欧洲', '美洲', '亚洲', '大洋洲', '非洲'],
      cityList: [],
      indexList: [],
      activeClass: 'search-city2',
      showTemplateFlag: false,
      selectCity: {},
      getSearchList: []
    };
  },
  watch: {
    cityShow () {
      this.showFlag = this.cityShow
    },
    showFlag (value) {
      if (value) {
        if (this.activeKey) {
          this.getCountry(this.continentList[0]);
        } else {
          this.getcitys();
        }
      } else {
        this.$emit('cityShowHandle', this.selectCity);
      }
    },
    showTemplateFlag(v) {
      if (v) {
        document.querySelector('.van-action-sheet').style.height = '90%';
      }
    },
    value(v) {
      this.searchCity(v);
    }
  },
  methods: {
    onSearch(v) {
      console.log(v);
      this.searchCity(v);
    },
    searchs() {
      this.searchCity(this.value);
    },
    jump() {
      console.log('aaa');
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    selectCtiy(city) {
      this.selectCity = Object.assign(city, { cityType: this.cityType });
      this.showFlag = false;
    },
    // 获取国内城市
    async searchCity(value) {
      const result = await planeService.searchCity(value, 1, 20, this.activeKey);
      this.getSearchList = result.data;
      console.log('seacrh', result.data);
    },
    // 获取国内城市
    async getcitys() {
      const result = await planeService.getCitys(this.activeKey);
      var arr = [];
      var cityArr = []
      if (result.code === '200' && JSON.stringify(result.data) !== {}) {
        for (var key in result.data) {
          arr.push(key);
          cityArr.push({
            countryName: key,
            showMore: true,
            citys: result.data[key]
          })
        }
      }
      this.indexList = arr;
      this.cityList = cityArr;
    },
    // 根据点击的大洲获取   国外城市
    async getCountry(item) {
      const result = await planeService.getCountry(item);
      var arr = [];
      var cityArr = []
      if (result.code === '200' && JSON.stringify(result.data) !== {}) {
        for (var key in result.data) {
          arr.push(key);
          cityArr.push({
            countryName: key,
            showMore: true,
            citys: result.data[key]
          })
        }
      }
      this.indexList = arr;
      this.cityList = cityArr;
      console.log('result2', this.cityList);
    }
  }
};
</script>
<style lang="stylus">
.city-box {
  .van-button--normal {
    padding: 0 5px;
    width: 90%!important;
    .van-button__text {
      display: inline-block;
      font-size: 0.8rem
      line-height: 1.2rem;
      word-wrap();
      width: 100%;
      flex-row-center();
    }
  }
  .van-nav-bar {
    height: auto;
  }
  .van-sidebar-item__text {
    padding: 1rem;
  }
  .van-index-bar__index {
    padding: 0.25vh 4px 0.25vh 4px;
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
  .none {
    display: none;
  }
}
.van-icon-close {
  right: 10px!important;
}
</style>
<style lang="stylus" scoped>
.city-box {
  height: calc(100% - 46px);
  .search-box {
    flex-row-center();
    height: 100%;
    .empty-box {
      .empty-img {
        height: 10rem;
        width: 12rem;
      }
      .empty-title {
        text-align: center;
        font-size: 1.5rem;
        color: #666666;
      }
    }
  }
  .van-tabs {
    background-color: white;
    .city-body {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 15px;
    }
  }
  .van-nav-bar {
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
