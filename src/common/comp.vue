<template>
  <div>
    <p v-once>{{key}}</p>
    <exted type='primary'></exted>
  </div>
</template>

<script>
import exted from './exted.vue'
export default {
  data () {
    return {
      key: 'value1'
    }
  },
  methods: {
    beforeChange () {
      console.log(22222)
    }
  },
  mounted () {
    console.log(this.$options.data())
  },
  components: {
    exted
  }
}
</script>

<style lang="less" scoped>
</style>
