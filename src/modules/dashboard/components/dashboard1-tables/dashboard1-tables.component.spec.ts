import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard1TablesComponent } from './dashboard1-tables.component';

describe('Dashboard1TablesComponent', () => {
  let component: Dashboard1TablesComponent;
  let fixture: ComponentFixture<Dashboard1TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard1TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard1TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
