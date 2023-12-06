package com.shreyans.BugTracking.repository;

import com.shreyans.BugTracking.entity.IssueDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IssueDetailsRepository extends JpaRepository<IssueDetails,Long> {

}
