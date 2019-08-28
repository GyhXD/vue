<template>
  <div class="order-write">
    <header-com
      :title="'订单填写'"
      class="header"
    ></header-com>
   <!-- 订单详情主体 -->
    <div class="order-body">
      <!-- 航班详情 -->
      <div class="order-box">
        <div class="order-detail">
          <p class="order-detail-title">
            <strong @click="submitOrder2">
              <van-icon
                class-prefix="my-icon"
                name="rili1"
              />
              08-27 10:15 北京—曼谷
            </strong>
            <span>经济舱</span>
          </p>
          <p class="order-detail-info">
            <span>首都机场T3-素万纳普国际机场</span>
            <span @click="planeLineShow = true">
              <span class="detail">详情</span>
              <van-icon
                name="arrow"
              />
            </span>
          </p>
          <p class="line-splite"></p>
          <p class="order-detail-sign" @click="pickerShow = true">
            <span class="detail">退改签及行李规则</span>
            <van-icon
              name="arrow"
            />
          </p>
        </div>
        <div class="order-tips">
          <tips-template></tips-template>
        </div>
      </div>
      <!-- 信息录入 -->
      <div class="order-input">
        <van-cell title="出差审批单号" class="order-title" value="内容" is-link to="index" />
        <van-cell value="乘机人信息（最多允许9人下单）" class="order-info">
          <template slot="right-icon">
            <van-icon
              name="add-o"
            />
          </template>
        </van-cell>
        <van-cell value="单位垫付" class="order-tips"/>
        <van-cell >
          <template slot="icon">
            <van-icon
              name="close"
            />
          </template>
          <template slot="right-icon">
            <van-icon
              name="edit"
            />
          </template>
          <template slot="title">
            <span>张默默  ZHANG/MOMO</span>
          </template>
          <template slot="label">
            <span>护照 G75678922 </span>
          </template>
        </van-cell>
         <van-cell value="个人自付" class="order-tips self-pay"/>
        <van-cell >
          <template slot="icon">
            <van-icon
              name="close"
            />
          </template>
          <template slot="right-icon">
            <van-icon
              @click="editInfo()"
              name="edit"
            />
          </template>
          <template slot="title">
            <span>张默默  ZHANG/MOMO</span>
          </template>
          <template slot="label">
            <span>护照 G75678922 </span>
          </template>
        </van-cell>
        <van-cell value="联系人信息" class="self-pay"/>
        <van-cell-group>
          <van-field
            v-model="username"
            label="姓名"
            placeholder="请输入联系人姓名"
          />
          <van-field
            v-model="phone"
            label="手机号"
            placeholder="用于接收航班短信"
          />
          <van-field
            v-model="mail"
            label="邮箱"
            placeholder="紧急联络方式，请正确填写"
          />
        </van-cell-group>
      </div>
    </div>
    <!-- 价钱计算 -->
    <order-submit @submitOrder="submitOrder"></order-submit>
    <!-- 退签picker -->
    <sign-picker :pickerShow="pickerShow" @signoutPickerHandle="signoutPickerHandle"></sign-picker>
    <!-- 详情dialog -->
    <van-dialog
      v-model="planeLineShow"
      class="dialog"
    >
      <plane-line></plane-line>
    </van-dialog>
  </div>
</template>
<script>
import planeService from '@/service/plane-service';
import headerCom from '@/components/header/header';
import signPicker from '@/components/pickerSignout/pickerSignout';
import tipsTemplate from '@/components/tipsTemplate/tipsTemplate';
import planeLine from '@/components/planeLine/planeLine';
import orderSubmit from '@/components/orderSubmit/orderSubmit';
export default {
  components: {
    headerCom,
    tipsTemplate,
    planeLine,
    orderSubmit,
    signPicker
  },
  data() {
    return {
      pickerShow: false,
      planeLineShow: false,
      username: '',
      phone: '',
      showPrice: false,
      mail: ''
    }
  },
  methods: {
    signoutPickerHandle(v) {
      this.pickerShow = v;
    },
    onSubmit() {
      this.showPrice = !this.showPrice;
    },
    editInfo() {
      this.$router.push({
        path: '/modifyPassengersInfo'
      })
    },
    async submitOrder() {
      const a = {
        staffId: '6425',
        tripOrders: [
          {
            approvalNo: '15668701769408923',
            sid: "B9xeER6c7sEeKugS5hF/5jKr7wiNNUWq0Z7dPViBXAsu8xOrwVwpc9E+EuJA/PnW80xKYsME9P5FX848DnFyrm2xUfDfvEGnzi1jr5Pr+wb0UAYyEXkovRpkokEcFfIZg+drtavDkagKEgrdZvDH9GfNCHnuoi23hZ5mbRzPD5g=",
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
              departAirportName: '首都机场',
              departCity: '北京',
              departPort: 'T3',
              departPortCode: 'PEK',
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
        this.$router.push({
          path: '/confirmOrder',
          name: 'confirmOrder'
        })
        console.log('detail', result.data);
      }
    },
    submitOrder2() {
      this.$router.push({
        path: '/confirmOrder',
        name: 'confirmOrder'
      })
    }
  }
}
</script>
<style lang="stylus">
.order-write {
  .dialog {
    padding-top: 15px;
  }
  .order-input {
    .van-icon {
      flex-row-center();
    }
    .van-icon-add-o {
      font-size: 1.7rem;
      color: $rootColor;
    }
    .van-icon-close {
      margin-right: 1rem
    }
    .order-tips {
      span {
        color: #f08200;
      }
    }
  }
  .price-detail {
    bottom: 50px;
  }
}
</style>
<style lang="stylus" scoped>
.order-write {
  height: 100%
  background-color: $bg-c;
  .header {
    background-color: $rootColor;
    color: white;
    &:after {
      border-bottom-width: 0px !important;
    }
  }
  .order-body {
    height: calc(100% - 96px);
    overflow: auto;
    padding-top: $headerHeight;
    .order-box {
      padding: 10px 1rem 1rem 1rem;
      .order-detail {
        background-color: white;
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 1rem;
        .order-detail-title {
          font-size: 1.6rem;
          // flex-row-between();
          margin: 1rem 0rem;
        }
        .order-detail-info {
          font-size: 1.3rem;
          flex-row-between();
          margin: 1rem 0rem;
          color: #666666;
          span {
            display: inline-block;
            .detail {
              color: #f08200;
            }
          }
        }
        .order-detail-sign {
          font-size: 1.3rem;
          margin: 1rem 0rem;
          color: #666666;
          .detail {
            color: #f08200;
          }
        }
        .line-splite {
          display: inline-block;
          height: 1px;
          width: 100%;
          border: 0.5px #969799 dashed;
        }
      }
      .order-tips {
        background-color: white;
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 1rem;
      }
    }
    .order-input {
      .order-title {
        margin-bottom: 10px;
      }
      .order-tips {
        color: #f08200;
      }
      .self-pay {
        margin-top: 10px;
      }
    }
  }
}
</style>
