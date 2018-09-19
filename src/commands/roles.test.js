const roles = require('./roles')

describe('roles command', () => {
	it('should return value', () => {

		const msg = {
			guild: {
				roles: [
					{
						name: 'test',
						id: '123'
					},
					{
						name: 'test2',
						id: '321'
					},
				]
			}
		}

		expect(roles.response(msg).description.toString()).toEqual('test\ntest2')
	})
})
