const sequelize = require("../config/connection");
const { User, Project, Applicant } = require("../models");

const userData = require("./userData.json");
const projectData = require("./projectData.json");
const applyData = require("./applyData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(users);
  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const apply = await Applicant.bulkCreate(applyData);
  console.log(apply);
  process.exit(0);
};

seedDatabase();
