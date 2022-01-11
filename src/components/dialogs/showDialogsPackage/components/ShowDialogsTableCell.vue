<script>
export default {
  name: 'ShowDialogsTableCell',
  props: {
    data: {
      type: [String, Array, Number, Object],
      default: '',
    },
  },
  methods: {
    checkIsObject(obj) {
      return typeof obj === 'object' && obj !== null
    },
  },
  render(createElement) {
    let renderData = [this.data]

    if (Array.isArray(this.data)) {
      renderData = this.data.map(item => {
        if (this.checkIsObject(item)) {
          return Object.keys(item).map(subItem =>
            createElement('div', item[subItem]),
          )
        }

        return createElement('div', item)
      })

      return createElement('div', {}, renderData)
    }

    if (this.checkIsObject(this.data)) {
      renderData = Object.keys(this.data).map(item =>
        createElement('div', this.data[item]),
      )
    }

    return createElement('div', {}, renderData)
  },
}
</script>
