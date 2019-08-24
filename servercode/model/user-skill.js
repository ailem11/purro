const mongoose = require('mongoose');
const userSkillSchema = mongoose.Schema({

}, {strict: false});

const  UserSkill = module.exports = mongoose.model('user_skills', userSkillSchema);
