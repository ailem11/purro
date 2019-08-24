import { Injectable } from '@angular/core';
import{ Http, Response, Headers } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: Http) { }

getSurveyResponses(){
  return this.http.get('api/user-survey-responses')
  .pipe(map(res => res.json()));
};
/*
getUserSurveyResponse(userEmail){
  return this.http.get('api/user-survey-response')
  .pipe(map(res => res.json()));
};
*/
getUserDemoInfo(){
  return this.http.get('api/user-demo-info')
  .pipe(map(res => res.json()));
};  

getUserInterests(){
  return this.http.get('api/user-interests')
  .pipe(map(res => res.json()));
};  

getUserSkills(){
  return this.http.get('api/user-skills')
  .pipe(map(res => res.json()));
};  

getUserValues(){
  return this.http.get('api/user-values')
  .pipe(map(res => res.json()));
};  

addSurveyResponses(newResponse){
  let headers = new Headers();
  headers.append('content-Type', 'application/json');
  return this.http.post('api/response', newResponse, {headers: headers})
  .pipe(map(res => res.json()));
};

getRefCompanies(){
  return this.http.get('api/ref-companies')
  .pipe(map(res => res.json()));
};

getRefExperiences(){
  return this.http.get('api/ref-experiences')
  .pipe(map(res => res.json()));
};

getRefIndustries(){
  return this.http.get('api/ref-industries')
  .pipe(map(res => res.json()));
};

getRefLocations(){
  return this.http.get('api/ref-locations')
  .pipe(map(res => res.json()));
};
getRefRoles(){
  return this.http.get('api/ref-roles')
  .pipe(map(res => res.json()));
};
getRefSkills(){
  return this.http.get('api/ref-skills')
  .pipe(map(res => res.json()));
};
getRefTools(){
  return this.http.get('api/ref-tools')
  .pipe(map(res => res.json()));
};

}
