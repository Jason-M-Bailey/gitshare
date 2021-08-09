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

module.exports = { User, Project, Applicant };
