const router = require("express").Router();
const { register, login, searchMovie } = require("../services/authService");
const jwt = require("jsonwebtoken");
const { SECRET, COOKIE_NAME } = require("../config/config");
const path = require("path");

// GET
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.get("/logout", (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.status(200).json({ message: "logged out" });
});

router.get("/results/:query", (req, res) => {
	let query = req.params.query;
	console.log("query" + query);
	searchMovie(query)
	  .then((movies) => {
		res.status(200).json({ message: "found", movies });
	  })
	  .catch((error) => res.json(error));
  });  

// POST
router.post("/register", (req, res) => {
  register(req.body)
    .then((token) => {
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          res.clearCookie(COOKIE_NAME);
        } else {
          res
            .status(200)
            .cookie(COOKIE_NAME, token, { secure: true, httpOnly: true })
            .json({ user, token });
        }
      });
    })
    .catch((error) => res.json(error));
});

router.post("/login", (req, res) => {
  login(req.body)
    .then((token) => {
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          res.clearCookie(COOKIE_NAME);
        } else {
          res
            .status(200)
            .cookie(COOKIE_NAME, token, { sameSite: "none", secure: true })
            .json({ user, token });
        }
      });
    })
    .catch((error) => res.json(error));
});

module.exports = router;
