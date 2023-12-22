module.exports = (sequelize, DataTypes) => {
  const LicenseLe2 = sequelize.define("license_le2", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
},

fireworksName: { type: DataTypes.STRING, allowNull: true, },
authorisedPerson: { type: DataTypes.STRING, allowNull: true, },
fathersName: { type: DataTypes.STRING, allowNull: true, },
doorNo: { type: DataTypes.STRING, allowNull: true, },
street: { type: DataTypes.STRING, allowNull: true, },
village: { type: DataTypes.STRING, allowNull: true, },
pincode: { type: DataTypes.INTEGER, allowNull: true, },
taluk: { type: DataTypes.STRING, allowNull: true, },
district: { type: DataTypes.STRING, allowNull: true, },
policeStation: { type: DataTypes.STRING, allowNull: true, },
railwayStation: { type: DataTypes.STRING, allowNull: true, },
phone: { type: DataTypes.BIGINT, allowNull: false},
licenseType: { type: DataTypes.STRING, allowNull: true, },
partnershipDetails: {type: DataTypes.JSON },

applicationType: { type: DataTypes.ENUM('Approval', 'Renewal'), allowNull: false, },
applicationStatus: { type: DataTypes.ENUM('Applied', 'Approved', 'Rejected', 'Cancelled'), allowNull: false, },
applicationLevel: { type: DataTypes.ENUM('Applied', 'DRO', 'Special Tahsildar', 'Section Assistant', 'Section Head', 'PA(G)',
'DRO`s Approval', 'Completed'), allowNull: false, },
applicationNumber: { type: DataTypes.STRING, allowNull: true, },
licenseNumber: { type: DataTypes.STRING, allowNull: true, },
duration: { type: DataTypes.STRING, allowNull: true, },
userId: { type: DataTypes.INTEGER, },

createdAt: { type: DataTypes.DATE, allowNull: true, },
updatedAt: { type: DataTypes.DATE, allowNull: true, },
});

  return LicenseLe2;
};