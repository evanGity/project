<template>
  <div>
    2222 {{msg11}}
  </div>
</template>
<script>
export default {
  title: 'title test',
  mixins: [{
    data () {
      return {
        msg: 'gogoo'
      }
    },
    created () {
      console.log('mixin created')
    },
    mounted () {
      console.log('mixin mounted')
    }
  }],
  data () {
    return {
      msg: 'heolw'
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>
<style  scoped>
div{
  border: 1px solid red;
}
</style>
