import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /* 
  * Fn - Gets DB objects field names as a prioritized order
  */
  getFieldNames(responseObj, priorityFields) {
    if(!responseObj){
      return [];
    }
    else{
      var allFieldsArr = Object.keys(responseObj);
      if(!priorityFields.length){ //no specified priority
        return allFieldsArr;
      }
      else{ //prioritize list        
        for( var i = 0; i < allFieldsArr.length; i++){ 
          if (priorityFields.includes(allFieldsArr[i])) {
            allFieldsArr.splice(i, 1); 
          }
        }
        //join priority list and all other fields
        return priorityFields.concat(allFieldsArr);
      }
    }
  }

  makeString(arr) {
    if (!Array.isArray(arr)) { //if not an array, return as is
      return arr;
    }
    if (!(arr.length)) { //if array is empty, return empty string
      return "-";
    }
    if (arr.length === 1) { //if an array with one entry, return entry
      return arr[0].length ? arr[0]: "-";
    }
    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];
    return firsts.join(', ') + ' and ' + last;
  }
}
