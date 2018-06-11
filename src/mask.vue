<template>
  <transition name="vc-mask" @after-leave="afterLeave">
    <div class="vc-mask" v-show="show" :style="{ zIndex }" :class="className" @touchmove="touchmove" />
  </transition>
</template>
<style>
.vc-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: .5;
}

.vc-mask-enter-active,
.vc-mask-leave-active {
  transition: opacity .2s;
}

.vc-mask-enter,
.vc-mask-leave-to,
.vc-mask-leave-active {
  opacity: 0;
}
</style>
<script>
export default {
  name: 'vc-mask',
  props: {
    className: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1000
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    touchmove (e) {
      console.log('e')
      e.preventDefault()
      e.stopPropagation()
    },
    afterLeave (el) {
      el.parentNode.removeChild(el)
    }
  }
}
</script>
