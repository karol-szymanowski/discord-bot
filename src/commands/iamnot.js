const { prefix } = require("../../settings")

function iamnot(msg) {
	return 'ok'
}

module.exports = {
	command: `${prefix}iamnot [role]`,
	description: "grants roles",
	function: iamnot
}
