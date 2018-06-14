import Vue from 'vue'
import mask from '../../src'
import alert from './alert'
import mount from 'vm-mount'
import '../../src/mask.css'

Vue.use(mask)

const app = new Vue({
  render: h => h(alert)
})

app.$mount(mount())
