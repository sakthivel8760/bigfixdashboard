import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng5BootstrapTableComponent } from './ng5-bootstrap-table.component';

describe('Ng5BootstrapTableComponent', () => {
  let component: Ng5BootstrapTableComponent;
  let fixture: ComponentFixture<Ng5BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng5BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng5BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
