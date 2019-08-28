<template>
  <div class="order-write">
    <header-com
      :title="'确认订单'"
      class="header"
    ></header-com>
   <!-- 订单详情主体 -->
    <div class="order-body">
      <!-- 航班详情 -->
      <div class="order-box">
        <div class="order-detail">
          <p class="order-detail-title">
            <strong>
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
        <div class="order-passengers">
          <div class="pay">
            <div class="pay-title">单位垫付</div>
            <van-cell-group>
              <van-cell title="单元格"  label="描述信息" />
              <van-cell title="单元格"  label="描述信息" />
            </van-cell-group>
          </div>
          <div class="concat">
            <div class="pay-title">联系人</div>
            <van-cell-group>
              <van-cell title="单元格"  value="描述信息" />
            </van-cell-group>
          </div>
        </div>
        <div class="order-passengers">
          <div class="pay">
            <div class="pay-title">个人自付</div>
            <van-cell-group>
              <van-cell title="单元格"  label="描述信息" />
              <van-cell title="单元格"  label="描述信息" />
            </van-cell-group>
          </div>
          <div class="concat">
            <div class="pay-title">联系人</div>
            <van-cell-group>
              <van-cell title="单元格"  value="描述信息" />
            </van-cell-group>
          </div>
        </div>
        <van-cell  title="公司账户">
          <template slot="icon">
            <van-icon name="chat"/>
          </template>
          <template slot="right-icon">
            <van-checkbox v-model="checked"></van-checkbox>
          </template>
        </van-cell>
        <p class="tips">* 请先确认单位垫付的订单信息，再确认个人自付的订单信息</p>
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
      mail: '',
      checked: true
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
    submitOrder() {
      alert('xx')
      this.$router.push({
        path: '/orderDetail',
        name: 'orderDetail'
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
      .order-passengers {
        background-color: white;
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 1rem;
        .pay, .concat {
          flex-row-between();
          .pay-title {
            width: 8rem;
          }
          .van-cell-group {
            width: calc(100% - 8rem);
          }
        }
      }
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
      .tips {
        margin-top: 10px;
        font-size: 1rem;
        color: #f08200;
      }
    }
  }
}
</style>
