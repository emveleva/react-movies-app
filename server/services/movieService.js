const Movie = require('../Models/Movie');

module.exports = {
    getAll: (genre) => {
        if (genre == "all") return Movie
            .find().lean();
        if (genre !== "all") { 
            let movies = Movie.find({genre}).lean();
            return movies;
        }
    },
    getOne: async (movieId) => {
        let foundMovie = await Movie.findById(movieId);
        return foundMovie;
    },
    addNew: async ({...movieInfo}) => {
        // if (movieInfo.title == '') throw {message: 'Movie title cannot be empty.'};
        // if (movieInfo.year == '') throw {message: 'Movie year cannot be empty.'};
        // if (movieInfo.description == '') throw {message: 'Movie description cannot be empty.'};
        // if (movieInfo.actors == '') throw {message: 'Movie actors cannot be empty.'};
        // if (movieInfo.poster == '') throw {message: 'Movie poster cannot be empty.'};
        // if (movieInfo.genre == 'Select genre...') throw {message: 'Movie genre must be selected.'};
        // let urlPattern = /^(?:http(s)?:\/\/)?[\w.-].*/;
        // if (!movieInfo.posterURL.match(urlPattern)) throw {message: 'Poster URL should be a valid link.'}
        // let dublicateCheck = Movie.find({title: movieInfo.title, year: movieInfo.year}).lean();
        // console.log(dublicateCheck.json())
        // if (dublicateCheck.length !== 0) throw {message: 'There is already a movie with the same title and the same year.'}
        let movie = await new Movie({...movieInfo})
        let movieId = movie._id;
        movie.save();
        return movieId;
    },
    editMovie: (movieId, editedMovieInfo) => {
        Movie.updateOne({_id: movieId}, editedMovieInfo);
    } 
}

