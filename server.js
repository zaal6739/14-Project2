let express = require("express");

// Sets up the Express App
// =============================================================
let app = express();
const port = process.env.PORT || 8000;

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/goal-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
db.sequelize.sync().then(function () {
  server.listen(port, () => {
    console.log("App is running on port " + port);
  });
});
