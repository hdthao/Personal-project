import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJob } from './list-job.component';

describe('ListJob', () => {
  let component: ListJob;
  let fixture: ComponentFixture<ListJob>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListJob ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListJob);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
