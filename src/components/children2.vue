<template>
  <div>
    childred 2
  </div>
</template>

<script>
export default {
  mixins: [{
    mounted () {
      console.log('mixins mounted 1')
    }
  }, {
    mounted () {
      console.log('mixins mounted 2')
    }
  }],
  beforeCreate () {
    console.log('children2 beforeCreate')
  },
  created () {
    console.log('children2 created')
  },
  beforeMount () {
    console.log('children2 beforeMount')
  },
  mounted () {
    console.log('children2 mounted')
  },
  beforeUpdate () {
    console.log('children2 beforeUpdate')
  },
  updated () {
    console.log('children2 updated')
  },
  beforeDestroy () {
    console.log('children2 beforeDestroy')
  },
  destroyed () {
    console.log('children2 destroyed')
  }
}
</script>

<style scoped>
</style>
