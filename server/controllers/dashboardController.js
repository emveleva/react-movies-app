const router = require("express").Router();
const {
  addToWatch,
  getLists,
  addWatched,
  deleteToWatch,
  deleteWatched,
} = require("../services/dashboardService");

// GET
router.get("/:userId", (req, res) => {
  let userId = req.params.userId;
  getLists(userId)
    .then((lists) => {
      res.status(200).json({ message: "success", lists });
    })
    .catch((error) => res.json(error));
});


// POST
router.post("/to-watch", (req, res) => {
  let data = req.body;
  addToWatch(req.body)
    .then(() => {
      res.status(200).json({ message: "added" });
    })
    .catch((error) => res.json(error));
});

router.post("/watched", (req, res) => {
  let data = req.body;
  addWatched(req.body)
    .then(() => {
      res.status(200).json({ message: "added" });
    })
    .catch((error) => res.json(error));
});


// DELETE
router.delete("/to-watch", (req, res) => {
  let data = req.body;
  deleteToWatch(req.body)
    .then(() => {
      res.status(200).json({ message: "removed" });
    })
    .catch((error) => res.json(error));
});

router.delete("/watched", (req, res) => {
  let data = req.body;
  deleteWatched(req.body)
    .then(() => {
      res.status(200).json({ message: "removed" });
    })
    .catch((error) => res.json(error));
});

module.exports = router;
