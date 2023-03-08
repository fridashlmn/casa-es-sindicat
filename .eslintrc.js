const prettierConfig = require('./.prettierrc')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  plugins: ['unicorn', 'vue', 'import', 'prettier'],
  parser: 'vue-eslint-parser',
  rules: {
    /**********************/
    /* General Code Rules */
    /**********************/
    // Enforce import order
    'import/order': 'error',
    // Imports should come first
    'import/first': 'error',
    // Other import rules
    'import/no-mutable-exports': 'error',
    // Allow unresolved imports
    'import/no-unresolved': 'off',
    // Allow paren-less arrow functions only when there's no braces
    'arrow-parens': ['error', 'always', { requireForBlockBody: true }],
    // Allow async-await
    'generator-star-spacing': 'off',
    // Allow debugger during development
    'no-debugger': 'warn',
    'no-console': 'warn',
    // Prefer const over let
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    // No single if in an "else" block
    'no-lonely-if': 'error',
    // Force curly braces for control flow,
    // including if blocks with a single statement
    'curly': ['error', 'all'],
    // No async function without await
    'require-await': 'error',
    // Force dot notation when possible
    'dot-notation': 'error',
    'no-var': 'error',
    // Force object shorthand where possible
    'object-shorthand': 'error',
    // No useless destructuring/importing/exporting renames
    'no-useless-rename': 'error',
    /**********************/
    /*   Unicorn Rules    */
    /**********************/
    // Pass error message when throwing errors
    'unicorn/error-message': 'error',
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',
    // Array.isArray instead of instanceof
    'unicorn/no-array-instanceof': 'error',
    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',
    // Keep regex literals safe!
    'unicorn/no-unsafe-regex': 'off',
    // Lowercase number formatting for octal, hex, binary (0x12 instead of 0X12)
    'unicorn/number-literal-case': 'error',
    // ** instead of Math.pow()
    'unicorn/prefer-exponentiation-operator': 'error',
    // includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-starts-ends-with': 'error',
    // textContent instead of innerText
    'unicorn/prefer-text-content': 'error',
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',
    // Use new when throwing error
    'unicorn/throw-new-error': 'error',
    /**********************/
    /*     Vue Rules      */
    /**********************/
    // Disable template errors regarding invalid end tags
    'vue/no-parsing-error': [
      'error',
      {
        'x-invalid-end-tag': false,
      },
    ],
    // Maximum 5 attributes per line instead of one
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
      },
    ],
    // Per the docs, the root no-unused-vars should be disabled:
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/blob/1cf9243/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
    'no-undef': 'off',
    'prettier/prettier': ['error', prettierConfig],
    'vuejs-accessibility/no-static-element-interactions': 'warn',
  },
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}',
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      files: ['*.js'],
      rules: {
        'no-undef': 'error',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'import/first': 'off', // off due to https://github.com/vuejs/eslint-plugin-vue/issues/1577
      },
    },
  ],
}
