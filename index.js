require('dotenv').config()

const { Client } = require("discord.js")
const glob = require('glob')

// import all commands
var commands = []
const files = glob.sync('**/src/commands/!(*.test).js')

files.forEach( file => {
  commands['.' + file.replace('src/commands/', '').replace('.js', '')] = require('./' + file)
})

// connect to discord
const client = new Client

client.login(process.env.DISCORD_TOKEN)

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", message => {
  if (commands[message.content]){
  	message.channel.send(commands[message.content](message))
  }
})
