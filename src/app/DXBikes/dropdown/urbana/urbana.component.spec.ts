import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanaComponent } from './urbana.component';

describe('UrbanaComponent', () => {
  let component: UrbanaComponent;
  let fixture: ComponentFixture<UrbanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrbanaComponent]
    });
    fixture = TestBed.createComponent(UrbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
