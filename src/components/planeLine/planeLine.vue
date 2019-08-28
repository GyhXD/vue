<template>
  <div class="plane-line-tem">
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
    }
  },
  methods: {
  }
}
</script>
<style lang="stylus" scoped>
.plane-line-tem {
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
            font-size: 1.5rem;
            span {
              position: absolute;
              top: -35%;
              color: #f08200;
              font-size: .426667rem;
              -webkit-transform: translateY(-30%);
              transform: translateY(-30%);
              right: 0;
              white-space: nowrap;
              padding-bottom: 0.7rem;
              font-size: 1rem;
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
      text-align: start;
    }
  }
}
</style>
