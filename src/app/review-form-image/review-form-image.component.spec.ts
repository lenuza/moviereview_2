import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFormImageComponent } from './review-form-image.component';

describe('ReviewFormImageComponent', () => {
  let component: ReviewFormImageComponent;
  let fixture: ComponentFixture<ReviewFormImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFormImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
