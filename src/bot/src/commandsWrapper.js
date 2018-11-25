const glob = require('glob')

let commands = []
const files = glob.sync('**/commands/!(*.test).js')

files.forEach( file => {
	commands[file.replace('bot/src/commands/', '').replace('.js', '')] = require(file.replace('bot/src', '.'))
})

function command(prefix, message) {
  if (message.content.indexOf(prefix) === 0) {
    const command = message.content.split(' ')[0]
    if (commands[command]){

      const options = {
        commands,
        prefix
      }

      message.channel.send(commands[command].response(message, options))
    }
    else{
      message.channel.send(`Unknown command :cry:, use "${prefix}help" for full list of commands`)
    }
  }
}

module.exports = command
