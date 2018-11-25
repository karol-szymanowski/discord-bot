const DISCORD_TOKEN = process.env.DISCORD_TOKEN

const { Client } = require('discord.js')
const mongoose = require('mongoose')
const command = require('./src/commandsWrapper.js')

mongoose.connect(`mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DB}`)

const Options = require('./src/models/Options.js')
let prefix = '.'

Options.findOne({ name: 'prefix' }, (err, doc) => {
	if (err) console.error(err)
	else {
		console.log(doc)
		prefix = doc.value
	}
})

const client = new Client

client.login(DISCORD_TOKEN)

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
	command(prefix, message)
})
