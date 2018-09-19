const hello = require('./hello')

describe('hello command', () => {
	it('should return value', () => {

		const msg = {
			author: 'test'
		}

		expect(hello.response(msg)).toEqual('Hello test!')
	})

	it('should throw error', () => {
		expect(() => {
			hello.response('').toThrow()
		})
	})
})
