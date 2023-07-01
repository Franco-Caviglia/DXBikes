import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMXComponent } from './bmx.component';

describe('BMXComponent', () => {
  let component: BMXComponent;
  let fixture: ComponentFixture<BMXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BMXComponent]
    });
    fixture = TestBed.createComponent(BMXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
