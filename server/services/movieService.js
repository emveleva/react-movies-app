const Movie = require("../Models/Movie");

module.exports = {
  getAll: (genre) => {
    if (genre == "all") return Movie.find().lean();
    if (genre !== "all") {
      let movies = Movie.find({ genre }).lean();
      return movies;
    }
  },
  getOne: async (movieId) => {
    let foundMovie = await Movie.findById(movieId);
    return foundMovie;
  },
  addNew: async ({ ...movieInfo }) => {
    if (movieInfo.title == "")
      throw { message: "Movie title cannot be empty." };
    if (movieInfo.year == "") throw { message: "Movie year cannot be empty." };
    if (movieInfo.year.length < 4) throw { message: "Movie year must have 4 characters." };
    if (movieInfo.description == "")
      throw { message: "Movie description cannot be empty." };
    if (movieInfo.description.length > 700)
      throw { message: "Movie description should be shorter."}
    if (movieInfo.actors == "")
      throw { message: "Movie actors cannot be empty." };
    if (movieInfo.poster == "")
      throw { message: "Movie poster cannot be empty." };
    if (movieInfo.genre == "Select genre...")
      throw { message: "Movie genre must be selected." };
    let match = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(movieInfo.posterURL);
    if (!match)
      throw { message: "Poster URL of movie should be a valid link." };
    let found = await Movie.find({ title: movieInfo.title })
      if (found.length > 0) 
      throw { message: "A movie with the same title already exists." }
    let movie = await new Movie({ ...movieInfo });
    let movieId = movie._id;
    movie.save();
    return movieId;
  },
  editMovie: async (movieId, editedMovieInfo) => {
    const isEmpty = !Object.values(editedMovieInfo).some((x) => x !== "");
    if (isEmpty) throw { message: `No changes were detected.`};
    let movie = await Movie.updateOne({ _id: movieId }, editedMovieInfo);
    return movie;
  },
};
