<template>
  <div class="plane-detail">
    <header-com
      :title="'国际机票'"
      class="header"
    ></header-com>
    <div class="plane-body">
      <!-- 航线图body -->
      <div class="plane-line">
        <div class="plane-line-title">
          <strong @click="reserve">08-27 北京 曼谷</strong>
          <span>
            <van-icon
              class-prefix="my-icon"
              name="rili1"
            />
            <span class="time">总时长:2h15m</span>
          </span>
        </div>
        <!-- 航线图 -->
        <div
          class="plane-line-info"
          v-for="item in 2"
          :key="item"
        >
          <div class="planeinfo-box">
            <div class="planeinfo">
              <div class="planeinfo-left">
                <span class="from">
                  10:15
                  <span>08-28 </span>
                </span>
                <span class="to">
                  10:15
                  <span>08-28 </span>
                </span>
              </div>
              <div class="planeinfo-splite"></div>
              <div class="planeinfo-right">
                <span class="from-airpoint">
                  PEK 首都机场T3
                </span>
                <div class="plane-company">
                  <span class="timer-shaft">2h15m</span>
                  <span class="plane-company-name">南方航空CZ9243 | 波音777-300ER(大)</span>
                  <span class="food">有餐食</span>
                </div>
                <div class="stops">经停 广州 1h30m</div>
                <span class="to-airpoint">
                  BKK 素万纳普国际机场
                </span>
              </div>
            </div>
          </div>
          <div class="transit">中转 香港 9h30m</div>
        </div>
        <!-- 分割线 -->
        <p class="line-splite"></p>
        <!-- 提醒模块 -->
        <div class="tips-box">
          <div class="tips-box-left">
            <p :class="[isTips ? 'ellipsis' : '']"><span class="label">单程提醒：</span><span>商务、旅游等短期签证，部分国家或地区要求入境需持有返程机票，建议购买往返票或持有返程票，以免无法办理乘机和出入境手续。</span></p>
            <p :class="[isTips ? 'ellipsis' : '']"><span class="label">特别提醒：</span><span>未满18周岁单独乘机，以航司规则为准。</span></p>
          </div>
          <div
            class="tips-box-right"
            @click="isTips = !isTips"
          >
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
      </div>
      <!-- 航线列表 -->
      <div
        class="plane-batch"
        v-for="(item, i) in lines"
        :key="i"
      >
        <div class="left">
          <p class="price"><strong class="price-icon">¥</strong><strong class="price">{{item.Price}}</strong></p>
          <p><span>{{item.CabinClassName + " | "}}</span><span @click="aaa"> 退改签及行李规则 ＞</span></p>
        </div>
        <div
          @click="reserve()"
          class="right"
        >
          <p class="title">预 订</p>
          <p
            class="last"
            v-show="item.Surplus < 10"
          >
            <span>剩{{item.Surplus}}张</span>
          </p>
        </div>
      </div>
      <!-- 更多 -->
      <!-- <div class="plane-more" v-show="ismore">
        <div class="plane-line-title">
          <span>
            <span class="time" @click="getMore">查看更多舱位</span>
            <van-icon
              name="arrow-down"
            />
          </span>
        </div>
      </div> -->
    </div>
    <sign-picker
      :pickerShow="pickerShow"
      @signoutPickerHandle="signoutPickerHandle"
    ></sign-picker>
  </div>
</template>
<script>
import headerCom from '@/components/header/header';
import planeService from '@/service/plane-service';
import signPicker from '@/components/pickerSignout/pickerSignout';
export default {
  components: {
    headerCom,
    signPicker
  },
  data() {
    return {
      lines: [
        // {
        //   type: '经济舱',
        //   price: 400,
        //   last: 1
        // }
      ],
      isTips: true,
      pickerShow: false,
      ismore: true
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getMore() {
      this.ismore = false;
    },
    signoutPickerHandle(v) {
      // alert('xxx', v);
      this.pickerShow = v;
    },
    aaa() {
      this.pickerShow = true;
    },
    reserve() {
      this.$router.push({
        path: '/orderWrite'
      });
    },
    async getDetail() {
      const a = {
        cid: 'shunduh5',
        pid:
          'zikWrPsWk/tmq1B8HPjgZP0ldNW2oAyuAusp9/CzXwUbv5SkQQKA7MvGgFZoFvMsTXDgmwMD8qvznwnJN6HSune3iMg8dc9RZbQogtl+DkNVp30B56iKckpgitJMISs3E+n9U9SLmoPj3Cf+RLb744s9gbo61TbhqahsAE5gDYE3yy8nYBHG6U6X+PYtX0OKXvOBYFasbYFuX/4rCkQQNH2KNhni2cXulSPZAwdfNs81cbMr5ZrAA3Bjx/Wh7HVVttvP8rxVi+2uXZWhu4jNGA==',
        supplierCode: 'TMC0001',
        userId: 13488,
        channel: 2
      };
      const result = await planeService.getFlightDetail(a);
      if (result.code === '200') {
        this.lines = result.data.FareDetails;
      }
      console.log('detail', result.data);
    },
    async submit() {
      const a = {
        staffId: '6425',
        sid: "B9xeER6c7sEeKugS5hF/5jKr7wiNNUWq0Z7dPViBXAsu8xOrwVwpc9E+EuJA/PnW80xKYsME9P5FX848DnFyrm2xUfDfvEGnzi1jr5Pr+wb0UAYyEXkovRpkokEcFfIZg+drtavDkagKEgrdZvDH9GfNCHnuoi23hZ5mbRzPD5g=",
        tripOrders: [
          {
            approvalNo: '15668701769408923',
            b2cTripOrderAirShedule: {
              airlines: '中国国际航空CA1515',
              airlinesCode: 'CA',
              arriveAirportName: '虹桥机场',
              arriveCity: '上海',
              arrivePort: 'T2',
              arrivePortCode: 'SHA',
              arriveTime: '2019-08-28 17:40',
              avFlightIndex: 'NmI3NWZjN2RlZTZlNGU4MGE0NzFhNGUyYzQ3OGU5ZGI=',
              b2cTripOrderAirDetails: [
                {
                  arrivePort: '虹桥机场',
                  arriveTime: '2019-08-28 17:40',
                  birthday: 'null',
                  cabinType: '1',
                  coach: '经济舱',
                  coachCode: 'Y',
                  constructionFee: 50,
                  departPort: '首都机场',
                  departTime: '2019-08-28 15:30',
                  detailStaffId: 3189,
                  discount: '9.9',
                  flightNo: 'CA1515',
                  fuelFee: 0,
                  idCardNo: '152104198808070039',
                  idCardType: '1',
                  passengerName: '张鹏',
                  passengerPhone: '18612855590',
                  sex: '1',
                  ticketPrice: 1490,
                  ticketType: '1',
                  totalPrice: 1540,
                  travelType: '0'
                },
                {
                  arrivePort: '虹桥机场',
                  arriveTime: '2019-08-28 17:40',
                  birthday: 'null',
                  cabinType: '1',
                  coach: '经济舱',
                  coachCode: 'Y',
                  constructionFee: 50,
                  departPort: '首都机场',
                  departTime: '2019-08-28 15:30',
                  detailStaffId: 3263,
                  discount: '9.9',
                  flightNo: 'CA1515',
                  fuelFee: 0,
                  idCardNo: '430725197811070019',
                  idCardType: '1',
                  passengerName: '陈凯',
                  passengerPhone: '18612855590',
                  sex: '1',
                  ticketPrice: 1490,
                  ticketType: '1',
                  totalPrice: 1540,
                  travelType: '0'
                }
              ],
              departAirportName: "埃尔科岛机场",
              departCity: "澳大利亚",
              departPort: "T3",
              departPortCode: "ELC",
              departTime: '2019-08-28 15:30',
              discount: '9.9',
              flightNo: 'CA1515',
              flightType: '1',
              food: '1',
              model: '波音777',
              planeCode: '773',
              planeSize: '3',
              runtime: '2小时10分钟',
              stopCount: 0,
              throughFlag: true,
              ticketCount: 2,
              transferCount: 0,
              travelType: '0'
            },
            bak3: '3',
            bak5: '',
            channel: '2',
            companyId: 4,
            contact: '张旭',
            contactPhone: '18612855590',
            departTime: 1566921600000,
            insuCount: 0,
            interceptCount: 1,
            orderPrice: 3080,
            outUserId: '201711020078756087',
            paymentType: '1',
            productType: '2',
            rule: {
              buggage:
                '手提行李：1件，5KG，20×40×55CM；托运行李：20KG，40×60×100CM；婴儿票行李：可以免费托运10KG，可免费托运一辆折叠式婴儿车或摇篮。',
              changeInfos:
                '[{"passengerType":"成人","passengerTypeCode":1,"ruleTime":720,"ruleTimeDesc":"起飞前720小时","beforeOrAfter":1,"fee":0,"percent":0},{"passengerType":"成人","passengerTypeCode":1,"ruleTime":336,"ruleTimeDesc":"起飞前336小时","beforeOrAfter":1,"fee":0,"percent":0},{"passengerType":"成人","passengerTypeCode":1,"ruleTime":4,"ruleTimeDesc":"起飞前4小时","beforeOrAfter":1,"fee":0,"percent":0},{"passengerType":"成人","passengerTypeCode":1,"ruleTime":0,"ruleTimeDesc":"起飞后","beforeOrAfter":1,"fee":149,"percent":0}]',
              changeRule:
                '["航班起飞前4小时之前，改期手续费为0元；航班起飞前4小时之后，改期手续费为149元"]',
              refundInfos:
                '[{"passengerType":"成人","passengerTypeCode":1,"ruleTime":720,"ruleTimeDesc":"起飞前720小时","beforeOrAfter":1,"fee":0,"percent":0},{"passengerType":"成人","passengerTypeCode":1,"ruleTime":336,"ruleTimeDesc":"起飞前336小时","beforeOrAfter":1,"fee":75,"percent":0},{"passengerType":"成人","passengerTypeCode":1,"ruleTime":4,"ruleTimeDesc":"起飞前4小时","beforeOrAfter":1,"fee":149,"percent":0},{"passengerType":"成人","passengerTypeCode":1,"ruleTime":0,"ruleTimeDesc":"起飞后","beforeOrAfter":1,"fee":298,"percent":0}]',
              refundRule:
                '["航班起飞前720小时之前，退票手续费为0元；航班起飞前336小时之前，退票手续费为75元；航班起飞前4小时之前，退票手续费为149元；航班起飞前4小时之后，退票手续费为298元"]',
              signTransferRule: '可以签转'
            },
            serviceFee: 0,
            supplierId: 'TMC0001',
            supplierName: '航旅行',
            ticketCount: 2,
            travelType: '0'
          }
        ]
      };
      const result = await planeService.createaAirportOrder(a);
      if (result.code === '200') {
        console.log('detail', result.data);
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.plane-detail {
  min-height: 100%;
  background-color: $bg-c;

  .header {
    background-color: $rootColor;

    &:after {
      border-bottom-width: 0px !important;
    }
  }

  .plane-body {
    height: 100%;
    padding: $headerHeight + 1rem 1rem 1rem 1rem;

    .plane-line {
      margin-top: 1rem;
      border-radius: 14px;
      background-color: #ffffff;
      padding: 1rem 1rem 1rem 1rem;
      font-size: 1.5rem;
      text-align: center;

      .plane-line-title {
        margin-bottom: 1rem;
        flex-row-between();
      }

      .plane-line-info {
        padding: 0rem 2rem;

        .planeinfo-box {
          .planeinfo {
            flex-row-start();
            min-height: 7rem;

            .planeinfo-left {
              min-height: 8rem;
              flex-col-between();

              .from, .to {
                position: relative;
                font-size: 1.5rem;

                span {
                  position: absolute;
                  top: -35%;
                  color: #f08200;
                  font-size: 0.426667rem;
                  -webkit-transform: translateY(-30%);
                  transform: translateY(-30%);
                  right: 0;
                  white-space: nowrap;
                  padding-bottom: 0.7rem;
                  font-size: 1rem;
                }
              }
            }

            .planeinfo-right {
              min-height: 8rem;
              flex-col-between();
              align-items: flex-start;

              .from-airpoint, .to-airpoint {
                display: inline-block;
                width: 100%;
                text-align: start;
                font-size: 1.7rem;
              }

              .stops {
                background-color: #f5f5f5;
                border-radius: 25px;
                padding: 0.5rem 1rem;
                font-size: 10px;
                margin: 0.5rem 0rem;
                color: #666666;
                position: relative;

                &:after {
                  content: '';
                  position: absolute;
                  bottom: 0;
                  left: -1.1rem;
                  top: 50%;
                  -webkit-transform: translateX(-50%);
                  transform: translateX(-50%);
                  width: 4px;
                  height: 4px;
                  border-radius: 50%;
                  border: 1px solid #d8d8d8;
                  background-color: white;
                  color: #d8d8d8;
                }
              }

              .plane-company {
                position: relative;
                margin: 1rem 0rem;

                .timer-shaft {
                  position: absolute;
                  left: -5rem;
                  font-size: 1rem;
                }

                .plane-company-name {
                  display: block;
                  width: 100%;
                  font-size: 0.7rem;
                  overflow: hidden;
                  font-size: 1rem;
                  // padding-bottom: 1rem;
                }

                .food {
                  position: absolute;
                  right: 0rem;
                  top: 1.5rem;
                  font-size: 0.7rem;
                  transform: scale(0.8);
                  font-size: 1rem;
                }
              }
            }

            .planeinfo-splite {
              position: relative;
              min-height: 7rem;
              width: 0.1rem;
              background-color: #d8d8d8;
              margin: 0rem 1rem;

              &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                border: 1px solid #d8d8d8;
                background-color: currentColor;
                color: #d8d8d8;
              }

              &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                width: 4px;
                height: 4px;
                border-radius: 50%;
                border: 1px solid #d8d8d8;
                background-color: currentColor;
                color: #d8d8d8;
              }
            }
          }
        }

        .transit {
          background-color: #f5f5f5;
          border-radius: 25px;
          padding: 0.5rem 1rem;
          font-size: 10px;
          margin: 0.5rem 0rem 0.5rem 5rem;
          color: #666666;
          text-align: start;
        }
      }

      .time {
        font-size: 1rem;
        color: #666666;
      }
    }

    .plane-batch {
      margin-top: 1rem;
      border-radius: 10px;
      background-color: #ffffff;
      padding: 1rem 1rem 1rem 1rem;
      flex-row-between();

      .left {
        p {
          text-align: center;

          strong {
            display: inline-block;
          }

          .price-icon {
            transform: scale(1);
            color: #ef5649;
          }

          .price {
            font-size: 1.75rem;
            color: #ef5649;
          }
        }

        .price {
          text-align: start;
          margin-bottom: 5px;
        }
      }

      .right {
        border: solid 1px #f08200;
        border-radius: 4px;

        .title {
          display: block;
          font-size: 1.25rem;
          text-align: center;
          padding: 0.5rem 0.5rem;
          background-color: #f08200;
          color: white;
        }

        .last {
          display: inline-block;
          padding: 0rem 0.5rem;
          color: #f08200;

          span {
            display: inline-block;
            transform: scale(0.8);
          }
        }
      }
    }

    .plane-more {
      margin-top: 1rem;
      border-radius: 10px;
      background-color: #ffffff;
      padding: 1rem 1rem 1rem 1rem;
      font-size: 1.5rem;
      height: 2rem;
      flex-row-center();
      color: #e64c3f;
    }

    .line-splite {
      display: inline-block;
      height: 1px;
      width: 90%;
      border: 0.5px #969799 dashed;
    }

    .tips-box {
      width: 90%;
      margin: 0rem 5%;
      min-height: 4rem;
      flex-row-between();

      .tips-box-left {
        height: 100%;
        width: calc(100% - 3rem);
        text-align: left;

        p {
          display: inline-block;
          width: 100%;

          // ellipsis();
          span {
            font-size: 1rem;
            color: #666666;
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
        min-height: 4rem;
        width: 3rem;
        flex-row-center();
      }
    }
  }
}
</style>
