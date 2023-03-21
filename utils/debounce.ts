export function debounce(
  func: () => any | void,
  time = 100,
): (event: unknown) => void {
  let timer: number
  return function (event) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(func, time, event)
  }
}
