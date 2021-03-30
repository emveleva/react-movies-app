const Movie = require('../Models/Movie');

module.exports = {
    getAll: (genre) => {
        if (genre == "all") return Movie
            .find().lean();
        if (genre !== "all") return Movie
            .find(genre).lean();
    },
    getOne: (title) => Movie.findOne({title}).lean(),

    addNew: async ({...movieInfo}) => {
        if (movieInfo.title == '') throw {message: 'Movie title cannot be empty.'};
        if (movieInfo.year == '') throw {message: 'Movie year cannot be empty.'};
        if (movieInfo.description == '') throw {message: 'Movie description cannot be empty.'};
        if (movieInfo.actors == '') throw {message: 'Movie actors cannot be empty.'};
        if (movieInfo.poster == '') throw {message: 'Movie poster cannot be empty.'};
        if (movieInfo.genre == '') throw {message: 'Movie genre cannot be empty.'};
        let urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        let movieTitle = movieInfo.title;
        if (movieTitle === Movie.findOne(movieTitle)) throw {message: 'There is already a movie with the same title.'}
        if (!movieInfo.posterURL.match(urlPattern)) throw {message: 'Poster URL should be a valid link.'}
        let movie = await new Movie({...movieInfo})
            .save();
            console.log(movie)
        return movie;
    },
}

