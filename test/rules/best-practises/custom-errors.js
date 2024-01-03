const {
  assertNoWarnings,
  assertNoErrors,
  assertErrorMessage,
  assertErrorCount,
} = require('../../common/asserts')
const { configGetter } = require('../../../lib/config/config-file')
const linter = require('../../../lib/index')
const { funcWith } = require('../../common/contract-builder')

describe('Linter - custom-errors', () => {
  it('should raise error for revert()', () => {
    const code = funcWith(`revert();`)
    const report = linter.processStr(code, {
      rules: { 'custom-errors': 'error' },
    })

    assertErrorCount(report, 1)
    assertErrorMessage(report, 'Use Custom Errors instead of revert statement')
  })

  it('should raise error for revert([string])', () => {
    const code = funcWith(`revert("Insufficent funds");`)
    const report = linter.processStr(code, {
      rules: { 'custom-errors': 'error' },
    })

    assertErrorCount(report, 1)
    assertErrorMessage(report, 'Use Custom Errors instead of revert statement')
  })

  it('should NOT raise error for revert ErrorFunction()', () => {
    const code = funcWith(`revert ErrorFunction();`)
    const report = linter.processStr(code, {
      rules: { 'custom-errors': 'error' },
    })

    assertNoWarnings(report)
    assertNoErrors(report)
  })

  it('should NOT raise error for revert ErrorFunction() with arguments', () => {
    const code = funcWith(`revert ErrorFunction({ msg: "Insufficent funds msg" });`)
    const report = linter.processStr(code, {
      rules: { 'custom-errors': 'error' },
    })

    assertNoWarnings(report)
    assertNoErrors(report)
  })

  it('should raise error for require', () => {
    const code = funcWith(`require(!has(role, account), "Roles: account already has role");
        role.bearer[account] = true;role.bearer[account] = true;
    `)
    const report = linter.processStr(code, {
      rules: { 'custom-errors': 'error' },
    })

    assertErrorCount(report, 1)
    assertErrorMessage(report, 'Use Custom Errors instead of require statement')
  })

  it('should NOT raise error for regular function call', () => {
    const code = funcWith(`callOtherFunction();
        role.bearer[account] = true;role.bearer[account] = true;
    `)
    const report = linter.processStr(code, {
      rules: { 'custom-errors': 'error' },
    })
    assertNoWarnings(report)
    assertNoErrors(report)
  })

  it('should not be included in [recommended] config', () => {
    const code = funcWith(`require(!has(role, account), "Roles: account already has role");
        revert("RevertMessage");
        revert CustomError();
    `)
    const report = linter.processStr(code, {
      rules: { ...configGetter('solhint:recommended').rules, 'compiler-version': 'off' },
    })

    assertNoErrors(report)
    assertNoWarnings(report)
  })
})
