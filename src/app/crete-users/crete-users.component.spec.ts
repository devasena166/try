import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteUsersComponent } from './crete-users.component';

describe('CreteUsersComponent', () => {
  let component: CreteUsersComponent;
  let fixture: ComponentFixture<CreteUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
