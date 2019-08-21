<template>
   <div>
    <!-- <header-com></header-com> -->
    <div>
      <van-row type="flex" justify="center">
        <van-col span="22">
          bbb
        </van-col>
      </van-row>
    </div>
    <!-- <footer-com></footer-com> -->
  </div>
</template>
<script>
import headerCom from '@/components/header/header'
import footerCom from '@/components/footer/footer'
export default {
  components: {
    footerCom,
    headerCom
  },
  data () {
    return {
      data: {}
    }
  },
  methods: {
    getData () {

    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
