<template>
  <div class="index-body">
    <header-com :title="'国际机票'"></header-com>
    <div class="index-content">
      <van-row type="flex" justify="center" class="tab-box">
        <van-col span="22">
          <van-tabs v-model="active">
            <van-tab title="国内">
              <van-cell>
                <template slot="title">
                  <span class="custom-title">单元格</span>
                  <van-tag type="danger">标签</van-tag>
                </template>
              </van-cell>
              <van-cell>
                <template slot="title">
                  <span class="custom-title">单元格</span>
                  <van-tag type="danger">标签1</van-tag>
                </template>
              </van-cell>
              <van-cell>
                <template slot="title">
                  <span class="custom-title">单元格</span>
                  <van-tag type="danger">标签</van-tag>
                </template>
              </van-cell>
              <van-button type="warning" class="search" @click="jump()">查询</van-button>
            </van-tab>
            <van-tab title="国际">国际</van-tab>
          </van-tabs>
        </van-col>
      </van-row>
      <van-row type="flex" justify="center" gutter="20" class="contorl-box">
        <van-col span="10">
          <van-button icon="star-o" type="warning" @click="add">我的权限 + 1</van-button>
        </van-col>
        <van-col span="10">
          <van-button icon="star-o" type="danger">我的订单</van-button>
        </van-col>
      </van-row>
      <van-icon class-prefix="my-icon" name="rili" />
    </div>
    <footer-com></footer-com>
  </div>
</template>
<script>
import headerCom from '@/components/header/header'
import footerCom from '@/components/footer/footer'
import loginService from '@/service/login-service'
export default {
  components: {
    footerCom,
    headerCom
  },
  data () {
    return {
      data: {},
      active: 2
    }
  },
  mounted () {
    // this.getData2()
  },
  methods: {
    async getData () {
      let result = await loginService.getData()
      console.log(result)
    },
    async getData2 () {
      let result = await loginService.getViewProject()
      console.log('2', result)
    },
    jump () {
      this.$router.push({
        path: '/planeList',
        name: 'planeList'
      })
    },
    add () {
      console.log(this.$store)
      this.$store.dispatch('addCount', 2)
    }
  }
}
</script>
<style lang="stylus" scoped>
.index-body {
  height: 100%;
}
.index-content {
  padding-top: 50px;
  padding-bottom : 50px;
  height: 100%;
  .tab-box {
    margin-top: 10vh;
    .van-tab__pane {
      margin-top: 8vh;
    }
    .search {
      margin-top: 3vh;
    }
    .van-button {
      width: 90%
    }
  }
  .contorl-box {
    margin: 15px 0px 0px 0px!important;
    .van-button {
      width: 100%
    }
  }
}
</style>
