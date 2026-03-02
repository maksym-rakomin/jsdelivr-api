<script>
import { h } from 'vue'

export default {
  name: 'ShowDialogsTableCell',
  props: {
    data: {
      type: [String, Array, Number, Object],
      default: '',
    },
  },
  setup(props) {
    const checkIsObject = obj => typeof obj === 'object' && obj !== null

    return () => {
      let renderData = [props.data]

      if (Array.isArray(props.data)) {
        renderData = props.data.map(item => {
          if (checkIsObject(item)) {
            return h(
              'div',
              Object.keys(item).map(subItem => h('div', item[subItem])),
            )
          }

          return h('div', item)
        })

        return h('div', renderData)
      }

      if (checkIsObject(props.data)) {
        renderData = Object.keys(props.data).map(item =>
          h('div', props.data[item]),
        )
      }

      return h('div', renderData)
    }
  },
}
</script>
