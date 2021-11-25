<template>
  <div>
    <van-row class="time-line">
      <van-col span="14">
        <div class="time" @click="HandleTime">
          <div v-for="(item, index) in time_list" :key="index">
            <span :data-index="index">{{ item }}</span
            ><span :class="{ active: isActive === index }"></span>
          </div>
        </div>
      </van-col>
      <van-col span="4" offset="2"
        ><img src="@/assets/icons/tip.png" alt=""
      /></van-col>
      <van-col span="4"><img src="@/assets/icons/eye.png" alt="" /></van-col>
    </van-row>
    <!-- 数据展示 -->
    <div class="data-back">
      <van-row justify="space-between" class="title">
        <van-col span="8">订单金额</van-col>
        <van-col span="8">订单笔数</van-col>
      </van-row>
      <van-row justify="space-between" class="money">
        <van-col span="8" class="order-income">
          <span>¥</span>
          <span>{{ income.integer }}</span>
          <span>{{ income.decimal }}</span>
        </van-col>
        <van-col span="8" class="order-num">{{ result.order_num }}</van-col>
      </van-row>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Col, Row } from 'vant'
import Utils from '@/utils/index'
export default defineComponent({
  components: {
    vanCol: Col,
    vanRow: Row,
  },
  setup() {
    const isActive = ref<number>(0)
    const time_list = ['今日', '昨日', '近7日', '近30日']

    const result: { order_income: number | string; order_num: number } = {
      order_income: 3561.78,
      order_num: 100,
    }
    const income = Utils.dealMoney(result.order_income)
    const HandleTime = (e: any) => {
      if (e.target.nodeName.toLowerCase() === 'span') {
        isActive.value = parseInt(e.target.dataset.index)
      }
    }
    return {
      isActive,
      time_list,
      HandleTime,
      result,
      income,
    }
  },
})
</script>
<style lang="less" scoped>
.time-line {
  margin-bottom: 14px;
  img {
    width: 20px;
    height: 20px;
  }
  .van-col {
    text-align: center;
  }
}
.time {
  display: flex;
  justify-content: space-between;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .active {
      display: inline-block;
      width: 20px;
      height: 2px;
      background: #16cd86;
    }
  }
  > div > span:nth-of-type(1) {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.45);
    line-height: 20px;
  }
}
.data-back {
  width: 1005;
  height: 97px;
  background: url('./../../../assets/icons/background.png') no-repeat;
  padding: 20px 40px;
  box-sizing: border-box;
}
.title {
  margin-bottom: 8px;
  .van-col {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
  }
}
.order-income {
  > span:nth-of-type(1),
  span:nth-of-type(3) {
    font-size: 10px;
    font-family: DINAlternate-Bold, DINAlternate;
    color: #ffffff;
    margin-right: 3px;
  }
  > span:nth-of-type(2),
  .money > .van-col :nth-of-type(2) {
    font-size: 25px;
    font-family: DINAlternate-Bold, DINAlternate;
    font-weight: bold;
    color: #ffffff;
    line-height: 29px;
  }
}
.money > .van-col :nth-of-type(2),
.order-num {
  font-size: 25px;
  font-family: DINAlternate-Bold, DINAlternate;
  font-weight: bold;
  color: #ffffff;
  line-height: 29px;
}
</style>
