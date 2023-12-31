import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table'  
import {MatSortModule} from '@angular/material/sort'
import {MatDialogModule } from '@angular/material/dialog'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import { IssueTrackingModule } from 'app/modules/issue-tracking/issue-tracking.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
    MatListModule,
    IssueTrackingModule,
  ],
  declarations: [
  ]
})

export class AdminLayoutModule {}
