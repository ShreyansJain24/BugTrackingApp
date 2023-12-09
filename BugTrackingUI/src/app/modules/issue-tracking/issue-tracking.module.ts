import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IssueRaiseComponent } from './issue-raise/issue-raise.component';
import { IssueRaisedListComponent } from './issue-raised-list/issue-raised-list.component';
import { NotificationService } from 'app/services/notification.service';
import { IssueDetailsService } from 'app/services/issue-details.service';



@NgModule({
  declarations: [
    IssueRaiseComponent, IssueRaisedListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule, 
    MatPaginatorModule,
    MatDialogModule,
    MatRadioModule,
  ],
  providers:[NotificationService,IssueDetailsService]
})
export class IssueTrackingModule { }
