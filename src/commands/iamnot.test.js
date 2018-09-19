const iamnot = require('./iamnot')
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
		removeRole: function() {
			return 200
		}
	}
}

const controlMessages = iamnot.messages

describe('iamnot command', () => {
	it('should return value', () => {

		msg.content = `${prefix}iamnot test`
		expect(iamnot.response(msg)).toEqual(controlMessages.accept + 'test')
		msg.content = `${prefix}iamnot test test2`
		expect(iamnot.response(msg)).toEqual(controlMessages.tooManyRoles)
		msg.content = `${prefix}iamnot nothing`
		expect(iamnot.response(msg)).toEqual(controlMessages.noRole + prefix + 'roles')
		msg.content = `${prefix}iamnot`
		expect(iamnot.response(msg)).toEqual(controlMessages.emptyRole)
	})
})
