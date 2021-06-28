// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

<<<<<<< Updated upstream
// const favoritesSchema = new Schema({
//     name: {
//         type: String,
//         default: null
//     },
//     agency: {
//         type: String,
//         default: null
//     },
//     image: {
//         type: String,
//         default: null
//     },
//     wikipedia: {
//         type: String,
//         default: null
//     },
//     userSchema: {
//         type: Schema.Types.ObjectId,
//         ref: 'User Schema '
//     }
// });

// const Crew = mongoose.model('favorites', crewSchema);
// module.exports = favorites;
=======
const favoritesSchema = new Schema({
    title: {
        type: String,
        default: null
    },
    year: {
        type: String,
        default: null
    },
    rated: {
        type: String,
        default: null
    },
    genre: {
        type: String,
        default: null
    },
    userSchema: {
        type: Schema.Types.ObjectId,
        ref: 'User Schema '
    }
});

const favorites = mongoose.model('favorites', favoritesSchema);
module.exports = favorites;
>>>>>>> Stashed changes
