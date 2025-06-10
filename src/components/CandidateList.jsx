"use client";

import { getCandidateDetailsById, updateJobApplication } from "@/actions";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const CandidateList = ({
  currentCandidateDetails,
  setCurrentCandidateDetails,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
  jobApplication,
}) => {
  async function handleFetchCandidateDetails(id) {
    const data = await getCandidateDetailsById(id);
    if (data) {
      setCurrentCandidateDetails(data);
    }
    setShowCurrentCandidateDetailsModal(true);
  }

  async function handleUpdateJobStatus(currentstatus) {
    let cpyjobApplicants = [...jobApplication];
    console.log(cpyjobApplicants);
    const indexOfCurrentJobApplicant = cpyjobApplicants.findIndex(
      (item) =>
        item.
candidateUserId === currentCandidateDetails?.userId
    );

    const jobApplicanToUpdate = {
      ...cpyjobApplicants[indexOfCurrentJobApplicant],
      status : cpyjobApplicants[indexOfCurrentJobApplicant].status.concat(currentstatus)
    }
    
    await updateJobApplication(jobApplicanToUpdate , '/jobs')
  }

  async function handlePreviewResume() {
    const { data } = await supabase.storage
      .from("jobportal")
      .getPublicUrl(currentCandidateDetails?.candidateInfo?.resume);
    const a = document.createElement("a");
    a.href = data?.publicUrl;

    a.setAttribute("download", "Resume.pdf");
    a.setAttribute("target", "_blank");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-3 p-10 md:grid-cols-2 lg:grid-cols-3">
        {jobApplication && jobApplication.length > 0
          ? jobApplication.map((jobApplicationItem) => (
              <div className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold">
                    {jobApplicationItem?.name}
                  </h3>
                  <Button
                    className="disabled:opacity-65 flex h-11 items-center justify-center px-5"
                    onClick={() =>
                      handleFetchCandidateDetails(
                        jobApplicationItem?.candidateUserId
                      )
                    }
                  >
                    View Profile
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>

      <Dialog
        open={showCurrentCandidateDetailsModal}
        onOpenChange={() => {
          setShowCurrentCandidateDetailsModal(false);
          setCurrentCandidateDetails(null);
        }}
      >
        <DialogContent>
          <div>
            <h1 className="text-2xl font-bold dark:text-white text-black">
              {currentCandidateDetails?.candidateInfo?.name},{" "}
              {currentCandidateDetails?.email}
            </h1>
            <p className="text-xl font-medium dark:text-white text-black">
              {currentCandidateDetails?.candidateInfo?.currentCompany}
            </p>
            <p className="text-sm font-normal dark:text-white text-black">
              {currentCandidateDetails?.candidateInfo?.currentJobLocation}
            </p>
            <p className="dark:text-white">
              Total Experience:
              {currentCandidateDetails?.candidateInfo?.totalExperience} Years
            </p>
            <p className="dark:text-white">
              Salary: {currentCandidateDetails?.candidateInfo?.currentSalary}{" "}
              LPA
            </p>
            <p className="dark:text-white">
              Notice Period:{" "}
              {currentCandidateDetails?.candidateInfo?.noticePeriod} Days
            </p>
            <div className="flex items-center gap-4 mt-6">
              <h1 className="dark:text-white">Previous Companies</h1>
              <div className="flex flex-wrap items-center gap-4 mt-6">
                {currentCandidateDetails?.candidateInfo?.previousCompanies
                  ?.split(",")
                  .map((skillItem) => (
                    <div className="w-[100px] dark:bg-white flex justify-center items-center h-[35px] bg-black rounded-[4px]">
                      <h2 className="text-[13px]  dark:text-black font-medium text-white">
                        {skillItem}
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              {currentCandidateDetails?.candidateInfo?.skills
                ?.split(",")
                .map((skillItem) => (
                  <div className="w-[100px] dark:bg-white flex justify-center items-center h-[35px] bg-black rounded-[4px]">
                    <h2 className="text-[13px] dark:text-black font-medium text-white">
                      {skillItem}
                    </h2>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={handlePreviewResume}
              className=" flex h-11 items-center justify-center px-5"
            >
              Resume
            </Button>
            <Button
              onClick={() => handleUpdateJobStatus("selected")}
              className=" disabled:opacity-65 flex h-11 items-center justify-center px-5"
              disabled={
                jobApplication
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplication
                  .find(
                    (item) =>
                      item.candidateUserID === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplication
                .find(
                  (item) =>
                    item.candidateUserId === currentCandidateDetails?.userId
                )
                ?.status.includes("selected")
                ? "Selected"
                : "Select"}
            </Button>
            <Button
              onClick={() => handleUpdateJobStatus("rejected")}
              className=" disabled:opacity-65 flex h-11 items-center justify-center px-5"
              disabled={
                jobApplication
                  .find(
                    (item) =>
                      item.candidateUserId === currentCandidateDetails?.userId
                  )
                  ?.status.includes("selected") ||
                jobApplication
                  .find(
                    (item) =>
                      item.candidateUserId === currentCandidateDetails?.userId
                  )
                  ?.status.includes("rejected")
                  ? true
                  : false
              }
            >
              {jobApplication
                .find(
                  (item) =>
                    item.candidateUserID === currentCandidateDetails?.userId
                )
                ?.status.includes("rejected")
                ? "Rejected"
                : "Reject"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CandidateList;
