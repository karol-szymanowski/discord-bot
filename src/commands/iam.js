const { secureRoles, prefix } = require("../../settings")

function iam(msg) {
	var roles = msg.content.split(" ")
	roles.shift()
	if(roles.length === 1){
		roles = roles.join("")
		if(secureRoles.indexOf(roles) === -1){
			const guildMember = msg.member
			const roleId = msg.guild.roles.find(role => role.name === roles)
			if(roleId){
				guildMember.addRole(roleId.id)
				return "You are now " + roles
			}
			else{
				return "No role like this, check .roles"
			}
		}
	}
	else {
		return roles.length > 0 ? "You can add only one role at a time" : "You are the one! https://www.youtube.com/watch?v=dT8dmvAzIqA"
	}
}

module.exports = {
	command: `${prefix}iam [role]`,
	description: "grants roles",
	function: iam
}
