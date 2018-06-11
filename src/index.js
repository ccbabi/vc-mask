import mask from './mask.vue'

let Mask, instance, body
let hasSetEscEvent = false
let hasSetClickEvent = false

const def = {
  className: '',
  zIndex: 1000,
  enabledClickClose: true,
  enabledEscClose: false
}

const depStack = []
const linkDescribe = {}

function clickHandle (e) {
  const pid = depStack[depStack.length - 1]
  if (!pid) return

  const link = linkDescribe[pid]

  if (link && link.close && link.instance) {
    if ((e && link.option.enabledClickClose) || link.option.enabledEscClose) {
      link.close.apply(link.instance)
    }
  }
}

function escHandle (e) {
  if (e.keyCode === 27) clickHandle(0)
}

function __initEl (option) {
  const el = this.$mount().$el
  if (!hasSetClickEvent && option.enabledClickClose) {
    el.addEventListener('click', clickHandle, false)
    hasSetClickEvent = true
  }
  body.appendChild(el)
}

function esc () {
  if (!hasSetEscEvent) {
    window.addEventListener('keydown', escHandle, false)
    hasSetEscEvent = true
  }
}

function __setData (option) {
  ['className', 'zIndex'].forEach(prop => {
    this[prop] = option[prop]
  })
}

function __open (option) {
  this.__initEl(option)
  this.__setData(option)
  this.show = true
}

function close () {
  const pid = depStack[depStack.length - 1]

  if (pid) {
    this.__setData(linkDescribe[pid].option)
  }

  if (depStack.length) return

  this.show = false
}

function __afterLeave () {
  if (hasSetClickEvent) {
    instance.$el.removeEventListener('click', clickHandle, false)
    hasSetClickEvent = false
  }

  if (hasSetEscEvent) {
    window.removeEventListener('keydown', escHandle, false)
    hasSetEscEvent = false
  }

  instance = null
}

function initMask (Vue) {
  const Clazz = Vue.extend(mask)
  Object.assign(Clazz.prototype, { __open, __initEl, __setData, close, __afterLeave })
  return Clazz
}

function install (Vue, useOption) {
  Mask = initMask(Vue)
  Mask.useOption = useOption
  body = document.body ||
    document.querySelector('body') ||
    document.getElementsByTagName('body')[0]
}

function getInstance () {
  instance = instance || new Mask()
  return instance
}

function randomId () {
  return Math.random().toString(36).slice(2)
}

function loop () {}

export function mapMask (option) {
  const pid = randomId()
  option = option || {}

  if (option.enabledEscClose) esc()

  function mapMaskOpen (open) {
    let index, ret, callOption, retOption
    open = open || loop

    return function () {
      ret = open.apply(this, arguments)

      if (ret === false) return
      if (ret && typeof ret === 'object') {
        retOption = ret
      }

      callOption = { ...def, ...Mask.useOption, ...option, ...retOption }
      linkDescribe[pid].option = callOption
      linkDescribe[pid].instance = this
      index = depStack.indexOf(pid)

      if (!~index) {
        depStack.push(pid)
      } else {
        depStack.push(depStack.splice(index, 1)[0])
      }

      getInstance().__open(callOption)
    }
  }

  function mapMaskClose (close) {
    let popPid, ret, index
    close = close || loop

    const newClose = function newClose () {
      ret = close.apply(this, arguments)
      if (ret === false) return

      popPid = depStack[depStack.length - 1]
      index = depStack.indexOf(pid)

      if (~index) depStack.splice(index, 1)

      if (popPid === pid) instance.close()
    }

    linkDescribe[pid] = linkDescribe[pid] || {}
    linkDescribe[pid].close = newClose

    return newClose
  }

  return { mapMaskOpen, mapMaskClose }
}

export default { install }
