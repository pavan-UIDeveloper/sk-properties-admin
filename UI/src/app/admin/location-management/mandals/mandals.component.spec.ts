import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandalsComponent } from './mandals.component';

describe('MandalsComponent', () => {
  let component: MandalsComponent;
  let fixture: ComponentFixture<MandalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
