const Movie = require('../Models/Movie');
const User = require('../Models/User');

module.exports = {
    addWatched: async ({userId, movieId}) => {
        let user = await User.findById(userId);

        user.watched?.push(movieId)

        return user.save()
    },

    addToWatch: async ({userId, movieId}) => {
        let user = await User.findById(userId);
        user.toWatch?.push(movieId)

        return user.save()
    },
    getLists: async (userId) => {
        let user = await User.findById(userId);
        let toWatch = user.toWatch;
        let watched = user.watched
        return toWatch, watched;
    },
    deleteToWatch: async ({userId, movieId}) => {
        let user = await User.findById(userId);
        let movieIdFound = user.toWatch.includes(movieId);
        let movieIndex = user.toWatch.infexOf(movieIdFound);
        user.toWatch.splice(movieIndex, 1);
        return user.save()
    },
    deleteWatched: async ({userId, movieId}) => {
        let user = await User.findById(userId);
        let movieIdFound = user.watched.includes(movieId);
        let movieIndex = user.watched.infexOf(movieIdFound);
        user.watched.splice(movieIndex, 1);
        return user.save()
    }
}

