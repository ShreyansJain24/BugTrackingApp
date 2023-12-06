import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IssueRaiseComponent } from '../issue-raise/issue-raise.component';
import { IssueDetails } from 'app/model/issue-details';
import { IssueDetailsService } from 'app/services/issue-details.service';


@Component({
  selector: 'app-issue-raised-list',
  templateUrl: './issue-raised-list.component.html',
  styleUrls: ['./issue-raised-list.component.css']
})
export class IssueRaisedListComponent implements OnInit {
  issueList: Array<IssueDetails>;
  displayedColumns: string[] = ['id', 'title', 'type', 'priority', 'edit'];
  dataSource: MatTableDataSource<IssueDetails>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private issueService: IssueDetailsService) {
    this.dataSource = new MatTableDataSource<IssueDetails>([]);
  }

  ngOnInit(): void {
    this.getIssueDetailsList();
  }

  getIssueDetailsList() {
    this.issueService.getIssueDetailsList().subscribe((data) => {
      this.dataSource.data = data;
    }, (error) => {
    });
  }

  raiseIssue(type:string,issue?:IssueDetails): void {
    const dialogRef = this.dialog.open(IssueRaiseComponent, {
      //  const dialogRef= this.dialog.open(DevloperProfileComponent,{
      width: '50%',
      height: '60%',
      data: {
        type:type,
        issue:issue,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getIssueDetailsList();
    });
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



}

