const rules = require('./rules')

describe('rules command', () => {
	it('should return value', () => {

		const msg = {
			author: 'test'
		}

		expect(rules.function(msg)).toEqual('rules test!')
	})

	it('should throw error', () => {
		expect(() => {
			rules.function('').toThrow()
		})
	})
})
