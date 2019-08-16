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

  getKeys(response) {
    return (response && response.length > 0) ?  Object.keys(response[0]) : [];
  }

  
  makeString(arr) {
    if (arr.length === 1) return arr[0];
    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];
    return firsts.join(', ') + ' and ' + last;
  }


  ngOnInit() {
    this.getResponses();
  }

}
