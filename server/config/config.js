const config = {
        PORT: process.env.PORT || 4003,
        DB_URI: `mongodb+srv://admin:admin@cluster0.ef54o.mongodb.net/reactMoviesApp?retryWrites=true&w=majority`,
        SALT_ROUNDS: 10,
        SECRET: 'MYSUPERSECRETTINGY', 
        COOKIE_NAME: 'TOKEN'
}

module.exports = config;