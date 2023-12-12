import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  baseUrl:string = 'http://localhost:3000/'
  httpHeaders:HttpHeaders = new HttpHeaders()
                                      .set('Content-type','application/json')
                                      .set('Authorization','Bearer-jkdfjkdjfdjfdjf') //if we set here every api will get the token



  getDataFromServer(endPoint:string){
    const url = this.baseUrl + endPoint;
    return this.http.get(url,{headers:this.httpHeaders})//.pipe(catchError(this.handlerErrorResponse));
  }

  saveDataToServer(endPoint:string,body:any){
    const url = this.baseUrl + endPoint;
    return this.http.post(url,body,{headers:this.httpHeaders})//.pipe(catchError(this.handlerErrorResponse));
  }

  updateDataToServer(endPoint:string,body:any){
    const url = this.baseUrl + endPoint;
    return this.http.put(url,body,{headers:this.httpHeaders})//.pipe(catchError(this.handlerErrorResponse));
  }

  deleteDataFromServer(endPoint:string){
    const url = this.baseUrl + endPoint;
    return this.http.delete(url,{headers : this.httpHeaders})//.pipe(catchError(this.handlerErrorResponse));
  }

  //Service level error handling
  //create a method to handle errors

  // handlerErrorResponse(error:HttpErrorResponse):any{
  //   if(error.error instanceof ErrorEvent){
  //     console.log("client Side Error",error.error.message)
  //   }else {
  //     console.log("Server side Error",error.message);
  //   }

  //   // alert("service is under maintenance")
  //   //used to throw a custom message error
  //   throwError("Unable to process your request Please try after some time...")
  // }
}
