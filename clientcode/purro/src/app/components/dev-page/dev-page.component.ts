import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';
import { DataService} from '../../services/data.service';
import { UtilService} from '../../services/util.service';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {

  tableViewOption = "";
  tableObjectArray = [];

  surveyResponseList: Response[] = [];
  responseFields: String[];

  constructor( private dataService: DataService, private utilService: UtilService) {}
/*
  getResponses(){
    this.dataService.getSurveyResponses()
    .subscribe(responses=>{
      this.surveyResponseList = responses;
      console.log('data from dataService: ' + this.surveyResponseList[0].FIRST_NAME);
      this.responseFields = this.utilService.getFieldNames(this.surveyResponseList[0], this.priorityResponseFields);
    })
  };*/
  
  getNewResponses(){
    this.dataService.getSurveyResponses()
    .subscribe(responses=>{
      let tableObject = {};
      let priorityResponseFields = ["FIRST_NAME", "LAST_NAME","EMAIL", "_id"];
      tableObject["name"] = "user_survey_responses";
      tableObject["data"] = this.utilService.transformData(responses, "IDEAL_COMPANY_SIZE");
      tableObject["fields"] = this.utilService.getFieldNames(responses[0], priorityResponseFields);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject);
    })
  };

  getRefIndustries(){
    this.dataService.getRefIndustries()
    .subscribe(industries=>{
      let tableObject = {};
      tableObject["name"] = "ref_industries";
      tableObject["data"] = this.utilService.transformData(industries,"");
      tableObject["fields"] = this.utilService.getFieldNames(industries[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject);
    })
  };

  getRefRoles(){
    this.dataService.getRefRoles()
    .subscribe(roles=>{
      let tableObject = {};
      tableObject["name"] = "ref_roles";
      tableObject["data"] = this.utilService.transformData(roles,"");
      tableObject["fields"] = this.utilService.getFieldNames(roles[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject);    })
  };

  getRefCompanies(){
    this.dataService.getRefCompanies()
    .subscribe(companies=>{
      let tableObject = {};
      tableObject["name"] = "ref_companies";
      tableObject["data"] = this.utilService.transformData(companies,"");
      tableObject["fields"] = this.utilService.getFieldNames(companies[0], []);
      
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject);    
    })
  };

  getRefExperiences(){
    this.dataService.getRefExperiences()
    .subscribe(experiences=>{
      let tableObject = {};
      tableObject["name"] = "ref_experiences";
      tableObject["data"] = this.utilService.transformData(experiences,"");
      tableObject["fields"] = this.utilService.getFieldNames(experiences[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject);
    })
  };

  getRefLocations(){
    this.dataService.getRefLocations()
    .subscribe(locations=>{
      let tableObject = {};
      tableObject["name"] = "ref_locations";
      tableObject["data"] = this.utilService.transformData(locations,"");
      tableObject["fields"] = this.utilService.getFieldNames(locations[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject);    
    })
  };

  getRefSkills(){
    this.dataService.getRefSkills()
    .subscribe(skills=>{
      let tableObject = {};
      tableObject["name"] = "ref_skills";
      tableObject["data"] = this.utilService.transformData(skills,"");
      tableObject["fields"] = this.utilService.getFieldNames(skills[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject); 
    })
  };
  
  getRefTools(){
    this.dataService.getRefTools()
    .subscribe(tools=>{
      let tableObject = {};
      tableObject["name"] = "ref_tools";
      tableObject["data"] = this.utilService.transformData(tools,"");
      tableObject["fields"] = this.utilService.getFieldNames(tools[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject);    
    })
  };

  getUserDemographics(){
    this.dataService.getUserDemoInfo()
    .subscribe(info=>{
      let tableObject = {};
      tableObject["name"] = "user_demo_info";
      tableObject["data"] = this.utilService.transformData(info,"");
      tableObject["fields"] = this.utilService.getFieldNames(info[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject); 
    })
  };

  getUserInterests(){
    this.dataService.getUserInterests()
    .subscribe(interests=>{
      let tableObject = {};
      tableObject["name"] = "user_interests";
      tableObject["data"] = this.utilService.transformData(interests, "");
      tableObject["fields"] = this.utilService.getFieldNames(interests[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject); 
    })
  };
  
  getUserSkills(){
    this.dataService.getUserSkills()
    .subscribe(skills=>{
      let tableObject = {};
      tableObject["name"] = "user_skills";
      tableObject["data"] = this.utilService.transformData(skills,"");
      tableObject["fields"] = this.utilService.getFieldNames(skills[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject); 
        })
  };

 getUserValues(){
    this.dataService.getUserValues()
    .subscribe(values=>{
      let tableObject = {};
      tableObject["name"] = "user_values";
      tableObject["data"] = this.utilService.transformData(values,"");
      tableObject["fields"] = this.utilService.getFieldNames(values[0], []);
     
      console.log('table Object from dataService: ' + tableObject);
      this.tableObjectArray.push(tableObject); 
    })
  };
  
  viewReferenceData(){
    this.getRefIndustries();
    this.getRefCompanies();
    this.getRefExperiences();
    this.getRefLocations();
    this.getRefRoles(); 
    this.getRefSkills(); 
    this.getRefTools();
  };

  viewUserData(){
    this.getNewResponses();
    this.getUserDemographics();
    this.getUserInterests();
    this.getUserSkills();
    this.getUserValues();
  };

  onTableViewSelection(view){
    this.tableObjectArray = [];
    if(view=="Ref"){
      this.viewReferenceData();
    }
    if(view=="User"){
      this.viewUserData();
    }
    if(view=="All"){
      this.viewUserData();
      this.viewReferenceData();
    }
  }

  ngOnInit() {
   // this.getResponses();
  }

}
