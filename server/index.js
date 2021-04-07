const express = require("express");
const app = express();
const { PORT } = require("./config/config");
const auth = require("./middlewares/auth");
const cors = require("cors");
const routes = require("./routes");

const cookieParser = require("cookie-parser");

app.use(express.static("build"));

app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

routes(app);

require("./config/mongoose");
app.listen(PORT, () =>
  console.log(`Server is listening on http://localhost:${PORT}`)
);
