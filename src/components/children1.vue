<template>
  <div ref='cld1'>
    <p>name: {{getCount}}</p>
    <slot name='header'>header</slot> <br>
    <slot name='default' :data='msg'>{{msg}}</slot> <br>
    <slot name='footer'>footer</slot>
    <button @click='increment'>click</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  beforeRouteEnter (to, from, next) {
    console.log(from)
    next(vm => {
      vm.go()
    })
  },
  data () {
    return {
      msg: 'default1daf    dfa'
    }
  },
  computed: {
    ...mapState({
      name: 'name',
      counter1: state => state.operate.counter1
    }),
    ...mapGetters({
      getCount: 'operate/getCount'
    })
  },
  methods: {
    ...mapMutations({
      increment: 'operate/increment'
    }),
    go () {
      console.log('调用成功')
    }
  },
  beforeCreate () {
    console.log('children1 beforeCreate')
  },
  created () {
    console.log('children1 created')
  },
  beforeMount () {
    console.log('children1 beforeMount')
  },
  mounted () {
    console.log(this.$route.meta)
    console.log('children1 mounted')
  },
  beforeUpdate () {
    console.log('children1 beforeUpdate')
  },
  updated () {
    console.log('children1 updated')
  },
  beforeDestroy () {
    console.log('children1 beforeDestroy')
  },
  destroyed () {
    console.log('children1 destroyed')
  }
}
</script>

<style scoped>
</style>
