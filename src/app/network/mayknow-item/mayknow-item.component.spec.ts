import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayknowItemComponent } from './mayknow-item.component';

describe('MayknowItemComponent', () => {
  let component: MayknowItemComponent;
  let fixture: ComponentFixture<MayknowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayknowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayknowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
