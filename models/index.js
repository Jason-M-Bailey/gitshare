const User = require("./User");
const Project = require("./Project");
const Applicant = require("./Applicant");

User.belongsToMany(Project, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Applicant,
    unique: false,
  },
});

Project.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Applicant,
    unique: false,
  },
});

// User.hasMany(Project, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// // });

// Applicant.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Applicant.belongsTo(Project, {
//   foreignKey: "project_id",
// });

// Applicant.belongsTo(project);
// Project.hasMany(User, { through: Applicant });

// Applicant.belongsTo(user);
// User.hasMany(Project, { through: Applicant });

// ("use strict");
// const sequelize = require("./sequelize_index").sequelize;
// const User = require("./user");
// const Client = require("./project");

// User.hasMany(Project);
// Project.belongsTo(User);

// sequelize.sync({ force: false }).then(function () {
//   console.log("Database Configured");
// });

module.exports = { User, Project, Applicant };
