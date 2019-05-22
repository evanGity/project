<template>
  <div class='model-content'>
    <p>model - content</p>
    <p>{{msg}}</p>
    <Imp icon="el-icon-edit" disabled :size='"mini"' :circle='true' @change='goAct'>
      name
      <p slot="title">title</p>
    </Imp>
  </div>
</template>

<script>
import Imp from './model-import.vue'
export default {
  data () {
    return {
      msg: 'this is parent'
    }
  },
  methods: {
    goAct () {
      console.log('goact')
    }
  },
  components: {
    Imp
  }
}
</script>

<style scoped>
.model-content{
  border: 1px solid red;
}
</style>
