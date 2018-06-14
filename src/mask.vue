<template>
  <transition name="vc-mask" @after-leave="afterLeave">
    <div class="vc-mask" v-show="show" :style="{ zIndex }" :class="className" @touchmove="touchmove" />
  </transition>
</template>

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
      e.preventDefault()
      e.stopPropagation()
    },
    afterLeave (el) {
      el.parentNode.removeChild(el)
      this.__afterLeave && this.__afterLeave()
      this.$destroy()
    }
  }
}
</script>
