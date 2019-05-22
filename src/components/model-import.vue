<template>
  <div>
    <el-button :size='size' :circle="circle" type="primary">主要按钮</el-button>
    <el-rate v-model="value" @change='changeVal' show-text></el-rate>
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>

<script>
import { Button, Rate } from 'element-ui'
export default {
  props: {
    ...Button.props
  },
  data () {
    return {
      key: 'value',
      define: 'this is child',
      value: 5
    }
  },
  methods: {
    ...Rate.methods,
    changeVal () {
      this.$emit('change', this.value)
    }
  },
  mounted () {
    // this.$emit('input', this.define)
  }
}
</script>

<style scoped>
</style>
