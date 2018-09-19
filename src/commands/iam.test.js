const iam = require('./iam')
const { prefix } = require('../../settings')

let msg = {
	content: '',
	guild:{
		roles: [
			{
				id: '1234',
				name: 'test'
			},
			{
				id: '4321',
				name: 'test2'
			}
		]
	},
	member: {
		addRole: function() {
			return 200
		}
	}
}

const controlMessages = iam.messages

describe('iam command', () => {
	it('should return value', () => {

		msg.content = `${prefix}iam test`
		expect(iam.response(msg)).toEqual(controlMessages.accept + 'test')
		msg.content = `${prefix}iam test test2`
		expect(iam.response(msg)).toEqual(controlMessages.tooManyRoles)
		msg.content = `${prefix}iam nothing`
		expect(iam.response(msg)).toEqual(controlMessages.noRole + prefix + 'roles')
		msg.content = `${prefix}iam`
		expect(iam.response(msg)).toEqual(controlMessages.emptyRole)
	})
})
