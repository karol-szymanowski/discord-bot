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
		remove: function() {
			return 200
		}
	}
}

var controlMessages = iamnot.response

describe('iamnot command', () => {
	it('should return value', () => {

		msg.content = `${prefix}iamnot test`
		expect(iamnot.function(msg)).toEqual(controlMessages.accept + 'test')
		msg.content = `${prefix}iamnot test test2`
		expect(iamnot.function(msg)).toEqual(controlMessages.tooManyRoles)
		msg.content = `${prefix}iamnot nothing`
		expect(iamnot.function(msg)).toEqual(controlMessages.noRole + prefix + 'roles')
		msg.content = `${prefix}iamnot`
		expect(iamnot.function(msg)).toEqual(controlMessages.emptyRole)
	})
})
