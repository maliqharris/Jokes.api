const mongoose = require('mongoose');

// rating, season, imageUrl
const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Need a joke!"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"]
    },

}, {timestamps : true})


module.exports = mongoose.model('Jokes', JokesSchema);