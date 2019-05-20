<template>
  <div>
    <p><i>import </i></p>
    <p><i>{{key}}</i></p>
    <p><i>{{msg}}</i></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: 'value',
      define: 'this is child'
    }
  },
  mounted () {
    // this.$emit('input', this.define)
  }
}
</script>

<style scoped>
</style>
