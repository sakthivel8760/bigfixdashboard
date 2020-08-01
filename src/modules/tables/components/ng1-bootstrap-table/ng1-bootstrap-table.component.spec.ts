import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng1BootstrapTableComponent } from './ng1-bootstrap-table.component';

describe('Ng1BootstrapTableComponent', () => {
  let component: Ng1BootstrapTableComponent;
  let fixture: ComponentFixture<Ng1BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng1BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng1BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
