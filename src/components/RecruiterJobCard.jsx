"use client";

import CommonCard from "./CommonCard";
import JobIcon from "./JobIcon";
import { Button } from "./ui/button";

const RecruiterJobCard = ({ jobItem ,keys , profileInfo , jobApplication}) => {
  return (
    <div key={keys}>
      <CommonCard
        
        icon={<JobIcon />}
        title={jobItem?.title}
        description={jobItem?.description}
        footerContent={
          <Button className="flex h-11 items-center justify-center px-5">0 Applicants</Button>
        }
      />
    </div>
  );
};

export default RecruiterJobCard;
