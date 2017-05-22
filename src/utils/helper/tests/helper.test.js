import { camelToPascal, camelToNormal, camelToConst, camelToSnake, numberFormat } from '../helper'

const value = 'testController'

describe('Test Helper',() => {
  it('should Function : camelToPascal',() => {
    const expected = 'TestController'
    const received = camelToPascal(value)
    expect(received).toEqual(expected)
  })
  it('should Function : camelToNormal',() => {
    const expected = 'Test Controller'
    const received = camelToNormal(value)
    expect(received).toEqual(expected)
  })
  it('should Function : camelToConst',() => {
    const expected = 'TEST_CONTROLLER'
    const received = camelToConst(value)
    expect(received).toEqual(expected)
  })
  it('should Function : camelToSnake',() => {
    const expected = 'test_controller'
    const received = camelToSnake(value)
    expect(received).toEqual(expected)
  })
  it('should Function : numberFormat',() => {
    const expected = '11,111'
    const received = numberFormat(11111)
    expect(received).toEqual(expected)
  })

  it('should Function : camelToPascal (nullable)',() => {
    const expected = null
    const received = camelToPascal(null)
    expect(received).toEqual(expected)
  })
  it('should Function : camelToNormal (nullable)',() => {
    const expected = null
    const received = camelToNormal(null)
    expect(received).toEqual(expected)
  })
  it('should Function : camelToConst (nullable)',() => {
    const expected = null
    const received = camelToConst(null)
    expect(received).toEqual(expected)
  })
  it('should Function : camelToSnake (nullable)',() => {
    const expected = null
    const received = camelToSnake(null)
    expect(received).toEqual(expected)
  })
  it('should Function : numberFormat (nullable)',() => {
    const expected = 0
    const received = numberFormat(null)
    expect(received).toEqual(expected)
  })
})