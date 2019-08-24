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

  displayStringArr(arr) {
    if (!Array.isArray(arr)) { //if not an array, return as is
      return arr;
    }
    if (!(arr.length)) { //if array is empty, return empty string
      return ["-"];
    }
    if (arr.length === 1) { //if an array with one entry, return entry
      return arr[0];
    }
    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];
    return firsts.join(', ') + ' and ' + last;
  }
 /* 
  displayStringArrays(strArr) {
    if (!(str.length)) { //if array is empty, return empty string
      return "-";
    }
    var innerStr = str;
    if (Array.isArray(str)&&str.length === 1) { //if not an array, return as is
       innerStr = str[0];
    }
    var commaCount = innerStr.split(",").length - 1;
    if(commaCount>1){
      var lastComma = innerStr.lastIndexOf(",");
      var newStr = innerStr.slice(0, lastComma) + " and "+ innerStr.slice(lastComma+1, innerStr.length);
      return newStr;
    }
    return innerStr;
  }*/
  transformFields(field){
    if(field ==(undefined||null)){
      return;
    }
    if(Array.isArray(field)){
      //Assumption - the only Arrays passed from the DB come with 1 entry of comma delimited strings
      if(!field.length||!field[0].length){ //empty case
        return ["-"];
      }
      else{
        return field[0].split(",")? field[0].split(","):field;
      }
    }

    if(typeof field =="string"){
      if(!field.length){
        return "-";
      }
      return field.split(",")? field.split(","):field;
    }
  }

  transformData(responseList, excludedField){
    var index, arrLength;
    var newArr = []; 
    for (index = 0, arrLength = responseList.length; index < arrLength; ++index) {  
      var newResponse = responseList[index];
      Object.keys(newResponse).forEach((field)=> {
        if(field!=excludedField){
          newResponse[field] = this.transformFields(newResponse[field]);
        }
      });
      responseList[index] =  newResponse;
    }
    return responseList;
  }
}
