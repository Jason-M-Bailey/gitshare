const router = require('express').Router();
const {User} = require('../../models');

// Create a user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!userData) {
            res.status(400).json({message: 'Wrong email or password. Please try again.'});
            return;
        }

        const validPw = await userData.checkPassword(req.body.password);

        if (!validPw) {
            res.status(400).json({message: 'Wrong email or password. Please try again.'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json({user: userData, message: 'You are logged in.'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Logout


// Update a user
router.put('/edit/:id', async (req, res) => {
    try {
        const userData = await User.update(
            {
                github: req.body.github,
                linkedin: req.body.linkedin,
            }, 
            {
                where: {
                    id: req.params.id,
            },
        });
        if (!userData[0]) {
            res.status(400).json({message: 'No user with that id.'});
            return;
        }
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;