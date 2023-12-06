package com.shreyans.BugTracking.controller;

import com.shreyans.BugTracking.entity.IssueDetails;
import com.shreyans.BugTracking.service.IssueDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/issue-track")
public class IssueTrackController {

    @Autowired
    IssueDetailsService issueDetailsService;

    @PostMapping(value = "/saveIssue")
    public void saveIssueDetails(@RequestBody IssueDetails issueDetails){
        issueDetailsService.saveIssueDetails(issueDetails);
    }

    @GetMapping(value="/getIssueList")
    public List<IssueDetails> getIssueDetailsList(){
            return issueDetailsService.getIssueDetailsList();
    }


}
