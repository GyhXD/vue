<template>
  <div class="order-confirm">
    <div class="order-confirm-box">
      <div class="content">
        <div class="content-left">
          <p><strong>¥</strong><strong class="price">1000</strong></p>
          <p>1成人  含税票价</p>
        </div>
        <div class="content-right">
          <p @click="showPrice = !showPrice">
            细节
            <van-icon
              v-if="!showPrice"
              name="arrow-up"
            />
            <van-icon
              v-else
              name="arrow-down"
            />
          </p>
        </div>
      </div>
      <van-button @click="submit" class="submit" type="danger">{{buttomName}}</van-button>
    </div>
    <van-action-sheet class="price-detail" round v-model="showPrice">
      <div>
        <p class="title">单位垫付</p>
        <div class="price">
          <van-divider content-position="left">含税票价</van-divider>
          <span class="price1">xxx</span>
        </div>
        <p class="detail">
          <span>机票</span>
          <span>￥1040</span>
        </p>
        <p class="detail">
          <span>税费</span>
          <span>￥1040</span>
        </p>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
export default {
  props: {
    types: {
      type: String,
      default: 'order'
    },
    buttomName: {
      type: String,
      default: '提 交'
    }
  },
  data() {
    return {
      showPrice: false
    }
  },
  methods: {
    submit() {
      this.$emit('submitOrder')
    }
  }
}
</script>
<style lang="stylus">
.order-confirm {
  .van-action-sheet__content {
    padding: 1rem;
  }
  .van-overlay {
    height: calc(100% - 50px);
  }
  .price {
    .van-divider {
      &:before {
        max-width: 0%;
        margin-right: 10px;
      }
    }
  }
}
</style>
<style lang="stylus" scoped>
.order-confirm {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #fff;
  -webkit-user-select: none;
  user-select: none;
  border-top: 1px solid #e5e5e5;
  // box-shadow();
  .order-confirm-box {
    flex-row-between();
    .content {
      width: calc(100% - 110px);
      height: 50px;
      padding: 0rem 1.5rem;
      flex-row-between();
      .content-left {
        p {
          margin-bottom: 5px;
          strong {
            display: inline-block
          }
          .price {
            font-size: 1.75rem;
          }
        }
      }
      .content-right {
        flex-row-center();
      }
    }
    .submit {
      width: 110px;
      height: 50px;
    }
  }
  .price-detail {
    .title {
      font-size: 1.7rem;
      display: inline-block;
      color: #f08200;
    }
    .price {
      flex-row-between();
      .van-divider {
        width: 80%;
        margin: 15px 0px 0px 0px;
      }
      .price1 {
        margin-top: 16px;
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
      }
    }
    .detail {
      margin: 16px 0px 16px 10px;
      flex-row-between();
    }
  }
}
</style>
