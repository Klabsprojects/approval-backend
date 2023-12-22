/*module.exports = (app) => {
    const value = require("../../controllers/auth/auth.controller");
    const { joi, cache } = require("../../helpers/index.helper");

    // Login
    app.post("/login", value.userLogin);
    app.post("/addCount", value.visitorsAddCount);
    app.get("/count", value.visitorsListCount);

}*/