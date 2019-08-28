<template v-clock>
  <div class="index-body">
    <header-com :title="'国际机票'" class="header"></header-com>
    <div class="index-content">
      <van-row
        type="flex"
        justify="center"
        class="tab-box"
      >
        <van-col span="24">
          <van-tabs v-model="active">
            <van-tab title="单程" name=1>
              <van-cell>
                <template slot="title">
                  <span
                    class="custom-title"
                    @click="cityShows('选择出发城市', 'from')"
                  >
                    {{selectFromCity && selectFromCity.cityName ? selectFromCity.cityName : '1'}}
                  </span>
                  <van-icon size="24px" @click="transition()" name="close" />
                  <span
                    class="custom-title"
                    @click="cityShows('选择目的地城市', 'to')"
                  >
                    {{selectToCity && selectToCity.cityName? selectToCity.cityName : '1'}}
                  </span>
                </template>
              </van-cell>
              <van-cell>
                <template slot="title">
                  <span
                    class="custom-title"
                    @click="myCalendar()"
                  >{{fromDate | dateFilter}}</span>
                </template>
              </van-cell>
              <van-cell>
                <template slot="title">
                  <van-field
                    readonly
                    clickable
                    label="选舱位"
                    :value="value"
                    placeholder="选择舱位"
                    @click="showPicker = true"
                  />
                </template>
              </van-cell>
              <van-button
                type="warning"
                class="search"
                @click="jump()"
                round
              >查询</van-button>
            </van-tab>
            <van-tab title="往返" name=2>往返</van-tab>
          </van-tabs>
        </van-col>
      </van-row>
      <van-grid clickable class="control" :column-num="2">
        <van-grid-item @click="myRoot()">
          <van-icon class-prefix="my-icon" name="shouye_wodequanxian" />
          <p>我的权限</p>
        </van-grid-item>
         <van-grid-item>
          <van-icon class-prefix="my-icon" name="huochepiao" />
          <p>我的订单</p>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 我的权限 -->
    <my-root
      :isshowing="isshowing"
      @setShow="setShow"
    >
    </my-root>
    <!-- 舱位选择 -->
    <van-popup
      v-model="showPicker"
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <!-- 日期选择 -->
    <picker-calendar :isshowing2="isshowing2" @setCalendarShow="setCalendarShow"></picker-calendar>
    <!--  -->
    <choose-city :cityType="cityType" :cityShow="cityShow" @cityShowHandle="cityShowHandle"></choose-city>
  </div>
</template>
<script>
import headerCom from '@/components/header/header';
import footerCom from '@/components/footer/footer';
import myRoot from '@/views/myRoot/myRoot2';
import pickerCalendar from '@/components/pickerCalendar/pickerCalendar';
import chooseCity from '@/views/chooseCity/chooseCity2';
import dateUtils from '@/utils/date';
import { $local } from '@/utils/index';
export default {
  components: {
    footerCom,
    headerCom,
    myRoot,
    pickerCalendar,
    chooseCity
  },
  data() {
    return {
      data: {},
      active: 2,
      value: '经济舱',
      showPicker: false,
      columns: ['商务舱', '经济舱', '头等舱'],
      columnsConfig: [
        {
          label: '商务舱',
          value: 'Y'
        },
        {
          label: '经济舱',
          value: 'C'
        },
        {
          label: '头等舱',
          value: 'F'
        }
      ],
      isshowing2: false,
      isshowing: false,
      cityShow: false,
      cityType: 'from',
      selectFromCity: null,
      selectToCity: null,
      planeDate: null,
      fromDate: '',
      chooseCityTitle: ''
    };
  },
  filters: {
    dateFilter: function (value) {
      if (typeof value === 'string') {
        return value.split('-')[1] + '月' + value.split('-')[2] + '日' + dateUtils.getWhatDay(value.split('-')[0], value.split('-')[1], value.split('-')[2], true);
      }
    }
  },
  watch: {
    selectFromCity(v) {
      $local('selectFromCity', v)
    },
    selectToCity(v) {
      $local('selectToCity', v)
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    // 初始化数据  赋值
    initData() {
      this.fromDate = dateUtils.dateFormat(null);
      this.selectToCity = $local('selectToCity');
      this.selectFromCity = $local('selectFromCity');
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    // 我的权限
    myRoot() {
      this.isshowing = true;
    },
    // 我的权限
    setShow(value) {
      this.isshowing = value;
    },
    // 日历picker
    myCalendar() {
      this.isshowing2 = true;
    },
    // 日历picker
    setCalendarShow(value) {
      this.isshowing2 = false;
      this.fromDate = value[0] + '-' + value[1] + '-' + value[2];
      console.log('get', this.fromDate);
    },
    // 城市选择
    cityShows(title, cityType) {
      this.cityShow = true;
      this.chooseCityTitle = title;
      this.cityType = cityType;
    },
    // 城市选择
    cityShowHandle(value) {
      this.cityShow = false;
      this.cityType = value.cityType;
      value.cityType === 'to' ? this.selectToCity = value : this.selectFromCity = value;
      console.log('selectCity', value);
    },
    // 翻转城市
    transition() {
      [this.selectFromCity, this.selectToCity] = [this.selectToCity, this.selectFromCity]
    },
    jump() {
      this.$router.push({
        path: '/planeList',
        name: 'planeList',
        query: {
          adtNum: 1,
          chdNum: 0,
          searchSections: [
            {
              cabinClass: this.columnsConfig.filter(col => col.label === this.value)[0].value,
              from: this.selectFromCity.cityCode,
              fromDate: this.fromDate,
              to: this.selectToCity.cityCode
            }
          ],
          tripType: this.active
        }
      });
      const a = {
        adtNum: 1,
        chdNum: 0,
        searchSections: [
          {
            cabinClass: this.columnsConfig.filter(col => col.label === this.value)[0].value,
            from: this.selectFromCity.cityCode,
            fromDate: this.fromDate,
            to: this.selectToCity.cityCode
          }
        ],
        tripType: this.active
      }
      console.log('aaa', a);
    },
    calendar() {
      this.$router.push({
        path: '/calendar',
        name: 'calendar'
      });
    },
    add() {
      console.log(this.$store);
      this.$store.dispatch('addCount', 2);
    }
  }
};
</script>
<style lang="stylus">
.index-content {
  .van-tabs__wrap {
    border-radius: 10px 10px 0px 0px;
  }
  .van-cell__title {
    padding: 0px 30px;
    display: flex;
    flex-flow: nowrap;
    justify-content: space-between;
  }
  .control {
    margin-top: 15px;
    border-radius: 10px;
    justify-content: space-between;
    &:after {
      border-top-width: 0px;
    }
    .van-grid-item {
      flex-basis: 48%!important;
      .van-grid-item__content {
        border-radius: 9px;
        box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.1);
      }
    }
    .my-icon-shouye_wodequanxian{
      height 50px;
      width: 50px;
      text-align: center;
      background-image: linear-gradient(0deg, #ffac42 0%, #ffc083 100%), linear-gradient(#fe8c4f, #fe8c4f);
      background-blend-mode: normal, normal;
      border-radius: 50%;
      &:before {
        color: white;
        line-height: 50px
      }
    }

  }
}
</style>
<style lang="stylus" scoped>
.index-body {
  height: 100%;
  background: url("../../assets/img/png/banner.png") no-repeat fixed top;
  background-color: #fafafa;
  background-size:100% auto;
  .header {
    background-color: transparent;
    &:after {
      border-bottom-width: 0px!important;
    }
  }
}

.index-content {
  padding: 46px 15px 0px 15px;
  height: calc(100% - 46px);
  // height: calc(100% - $headerHeight);
  .tab-box {
    margin-top: 15vh;
    // border: 1px solid #c8c9cc;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.14);
    .van-tab__pane {
      margin-top: 4vh;
      padding-bottom: 15px;
      text-align: center;
    }
    .van-tabs__wrap {
      border-radius: 10px !important;
    }

    .search {
      margin-top: 3vh;
      background-color: #d3333b;
    }

    .van-button {
      width: 90%;
    }
  }

  .contorl-box {
    margin: 15px 0px 0px 0px !important;

    .van-button {
      width: 100%;
    }
  }
}
</style>
