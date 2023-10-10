/*
 * WARNING: This file is autogenerated using the scripts/generate-rulesets.js
 * script. Do not edit manually.
 */

module.exports = Object.freeze({
  rules: {
    'max-states-count': ['warn', 15],
    'no-console': 'error',
    'no-empty-blocks': 'warn',
    'no-global-import': 'warn',
    'no-unused-import': 'warn',
    'no-unused-vars': 'warn',
    'payable-fallback': 'warn',
    'reason-string': [
      'warn',
      {
        maxLength: 32,
      },
    ],
    quotes: ['error', 'double'],
    'const-name-snakecase': 'warn',
    'contract-name-camelcase': 'warn',
    'event-name-camelcase': 'warn',
    'func-name-mixedcase': 'warn',
    'immutable-vars-naming': [
      'warn',
      {
        immutablesAsConstants: true,
      },
    ],
    'use-forbidden-name': 'warn',
    'var-name-mixedcase': 'warn',
    'imports-on-top': 'warn',
    'visibility-modifier-order': 'warn',
    'avoid-call-value': 'warn',
    'avoid-low-level-calls': 'warn',
    'avoid-sha3': 'warn',
    'avoid-suicide': 'warn',
    'avoid-throw': 'warn',
    'avoid-tx-origin': 'warn',
    'check-send-result': 'warn',
    'compiler-version': ['error', '^0.8.14'],
    'func-visibility': [
      'warn',
      {
        ignoreConstructors: false,
      },
    ],
    'multiple-sends': 'warn',
    'no-complex-fallback': 'warn',
    'no-inline-assembly': 'warn',
    'not-rely-on-block-hash': 'warn',
    'not-rely-on-time': 'warn',
    reentrancy: 'warn',
    'state-visibility': 'warn',
  },
})
