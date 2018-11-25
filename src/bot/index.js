require('dotenv').config()

const { Client } = require('discord.js')
const glob = require('glob')
const { prefix } = require('./settings')

// import all commands
var commands = []
const files = ['src/commands/hello.js']

files.forEach( file => {
	commands[prefix + file.replace('src/commands/', '').replace('.js', '')] = require('./' + file)
})

const client = new Client

client.login(process.env.DISCORD_TOKEN)

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {

	// commands
	if (message.content.indexOf(prefix) === 0) {
		const command = message.content.split(' ')[0]
		if (commands[command]){
			message.channel.send(commands[command].response(message, commands))
		}
		else{
			message.channel.send(`Unknown command :cry:, use "${prefix}help" for full list of commands`)
		}
	}

})
