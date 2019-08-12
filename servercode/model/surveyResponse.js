const mongoose = require('mongoose');

const surveyResponseSchema = mongoose.Schema({
    /*_id: {
        primaryKey: true,
        type: String,
        required: false
    },*/
    FIRST_NAME: {
        type: String,
        required: true
    },
    LAST_NAME: {
        type: String,
        required: true
    },
    EMAIL: {
        key: true,
        type: String,
        required: true
    },
    SCHOOL: {
        type: String,
        required: false
    },
    DEGREE: {
        type: String,
        required: false
    },
    ANTICIPATED_GRAD_MONTH: {
        type: String,
        required: false
    },
    ANTICIPATED_GRAD_YEAR: {
        type: String,
        required: false
    },
    MAJOR: {
        type: Array,
        required: false
    },
    MINOR: {
        type: Array,
        required: false
    },
    GENDER:{
        type: String,
        required: false
    },
    RACE:{
        type: Array,
        required: false
    },
    IS_LGBTQ: {
        type: Boolean,
        required: false
    },
    IS_MILITARY_VET:{
        type: Boolean,
        required: false
    },
    HAS_DISABILITY:{
        type: Boolean,
        required: false
    },
    SKILLS:{
        type: Array,
        required: false
    },
    COLLAB_TOOLS:{
        type: Array,
        required: false
    },
    CRM_SYSTEMS:{
        type: Array,
        required: false
    },
    DATA_VIS_BUSINESS_INTELLIGENCE_SYSTEMS:{
        type: Array,
        required: false
    },
    ERP_SYSTEMS:{
        type: Array,
        required: false
    },
    MKT_TOOLS:{
        type: Array,
        required: false
    },
    PROJ_MGT_TOOLS:{
        type: Array,
        required: false
    },
    SVC_TICKETING_TOOLS:{
        type: Array,
        required: false
    },
    TECHNICAL_TOOLS:{
        type: Array,
        required: false
    },
    UI_UX_TOOLS:{
        type: Array,
        required: false
    },
    VIDEO_PIC_EDIT_TOOLS:{
        type: Array,
        required: false
    },
    ASPIRATIONAL_HARD_SKILLS:{
        type: Array,
        required: false
    },
    ASPIRATIONAL_SOFT_SKILLS:{
        type: Array,
        required: false
    },
    ASPIRATIONAL_EXPERIENCES:{
        type: Array,
        required: false
    },
    FREE_TIME_ACTIVITIES:{
        type: Array,
        required: false
    },
    IDEAL_COMPANY_CULTURE:{
        type: Array,
        required: false
    },
    IDEAL_WORK_STYLE:{
        type: Array,
        required: false
    },
    IDEAL_WORK_ENV:{
        type: Array,
        required: false
    },
    IDEAL_COMPANY_VALUES:{
        type: Array,
        required: false
    },
    IDEAL_INDUSTRIES:{
        type: Array,
        required: false
    },
    IDEAL_COMPANY_STAGE:{
        type: Array,
        required: false
    },
    IDEAL_JOB_FUNCTIONS:{
        type: Array,
        required: false
    },
    IDEAL_LIVING_REGIONS:{
        type: Array,
        required: false
    },
    IDEAL_WORK_LOCATION:{
        type: Array,
        required: false
    },
    TIME_SUBMITTED:{
        type: String,
        required: false
    },
    Token:{
        type: String,
        required: false
    },

});

const Response = module.exports = mongoose.model('survey_responses', surveyResponseSchema);