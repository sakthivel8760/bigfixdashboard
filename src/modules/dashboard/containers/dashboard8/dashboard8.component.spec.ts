import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard8Component } from './dashboard8.component';

describe('Dashboard8Component', () => {
  let component: Dashboard8Component;
  let fixture: ComponentFixture<Dashboard8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
