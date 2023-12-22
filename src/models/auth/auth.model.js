/*const { DataTypes } = require("sequelize");

let authModel = {};

authModel.schema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: { type: DataTypes.STRING,  allowNull: false },
    lastName: { type: DataTypes.STRING },
    email: {
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: 'Email already exist!'
        },
        allowNull: false
     },
    password: {
        type:  DataTypes.STRING,
        validate: {
            len: {
                args: [6, 200],
                msg: "Password length should be minimum 6"
            }
        },
        allowNull: false 
    }
};

authModel.utils = {};

authModel.associate = function (model, models) {

    
}


module.exports = { authModel };*/