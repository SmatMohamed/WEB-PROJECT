import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Observable, Subject, throwError } from 'rxjs';

import { User } from 'src/app/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  
  
  authToken:any;
  user:any;
  private authStatusListener = new Subject<boolean>();
  private typeListener = new Subject<string>();
  constructor(private httpClient: HttpClient ,private router:Router,private http:HttpClient) { }


  signup(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/signup`, user).pipe(
      //  catchError(this.handleError)
    )
  }

  signin(user: User): Observable<any> {

    return this.httpClient.post(`${this.API_URL}/auth/login`, user).pipe(
       // catchError(this.handleError)
    )
  }
  
  login(user: User){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    this.httpClient.post<any>('http://localhost:3000/api/auth/login',user,{headers:headers}).subscribe(res => {
      if(res.status == 200) {
      
        this.authStatusListener.next(true);
        this.typeListener.next(res.user.type);
      }else{
        // this.flashMessagesService.show('Something went wrong',{cssClass:'alert-danger'});
      }
    },err => {
      // this.flashMessagesService.show('Email or Password Incorrect ! ',{cssClass:'alert-danger'});
    }
      );
  }
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
