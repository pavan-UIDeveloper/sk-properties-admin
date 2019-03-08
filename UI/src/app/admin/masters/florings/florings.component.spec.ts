import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloringsComponent } from './florings.component';

describe('FloringsComponent', () => {
  let component: FloringsComponent;
  let fixture: ComponentFixture<FloringsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloringsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloringsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
