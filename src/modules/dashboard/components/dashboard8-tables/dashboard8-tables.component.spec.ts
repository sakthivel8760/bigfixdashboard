import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard8TablesComponent } from './dashboard8-tables.component';

describe('Dashboard8TablesComponent', () => {
  let component: Dashboard8TablesComponent;
  let fixture: ComponentFixture<Dashboard8TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard8TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard8TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
