const { RichEmbed } = require('discord.js')
const { prefix } = require('../../settings')

module.exports = {
	command: `${prefix}help`,
	description: '',
	response: (msg, commands) => {
		const commandsList = Object.values(commands).map( command => {
			if (command.description) {
				return `${command.command} - ${command.description}`
			}
			else {
				return command.command
			}
		})
		const response = new RichEmbed()
			.setTitle('List of all commands:')
			.setColor(0xFF0000)
			.setDescription(commandsList)
			.setURL('https://github.com/tetrash/discord-bot')
			.setFooter('Bot created by tetrash')

		return response
	}
}
