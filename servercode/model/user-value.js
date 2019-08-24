const mongoose = require('mongoose');
const userValueSchema = mongoose.Schema({}, {strict: false});

const UserValue = module.exports = mongoose.model('user_values', userValueSchema);
