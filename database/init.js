db = db.getSiblingDB('discordBot')

db.createCollection('playlist', {
	autoIndexId: true
})

db.playlist.insert(
	[
		{
			link: 'https://www.youtube.com/watch?v=dT8dmvAzIqA',
			songName: 'hello'
		},
		{
			link: 'https://www.youtube.com/watch?v=dT8dmvAzIqA',
			songName: 'hi'
		}
	]
)
