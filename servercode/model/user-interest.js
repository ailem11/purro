const mongoose = require('mongoose');

const userInterestSchema = mongoose.Schema({}, {strict: false});

const UserInterest = module.exports = mongoose.model('user_interests', userInterestSchema);