const express = require('express')
const mongoose = require('mongoose')
const dbConfig = {
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	port: process.env.DATABASE_PORT,
	pass: process.env.DATABASE_PASS,
	db: process.env.DATABASE_DB
}

const db = mongoose.connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.db}`, {
  user: dbConfig.user,
  pass: dbConfig.pass
})

const app = express()
const port = process.env.PORT | 80

app.use(express.static(__dirname + '/public'))

app.get('/playlist', (req, res) => {

	db.playlist.find({}, (e, r) => {
    if (e) res.send(e)
    res.send(r)
  })
})

app.listen(port, () => {
	console.info(`App is running on port ${port}`)
})
