<template>
  <div class="hello">
    <h1>moudule test</h1>
    <h2>counter1:{{getCount}}</h2>
    <p v-text="newName"></p>
    <div class="main">
      {{getCount}}   <br>
    </div>
    <router-link to='/children1'>children1</router-link>
    <router-link to='/children2'>children2</router-link>
    <div style="border: 1px solid red;" @click="change">
      <p v-for="(item, key) in info.data.da" :key="key">
        {{ item }}
      </p>
    </div>
    <div style="border: 1px solid green;" @click="pushgo">
      <p v-for="(item, key) in go.name" :key="key">
        {{ item }}
      </p>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>{{$t("notice")}}</span>
    </el-dialog>
  </div>
</template>

<script>
import children1 from '@/components/children1.vue'
import children2 from '@/components/children2.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  newName: 'hellow',
  computed: {
    // ...mapState({
    //   'counter1': 'counter/counter1'
    // }),
    ...mapGetters({
      getCount: 'operate/getCount'
    })
  },
  data () {
    return {
      newName: '"<h1>这是标题</h1>"',
      componentId: 'children1',
      info: {
        data: {
          da: {
            go: '12'
          }
        }
      },
      go: {
        name: [1, 2, 3]
      },
      dialogVisible: false,
      value1: ''
    }
  },
  async mounted () {
    this.increment1()
    this.$store.dispatch('counter/fetchPostAll', {
      api: 'subcribe',
      data: {
        email: 'geekcell@gmail.com',
        brand: 'rp'
      }
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    // console.log(this.$refs.children1.$refs.cld1.innerHTML)
    // console.log(this.go().then((data) => {
    //   console.log(data)
    // }))
    // console.log(11111)
    // const f = () => console.log('now');
    // Promise.try(f);
    // console.log('next');
    // console.log(555)
    // this.test().then((da) => {
    //   console.log(da)
    // })
    // const promise = new Promise(function (resolve, reject) {
    //   reject(new Error('test'))
    // })
    // promise.catch(function (error) {
    //   console.log(11111111)
    //   console.log(error)
    // })
    // let promise1 = new Promise(function (resolve, reject) {
    //   resolve('ok')
    //   console.log(222222)
    //   throw new Error('test')
    // })
    const someAsyncThing = function () {
      return new Promise(function (resolve, reject) {
        // 下面一行会报错，因为x没有声明
        resolve(2)
      })
    }
    someAsyncThing().catch((res) => {
      console.log('22222222222222')
      return 999
    }).then(function (re) {
      console.log(re)
    }).finally(() => {
      console.log(101010)
    })
    console.log(888)
  },
  methods: {
    ...mapActions('operate', [
      'increment1'
    ]),
    async test () {
      return import('../api/mod.js').then(({ gogo }) => {
        return Promise.resolve(25)
      })
    },
    someAsyncThing () {
      return new Promise((resolve, reject) => {
        throw new Error('test')
      })
    },
    change () {
      this.$set(this.info.data.da, 'aa', 30)
    },
    pushgo () {
      this.go.name = [4, 5]
    }
  },
  components: {
    children1,
    children2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
