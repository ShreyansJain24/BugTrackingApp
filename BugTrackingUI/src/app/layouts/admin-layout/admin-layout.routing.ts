import { Routes } from '@angular/router';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { IssueRaisedListComponent } from 'app/modules/issue-tracking/issue-raised-list/issue-raised-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'issue-traking',  component: IssueRaisedListComponent },
];
