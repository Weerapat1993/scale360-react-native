import { email, required, minLength, maxLength, oneOf, match } from '../formValidation'

describe('Test Form Validation',() => {
  it('should Function : email (true)',() => {
    const value = 'test@email.com'
    const received = email(value)
    const expected = undefined
    expect(received).toEqual(expected)
  })

  it('should Function : required (true)',() => {
    const value = 'test'
    const received = required(value)
    const expected = undefined
    expect(received).toEqual(expected)
  })

  it('should Function : minLength (true)',() => {
    const min = 6
    const str = '1234567'
    const received = minLength(min)(str)
    const expected = undefined
    expect(received).toEqual(expected)
  })

  it('should Function : maxLength (true)',() => {
    const max = 6
    const str = '12345'
    const received = maxLength(max)(str)
    const expected = undefined
    expect(received).toEqual(expected)
  })

  // false
  it('should Function : email (false)',() => {
    const value = 'test'
    const received = email(value)
    const expected = 'Invalid email address'
    expect(received).toEqual(expected)
  })

  it('should Function : required (false)',() => {
    const value = null
    const received = required(value)
    const expected = 'Required'
    expect(received).toEqual(expected)
  })

  it('should Function : minLength (false)',() => {
    const min = 6
    const str = '12345'
    const received = minLength(min)(str)
    const expected = `Must be at least ${min} characters`
    expect(received).toEqual(expected)
  })

  it('should Function : maxLength (false)',() => {
    const max = 6
    const str = '1234567'
    const received = maxLength(max)(str)
    const expected = `Must be no more than ${max} characters`
    expect(received).toEqual(expected)
  })
})
