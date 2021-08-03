const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

// Prefix all routes defined in `userRoutes.js` with `/users`
router.use('/users', userRoutes);

// Prefix all routes defined in `projectRoutes.js` with `/projects`
router.use('/projects', projectRoutes);

module.exports = router;