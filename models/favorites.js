const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
    name: {
        type: String,
        default: null
    },
    agency: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    wikipedia: {
        type: String,
        default: null
    },
    userSchema: {
        type: Schema.Types.ObjectId,
        ref: 'User Schema '
    }
});

const Crew = mongoose.model('favorites', crewSchema);
module.exports = favorites;