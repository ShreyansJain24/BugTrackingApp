import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueRaisedListComponent } from './issue-raised-list.component';

describe('IssueRaisedListComponent', () => {
  let component: IssueRaisedListComponent;
  let fixture: ComponentFixture<IssueRaisedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueRaisedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueRaisedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
