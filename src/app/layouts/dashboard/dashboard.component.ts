import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  salutation!: string;
  time = new Date();
  todayDate = new Date();
  intervalId: any | undefined;
  constructor() {}
  loggedInUser: any = JSON.parse(sessionStorage.getItem('loggedInUser') || '');

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    this.salutation = this.GetSalutation();
  }

  GetSalutation(): string {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      return 'Good morning';
    } else if (curHr < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
