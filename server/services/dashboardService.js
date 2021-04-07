const User = require("../Models/User");

module.exports = {
  addWatched: async ({ userId, movie }) => {
    let user = await User.findById(userId);
    user.watched?.push(movie);
    return user.save();
  },

  addToWatch: async ({ userId, movie }) => {
    let user = await User.findById(userId);
    user.toWatch?.push(movie);
    return user.save();
  },
  getLists: async (userId) => {
    let user = await User.findById(userId);
    let toWatch = user.toWatch;
    let watched = user.watched;
    return { toWatch, watched };
  },
  deleteToWatch: async ({ userId, movie }) => {
    let user = await User.findById(userId);
    let movieFound = user.toWatch.find(
      (mov) => mov._id.toString() === movie._id
    );
    let movieIndex = user.toWatch.indexOf(movieFound);
    user.toWatch.splice(movieIndex, 1);
    return user.save();
  },
  deleteWatched: async ({ userId, movie }) => {
    let user = await User.findById(userId);
    let movieFound = user.watched.find(
      (mov) => mov._id.toString() === movie._id
    );
    let movieIndex = user.watched.indexOf(movieFound);
    user.watched.splice(movieIndex, 1);
    return user.save();
  },
};
