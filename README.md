# Discord bot

Node.js bot for discord

### Installing

```
npm start
```

## Running the tests

To run test use script:
```
npm test
```


### Coding style tests

Eslint is used to test coding style. To run eslint use script:

```
npm run lint
```
It's possibe to fix all coding style-related errors with script:
```
npm run lintfix
```


## Built With

* [Discord.js](https://discord.js.org/) - module that allows to interact with the Discord API
* [Jest](https://discord.js.org/) - testing framework

## Adding commands

To add a new command, create a file in the commands folder. It is important that the name of the folder corresponds to the command which will be called by the user.

The file should export an object with three properties:
* ```command``` - needed when calling the help command,
* ```description``` - as with the command property,
* ```response``` - the response property should be a function that takes one value and returns a string with the response for the user.

#### Example:
```
// hello.js

const { prefix } = require('../../settings')

module.exports = {
	command: `${prefix}hello`,
	description: '',
	response: function (msg) {
		if (!msg.author){
			throw new Error('empty name')
		}
		return `Hello ${msg.author}!`
	}
}
```

## Options

Files ```settings``` and ```.env``` are required to start the bot


```
// .env - should be in the same folder as the index file

DISCORD_TOKEN=[your token]
```

```
// settings.js

module.exports = {
	securedRoles: [ // the roles that the average user should not be able to edit
		'@everyone',
		'Admin',
		'Bots'
	],
	prefix: '!' // default prefix for every command
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
