import { Component } from '@angular/core';
import { DataServeService, StudentDataAuth } from '../service/data-serve.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-work',
  templateUrl: './http-work.component.html',
  styleUrls: ['./http-work.component.scss']
})
export class HttpWorkComponent {

  allDatas:Array<StudentDataAuth> = new Array<StudentDataAuth>;

  getStudents?:StudentDataAuth;

  toggleOnOff = true;
  
  constructor(private _studentService : DataServeService){}
  
  ngOnInit(): void {
    this.getStudents = new StudentDataAuth;
    this.getAllDatas();
  }

  getAllDatas(){
    this._studentService.getData().subscribe({
      next:(res:any)=>{
        this.allDatas = res;
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      },
    })
  }

  addDatas(data:StudentDataAuth){
    this._studentService.addData(data).subscribe({
      next:(res)=>{
        console.log(res);
        this.getAllDatas();
        this.getStudents = new StudentDataAuth;
      },
      error:(err)=>{
        switch (err.status) {
          case 401:    
            console.log('401 Unauthorized error');
            break;
          case 403:     
            console.log('403 Forbidden error');
            break;
          case 404:    
            console.log('Your Link is Wrong!!');
            break;
      }
      },
    })
  }

  fillDatas(data:StudentDataAuth){
    this.getStudents = data;
    this.toggleOnOff = false;
  }

  updateDatas(data:StudentDataAuth){
    this._studentService.updateData(data).subscribe({
      next:(res)=>{
        console.log(res);
        this.getAllDatas();
        this.getStudents = new StudentDataAuth;
        this.toggleOnOff = true;
      },
      error:(err)=>{
        console.log(err);
      },
    })
  }

  cancelDatas(){
    this.getAllDatas();
    this.getStudents = new StudentDataAuth;
    this.toggleOnOff = true;
  }

  deleteDatas(data:StudentDataAuth){
    this._studentService.deleteData(data).subscribe({
      next:(res)=>{
        console.log(res);
        this.getAllDatas();
      },
      error:(err)=>{
        console.log(err);
      },
    })
  }

}
