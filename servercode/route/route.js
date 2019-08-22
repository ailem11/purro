var express = require('express');
var router = express.Router();
const Response = require('../model/surveyResponse');

router.get('/responses', (req,res,next)=>{
    Response.find(function(err,responses){
        if(err){
            res.json(err);
        }
        else{
            res.json(responses);
        }
    })
});

router.get('/first-response', (req,res,next)=>{
    Response.findOne(function(err,response){
        if(err){
            res.json(err);
        }
        else{
            res.json(response);
        }
    })
});

router.get('/companies', (req,res,next)=>{
    Response.find(function(err,companies){
        if(err){
            res.json(err);
        }
        else{
            res.json(companies);
        }
    })
});

router.get('/industries', (req,res,next)=>{
    Response.find(function(err,industries){
        if(err){
            res.json(err);
        }
        else{
            res.json(industries);
        }
    })
});

router.post('/response', (req,res,next)=>{
    let newSurveyResponse = new Response({
        FIRST_NAME:req.body.FIRST_NAME,
        LAST_NAME:req.body.LAST_NAME,
        EMAIL:req.body.EMAIL,
        SCHOOL:req.body.SCHOOL,
        DEGREE:req.body.DEGREE,
        ANTICIPATED_GRAD_MONTH:req.body.ANTICIPATED_GRAD_MONTH,
        ANTICIPATED_GRAD_YEAR:req.body.ANTICIPATED_GRAD_YEAR,
        MAJOR:req.body.MAJOR,
        MINOR:req.body.MINOR,
        GENDER:req.body.GENDER,
        IS_LGBTQ:req.body.IS_LGBTQ,
        IS_MILITARY_VET:req.body.IS_MILITARY_VET,
        HAS_DISABILITY:req.body.HAS_DISABILITY,
        SKILLS:req.body.SKILLS,
        CRM_SYSTEMS:req.body.CRM_SYSTEMS,
        DATA_VIS_BUSINESS_INTELLIGENCE_SYSTEMS:req.body.DATA_VIS_BUSINESS_INTELLIGENCE_SYSTEMS,
        ERP_SYSTEMS:req.body.ERP_SYSTEMS,
        MKT_TOOLS:req.body.MKT_TOOLS,
        PROJ_MGT_TOOLS:req.body.PROJ_MGT_TOOLS,
        SVC_TICKETING_TOOLS:req.body.SVC_TICKETING_TOOLS,
        TECHNICAL_TOOLS:req.body.TECHNICAL_TOOLS,
        UI_UX_TOOLS:req.body.UI_UX_TOOLS,
        VIDEO_PIC_EDIT_TOOLS:req.body.VIDEO_PIC_EDIT_TOOLS,
        ASPIRATIONAL_HARD_SKILLS:req.body.ASPIRATIONAL_HARD_SKILLS,
        ASPIRATIONAL_SOFT_SKILLS:req.body.ASPIRATIONAL_SOFT_SKILLS,
        ASPIRATIONAL_EXPERIENCES:req.body.ASPIRATIONAL_EXPERIENCES,
        FREE_TIME_ACTIVITIES:req.body.FREE_TIME_ACTIVITIES,
        IDEAL_COMPANY_CULTURE:req.body.IDEAL_COMPANY_CULTURE,
        IDEAL_WORK_STYLE:req.body.IDEAL_WORK_STYLE,
        IDEAL_WORK_ENV:req.body.IDEAL_WORK_ENV,
        IDEAL_COMPANY_VALUES:req.body.IDEAL_COMPANY_VALUES,
        IDEAL_INDUSTRIES:req.body.IDEAL_INDUSTRIES,
        IDEAL_COMPANY_STAGE:req.body.IDEAL_COMPANY_STAGE,
        IDEAL_JOB_FUNCTIONS:req.body.IDEAL_JOB_FUNCTIONS,
        IDEAL_LIVING_REGIONS:req.body.IDEAL_LIVING_REGIONS,
        IDEAL_WORK_LOCATION:req.body.IDEAL_WORK_LOCATION,
        TIME_SUBMITTED:req.body.TIME_SUBMITTED,
        Token:req.body.Token
    });
    newSurveyResponse.save((err,response)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'response has been added to DB'});
        }
    });
});

router.put('/response/:id', (req,res,next)=>{
    Response.findOneAndUpdate({_id:req.params.id},{
        $set:{
            FIRST_NAME:req.body.FIRST_NAME,
            LAST_NAME:req.body.LAST_NAME,
            EMAIL:req.body.EMAIL,
            SCHOOL:req.body.SCHOOL,
            DEGREE:req.body.DEGREE,
            ANTICIPATED_GRAD_MONTH:req.body.ANTICIPATED_GRAD_MONTH,
            ANTICIPATED_GRAD_YEAR:req.body.ANTICIPATED_GRAD_YEAR,
            MAJOR:req.body.MAJOR,
            MINOR:req.body.MINOR,
            GENDER:req.body.GENDER,
            IS_LGBTQ:req.body.IS_LGBTQ,
            IS_MILITARY_VET:req.body.IS_MILITARY_VET,
            HAS_DISABILITY:req.body.HAS_DISABILITY,
            SKILLS:req.body.SKILLS,
            CRM_SYSTEMS:req.body.CRM_SYSTEMS,
            DATA_VIS_BUSINESS_INTELLIGENCE_SYSTEMS:req.body.DATA_VIS_BUSINESS_INTELLIGENCE_SYSTEMS,
            ERP_SYSTEMS:req.body.ERP_SYSTEMS,
            MKT_TOOLS:req.body.MKT_TOOLS,
            PROJ_MGT_TOOLS:req.body.PROJ_MGT_TOOLS,
            SVC_TICKETING_TOOLS:req.body.SVC_TICKETING_TOOLS,
            TECHNICAL_TOOLS:req.body.TECHNICAL_TOOLS,
            UI_UX_TOOLS:req.body.UI_UX_TOOLS,
            VIDEO_PIC_EDIT_TOOLS:req.body.VIDEO_PIC_EDIT_TOOLS,
            ASPIRATIONAL_HARD_SKILLS:req.body.ASPIRATIONAL_HARD_SKILLS,
            ASPIRATIONAL_SOFT_SKILLS:req.body.ASPIRATIONAL_SOFT_SKILLS,
            ASPIRATIONAL_EXPERIENCES:req.body.ASPIRATIONAL_EXPERIENCES,
            FREE_TIME_ACTIVITIES:req.body.FREE_TIME_ACTIVITIES,
            IDEAL_COMPANY_CULTURE:req.body.IDEAL_COMPANY_CULTURE,
            IDEAL_WORK_STYLE:req.body.IDEAL_WORK_STYLE,
            IDEAL_WORK_ENV:req.body.IDEAL_WORK_ENV,
            IDEAL_COMPANY_VALUES:req.body.IDEAL_COMPANY_VALUES,
            IDEAL_INDUSTRIES:req.body.IDEAL_INDUSTRIES,
            IDEAL_COMPANY_STAGE:req.body.IDEAL_COMPANY_STAGE,
            IDEAL_JOB_FUNCTIONS:req.body.IDEAL_JOB_FUNCTIONS,
            IDEAL_LIVING_REGIONS:req.body.IDEAL_LIVING_REGIONS,
            IDEAL_WORK_LOCATION:req.body.IDEAL_WORK_LOCATION,
            TIME_SUBMITTED:req.body.TIME_SUBMITTED,
            Token:req.body.Token
        }
    },
    function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

router.delete('/response/:id', (req,res,next)=>{
    Response.remove({_id:req.params.id}, function(err,result){
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});


module.exports = router;
