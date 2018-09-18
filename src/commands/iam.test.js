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

var controlMessages = iam.response

describe('iam command', () => {
	it('should return value', () => {

		msg.content = `${prefix}iam test`
		expect(iam.function(msg)).toEqual(controlMessages.accept + 'test')
		msg.content = `${prefix}iam test test2`
		expect(iam.function(msg)).toEqual(controlMessages.tooManyRoles)
		msg.content = `${prefix}iam nothing`
		expect(iam.function(msg)).toEqual(controlMessages.noRole + prefix + 'roles')
		msg.content = `${prefix}iam`
		expect(iam.function(msg)).toEqual(controlMessages.emptyRole)
	})
})
