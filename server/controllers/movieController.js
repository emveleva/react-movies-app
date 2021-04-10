const router = require("express").Router();
const {
	addNew,
	getAll,
	getOne,
	editMovie,
} = require("../services/movieService");


// GET
router.get("/:genre", (req, res) => {
	let genre = req.params.genre;

	getAll(genre)
		.then((movies) => {
			res.status(200).json(movies);
		})
		.catch((error) => res.json(error));
});

router.get("/details/:movieId", (req, res) => {
	let movieId = req.params.movieId;
	getOne(movieId)
		.then((movie) => {
			res.status(200).json({ message: "success", movie });
		})
		.catch((error) => res.json(error));
});

router.get("/details/edit/:movieId", (req, res) => {
	let movieId = req.params.movieId;
	getOne(movieId)
		.then((movie) => {
			res.status(200).json({ message: "success", movie });
		})
		.catch((error) => res.json(error));
});


// POST
router.post("/details/edit/:movieId", (req, res) => {
	let movieId = req.params.movieId;
	let editedMovieInfo = req.body;
	editMovie(movieId, editedMovieInfo)
		.then(() => {
			res.status(200).json({ message: "edited" });
		})
		.catch((error) => res.json(error));
});

router.post("/add-new", (req, res) => {
	addNew(req.body)
		.then((movieId) => {
			res.status(200).json({message: "added", movieId});
		})
		.catch((error) => res.json(error));
});

module.exports = router;
