import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


Url: string = environment.baseUrl + 'api/user/';
constructor(private http:HttpClient) { }


loginIn(value:any):any{
  return this.http.post(this.Url + "login", value, {observe:"response"})
}


}
