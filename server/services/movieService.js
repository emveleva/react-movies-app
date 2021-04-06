const Movie = require('../Models/Movie');

module.exports = {
    getAll: (genre) => {
        if (genre == "all") return Movie.find().lean();
        if (genre !== "all") { 
            let movies = Movie.find({genre}).lean();
            return movies;
        }
    },
    getOne: async (movieId) => {
        let foundMovie = await Movie.findById(movieId);
        return foundMovie;
    },

    checkDupes: (title) => {
        Movie.find({title}).lean()
            .then(res => {
                if (res.length !== 0) {
                    return res.json({
                        message: "exists"
                    })
                }
            })
    },
    addNew: async ({...movieInfo}) => {
        console.log("here")
        if (movieInfo.title == '') throw {message: 'Movie title cannot be empty.'};
        console.log("1")
        if (movieInfo.year == '') throw {message: 'Movie year cannot be empty.'};
        console.log("2")
        if (movieInfo.description == '') throw {message: 'Movie description cannot be empty.'};
        console.log("3")
        if (movieInfo.actors == '') throw {message: 'Movie actors cannot be empty.'};
        console.log("4")
        if (movieInfo.poster == '') throw {message: 'Movie poster cannot be empty.'};
        console.log("5")
        if (movieInfo.genre == 'Select genre...') throw {message: 'Movie genre must be selected.'};
        console.log("6")
        // let urlPattern = /^(?:http(s)?:\/\/)?[\w.-].*/;
        // if (!movieInfo.posterURL.match(urlPattern)) throw {message: 'Poster URL of movie should be a valid link.'}
        console.log("7")
        let title = movieInfo.title;

            
        console.log(dublicateCheck)
        if (dublicateCheck.length !== 0) throw {message: 'There is already a movie with the same title and the same year.'}
        console.log("9")
        let movie = await new Movie({...movieInfo})
        console.log(movie)
        let movieId = movie._id;
        movie.save();
        console.log(movieId)
        return movieId;
    },
    editMovie: async (movieId, editedMovieInfo) => {
        const isEmpty = !Object.values(editedMovieInfo).some(x => (x !== '')); 
        if (isEmpty) throw {message: `Please don't leave the fields empty.`};
        let movie = await Movie.updateOne({_id: movieId}, editedMovieInfo);
        return movie
    } 
}

