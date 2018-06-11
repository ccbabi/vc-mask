<template>
  <div>
    <button @click="open1" style="position: relative; z-index: 10001">打开1</button>
    <button @click="close1" style="position: relative; z-index: 10001">关闭1</button>
    <button @click="open2" style="position: relative; z-index: 10001">打开2</button>
    <button @click="close2" style="position: relative; z-index: 10001">关闭2</button>
    <p v-show="show1">alert1</p>
    <p v-show="show2">alert2</p>
  </div>
</template>

<script>
import { mapMask } from '../src'

const mask1 = mapMask({
  enabledClickClose: false,
  enabledEscClose: false,
  className: 'a'
})
const mask2 = mapMask({
  className: 'b'
})

export default {
  data () {
    return {
      show1: false,
      show2: false
    }
  },
  methods: {
    open1: mask1.mapMaskOpen(function () {
      this.show1 = true
    }),
    close1: mask1.mapMaskClose(function () {
      this.show1 = false
    }),
    open2: mask2.mapMaskOpen(function () {
      this.show2 = true
    }),
    close2: mask2.mapMaskClose(function () {
      this.show2 = false
    })
  }
}
</script>
