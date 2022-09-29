import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  salutation!: string;

  constructor() { }
  loggedInUser: any = JSON.parse(sessionStorage.getItem('loggedInUser')||'');

  ngOnInit() {
    this.salutation=this.GetSalutation()
  }

  GetSalutation():string {
    var today = new Date()
    var curHr = today.getHours()
    if (curHr < 12) {
      return 'Good morning';
    } else if (curHr < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

}
