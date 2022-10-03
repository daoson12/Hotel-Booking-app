import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  Url: string = environment.baseUrl + 'api/';
  constructor(private http: HttpClient) {}



//Location
  getAllLocation(){
    return this.http.get(this.Url + "location/getAll",{observe:"response"} )
  }

  createLocation(value:any){
    return this.http.post(this.Url +"location/add", value)
  }

  deleteLocation(name:any){
    return this.http.delete(`${this.Url}location/delete/${name}`)
  }
//location


}
