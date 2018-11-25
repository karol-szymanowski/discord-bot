const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playlists = new Schema({
	name: { type: String, required: true },
  lastSong: Number,
	order: String,
  songs: [ String ]
})

const playlistsModel = mongoose.model(playlists, { collection: 'options' })

module.exports = playlistsModel
