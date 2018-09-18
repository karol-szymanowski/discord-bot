const { secureRoles, prefix } = require('../../settings')

var response = {
  accept: 'You are now ',
  noRole: 'No role like this, check ',
  tooManyRoles: 'You can add only one role at a time',
  emptyRole: 'You are the one! https://www.youtube.com/watch?v=dT8dmvAzIqA'
}

function iam(msg) {
	var role = msg.content.split(" ")
	role.shift()
	if(role.length === 1){
  	role = role.join('')
		if(secureRoles.indexOf(role) === -1){
			const guildMember = msg.member
			const roleId = msg.guild.roles.find(r => r.name === role)
			if(roleId){
				guildMember.addRole(roleId.id)
				return response.accept + role
			}
			else{
				return response.noRole + prefix + 'roles'
			}
		}
	}
	else {
		return role.length > 0 ? response.tooManyRoles : response.emptyRole
	}
}

module.exports = {
	command: `${prefix}iam [role]`,
	description: 'grants role',
	function: iam,
	response
}
