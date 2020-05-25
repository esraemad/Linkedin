import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayknowListComponent } from './mayknow-list.component';

describe('MayknowListComponent', () => {
  let component: MayknowListComponent;
  let fixture: ComponentFixture<MayknowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayknowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayknowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
