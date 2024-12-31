const linter = require('../../../lib/index')
const { assertErrorCount, assertNoErrors, assertErrorMessage } = require('../../common/asserts')
const { contractWith, funcWith } = require('../../common/contract-builder')

describe('Linter - no-boolean-compare', () => {
  it('should raise an error when comparing a variable to true', () => {
    const code = contractWith(`
      function checkFoo(bool foo) public {
        if (foo == true) {
          // do something
        }
      }
    `)
    const report = linter.processStr(code, { rules: { 'no-boolean-compare': 'error' } })

    assertErrorCount(report, 1)
    assertErrorMessage(report, 'Avoid comparing boolean expressions to true or false.')
  })

  it('should raise an error when comparing a variable to false', () => {
    const code = funcWith(`
      bool bar = false;
      if (bar != false) {
        bar = true;
      }
    `)
    const report = linter.processStr(code, { rules: { 'no-boolean-compare': 'error' } })

    assertErrorCount(report, 1)
    assertErrorMessage(report, 'Avoid comparing boolean expressions to true or false.')
  })

  it('should raise no error for normal usage', () => {
    const code = contractWith(`
      function checkFoo(bool foo) public {
        if (foo) {
          // do something
        } else if (!foo) {
          // do something else
        }
      }
    `)
    const report = linter.processStr(code, { rules: { 'no-boolean-compare': 'error' } })
    assertNoErrors(report)
  })

  it('should raise no error for other comparisons', () => {
    const code = contractWith(`
      function checkValue(uint256 x) public {
        if (x == 5) {
          // allowed
        }
      }
    `)
    const report = linter.processStr(code, { rules: { 'no-boolean-compare': 'error' } })
    assertNoErrors(report)
  })
})
