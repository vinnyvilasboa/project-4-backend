// import all models
const { Movie } = require('./models');

Movie.create([
    // Jordan's Code
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
    // Vinny's Code

    // Brandon's Code

    //Jake's Code
    {
        "Title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "Year": "1964",
        "Rated": "PG",
        "Released": "29 Jan 1964",
        "Runtime": "95 min",
        "Genre": "Comedy",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick (screenplay), Terry Southern (screenplay), Peter George (screenplay), Peter George (based on the book: \"Red Alert\" by)",
        "Actors": "Peter Sellers, George C. Scott, Sterling Hayden, Keenan Wynn",
        "Plot": "An insane general triggers a path to nuclear holocaust that a War Room full of politicians and generals frantically tries to stop.",
        "Language": "English, Russian",
        "Country": "UK, USA",
        "Awards": "Nominated for 4 Oscars. Another 14 wins & 7 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWI3ZTMxNjctMjdlNS00NmUwLWFiM2YtZDUyY2I3N2MxYTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "97/100"
            }
        ],
        "Metascore": "97",
        "imdbRating": "8.4",
        "imdbVotes": "458,928",
        "imdbID": "tt0057012",
        "Type": "movie",
        "DVD": "16 Apr 2012",
        "BoxOffice": "$9,440,272",
        "Production": "Hawk Films",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Witness for the Prosecution",
        "Year": "1957",
        "Rated": "Approved",
        "Released": "06 Feb 1958",
        "Runtime": "116 min",
        "Genre": "Crime, Drama, Mystery, Thriller",
        "Director": "Billy Wilder",
        "Writer": "Agatha Christie (in Agatha Christie's international stage success), Billy Wilder (screen play), Harry Kurnitz (screen play), Lawrence B. Marcus (adaptation)",
        "Actors": "Tyrone Power, Marlene Dietrich, Charles Laughton, Elsa Lanchester",
        "Plot": "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
        "Language": "English, German",
        "Country": "USA",
        "Awards": "Nominated for 6 Oscars. Another 4 wins & 10 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDQwODU5OWYtNDcyNi00MDQ1LThiOGMtZDkwNWJiM2Y3MDg0XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "112,578",
        "imdbID": "tt0051201",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "N/A",
        "Production": "United Artists",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Paths of Glory",
        "Year": "1957",
        "Rated": "Approved",
        "Released": "25 Dec 1957",
        "Runtime": "88 min",
        "Genre": "Drama, War",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, Calder Willingham, Jim Thompson",
        "Actors": "Kirk Douglas, Ralph Meeker, Adolphe Menjou",
        "Plot": "After refusing to attack an enemy position, a general accuses the soldiers of cowardice and their commanding officer must defend them.",
        "Language": "English, German, Latin",
        "Country": "United States",
        "Awards": "7 wins & 4 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNjViMmRkOTEtM2ViOS00ODg0LWJhYWEtNTBlOGQxNDczOGY3XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "95%"
            },
            {
                "Source": "Metacritic",
                "Value": "90/100"
            }
        ],
        "Metascore": "90",
        "imdbRating": "8.4",
        "imdbVotes": "182,361",
        "imdbID": "tt0050825",
        "Type": "movie",
        "DVD": "10 Feb 2016",
        "BoxOffice": "N/A",
        "Production": "Bryna Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Sunset Blvd.",
        "Year": "1950",
        "Rated": "Passed",
        "Released": "29 Sep 1950",
        "Runtime": "110 min",
        "Genre": "Drama, Film-Noir",
        "Director": "Billy Wilder",
        "Writer": "Charles Brackett, Billy Wilder, D.M. Marshman Jr.",
        "Actors": "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
        "Plot": "A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 3 Oscars. Another 15 wins & 19 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTU0NTkyNzYwMF5BMl5BanBnXkFtZTgwMDU0NDk5MTI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "206,214",
        "imdbID": "tt0043014",
        "Type": "movie",
        "DVD": "10 Aug 2016",
        "BoxOffice": "$299,645",
        "Production": "Paramount Pictures",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Great Dictator",
        "Year": "1940",
        "Rated": "G",
        "Released": "07 Mar 1941",
        "Runtime": "125 min",
        "Genre": "Comedy, Drama, War",
        "Director": "Charles Chaplin",
        "Writer": "Charles Chaplin",
        "Actors": "Charles Chaplin, Paulette Goddard, Jack Oakie",
        "Plot": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
        "Language": "English, Esperanto",
        "Country": "United States",
        "Awards": "Nominated for 5 Oscars. 6 wins & 6 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmExYWJjNTktNGUyZS00ODhmLTkxYzAtNWIzOGEyMGNiMmUwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.4/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.4",
        "imdbVotes": "207,587",
        "imdbID": "tt0032553",
        "Type": "movie",
        "DVD": "22 May 2017",
        "BoxOffice": "N/A",
        "Production": "Charles Chaplin Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "The Hunt",
        "Year": "2012",
        "Rated": "R",
        "Released": "10 Jan 2013",
        "Runtime": "115 min",
        "Genre": "Drama",
        "Director": "Thomas Vinterberg",
        "Writer": "Tobias Lindholm (screenplay), Thomas Vinterberg (screenplay)",
        "Actors": "Mads Mikkelsen, Thomas Bo Larsen, Annika Wedderkopp, Lasse Fogelstrøm",
        "Plot": "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
        "Language": "Danish, English, Polish",
        "Country": "Denmark, Sweden",
        "Awards": "Nominated for 1 Oscar. Another 37 wins & 69 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTg2NDg3ODg4NF5BMl5BanBnXkFtZTcwNzk3NTc3Nw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "77/100"
            }
        ],
        "Metascore": "77",
        "imdbRating": "8.3",
        "imdbVotes": "294,668",
        "imdbID": "tt2106476",
        "Type": "movie",
        "DVD": "04 Feb 2017",
        "BoxOffice": "$613,308",
        "Production": "Zentropa Entertainments",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Inglourious Basterds",
        "Year": "2009",
        "Rated": "R",
        "Released": "21 Aug 2009",
        "Runtime": "153 min",
        "Genre": "Adventure, Drama, War",
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino",
        "Actors": "Brad Pitt, Mélanie Laurent, Christoph Waltz, Eli Roth",
        "Plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
        "Language": "English, German, French, Italian",
        "Country": "USA, Germany",
        "Awards": "Won 1 Oscar. Another 132 wins & 172 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "89%"
            },
            {
                "Source": "Metacritic",
                "Value": "69/100"
            }
        ],
        "Metascore": "69",
        "imdbRating": "8.3",
        "imdbVotes": "1,304,168",
        "imdbID": "tt0361748",
        "Type": "movie",
        "DVD": "10 Dec 2015",
        "BoxOffice": "$120,540,719",
        "Production": "A Band Apart, Zehnte Babelsberg",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Eternal Sunshine of the Spotless Mind",
        "Year": "2004",
        "Rated": "R",
        "Released": "19 Mar 2004",
        "Runtime": "108 min",
        "Genre": "Drama, Romance, Sci-Fi",
        "Director": "Michel Gondry",
        "Writer": "Charlie Kaufman, Michel Gondry, Pierre Bismuth",
        "Actors": "Jim Carrey, Kate Winslet, Tom Wilkinson",
        "Plot": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 73 wins & 111 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "89/100"
            }
        ],
        "Metascore": "89",
        "imdbRating": "8.3",
        "imdbVotes": "929,010",
        "imdbID": "tt0338013",
        "Type": "movie",
        "DVD": "12 Feb 2014",
        "BoxOffice": "$34,400,301",
        "Production": "Anonymous Content, Focus Features, Blue Ruin, This Is That Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Requiem for a Dream",
        "Year": "2000",
        "Rated": "R",
        "Released": "15 Dec 2000",
        "Runtime": "102 min",
        "Genre": "Drama",
        "Director": "Darren Aronofsky",
        "Writer": "Hubert Selby Jr. (based on the book by), Hubert Selby Jr. (screenplay), Darren Aronofsky (screenplay)",
        "Actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
        "Plot": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 1 Oscar. Another 38 wins & 69 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "79%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.3",
        "imdbVotes": "782,620",
        "imdbID": "tt0180093",
        "Type": "movie",
        "DVD": "06 Dec 2015",
        "BoxOffice": "$3,635,482",
        "Production": "Thousand Words, Industry Entertainment, Truth and Soul Pictures, Bandeira Entertainment, Requiem for a Dream LLC, Artisan Entertainment, Protozoa Pictures, Sibling Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "American Beauty",
        "Year": "1999",
        "Rated": "R",
        "Released": "01 Oct 1999",
        "Runtime": "122 min",
        "Genre": "Drama",
        "Director": "Sam Mendes",
        "Writer": "Alan Ball",
        "Actors": "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
        "Plot": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 5 Oscars. Another 106 wins & 102 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "87%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.3",
        "imdbVotes": "1,088,272",
        "imdbID": "tt0169547",
        "Type": "movie",
        "DVD": "01 Aug 2013",
        "BoxOffice": "$130,096,601",
        "Production": "DreamWorks Pictures, Jinks/Cohen Company",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Good Will Hunting",
        "Year": "1997",
        "Rated": "R",
        "Released": "09 Jan 1998",
        "Runtime": "126 min",
        "Genre": "Drama, Romance",
        "Director": "Gus Van Sant",
        "Writer": "Matt Damon, Ben Affleck",
        "Actors": "Robin Williams, Matt Damon, Ben Affleck",
        "Plot": "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 24 wins & 61 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "70/100"
            }
        ],
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "883,161",
        "imdbID": "tt0119217",
        "Type": "movie",
        "DVD": "14 Apr 2016",
        "BoxOffice": "$138,433,435",
        "Production": "Miramax Films, Be Gentlemen Limited Partnership, Lawrence Bender Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Toy Story",
        "Year": "1995",
        "Rated": "G",
        "Released": "22 Nov 1995",
        "Runtime": "81 min",
        "Genre": "Animation, Adventure, Comedy, Family, Fantasy",
        "Director": "John Lasseter",
        "Writer": "John Lasseter (original story by), Pete Docter (original story by), Andrew Stanton (original story by), Joe Ranft (original story by), Joss Whedon (screenplay by), Andrew Stanton (screenplay by), Joel Cohen (screenplay by), Alec Sokolow (screenplay by)",
        "Actors": "Tom Hanks, Tim Allen, Don Rickles, Jim Varney",
        "Plot": "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Nominated for 3 Oscars. Another 27 wins & 20 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "95/100"
            }
        ],
        "Metascore": "95",
        "imdbRating": "8.3",
        "imdbVotes": "908,401",
        "imdbID": "tt0114709",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$223,225,679",
        "Production": "Pixar Animation Studios, Walt Disney Pictures",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Braveheart",
        "Year": "1995",
        "Rated": "R",
        "Released": "24 May 1995",
        "Runtime": "178 min",
        "Genre": "Biography, Drama, History, War",
        "Director": "Mel Gibson",
        "Writer": "Randall Wallace",
        "Actors": "James Robinson, Sean Lawlor, Sandy Nelson, James Cosmo",
        "Plot": "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
        "Language": "English, French, Latin, Scottish Gaelic, Italian",
        "Country": "USA",
        "Awards": "Won 5 Oscars. Another 28 wins & 34 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "78%"
            },
            {
                "Source": "Metacritic",
                "Value": "68/100"
            }
        ],
        "Metascore": "68",
        "imdbRating": "8.3",
        "imdbVotes": "975,617",
        "imdbID": "tt0112573",
        "Type": "movie",
        "DVD": "01 Aug 2013",
        "BoxOffice": "$75,609,945",
        "Production": "Icon Entertainment International, Twentieth Century Fox, Ladd Company, Paramount Pictures, B.H. Finance C.V.",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Reservoir Dogs",
        "Year": "1992",
        "Rated": "R",
        "Released": "02 Sep 1992",
        "Runtime": "99 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Quentin Tarantino",
        "Writer": "Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)",
        "Actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
        "Plot": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
        "Language": "English",
        "Country": "USA",
        "Awards": "12 wins & 23 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "79/100"
            }
        ],
        "Metascore": "79",
        "imdbRating": "8.3",
        "imdbVotes": "939,142",
        "imdbID": "tt0105236",
        "Type": "movie",
        "DVD": "19 Dec 2015",
        "BoxOffice": "$2,832,029",
        "Production": "Live Entertainment, Dog Eat Dog Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Come and See",
        "Year": "1985",
        "Rated": "Not Rated",
        "Released": "17 Oct 1985",
        "Runtime": "142 min",
        "Genre": "Drama, Thriller, War",
        "Director": "Elem Klimov",
        "Writer": "Ales Adamovich, Elem Klimov",
        "Actors": "Aleksey Kravchenko, Olga Mironova, Liubomiras Laucevicius",
        "Plot": "After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.",
        "Language": "Russian, Belarusian, German",
        "Country": "Soviet Union",
        "Awards": "3 wins",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODM4Njg0NTAtYjI5Ny00ZjAxLTkwNmItZTMxMWU5M2U3M2RjXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "63,234",
        "imdbID": "tt0091251",
        "Type": "movie",
        "DVD": "28 Jan 2015",
        "BoxOffice": "$71,909",
        "Production": "N/A",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Aliens",
        "Year": "1986",
        "Rated": "R",
        "Released": "18 Jul 1986",
        "Runtime": "137 min",
        "Genre": "Action, Adventure, Sci-Fi, Thriller",
        "Director": "James Cameron",
        "Writer": "James Cameron (story by), David Giler (story by), Walter Hill (story by), Dan O'Bannon (based on characters created by), Ronald Shusett (based on characters created by), James Cameron (screenplay by)",
        "Actors": "Sigourney Weaver, Carrie Henn, Michael Biehn, Paul Reiser",
        "Plot": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
        "Language": "English",
        "Country": "UK, USA",
        "Awards": "Won 2 Oscars. Another 18 wins & 23 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZGU2OGY5ZTYtMWNhYy00NjZiLWI0NjUtZmNhY2JhNDRmODU3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "97%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.3",
        "imdbVotes": "665,340",
        "imdbID": "tt0090605",
        "Type": "movie",
        "DVD": "25 Nov 2015",
        "BoxOffice": "$85,160,248",
        "Production": "Twentieth Century Fox, Brandywine Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Amadeus",
        "Year": "1984",
        "Rated": "R",
        "Released": "19 Sep 1984",
        "Runtime": "160 min",
        "Genre": "Biography, Drama, History, Music",
        "Director": "Milos Forman",
        "Writer": "Peter Shaffer (original stage play), Peter Shaffer (original screenplay)",
        "Actors": "F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice",
        "Plot": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
        "Language": "English, Italian, Latin, German",
        "Country": "USA, France, Czechoslovakia, Italy",
        "Awards": "Won 8 Oscars. Another 35 wins & 15 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            },
            {
                "Source": "Metacritic",
                "Value": "88/100"
            }
        ],
        "Metascore": "88",
        "imdbRating": "8.3",
        "imdbVotes": "376,137",
        "imdbID": "tt0086879",
        "Type": "movie",
        "DVD": "18 May 2016",
        "BoxOffice": "$51,973,029",
        "Production": "AMLF",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "Rated": "PG",
        "Released": "25 May 1983",
        "Runtime": "131 min",
        "Genre": "Action, Adventure, Fantasy, Sci-Fi",
        "Director": "Richard Marquand",
        "Writer": "Lawrence Kasdan (screenplay by), George Lucas (screenplay by), George Lucas (story by)",
        "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
        "Plot": "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Nominated for 4 Oscars. Another 22 wins & 16 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "82%"
            },
            {
                "Source": "Metacritic",
                "Value": "58/100"
            }
        ],
        "Metascore": "58",
        "imdbRating": "8.3",
        "imdbVotes": "969,573",
        "imdbID": "tt0086190",
        "Type": "movie",
        "DVD": "10 Apr 2015",
        "BoxOffice": "$309,306,177",
        "Production": "Lucasfilm Ltd.",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Das Boot",
        "Year": "1981",
        "Rated": "R",
        "Released": "10 Feb 1982",
        "Runtime": "149 min",
        "Genre": "Adventure, Drama, Thriller",
        "Director": "Wolfgang Petersen",
        "Writer": "Wolfgang Petersen, Lothar G. Buchheim",
        "Actors": "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann",
        "Plot": "The claustrophobic world of a WWII German U-boat; boredom, filth and sheer terror.",
        "Language": "German",
        "Country": "West Germany",
        "Awards": "Nominated for 6 Oscars. 13 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhZDIzNWMtNjkxMS00MDQ1LThkMTYtZWQzYWU3MWMxMGU5XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "98%"
            },
            {
                "Source": "Metacritic",
                "Value": "86/100"
            }
        ],
        "Metascore": "86",
        "imdbRating": "8.3",
        "imdbVotes": "235,945",
        "imdbID": "tt0082096",
        "Type": "movie",
        "DVD": "01 May 2012",
        "BoxOffice": "$11,487,676",
        "Production": "Bavaria Film, Westdeutscher Rundfunk, Radiant Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "2001: A Space Odyssey",
        "Year": "1968",
        "Rated": "G",
        "Released": "24 Jun 1970",
        "Runtime": "149 min",
        "Genre": "Adventure, Sci-Fi",
        "Director": "Stanley Kubrick",
        "Writer": "Stanley Kubrick, Arthur C. Clarke",
        "Actors": "Keir Dullea, Gary Lockwood, William Sylvester",
        "Plot": "After discovering a mysterious artifact buried beneath the Lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer H.A.L. 9000.",
        "Language": "English, Russian, French",
        "Country": "United Kingdom, United States",
        "Awards": "Won 1 Oscar. 16 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "92%"
            },
            {
                "Source": "Metacritic",
                "Value": "84/100"
            }
        ],
        "Metascore": "84",
        "imdbRating": "8.3",
        "imdbVotes": "616,441",
        "imdbID": "tt0062622",
        "Type": "movie",
        "DVD": "06 Feb 2014",
        "BoxOffice": "$60,405,931",
        "Production": "Metro Goldwyn Mayer",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "North by Northwest",
        "Year": "1959",
        "Rated": "Approved",
        "Released": "18 Dec 1959",
        "Runtime": "136 min",
        "Genre": "Adventure, Mystery, Thriller",
        "Director": "Alfred Hitchcock",
        "Writer": "Ernest Lehman",
        "Actors": "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
        "Plot": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies.",
        "Language": "English, French",
        "Country": "USA",
        "Awards": "Nominated for 3 Oscars. Another 8 wins & 7 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "98/100"
            }
        ],
        "Metascore": "98",
        "imdbRating": "8.3",
        "imdbVotes": "305,044",
        "imdbID": "tt0053125",
        "Type": "movie",
        "DVD": "17 Nov 2009",
        "BoxOffice": "N/A",
        "Production": "Metro Goldwyn Mayer",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Vertigo",
        "Year": "1958",
        "Rated": "PG",
        "Released": "22 May 1958",
        "Runtime": "128 min",
        "Genre": "Mystery, Romance, Thriller",
        "Director": "Alfred Hitchcock",
        "Writer": "Alec Coppel, Samuel A. Taylor, Pierre Boileau",
        "Actors": "James Stewart, Kim Novak, Barbara Bel Geddes",
        "Plot": "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 8 wins & 7 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "94%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "8.3",
        "imdbVotes": "371,916",
        "imdbID": "tt0052357",
        "Type": "movie",
        "DVD": "02 Aug 2015",
        "BoxOffice": "$7,705,225",
        "Production": "Paramount Pictures, Alfred J. Hitchcock Productions",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Singin' in the Rain",
        "Year": "1952",
        "Rated": "G",
        "Released": "11 Apr 1952",
        "Runtime": "103 min",
        "Genre": "Comedy, Musical, Romance",
        "Director": "Stanley Donen, Gene Kelly",
        "Writer": "Betty Comden, Adolph Green",
        "Actors": "Gene Kelly, Donald O'Connor, Debbie Reynolds",
        "Plot": "A silent film production company and cast make a difficult transition to sound.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 2 Oscars. 7 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDRjNGViMjQtOThlMi00MTA3LThkYzQtNzJkYjBkMGE0YzE1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            },
            {
                "Source": "Metacritic",
                "Value": "99/100"
            }
        ],
        "Metascore": "99",
        "imdbRating": "8.3",
        "imdbVotes": "223,392",
        "imdbID": "tt0045152",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$1,826,108",
        "Production": "Metro Goldwyn Mayer",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "Citizen Kane",
        "Year": "1941",
        "Rated": "PG",
        "Released": "05 Sep 1941",
        "Runtime": "119 min",
        "Genre": "Drama, Mystery",
        "Director": "Orson Welles",
        "Writer": "Herman J. Mankiewicz (original screen play), Orson Welles (original screen play)",
        "Actors": "Joseph Cotten, Dorothy Comingore, Agnes Moorehead, Ruth Warrick",
        "Plot": "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance; 'Rosebud'.",
        "Language": "English, Italian",
        "Country": "USA",
        "Awards": "Won 1 Oscar. Another 10 wins & 13 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "99%"
            },
            {
                "Source": "Metacritic",
                "Value": "100/100"
            }
        ],
        "Metascore": "100",
        "imdbRating": "8.3",
        "imdbVotes": "413,912",
        "imdbID": "tt0033467",
        "Type": "movie",
        "DVD": "28 Jun 2016",
        "BoxOffice": "$1,585,634",
        "Production": "Mercury Productions, RKO Radio Pictures Inc.",
        "Website": "N/A",
        "Response": "True"
    },
    {
        "Title": "M",
        "Year": "1931",
        "Rated": "Passed",
        "Released": "31 Aug 1931",
        "Runtime": "99 min",
        "Genre": "Crime, Mystery, Thriller",
        "Director": "Fritz Lang",
        "Writer": "Thea von Harbou (script), Fritz Lang (script)",
        "Actors": "Peter Lorre, Ellen Widmann, Inge Landgut, Otto Wernicke",
        "Plot": "When the police in a German city are unable to catch a child-murderer, other criminals join in the manhunt.",
        "Language": "German",
        "Country": "Germany",
        "Awards": "2 wins.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODA4ODk3OTEzMF5BMl5BanBnXkFtZTgwMTQ2ODMwMzE@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.3/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "100%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.3",
        "imdbVotes": "146,938",
        "imdbID": "tt0022100",
        "Type": "movie",
        "DVD": "N/A",
        "BoxOffice": "$35,566",
        "Production": "Nero-Film AG",
        "Website": "N/A",
        "Response": "True"
    }
], (err, results) => {
    console.log(results);
});