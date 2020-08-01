import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard2TablesComponent } from './dashboard2-tables.component';

describe('Dashboard2TablesComponent', () => {
  let component: Dashboard2TablesComponent;
  let fixture: ComponentFixture<Dashboard2TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard2TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard2TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
