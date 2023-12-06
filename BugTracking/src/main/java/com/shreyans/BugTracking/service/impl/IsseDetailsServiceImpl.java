package com.shreyans.BugTracking.service.impl;

import com.shreyans.BugTracking.entity.IssueDetails;
import com.shreyans.BugTracking.repository.IssueDetailsRepository;
import com.shreyans.BugTracking.service.IssueDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IsseDetailsServiceImpl implements IssueDetailsService {

    @Autowired
    IssueDetailsRepository issueDetailsRepository;

    @Override
    public void saveIssueDetails(IssueDetails issueDetails) {
        issueDetailsRepository.save(issueDetails);
    }

    @Override
    public List<IssueDetails> getIssueDetailsList() {
        return issueDetailsRepository.findAll();
    }
}
