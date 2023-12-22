module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
},
name: { type: DataTypes.STRING, allowNull: true,  },
address: { type: DataTypes.STRING, allowNull: true, },
phone: { type: DataTypes.BIGINT, allowNull: false, unique: true, },
password: { type: DataTypes.STRING, allowNull: false,  },
createdAt: { type: DataTypes.DATE, allowNull: true, },
updatedAt: { type: DataTypes.DATE, allowNull: true, },
});

  return User;
};