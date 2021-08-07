const User = require("./User");
const Project = require("./Project");
const Applicant = require("./Applicant");

User.hasMany(Project, Applicant, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Project.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Project, Applicant };
