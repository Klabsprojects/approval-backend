module.exports = (app) => {
    const value = require("../../controllers/user/licenseLe1.controller");
    const { joi, cache } = require("../../helpers/index.helper");
    
    app.route("/applyLicenseLe1")
        .post(value.create)

    app.route("/getAllLe1License")
        .get(value.list)
        
}