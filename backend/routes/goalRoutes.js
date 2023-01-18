const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');
const { protect } = require('../middleware/authMiddleware');

// @desc    More concise/clean code for routes
router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal);

// @desc    More readable code for routes
// router.get('/', protect, getGoals);

// router.post('/', protect, setGoal);

// router.put('/:id', protect, updateGoal);

// router.delete('/:id', protect, deleteGoal);

module.exports = router;
