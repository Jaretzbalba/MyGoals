const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController');

// @desc    More concise/clean code for routes
router.route('/').get(getGoals).post(setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

// @desc    More readable code for routes
// router.get('/', getGoals);

// router.post('/', setGoal);

// router.put('/:id', updateGoal);

// router.delete('/:id', deleteGoal);

module.exports = router;
