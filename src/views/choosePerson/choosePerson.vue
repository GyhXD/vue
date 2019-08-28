<template>
  <div class="choose-person">
    <header-com
      :title="title"
      class="header"
      @handleRright="handleRright"
    ></header-com>
    <div class="choose-body">
      <van-cell-group>
        <van-cell class="title" title="个人自付">
          <template slot="icon">
            <van-checkbox v-model="checkedAll"></van-checkbox>
          </template>
        </van-cell>
        <van-cell>
          <template slot="icon">
            <van-checkbox v-model="checkedAll"></van-checkbox>
          </template>
          <template slot="title">
            <span>ZHANG/MOMO</span>
          </template>
          <template slot="label">
            <span>描述信息</span>
          </template>
        </van-cell>
      </van-cell-group>
      <van-cell-group>
        <van-cell class="title" title="公司报销">
          <template slot="icon">
            <van-checkbox v-model="checkedAll"></van-checkbox>
          </template>
        </van-cell>
        <van-cell>
          <template slot="icon">
            <van-checkbox v-model="checkedAll"></van-checkbox>
          </template>
          <template slot="title">
            <span>ZHANG/MOMO</span>
          </template>
          <template slot="label">
            <span>描述信息</span>
          </template>
        </van-cell>
      </van-cell-group>
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
      title: '',
      checkedAll: false
    }
  },
  mounted() {
    this.title = this.$route.query.title
  },
  methods: {
    handleRright() {
      this.$router.push({
        path: '/confirmRefund'
      })
    }
  }
}
</script>
<style lang="stylus">
.choose-person {
  .van-checkbox__icon {
    margin-right: 1rem;
  }
  .title {
    span {
      color: #f08200;
    }
  }
}
</style>
<style lang="stylus" scoped>
.choose-person {
  height: 100%;
  background-color: $bg-c;
  .header {
    background-color: $rootColor;
    color: white;
    &:after {
      border-bottom-width: 0px !important;
    }
  }
  .choose-body {
    padding: $headerHeight + 10px 10px 10px 10px;
    .van-cell-group {
      margin-bottom : 10px;
    }
  }
}
</style>
