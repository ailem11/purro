const mongoose = require('mongoose');

const userDemoInfoSchema = mongoose.Schema({}, {strict: false});

const UserDemoInfo = module.exports = mongoose.model('user_demo_info', userDemoInfoSchema, 'user_demo_info');
