const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // madeBy: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    role_needed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // peopleApplied: {
    //   type: DataTypes.STRING,
    // },
    // creator_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "creator",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "project",
  }
);

// Project.associate = function (models) {
//   Projects.belongsToMany(models.user_id, {
//     through: models.Applicant,
//     as: "applicant",
//     foreignKey: "project_id",
//   });
// };
// return Project;

module.exports = Project;
