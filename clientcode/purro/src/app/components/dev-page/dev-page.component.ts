import { Component, OnInit } from '@angular/core';
import { Response } from '../../models/response';
import { DataService} from '../../services/data.service';

@Component({
  selector: 'app-dev-page',
  templateUrl: './dev-page.component.html',
  styleUrls: ['./dev-page.component.scss']
})
export class DevPageComponent implements OnInit {

  surveyResponseList: Response[] = [];
 // surveyResponse: Response = {FIRST_NAME:'', LAST_NAME:'', EMAIL:''};
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


  ngOnInit() {
    this.getResponses();
  }

}
