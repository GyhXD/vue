<template>
  <div class="order-write">
    <header-com
      :title="'退票确认'"
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
      </div>
      <!-- 信息录入 -->
      <div class="order-input">
        <van-cell value="单位垫付" class="order-tips"/>
        <van-cell>
          <template slot="title">
            <span>张默默  ZHANG/MOMO</span>
          </template>
          <template slot="label">
            <span>护照 G75678922 </span>
          </template>
        </van-cell>
         <van-cell value="个人自付" class="order-tips self-pay"/>
        <van-cell>
          <template slot="title">
            <span>张默默  ZHANG/MOMO</span>
          </template>
          <template slot="label">
            <span>护照 G75678922 </span>
          </template>
        </van-cell>
        <van-cell @click="show = !show" title="退票原因" :value="reason" class="self-pay" is-link/>
        <van-popup
          v-model="show"
          round
          position="bottom">
          <div class="filter-title">
            <span @click="show = false">取消</span>
            <span class="confirm" @click="show = false">确定</span>
          </div>
          <van-picker :columns="columns" @change="onChange" />
        </van-popup>
      </div>
    </div>
    <!-- 订单操作 -->
    <div class="order-control">
      <van-button size="small" type="danger" @click="reserveAgain">立即退票</van-button>
    </div>
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
export default {
  components: {
    headerCom,
    tipsTemplate,
    planeLine,
    signPicker
  },
  data() {
    return {
      pickerShow: false,
      planeLineShow: false,
      username: '',
      phone: '',
      showPrice: false,
      show: false,
      columns: ['自愿退票', '航班延误/取消'],
      reason: '',
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
    reserveAgain() {
      this.$router.push({
        path: '/planeList'
      })
    },
    payNow() {
      this.$router.push({
        path: '/confirmOrder'
      })
    },
    refund(type) {
      this.$router.push({
        path: '/choosePerson',
        query: {
          title: type === 'personal' ? '个人退票选人' : '单位退票选人'
        }
      })
    },
    onChange(picker, value, index) {
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
  .filter-title {
    padding: 1.2rem 1.5rem;
    font-size: 1.5rem;
    color: #666666;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #f2f2f2;
    .confirm {
      color: $rootColor;
    }
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
  .order-control {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #fff;
    height: 5rem;
    padding: 0rem 1rem;
    flex-row-end();
    box-sizing: border-box;
    .van-button {
      margin: 5px;
    }
  }
}
</style>
