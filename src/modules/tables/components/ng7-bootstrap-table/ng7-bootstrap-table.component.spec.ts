import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7BootstrapTableComponent } from './ng7-bootstrap-table.component';

describe('Ng7BootstrapTableComponent', () => {
  let component: Ng7BootstrapTableComponent;
  let fixture: ComponentFixture<Ng7BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
