"use client";

const CandidateList = (
  currentCandidateDetails,
  setCurrentCandidateDetails,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
  jobApplication
) => {
    console.log(jobApplication);
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {jobApplication && jobApplication.length > 0
          ? jobApplication.map((jobApplicationItem) => (
              <div className="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
                <div className="px-4 my-6 flex justify-between items-center">
                  <h3 className="text-lg font-bold">
                    {jobApplicationItem.name}
                  </h3>
                  <button className="disabled:opacity-65 flex h-11 items-center justify-center px-5">
                    View Profile
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default CandidateList;
