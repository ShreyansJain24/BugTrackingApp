import { Routes } from '@angular/router';
import { AboutMeComponent } from 'app/components/about-me/about-me.component';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';

import { IssueRaisedListComponent } from 'app/modules/issue-tracking/issue-raised-list/issue-raised-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'issue-traking',  component: IssueRaisedListComponent },
    { path: 'about-me',  component: AboutMeComponent },
];
