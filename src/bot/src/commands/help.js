const { RichEmbed } = require('discord.js')

module.exports = {
	command: 'help',
	description: '',
	response: (msg, options) => {
		const commandsList = Object.values(options.commands).map( command => {
			if (command.description) {
				return `${options.prefix}${command.command} - ${command.description}`
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
