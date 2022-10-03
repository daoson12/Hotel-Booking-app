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
  constructor(
    private hotelService: HotelService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.hotelService.getAllLocation().subscribe((res: any) => {

      this.hotelLocationList = res.body;
      console.log(this.hotelLocationList);
    });
  }
}
