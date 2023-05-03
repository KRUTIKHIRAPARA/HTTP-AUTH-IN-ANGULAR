import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServeService {

  jsonURL = 'http://localhost:3000/StudentData';
  dummyjsonURL = 'http://localhost:3000/StudentDatas';

  constructor(private _http:HttpClient) { }

  headerss = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': 'KRhirsdds@mpr',
    'timeOutSeconds': '7'
  });


  getData(){

    // Builtin Header
   


    // Custome Header
    this.headerss = this.headerss.set('main-id','kdsd78s7dsjn');
    
    const time = this.headerss.get('timeOutSeconds');

    var currTime =0;
    setInterval(() => {
      currTime += 1;
      console.log(currTime);
      if(time === currTime.toString()){
        this.headerss = this.headerss.set('Authorization','krutikhirapara');
        console.log(this.headerss.get('Authorization'));
      }
      else{
        console.log(this.headerss.get('Authorization'));
      }
    }, 1000);  

    return this._http.get(this.jsonURL,{responseType:'json', headers:this.headerss});
  }

  addData(body:StudentDataAuth){
    // return this._http.post(this.jsonURL,body);
    return this._http.post(this.jsonURL,{'student':body.student,'city':body.city});
  }

  updateData(body:StudentDataAuth){
    return this._http.put(this.jsonURL+'/'+body.id,body);
  }

  deleteData(body:StudentDataAuth){
    return this._http.delete(this.jsonURL+'/'+body.id);
  }


}

export class StudentDataAuth{
  id?:number;
  student?:string;
  city?:string;
}
