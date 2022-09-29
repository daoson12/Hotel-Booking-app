import { SessionService } from './../../security/helper/session.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: any = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  public pieChartLabels = ['Profit Q1', 'Profit Q2', 'Profit Q3', 'Profit Q4'];
  public pieChartData = [83, 91, 107, 73];
  public pieChartType: any = 'pie';

  public lineChartLabels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
  public lineChartType: any = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [75, 49, 89, 31, 86, 35, 50], label: 'Series A' },
    { data: [48, 38, 65, 39, 66, 17, 80], label: 'Series B' }
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
