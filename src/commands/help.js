const { RichEmbed } = require("discord.js")
const { prefix } = require("../../settings")

module.exports = {
	command: `${prefix}help`,
	description: "",
	function: (msg, commands) => {
		const commandsList = Object.values(commands).map( command => {
			if (command.description) {
				return `${command.command} - ${command.description}`
			}
			else {
				return command.command
			}
		})
		const response = new RichEmbed()
			.setTitle("List of all commands:")
			.setColor(0xFF0000)
			.setDescription(commandsList)

		return response
	}
}
