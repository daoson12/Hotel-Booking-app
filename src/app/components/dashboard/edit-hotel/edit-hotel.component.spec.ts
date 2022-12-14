/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditHotelComponent } from './edit-hotel.component';

describe('EditHotelComponent', () => {
  let component: EditHotelComponent;
  let fixture: ComponentFixture<EditHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
