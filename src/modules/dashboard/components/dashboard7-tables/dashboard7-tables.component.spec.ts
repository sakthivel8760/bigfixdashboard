import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboard7TablesComponent } from './dashboard7-tables.component';

describe('Dashboard7TablesComponent', () => {
  let component: Dashboard7TablesComponent;
  let fixture: ComponentFixture<Dashboard7TablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard7TablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard7TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
