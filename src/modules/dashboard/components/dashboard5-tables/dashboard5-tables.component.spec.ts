import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard5TablesComponent } from './dashboard5-tables.component';

describe('Dashboard5TablesComponent', () => {
  let component: Dashboard5TablesComponent;
  let fixture: ComponentFixture<Dashboard5TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard5TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard5TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
