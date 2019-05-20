<template>
  <div class='model-content'>
    <p>model - content</p>
    <p>{{msg}}</p>
    <Imp v-model='msg'></Imp>
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
