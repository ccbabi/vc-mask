# vc-mask
Vue pop-up layer components Shared by all components

## Install
```sh
$ npm install vc-mask --save
```

## Usage
```javascript
import mask from 'vc-mask'

Vue.use(mask)
```

```javascript
import { mapMask } from 'vc-mask'

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
```

## License
MIT

