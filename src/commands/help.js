const glob = require('glob')
const { RichEmbed } = require('discord.js')

const files = glob.sync('*.js')

module.exports = {
  command: '.help',
  description: 'list of all commands',
  function: (msg, commands) => {
    const commandsList = Object.values(commands).map( command => {
      return `${command.command} - ${command.description}`
    })
    const response = new RichEmbed()
      .setTitle('List of all commands:')
      .setColor(0xFF0000)
      .setDescription(commandsList)

    return response
  }
};
