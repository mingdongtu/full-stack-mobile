<template>
  <div class="main-home">
    <van-row class="search" align="center" justify="space-between">
      <van-col span="16">
        <van-search placeholder="请输入搜索关键词" />
      </van-col>
      <van-col span="4"
        ><img src="@/assets/icons/service.png" alt=""
      /></van-col>
      <van-col span="4"><img src="@/assets/icons/bell.png" alt="" /></van-col>
    </van-row>
    <!-- 收益总揽 -->
    <Earnings />
  </div>
</template>

<script lang="ts">
import { Col, Row, Search } from 'vant'
import { defineComponent } from 'vue'
import Earnings from './components/earnings.vue'

export default defineComponent({
  components: {
    vanRow: Row,
    vanCol: Col,
    vanSearch: Search,
    Earnings,
  },
  setup() {
    // let search_value = ''
    // return {1`
    //   search_value,
    // }
    return {}
  },
})
</script>

<style scoped lang="less">
.main-home {
  padding: 0 16px;
}
.search {
  .van-search {
    padding-left: 0;
    padding-right: 0;
  }
  .van-col {
    text-align: center;
  }
  img {
    width: 24px;
    height: 24px;
  }
}
</style>
