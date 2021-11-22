<template>
  <div>
    <van-row>
      <van-col span="16">
        <van-search placeholder="请输入搜索关键词" />
      </van-col>
      <van-col span="4">span: 8</van-col>
      <van-col span="4">span: 8</van-col>
    </van-row>
  </div>
</template>

<script lang="ts">
import { Col, Row, Search } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    vanRow: Row,
    vanCol: Col,
    vanSearch: Search,
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

<style scoped></style>
