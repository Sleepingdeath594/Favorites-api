var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

var favoriteShows = [
  {
    Title: "Angels of Death",
    category: "animu",
    id: 1,
  },
  {
    Title: "Lucifer",
    category: "Sci-fi",
    id: 2,
  },
  {
    Title: "High school DxD",
    category: "animu",
    id: 3,
  },
  {
    Title: "Money heist",
    category: "reality",
    id: 4,
  },
  {
    Title: "Good Girls",
    category: "Slice of Life",
    id: 5,
  },
];
app.get("/", function (req, res) {
  return res.render("home.ejs");
});
app.get("/api/favor", function (req, res) {
  return res.render("index.ejs");
});
app.get("/api/favorShows/:id", function (req, res) {
  var chosen = parseInt(req.params.id);

  console.log(chosen);

  for (var i = 0; i < favoriteShows.length; i++) {
    if (chosen === favoriteShows[i].id) {
      return res.render("show.ejs");
    }
  }
  res.render("show.ejs");
});
app.post("/api/favor", function (req, res) {
  var newCharacter = req.body;

  console.log(newCharacter);

  favoriteShows.push(newCharacter);

  res.json(newCharacter);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
