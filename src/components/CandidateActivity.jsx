"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CommonCard from "./CommonCard";
import JobIcon from "./JobIcon";

const CandidateActivity = ({ jobList, jobApplicant }) => {
  const uniqueStatusArray = [
    ...new Set(
      jobApplicant.map((jobApplicantItem) => jobApplicantItem.status).flat(1)
    ),
  ];
  console.log(jobApplicant);
  console.log(jobList);
  console.log(uniqueStatusArray);
  return (
    <div className="mx-auto max-w-7xl">
      <Tabs default="Applied" className="w-full">
        <div className="flex items-baseline justify-between border-b pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-950">
            Your Activity
          </h1>
          <TabsList>
            {uniqueStatusArray.map((status) => (
              <TabsTrigger value={status}>{status}</TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="pb-24 pt-6">
          <div className="container mx-auto p-0 space-y-8">
            <div className="flex flex-col gap-4">
              {uniqueStatusArray.map((status) => (
                <TabsContent value={status}>
                  {jobList
                    .filter(
                      (jobItem) =>
                        jobApplicant
                          .filter(
                            (jobApplicantItem) =>
                              jobApplicantItem.status.indexOf(status) > -1
                          )
                          .findIndex(
                            (filteredItemByStatus) =>
                              jobItem._id === filteredItemByStatus.jobID
                          ) > -1
                    )
                    .map((finalfilteredItem) => (
                      <CommonCard
                        icon={JobIcon}
                        title={finalfilteredItem?.title}
                        description={finalfilteredItem?.description}
                      />
                    ))}
                </TabsContent>
              ))}
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default CandidateActivity;
