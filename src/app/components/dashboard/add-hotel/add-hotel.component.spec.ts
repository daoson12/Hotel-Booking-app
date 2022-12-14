/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddHotelComponent } from './add-hotel.component';

describe('AddHotelComponent', () => {
  let component: AddHotelComponent;
  let fixture: ComponentFixture<AddHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
