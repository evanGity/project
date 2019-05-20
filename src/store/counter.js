import Axios from 'axios'

const axios = Axios.create({
  // baseURL: 'https://api.vava.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('config')
  console.log(config)
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

let oApi = {
  'banners': '/gateway/brand-product/banners',
  'subscribe': '/gateway/brand-product/subscribe'
}

function _fetchData (config) {
  return new Promise((resolve, reject) => {
    axios({...config}).then((res) => {
      if (res.data.resCode === 200) {
        resolve(res.data.data)
      } else {
        reject(res.data)
      }
    }).catch((err) => {
      reject(err)
    })
  })
}

// _get({
//   url: oApi.banners,
//   params: {
//     bannerPosition: 'index',
//     brand: 'rp'
//   }
// }).then((res) => {
//   console.log(2222222222)
//   console.log(res)
// })

const state = {
  counter1: 1
}

const mutations = {
  increment (state) {
    state.counter1 += 100
  }
}
const getters = {
  getCount (state) {
    return 'counter.getCount'
  }
}
const actions = {
  increment1 ({commit}) {
    commit('increment')
  },
  fetchGetAll ({commit}, config) {
    const dataConfig = {
      method: 'get',
      url: oApi[config.api],
      params: config.data
    }
    return new Promise((resolve, reject) => {
      _fetchData(dataConfig).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  fetchPostAll ({commit}, config) {
    const dataConfig = {
      method: 'post',
      url: oApi[config.api],
      data: config.data
    }
    return new Promise((resolve, reject) => {
      _fetchData(dataConfig).then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
