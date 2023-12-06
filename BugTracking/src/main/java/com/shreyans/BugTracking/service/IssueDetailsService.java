package com.shreyans.BugTracking.service;

import com.shreyans.BugTracking.entity.IssueDetails;

import java.util.List;

public interface IssueDetailsService {

    void saveIssueDetails(IssueDetails issueDetails);

    List<IssueDetails> getIssueDetailsList();
}
