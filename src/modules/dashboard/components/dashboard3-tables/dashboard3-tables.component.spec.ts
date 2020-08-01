import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard3TablesComponent } from './dashboard3-tables.component';

describe('Dashboard3TablesComponent', () => {
  let component: Dashboard3TablesComponent;
  let fixture: ComponentFixture<Dashboard3TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard3TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard3TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
