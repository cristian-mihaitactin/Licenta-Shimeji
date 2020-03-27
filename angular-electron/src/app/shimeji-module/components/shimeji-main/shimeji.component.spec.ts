/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShimejiComponent } from './shimeji.component';

describe('ShimejiComponent', () => {
  let component: ShimejiComponent;
  let fixture: ComponentFixture<ShimejiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShimejiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShimejiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
