import plugin from 'windicss/plugin'

const TextStyles = plugin(({ addUtilities }) => {
  const textstyle = {
    'a': {
      'color': '#502eff',
      'text-decoration': 'underline',
      'font-weight': '700',
    },
    '.hyphenate': {
      'word-wrap': 'break-word',
      'overflow-wrap': 'break-word',
      '-webkit-hyphens': 'auto',
      '-moz-hyphens': 'auto',
      'hyphens': 'auto',
    },
  }
  addUtilities(textstyle)
})

export default TextStyles
