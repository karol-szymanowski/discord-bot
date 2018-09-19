const { secureRoles, prefix } = require('../../settings')

var messages = {
	accept: 'You are now ',
	noRole: 'No role like this, check ',
	tooManyRoles: 'You can add only one role at a time',
	emptyRole: 'You are the one! https://www.youtube.com/watch?v=dT8dmvAzIqA'
}

function iam(msg) {
	var role = msg.content.split(' ')
	role.shift()
	if(role.length === 1){
		role = role.join('')
		if(secureRoles.indexOf(role) === -1){
			const guildMember = msg.member
			const roleId = msg.guild.roles.find(r => r.name === role)
			if(roleId){
				guildMember.addRole(roleId.id)
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
	command: `${prefix}iam [role]`,
	description: 'add role',
	response: iam,
	messages
}
