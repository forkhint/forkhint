/*
 * WARNING: This file is autogenerated using the scripts/generate-rulesets.js
 * script. Do not edit manually.
 */

module.exports = Object.freeze({
  rules: {
    'code-complexity': ['warn', 7],
    'custom-errors': 'error',
    'explicit-types': ['warn'],
    'function-max-lines': ['warn', 50],
    'interface-starts-with-i': 'error',
    'max-line-length': ['error', 120],
    'max-states-count': ['warn', 15],
    'no-console': 'error',
    'no-empty-blocks': 'warn',
    'no-global-import': 'warn',
    'no-unused-vars': 'warn',
    'one-contract-per-file': 'warn',
    'payable-fallback': 'warn',
    'reason-string': [
      'warn',
      {
        maxLength: 32,
      },
    ],
    'constructor-syntax': 'warn',
    'comprehensive-interface': 'warn',
    quotes: ['error', 'double'],
    'foundry-test-functions': ['warn', ['setUp']],
    'named-parameters-function': ['warn', 3],
    'named-parameters-mapping': 'warn',
    'named-return-values': ['warn', 1],
    'non-state-vars-leading-underscore': ['warn'],
    'private-vars-leading-underscore': [
      'warn',
      {
        strict: false,
      },
    ],
    'style-guide-casing': [
      'warn',
      {
        ignorePublicFunctions: false,
        ignoreExternalFunctions: false,
        ignoreInternalFunctions: false,
        ignorePrivateFunctions: false,
        ignoreModifiers: false,
        ignoreImmutables: false,
        ignoreConstants: false,
        ignoreVariables: false,
        ignoreEnums: false,
        ignoreStructs: false,
        ignoreEvents: false,
      },
    ],
    'use-forbidden-name': 'warn',
    'imports-on-top': 'warn',
    ordering: 'warn',
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
