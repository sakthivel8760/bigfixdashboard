import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsHorbarComponent } from './charts-horbar.component';

describe('ChartsHorbarComponent', () => {
  let component: ChartsHorbarComponent;
  let fixture: ComponentFixture<ChartsHorbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsHorbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsHorbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
