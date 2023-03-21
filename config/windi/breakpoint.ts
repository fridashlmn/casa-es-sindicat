import { Breakpoints, screens } from './screens'

const getBreakpointValue = (value: Breakpoints): number =>
  +screens[value].slice(0, screens[value].indexOf('px'))

export const getCurrentBreakpoint = (): string => {
  let currentBreakpoint: Breakpoints = 'xl'
  let biggestBreakpointValue = 0
  for (const breakpoint of Object.keys(screens) as Breakpoints[]) {
    const breakpointValue = getBreakpointValue(breakpoint)
    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue
      currentBreakpoint = breakpoint
    }
  }
  return currentBreakpoint
}
