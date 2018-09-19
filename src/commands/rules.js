const { prefix } = require('../../settings')

module.exports = {
	command: `${prefix}rules`,
	description: '',
	function: function (msg) {
		if (!msg.author){
			throw new Error('empty name')
		}
		return `rules ${msg.author}!`
	}
}
