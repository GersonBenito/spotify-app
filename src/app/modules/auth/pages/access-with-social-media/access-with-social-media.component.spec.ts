import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessWithSocialMediaComponent } from './access-with-social-media.component';

describe('AccessWithSocialMediaComponent', () => {
  let component: AccessWithSocialMediaComponent;
  let fixture: ComponentFixture<AccessWithSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessWithSocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessWithSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
