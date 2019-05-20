<template>
  <div>
    <el-button>gogogoo</el-button>
  </div>
</template>

<script>
import { Button } from 'element-ui'
export default {
  title: 'dafasf',
  mixins: [ Button ],
  methods: {
    clk () {
      this.$message.warning('go click')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
