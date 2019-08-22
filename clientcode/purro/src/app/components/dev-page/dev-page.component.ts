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

  surveyResponseList: Response[] = [];
  priorityResponseFields = ["FIRST_NAME", "LAST_NAME","EMAIL", "_id"];
  responseFields: String[];
  
  industriesList: Response[] = [];
  priorityIndustryFields = [];
  industryFields: String[]; 


  companiesList: Response[] = [];
  priorityCompanyFields = [];
  companyFields: String[]; 

  constructor( private dataService: DataService, private utilService: UtilService) {}

  getResponses(){
    this.dataService.getSurveyResponses()
    .subscribe(responses=>{
      this.surveyResponseList = responses;
      console.log('data from dataService: ' + this.surveyResponseList[0].FIRST_NAME);
      this.responseFields = this.utilService.getFieldNames(this.surveyResponseList[0], this.priorityResponseFields);
    })
  };
  
  getIndustries(){
    this.dataService.getIndustries()
    .subscribe(industries=>{
      this.industriesList = industries;
      console.log('data from dataService: ' + this.industriesList[0]);
     // this.industryFields = this.utilService.getFieldNames(this.industriesList[0], this.priorityIndustryFields);
    })
  };

  getCompanies(){
    this.dataService.getCompanies()
    .subscribe(industries=>{
      this.companiesList = industries;
      console.log('data from dataService: ' + this.companiesList[0]);
     // this.companyFields = this.utilService.getFieldNames(this.companiesList[0], this.priorityCompanyFields);
    })
  };

  ngOnInit() {
    this.getResponses();
    this.getIndustries();
    this.getCompanies();
  }

}
