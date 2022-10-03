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
  hotelLocationList: any;
  locationForm: any = FormGroup;

  constructor(
    private hotelService: HotelService,
    private sessionService: SessionService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.locationForm = this.fb.group({
      name: ['', Validators.required],
    });

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
}
