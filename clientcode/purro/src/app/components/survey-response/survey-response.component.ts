import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';
import { DataService} from '../../services/data.service';
import { UtilService} from '../../services/util.service';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.scss']
})
export class SurveyResponseComponent implements OnInit {

  surveyResponseList: Response[] = [];
  surveyResponse: Response = {FIRST_NAME:'', LAST_NAME:'', EMAIL:''};
  responseIndex: number; responseListLength: number = 0;
  hasPrev: boolean = false; hasNext: boolean = false;
  hasResponseinDB: boolean = false;

  constructor( private dataService: DataService, private utilService: UtilService) {
   }

  getResponses(){
    this.dataService.getSurveyResponses()
    .subscribe(responses=>{
      this.surveyResponseList = responses;
      this.initCursor();
      console.log('data from dataService: ' + this.surveyResponseList[0].FIRST_NAME);
    })
  };
/*
  getResponse(){
    this.dataService.getSurveyResponse()
    .subscribe(response=>{
      this.surveyResponse = response;
      console.log('data from dataService: ' + this.surveyResponse.FIRST_NAME);
    })
  };*/

  initCursor(){
    if(this.surveyResponseList && this.surveyResponseList.length){
      this.responseIndex = 0;
      this.surveyResponse = this.surveyResponseList[this.responseIndex];   
      this.responseListLength = this.surveyResponseList.length;
      this.hasResponseinDB = true;
      this.setCursor();    
    }
  }

  setCursor(){
    this.responseIndex < (this.responseListLength-1)? this.hasNext = true : this.hasNext = false;    
    this.responseIndex > 0? this.hasPrev = true : this.hasPrev = false;
  }
  
  goToPrevNextResponse(direction){
    if(direction == "right"){
      if(this.hasNext){
        this.responseIndex = this.responseIndex + 1;
        this.surveyResponse = this.surveyResponseList[this.responseIndex];
        this.setCursor();        
      }  
    }
    if(direction == "left"){
      if(this.hasPrev){
        this.responseIndex = this.responseIndex - 1;
        this.surveyResponse = this.surveyResponseList[this.responseIndex]; 
        this.setCursor();       
      }  
    }    
  }

  ngOnInit() {
    this.getResponses();
   
  }

}
