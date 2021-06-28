const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title: {
        type: String,

    },
    Year: {
        type: String,

    },
    Rated: {
        type: String,

    },
    Genre: {
        type: String,

    },
    Director: {
        type: String
    },
    Writer: {
        type: String
    },
    Actors: {
        type: String
    },
    Plot: {
        type: String
    },
    Language: {
        type: String
    },
    Country: {
        type: String
    },
    Awards: {
        type: String
    },
    Poster: {
        type: String
    },
    Metascore: {
        type: String
    },
    imdbRating: {
        type: String
    },
    imdbVotes: {
        type: String
    },
    imdbID: {
        type: String
    },
    Type: {
        type: String
    },
    DVD: {
        type: String
    },
    BoxOffice: {
        type: String
    },
    Production: {
        type: String
    },
    Entertainment: {
        type: String
    },
    Youtube: {

    }
});

const movie = mongoose.model('movie', movieSchema);
module.exports = movie;




// "Title": "The Shawshank Redemption",
// "Year": "1994",
// "Rated": "R",
// "Genre": "Drama",
// "Director": "Frank Darabont",
// "Writer": "Stephen King, Frank Darabont",
// "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
// "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
// "Language": "English",
// "Country": "United States",
// "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
// "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
// "Ratings": [{
//         "Source": "Internet Movie Database",
//         "Value": "9.3/10"
//     },
//     {
//         "Source": "Rotten Tomatoes",
//         "Value": "91%"
//     },
//     {
//         "Source": "Metacritic",
//         "Value": "80/100"
//     }
// ],
// "Metascore": "80",
// "imdbRating": "9.3",
// "imdbVotes": "2,400,369",
// "imdbID": "tt0111161",
// "Type": "movie",
// "DVD": "15 Aug 2008",
// "BoxOffice": "$28,699,976",
// "Production": "Columbia Pictures, Castle Rock Entertainment",
// "Website": "N/A",
// "Response": "True"