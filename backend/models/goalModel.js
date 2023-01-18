const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // which model does this objectId refer to
      ref: 'User',
    },
    text: {
      type: String,
      require: [true, 'Please add a text value'],
    },
  },
  // create createdAt and updatedAt field automatically
  { timestamps: true }
);

module.exports = mongoose.model('Goal', goalSchema);
