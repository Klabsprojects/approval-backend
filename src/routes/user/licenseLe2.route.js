module.exports = (app) => {
    const value = require("../../controllers/user/licenseLe2.controller");
    const { joi, cache } = require("../../helpers/index.helper");
    
    app.route("/applyLicenseLe2")
        .post(value.create)

    app.route("/getAllLe2License")
        .get(value.list)
        
}