<template>
  <div>
    <el-table :data="list"
              height="380"
              style="width: 100%">
      <el-table-column prop="id"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="cardName"
                       label="卡号"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="姓名">
      </el-table-column>
      <el-table-column prop="birthday"
                       label="生日"
                       width="180">
      </el-table-column>
      <el-table-column prop="phone"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="integral"
                       label="地址">
      </el-table-column>
      <el-table-column prop="money"
                       label="日期"
                       width="180">
      </el-table-column>
      <el-table-column prop="payType"
                       label="姓名"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import memberApi from '@/api/member'

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      memberApi.getList().then(resp => {
        this.list = resp.data.data
      })
    }
  }
}
</script>