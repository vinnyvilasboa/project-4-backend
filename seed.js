// import all models
const { Movie } = require('./models');

Movie.create([
    {
        "Title": "The Shawshank Redemption",
        "Year": "1994",
        "Rated": "R",
        "Released": "14 Oct 1994",
        "Runtime": "142 min",
        "Genre": "Drama",
        "Director": "Frank Darabont",
        "Writer": "Stephen King, Frank Darabont",
        "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "91%"
            },
            {
                "Source": "Metacritic",
                "Value": "80/100"
            }
        ],
        "Metascore": "80",
        "imdbRating": "9.3",
        "imdbVotes": "2,400,369",
        "imdbID": "tt0111161",
        "Type": "movie",
        "DVD": "15 Aug 2008",
        "BoxOffice": "$28,699,976",
        "Production": "Columbia Pictures, Castle Rock Entertainment",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Godfather",
        "Year": "1972",
        "Rated": "R",
        "Released": "24 Mar 1972",
        "Runtime": "175 min",
        "Genre": "Crime, Drama",
        "Director": "Francis Ford Coppola",
        "Writer": "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
        "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
        "Plot": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        "Language": "English, Italian, Latin",
        "Country": "USA",
        "Awards": "Won 3 Oscars. Another 29 wins & 30 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "9.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "9.2",
        "imdbVotes": "1,666,752",
        "imdbID": "tt0068646",
        "Type": "movie",
        "DVD": "01 Aug 2013",
        "BoxOffice": "$134,966,411",
        "Production": "Paramount Pictures",
        "Website": "N/A",
        "Response": "True"
    },
], (err, results) => {
    console.log(results);
});
