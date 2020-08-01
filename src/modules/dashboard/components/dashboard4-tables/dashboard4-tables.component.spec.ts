import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard4TablesComponent } from './dashboard4-tables.component';

describe('Dashboard4TablesComponent', () => {
  let component: Dashboard4TablesComponent;
  let fixture: ComponentFixture<Dashboard4TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard4TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard4TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
