<template>
  <div class="modify-passengers-info">
    <van-nav-bar
      title="编辑乘客"
      right-text="保存"
      left-arrow
      @click-left="back"
      @click-right="save"
    />
    <van-cell-group>
      <van-field
        v-model="passengerInfo.username"
        label="姓名"
        placeholder="请输入姓名"
      />
      <van-field
        v-model="passengerInfo.surname"
        label="姓(拼音）"
        placeholder="请输入姓"
      />
      <van-field
        v-model="passengerInfo.name"
        label="名(拼音）"
        placeholder="请输入名"
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="passengerInfo.passengerType"
        label="乘客类型"
        placeholder="乘客类型"
        @click="passengerTypeShow = true"
      />
      <van-popup
        v-model="passengerTypeShow"
        position="bottom"
        :style="{ height: '40%' }">
        <van-picker :columns="passengerTypeList" @change="onPassengerTypeChange" />
      </van-popup>
      <van-field
        v-model="passengerInfo.gender"
        label="性别"
        placeholder="性别"
      />
      <van-cell title="出生日期" @click="birthdayShow = true" is-link />
      <van-popup
        v-model="birthdayShow"
        position="bottom"
        :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          @confirm="onBirthdayChange"
          type="date"
        />
      </van-popup>
    </van-cell-group>
    <van-cell-group>
      <van-cell @click="idTypeShow = true" :value="passengerInfo.idType" title="证件类型" is-link />
      <van-popup
        v-model="idTypeShow"
        position="bottom"
        :style="{ height: '30%' }">
        <van-picker
          show-toolbar
          @cancel="idTypeShow = false"
          @confirm="onConfirmidType"
          :columns="idTypeList"
          @change="onidTypeChange"/>
      </van-popup>
      <van-field
        v-model="passengerInfo.idNumber"
        label="证件号码"
        placeholder="证件号码"
        class="id-number"
      />
      <van-cell @click="idValidityShow = true" title="证件有效期" is-link />
      <van-popup
        v-model="idValidityShow"
        position="bottom"
        :style="{ height: '40%' }">
        <van-datetime-picker
          v-model="currentDate"
          @confirm="onidValidityChange"
          type="date"
        />
      </van-popup>
      <van-cell @click="payShow = true" :value="passengerInfo.pay" title="支付方式" is-link />
      <van-popup
        v-model="payShow"
        position="bottom"
        :style="{ height: '40%' }">
        <van-picker :columns="payList" @change="onPayChange" />
      </van-popup>
    </van-cell-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      passengerInfo: {
        username: '',
        surname: '',
        name: '',
        passengerType: '',
        gender: '',
        birthday: '',
        idNumber: null,
        idType: '',
        idValidity: '',
        pay: ''
      },
      birthdayShow: false,
      currentDate: new Date(),
      idTypeShow: false,
      idValidityShow: false,
      payShow: false,
      payList: ['自付', '公司'],
      idTypeList: ['护照', '身份证'],
      passengerTypeShow: false,
      passengerTypeList: ['成人票', '儿童票']
    }
  },
  methods: {
    save() {

    },
    back() {
      this.$router.go(-1);
    },
    onPayChange(l, v, i) {
      this.passengerInfo.pay = v;
    },
    onBirthdayChange(v) {
      console.log('xxx', v);
      this.birthdayShow = false;
    },
    onidValidityChange(v) {
      console.log('xxx', v);
      this.idValidityShow = false;
    },
    onidTypeChange(l, v, i) {
      console.log(v)
      this.passengerInfo.idType = v;
      this.idTypeShow = false;
    },
    onConfirmidType(v) {
      this.passengerInfo.idType = v;
      this.idTypeShow = false;
    },
    onPassengerTypeChange() {

    }
  }
}
</script>
<style lang="stylus">
.modify-passengers-info {
  .van-cell__title, .van-cell__value  {
    -webkit-flex: none;
    flex: none;
  }
  .van-cell__title {
    width: 90px;
  }
  .van-cell__right-icon {
    position: absolute;
    right: 10px;
  }
  .id-number {
    .van-cell__value {
      width: 20rem;
    }
  }
}
</style>
<style lang="stylus" scoped>
.modify-passengers-info {
  background-color: $bg-c;
  min-height: 100%;
  .van-nav-bar {
    background-color: $rootColor;
    color: white;
    .van-icon {
      color: white;
    }
    div, span {
      color: white;
    }
  }
  .van-cell-group {
    margin-bottom: 10px;
  }
}
</style>
