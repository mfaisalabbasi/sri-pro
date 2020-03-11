const mongoose = require('mongoose');

const VidScema = mongoose.Schema({
  video: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Videos = mongoose.model('video', VidScema);
