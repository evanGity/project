<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'gogogo1',
  data () {
    return {
    }
  }
}
</script>

<style>
@import 'element-ui/lib/theme-chalk/index.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
  transform: translate()
}
.fade-enter-active{
  transition: all .5s ease-in;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active{
  transition: all .5s ease-in;
}
.fade-leave-to {
  opacity: 0;
}
</style>
