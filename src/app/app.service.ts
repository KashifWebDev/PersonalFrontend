import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {loginRequest, loginResponse, User} from "./dataTypes.interface";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private localStorageUserVariable: string = 'userData';
  public currentUser: User = null;
  private authToken: string = '';

  constructor(private http: HttpClient) {
    if(this.isLoggedIn()){
      this.currentUser = JSON.parse(localStorage.getItem('userData'));
      this.authToken = localStorage.getItem('token');
    }
  }

  login(credentials: loginRequest): Observable<loginResponse>{
    return this.http.post<loginResponse>(environment.backendURI+'/auth/login',
      credentials
    );
  }

  setSession(currentUser: User, token: string){
    localStorage.setItem(this.localStorageUserVariable, JSON.stringify(currentUser));
    localStorage.setItem('token', token);
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  deleteSession(){
    localStorage.removeItem(this.localStorageUserVariable);
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    return localStorage.getItem(this.localStorageUserVariable) !== null && localStorage.getItem('token') !== null;
  }

  HTTPError(err: HttpErrorResponse){
    console.error(err);
    Swal.fire({
      title: err.statusText,
      text: err.message,
      icon: 'error',
      confirmButtonText: 'Close'
    });
  }
}
