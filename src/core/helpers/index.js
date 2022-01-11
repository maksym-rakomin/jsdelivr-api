let timeout

export const debounce = (fn, wait = 500) => {
  if (timeout) {
    clearTimeout(timeout)
  }

  timeout = setTimeout(() => {
    fn()
    clearTimeout(timeout)
  }, wait)
}
