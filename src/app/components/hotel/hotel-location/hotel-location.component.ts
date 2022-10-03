import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HotelService } from './../hotel.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs';
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
    private fb: FormBuilder,
    private toastr: ToastrService
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
    this.hotelService.createLocation(this.locationForm.value)
    .pipe(first())
    .subscribe({
      next:(res:any) =>{
        console.log(res);

        this.toastr.success(res.message)
      },
      error:(error)=>{
        this.toastr.error(error.error.message)
        console.log('error',error.error.message);
      },
      complete:()=>{}
    });
  }

  pageChanged(event:any){
    this.config.currentPage = event;
  }

  deleteLocation(name: string){
    this.hotelService.deleteLocation(name)
    .pipe(first())
    .subscribe({
      next:(res:any) =>{
        this.toastr.success(res.message)
      },
      error:(error)=>{
        this.toastr.error(error.error.message)

      },
      complete:()=>{}
    })

  }

}
