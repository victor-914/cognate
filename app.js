// Imports
const express = require("express");
const app = express();
const port = 5000;

// Static Files
app.use(express.static("public"));
// app.use("/css", express.static(__dirname + "public/css"));
// app.use("/js", express.static(__dirname + "public/js"));
// app.use("/img", express.static(__dirname + "public/img"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index", { text: "This is EJS" });
});

// app.get("/dapp", (req, res) => {
//   res.render("dapp", { text: "dapp" });
// });

// app.get("/ai", (req, res) => {
//   res.render("ai", { text: "ai" });
// });

// app.get("/play", (req, res) => {
//   res.render("play", { text: "play" });
// });

//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));
