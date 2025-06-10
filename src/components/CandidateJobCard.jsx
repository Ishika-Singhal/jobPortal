"use client";

import { useState } from "react";
import CommonCard from "./CommonCard";
import JobIcon from "./JobIcon";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { createJobApplication } from "@/actions";

const CandidateJobCard = ({ jobItem, keys, profileInfo, jobApplication }) => {
  const [showJobDetailsDrawer, setShowJobDetailsDrawer] = useState(false);



  async function handleJobApply() {
    await createJobApplication(
      {
        recruiterUserID: jobItem?.recruiterId,
        name: profileInfo?.candidateInfo?.name,
        email: profileInfo?.email,
        candidateUserId: profileInfo?.userId,
        status: ["Applied"],
        jobID: jobItem?._id,
        jobApplicationDate: new Date().toLocaleDateString(),
      },
      "/jobs"
    );
    setShowJobDetailsDrawer(false);
  }

  return (
    <div key={keys}>
      <Drawer
        onOpenChange={setShowJobDetailsDrawer}
        open={showJobDetailsDrawer}
      >
        <CommonCard
          icon={<JobIcon />}
          title={jobItem?.title}
          description={jobItem?.description}
          footerContent={
            <Button
              className="flex h-11 items-center justify-center px-5"
              onClick={() => setShowJobDetailsDrawer(true)}
            >
              View Details
            </Button>
          }
        />
        <DrawerContent className="p-6">
          <DrawerHeader className="px-0">
            <div className="flex justify-between">
              <DrawerTitle className="text-4xl font-extrabold text-gray-800">
                {jobItem?.title}
              </DrawerTitle>
              <div className="flex gap-3">
                <Button
                  disabled={
                    jobApplication?.findIndex(
                      (item) => item.jobID === jobItem?._id
                    ) > -1
                      ? true
                      : false
                  }
                  className="disabled:opacity-65 flex h-11 items-center justify-center px-5"
                  onClick={handleJobApply}
                >
                  {jobApplication?.findIndex(
                    (item) => item?.jobID === jobItem?._id
                  ) > -1
                    ? "Applied"
                    : "Apply"}
                </Button>
                <Button
                  className=" flex h-11 items-center justify-center px-5"
                  onClick={() => setShowJobDetailsDrawer(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DrawerHeader>
          <DrawerDescription className="text-2xl font-medium text-gray-600">
            {jobItem?.description}
            <span className="text-xl font-normal text-gray-500 ml-4">
              {jobItem?.location}
            </span>
          </DrawerDescription>
          <div className="w-[150px] mt-6 flex justify-center items-center h-[40px] bg-black rounded-[4px]">
            <h2 className="text-xl font-bold text-white">{jobItem?.type}</h2>
          </div>
          <h3 className="text-2xl font-medium text-black mt-3">
            {jobItem.experience} years
          </h3>
          <div className="flex gap-4 mt-6">
            {jobItem?.skills.split("," || " " || "and").map((skillItem) => (
              <div className="w-[100px] flex justify-center items-center h-[35px] dark:bg-white  bg-black rounded-[4px]">
                <h2 className="text-[13px] font-medium text-white dark:text-black ">
                  {skillItem}
                </h2>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CandidateJobCard;
