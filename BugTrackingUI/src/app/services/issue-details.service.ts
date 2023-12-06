import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IssueDetails } from 'app/model/issue-details';
import { API_GET_ISSUE_DETAILS_LIST, API_SAVE_ISSUE_DETAILS } from 'app/util/service-url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueDetailsService {

  constructor(private http:HttpClient) { }

  saveIssueDetails(issueDetails:IssueDetails):Observable<any>{
    return this.http.post<any>(API_SAVE_ISSUE_DETAILS,issueDetails);
  }
  getIssueDetailsList():Observable<any>{
    return this.http.get<any>(API_GET_ISSUE_DETAILS_LIST)
  }


}
