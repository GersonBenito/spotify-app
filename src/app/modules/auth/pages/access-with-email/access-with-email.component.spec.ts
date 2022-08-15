import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessWithEmailComponent } from './access-with-email.component';

describe('AccessWithEmailComponent', () => {
  let component: AccessWithEmailComponent;
  let fixture: ComponentFixture<AccessWithEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessWithEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessWithEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
