import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wellcome to bookaRoom-app';
  numberOfRooms =10
  hiddenRooms =false

  toggleButton(){
    this.hiddenRooms =!this.hiddenRooms
    console.log(this.hiddenRooms);


  }
}
