<template>
  <div class="index-body">
    <header-com
      :title="'工银e差旅'"
      :style="headerStyle"
      :contentColor="'white'"
    ></header-com>
    <router-view></router-view>
    <footer-com></footer-com>
  </div>
</template>
<script>
import headerCom from '@/components/header/header';
import footerCom from '@/components/footer/footer';
import myRoot from '@/views/myRoot/myRoot2';
import loginService from '@/service/login-service';
import { parentDialogsHandle } from '@/mixins/parentComponetsHandle.js';
export default {
  components: {
    footerCom,
    headerCom,
    myRoot
  },
  mixins: [parentDialogsHandle],
  data() {
    return {
      data: {},
      active: 2,
      value: '',
      showPicker: false,
      columns: ['商务舱', '经济舱', '头等舱'],
      headerStyle: {
        backgroundColor: '#f44'
      }
    };
  },
  mounted() {
    this.getCountry()
  },
  methods: {
    async getCountry() {
      const result = await loginService.getCountry('亚洲');
      console.log(result);
    },
    async getData2() {
      const result = await loginService.getViewProject();
      console.log('2', result);
    }
  }
};
</script>
<style lang="stylus" scoped>
.index-body {
  height: 100%;
}
</style>
