import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStep1Component } from './post-step1.component';

describe('PostStep1Component', () => {
  let component: PostStep1Component;
  let fixture: ComponentFixture<PostStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
