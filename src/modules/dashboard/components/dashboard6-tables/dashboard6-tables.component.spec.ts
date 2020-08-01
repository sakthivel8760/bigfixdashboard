import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard6TablesComponent } from './dashboard6-tables.component';

describe('Dashboard6TablesComponent', () => {
  let component: Dashboard6TablesComponent;
  let fixture: ComponentFixture<Dashboard6TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard6TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard6TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
