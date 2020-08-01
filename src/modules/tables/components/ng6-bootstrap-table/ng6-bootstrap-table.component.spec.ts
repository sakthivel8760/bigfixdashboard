import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng6BootstrapTableComponent } from './ng6-bootstrap-table.component';

describe('Ng6BootstrapTableComponent', () => {
  let component: Ng6BootstrapTableComponent;
  let fixture: ComponentFixture<Ng6BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng6BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng6BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
