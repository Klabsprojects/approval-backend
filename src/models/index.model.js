//const { authModel } = require("./auth/auth.model")
//const { userModel } = require('./user/user.model');
//const { licenseLe1Model } = require('./user/licenseLe1.model');

let schema = [];

schema.push(
   // { model: "userModel", table :"user", path: userModel},
    //{ model: "licenseLe1Model", table :"license_le1", path: licenseLe1Model},
    /*{ model: "authModel", table: "auth", path: authModel },*/
       
);

let utils = {
    paranoid: true
};

module.exports = { schema, utils };