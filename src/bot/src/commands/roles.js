const { RichEmbed } = require('discord.js')

module.exports = {
	command: 'roles',
	description: 'show roles',
	response: function (msg, options) {
		const roles = msg.guild.roles.map(role => {
			return role.name
		})
		const filteredRoles = roles.filter(rule => {
			return !options.securedRoles.includes(rule)
		})
		const response = new RichEmbed()
			.setTitle('List of roles:')
			.setColor(0xFF0000)
			.setDescription(filteredRoles)
		return response
	}
}
