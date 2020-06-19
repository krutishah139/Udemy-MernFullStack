const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const { Schema } = mongoose; This is equivalent to the statement above.

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
