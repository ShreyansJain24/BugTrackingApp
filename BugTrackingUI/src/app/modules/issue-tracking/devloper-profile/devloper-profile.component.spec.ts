import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevloperProfileComponent } from './devloper-profile.component';

describe('DevloperProfileComponent', () => {
  let component: DevloperProfileComponent;
  let fixture: ComponentFixture<DevloperProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevloperProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevloperProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
