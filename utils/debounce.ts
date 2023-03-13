export function debounce(
  func: () => {} | void,
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
