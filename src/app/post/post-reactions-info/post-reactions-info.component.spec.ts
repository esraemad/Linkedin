import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReactionsInfoComponent } from './post-reactions-info.component';

describe('PostReactionsInfoComponent', () => {
  let component: PostReactionsInfoComponent;
  let fixture: ComponentFixture<PostReactionsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostReactionsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostReactionsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
