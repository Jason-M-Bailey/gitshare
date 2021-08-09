const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Applicant model
class Applicant extends Model {}

// create fields/columns for Applicant model
Applicant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    User_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
        unique: false,
      },
    },
    Project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "project",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "applicant",
  }
);

module.exports = Applicant;
