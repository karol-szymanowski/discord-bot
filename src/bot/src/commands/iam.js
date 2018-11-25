
var messages = {
	accept: 'You are now ',
	noRole: 'No role like this, check ',
	tooManyRoles: 'You can add only one role at a time',
	emptyRole: 'You are the one! https://www.youtube.com/watch?v=dT8dmvAzIqA'
}

function iam(msg, options) {
	var role = msg.content.split(' ')
	role.shift()
	if(role.length === 1){
		role = role.join('')
		if(options.securedRoles.indexOf(role) === -1){
			const guildMember = msg.member
			const roleId = msg.guild.roles.find(r => r.name === role)
			if(roleId){
				guildMember.addRole(roleId.id)
				return messages.accept + role
			}
			else{
				return messages.noRole + options.prefix + 'roles'
			}
		}
	}
	else {
		return role.length > 0 ? messages.tooManyRoles : messages.emptyRole
	}
}

module.exports = {
	command: 'iam [role]',
	description: 'add role',
	response: iam,
	messages
}
