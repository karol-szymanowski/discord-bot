const help = require('./help')

describe('help command', () => {
	it('should return value', () => {
		const msg = {}
		const commands = []

		commands['.test'] = {
			command: '.test',
			description: 'test'
		}

		const expected = {
			'author': undefined,
			'color': 16711680,
			'description': '.test - test',
			'fields': [],
			'file': undefined,
			'files': [],
			'footer': {
				'icon_url': undefined,
				'text': 'Bot created by tetrash'
			},
			'image': undefined,
			'thumbnail': undefined,
			'timestamp': undefined,
			'title': 'List of all commands:',
			'url': 'https://github.com/tetrash/discord-bot'
		}

		expect(help.response(msg, commands)).toEqual(expected)
	})
})
