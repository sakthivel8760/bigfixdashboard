import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2BootstrapTableComponent } from './ng2-bootstrap-table.component';

describe('Ng2BootstrapTableComponent', () => {
  let component: Ng2BootstrapTableComponent;
  let fixture: ComponentFixture<Ng2BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
