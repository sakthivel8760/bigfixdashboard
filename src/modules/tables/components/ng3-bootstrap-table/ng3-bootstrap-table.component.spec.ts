import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng3BootstrapTableComponent } from './ng3-bootstrap-table.component';

describe('Ng3BootstrapTableComponent', () => {
  let component: Ng3BootstrapTableComponent;
  let fixture: ComponentFixture<Ng3BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng3BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng3BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
