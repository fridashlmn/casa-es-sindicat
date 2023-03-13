export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export const screens: Record<Breakpoints, string> = {
  xs: '320px',
  sm: '620px',
  md: '768px',
  lg: '1280px',
  xl: '1440px',
}

export const supportedScreens = Object.keys(screens)
export const mobileBreakpoints = ['xs', 'sm', 'md']
export const desktopBreakpoints = ['lg', 'xl']
