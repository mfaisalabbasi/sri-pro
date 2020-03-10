const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
  Infographic: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Infographics = mongoose.model('infographic', infoSchema);
