const app = require('express')();

require("./user/user.route")(app);
require("./user/licenseLe1.route")(app);

module.exports = app;

