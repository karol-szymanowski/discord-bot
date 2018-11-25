
module.exports = {
	command: 'hello',
	description: '',
	response: (msg) => {
		if (!msg.author){
			return 'Aye nieznajomy!'
		}
		return `Hello ${msg.author}!`
	}
}
