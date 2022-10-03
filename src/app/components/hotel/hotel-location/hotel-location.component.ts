import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from './../../../security/helper/session.service';
import { HotelService } from './../hotel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-location',
  templateUrl: './hotel-location.component.html',
  styleUrls: ['./hotel-location.component.css'],
})
export class HotelLocationComponent implements OnInit {
  hotelLocationList:  any =[];
  locationForm: any = FormGroup;
  config!: { itemsPerPage: number; currentPage: number; totalItems: any; };
  searchfilter!:any;
  constructor(
    private hotelService: HotelService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.locationForm = this.fb.group({
      name: ['', Validators.required],
    });

    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.hotelLocationList.length
    };
    this.getAllLocation()
  }


  getAllLocation(){
    this.hotelService.getAllLocation().subscribe((res: any) => {
      this.hotelLocationList = res.body;
      console.log(this.hotelLocationList);
    });
  }

  addLocation() {
    this.hotelService.createLocation(this.locationForm.value).subscribe(
      (res:any)=>{
        console.log(res);
        this.getAllLocation()
      }
    )
  }

  pageChanged(event:any){
    this.config.currentPage = event;
  }
}
