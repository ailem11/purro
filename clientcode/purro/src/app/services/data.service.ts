import { Injectable } from '@angular/core';
import{ Http, Response, Headers } from '@angular/http';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: Http) { }

getSurveyResponse(){
  return this.http.get('api/first-response')
  .pipe(map(res => res.json()));
};  

getSurveyResponses(){
  return this.http.get('api/responses')
  .pipe(map(res => res.json()));
};

addSurveyResponses(newResponse){
  let headers = new Headers();
  headers.append('content-Type', 'application/json');
  return this.http.post('api/response', newResponse, {headers: headers})
  .pipe(map(res => res.json()));
};

getIndustries(){
  return this.http.get('api/industries')
  .pipe(map(res => res.json()));
};


getCompanies(){
  return this.http.get('api/companies')
  .pipe(map(res => res.json()));
};
}
