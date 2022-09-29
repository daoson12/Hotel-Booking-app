import { SessionService } from './../../security/helper/session.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  constructor(private router: Router, private sessionService: SessionService) { }

  ngOnInit() {

  }

  log0ut(){
    this.sessionService.logout()
    this.router.navigate(['/sign-in'])

  }

}
