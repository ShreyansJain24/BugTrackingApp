import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueRaiseComponent } from './issue-raise.component';

describe('IssueRaiseComponent', () => {
  let component: IssueRaiseComponent;
  let fixture: ComponentFixture<IssueRaiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueRaiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueRaiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
