module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include', 'extend', 'else', 'each', 'if', 'for']
      }
    ],
    'comment-empty-line-before': null,
    'function-name-case': ['lower', { ignoreFunctions: ['/colorPalette/'] }],
    'no-invalid-double-slash-comments': null,
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-empty-line-before': null,
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
    'selector-pseudo-class-no-unknown': null,
    'property-no-unknown': null
  }
}