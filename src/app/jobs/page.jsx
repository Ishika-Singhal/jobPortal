import {
  createFilterCategory,
  fetchApplicationForCandidate,
  fetchApplicationForRecruiter,
  fetchJobForCandidate,
  fetchJobForRecruiter,
  fetchProfile,
} from "@/actions";
import JobListing from "@/components/JobListing";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async ({searchParams}) => {
  const user = await currentUser();
  const profileInfo = await fetchProfile(user?.id);

  const jobList =
    profileInfo?.role === "candidate"
      ? await fetchJobForCandidate(searchParams)
      : await fetchJobForRecruiter(user?.id);

  const jobApplication =
    profileInfo?.role === "candidate"
      ? await fetchApplicationForCandidate(user?.id)
      : await fetchApplicationForRecruiter(user?.id);

  const fetchfiltercategories = await createFilterCategory();
    

  return (
    <JobListing
      user={JSON.parse(JSON.stringify(user))}
      profileInfo={profileInfo}
      jobList={jobList}
      jobApplication ={jobApplication}
      filterCategories={fetchfiltercategories}

    />
  );
};

export default page;
