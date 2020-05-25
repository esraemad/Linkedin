import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitatonItemComponent } from './invitaton-item.component';

describe('InvitatonItemComponent', () => {
  let component: InvitatonItemComponent;
  let fixture: ComponentFixture<InvitatonItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitatonItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitatonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
