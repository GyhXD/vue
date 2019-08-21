<template>
  <div class="plane-detail">
    <header-com
      :title="'国际机票'"
      class="header"
    ></header-com>
    <div class="plane-body">
      <!-- 航线图 -->
      <div class="plane-line">
        <div class="plane-line-title">
          <strong>08-27 北京    曼谷</strong>
          <span>
            <van-icon
              class-prefix="my-icon"
              name="rili1"
            />
            <span class="time">总时长:2h15m</span>
          </span>
        </div>
        <div class="plane-line-info" v-for="item in 2" :key="item">
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
        <p class="line-splite"></p>
      </div>
      <!-- 航线列表 -->
      <div class="plane-batch" v-for="(item, i) in lines" :key="i">
        <div class="left">
          <p class="price"><strong class="price-icon">¥</strong><strong class="price">{{item.price}}</strong></p>
          <p><span>{{item.type + " | "}}</span><span> 退改签及行李规则 ＞</span></p>
        </div>
        <div class="right">
          <p class="title">预 订</p>
          <p class="last">
            <span>剩{{item.last}}张</span>
          </p>
        </div>
      </div>
      <!-- 更多 -->
      <div class="plane-more" v-show="ismore">
        <div class="plane-line-title">
          <span>
            <span class="time" @click="getMore">查看更多舱位</span>
            <van-icon
              name="arrow-down"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerCom from '@/components/header/header';
export default {
  components: {
    headerCom
  },
  data() {
    return {
      lines: [
        {
          type: '经济舱',
          price: 400,
          last: 1
        }
      ],
      ismore: true
    }
  },
  methods: {
    getMore() {
      this.lines.push({
        type: 'AA舱',
        price: 1400,
        last: 3
      })
      this.ismore = false;
    }
  }
}
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
    padding: $headerHeight + 1rem 1rem 1rem 1rem
    .plane-line {
      margin-top: 1rem;
      border-radius: 14px;
      background-color: #ffffff;
      padding: 1rem 1rem 1rem 1rem;
      font-size: 3rem;
      .plane-line-title {
        flex-row-between()
      }
      .plane-line-info {
        padding: 0rem 2rem;
        .planeinfo-box {
          .planeinfo {
            flex-row-start();
            min-height: 7rem;
            .planeinfo-left  {
              min-height: 8rem;
              flex-col-between()
              .from, .to {
                position: relative;
                span {
                  position: absolute;
                  top: -35%;
                  color: #f08200;
                  font-size: .426667rem;
                  -webkit-transform: translateY(-30%);
                  transform: translateY(-30%);
                  right: 0;
                  white-space: nowrap;
                  padding-bottom: 0.3rem;
                }
              }
            }
            .planeinfo-right  {
              min-height: 8rem;
              flex-col-between();
              align-items: flex-start;
              .from-airpoint, .to-airpoint {
                display: inline-block
                width: 100%;
                text-align: start;
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
                  font-size: 0.7rem;
                }
                .plane-company-name {
                  display: block;
                  width: 100%;
                  font-size: 0.7rem;
                  overflow: hidden;
                  // padding-bottom: 1rem;
                }
                .food {
                  position: absolute;
                  right: 0rem;
                  top: 1.5rem;
                  font-size: 0.7rem;
                  transform: scale(0.8)
                }
              }
            }
            .planeinfo-splite  {
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
      flex-row-between()
      .left {
        p {
          text-align: center;
          strong {
            display: inline-block
          }
          .price-icon {
            transform: scale(1)
            color: #ef5649;
          }
          .price {
            font-size: 3.5rem;
            color: #ef5649;
          }
        }
        .price {
          text-align: start;
          margin-bottom: 5px
        }
      }
      .right {
        border: solid 1px #f08200;
        border-radius: 4px;
        .title {
          display: block;
          font-size: 2.5rem
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
            transform: scale(0.8)
          }
        }
      }
    }
    .plane-more {
      margin-top: 1rem;
      border-radius: 10px;
      background-color: #ffffff;
      padding: 1rem 1rem 1rem 1rem;
      font-size: 3rem;
      height: 2rem;
      flex-row-center()
      color: #e64c3f;
    }
    .line-splite {
      display: inline-block;
      height: 1px;
      width: 100%;
      border: 0.5px #666666 dashed;
    }
  }
}
</style>
