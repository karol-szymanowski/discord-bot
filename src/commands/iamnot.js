const { securedRoles, prefix } = require('../../settings')

var messages = {
	accept: 'You are no longer ',
	noRole: 'Wrong role ',
	tooManyRoles: 'You can remove only one role at a time',
	emptyRole: 'Sorry, you are not ¯&#92;_(ツ)_/¯'
}

function iamnot(msg) {
	var role = msg.content.split(' ')
	role.shift()
	if(role.length === 1){
		role = role.join('')
		if(securedRoles.indexOf(role) === -1){
			const guildMember = msg.member
			const roleId = msg.guild.roles.find(r => r.name === role)
			if(roleId){
				guildMember.removeRole(roleId.id)
				return messages.accept + role
			}
			else{
				return messages.noRole + prefix + 'roles'
			}
		}
	}
	else {
		return role.length > 0 ? messages.tooManyRoles : messages.emptyRole
	}
}

module.exports = {
	command: `${prefix}iamnot [role]`,
	description: 'remove role',
	response: iamnot,
	messages
}
