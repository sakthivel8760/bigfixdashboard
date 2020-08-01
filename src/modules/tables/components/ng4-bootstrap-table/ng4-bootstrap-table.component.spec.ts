import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4BootstrapTableComponent } from './ng4-bootstrap-table.component';

describe('Ng4BootstrapTableComponent', () => {
  let component: Ng4BootstrapTableComponent;
  let fixture: ComponentFixture<Ng4BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng4BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
