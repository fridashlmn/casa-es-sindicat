// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-v-html": "off",
      "import/order": "error",
      "import/first": "error",
      'arrow-parens': ['error', 'always', { requireForBlockBody: true }],
      'generator-star-spacing': 'off',
      'no-debugger': 'warn',
      'no-console': 'warn',
      'prefer-const': [
        'error',
        {
          destructuring: 'any',
          ignoreReadBeforeAssign: false,
        },
      ],
      'no-lonely-if': 'error',
      'curly': ['error', 'all'],
      'require-await': 'error',
      'dot-notation': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
    },
  },
]);
