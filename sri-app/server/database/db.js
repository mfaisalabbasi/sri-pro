const mongoose = require('mongoose');

const db = async () => {
  try {
    //Database connection using mongoose.
    const mongoUri =
      'mongodb+srv://sri:sri123@sri-app-vhr4m.mongodb.net/test?retryWrites=true&w=majority';
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    const connection = mongoose.connection;
    connection.once('open', () => console.log('Connection Established'));
  } catch (error) {
    console.log('Database connection failed', error);
  }
};
module.exports = db;
