const db = require("../../../utils/sequelize.db");
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware");
const bcrypt = require('bcrypt');

let file = "licenseLe2.controller";

// User Create
exports.create = async (req, res) => {
    try {
        let query = req.body;
        console.log('license le1 model ', req.body);
        //query.password = "pwd123"; 
       /*let x = query.password;
        let y = 'haha334';
        const salt = bcrypt.genSaltSync(10, 'a');
        const hashpwd = bcrypt.hashSync(query.password, salt);
        query.password = hashpwd;*/
        /*console.log('user model ', req.body);
        console.log(bcrypt.compareSync(y, query.password));*/
        let results;
        if (query && query.length > 0) {
            results = await commonService.insertMany(db.licenseLe2, query);
        } else {
            results = await commonService.insertOne(db.licenseLe2, query);
        }
        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.CREATED;
        errorRes(res, error, message, file);
    }
}

// User List
exports.list = async (req, res) => {
    console.log('helo');
    try {
        let query = {};
        query.where = req.query;
        query.attributes = {}
        console.log('query ', query);
        let results;
        //if(req.query.phone)
            results = await commonService.findAll(db.licenseLe2, query);

        console.log('success');
        console.log(results);
        for(let x of results){
            if(x.partnershipDetails != null)
                for(let y of x.partnershipDetails)
                    console.log(y);
                    //console.log(x.partnershipDetails.name);
        }
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        console.log('error');
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}


// User Update
exports.update = async (req, res) => {
    try {
        let query = {};
        query.body = req.body;
        query.where = { phone: req.query.phone };
        const salt = bcrypt.genSaltSync(10, 'a');
        const hashpwd = bcrypt.hashSync(query.body.password, salt);
        query.body.password = hashpwd;
        const results = await commonService.update(db.licenseLe2, query);
        successRes(res, results, SUCCESS.UPDATED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.UPDATED;
        errorRes(res, error, message, file);
    }
}