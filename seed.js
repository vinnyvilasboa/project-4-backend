// import all models
const { movie } = require('./models');

movie.create([
    // Jordan's Code
    {
        "Title": "The Shawshank Redemption",
        "Year": "1994",
        "Rated": "R",
        "Genre": "Drama",
        "Director": "Frank Darabont",
        "Writer": "Stephen King, Frank Darabont",
        "Actors": "Tim Robbins, Morgan Freeman, Bob Gunton",
        "Plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 7 Oscars. 21 wins & 43 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
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
    // {
    //     "Title": "The Godfather",
    //     "Year": "1972",
    //     "Rated": "R",
    //     "Released": "24 Mar 1972",
    //     "Runtime": "175 min",
    //     "Genre": "Crime, Drama",
    //     "Director": "Francis Ford Coppola",
    //     "Writer": "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
    //     "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
    //     "Plot": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    //     "Language": "English, Italian, Latin",
    //     "Country": "USA",
    //     "Awards": "Won 3 Oscars. Another 29 wins & 30 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "9.2/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "97%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "100/100"
    //         }
    //     ],
    //     "Metascore": "100",
    //     "imdbRating": "9.2",
    //     "imdbVotes": "1,666,752",
    //     "imdbID": "tt0068646",
    //     "Type": "movie",
    //     "DVD": "01 Aug 2013",
    //     "BoxOffice": "$134,966,411",
    //     "Production": "Paramount Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Dark Knight",
    //     "Year": "2008",
    //     "Rated": "PG-13",
    //     "Released": "18 Jul 2008",
    //     "Runtime": "152 min",
    //     "Genre": "Action, Crime, Drama, Thriller",
    //     "Director": "Christopher Nolan",
    //     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    //     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    //     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    //     "Language": "English, Mandarin",
    //     "Country": "USA, UK",
    //     "Awards": "Won 2 Oscars. Another 157 wins & 163 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "9.0/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "94%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "84/100"
    //         }
    //     ],
    //     "Metascore": "84",
    //     "imdbRating": "9.0",
    //     "imdbVotes": "2,367,366",
    //     "imdbID": "tt0468569",
    //     "Type": "movie",
    //     "DVD": "14 Jun 2010",
    //     "BoxOffice": "$534,858,444",
    //     "Production": "Syncopy",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Godfather: Part II",
    //     "Year": "1974",
    //     "Rated": "R",
    //     "Released": "18 Dec 1974",
    //     "Runtime": "202 min",
    //     "Genre": "Crime, Drama",
    //     "Director": "Francis Ford Coppola",
    //     "Writer": "Francis Ford Coppola (screenplay by), Mario Puzo (screenplay by), Mario Puzo (based on the novel by)",
    //     "Actors": "Al Pacino, Robert Duvall, Diane Keaton, Robert De Niro",
    //     "Plot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    //     "Language": "English, Italian, Spanish, Latin, Sicilian",
    //     "Country": "USA",
    //     "Awards": "Won 6 Oscars. Another 11 wins & 20 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "9.0/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "96%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "90/100"
    //         }
    //     ],
    //     "Metascore": "90",
    //     "imdbRating": "9.0",
    //     "imdbVotes": "1,158,075",
    //     "imdbID": "tt0071562",
    //     "Type": "movie",
    //     "DVD": "01 Aug 2013",
    //     "BoxOffice": "$47,834,595",
    //     "Production": "Paramount Pictures, Coppola Company",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "12 Angry Men",
    //     "Year": "1957",
    //     "Rated": "Approved",
    //     "Released": "10 Apr 1957",
    //     "Runtime": "96 min",
    //     "Genre": "Crime, Drama",
    //     "Director": "Sidney Lumet",
    //     "Writer": "Reginald Rose",
    //     "Actors": "Henry Fonda, Lee J. Cobb, Martin Balsam",
    //     "Plot": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 3 Oscars. 17 wins & 13 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "9.0/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "100%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "96/100"
    //         }
    //     ],
    //     "Metascore": "96",
    //     "imdbRating": "9.0",
    //     "imdbVotes": "707,719",
    //     "imdbID": "tt0050083",
    //     "Type": "movie",
    //     "DVD": "N/A",
    //     "BoxOffice": "N/A",
    //     "Production": "Orion-Nova Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Lord of the Rings: The Return of the King",
    //     "Year": "2003",
    //     "Rated": "PG-13",
    //     "Released": "17 Dec 2003",
    //     "Runtime": "201 min",
    //     "Genre": "Action, Adventure, Drama, Fantasy",
    //     "Director": "Peter Jackson",
    //     "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    //     "Actors": "Noel Appleby, Ali Astin, Sean Astin, David Aston",
    //     "Plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    //     "Language": "English, Quenya, Old English, Sindarin",
    //     "Country": "New Zealand, USA",
    //     "Awards": "Won 11 Oscars. Another 198 wins & 124 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.9/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "93%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "94/100"
    //         }
    //     ],
    //     "Metascore": "94",
    //     "imdbRating": "8.9",
    //     "imdbVotes": "1,678,741",
    //     "imdbID": "tt0167260",
    //     "Type": "movie",
    //     "DVD": "06 Apr 2010",
    //     "BoxOffice": "$377,845,905",
    //     "Production": "New Line Cinema, Saul Zaentz Company",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Pulp Fiction",
    //     "Year": "1994",
    //     "Rated": "R",
    //     "Released": "14 Oct 1994",
    //     "Runtime": "154 min",
    //     "Genre": "Crime, Drama",
    //     "Director": "Quentin Tarantino",
    //     "Writer": "Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino",
    //     "Actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
    //     "Plot": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    //     "Language": "English, Spanish, French",
    //     "Country": "USA",
    //     "Awards": "Won 1 Oscar. Another 69 wins & 75 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.9/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "92%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "94/100"
    //         }
    //     ],
    //     "Metascore": "94",
    //     "imdbRating": "8.9",
    //     "imdbVotes": "1,870,548",
    //     "imdbID": "tt0110912",
    //     "Type": "movie",
    //     "DVD": "21 Apr 2016",
    //     "BoxOffice": "$107,928,762",
    //     "Production": "A Band Apart, Miramax Films, Jersey Films",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Schindler's List",
    //     "Year": "1993",
    //     "Rated": "R",
    //     "Released": "04 Feb 1994",
    //     "Runtime": "195 min",
    //     "Genre": "Biography, Drama, History",
    //     "Director": "Steven Spielberg",
    //     "Writer": "Thomas Keneally (book), Steven Zaillian (screenplay)",
    //     "Actors": "Liam Neeson, Ben Kingsley, Ralph Fiennes, Caroline Goodall",
    //     "Plot": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    //     "Language": "English, Hebrew, German, Polish, Latin",
    //     "Country": "USA",
    //     "Awards": "Won 7 Oscars. Another 85 wins & 49 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.9/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "98%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "94/100"
    //         }
    //     ],
    //     "Metascore": "94",
    //     "imdbRating": "8.9",
    //     "imdbVotes": "1,241,214",
    //     "imdbID": "tt0108052",
    //     "Type": "movie",
    //     "DVD": "05 Mar 2013",
    //     "BoxOffice": "$96,898,818",
    //     "Production": "Universal Pictures, Amblin Entertainment",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Inception",
    //     "Year": "2010",
    //     "Rated": "PG-13",
    //     "Released": "16 Jul 2010",
    //     "Runtime": "148 min",
    //     "Genre": "Action, Adventure, Sci-Fi, Thriller",
    //     "Director": "Christopher Nolan",
    //     "Writer": "Christopher Nolan",
    //     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    //     "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    //     "Language": "English, Japanese, French",
    //     "Country": "USA, UK",
    //     "Awards": "Won 4 Oscars. Another 153 wins & 220 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.8/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "87%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "74/100"
    //         }
    //     ],
    //     "Metascore": "74",
    //     "imdbRating": "8.8",
    //     "imdbVotes": "2,124,584",
    //     "imdbID": "tt1375666",
    //     "Type": "movie",
    //     "DVD": "20 Jun 2013",
    //     "BoxOffice": "$292,576,195",
    //     "Production": "Syncopy, Warner Bros.",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Fight Club",
    //     "Year": "1999",
    //     "Rated": "R",
    //     "Released": "15 Oct 1999",
    //     "Runtime": "139 min",
    //     "Genre": "Drama",
    //     "Director": "David Fincher",
    //     "Writer": "Chuck Palahniuk, Jim Uhls",
    //     "Actors": "Brad Pitt, Edward Norton, Meat Loaf",
    //     "Plot": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    //     "Language": "English",
    //     "Country": "Germany, United States",
    //     "Awards": "Nominated for 1 Oscar. 11 wins & 38 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.8/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "79%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "66/100"
    //         }
    //     ],
    //     "Metascore": "66",
    //     "imdbRating": "8.8",
    //     "imdbVotes": "1,895,995",
    //     "imdbID": "tt0137523",
    //     "Type": "movie",
    //     "DVD": "25 Nov 2015",
    //     "BoxOffice": "$37,030,102",
    //     "Production": "Art Linson Productions, Fox 2000 Pictures, Taurus Film, New Regency Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Lord of the Rings: The Fellowship of the Ring",
    //     "Year": "2001",
    //     "Rated": "PG-13",
    //     "Released": "19 Dec 2001",
    //     "Runtime": "178 min",
    //     "Genre": "Action, Adventure, Drama, Fantasy",
    //     "Director": "Peter Jackson",
    //     "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Peter Jackson (screenplay)",
    //     "Actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
    //     "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    //     "Language": "English, Sindarin",
    //     "Country": "New Zealand, USA",
    //     "Awards": "Won 4 Oscars. Another 117 wins & 126 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.8/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "91%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "92/100"
    //         }
    //     ],
    //     "Metascore": "92",
    //     "imdbRating": "8.8",
    //     "imdbVotes": "1,699,663",
    //     "imdbID": "tt0120737",
    //     "Type": "movie",
    //     "DVD": "28 Jun 2011",
    //     "BoxOffice": "$315,710,750",
    //     "Production": "New Line Cinema, WingNut Films, Saul Zaentz Company",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Forrest Gump",
    //     "Year": "1994",
    //     "Rated": "PG-13",
    //     "Released": "06 Jul 1994",
    //     "Runtime": "142 min",
    //     "Genre": "Drama, Romance",
    //     "Director": "Robert Zemeckis",
    //     "Writer": "Winston Groom (novel), Eric Roth (screenplay)",
    //     "Actors": "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
    //     "Plot": "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "Won 6 Oscars. Another 44 wins & 75 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.8/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "71%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "82/100"
    //         }
    //     ],
    //     "Metascore": "82",
    //     "imdbRating": "8.8",
    //     "imdbVotes": "1,861,176",
    //     "imdbID": "tt0109830",
    //     "Type": "movie",
    //     "DVD": "01 Aug 2013",
    //     "BoxOffice": "$330,455,270",
    //     "Production": "Paramount Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Good, the Bad and the Ugly",
    //     "Year": "1966",
    //     "Rated": "R",
    //     "Released": "29 Dec 1967",
    //     "Runtime": "178 min",
    //     "Genre": "Western",
    //     "Director": "Sergio Leone",
    //     "Writer": "Luciano Vincenzoni (story), Sergio Leone (story), Agenore Incrocci (screenplay), Furio Scarpelli (screenplay), Luciano Vincenzoni (screenplay), Sergio Leone (screenplay)",
    //     "Actors": "Eli Wallach, Clint Eastwood, Lee Van Cleef, Aldo Giuffrè",
    //     "Plot": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    //     "Language": "Italian",
    //     "Country": "Italy, Spain, West Germany",
    //     "Awards": "4 wins & 6 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.8/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "97%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "90/100"
    //         }
    //     ],
    //     "Metascore": "90",
    //     "imdbRating": "8.8",
    //     "imdbVotes": "703,125",
    //     "imdbID": "tt0060196",
    //     "Type": "movie",
    //     "DVD": "27 Aug 2015",
    //     "BoxOffice": "$25,100,000",
    //     "Production": "Produzioni Europee Associati, Constantin Film",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Lord of the Rings: The Two Towers",
    //     "Year": "2002",
    //     "Rated": "PG-13",
    //     "Released": "18 Dec 2002",
    //     "Runtime": "179 min",
    //     "Genre": "Action, Adventure, Drama, Fantasy",
    //     "Director": "Peter Jackson",
    //     "Writer": "J.R.R. Tolkien (novel), Fran Walsh (screenplay), Philippa Boyens (screenplay), Stephen Sinclair (screenplay), Peter Jackson (screenplay)",
    //     "Actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
    //     "Plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    //     "Language": "English, Sindarin, Old English",
    //     "Country": "New Zealand, USA",
    //     "Awards": "Won 2 Oscars. Another 124 wins & 138 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.7/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "95%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "87/100"
    //         }
    //     ],
    //     "Metascore": "87",
    //     "imdbRating": "8.7",
    //     "imdbVotes": "1,517,884",
    //     "imdbID": "tt0167261",
    //     "Type": "movie",
    //     "DVD": "28 Jun 2011",
    //     "BoxOffice": "$342,551,365",
    //     "Production": "New Line Cinema, Saul Zaentz Company",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Matrix",
    //     "Year": "1999",
    //     "Rated": "R",
    //     "Released": "31 Mar 1999",
    //     "Runtime": "136 min",
    //     "Genre": "Action, Sci-Fi",
    //     "Director": "Lana Wachowski, Lilly Wachowski",
    //     "Writer": "Lilly Wachowski, Lana Wachowski",
    //     "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    //     "Plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
    //     "Language": "English",
    //     "Country": "United States, Australia",
    //     "Awards": "Won 4 Oscars. 42 wins & 51 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.7/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "88%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "73/100"
    //         }
    //     ],
    //     "Metascore": "73",
    //     "imdbRating": "8.7",
    //     "imdbVotes": "1,713,959",
    //     "imdbID": "tt0133093",
    //     "Type": "movie",
    //     "DVD": "01 Jan 2009",
    //     "BoxOffice": "$171,479,930",
    //     "Production": "Village Roadshow Prod., Silver Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Goodfellas",
    //     "Year": "1990",
    //     "Rated": "R",
    //     "Released": "21 Sep 1990",
    //     "Runtime": "146 min",
    //     "Genre": "Biography, Crime, Drama",
    //     "Director": "Martin Scorsese",
    //     "Writer": "Nicholas Pileggi (book), Nicholas Pileggi (screenplay), Martin Scorsese (screenplay)",
    //     "Actors": "Robert De Niro, Ray Liotta, Joe Pesci, Lorraine Bracco",
    //     "Plot": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    //     "Language": "English, Italian",
    //     "Country": "USA",
    //     "Awards": "Won 1 Oscar. Another 43 wins & 38 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.7/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "96%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "90/100"
    //         }
    //     ],
    //     "Metascore": "90",
    //     "imdbRating": "8.7",
    //     "imdbVotes": "1,047,519",
    //     "imdbID": "tt0099685",
    //     "Type": "movie",
    //     "DVD": "15 Aug 2008",
    //     "BoxOffice": "$46,836,214",
    //     "Production": "Warner Brothers",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Star Wars: Episode V - The Empire Strikes Back",
    //     "Year": "1980",
    //     "Rated": "PG",
    //     "Released": "20 Jun 1980",
    //     "Runtime": "124 min",
    //     "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    //     "Director": "Irvin Kershner",
    //     "Writer": "Leigh Brackett (screenplay by), Lawrence Kasdan (screenplay by), George Lucas (story by)",
    //     "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    //     "Plot": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
    //     "Language": "English",
    //     "Country": "USA, UK",
    //     "Awards": "Won 1 Oscar. Another 24 wins & 20 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.7/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "94%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "82/100"
    //         }
    //     ],
    //     "Metascore": "82",
    //     "imdbRating": "8.7",
    //     "imdbVotes": "1,183,029",
    //     "imdbID": "tt0080684",
    //     "Type": "movie",
    //     "DVD": "10 Apr 2015",
    //     "BoxOffice": "$292,753,960",
    //     "Production": "Lucasfilm Ltd.",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "One Flew Over the Cuckoo's Nest",
    //     "Year": "1975",
    //     "Rated": "R",
    //     "Released": "19 Nov 1975",
    //     "Runtime": "133 min",
    //     "Genre": "Drama",
    //     "Director": "Milos Forman",
    //     "Writer": "Lawrence Hauben, Bo Goldman, Ken Kesey",
    //     "Actors": "Jack Nicholson, Louise Fletcher, Michael Berryman",
    //     "Plot": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Won 5 Oscars. 37 wins & 15 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.7/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "94%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "84/100"
    //         }
    //     ],
    //     "Metascore": "84",
    //     "imdbRating": "8.7",
    //     "imdbVotes": "934,813",
    //     "imdbID": "tt0073486",
    //     "Type": "movie",
    //     "DVD": "30 Nov 2016",
    //     "BoxOffice": "$108,981,275",
    //     "Production": "Fantasy Films",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Gisaengchung",
    //     "Year": "2019",
    //     "Rated": "R",
    //     "Released": "08 Nov 2019",
    //     "Runtime": "132 min",
    //     "Genre": "Comedy, Drama, Thriller",
    //     "Director": "Bong Joon Ho",
    //     "Writer": "Bong Joon Ho, Jin-won Han",
    //     "Actors": "Kang-ho Song, Sun-kyun Lee, Yeo-jeong Cho",
    //     "Plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    //     "Language": "Korean, English",
    //     "Country": "South Korea",
    //     "Awards": "Won 4 Oscars. 304 wins & 266 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "98%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "96/100"
    //         }
    //     ],
    //     "Metascore": "96",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "613,708",
    //     "imdbID": "tt6751668",
    //     "Type": "movie",
    //     "DVD": "11 Oct 2019",
    //     "BoxOffice": "$53,369,749",
    //     "Production": "CJ Entertainment, TMS Entertainment",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Interstellar",
    //     "Year": "2014",
    //     "Rated": "PG-13",
    //     "Released": "07 Nov 2014",
    //     "Runtime": "169 min",
    //     "Genre": "Adventure, Drama, Sci-Fi",
    //     "Director": "Christopher Nolan",
    //     "Writer": "Jonathan Nolan, Christopher Nolan",
    //     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    //     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    //     "Language": "English",
    //     "Country": "USA, UK, Canada",
    //     "Awards": "Won 1 Oscar. Another 43 wins & 148 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "72%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "74/100"
    //         }
    //     ],
    //     "Metascore": "74",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "1,569,520",
    //     "imdbID": "tt0816692",
    //     "Type": "movie",
    //     "DVD": "24 May 2016",
    //     "BoxOffice": "$188,020,017",
    //     "Production": "Lynda Obst Productions, Syncopy",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "City of God",
    //     "Year": "2002",
    //     "Rated": "R",
    //     "Released": "13 Feb 2004",
    //     "Runtime": "130 min",
    //     "Genre": "Crime, Drama",
    //     "Director": "Fernando Meirelles, Kátia Lund(co-director)",
    //     "Writer": "Paulo Lins (novel), Bráulio Mantovani (screenplay)",
    //     "Actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
    //     "Plot": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    //     "Language": "Portuguese",
    //     "Country": "Brazil, France, Germany",
    //     "Awards": "Nominated for 4 Oscars. Another 74 wins & 46 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "91%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "79/100"
    //         }
    //     ],
    //     "Metascore": "79",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "711,639",
    //     "imdbID": "tt0317248",
    //     "Type": "movie",
    //     "DVD": "17 Dec 2015",
    //     "BoxOffice": "$7,564,459",
    //     "Production": "StudioCanal, Videofilmes Producoes Artisticas, Hank Levine Film, O2 Filmes, Lereby, Lumiere Productions, Globo Filmes, Wild Bunch",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Spirited Away",
    //     "Year": "2001",
    //     "Rated": "PG",
    //     "Released": "28 Mar 2003",
    //     "Runtime": "125 min",
    //     "Genre": "Animation, Adventure, Family, Fantasy, Mystery",
    //     "Director": "Hayao Miyazaki",
    //     "Writer": "Hayao Miyazaki",
    //     "Actors": "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
    //     "Plot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    //     "Language": "Japanese, English",
    //     "Country": "Japan",
    //     "Awards": "Won 1 Oscar. Another 57 wins & 31 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "97%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "96/100"
    //         }
    //     ],
    //     "Metascore": "96",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "675,017",
    //     "imdbID": "tt0245429",
    //     "Type": "movie",
    //     "DVD": "19 Dec 2019",
    //     "BoxOffice": "$13,750,644",
    //     "Production": "Walt Disney Pictures, Tokuma Shoten, Studio Ghibli",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Saving Private Ryan",
    //     "Year": "1998",
    //     "Rated": "R",
    //     "Released": "24 Jul 1998",
    //     "Runtime": "169 min",
    //     "Genre": "Drama, War",
    //     "Director": "Steven Spielberg",
    //     "Writer": "Robert Rodat",
    //     "Actors": "Tom Hanks, Tom Sizemore, Edward Burns, Barry Pepper",
    //     "Plot": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    //     "Language": "English, French, German, Czech",
    //     "Country": "USA",
    //     "Awards": "Won 5 Oscars. Another 74 wins & 75 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "93%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "91/100"
    //         }
    //     ],
    //     "Metascore": "91",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "1,268,208",
    //     "imdbID": "tt0120815",
    //     "Type": "movie",
    //     "DVD": "27 May 2016",
    //     "BoxOffice": "$217,049,603",
    //     "Production": "DreamWorks SKG, Mutual Film Company, Amblin Entertainment, Paramount Pictures, Mark Gordon Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Green Mile",
    //     "Year": "1999",
    //     "Rated": "R",
    //     "Released": "10 Dec 1999",
    //     "Runtime": "189 min",
    //     "Genre": "Crime, Drama, Fantasy, Mystery",
    //     "Director": "Frank Darabont",
    //     "Writer": "Stephen King (novel), Frank Darabont (screenplay)",
    //     "Actors": "Tom Hanks, David Morse, Bonnie Hunt, Michael Clarke Duncan",
    //     "Plot": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    //     "Language": "English, French",
    //     "Country": "USA",
    //     "Awards": "Nominated for 4 Oscars. Another 15 wins & 33 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "78%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "61/100"
    //         }
    //     ],
    //     "Metascore": "61",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "1,179,037",
    //     "imdbID": "tt0120689",
    //     "Type": "movie",
    //     "DVD": "15 Aug 2008",
    //     "BoxOffice": "$136,801,374",
    //     "Production": "Castle Rock Entertainment, Darkwoods Productions, Warner Brothers",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // // Vinny's Code
    // {
    //     "Title": "Se7en",
    //     "Year": "1995",
    //     "Rated": "R",
    //     "Released": "22 Sep 1995",
    //     "Runtime": "127 min",
    //     "Genre": "Crime, Drama, Mystery",
    //     "Director": "David Fincher",
    //     "Writer": "Andrew Kevin Walker",
    //     "Actors": "Morgan Freeman, Brad Pitt, Kevin Spacey",
    //     "Plot": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 1 Oscar. 29 wins & 42 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "81%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "65/100"
    //         }
    //     ],
    //     "Metascore": "65",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "1,480,104",
    //     "imdbID": "tt0114369",
    //     "Type": "movie",
    //     "DVD": "06 Jul 2010",
    //     "BoxOffice": "$100,125,643",
    //     "Production": "New Line Cinema",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Silence of the Lambs",
    //     "Year": "1991",
    //     "Rated": "R",
    //     "Released": "14 Feb 1991",
    //     "Runtime": "118 min",
    //     "Genre": "Crime, Drama, Thriller",
    //     "Director": "Jonathan Demme",
    //     "Writer": "Thomas Harris (based on the novel by), Ted Tally (screenplay by)",
    //     "Actors": "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
    //     "Plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
    //     "Language": "English, Latin",
    //     "Country": "USA",
    //     "Awards": "Won 5 Oscars. Another 64 wins & 51 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "96%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "85/100"
    //         }
    //     ],
    //     "Metascore": "85",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "1,304,486",
    //     "imdbID": "tt0102926",
    //     "Type": "movie",
    //     "DVD": "27 Aug 2015",
    //     "BoxOffice": "$130,742,922",
    //     "Production": "Orion Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Star Wars: Episode IV - A New Hope",
    //     "Year": "1977",
    //     "Rated": "PG",
    //     "Released": "25 May 1977",
    //     "Runtime": "121 min",
    //     "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    //     "Director": "George Lucas",
    //     "Writer": "George Lucas",
    //     "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing",
    //     "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
    //     "Language": "English",
    //     "Country": "USA, UK",
    //     "Awards": "Won 6 Oscars. Another 58 wins & 29 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "92%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "90/100"
    //         }
    //     ],
    //     "Metascore": "90",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "1,255,061",
    //     "imdbID": "tt0076759",
    //     "Type": "movie",
    //     "DVD": "10 Oct 2016",
    //     "BoxOffice": "$460,998,507",
    //     "Production": "Lucasfilm Ltd.",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Seppuku",
    //     "Year": "1962",
    //     "Rated": "Not Rated",
    //     "Released": "04 Aug 1964",
    //     "Runtime": "133 min",
    //     "Genre": "Action, Drama, Mystery",
    //     "Director": "Masaki Kobayashi",
    //     "Writer": "Yasuhiko Takiguchi, Shinobu Hashimoto",
    //     "Actors": "Tatsuya Nakadai, Akira Ishihama, Shima Iwashita",
    //     "Plot": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
    //     "Language": "Japanese",
    //     "Country": "Japan",
    //     "Awards": "8 wins & 2 nominations",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "100%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "85/100"
    //         }
    //     ],
    //     "Metascore": "85",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "45,652",
    //     "imdbID": "tt0056058",
    //     "Type": "movie",
    //     "DVD": "N/A",
    //     "BoxOffice": "N/A",
    //     "Production": "Shôchiku Eiga",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Pather Panchali",
    //     "Year": "1955",
    //     "Rated": "Not Rated",
    //     "Released": "26 Aug 1955",
    //     "Runtime": "125 min",
    //     "Genre": "Drama",
    //     "Director": "Satyajit Ray",
    //     "Writer": "Bibhutibhushan Bandyopadhyay, Satyajit Ray",
    //     "Actors": "Kanu Bannerjee, Karuna Bannerjee, Subir Banerjee",
    //     "Plot": "Impoverished priest Harihar Ray, dreaming of a better life for himself and his family, leaves his rural Bengal village in search of work.",
    //     "Language": "Bengali",
    //     "Country": "India",
    //     "Awards": "11 wins & 2 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDE5YmMxYjEtZjNjNC00NjM2LWE2ZjctOTkyNGMxODRiMGNiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "97%"
    //         }
    //     ],
    //     "Metascore": "N/A",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "25,357",
    //     "imdbID": "tt0048473",
    //     "Type": "movie",
    //     "DVD": "10 Aug 2016",
    //     "BoxOffice": "$134,241",
    //     "Production": "Government of West Bengal",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Seven Samurai",
    //     "Year": "1954",
    //     "Rated": "Not Rated",
    //     "Released": "19 Nov 1956",
    //     "Runtime": "207 min",
    //     "Genre": "Action, Adventure, Drama",
    //     "Director": "Akira Kurosawa",
    //     "Writer": "Akira Kurosawa (screenplay by), Shinobu Hashimoto (screenplay by), Hideo Oguni (screenplay by)",
    //     "Actors": "Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
    //     "Plot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    //     "Language": "Japanese",
    //     "Country": "Japan",
    //     "Awards": "Nominated for 2 Oscars. Another 5 wins & 6 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "100%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "98/100"
    //         }
    //     ],
    //     "Metascore": "98",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "322,564",
    //     "imdbID": "tt0047478",
    //     "Type": "movie",
    //     "DVD": "N/A",
    //     "BoxOffice": "$318,649",
    //     "Production": "Toho Company",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "It's a Wonderful Life",
    //     "Year": "1946",
    //     "Rated": "PG",
    //     "Released": "07 Jan 1947",
    //     "Runtime": "130 min",
    //     "Genre": "Drama, Family, Fantasy",
    //     "Director": "Frank Capra",
    //     "Writer": "Frances Goodrich, Albert Hackett, Frank Capra",
    //     "Actors": "James Stewart, Donna Reed, Lionel Barrymore",
    //     "Plot": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    //     "Language": "English, French",
    //     "Country": "United States",
    //     "Awards": "Nominated for 5 Oscars. 6 wins & 6 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZjc4NDZhZWMtNGEzYS00ZWU2LThlM2ItNTA0YzQ0OTExMTE2XkEyXkFqcGdeQXVyNjUwMzI2NzU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.6/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "94%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "89/100"
    //         }
    //     ],
    //     "Metascore": "89",
    //     "imdbRating": "8.6",
    //     "imdbVotes": "413,719",
    //     "imdbID": "tt0038650",
    //     "Type": "movie",
    //     "DVD": "30 Nov 2016",
    //     "BoxOffice": "$44,000",
    //     "Production": "RKO Radio Pictures Inc., Liberty Films",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Whiplash",
    //     "Year": "2014",
    //     "Rated": "R",
    //     "Released": "15 Oct 2014",
    //     "Runtime": "106 min",
    //     "Genre": "Drama, Music",
    //     "Director": "Damien Chazelle",
    //     "Writer": "Damien Chazelle",
    //     "Actors": "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
    //     "Plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "Won 3 Oscars. Another 94 wins & 145 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "94%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "88/100"
    //         }
    //     ],
    //     "Metascore": "88",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "744,349",
    //     "imdbID": "tt2582802",
    //     "Type": "movie",
    //     "DVD": "08 Sep 2016",
    //     "BoxOffice": "$13,092,000",
    //     "Production": "Blumhouse, Bold Films, Right of Way Films",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Intouchables",
    //     "Year": "2011",
    //     "Rated": "R",
    //     "Released": "02 Nov 2011",
    //     "Runtime": "112 min",
    //     "Genre": "Biography, Comedy, Drama",
    //     "Director": "Olivier Nakache, Éric Toledano",
    //     "Writer": "Olivier Nakache, Philippe Pozzo di Borgo (adapted from his autobiographical tale Le Second Souffle), Éric Toledano",
    //     "Actors": "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
    //     "Plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    //     "Language": "French, English",
    //     "Country": "France",
    //     "Awards": "Nominated for 1 BAFTA Film Award. Another 38 wins & 39 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "75%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "57/100"
    //         }
    //     ],
    //     "Metascore": "57",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "782,084",
    //     "imdbID": "tt1675434",
    //     "Type": "movie",
    //     "DVD": "21 Oct 2015",
    //     "BoxOffice": "$10,198,820",
    //     "Production": "Chaocorp, Canal+, Gaumont, Ten Films, TF1 Films Production, Quad Productions, CinéCinéma, TF1",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Prestige",
    //     "Year": "2006",
    //     "Rated": "PG-13",
    //     "Released": "20 Oct 2006",
    //     "Runtime": "130 min",
    //     "Genre": "Drama, Mystery, Sci-Fi",
    //     "Director": "Christopher Nolan",
    //     "Writer": "Jonathan Nolan, Christopher Nolan, Christopher Priest",
    //     "Actors": "Christian Bale, Hugh Jackman, Scarlett Johansson",
    //     "Plot": "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
    //     "Language": "English",
    //     "Country": "United Kingdom, United States",
    //     "Awards": "Nominated for 2 Oscars. 6 wins & 45 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "76%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "66/100"
    //         }
    //     ],
    //     "Metascore": "66",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,218,113",
    //     "imdbID": "tt0482571",
    //     "Type": "movie",
    //     "DVD": "23 Nov 2015",
    //     "BoxOffice": "$53,089,891",
    //     "Production": "Newmarket Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Departed",
    //     "Year": "2006",
    //     "Rated": "R",
    //     "Released": "06 Oct 2006",
    //     "Runtime": "151 min",
    //     "Genre": "Crime, Drama, Thriller",
    //     "Director": "Martin Scorsese",
    //     "Writer": "William Monahan, Alan Mak, Felix Chong",
    //     "Actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson",
    //     "Plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    //     "Language": "English, Cantonese",
    //     "Country": "United States, Hong Kong",
    //     "Awards": "Won 4 Oscars. 97 wins & 141 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "90%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "85/100"
    //         }
    //     ],
    //     "Metascore": "85",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,215,175",
    //     "imdbID": "tt0407887",
    //     "Type": "movie",
    //     "DVD": "24 Oct 2008",
    //     "BoxOffice": "$132,384,315",
    //     "Production": "Plan B Entertainment, Warner Bros., Initial Entertainment Group, Vertigo",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Pianist",
    //     "Year": "2002",
    //     "Rated": "R",
    //     "Released": "28 Mar 2003",
    //     "Runtime": "150 min",
    //     "Genre": "Biography, Drama, Music",
    //     "Director": "Roman Polanski",
    //     "Writer": "Ronald Harwood, Wladyslaw Szpilman",
    //     "Actors": "Adrien Brody, Thomas Kretschmann, Frank Finlay",
    //     "Plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    //     "Language": "English, German, Russian",
    //     "Country": "United Kingdom, France, Poland, Germany, United States",
    //     "Awards": "Won 3 Oscars. 57 wins & 74 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "95%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "85/100"
    //         }
    //     ],
    //     "Metascore": "85",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "750,555",
    //     "imdbID": "tt0253474",
    //     "Type": "movie",
    //     "DVD": "19 Apr 2016",
    //     "BoxOffice": "$32,572,577",
    //     "Production": "Miramax",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Gladiator",
    //     "Year": "2000",
    //     "Rated": "R",
    //     "Released": "05 May 2000",
    //     "Runtime": "155 min",
    //     "Genre": "Action, Adventure, Drama",
    //     "Director": "Ridley Scott",
    //     "Writer": "David Franzoni (story), David Franzoni (screenplay), John Logan (screenplay), William Nicholson (screenplay)",
    //     "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
    //     "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    //     "Language": "English",
    //     "Country": "USA, UK, Malta, Morocco",
    //     "Awards": "Won 5 Oscars. Another 54 wins & 106 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "77%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "67/100"
    //         }
    //     ],
    //     "Metascore": "67",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,372,662",
    //     "imdbID": "tt0172495",
    //     "Type": "movie",
    //     "DVD": "01 Aug 2013",
    //     "BoxOffice": "$187,705,427",
    //     "Production": "Universal Pictures, Scott Free Productions, DreamWorks Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "American History X",
    //     "Year": "1998",
    //     "Rated": "R",
    //     "Released": "20 Nov 1998",
    //     "Runtime": "119 min",
    //     "Genre": "Drama",
    //     "Director": "Tony Kaye",
    //     "Writer": "David McKenna",
    //     "Actors": "Edward Norton, Edward Furlong, Beverly D'Angelo",
    //     "Plot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 1 Oscar. 4 wins & 15 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZTJhN2FkYWEtMGI0My00YWM4LWI2MjAtM2UwNjY4MTI2ZTQyXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "83%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "62/100"
    //         }
    //     ],
    //     "Metascore": "62",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,050,682",
    //     "imdbID": "tt0120586",
    //     "Type": "movie",
    //     "DVD": "01 Jul 2008",
    //     "BoxOffice": "$6,719,864",
    //     "Production": "New Line Cinema, Turman-Morrissey Company",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Usual Suspects",
    //     "Year": "1995",
    //     "Rated": "R",
    //     "Released": "16 Aug 1995",
    //     "Runtime": "106 min",
    //     "Genre": "Crime, Mystery, Thriller",
    //     "Director": "Bryan Singer",
    //     "Writer": "Christopher McQuarrie",
    //     "Actors": "Stephen Baldwin, Gabriel Byrne, Benicio Del Toro, Kevin Pollak",
    //     "Plot": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
    //     "Language": "English, Hungarian, Spanish, French",
    //     "Country": "USA, Germany",
    //     "Awards": "Won 2 Oscars. Another 35 wins & 17 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "89%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "77/100"
    //         }
    //     ],
    //     "Metascore": "77",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,011,201",
    //     "imdbID": "tt0114814",
    //     "Type": "movie",
    //     "DVD": "27 Aug 2015",
    //     "BoxOffice": "$23,341,568",
    //     "Production": "Bad Hat Harry",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Léon: The Professional",
    //     "Year": "1994",
    //     "Rated": "R",
    //     "Released": "18 Nov 1994",
    //     "Runtime": "110 min",
    //     "Genre": "Action, Crime, Drama, Thriller",
    //     "Director": "Luc Besson",
    //     "Writer": "Luc Besson",
    //     "Actors": "Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello",
    //     "Plot": "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
    //     "Language": "English, Italian, French",
    //     "Country": "France, USA",
    //     "Awards": "6 wins & 15 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "74%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "64/100"
    //         }
    //     ],
    //     "Metascore": "64",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,060,909",
    //     "imdbID": "tt0110413",
    //     "Type": "movie",
    //     "DVD": "02 Apr 2013",
    //     "BoxOffice": "$19,501,238",
    //     "Production": "Gaumont, Les Films du Dauphin, Gaumont International",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Lion King",
    //     "Year": "1994",
    //     "Rated": "G",
    //     "Released": "24 Jun 1994",
    //     "Runtime": "88 min",
    //     "Genre": "Animation, Adventure, Drama",
    //     "Director": "Roger Allers, Rob Minkoff",
    //     "Writer": "Irene Mecchi, Jonathan Roberts, Linda Woolverton",
    //     "Actors": "Matthew Broderick, Jeremy Irons, James Earl Jones",
    //     "Plot": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    //     "Language": "English, Swahili, Xhosa, Zulu",
    //     "Country": "United States",
    //     "Awards": "Won 2 Oscars. 39 wins & 35 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "93%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "88/100"
    //         }
    //     ],
    //     "Metascore": "88",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "963,107",
    //     "imdbID": "tt0110357",
    //     "Type": "movie",
    //     "DVD": "15 Aug 2017",
    //     "BoxOffice": "$422,783,777",
    //     "Production": "Walt Disney Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Terminator 2: Judgment Day",
    //     "Year": "1991",
    //     "Rated": "R",
    //     "Released": "03 Jul 1991",
    //     "Runtime": "137 min",
    //     "Genre": "Action, Sci-Fi",
    //     "Director": "James Cameron",
    //     "Writer": "James Cameron, William Wisher",
    //     "Actors": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong",
    //     "Plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced and powerful cyborg.",
    //     "Language": "English, Spanish",
    //     "Country": "United States",
    //     "Awards": "Won 4 Oscars. 36 wins & 33 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "93%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "75/100"
    //         }
    //     ],
    //     "Metascore": "75",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,014,156",
    //     "imdbID": "tt0103064",
    //     "Type": "movie",
    //     "DVD": "10 Aug 2016",
    //     "BoxOffice": "$205,881,154",
    //     "Production": "Lightstorm Entertainment, Carolco Pictures Inc., Pacific Western",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Nuovo Cinema Paradiso",
    //     "Year": "1988",
    //     "Rated": "PG",
    //     "Released": "23 Feb 1990",
    //     "Runtime": "155 min",
    //     "Genre": "Drama, Romance",
    //     "Director": "Giuseppe Tornatore",
    //     "Writer": "Giuseppe Tornatore, Vanna Paoli, Richard Epcar",
    //     "Actors": "Philippe Noiret, Enzo Cannavale, Antonella Attili",
    //     "Plot": "A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema's projectionist.",
    //     "Language": "Italian",
    //     "Country": "Italy, France",
    //     "Awards": "Won 1 Oscar. 25 wins & 32 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BM2FhYjEyYmYtMDI1Yy00YTdlLWI2NWQtYmEzNzAxOGY1NjY2XkEyXkFqcGdeQXVyNTA3NTIyNDg@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "90%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "80/100"
    //         }
    //     ],
    //     "Metascore": "80",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "237,172",
    //     "imdbID": "tt0095765",
    //     "Type": "movie",
    //     "DVD": "01 Oct 2016",
    //     "BoxOffice": "$12,397,210",
    //     "Production": "Cristaldi Film",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Hotaru no haka",
    //     "Year": "1988",
    //     "Rated": "Not Rated",
    //     "Released": "26 Jul 1989",
    //     "Runtime": "89 min",
    //     "Genre": "Animation, Drama, War",
    //     "Director": "Isao Takahata",
    //     "Writer": "Akiyuki Nosaka, Isao Takahata",
    //     "Actors": "Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi",
    //     "Plot": "A young boy and his little sister struggle to survive in Japan during World War II.",
    //     "Language": "Japanese",
    //     "Country": "Japan, United States",
    //     "Awards": "3 wins",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "94/100"
    //         }
    //     ],
    //     "Metascore": "94",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "243,794",
    //     "imdbID": "tt0095327",
    //     "Type": "movie",
    //     "DVD": "11 Mar 2017",
    //     "BoxOffice": "$516,962",
    //     "Production": "N/A",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Back to the Future",
    //     "Year": "1985",
    //     "Rated": "PG",
    //     "Released": "03 Jul 1985",
    //     "Runtime": "116 min",
    //     "Genre": "Adventure, Comedy, Sci-Fi",
    //     "Director": "Robert Zemeckis",
    //     "Writer": "Robert Zemeckis, Bob Gale",
    //     "Actors": "Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover",
    //     "Plot": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "Won 1 Oscar. Another 22 wins & 25 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "96%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "87/100"
    //         }
    //     ],
    //     "Metascore": "87",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "1,087,259",
    //     "imdbID": "tt0088763",
    //     "Type": "movie",
    //     "DVD": "08 Aug 2013",
    //     "BoxOffice": "$211,406,762",
    //     "Production": "Universal Pictures, Amblin Entertainment",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Once Upon a Time in the West",
    //     "Year": "1968",
    //     "Rated": "PG-13",
    //     "Released": "04 Jul 1969",
    //     "Runtime": "165 min",
    //     "Genre": "Western",
    //     "Director": "Sergio Leone",
    //     "Writer": "Sergio Donati (screenplay by), Sergio Leone (screenplay by), Dario Argento (from a story by), Bernardo Bertolucci (from a story by), Sergio Leone (from a story by)",
    //     "Actors": "Claudia Cardinale, Henry Fonda, Jason Robards, Charles Bronson",
    //     "Plot": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    //     "Language": "English, Italian, Spanish",
    //     "Country": "Italy, USA",
    //     "Awards": "4 wins & 5 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZGI5MjBmYzYtMzJhZi00NGI1LTk3MzItYjBjMzcxM2U3MDdiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "95%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "80/100"
    //         }
    //     ],
    //     "Metascore": "80",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "308,815",
    //     "imdbID": "tt0064116",
    //     "Type": "movie",
    //     "DVD": "06 Jun 2014",
    //     "BoxOffice": "$5,321,508",
    //     "Production": "Paramount Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Psycho",
    //     "Year": "1960",
    //     "Rated": "R",
    //     "Released": "08 Sep 1960",
    //     "Runtime": "109 min",
    //     "Genre": "Horror, Mystery, Thriller",
    //     "Director": "Alfred Hitchcock",
    //     "Writer": "Joseph Stefano, Robert Bloch",
    //     "Actors": "Anthony Perkins, Janet Leigh, Vera Miles",
    //     "Plot": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 4 Oscars. 8 wins & 14 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "96%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "97/100"
    //         }
    //     ],
    //     "Metascore": "97",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "617,755",
    //     "imdbID": "tt0054215",
    //     "Type": "movie",
    //     "DVD": "12 Feb 2014",
    //     "BoxOffice": "$32,000,000",
    //     "Production": "Paramount",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Rear Window",
    //     "Year": "1954",
    //     "Rated": "PG",
    //     "Released": "01 Sep 1954",
    //     "Runtime": "112 min",
    //     "Genre": "Mystery, Thriller",
    //     "Director": "Alfred Hitchcock",
    //     "Writer": "John Michael Hayes, Cornell Woolrich",
    //     "Actors": "James Stewart, Grace Kelly, Wendell Corey",
    //     "Plot": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 4 Oscars. 6 wins & 13 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "97%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "100/100"
    //         }
    //     ],
    //     "Metascore": "100",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "452,961",
    //     "imdbID": "tt0047396",
    //     "Type": "movie",
    //     "DVD": "18 Aug 2015",
    //     "BoxOffice": "$36,764,313",
    //     "Production": "Paramount Pictures, Patron Inc.",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Casablanca",
    //     "Year": "1942",
    //     "Rated": "PG",
    //     "Released": "23 Jan 1943",
    //     "Runtime": "102 min",
    //     "Genre": "Drama, Romance, War",
    //     "Director": "Michael Curtiz",
    //     "Writer": "Julius J. Epstein, Philip G. Epstein, Howard Koch",
    //     "Actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid",
    //     "Plot": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
    //     "Language": "English, French, German, Italian",
    //     "Country": "United States",
    //     "Awards": "Won 3 Oscars. 10 wins & 9 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.5/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "99%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "100/100"
    //         }
    //     ],
    //     "Metascore": "100",
    //     "imdbRating": "8.5",
    //     "imdbVotes": "531,227",
    //     "imdbID": "tt0034583",
    //     "Type": "movie",
    //     "DVD": "15 Aug 2008",
    //     "BoxOffice": "$4,108,411",
    //     "Production": "Warner Brothers",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    //     "Year": "1964",
    //     "Rated": "PG",
    //     "Released": "29 Jan 1964",
    //     "Runtime": "95 min",
    //     "Genre": "Comedy",
    //     "Director": "Stanley Kubrick",
    //     "Writer": "Stanley Kubrick (screenplay), Terry Southern (screenplay), Peter George (screenplay), Peter George (based on the book: \"Red Alert\" by)",
    //     "Actors": "Peter Sellers, George C. Scott, Sterling Hayden, Keenan Wynn",
    //     "Plot": "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop.",
    //     "Language": "English, Russian",
    //     "Country": "UK, USA",
    //     "Awards": "Nominated for 4 Oscars. Another 14 wins & 7 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.4/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "98%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "97/100"
    //         }
    //     ],
    //     "Metascore": "97",
    //     "imdbRating": "8.4",
    //     "imdbVotes": "458,928",
    //     "imdbID": "tt0057012",
    //     "Type": "movie",
    //     "DVD": "16 Apr 2012",
    //     "BoxOffice": "$9,440,272",
    //     "Production": "Hawk Films",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Witness for the Prosecution",
    //     "Year": "1957",
    //     "Rated": "Approved",
    //     "Released": "06 Feb 1958",
    //     "Runtime": "116 min",
    //     "Genre": "Crime, Drama, Mystery, Thriller",
    //     "Director": "Billy Wilder",
    //     "Writer": "Agatha Christie (in Agatha Christie's international stage success), Billy Wilder (screen play), Harry Kurnitz (screen play), Lawrence B. Marcus (adaptation)",
    //     "Actors": "Tyrone Power, Marlene Dietrich, Charles Laughton, Elsa Lanchester",
    //     "Plot": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    //     "Language": "English, German",
    //     "Country": "USA",
    //     "Awards": "Nominated for 6 Oscars. Another 4 wins & 10 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.4/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "95%"
    //         }
    //     ],
    //     "Metascore": "N/A",
    //     "imdbRating": "8.4",
    //     "imdbVotes": "112,578",
    //     "imdbID": "tt0051201",
    //     "Type": "movie",
    //     "DVD": "N/A",
    //     "BoxOffice": "N/A",
    //     "Production": "United Artists",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Paths of Glory",
    //     "Year": "1957",
    //     "Rated": "Approved",
    //     "Released": "25 Dec 1957",
    //     "Runtime": "88 min",
    //     "Genre": "Drama, War",
    //     "Director": "Stanley Kubrick",
    //     "Writer": "Stanley Kubrick, Calder Willingham, Jim Thompson",
    //     "Actors": "Kirk Douglas, Ralph Meeker, Adolphe Menjou",
    //     "Plot": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
    //     "Language": "English, German, Latin",
    //     "Country": "United States",
    //     "Awards": "7 wins & 4 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.4/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "95%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "90/100"
    //         }
    //     ],
    //     "Metascore": "90",
    //     "imdbRating": "8.4",
    //     "imdbVotes": "182,361",
    //     "imdbID": "tt0050825",
    //     "Type": "movie",
    //     "DVD": "10 Feb 2016",
    //     "BoxOffice": "N/A",
    //     "Production": "Bryna Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Sunset Blvd.",
    //     "Year": "1950",
    //     "Rated": "Passed",
    //     "Released": "29 Sep 1950",
    //     "Runtime": "110 min",
    //     "Genre": "Drama, Film-Noir",
    //     "Director": "Billy Wilder",
    //     "Writer": "Charles Brackett, Billy Wilder, D.M. Marshman Jr.",
    //     "Actors": "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
    //     "Plot": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "Won 3 Oscars. Another 15 wins & 19 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.4/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "99%"
    //         }
    //     ],
    //     "Metascore": "N/A",
    //     "imdbRating": "8.4",
    //     "imdbVotes": "206,214",
    //     "imdbID": "tt0043014",
    //     "Type": "movie",
    //     "DVD": "10 Aug 2016",
    //     "BoxOffice": "$299,645",
    //     "Production": "Paramount Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Great Dictator",
    //     "Year": "1940",
    //     "Rated": "G",
    //     "Released": "07 Mar 1941",
    //     "Runtime": "125 min",
    //     "Genre": "Comedy, Drama, War",
    //     "Director": "Charles Chaplin",
    //     "Writer": "Charles Chaplin",
    //     "Actors": "Charles Chaplin, Paulette Goddard, Jack Oakie",
    //     "Plot": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    //     "Language": "English, Esperanto",
    //     "Country": "United States",
    //     "Awards": "Nominated for 5 Oscars. 6 wins & 6 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.4/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "93%"
    //         }
    //     ],
    //     "Metascore": "N/A",
    //     "imdbRating": "8.4",
    //     "imdbVotes": "207,587",
    //     "imdbID": "tt0032553",
    //     "Type": "movie",
    //     "DVD": "22 May 2017",
    //     "BoxOffice": "N/A",
    //     "Production": "Charles Chaplin Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "The Hunt",
    //     "Year": "2012",
    //     "Rated": "R",
    //     "Released": "10 Jan 2013",
    //     "Runtime": "115 min",
    //     "Genre": "Drama",
    //     "Director": "Thomas Vinterberg",
    //     "Writer": "Tobias Lindholm (screenplay), Thomas Vinterberg (screenplay)",
    //     "Actors": "Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp, Lasse Fogelstrøm",
    //     "Plot": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
    //     "Language": "Danish, English, Polish",
    //     "Country": "Denmark, Sweden",
    //     "Awards": "Nominated for 1 Oscar. Another 37 wins & 69 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "93%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "77/100"
    //         }
    //     ],
    //     "Metascore": "77",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "294,668",
    //     "imdbID": "tt2106476",
    //     "Type": "movie",
    //     "DVD": "04 Feb 2017",
    //     "BoxOffice": "$613,308",
    //     "Production": "Zentropa Entertainments",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Inglourious Basterds",
    //     "Year": "2009",
    //     "Rated": "R",
    //     "Released": "21 Aug 2009",
    //     "Runtime": "153 min",
    //     "Genre": "Adventure, Drama, War",
    //     "Director": "Quentin Tarantino",
    //     "Writer": "Quentin Tarantino",
    //     "Actors": "Brad Pitt, Mélanie Laurent, Christoph Waltz, Eli Roth",
    //     "Plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    //     "Language": "English, German, French, Italian",
    //     "Country": "USA, Germany",
    //     "Awards": "Won 1 Oscar. Another 132 wins & 172 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "89%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "69/100"
    //         }
    //     ],
    //     "Metascore": "69",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "1,304,168",
    //     "imdbID": "tt0361748",
    //     "Type": "movie",
    //     "DVD": "10 Dec 2015",
    //     "BoxOffice": "$120,540,719",
    //     "Production": "A Band Apart, Zehnte Babelsberg",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Eternal Sunshine of the Spotless Mind",
    //     "Year": "2004",
    //     "Rated": "R",
    //     "Released": "19 Mar 2004",
    //     "Runtime": "108 min",
    //     "Genre": "Drama, Romance, Sci-Fi",
    //     "Director": "Michel Gondry",
    //     "Writer": "Charlie Kaufman, Michel Gondry, Pierre Bismuth",
    //     "Actors": "Jim Carrey, Kate Winslet, Tom Wilkinson",
    //     "Plot": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Won 1 Oscar. 73 wins & 111 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "92%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "89/100"
    //         }
    //     ],
    //     "Metascore": "89",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "929,010",
    //     "imdbID": "tt0338013",
    //     "Type": "movie",
    //     "DVD": "12 Feb 2014",
    //     "BoxOffice": "$34,400,301",
    //     "Production": "Anonymous Content, Focus Features, Blue Ruin, This Is That Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Requiem for a Dream",
    //     "Year": "2000",
    //     "Rated": "R",
    //     "Released": "15 Dec 2000",
    //     "Runtime": "102 min",
    //     "Genre": "Drama",
    //     "Director": "Darren Aronofsky",
    //     "Writer": "Hubert Selby Jr. (based on the book by), Hubert Selby Jr. (screenplay), Darren Aronofsky (screenplay)",
    //     "Actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
    //     "Plot": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "Nominated for 1 Oscar. Another 38 wins & 69 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "79%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "68/100"
    //         }
    //     ],
    //     "Metascore": "68",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "782,620",
    //     "imdbID": "tt0180093",
    //     "Type": "movie",
    //     "DVD": "06 Dec 2015",
    //     "BoxOffice": "$3,635,482",
    //     "Production": "Thousand Words, Industry Entertainment, Truth and Soul Pictures, Bandeira Entertainment, Requiem for a Dream LLC, Artisan Entertainment, Protozoa Pictures, Sibling Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "American Beauty",
    //     "Year": "1999",
    //     "Rated": "R",
    //     "Released": "01 Oct 1999",
    //     "Runtime": "122 min",
    //     "Genre": "Drama",
    //     "Director": "Sam Mendes",
    //     "Writer": "Alan Ball",
    //     "Actors": "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
    //     "Plot": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "Won 5 Oscars. Another 106 wins & 102 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "87%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "84/100"
    //         }
    //     ],
    //     "Metascore": "84",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "1,088,272",
    //     "imdbID": "tt0169547",
    //     "Type": "movie",
    //     "DVD": "01 Aug 2013",
    //     "BoxOffice": "$130,096,601",
    //     "Production": "DreamWorks Pictures, Jinks/Cohen Company",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Good Will Hunting",
    //     "Year": "1997",
    //     "Rated": "R",
    //     "Released": "09 Jan 1998",
    //     "Runtime": "126 min",
    //     "Genre": "Drama, Romance",
    //     "Director": "Gus Van Sant",
    //     "Writer": "Matt Damon, Ben Affleck",
    //     "Actors": "Robin Williams, Matt Damon, Ben Affleck",
    //     "Plot": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Won 2 Oscars. 24 wins & 61 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "98%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "70/100"
    //         }
    //     ],
    //     "Metascore": "70",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "883,161",
    //     "imdbID": "tt0119217",
    //     "Type": "movie",
    //     "DVD": "14 Apr 2016",
    //     "BoxOffice": "$138,433,435",
    //     "Production": "Miramax Films, Be Gentlemen Limited Partnership, Lawrence Bender Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Toy Story",
    //     "Year": "1995",
    //     "Rated": "G",
    //     "Released": "22 Nov 1995",
    //     "Runtime": "81 min",
    //     "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
    //     "Director": "John Lasseter",
    //     "Writer": "John Lasseter (original story by), Pete Docter (original story by), Andrew Stanton (original story by), Joe Ranft (original story by), Joss Whedon (screenplay by), Andrew Stanton (screenplay by), Joel Cohen (screenplay by), Alec Sokolow (screenplay by)",
    //     "Actors": "Tom Hanks, Tim Allen, Don Rickles, Jim Varney",
    //     "Plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "Nominated for 3 Oscars. Another 27 wins & 20 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "100%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "95/100"
    //         }
    //     ],
    //     "Metascore": "95",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "908,401",
    //     "imdbID": "tt0114709",
    //     "Type": "movie",
    //     "DVD": "N/A",
    //     "BoxOffice": "$223,225,679",
    //     "Production": "Pixar Animation Studios, Walt Disney Pictures",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Braveheart",
    //     "Year": "1995",
    //     "Rated": "R",
    //     "Released": "24 May 1995",
    //     "Runtime": "178 min",
    //     "Genre": "Biography, Drama, History, War",
    //     "Director": "Mel Gibson",
    //     "Writer": "Randall Wallace",
    //     "Actors": "James Robinson, Sean Lawlor, Sandy Nelson, James Cosmo",
    //     "Plot": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
    //     "Language": "English, French, Latin, Scottish Gaelic, Italian",
    //     "Country": "USA",
    //     "Awards": "Won 5 Oscars. Another 28 wins & 34 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "78%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "68/100"
    //         }
    //     ],
    //     "Metascore": "68",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "975,617",
    //     "imdbID": "tt0112573",
    //     "Type": "movie",
    //     "DVD": "01 Aug 2013",
    //     "BoxOffice": "$75,609,945",
    //     "Production": "Icon Entertainment International, Twentieth Century Fox, Ladd Company, Paramount Pictures, B.H. Finance C.V.",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Reservoir Dogs",
    //     "Year": "1992",
    //     "Rated": "R",
    //     "Released": "02 Sep 1992",
    //     "Runtime": "99 min",
    //     "Genre": "Crime, Drama, Thriller",
    //     "Director": "Quentin Tarantino",
    //     "Writer": "Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)",
    //     "Actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
    //     "Plot": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    //     "Language": "English",
    //     "Country": "USA",
    //     "Awards": "12 wins & 23 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "92%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "79/100"
    //         }
    //     ],
    //     "Metascore": "79",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "939,142",
    //     "imdbID": "tt0105236",
    //     "Type": "movie",
    //     "DVD": "19 Dec 2015",
    //     "BoxOffice": "$2,832,029",
    //     "Production": "Live Entertainment, Dog Eat Dog Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Come and See",
    //     "Year": "1985",
    //     "Rated": "Not Rated",
    //     "Released": "17 Oct 1985",
    //     "Runtime": "142 min",
    //     "Genre": "Drama, Thriller, War",
    //     "Director": "Elem Klimov",
    //     "Writer": "Ales Adamovich, Elem Klimov",
    //     "Actors": "Aleksey Kravchenko, Olga Mironova, Liubomiras Laucevicius",
    //     "Plot": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
    //     "Language": "Russian, Belarusian, German",
    //     "Country": "Soviet Union",
    //     "Awards": "3 wins",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "97%"
    //         }
    //     ],
    //     "Metascore": "N/A",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "63,234",
    //     "imdbID": "tt0091251",
    //     "Type": "movie",
    //     "DVD": "28 Jan 2015",
    //     "BoxOffice": "$71,909",
    //     "Production": "N/A",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Aliens",
    //     "Year": "1986",
    //     "Rated": "R",
    //     "Released": "18 Jul 1986",
    //     "Runtime": "137 min",
    //     "Genre": "Action, Adventure, Sci-Fi, Thriller",
    //     "Director": "James Cameron",
    //     "Writer": "James Cameron (story by), David Giler (story by), Walter Hill (story by), Dan O'Bannon (based on characters created by), Ronald Shusett (based on characters created by), James Cameron (screenplay by)",
    //     "Actors": "Sigourney Weaver, Carrie Henn, Michael Biehn, Paul Reiser",
    //     "Plot": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
    //     "Language": "English",
    //     "Country": "UK, USA",
    //     "Awards": "Won 2 Oscars. Another 18 wins & 23 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "97%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "84/100"
    //         }
    //     ],
    //     "Metascore": "84",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "665,340",
    //     "imdbID": "tt0090605",
    //     "Type": "movie",
    //     "DVD": "25 Nov 2015",
    //     "BoxOffice": "$85,160,248",
    //     "Production": "Twentieth Century Fox, Brandywine Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Amadeus",
    //     "Year": "1984",
    //     "Rated": "R",
    //     "Released": "19 Sep 1984",
    //     "Runtime": "160 min",
    //     "Genre": "Biography, Drama, History, Music",
    //     "Director": "Milos Forman",
    //     "Writer": "Peter Shaffer (original stage play), Peter Shaffer (original screenplay)",
    //     "Actors": "F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice",
    //     "Plot": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
    //     "Language": "English, Italian, Latin, German",
    //     "Country": "USA, France, Czechoslovakia, Italy",
    //     "Awards": "Won 8 Oscars. Another 35 wins & 15 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "93%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "88/100"
    //         }
    //     ],
    //     "Metascore": "88",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "376,137",
    //     "imdbID": "tt0086879",
    //     "Type": "movie",
    //     "DVD": "18 May 2016",
    //     "BoxOffice": "$51,973,029",
    //     "Production": "AMLF",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Star Wars: Episode VI - Return of the Jedi",
    //     "Year": "1983",
    //     "Rated": "PG",
    //     "Released": "25 May 1983",
    //     "Runtime": "131 min",
    //     "Genre": "Action, Adventure, Fantasy, Sci-Fi",
    //     "Director": "Richard Marquand",
    //     "Writer": "Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
    //     "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
    //     "Plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
    //     "Language": "English",
    //     "Country": "USA, UK",
    //     "Awards": "Nominated for 4 Oscars. Another 22 wins & 16 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "82%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "58/100"
    //         }
    //     ],
    //     "Metascore": "58",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "969,573",
    //     "imdbID": "tt0086190",
    //     "Type": "movie",
    //     "DVD": "10 Apr 2015",
    //     "BoxOffice": "$309,306,177",
    //     "Production": "Lucasfilm Ltd.",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Das Boot",
    //     "Year": "1981",
    //     "Rated": "R",
    //     "Released": "10 Feb 1982",
    //     "Runtime": "149 min",
    //     "Genre": "Adventure, Drama, Thriller",
    //     "Director": "Wolfgang Petersen",
    //     "Writer": "Wolfgang Petersen, Lothar G. Buchheim",
    //     "Actors": "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann",
    //     "Plot": "The claustrophobic world of a WWII German U-boat; boredom, filth and sheer terror.",
    //     "Language": "German",
    //     "Country": "West Germany",
    //     "Awards": "Nominated for 6 Oscars. 13 wins & 11 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhZDIzNWMtNjkxMS00MDQ1LThkMTYtZWQzYWU3MWMxMGU5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "98%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "86/100"
    //         }
    //     ],
    //     "Metascore": "86",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "235,945",
    //     "imdbID": "tt0082096",
    //     "Type": "movie",
    //     "DVD": "01 May 2012",
    //     "BoxOffice": "$11,487,676",
    //     "Production": "Bavaria Film, Westdeutscher Rundfunk, Radiant Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "2001: A Space Odyssey",
    //     "Year": "1968",
    //     "Rated": "G",
    //     "Released": "24 Jun 1970",
    //     "Runtime": "149 min",
    //     "Genre": "Adventure, Sci-Fi",
    //     "Director": "Stanley Kubrick",
    //     "Writer": "Stanley Kubrick, Arthur C. Clarke",
    //     "Actors": "Keir Dullea, Gary Lockwood, William Sylvester",
    //     "Plot": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
    //     "Language": "English, Russian, French",
    //     "Country": "United Kingdom, United States",
    //     "Awards": "Won 1 Oscar. 16 wins & 11 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "92%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "84/100"
    //         }
    //     ],
    //     "Metascore": "84",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "616,441",
    //     "imdbID": "tt0062622",
    //     "Type": "movie",
    //     "DVD": "06 Feb 2014",
    //     "BoxOffice": "$60,405,931",
    //     "Production": "Metro Goldwyn Mayer",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "North by Northwest",
    //     "Year": "1959",
    //     "Rated": "Approved",
    //     "Released": "18 Dec 1959",
    //     "Runtime": "136 min",
    //     "Genre": "Adventure, Mystery, Thriller",
    //     "Director": "Alfred Hitchcock",
    //     "Writer": "Ernest Lehman",
    //     "Actors": "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
    //     "Plot": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies.",
    //     "Language": "English, French",
    //     "Country": "USA",
    //     "Awards": "Nominated for 3 Oscars. Another 8 wins & 7 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "99%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "98/100"
    //         }
    //     ],
    //     "Metascore": "98",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "305,044",
    //     "imdbID": "tt0053125",
    //     "Type": "movie",
    //     "DVD": "17 Nov 2009",
    //     "BoxOffice": "N/A",
    //     "Production": "Metro Goldwyn Mayer",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Vertigo",
    //     "Year": "1958",
    //     "Rated": "PG",
    //     "Released": "22 May 1958",
    //     "Runtime": "128 min",
    //     "Genre": "Mystery, Romance, Thriller",
    //     "Director": "Alfred Hitchcock",
    //     "Writer": "Alec Coppel, Samuel A. Taylor, Pierre Boileau",
    //     "Actors": "James Stewart, Kim Novak, Barbara Bel Geddes",
    //     "Plot": "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 2 Oscars. 8 wins & 7 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "94%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "100/100"
    //         }
    //     ],
    //     "Metascore": "100",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "371,916",
    //     "imdbID": "tt0052357",
    //     "Type": "movie",
    //     "DVD": "02 Aug 2015",
    //     "BoxOffice": "$7,705,225",
    //     "Production": "Paramount Pictures, Alfred J. Hitchcock Productions",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Singin' in the Rain",
    //     "Year": "1952",
    //     "Rated": "G",
    //     "Released": "11 Apr 1952",
    //     "Runtime": "103 min",
    //     "Genre": "Comedy, Musical, Romance",
    //     "Director": "Stanley Donen, Gene Kelly",
    //     "Writer": "Betty Comden, Adolph Green",
    //     "Actors": "Gene Kelly, Donald O'Connor, Debbie Reynolds",
    //     "Plot": "A silent film production company and cast make a difficult transition to sound.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 2 Oscars. 7 wins & 9 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "100%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "99/100"
    //         }
    //     ],
    //     "Metascore": "99",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "223,392",
    //     "imdbID": "tt0045152",
    //     "Type": "movie",
    //     "DVD": "N/A",
    //     "BoxOffice": "$1,826,108",
    //     "Production": "Metro Goldwyn Mayer",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "Citizen Kane",
    //     "Year": "1941",
    //     "Rated": "PG",
    //     "Released": "05 Sep 1941",
    //     "Runtime": "119 min",
    //     "Genre": "Drama, Mystery",
    //     "Director": "Orson Welles",
    //     "Writer": "Herman J. Mankiewicz (original screen play), Orson Welles (original screen play)",
    //     "Actors": "Joseph Cotten, Dorothy Comingore, Agnes Moorehead, Ruth Warrick",
    //     "Plot": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
    //     "Language": "English, Italian",
    //     "Country": "USA",
    //     "Awards": "Won 1 Oscar. Another 10 wins & 13 nominations.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "99%"
    //         },
    //         {
    //             "Source": "Metacritic",
    //             "Value": "100/100"
    //         }
    //     ],
    //     "Metascore": "100",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "413,912",
    //     "imdbID": "tt0033467",
    //     "Type": "movie",
    //     "DVD": "28 Jun 2016",
    //     "BoxOffice": "$1,585,634",
    //     "Production": "Mercury Productions, RKO Radio Pictures Inc.",
    //     "Website": "N/A",
    //     "Response": "True"
    // },
    // {
    //     "Title": "M",
    //     "Year": "1931",
    //     "Rated": "Passed",
    //     "Released": "31 Aug 1931",
    //     "Runtime": "99 min",
    //     "Genre": "Crime, Mystery, Thriller",
    //     "Director": "Fritz Lang",
    //     "Writer": "Thea von Harbou (script), Fritz Lang (script)",
    //     "Actors": "Peter Lorre, Ellen Widmann, Inge Landgut, Otto Wernicke",
    //     "Plot": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
    //     "Language": "German",
    //     "Country": "Germany",
    //     "Awards": "2 wins.",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg",
    //     "Ratings": [{
    //             "Source": "Internet Movie Database",
    //             "Value": "8.3/10"
    //         },
    //         {
    //             "Source": "Rotten Tomatoes",
    //             "Value": "100%"
    //         }
    //     ],
    //     "Metascore": "N/A",
    //     "imdbRating": "8.3",
    //     "imdbVotes": "146,938",
    //     "imdbID": "tt0022100",
    //     "Type": "movie",
    //     "DVD": "N/A",
    //     "BoxOffice": "$35,566",
    //     "Production": "Nero-Film AG",
    //     "Website": "N/A",
    //     "Response": "True"
    // }
], (err, results) => {
    console.log(results);
});