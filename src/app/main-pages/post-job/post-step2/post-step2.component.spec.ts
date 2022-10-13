import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostStep2Component } from './post-step2.component';

describe('PostStep2Component', () => {
  let component: PostStep2Component;
  let fixture: ComponentFixture<PostStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
