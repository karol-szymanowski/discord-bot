const { RichEmbed } = require('discord.js')
const { prefix, securedRoles } = require('../../settings')

module.exports = {
	command: `${prefix}roles`,
	description: 'show roles',
	response: function (msg) {
		const roles = msg.guild.roles.map(role => {
			return role.name
		})
		const filteredRoles = roles.filter(rule => {
			return !securedRoles.includes(rule)
		})
		const response = new RichEmbed()
			.setTitle('List of roles:')
			.setColor(0xFF0000)
			.setDescription(filteredRoles)
		return response
	}
}
