const router = require("express").Router();
const { Project } = require("../../models");
const withAuth = require("../../utils/auth");

// Create a project
router.post("/", withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/projects", async (req, res) => {
  Project.findAll({
    include: [
      {
        model: User,
        attributes: ["name"],
      },
    ],
  }).then((data) => res.json(data));
});

// Update a project
router.put('/:id', async (req,res) => {
  try {
      const projectData = await Project.update(req.body, {
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
          });
      if (!projectData) {
          res.status(400).json({message: 'No project found with that id.'});
      } else {
        res.status(200).json([{message: 'project updated'}, projectData[0]]);
      }
  } catch (err) {
      res.status(400).json(err);
  }
});

// Delete a project
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!projectData) {
      res.status(400).json({ message: "No project found with that id." });
      return;
    }
    res.status(400).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
