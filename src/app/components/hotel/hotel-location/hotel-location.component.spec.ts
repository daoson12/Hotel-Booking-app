/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HotelLocationComponent } from './hotel-location.component';

describe('HotelLocationComponent', () => {
  let component: HotelLocationComponent;
  let fixture: ComponentFixture<HotelLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
