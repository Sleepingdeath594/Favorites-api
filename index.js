var express = require("express");

var app = express();
var PORT = 3000;
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
  res.send("Welcome to MyFavorite List!");
});
app.get("/api/favor", function (req, res) {
  return res.json(favoriteShows);
});
app.get("/api/characters/:character", function (req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < favoriteShows.length; i++) {
    if (chosen === favoriteShows[i].routeName) {
      return res.json(favoriteShows[i]);
    }
  }
});
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
