/*const db = require("../../../utils/sequelize.db");
const commonService = require("../../services/commonService");
const utilsService = require("../../services/utils.service");
const { jwt, ERRORS, SUCCESS } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const jwt_decode = require('jwt-decode');
const { decode } = require("jsonwebtoken");

let file = "auth.controller";

exports.userLogin = async (req, res) => {
    const digit = req.body.username.toString().length;
    if(digit === 8){
        try {
            const expire = process.env.EXPIRE;
            const request = {
                method: "post",
                url: "https://emislogin.tnschools.gov.in/emis_login/api/login",
                authHeader: "EMIS@2019_api",
                data: {
                    "records": {
                        "emis_username": req.body.username,
                        "emis_password": req.body.password
                    }
                }
            }
    
            const results = await utilsService.external_get(request);
            //console.log('RESPONSE FROM EMIS SERVER : ', results);
            if (results.status == 200) {
                var token = results.records.token;
                var rsatoken = results.records.rsatoken;
                const decoded = jwt_decode(token, rsatoken);
                const decoded1 = jwt_decode(rsatoken);
                let jwt_input;
                let jwt_input1;
                if (decoded) {
                    jwt_input = {
                        emis_username: decoded.emis_username,
                        emis_user_id: decoded.emis_user_id,
                        emis_usertype: decoded.emis_usertype,
                        emis_usertype1: decoded.emis_usertype1,
                        status: decoded.status,
                        teacher_name: decoded.tamil_name,
                        udise_code: decoded.udise_code,
                        district_id: decoded.district_id,
                        tamil_name: decoded.tamil_name,
                        school_name: decoded.school_name,
                        block_id: decoded.block_id,
                        teacher_type: decoded.teacher_type,
                        school_key_id: decoded.school_key_id,
                        teacher_id: decoded.teacher_id,
                        type_teacher: decoded.type_teacher,
                        subjects: decoded.subjects,
                        mod1: decoded.mod1,
                        rsa_school_id: decoded.rsa_school_id,
                        newschl: decoded.newschl,
                        iat: decoded.iat
                    };
                    const token = await jwt.createToken(jwt_input, expire);
                    if(decoded1){
                        jwt_input1 = {
                            jti: decoded1.jti,
                            iss: decoded1.iss,
                            sub: decoded1.sub,
                            aud: decoded1.aud,
                            iat: decoded1.iat,
                            nbf: decoded1.nbf,
                            name: decoded1.name,
                            state_id: decoded1.state_id,
                            school_id: decoded1.school_id,
                            redirect_uri: decoded1.redirect_uri
                        };
                        const token1 = await jwt.createToken(jwt_input1, expire);
                        jwt_input.teacher_name = jwt_input1.name;
                    const output = {
                        data: jwt_input,
                        data2: jwt_input1,
                        token: token,
                        rsatoken: token1
                    }
                    successRes(res, output, SUCCESS.LOGIN);
                }
                }
            } else {
                throw { message: "User not found" };
            }
        } catch (error) {
            const message = error.message ? error.message : ERRORS.LOGIN;
            errorRes(res, error, message, file);
        }
    }
    else{
    try {
        const expire = process.env.EXPIRE;
        const request = {
            method: "post",
            url: "https://emislogin.tnschools.gov.in/emis_login/api/ATSLlogin",
            authHeader: "EMIS@2019_api",
            data: {
                "records": {
                    "emis_username": req.body.username,
                    "emis_password": req.body.password
                }
            }
        }

        const results = await utilsService.external_get(request);
        //console.log('RESPONSE FROM EMIS SERVER : ', results);
        if (results.status == 200) {
            var token = results.records.token;
            const decoded = jwt_decode(token);
            if (decoded) {
                const jwt_input = {
                    student_id: decoded.student_id,
                    student_name: decoded.student_name,
                    gender: decoded.gender,
                    school_name: decoded.school_name,
                    status: decoded.status,
                    school_id: decoded.school_id,
                    emis_username:decoded.emis_username,
                    udise_code:decoded.udise_code,
                    medium_id:decoded.medium_id,
                    group_id:decoded.group_id,
                    emis_usertype:decoded.emis_usertype,
                    section:decoded.section,
                    email:decoded.email,
                    mobile:decoded.mobile,
                    
                };
                const token = await jwt.createToken(jwt_input, expire);
                const output = {
                    data: jwt_input,
                    token: token
                }
                successRes(res, output, SUCCESS.LOGIN);
            }
        } else {
            throw { message: "User not found" };
        }
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LOGIN;
        errorRes(res, error, message, file);
    }}
}

exports.visitorsAddCount = async (req, res) => {
    try {
        let query = {};
        const results = await commonService.increment(db.visitorModel, query);
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}

exports.visitorsListCount = async (req, res) => {
    try {
        let query = {};
        query.id = "";
        const results = await commonService.findAll(db.visitorModel, query);
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}*/