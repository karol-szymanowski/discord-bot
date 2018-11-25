db = db.getSiblingDB('discordBot')

db.createCollection('playlist', {
	autoIndexId: true
})

db.createCollection('options', {
	autoIndexId: true
})

db.playlist.insert(
	[
		{
			name: 'Default - rap',
			lastSong: 0,
			order: 'random',
			songs: [
				'https://www.youtube.com/watch?v=b8m9zhNAgKs',
				'https://www.youtube.com/watch?v=dT8dmvAzIqA',
				'https://www.youtube.com/watch?v=wzMrK-aGCug',
				''
			]
		},
		{
			name: 'Default - oldschool',
			lastSong: 0,
			order: 'random',
			songs: [
				'https://www.youtube.com/watch?v=t99KH0TR-J4',
				'https://www.youtube.com/watch?v=HgzGwKwLmgM',
				'https://www.youtube.com/watch?v=DtVBCG6ThDk',
				'https://www.youtube.com/watch?v=EqPtz5qN7HM',
				'https://www.youtube.com/watch?v=8-2BqNLBYXE'
			]
		}
	]
)

db.options.insert(
	[
		{
			name: 'maxVideoLength',
			value: 10
		},
		{
			name: 'minVideoLength',
			value: 1
		},
		{
			name: 'musicRoom',
			value: 'bot-voice-test'
		},
		{
			name: 'prefix',
			value: '!'
		},
		{
			name: 'securedRoles',
			value: [
				'@everyone',
				'Admin',
				'Bots'
			]
		},
		{
			name: 'volume',
			value: 1
		}
	]
)
