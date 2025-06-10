"use client";

import { useState } from "react";
import CommonCard from "./CommonCard";
import JobIcon from "./JobIcon";
import { Button } from "./ui/button";
import JobApplicants from "./JobApplicants";

const RecruiterJobCard = ({ jobItem, keys, jobApplication }) => {
  const [showApplicantsDrawer, setShowApplicantsDrawer] = useState(false);
  const [currentCandidateDetails, setCurrentCandidateDetails] = useState(null);
  const [
    showCurrentCandidateDetailsModal,
    setShowCurrentCandidateDetailsModal,
  ] = useState(false);

  return (
    <div key={keys}>
      <CommonCard
        icon={<JobIcon />}
        title={jobItem?.title}
        description={jobItem?.description}
        footerContent={
          <Button className="disabled:opacity-55 flex h-11 items-center justify-center px-5" onClick={()=>setShowApplicantsDrawer(true)}
          disabled={
              jobApplication?.filter((item) => item.jobID === jobItem?._id)
                .length === 0
            }>
            {
              jobApplication?.filter((item) => item.jobID === jobItem?._id)
                .length
            }{" "}
            Applicants
          </Button>
        }
      />
      <JobApplicants
        showApplicantsDrawer={showApplicantsDrawer}
        setShowApplicantsDrawer={setShowApplicantsDrawer}
        showCurrentCandidateDetailsModal={showCurrentCandidateDetailsModal}
        setShowCurrentCandidateDetailsModal={
          setShowCurrentCandidateDetailsModal
        }
        currentCandidateDetails={currentCandidateDetails}
        setCurrentCandidateDetails={setCurrentCandidateDetails}
        jobItem={jobItem}
        jobApplication={jobApplication.filter((item) => item.jobID === jobItem?._id)}
      />
    </div>
  );
};

export default RecruiterJobCard;
