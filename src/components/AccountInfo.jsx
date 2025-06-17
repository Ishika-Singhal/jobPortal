"use client";
import {
  candidateOnboardFormContols,
  initialCandidateAccountFormData,
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils";
import React, { useEffect, useState } from "react";
import CommonForm from "./CommonForm";
import { UpdateProfile } from "@/actions";

const AccountInfo = ({ profileInfo }) => {
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateAccountFormData
  );
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );

  useEffect(() => {
    if (profileInfo.role === "recruiter")
      setRecruiterFormData(profileInfo?.recruiterInfo);

    if (profileInfo.role === "candidate")
      setCandidateFormData(profileInfo?.candidateInfo);
  }, [profileInfo]);

  async function UpdateProfileAction() {
    await UpdateProfile(
      profileInfo.role === "candidate"
        ? {
            userId: profileInfo?.userId,
            role: profileInfo?.role,
            email: profileInfo?.email,
            isPremiumUser: profileInfo?.isPremiumUser,
            memberShipType: profileInfo?.memberShipType,
            memberShipStartDat: profileInfo?.memberShipStartDat,
            memberShipEndDate: profileInfo?.memberShipEndDate,
            candidateInfo: {
              ...candidateFormData,
              resume: profileInfo?.candidateInfo?.resume,
            },
            _id: profileInfo?._id,
          }
        : {
            userId: profileInfo?.userId,
            role: profileInfo?.role,
            email: profileInfo?.email,
            isPremiumUser: profileInfo?.isPremiumUser,
            memberShipType: profileInfo?.memberShipType,
            memberShipStartDat: profileInfo?.memberShipStartDat,
            memberShipEndDate: profileInfo?.memberShipEndDate,
            recruiterInfo: { ...recruiterFormData },
            id: profileInfo?._id,
          },
      "/account"
    );
  }
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex items-baseline justify-between pb-6 border-b pt-24">
        <h1 className="text-4xl font-bold tracking-tight text-gray-950">
          Account Details
        </h1>
      </div>
      <div className="py-10 pb-24 pt-6">
        <div className="container mx-auto p-0 space-y-8">
          <CommonForm
            formControls={
              profileInfo.role === "candidate"
                ? candidateOnboardFormContols.filter(
                    (formControl) => formControl.name !== "resume"
                  )
                : recruiterOnboardFormControls
            }
            formData={
              profileInfo.role === "candidate"
                ? candidateFormData
                : recruiterFormData
            }
            setFormData={
              profileInfo.role === "candidate"
                ? setCandidateFormData
                : setRecruiterFormData
            }
            buttonText={"Update Profile"}
            action={UpdateProfileAction}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
