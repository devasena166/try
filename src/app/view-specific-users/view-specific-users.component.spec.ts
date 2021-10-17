import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecificUsersComponent } from './view-specific-users.component';

describe('ViewSpecificUsersComponent', () => {
  let component: ViewSpecificUsersComponent;
  let fixture: ComponentFixture<ViewSpecificUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecificUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecificUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
