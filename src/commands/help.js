const glob = require('glob')
const { RichEmbed } = require('discord.js')

const files = glob.sync('*.js')

const glob = require('glob')
const { RichEmbed } = require('discord.js')

const files = glob.sync('*.js')

module.exports = {
  command: '.help',
  description: '',
  function: (msg, commands) => {
    const commandsList = Object.values(commands).map( command => {
      if (command.description) {
        return `${command.command} - ${command.description}`
      }
      else {
        return ${command.command}
      }
    })
    const response = new RichEmbed()
      .setTitle('List of all commands:')
      .setColor(0xFF0000)
      .setDescription(commandsList)

    return response
  }
};
