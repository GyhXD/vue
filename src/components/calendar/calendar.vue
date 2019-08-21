<template>
  <div class="calendar-box">
    <header-com
      :title="'选择日期'"
      :style="headerStyle"
      :contentColor="'white'"
      :leftText="'确定'"
      :chooseData="chooseData"
    >
    </header-com>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
    >
      <van-grid
        class="week"
        :column-num="7"
      >
        <van-grid-item
          v-for="(item, index) of weekConfig"
          :key="index"
          :text="item.value"
        />
      </van-grid>
      <van-row gutter="24" class="date">
        <van-col
          class="week"
          span="24"
          v-for="(month, i) in monthsData"
          :key="i"
        >
          <div class="title">{{month.title}}</div>
          <van-grid :column-num="7">
            <template v-for="(day, index) of month.monthData">
              <!-- :text="(day.type !== 'prev' ? day.day : '').toString()" -->
              <van-grid-item
                :key="index"
                :class="[getClass(day, month)]"
                @click="chooseDay(day, month)"
              >
                <span class="date-item" :class="[getClass(day, month)]">{{(day.type !== 'prev' ? day.day : '').toString()}}</span>
              </van-grid-item>
            </template>
          </van-grid>
        </van-col>
      </van-row>
    </van-pull-refresh>
  </div>
</template>
<script>
import headerCom from '@/components/header/header';
import Utils from '@/utils/date';
export default {
  components: {
    headerCom
  },
  data() {
    return {
      isLoading: false,
      headerStyle: {
        backgroundColor: '#f44'
      },
      weekConfig: [
        {
          color: 'red',
          value: '日'
        },
        {
          color: 'black',
          value: '一'
        },
        {
          color: 'black',
          value: '二'
        },
        {
          color: 'black',
          value: '三'
        },
        {
          color: 'black',
          value: '四'
        },
        {
          color: 'black',
          value: '五'
        },
        {
          color: 'black',
          value: '六'
        }
      ],
      monthsData: [],
      startDate: null,
      endDate: null,
      unLoadPrev: false,
      unLoadNext: false,
      defaultValue: null,
      type: 'one',
      currDate: null,
      dayPrefix: 'nut-calendar-month-day',
      isAutoBackFill: false,
      chooseData: []
    };
  },
  computed: {
    isRange: function() {
      return this.type === 'range';
    }
  },
  mounted() {
    this.initData();
    this.initProps();
  },
  methods: {
    initProps() {
      this.startDate = this.$route.query.startDate || Utils.getDay(0);
      this.endDate = this.$route.query.endDate || Utils.getDay(365);
      this.isAutoBackFill = this.$route.query.isAutoBackFill || false;
      // this.type = this.$route.query.type;
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    },
    splitDate(date) {
      return date.split('-');
    },
    getCurrDate(day, month, isRange) {
      return isRange
        ? month.curData[3] +
            '-' +
            month.curData[4] +
            '-' +
            Utils.getNumTwoBit(day.day)
        : month.curData[0] +
            '-' +
            month.curData[1] +
            '-' +
            Utils.getNumTwoBit(day.day);
    },
    isStart(currDate) {
      return Utils.isEqual(this.currDate[0], currDate);
    },
    isEnd(currDate) {
      return Utils.isEqual(this.currDate[1], currDate);
    },
    // 放置样式
    getClass(day, month, isRange) {
      const currDate = this.getCurrDate(day, month, isRange);
      if (day.type === 'curr') {
        if (
          (!this.isRange && Utils.isEqual(this.currDate, currDate)) ||
          (this.isRange && (this.isStart(currDate) || this.isEnd(currDate)))
        ) {
          console.log('..', this.currDate, currDate);
          return `${this.dayPrefix}-active`;
        } else if (
          (this.startDate && Utils.compareDate(currDate, this.startDate, '1')) ||
          (this.endDate && Utils.compareDate(this.endDate, currDate, '1.1'))
        ) {
          return `${this.dayPrefix}-disabled`;
        } else if (
          this.isRange & (this.currDate.length === 2) &&
          Utils.compareDate(this.currDate[0], currDate, '2') &&
          Utils.compareDate(currDate, this.currDate[1], '2.2')
        ) {
          return `${this.dayPrefix}-choose`;
        } else {
          return null;
        }
      } else {
        return `${this.dayPrefix}-disabled`;
      }
    },
    // 点击日期
    chooseDay(day, month, isFirst, isRange) {
      const currDate = this.getCurrDate(day, month, isRange);
      if (Utils.compareDate(currDate, this.startDate)) {
        this.$toast('其选择正确日期')
        return null;
      }
      // console.log(day, month);
      if (this.getClass(day, month, isRange, true) !== `${this.dayPrefix}-disabled`) {
        let days = [...month.curData];
        days = isRange ? days.splice(3) : days.splice(0, 3);
        days[2] =
          typeof day.day === 'number' ? Utils.getNumTwoBit(day.day) : day.day;
        days[3] = `${days[0]}-${days[1]}-${days[2]}`;
        days[4] = Utils.getWhatDay(days[0], days[1], days[2]);
        if (!this.isRange) {
          this.currDate = days[3];
          this.chooseData = [...days];
          console.log('chooseOne', this.currDate, this.chooseData)
        } else {
          console.log('currDateTwo', this.currDate, this.currDate.length === 2)
          if (this.currDate.length === 2) {
            this.currDate = [days[3]];
          } else {
            if (Utils.compareDate(this.currDate[0], days[3])) {
              this.currDate.push(days[3]);
            } else {
              this.currDate.unshift(days[3]);
            }
          }
          console.log('chooseDataTwo', this.chooseData)
          if (this.chooseData.length === 2 || !this.chooseData.length) {
            this.chooseData = [...days];
          } else {
            if (Utils.compareDate(this.chooseData[3], days[3])) {
              this.chooseData = [[...this.chooseData], [...days]];
            } else {
              this.chooseData = [[...days], [...this.chooseData]];
            }
          }
        }
        if (this.isAutoBackFill && !isFirst) {
          this.confirm();
        }
      }
    },
    // 确认选择
    confirm() {
      if ((this.isRange && this.chooseData.length === 2) || !this.isRange) {
        // this.$emit('choose', this.chooseData);
        // this.$emit('close');

        this.$router.go(-1);
      }
    },
    // 构造日历数据
    getDaysStatus(days, type) {
      const daysArr = Array.from(Array(days), (v, k) => {
        return {
          day: k + 1,
          type: type
        };
      });
      return daysArr.length >= 7 && type === 'prev' ? [] : daysArr;
    },
    // 构造月份数据
    getMonth(curData, type) {
      const preMonthDays = Utils.getMonthPreDay(curData[0], curData[1]);
      const currMonthDays = Utils.getMonthDays(curData[0], curData[1]);
      const monthInfo = {
        curData: curData,
        title: curData[0] + '年' + curData[1] + '月',
        monthData: [
          ...this.getDaysStatus(preMonthDays, 'prev'),
          ...this.getDaysStatus(currMonthDays, 'curr')
        ]
      };
      if (type === 'next') {
        if (
          !this.endData ||
          !Utils.compareDate(
            `${this.endData[0]}-${this.endData[1]}-${Utils.getMonthDays(
              this.endData[0],
              this.endData[1]
            )}`,
            `${curData[0]}-${curData[1]}-${curData[2]}`
          )
        ) {
          this.monthsData.push(monthInfo);
        } else {
          this.unLoadNext = true;
        }
      } else {
        if (
          !this.startData ||
          !Utils.compareDate(
            `${curData[0]}-${curData[1]}-${curData[2]}`,
            `${this.startData[0]}-${this.startData[1]}-01`
          )
        ) {
          this.monthsData.unshift(monthInfo);
        } else {
          this.unLoadPrev = true;
        }
      }
    },
    // 判断循环添加月份数据是是否会跨年
    getCurrData(type) {
      const monthData =
        type === 'prev'
          ? this.monthsData[0]
          : this.monthsData[this.monthsData.length - 1];
      let year = parseInt(monthData.curData[0]);
      let month = parseInt(monthData.curData[1].toString().replace(/^0/, ''));
      switch (type) {
        case 'prev':
          month === 1 && (year -= 1);
          month = month === 1 ? 12 : --month;
          break;
        case 'next':
          month === 12 && (year += 1);
          month = month === 12 ? 1 : ++month;
          break;
      }
      return [year, Utils.getNumTwoBit(month), monthData.curData[2]];
    },
    // 初始化数据
    initData() {
      if (!this.defaultValue) {
        this.currDate = this.isRange
          ? [Utils.date2Str(new Date()), Utils.getDay(2)]
          : Utils.date2Str(new Date());
      } else {
        this.currDate = this.isRange
          ? [...this.defaultValue]
          : this.defaultValue;
      }
      if (this.isRange) {
        if (
          this.startDate &&
          Utils.compareDate(this.currDate[0], this.startDate)
        ) {
          this.currDate.splice(0, 1, this.startDate);
        }
        if (this.endDate && Utils.compareDate(this.endDate, this.currDate[1])) {
          this.currDate.splice(1, 1, this.endDate);
        }
        this.defaultData = [
          ...this.splitDate(this.currDate[0]),
          ...this.splitDate(this.currDate[1])
        ];
        this.chooseData = [
          [...this.splitDate(this.currDate[0]), this.currDate[0], Utils.getWhatDay(...this.splitDate(this.currDate[0]))],
          [...this.splitDate(this.currDate[1]), this.currDate[1], Utils.getWhatDay(...this.splitDate(this.currDate[1]))]
        ]
      } else {
        if (
          this.startDate &&
          Utils.compareDate(this.currDate, this.startDate)
        ) {
          this.currDate = this.startDate;
        } else if (
          this.endDate &&
          !Utils.compareDate(this.currDate, this.endDate)
        ) {
          this.currDate = this.endDate;
        }
        // this.chooseData = this.currDate;
        this.chooseData = this.defaultData = [...this.splitDate(this.currDate), this.currDate, Utils.getWhatDay(...this.splitDate(this.currDate))];
      }

      this.getMonth(this.defaultData, 'next');
      let i = 1;
      do {
        this.getMonth(this.getCurrData('next'), 'next');
      } while (i++ < 6);
      // console.log(this.monthsData);
    }
  }
};
</script>
<style lang="stylus">
.calendar-box {
  .date {
    .van-grid-item__content {
      padding: 0px!important;
      .date-item {
        display: block;
        // height: 100%;
        width: calc(100% - 12px);
        padding: 10px 6px;
      }
    }
  }
}
</style>
<style lang="stylus" scoped>
.calendar-box {
  height: fit-content;
  background-color: #f2f3f5;

  .week {
    margin-top: $headerHeight;
  }

  .week2 {
    margin-top: $headerHeight * 3;
  }
  .nut-calendar-month-day-active {
    background-color: red;
    color: #FFF;
  }
  .nut-calendar-month-day-disabled {
    color: #c8c9cc;
  }
  .nut-calendar-month-day-choose {
    background-color: mix(red , #FFF, 20%);
    color: #FFF;
  }
}
</style>
