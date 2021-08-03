const router = require('express').Router();
const {Project} = require('../../models');

// Create a project
router.post('/', async (req, res) => {
    try {
        const newProject = await Project.create(req.body);
        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update a project
router.put('/:id', async (req,res) => {
    try {
        const projectData = await Project.update(
            {
                name: req.body.name,
                description: req.body.description,
                rolesNeeded: req.body.rolesNeeded,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!projectData) {
            res.status(400).json({message: 'No project found with that id.'});
            return;
        }
        res.status(200).json(projectData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    try {
        const projectData = await Project.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!projectData) {
            res.status(400).json({message: 'No project found with that id.'});
            return;
        }
        res.status(400).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});