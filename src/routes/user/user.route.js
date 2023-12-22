module.exports = (app) => {
    const value = require("../../controllers/user/user.controller");
    const { joi, cache } = require("../../helpers/index.helper");
    
    app.route("/registerUser")
        .post(value.create)

    app.route("/getUser")
        .get(value.list)

    app.route("/updatePassword")
        .get(value.update)
}