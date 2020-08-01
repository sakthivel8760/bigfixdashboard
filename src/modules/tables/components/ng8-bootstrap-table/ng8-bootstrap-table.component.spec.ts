import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng8BootstrapTableComponent } from './ng8-bootstrap-table.component';

describe('Ng8BootstrapTableComponent', () => {
  let component: Ng8BootstrapTableComponent;
  let fixture: ComponentFixture<Ng8BootstrapTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng8BootstrapTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng8BootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
