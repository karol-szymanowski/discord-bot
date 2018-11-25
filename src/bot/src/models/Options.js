const mongoose = require('mongoose')
const Schema = mongoose.Schema

const options = new Schema({
	name: { type: String, required: true },
	value: { type: Schema.Types.Mixed }
}, { collection: 'options' })

const optionsModel = mongoose.model('option', options)

module.exports = optionsModel
