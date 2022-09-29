import { SessionService } from './../../security/helper/session.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {

  }

  log0ut(){
    this.sessionService.logout()
    this.router.navigate(['/sign-in'])

  }
}
