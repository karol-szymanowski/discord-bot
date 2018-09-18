const { prefix } = require("../../settings")

module.exports = {
	command: `${prefix}hello`,
	description: "",
	function: function (msg) {
		if (!msg.author){
			throw new Error("empty name")
		}
		return `Hello ${msg.author}!`
	}
}
