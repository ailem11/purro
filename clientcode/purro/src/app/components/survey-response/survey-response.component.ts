import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-survey-response',
  templateUrl: './survey-response.component.html',
  styleUrls: ['./survey-response.component.scss']
})
export class SurveyResponseComponent implements OnInit {

  surveyResponseList: Response[] = [];
  surveyResponse: Response = {FIRST_NAME:'', LAST_NAME:'', EMAIL:''};
  //var responsecursor = 

  constructor( private dataService: DataService) {
   }

  getResponses(){
    this.dataService.getSurveyResponses()
    .subscribe(responses=>{
      this.surveyResponseList = responses;
      console.log('data from dataService: ' + this.surveyResponseList[0].FIRST_NAME);
    })
  };

  getResponse(){
    this.dataService.getSurveyResponse()
    .subscribe(response=>{
      this.surveyResponse = response;
      console.log('data from dataService: ' + this.surveyResponse.FIRST_NAME);
    })
  };

  ngOnInit() {
  }

}
