import { IssueDetailsService } from './../../../services/issue-details.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueDetails } from './../../../model/issue-details';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'app/services/notification.service';

@Component({
  selector: 'app-issue-raise',
  templateUrl: './issue-raise.component.html',
  styleUrls: ['./issue-raise.component.css']
})
export class IssueRaiseComponent implements OnInit {

  issueform: FormGroup;
  pageType: string;
  issueObj: IssueDetails;
  types: string[] = ['Feature', 'Bug', 'Documentation'];
  priorities: string[] = ['Low', 'Medium', 'High'];

  constructor(private fb: FormBuilder, private notify: NotificationService,
    private issueService: IssueDetailsService,
    private dialogRef: MatDialogRef<IssueRaiseComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.createForm();
    this.getParentData();
    
  }

  getParentData() {
    this.pageType = this.data.type;
    if (this.pageType === 'EDIT') {
      this.issueObj = this.data.issue;
      console.log(this.issueObj);
      this.patchFormValue();
    } else {
      this.issueObj = new IssueDetails();
    }
  }


  createForm() {
    this.issueform = this.fb.group({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
    });
  }
  patchFormValue(){
    this.issueform.patchValue({
      title: this.issueObj.title,
      description: this.issueObj.description,
      type: this.issueObj.type,
      priority: this.issueObj.priority,
    })
  }


  update() {
    this.issueObj.title = this.issueform.controls.title.value;
    this.issueObj.description = this.issueform.controls.description.value;
    this.issueObj.type = this.issueform.controls.type.value;
    this.issueObj.priority = this.issueform.controls.priority.value;
  }
  submit() {
    this.update();
    if (this.issueform.valid) {
      this.issueService.saveIssueDetails(this.issueObj).subscribe((data) => {
        this.notify.showNotification('Issue raised successfully', 'success');
        this.close();
      }, (error) => {
        this.notify.showNotification('Issue not raised', 'danger');
      })
    }
  }

  close() {
    this.dialogRef.close();
  }


}
