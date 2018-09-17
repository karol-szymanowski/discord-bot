const hello = require('./hello');

describe('hello command', () => {
  it('should return value', () => {

    const msg = {
      author: 'test'
    }
    
    expect(hello(msg)).toEqual('hello test')
  })

  it('should throw error', () => {
    expect(() => {
      hello('').toThrow()
    })
  })
})
