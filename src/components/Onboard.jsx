"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import CommonForm from "./CommonForm";
import {
  candidateOnboardFormContols,
  initialCandidateFormData,
  initialRecruiterFormData,
  recruiterOnboardFormControls,
} from "@/utils";

const Onboard = () => {
  const [currentTab, sercurrentTab] = useState("candidate");
  const [recruiterFormData, setRecruiterFormData] = useState(
    initialRecruiterFormData
  );
  const [candidateFormData, setCandidateFormData] = useState(
    initialCandidateFormData
  );

  function handleTabChange(tab) {
    sercurrentTab(tab);
  }

  function handleRecruiterFormValid() {
    return (
      recruiterFormData &&
      recruiterFormData.name.trim() !== "" &&
      recruiterFormData.companyName.trim() !== "" &&
      recruiterFormData.companyRole.trim() !== ""
    );
  }
  return (
    <div className="bg-white">
      <Tabs value={currentTab} onValueChange={handleTabChange}>
        <div className="w-full">
          <div className="flex items-baseline justify-between border-b pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Welcome to onboarding
            </h1>
            <TabsList>
              <TabsTrigger value="candidate">Candidate</TabsTrigger>
              <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value={"candidate"}></TabsContent>
        <TabsContent value="candidate">
          <CommonForm
            formData={candidateFormData}
            setFormData={setCandidateFormData}
            formControls={candidateOnboardFormContols}
            buttonText={"Onboard as a candidate"}
          />
        </TabsContent>
        <TabsContent value="recruiter">
          <CommonForm
            formControls={recruiterOnboardFormControls}
            buttonText={"Onboard as recruiter"}
            formData={recruiterFormData}
            setFormData={setRecruiterFormData}
            isBtnDisabled={!handleRecruiterFormValid()}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Onboard;
