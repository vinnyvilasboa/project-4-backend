const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title: {
        type: String,
        default: null
    },
    Year: {
        type: String,
        default: null
    },
    Rated: {
        type: String,
        default: null
    },
    Genre: {
        type: String,
        default: null
    },
    userSchema: {
        type: Schema.Types.ObjectId,
        ref: 'User Schema '
    }
});

const movie = mongoose.model('movie', movieSchema);
module.exports = movie;