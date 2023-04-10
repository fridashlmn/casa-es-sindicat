import { dirname, join, resolve } from 'path'
import { defineConfig } from 'windicss/helpers'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import { spacing, supportedSpacings } from './spacing'
import { screens, supportedScreens } from './screens'
import font from './font'
import textStyles from './textStyles'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

function range(size: number, startAt = 0) {
  return Array.from(Array(size).keys()).map((i) => i + startAt)
}

const allColumnVariants = (className: string): string[] => {
  return range(12).map((i) => `${className}-${i}`)
}
const allSpacingVariants = (className: string): string[] => {
  return supportedSpacings.map((spacing) => `${className}-${spacing}`)
}

const allScreenVariants = (classNames: string[]): string[] => {
  return [
    ...classNames,
    ...supportedScreens.flatMap((screen) =>
      classNames.flatMap((safeClass) => `${screen}:${safeClass}`),
    ),
  ]
}

const generateWindiConfig = (appPath: string) => {
  const basePath = dirname(resolve(appPath))
  const basePathShared = dirname(resolve(__dirname, '..'))

  return defineConfig({
    darkMode: 'class',
    extract: {
      exclude: [
        join(basePath, '**/node_modules/**/*'),
        join(basePathShared, '**/node_modules/**/*'),
      ],
      include: [
        join(basePath, '**/*.{vue,html,js,ts}'),
        join(basePathShared, '**/*.{vue,html,js,ts}'),
      ],
    },
    theme: {
      extend: {
        rotate: {
          180: '180deg',
        },
      },
      screens,
      ...font,
      spacing,
      outline: {
        none: 'none',
      },
    },
    plugins: [textStyles, scrollSnapPlugin],
    safelist: [
      allScreenVariants(allColumnVariants('grid-cols')),
      allScreenVariants(allColumnVariants('col-span')),
      allScreenVariants(allColumnVariants('col-start')),
      allScreenVariants(allSpacingVariants('-mt')),
      allScreenVariants(allSpacingVariants('mt')),
      allScreenVariants(allSpacingVariants('-ml')),
      allScreenVariants(allSpacingVariants('ml')),
      allScreenVariants(allSpacingVariants('-mr')),
      allScreenVariants(allSpacingVariants('mr')),
      allScreenVariants(allSpacingVariants('-mb')),
      allScreenVariants(allSpacingVariants('mb')),
      allScreenVariants(allSpacingVariants('pt')),
      allScreenVariants(allSpacingVariants('pb')),
      allScreenVariants(allSpacingVariants('px')),
      allScreenVariants(allSpacingVariants('w')),
      allScreenVariants(allSpacingVariants('max-w')),
      allScreenVariants(allSpacingVariants('min-w')),
      allScreenVariants(allSpacingVariants('max-h')),
      allScreenVariants(allSpacingVariants('h')),
      allScreenVariants(allSpacingVariants('top')),
      allScreenVariants(allSpacingVariants('-top')),
      allScreenVariants(allSpacingVariants('right')),
      allScreenVariants(allSpacingVariants('-right')),
      allScreenVariants(allSpacingVariants('bottom')),
      allScreenVariants(allSpacingVariants('-bottom')),
      allScreenVariants(allSpacingVariants('left')),
      allScreenVariants(allSpacingVariants('-top')),
      allScreenVariants(allSpacingVariants('-right')),
      allScreenVariants(allSpacingVariants('-bottom')),
      allScreenVariants(allSpacingVariants('-left')),
      allScreenVariants(allSpacingVariants('translate-y')),
      allScreenVariants(allSpacingVariants('max-h-fit')),
      allScreenVariants([
        'absolute',
        'rotate-45',
        'overflow-scroll',
        'overflow-hidden',
        'max-h-fit',
        'invisible',
        'visible',
        'hidden',
        'dark:hidden',
        'light:hidden',
      ]),
    ],
  })
}
export default generateWindiConfig
