module.exports = (sequelize, DataTypes) => {
  const DocumentLe2 = sequelize.define("document_le2", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    doclink: { type: DataTypes.STRING, allowNull: true, },
    applicationNumber: { type: DataTypes.INTEGER, allowNull: false, },

    siteAndConstructionPlan: { type: DataTypes.STRING, allowNull: true, },
    formAE1: { type: DataTypes.STRING, allowNull: true, },
    formDE1: { type: DataTypes.STRING, allowNull: true, },
    feesChallan: { type: DataTypes.STRING, allowNull: true, },
    buildingPermissionOrder: { type: DataTypes.STRING, allowNull: true, },
    propertyTaxReceipt: { type: DataTypes.STRING, allowNull: true, },
    businessTaxReceipt: { type: DataTypes.STRING, allowNull: true, },
    miscellaneousCreditReceipt: { type: DataTypes.STRING, allowNull: true, },
    partnershipDeed: { type: DataTypes.STRING, allowNull: true, },
    formA: { type: DataTypes.STRING, allowNull: true, },
    formC: { type: DataTypes.STRING, allowNull: true, },
    consentForm: { type: DataTypes.STRING, allowNull: true, },
    landOwnership: { type: DataTypes.STRING, allowNull: true, },
    leaseAgreement: { type: DataTypes.STRING, allowNull: true, },
    correspondenceNote: { type: DataTypes.STRING, allowNull: true, },
    buildingOwnershipFeeReceipt: { type: DataTypes.STRING, allowNull: true, },

    version: { 
      type: DataTypes.INTEGER,
    },

    createdAt: { type: DataTypes.DATE, allowNull: true, },
    updatedAt: { type: DataTypes.DATE, allowNull: true, },
});

  return DocumentLe2;
};