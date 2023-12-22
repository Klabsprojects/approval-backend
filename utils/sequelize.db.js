const Sequelize = require("sequelize");
const { schema, utils } = require("../src/models/index.model");

const sequelize = new Sequelize(process.env.DB_URI, {
    logging: false,
    define: {
        timestamps: true,
        freezeTableName: true,
    },
});

const db = {};
let School;
let Category;
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.user = require("../src/models/user/user.model.js")(sequelize, Sequelize);
db.licenseLe1 = require("../src/models/user/licenseLe1.model.js")(sequelize, Sequelize);
db.documentLe1 = require("../src/models/user/documentLe1.model.js")(sequelize, Sequelize);

db.licenseLe2 = require("../src/models/user/licenseLe2.model.js")(sequelize, Sequelize);
db.documentLe2 = require("../src/models/user/documentLe2.model.js")(sequelize, Sequelize);
//db.streamCategory = require("../src/models/colleges/streamCategory.modal.js")(sequelize, Sequelize);
//db.careerStreamList = require("../src/models/colleges/careerStreamList.modal.js")(sequelize, Sequelize);


/*db.user.hasMany(db.licenseLe1, {
    as: "userId",
  });
  db.user.hasMany(db.licenseLe2, {
    as: "userId",
  });*/

  db.licenseLe2.belongsTo(db.user, {
    as: "userId2",
  });
  db.licenseLe1.belongsTo(db.user, {
    as: "userId1",
  });

  db.licenseLe1.hasOne(db.documentLe1, {
    as: "licenseLe1Id",
  });
  db.licenseLe2.hasOne(db.documentLe2, {
    as: "licenseLe2Id",
  });
/*db.schoolStream.belongsToMany(db.streamCategory, { through: 'career_stream_match' });
db.streamCategory.hasMany(db.careerStreamList, {
  as: "careerCatId",
});*/


schema.forEach(x => {
    console.log(x.model);
    if(x.model == 'User' || x.model == 'LicenseLe2'){ 
        console.log('if ', x.table);

    }
    else if(x.model == 'LicenseLe1'){
        console.log('else if ', x.table);
    }
    else {
        db[x.model] = sequelize.define(x.table, x.path.schema, x.path.utils);
        db[x.model].associate = x.path.associate;
    }
});


/*schema.forEach(x => {
    console.log(x.model);
    
        db[x.model] = sequelize.define(x.table, x.path.schema, x.path.utils);
        db[x.model].associate = x.path.associate;
});*/

Object.keys(db).forEach(function (modelName) {
    if (modelName != 'Sequelize' && modelName != 'sequelize') {
        if (db[modelName].associate) {
            db[modelName].associate(db[modelName], db)
        }
    }
})

module.exports = db;