const router = require('express').Router();
const {Project, User} = require('../models');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const projects = projectData.map((project) => project.get({plain: true}));

    } catch (err) {
        res.status(500).json(err);
    }
});
// Get one project

module.exports = router;