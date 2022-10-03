import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  Url: string = environment.baseUrl + 'api/';
  constructor(private http: HttpClient) {}


  getAllLocation(){
    return this.http.get(this.Url + "location/getAll",{observe:"response"} )
  }
}
